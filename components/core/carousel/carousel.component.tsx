'use client';
import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './carousel-dots-butons.component';
import { PrevButton, NextButton, usePrevNextButtons } from './carousel-arrow-butons.component';
import useEmblaCarousel from 'embla-carousel-react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { cn } from '@/lib/utils';

type Props = ClassNameProps & {
  slides: ReactNode[];
  showDots?: boolean;
  showButtons?: boolean;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<Props> = ({
  slides,
  options,
  className,
  showDots = true,
  showButtons = true
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className={cn('embla', className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      {showButtons && (
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
      <div className="embla__controls">
        {showDots && (
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? 'embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;

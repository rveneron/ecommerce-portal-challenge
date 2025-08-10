'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './carousel-dots-butons.component';
import useEmblaCarousel from 'embla-carousel-react';
import { IProduct } from '@/interfaces/product';
import Image from 'next/image';
import { FALL_BACK_IMAGE } from '@/constants';
import Link from 'next/link';
import styles from './product-carousel.module.css';
import { cn } from '@/lib/utils';

type Props = {
  products: IProduct[];
  options?: EmblaOptionsType;
};

const SmallProductsCarousel: React.FC<Props> = ({ products, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className={cn(styles.container)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product, index) => (
            <div className="embla__slide" key={index}>
              <Link href={`/products/${product.slug}`} className={'embla__slide__link'}>
                <Image
                  src={product?.image?.url || FALL_BACK_IMAGE}
                  alt={product.name}
                  width={product.image?.width || 100}
                  height={product.image?.height || 100}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? 'embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallProductsCarousel;

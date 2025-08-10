import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { Category } from '@/types/category.type';
import Carousel from '@/components/core/carousel/carousel.component';
import CategoryCard from '@/modules/home/components/category-card/category-card.component';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';
import { TProps } from '@/types/t-props.type';

type Props = ClassNameProps & TProps & {
  categories: Category[];
};

const CategoryList = ({ className, categories, t }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="category-section-title">
        {t('common:categorySection.title')}
      </div>
      <Carousel
        slides={categories.map((category: Category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
      />
    </div>
  );
};

export default CategoryList;

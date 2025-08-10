import React from 'react';
import { ClassNameProps } from '@/types/classnames-props.type';
import { Category } from '@/types/category.type';
import Carousel from '@/components/core/carousel/carousel.component';
import CategoryCard from '@/modules/home/components/category-card/category-card.component';

type Props = ClassNameProps & {
  categories: Category[];
};

const CategoryList = ({ className, categories }: Props) => {
  return (
    <div className={className}>
      <Carousel
        slides={categories.map((category: Category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
      />
    </div>
  );
};

export default CategoryList;

import { Category } from '@/types/category.type';
import VitaminasIcon from '@/components/icons/categories/vitamins';
import Painkillers from '@/components/icons/categories/painkillers';
import Antiallergics from '@/components/icons/categories/antiallergics';
import Antipyretic from '@/components/icons/categories/antipyretic';
import Antidiarrheals from '@/components/icons/categories/antidiarrheals';
import Antiulcer from '@/components/icons/categories/antiulcer';
import Antiinfectives from '@/components/icons/categories/antiinfectives';
import Mucolytics from '@/components/icons/categories/mucolytics';

export const getCategoryIcon = (category: Category) => {
  switch (category.order) {
    case 1:
      return <VitaminasIcon />;
    case 2:
      return <Painkillers />;
    case 3:
      return <Antiinfectives />;
    case 4:
      return <Mucolytics />;
    case 5:
      return <Antiulcer />;
    case 6:
      return <Antidiarrheals />;
    case 7:
      return <Antipyretic />;
    case 8:
      return <Antiallergics />;
    default:
      return null;
  }
};

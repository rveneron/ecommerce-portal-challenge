'use client';
import * as React from 'react';
import { memo, useCallback, useMemo, useState } from 'react';
import './styles.css';
import { provinces } from '@/data/provinces';
import { useIsClient } from '@/hooks/use-is-client';
import { CustomInput } from '@/components/ui/custom-input';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ClassNameProps } from '@/types/classnames-props.type';
import { SearchIcon } from 'lucide-react';
import OptionsResponsiveSelect, {
  OptionValue
} from '@/components/core/options-select/options-select.component';
import { Category } from '@/types/category.type';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';

type Props = ClassNameProps & {
  categories: Category[];
};

const SearchBar = ({ className, categories = [] }: Props) => {
  const { t } = useTranslation('common');
  const { push } = useRouter();

  const options: OptionValue[] = useMemo(() => {
    const finalCategories: Category[] = [
      {
        name: t('categorySection.all'),
        slug: '',
        order: 0
      },
      ...categories
    ];
    return finalCategories.map((category) => ({
      label: category.name,
      value: category.slug
    }));
  }, [categories, t]);

  const [selectedOption, setSelectedOption] = useState<OptionValue>(options[0]);
  const [text, setText] = useState<string>('');
  const debounced = useDebounceCallback(setText, 50);
  const isClient = useIsClient();

  const handleChange = (value: string) => {
    const selected = options?.find((option) => option.value === value);
    setSelectedOption(selected || options[0]);
  };

  const handleSearch = useCallback(() => {
    const query = text ? `?q=${encodeURIComponent(text)}` : '';
    console.log('query', ' =>', query);
    push(`/catalog/${selectedOption.value}${query}`);
  }, [push, text, selectedOption]);

  const startAdornment = useMemo(
    () => (
      <OptionsResponsiveSelect
        className={'left-dropdown'}
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
    ),
    [className, options, selectedOption]
  );

  const endAdornment = useMemo(
    () => (
      <Button
        variant={'contained'}
        color={'primary'}
        className={'right-button'}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
    ),
    [className, handleSearch]
  );

  if (!isClient) {
    return null;
  }

  return (
    <CustomInput
      className={cn('global-search-bar', className)}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      value={text}
      onChange={(event) => debounced(event.target.value)}
      placeholder={t('categorySection.findByCategories')}
    />
  );
};

export default memo(SearchBar);

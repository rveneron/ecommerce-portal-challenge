'use client';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/types/breadcrumb.type';
import { ChildrenProps } from '@/types/children-props.type';

type ContextProps = {
  initialBreadcrumbs: Breadcrumb[];
  breadcrumbs: Breadcrumb[];
  replaceBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
};

const BreadcrumbsAppContext = createContext<ContextProps>({
  initialBreadcrumbs: [],
  breadcrumbs: [],
  replaceBreadcrumbs: () => {}
});

type Props = ChildrenProps;

export const areBreadcrumbsEqual = (a: Breadcrumb[], b: Breadcrumb[]) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const BreadcrumbsContextProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const breadcrumbsArray = pathname?.split('/').filter(Boolean);

  // Generate initial breadcrumbs
  const initialBreadcrumbs = useMemo(() => {
    return (
      breadcrumbsArray?.map((crumb, index) => {
        const path = `/${breadcrumbsArray.slice(0, index + 1).join('/')}`;
        return {
          label: decodeURIComponent(crumb).replace(/-/g, ' '),
          path: index === breadcrumbsArray.length - 1 ? pathname : path
        };
      }) || []
    );
  }, [pathname, breadcrumbsArray]);

  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  const replaceBreadcrumbs = useCallback((newBreadcrumbs: Breadcrumb[]) => {
    setBreadcrumbs(newBreadcrumbs);
  }, []);

  return (
    <BreadcrumbsAppContext.Provider
      value={{
        initialBreadcrumbs,
        breadcrumbs,
        replaceBreadcrumbs
      }}
    >
      {children}
    </BreadcrumbsAppContext.Provider>
  );
};

function useBreadcrumbsProvider() {
  const context = React.useContext(BreadcrumbsAppContext);
  if (context === undefined) {
    throw new Error(
      'useBreadcrumbsAppProvider must be used within a BreadcrumbsAppContextProvider'
    );
  }
  return context;
}

export { BreadcrumbsContextProvider, useBreadcrumbsProvider };

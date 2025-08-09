/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import useToggle from '@/hooks/use-toggle';

type SettingsContextProps = {
  pageLoaded: boolean;
  // eslint-disable-next-line no-unused-vars
  setPageLoaded: (value: boolean) => void;
  isOpenOffers?: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenOffers: () => void;
  // eslint-disable-next-line no-unused-vars
  onCloseOffers: () => void;
};

// Initial state
const initialState = {
  pageLoaded: false,
  setPageLoaded: () => null,
  onOpenOffers: () => null,
  onCloseOffers: () => null
};

// Contexto
const SettingsContext = createContext<SettingsContextProps>(initialState);

type Props = {
  children: ReactNode;
};

// Proveedor
const SettingsContextProvider = ({ children }: Props) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useToggle(false);

  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 10000);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        pageLoaded,
        setPageLoaded,
        isOpenOffers: isOpen,
        onOpenOffers: onOpen,
        onCloseOffers: onClose
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// Hook para usar el contexto
function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsContextProvider');
  }
  return context;
}

export { SettingsContextProvider, useSettings };

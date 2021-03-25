import React, { createContext, useContext, useState } from 'react';

const AlertsContext = createContext();

export const AlertsProvider = ({ store, children }) => (
  <AlertsContext.Provider value={store}>{children}</AlertsContext.Provider>
);

export const useAlertsContext = () => useContext(AlertsContext);

export function AlertsStoreInitializer() {
  const [hasFatalError, setHasFatalError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return {
    hasFatalError,
    setHasFatalError,
    isLoading,
    setIsLoading,
  };
}

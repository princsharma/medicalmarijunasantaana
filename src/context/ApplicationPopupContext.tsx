"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ApplicationPopupContextValue = {
  isOpen: boolean;
  openApplication: () => void;
  closeApplication: () => void;
};

const ApplicationPopupContext = createContext<ApplicationPopupContextValue | null>(null);

export function ApplicationPopupContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openApplication = useCallback(() => setIsOpen(true), []);
  const closeApplication = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openApplication, closeApplication }),
    [isOpen, openApplication, closeApplication]
  );

  return (
    <ApplicationPopupContext.Provider value={value}>
      {children}
    </ApplicationPopupContext.Provider>
  );
}

export function useApplicationPopup() {
  const context = useContext(ApplicationPopupContext);
  if (!context) {
    throw new Error("useApplicationPopup must be used within ApplicationPopupContextProvider");
  }
  return context;
}

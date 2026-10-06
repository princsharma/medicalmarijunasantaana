"use client";

import { useEffect } from "react";
import { PopUpApplication } from "@/components/sections/PopUpApplication";
import {
  ApplicationPopupContextProvider,
  useApplicationPopup,
} from "@/context/ApplicationPopupContext";

const APPLY_LINK_SELECTOR = 'a[href="#apply"], a[href="/#apply"]';

function ApplicationPopupTriggers() {
  const { openApplication } = useApplicationPopup();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest(APPLY_LINK_SELECTOR);
      if (!link) return;

      e.preventDefault();
      openApplication();
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openApplication]);

  useEffect(() => {
    if (window.location.hash === "#apply") {
      openApplication();
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, [openApplication]);

  return <PopUpApplication />;
}

export function ApplicationPopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApplicationPopupContextProvider>
      {children}
      <ApplicationPopupTriggers />
    </ApplicationPopupContextProvider>
  );
}

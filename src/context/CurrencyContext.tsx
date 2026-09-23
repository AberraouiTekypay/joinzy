"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "MAD" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (mad: string, eur: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("MAD");

  const formatPrice = (mad: string, eur: string) => {
    if (currency === "MAD") {
      return mad === "Custom" ? "Custom" : `MAD ${mad}`;
    }
    return eur === "Custom" ? "Custom" : `€${eur}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

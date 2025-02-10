import React, { createContext, useContext, useState } from 'react';

type CardContextType = {
  expandedCard: string | null;
  setExpandedCard: (cardId: string | null) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <CardContext.Provider value={{ expandedCard, setExpandedCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
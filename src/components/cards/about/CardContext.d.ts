import React from 'react';
type CardContextType = {
    expandedCard: string | null;
    setExpandedCard: (cardId: string | null) => void;
};
export declare const CardProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useCardContext: () => CardContextType;
export {};

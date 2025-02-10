import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const CardContext = createContext(undefined);
export const CardProvider = ({ children }) => {
    const [expandedCard, setExpandedCard] = useState(null);
    return (_jsx(CardContext.Provider, { value: { expandedCard, setExpandedCard }, children: children }));
};
export const useCardContext = () => {
    const context = useContext(CardContext);
    if (context === undefined) {
        throw new Error('useCardContext must be used within a CardProvider');
    }
    return context;
};

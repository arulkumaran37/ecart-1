import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    return (
        <StoreContext.Provider value={{ cart, setCart, user, setUser }}>
            {children}
        </StoreContext.Provider>
    );
};

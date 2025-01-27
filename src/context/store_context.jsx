import { createContext, useState, useContext } from 'react';

const StoreContext = createContext();

export const useStore = () => {
    return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wishlist, setWishlist] = useState([]);

    return (
        <StoreContext.Provider value={{ user, setUser, wishlist, setWishlist }}>
            {children}
        </StoreContext.Provider>
    );
};

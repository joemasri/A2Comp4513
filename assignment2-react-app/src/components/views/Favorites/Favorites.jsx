import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

// Store favorites in context
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    drivers: [],
    constructors: [],
    circuits: [],
  });

  // Add item to favorites
  const addToFavorites = (category, newItem) => {
    const isAdded = favorites[category].some(item => item === newItem);

    if (!isAdded) {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [category]: [...prevFavorites[category], newItem],
      
    }));
    return true;
   }
    return false;
  };

  // Clear favorites
  const emptyFavorites = () => {
    setFavorites({
      drivers: [],
      constructors: [],
      circuits: [],
    });
  };

  // Provide favorites context
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, emptyFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

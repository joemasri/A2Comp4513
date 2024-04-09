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
  const addToFavorites = (category, item) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [category]: [...prevFavorites[category], item],
    }));
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

import React, { useContext } from 'react';
import { FavoritesContext } from '../Favorites/Favorites';

const FavoritesModal = ({ isOpen, onClose }) => {
    const { favorites, emptyFavorites } = useContext(FavoritesContext);
  
    // If the modal is not open, return null
    if (!isOpen) return null;
  
    return (
        // Modal component
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-3xl mx-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Favorites</h2>
            <button onClick={onClose}className="bg-gray-200 text-gray-600 rounded px-4 py-2 hover:bg-gray-300">Close</button>
          </div>
          <div className="p-4 grid grid-cols-3 gap-4">
            
            {/* Drivers list */}
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="font-semibold mb-2">Drivers</h3>
              <ul>
                {favorites.drivers.map((name, index) => (
                  <li key={index} className="border-b last:border-b-0 p-1">{name}</li>
                ))}
              </ul>
            </div>
  
            {/* Constructors list */}
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="font-semibold mb-2">Constructors</h3>
              <ul>
                {favorites.constructors.map((name, index) => (
                  <li key={index} className="border-b last:border-b-0 p-1">{name}</li>
                ))}
              </ul>
            </div>
  
            {/* Circuits list */}
            <div className="bg-gray-100 p-3 rounded">
              <h3 className="font-semibold mb-2">Circuits</h3>
              <ul>
                {favorites.circuits.map((name, index) => (
                  <li key={index} className="border-b last:border-b-0 p-1">{name}</li>
                ))}
              </ul>
            </div>
          </div>

            {/* Clear Favorites button */}
          <div className="flex justify-end p-4 border-t">
            <button onClick={emptyFavorites} className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600">Clear Favorites</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FavoritesModal;
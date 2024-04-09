import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../views/Favorites/Favorites";

const CircuitModal = ({ isOpen, onClose, circuit }) => {
    if (!isOpen || !circuit) return null;
    
    const placeholderImage = "https://placehold.co/300x300";
    const { addToFavorites } = useContext(FavoritesContext);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
                <div className="flex justify-between items-start">

                     {/* Left side: Circuit details and actions */}
                     <div className="flex flex-col w-full">
                        <div className="flex justify-between items-center pb-2 border-b-2 mb-4">
                            <h2 className="font-bold text-xl">Circuit Details</h2>
                            
                        </div>
                        <div>
                            <p><strong>Name:</strong> {circuit.name}</p>
                            <p><strong>Location:</strong> {circuit.location}</p>
                            <p><strong>Country:</strong> {circuit.country}</p>
                            <p><strong>URL:</strong> <a href={circuit.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Visit website</a></p>
                        </div>

                        <div className="pt-80">
                            <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
                            <button onClick={() => addToFavorites('circuits', circuit.name)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add Favorites</button>
                        </div>
                    </div>

                    {/* Right side: Circuit image and Map placeholder */}
                    <div className="flex flex-col mr-4">
                        <img src={placeholderImage} alt="Circuit" className="mb-4" />
                        <div className="border-2 border-dashed h-64 w-64 flex items-center justify-center">
                            <p>Map placeholder</p>
                            {/* <LeafletMap /> here */}
                        </div>
                    </div>
                </div>
            </div>


      

        </div>
    );
};

export default CircuitModal;

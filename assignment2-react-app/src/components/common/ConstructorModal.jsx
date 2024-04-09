import React from "react";
import { useContext, useState } from "react";
import { FavoritesContext } from "../views/Favorites/Favorites";
import PopupMessage from "./PopupMsg";

const ConstructorModal = ({ isOpen, onClose, constructor }) => {
    if (!isOpen || !constructor) return null;
   
    // Context for favorites
    const { addToFavorites } = useContext(FavoritesContext);
   
    // State for constructor image
    const [imageSrc, setImageSrc] = useState(constructor.imageUrl || "https://placehold.co/300x300");
    
    // Handle image load error
    const handleImgErr = () => {
        setImageSrc("https://placehold.co/250x250"); //if img fails to load, display this
    };

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // Close popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    
    return (

        // Modal component
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl">
                <div className="flex justify-between items-start">
                    
                    {/* Left side: Constructor details and actions */}
                    <div className="flex flex-col mr-4">
                        <img src={imageSrc} alt="Constructor" className="mb-4" onError={handleImgErr} />
                    </div>

                    {/* Right side: Constructor details and actions */}
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold text-xl mb-4">Constructor Details</h2>
                        <p><strong>Name:</strong> {constructor.name}</p>
                        <p><strong>Nationality:</strong> {constructor.nationality}</p>
                        <p><strong>URL:</strong> <a href={constructor.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Visit Website</a></p>
                        
                        {/* Action buttons */}
                        <div className="mt-4">
                            <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
                            <button
                            onClick={() => {
                                const wasAdded = addToFavorites('constructors', constructor.name); 
                                let message = "Already in Favorites"; // Default message
                                if (wasAdded) {
                                    message = "Added to Favorites"; // Update message if added successfully
                                }
                                setPopupMessage(message); 
                                setShowPopup(true); // Show the popup message
                            }}
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            >Add to Favorites
                            </button>
                            <PopupMessage message={popupMessage} show={showPopup} onClose={handleClosePopup} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        //className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    );
};

export default ConstructorModal;

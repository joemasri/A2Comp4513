// DriverDetailsModal.jsx
import React from "react";
import { useContext, useState } from "react";
import { FavoritesContext } from "../views/Favorites/Favorites";
import PopupMessage from "./PopupMsg";

const DriverDetailsModal = ({ isOpen, onClose, driver }) => {
    if (!isOpen || !driver) return null;
    
    const placeholderImage = "https://placehold.co/300x300"; // Placeholder for the driver image
    const { addToFavorites } = useContext(FavoritesContext);
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
                    
                    {/* Left side: Driver image */}
                    <div className="flex flex-col mr-4">
                        <img src={placeholderImage} alt="Driver" className="mb-4" />
                    </div>

                    {/* Right side: Driver details and actions */}
                    <div className="flex flex-col w-full">
                        <h2 className="font-bold text-xl mb-4">Driver Details</h2>
                        <p><strong>Name:</strong> {driver.name}</p>
                        <p><strong>Date of Birth:</strong> {driver.dob}</p>
                        <p><strong>Nationality:</strong> {driver.nationality}</p>
                        <p><strong>URL:</strong> <a href={driver.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Visit Profile</a></p>
                        
                        {/* Action buttons */}
                        <div className="mt-4">
                            <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
                            <button
                            onClick={() => {
                                const wasAdded = addToFavorites('drivers', driver.name); 
                                let message = "Already in Favorites"; // Default message
                                if (wasAdded) {
                                    message = "Added to Favorites"; // Update message if added successfully
                                }
                                setPopupMessage(message); 
                                setShowPopup(true); // Show the popup message
                            }}
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
    Add to Favorites
</button>
                            <PopupMessage message={popupMessage} show={showPopup} onClose={handleClosePopup} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverDetailsModal;

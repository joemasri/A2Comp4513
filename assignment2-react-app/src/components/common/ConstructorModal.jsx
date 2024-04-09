import React from "react";

const ConstructorModal = ({ isOpen, onClose, constructor }) => {
    if (!isOpen || !constructor) return null;
    
    const placeholderImage = "https://placehold.co/300x300"; // Placeholder image URL for the constructor
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col mr-4">
                        <img src={placeholderImage} alt="Constructor" className="mb-4" />
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold text-xl mb-4">Constructor Details</h2>
                        <p><strong>Name:</strong> {constructor.name}</p>
                        <p><strong>Nationality:</strong> {constructor.nationality}</p>
                        <p><strong>URL:</strong> <a href={constructor.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Visit Website</a></p>
                        <div className="mt-4">
                            <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2">Close</button>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructorModal;

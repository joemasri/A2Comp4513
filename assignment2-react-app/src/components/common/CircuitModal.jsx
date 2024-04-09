import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../views/Favorites/Favorites";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupMessage from "./PopupMsg";
import { useRef, useState } from "react"; 

const CircuitModal = ({ isOpen, onClose, circuit }) => {
    if (!isOpen || !circuit) return null;
    
    const placeholderImage = "https://placehold.co/300x300";
    const { addToFavorites } = useContext(FavoritesContext);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [center, setCenter] = useState([circuit.lat, circuit.lng]);
    const ZOOM_LEVEL = 11;
    const mapRef = useRef();

    // Close popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

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
                            <button
                            onClick={() => {
                                const wasAdded = addToFavorites('circuits', circuit.name); 
                                let message = "Already in Favorites"; // Default message
                                if (wasAdded) {
                                    message = "Added to Favorites"; // Update message if added successfully
                                }
                                setPopupMessage(message); 
                                setShowPopup(true); // Show the popup message
                            }}
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-3"
                            >Add to Favorites
                            </button>
                            <PopupMessage message={popupMessage} show={showPopup} onClose={handleClosePopup} /> 
                        </div>
                    </div>

                    {/* Right side: Circuit image and Map placeholder */}
                    
                    <div className="flex-col mr-4">
                    <img src={placeholderImage} alt="Circuit" className="mb-4 ml-20" />
                        <div className="w-96 h-64 ml-4">
                        <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                url="https://api.maptiler.com/maps/landscape/256/{z}/{x}/{y}.png?key=cIHYD3msCc45Tunexwsk"
                            />
                            <Marker position={center}>
                                <Popup>{circuit.name}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    </div>
                </div>
            </div>


      

        </div>
    );
};

export default CircuitModal;

import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Modal component
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
           
                {/* Modal Content */}
                <h2 className="font-bold text-lg mb-2">About F1 Dashboard</h2>
                <p>This F1 Dashboard is a React-based application designed to provide users with quick access to race schedules, results, driver standings, and constructor rankings. It features a user-friendly interface for selecting seasons and viewing detailed race data.</p>
                
                {/* GitHub Repo Link */}
                <a href="https://github.com/joemasri/A2Comp4513" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub Repo</a>
                
                {/* Close Button */}
                <button onClick={onClose} className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded m-3">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
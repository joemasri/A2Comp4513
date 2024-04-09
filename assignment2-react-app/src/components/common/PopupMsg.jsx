import React from 'react';

const PopupMessage = ({ message, show, onClose }) => {

    // Close popup after 2 seconds
    React.useEffect(() => {

    if (show) {
      const timer = setTimeout(onClose, 2000); 
      return () => clearTimeout(timer);
    }
  }, [show, onClose]); 

  // If the popup is not open, return null
  if (!show) return null;

  // Return the popup message
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded">
      {message}
    </div>
  );
};

export default PopupMessage;

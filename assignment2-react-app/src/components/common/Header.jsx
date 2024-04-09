import React, {useState} from 'react';
import Modal from './AboutModal';

const Header = ({ selectedSeason, setSelectedSeason, seasons}) => {
  
    // Toggle modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  return (
    
    <header className="relative">
    <div className="container">
    <h1 className="text-center font-bold text-2xl">F1 Dashboard</h1>
        
        {/* Select season dropdown */}
        <select 
            className="flex border bg-gray-200 text-gray-700 border border-gray-300 rounded-md px-4 py-2"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option value="">Select a season</option>
            {seasons.map((season) => (
                <option key={season.year} value={season.year}>
                  {season.year}
                </option>
              ))}
        </select>
    </div>
    
    {/* Modal and Favorites Button */}
    <div className="absolute right-0 top-0 p-4">
        <button className="text-white font-bold py-2 px-4 rounded bg-gray-400 ">Favorites</button>
        <button onClick={toggleModal} className="ml-4 mr-12 text-white font-bold py-2 px-4 rounded bg-gray-400 ">About</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
  </header>
  );
}

export default Header;
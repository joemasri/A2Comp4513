import React, { useState } from 'react';
import Header from '../../common/Header';

const HomeView1 = () => {

    const [selectedSeason, setSelectedSeason] = useState(''); // State to tr

    return (
        <div>
            <Header />
            <div className="container">
                <div>
                        {/* Dropdown to select a season */}
                        <select className="border border-gray-300 rounded px-3 py-1 mt-4"
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                        >
                            <option value="">Select a season</option>
                            {/* Add options for each season */}
                        </select>
                </div>
                {/* Display races, results, and standings for the selected season */}
                {/* When results button clicked, display results section with more information about race (eg. race name, round# ,etc) */}


            </div>
        </div>
    );
}

export default HomeView1;
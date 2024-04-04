import React from "react";

const Header = ({ selectedSeason, setSelectedSeason, seasons }) => {
  return (
    <header>
    <div className="container">
    <h1 className="text-center font-bold text-2xl">F1 Dashboard</h1>
        {/* Select season dropdown */}
        <select 
            className="flex border border-gray-300 rounded px-3 py-1 mb-4"
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
  </header>
  );
}

export default Header;
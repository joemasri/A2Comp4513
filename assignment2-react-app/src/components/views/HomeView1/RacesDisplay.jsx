import React from "react";

// Races Display based on Selected Season 
const RacesDisplay = ({ races, handleResultBtn, handleStandingsBtn, selectedSeason }) => {
    
    const handleStanding = (race) => {
        handleStandingsBtn(race);
    };
    
    return (
        <div className="mt-4 mr-4 p-3 w-1/3 border border-black text-left">
            <h2 className="text-lg font-semibold">{selectedSeason} Races</h2>
            <ul>
                {races.map((race, indx) => (
                <li key={indx} className="flex items-center justify-between">
                        {race.round} - {race.name}
                    <div className="flex">
                        <button className="p-2 m-1 text-white bg-gray-400 rounded" onClick={() => handleResultBtn(race)}>Results</button>
                        <button className="p-2 m-1 text-white bg-gray-400 rounded" onClick={() => handleStanding(race)}>Standings</button>
                    </div>
                </li>
                ))}
            </ul>
    </div>
    );
}

export default RacesDisplay;
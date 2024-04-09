import React, { useState } from "react";
import CircuitModal from "../../common/CircuitModal";
import { fetchCircuit } from "../../../Api";

// Races Display based on Selected Season 
const RacesDisplay = ({ races, handleResultBtn, handleStandingsBtn, selectedSeason }) => {
    
    // State to show/hide modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCircuit, setSelectedCircuit] = useState(null);

    // Handle Circuit Name Click
    const handleRaceNameClick = async (circuitId) => {
        const circuitInfo = await fetchCircuit(circuitId);
        setSelectedCircuit(circuitInfo[0]);
        setIsModalOpen(true);
    };

    const handleStanding = (race) => {
        handleStandingsBtn(race);
    };
    
    return (
        <div className="mt-4 mr-4 p-3 w-1/3 border-4 border-black text-left">
            <h2 className="text-lg font-semibold pb-5">{selectedSeason} Races</h2>
            
            {/* Races table */}
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Rnd</th>
                        <th className="text-center">Circuit</th>
                        <th className="text-center">View</th>
                    </tr>
                </thead>
                <tbody>
                    {races.map((race, indx) => (
                        <tr key={indx}>
                            <td>{race.round}</td>
                            <td onClick={() => handleRaceNameClick(race.circuitId)} className="cursor-pointer text-decoration-line: underline">{race.name}</td>

                            <td>
                                <button className="p-2 m-1 text-white bg-gray-400 rounded" onClick={() => handleResultBtn(race)}>Results</button>
                                <button className="p-2 m-1 text-white bg-gray-400 rounded" onClick={() => handleStanding(race)}>Standings</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        <CircuitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} circuit={selectedCircuit} />
    </div>
    );
}

export default RacesDisplay;
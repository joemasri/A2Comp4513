import React from "react";

// This Class represents HomeView1

const ResandQualDisplay = ({
    selectedRace,
    showQualifying,
    toggleQualifying,
    toggleResults,
    qualifyingData,
    resultsData,
    handleDriverClick,
    handleConstructorClick,
    findDriverName,
    getPositionClassName }) => {

    // Display and Toggle Qualifying/Results and Standings
    return (
        <div className="mt-4 p-3 w-3/5 border-double border-4 border-gray-600 text-left">
                {selectedRace && ( 
                 <>
                    <h2 className="text-lg font-semibold">Race:</h2>
                    <p>{selectedRace.name} | Round #{selectedRace.round} | {selectedRace.date}</p>
    
                    {/* Buttons to switch display */}
                    <div className="flex">
                            <button className={`p-2 m-1 mt-4 text-white rounded font-bold ${showQualifying ? 'bg-red-600' : 'bg-red-300'}`} onClick={toggleQualifying}>Qualifying</button>
                            <button className={`p-2 m-1 mt-4 text-white rounded font-bold ${showQualifying ? 'bg-red-300' : 'bg-red-600'}`} onClick={toggleResults}>Results</button>
                    </div>
    
                    {/* Qualifying Display */}
                    {qualifyingData && showQualifying && (
                        <>
                        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-5 mt-5 ml-3">
                         <h2 className="text-lg font-bold text-left mb-5 ">Qualifying</h2>
                            <table className="table-auto w-full">
                                <thead className="text-left font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th>Position</th>
                                        <th>Driver</th>
                                        <th>Make</th>
                                        <th>Q1</th>
                                        <th>Q2</th>
                                        <th>Q3</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {qualifyingData.map((qualifying, indx) => (
                                        <tr key={indx}>
                                            <td className="p-3 whitespace-nowrap">{qualifying.position}</td>
                                            <td className="p-3 whitespace-nowrap cursor-pointer text-decoration-line: underline" onClick={() => handleDriverClick(qualifying.driverId)} >{findDriverName(qualifying.driverId)}</td>
                                            <td className="p-3 whitespace-nowrap cursor-pointer text-decoration-line: underline" onClick={() => handleConstructorClick(qualifying.constructorId)} >{qualifying.constructors?.name}</td>
                                            <td className="p-3 whitespace-nowrap">{qualifying.q1}</td>
                                            <td className="p-3 whitespace-nowrap">{qualifying.q2}</td>
                                            <td className="p-3 whitespace-nowrap">{qualifying.q3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                        </>
                    )}
                 </>   
                )}
    
                {/* Results Display (pos, name, laps, points) */}
                {!showQualifying && (
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-5 mt-5 ml-3">
                    <h2 className="text-lg font-bold text-left mb-5">Results</h2>
                    <table className="table-auto w-full">
                        <thead className="text-left font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th>Position</th>
                                <th>Driver</th>
                                <th>Make</th>
                                <th>Laps</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {resultsData.map((result, indx) => (
                                <tr key={indx} className={getPositionClassName(result.position)}>
                                    <td className="p-3 whitespace-nowrap">{result.position}</td>
                                    <td className="p-3 whitespace-nowrap cursor-pointer text-decoration-line: underline" onClick={() => handleDriverClick(result.driverId)}>{findDriverName(result.driverId)}</td>
                                    <td className="p-3 whitespace-nowrap cursor-pointer text-decoration-line: underline" onClick={() => handleConstructorClick(result.constructorId)} >{result.constructors?.name}</td>
                                    <td className="p-3 whitespace-nowrap">{result.laps}</td>
                                    <td className="p-3 whitespace-nowrap">{result.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                )}
                
            </div>
        )
    }

    export default ResandQualDisplay;
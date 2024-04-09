import React from "react";

// This class represents HomeView2

const StandingsDisplay = ({ 
    showStandings,
    selectedRace,
    driverStandingsData,
    constructorStandingsData,
    findDriverName,
    handleConstructorClick }) => {

    // Display Standings
    if (showStandings) {
        return (
          <div className="mt-4 p-3 w-3/5 border-double border-4 border-gray-600 text-left">
            <h2 className="text-lg font-semibold">Race:</h2>
                <p>{selectedRace.name} | Round #{selectedRace.round} | {selectedRace.date}</p>
            <div className="flex">
              
              {/* Table to Display Drivers (pos, name, points, wins) */}
              <div className="w-1/2">
                <h2 className="text-lg font-bold text-center mb-3 mt-3 pt-2">Drivers</h2>
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-5">
                <table className="table-auto w-full">
                  <thead className="text-center font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th>Position</th>
                      <th>Driver</th>
                      <th>Points</th>
                      <th>Wins</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {driverStandingsData.map((driverStanding, index) => (
                      <tr key={index}>
                        <td className="p-3 whitespace-nowrap">{driverStanding.position}</td>
                        <td className="p-3 whitespace-nowrap">{findDriverName(driverStanding.driverId)}</td>
                        <td className="p-3 whitespace-nowrap">{driverStanding.points}</td>
                        <td className="p-3 whitespace-nowrap">{driverStanding.wins}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
    
              {/* Table to Display Constructors (pos, constructors, points, wins) */}
              <div className="w-1/2 pl-2">
                <h2 className="text-lg font-bold text-center mb-3 mt-3 pt-2">Constructors</h2>
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-5">
                <table className="table-auto w-full">
                  <thead className="text-left font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th>Position</th>
                      <th>Make</th>
                      <th>Points</th>
                      <th>Wins</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {constructorStandingsData.map((constructorStanding, index) => (
                      <tr key={index}>
                        <td className="p-3 whitespace-nowrap">{constructorStanding.position}</td>
                        <td className="p-3 whitespace-nowrap cursor-pointer text-decoration-line: underline" onClick={() => handleConstructorClick(constructorStanding.constructorId)}>{constructorStanding.constructors?.name}</td>
                        <td className="p-3 whitespace-nowrap">{constructorStanding.points}</td>
                        <td className="p-3 whitespace-nowrap">{constructorStanding.wins}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        );
      }
    }

export default StandingsDisplay;
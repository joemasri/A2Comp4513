import React, {useState} from 'react';

// Results and Qualifying Display based on Selected Race
const RaceOverview = ({ selectedRace, qualifyingData, resultsData, driverData, showStandings, driverStandingsData, constructorStandingsData}) => {
    
    // State to show/hide qualifying data
    const [showQualifying, setShowQualifying] = useState(true);
    const [showResults, setShowResults] = useState(false);
    
    // Locate driver name using driverId
    const findDriverName = (driverId) => {
        const driver = driverData.find(driver => driver.driverId === driverId);
        return driver ? `${driver.forename} ${driver.surname}` : 'Unknown'
    }

    // Toggle Qualifying View
    const toggleQualifying = () => {
        setShowQualifying(true); // Show Qualifying
        setShowResults(false); // Hide Results
        
    };

    // Toggle Results View
    const toggleResults = () => {
        setShowQualifying(false); // Hide Qualifying
        setShowResults(true); // Show results
    };

    // Highlight top 3
    const getPositionClassName = (position) => {
        switch (position) {
            case '1': return 'bg-gold font-bold';
            case '2': return 'bg-silver font-bold';
            case '3': return 'bg-bronze font-bold';
            default: return '';
        }
    };


    if (showStandings) {
        return (
          <div className="mt-4 p-3 w-3/5 border-4 border-black text-left">
            <h2 className="text-lg font-semibold">Race:</h2>
                <p>{selectedRace.name} | Round #{selectedRace.round} | {selectedRace.date}</p>
            <div className="flex">
              {/* Table to Display Drivers (pos, name, points, wins) */}
              <div className="w-1/2">
                <h2 className="text-lg font-bold text-center mb-3 mt-3 pt-2">Drivers</h2>
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-5">
                <table className="table-auto w-full">
                  <thead className="text-left font-semibold uppercase text-gray-400 bg-gray-50">
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
                      <th>Constructor</th>
                      <th>Points</th>
                      <th>Wins</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {constructorStandingsData.map((constructorStanding, index) => (
                      <tr key={index}>
                        <td className="p-3 whitespace-nowrap">{constructorStanding.position}</td>
                        <td className="p-3 whitespace-nowrap">{constructorStanding.constructorId}</td>
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
    
    // Display and Toggle Qualifying/Results and Standings (HomeView1 and HomeView2 essentially)
    return (
    <div className="mt-4 p-3 w-3/5 border-4 border-black text-left">
            {selectedRace && ( 
             <>
                <h2 className="text-lg font-semibold">Race:</h2>
                <p>{selectedRace.name} | Round #{selectedRace.round} | {selectedRace.date}</p>

                {/* Buttons to switch display */}
                <div className="flex">
                        <button className={`p-2 m-1 mt-4 text-white rounded ${showQualifying ? 'bg-gray-600' : 'bg-gray-400'}`} onClick={toggleQualifying}>Qualifying</button>
                        <button className={`p-2 m-1 mt-4 text-white rounded ${!showResults ? 'bg-gray-400' : 'bg-gray-600'}`} onClick={toggleResults}>Results</button>
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
                                    <th>Q1</th>
                                    <th>Q2</th>
                                    <th>Q3</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                {qualifyingData.map((qualifying, indx) => (
                                    <tr key={indx}>
                                        <td className="p-3 whitespace-nowrap">{qualifying.position}</td>
                                        <td className="p-3 whitespace-nowrap">{findDriverName(qualifying.driverId)}</td>
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
                            <th>Laps</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                        {resultsData.map((result, indx) => (
                            <tr key={indx} className={getPositionClassName(result.position)}>
                                <td className="p-3 whitespace-nowrap">{result.position}</td>
                                <td className="p-3 whitespace-nowrap">{findDriverName(result.driverId)}</td>
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

export default RaceOverview;

{/*
TABLES STYLING FROM:
https://tailwindcomponents.com/component/customers-table
*/}
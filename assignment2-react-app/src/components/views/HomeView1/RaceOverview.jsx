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


    if (showStandings) {
        return (
          <div className="mt-4 p-3 w-3/5 border border-black text-left">
            <div className="flex">
              {/* Table to Display Drivers (pos, name, points, wins) */}
              <div className="w-1/2">
                <h2 className="text-lg font-bold text-center mb-3 mt-3 pt-2">Drivers</h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Driver</th>
                      <th>Points</th>
                      <th>Wins</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverStandingsData.map((driverStanding, index) => (
                      <tr key={index}>
                        <td>{driverStanding.position}</td>
                        <td>{findDriverName(driverStanding.driverId)}</td>
                        <td>{driverStanding.points}</td>
                        <td>{driverStanding.wins}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    
              {/* Table to Display Constructors (pos, constructors, points, wins) */}
              <div className="w-1/2">
                <h2 className="text-lg font-bold text-center mb-3 mt-3 pt-2">Constructors</h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Constructor</th>
                      <th>Points</th>
                      <th>Wins</th>
                    </tr>
                  </thead>
                  <tbody>
                    {constructorStandingsData.map((constructorStanding, index) => (
                      <tr key={index}>
                        <td>{constructorStanding.position}</td>
                        <td>{constructorStanding.constructorId}</td>
                        <td>{constructorStanding.points}</td>
                        <td>{constructorStanding.wins}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    
    // Display and Toggle Qualifying/Results and Standings (HomeView1 and HomeView2 essentially)
    return (
    <div className="mt-4 p-3 w-3/5 border border-black text-left">
            {selectedRace && ( 
             <>
                <h2 className="text-lg font-semibold">Results</h2>
                <p>Name: {selectedRace.name}, Round #{selectedRace.round}, Year: {selectedRace.year}</p>

                {/* Buttons to switch display */}
                <div className="flex">
                        <button className={`p-2 m-1 mt-4 text-white rounded ${showQualifying ? 'bg-gray-600' : 'bg-gray-400'}`} onClick={toggleQualifying}>Qualifying</button>
                        <button className={`p-2 m-1 mt-4 text-white rounded ${!showResults ? 'bg-gray-400' : 'bg-gray-600'}`} onClick={toggleResults}>Results</button>
                </div>

                {/* Qualifying Display */}
                {qualifyingData && showQualifying && (
                    <>
                    <div className="w-full border-black text-left">
                     <h2 className="text-lg font-bold text-left mb-3 mt-3 border-t pt-2">Qualifying</h2>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Driver</th>
                                    <th>Q1</th>
                                    <th>Q2</th>
                                    <th>Q3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {qualifyingData.map((qualifying, indx) => (
                                    <tr key={indx}>
                                        <td>{qualifying.position}</td>
                                        <td>{findDriverName(qualifying.driverId)}</td>
                                        <td>{qualifying.q1}</td>
                                        <td>{qualifying.q2}</td>
                                        <td>{qualifying.q3}</td>
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
            <div>
                <h2 className="text-lg font-bold text-left mb-3 mt-3 border-t pt-2">Results</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Driver</th>
                            <th>Laps</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultsData.map((result, indx) => (
                            <tr key={indx}>
                                <td>{result.position}</td>
                                <td>{findDriverName(result.driverId)}</td>
                                <td>{result.laps}</td>
                                <td>{result.points}</td>
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


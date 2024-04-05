import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces, fetchQualifying } from '../../../Api';

const HomeView1 = () => {

    // Store selected variables in state
    const [selectedSeason, setSelectedSeason] = useState('2023'); 
    const [seasons, setSeasons] = useState([]);
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);
    const [qualifyingData, setQualifyingData] = useState([]);
    

    // Fetch seasons from the api
    useEffect(() => {
        const fetchSeason = async () => {
            const seasonData = await fetchSeasons();
            setSeasons(seasonData);
        }
        fetchSeason();
    }, []);

    // Fetch races from the api, based on selected season
    useEffect(() => {
        if (!selectedSeason) return;

        const fetchRace = async () => {
            const racesData = await fetchRaces(selectedSeason); 
            setRaces(racesData);
        };
        fetchRace();
    }, [selectedSeason]);

    // Fetch qualifying data
    useEffect(() => { 
        const fetchQualifyingData = async () => {
            if(selectedRace) {
                const qualifyingData = await fetchQualifying(selectedRace.raceId);
                setQualifyingData(qualifyingData);
            }
        };
        fetchQualifyingData();
    }, [selectedRace]); 

    const handleResultBtn = (race) => {
        setSelectedRace(race)
    }

    return (
    <div>
        {/* Header with season select */}
        <div>
            <Header 
                setSelectedSeason={setSelectedSeason}
                selectedSeason={selectedSeason}
                seasons={seasons}
            />   
        </div>
        <div className="flex space-x-4">
                    
                    {/* Races based on season section */}
                    <div className="mt-4 mr-4 p-3 w-1/3 border border-black text-left">
                        <h2 className="text-lg font-semibold">{selectedSeason} Races</h2>
                        <ul>
                            {races.map((race, indx) => (
                               <li key={indx} className="flex items-center justify-between">
                                    {race.round} - {race.name}
                                <div className="flex">
                                    <button className="p-2 m-1 text-white bg-gray-400 rounded" onClick={() => handleResultBtn(race)}>Results</button>
                                    <button className="p-2 m-1 text-white bg-gray-400 rounded">Standings</button>
                                </div>
                               </li>
                            ))}
                        </ul>
                    </div>

        {/* Results section */}
        <div className="mt-4 p-3 w-2/3 border border-black text-left">
            {selectedRace && ( 
             <>
                <h2 className="text-lg font-semibold">Results</h2>
                <p>Name: {selectedRace.name}, Round #{selectedRace.round}, Year: {selectedRace.year}</p>
                
                {qualifyingData && (
                    <>
                     <h2 className="text-lg font-semibold">Qualifying Data</h2>
                     {/* Display qualifying data here */}
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
                                        <td>{/*Driver name here*/}</td>
                                        <td>{qualifying.q1}</td>
                                        <td>{qualifying.q2}</td>
                                        <td>{qualifying.q3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     
                    </>
                )}
            
             </>   
            )}
           
        </div>
    </div>
</div>
        );
    }

export default HomeView1;
import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces, fetchQualifying, fetchResults } from '../../../Api';
import RacesDisplay from './RacesDisplay';

const HomeView1 = () => {

    // Store selected variables in state
    const [selectedSeason, setSelectedSeason] = useState('2023'); 
    const [seasons, setSeasons] = useState([]);
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);
    const [qualifyingData, setQualifyingData] = useState([]);
    const [resultsData, setResultsData] = useState([]);
    
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

    // Fetch results data
    useEffect(() => {
        const fetchResultsData = async () => {
            if(selectedRace) {
                const resultsData = await fetchResults(selectedRace.raceId);
                setResultsData(resultsData);
            }
        };
        fetchResultsData();
    }, [selectedRace]);
    
    // Results button handler
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

        {/* Races Display based on season selected */}
        <div className="flex space-x-2">
            <RacesDisplay 
                races={races} 
                handleResultBtn={handleResultBtn} 
                selectedSeason={selectedSeason} 
            />
                    
        {/* Qualifying/Results section */}
        <div className="mt-4 p-3 w-3/5 border border-black text-left">
            {selectedRace && ( 
             <>
                <h2 className="text-lg font-semibold">Results</h2>
                <p>Name: {selectedRace.name}, Round #{selectedRace.round}, Year: {selectedRace.year}</p>
                
                {/* Qualifying Display */}
                {qualifyingData && (
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
                                        <td>{/*Driver name here*/}</td>
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
           
        </div>
    </div>
</div>
        );
    }

export default HomeView1;
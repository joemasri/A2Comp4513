import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces } from '../../../Api';

const HomeView1 = () => {

    // Store selected variables in state
    const [selectedSeason, setSelectedSeason] = useState(''); 
    const [seasons, setSeasons] = useState([]);
    const [races, setRaces] = useState([]);

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

    return (
    <div>
        <Header />
        <div className="container">
            <div>
                    {/* Select season dropdown */}
                    <div>
                        <select className="border border-gray-300 rounded px-3 py-1 mt-4"
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
                </div>
                    {/* Races based on selected season */}
                    <div className="mt-4 p-3 w-1/3 border border-black text-left">
                        <h2 className="text-lg font-semibold">Races for Season {selectedSeason}</h2>
                        <ul>
                            {races.map((race, indx) => (
                               <li key={indx} className="flex items-center justify-between">
                                    {race.round} - {race.name}
                                <div className="flex">
                                    <button className="p-2 m-1 text-white bg-gray-400 rounded">Results</button>
                                    <button className="p-2 m-1 text-white bg-gray-400 rounded">Standings</button>
                                </div>
                               </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

export default HomeView1;
import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces } from '../../../Api';

const HomeView1 = () => {

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
                        <div className="mt-4 p-3" style={{ width: '33%', border: '1px solid black', textAlign: 'left'}}>
                            <h2 className="text-lg font-semibold">Races for Season {selectedSeason}</h2>
                            <ul>
                                {races.map((race, indx) => (
                                    <li key={indx}>
                                        {race.round} - {race.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                {/* Display races, results, and standings for the selected season */}
                {/* When results button clicked, display results section with more information about race (eg. race name, round# ,etc) */}


            </div>
        </div>
    );
}

export default HomeView1;
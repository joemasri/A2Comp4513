import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import supabase from '../../../../config/supabaseClient';

const HomeView1 = () => {

    const [selectedSeason, setSelectedSeason] = useState(''); 
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        // Fetch seasons from the database
        const fetchSeasons = async () => {
            const { data, error } = await supabase
                .from('seasons')
                .select('year')
                .gte('year', 2000)
                .lte('year', 2023)
                .order('year', { ascending: false });
            if (error) {
                console.error('Error fetching seasons:', error.message);
            } else {
                setSeasons(data);
            }
        };
        fetchSeasons();
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <div>
                        {/* Dropdown to select a season */}
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
                {/* Display races, results, and standings for the selected season */}
                {/* When results button clicked, display results section with more information about race (eg. race name, round# ,etc) */}


            </div>
        </div>
    );
}

export default HomeView1;
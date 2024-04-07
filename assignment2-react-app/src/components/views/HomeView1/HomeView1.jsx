import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { useNavigate } from 'react-router-dom';
import { fetchSeasons, fetchRaces, fetchQualifying, fetchResults, fetchDriver } from '../../../Api';
import RacesDisplay from './RacesDisplay';
import RaceOverview from './RaceOverview';
import HomeView2 from '../HomeView2/HomeView2';

const HomeView1 = () => {

    // Store selected variables in state
    const [selectedSeason, setSelectedSeason] = useState('2023'); 
    const [seasons, setSeasons] = useState([]);
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);
    const [qualifyingData, setQualifyingData] = useState([]);
    const [resultsData, setResultsData] = useState([]);
    const [driverData, setDriverData] = useState([]);
    const [showStandings, setShowStandings] = useState(false);

    // Fetch seasons
    useEffect(() => {
        const fetchSeason = async () => {
            const seasonData = await fetchSeasons();
            setSeasons(seasonData);
        }
        fetchSeason();
    }, []);
    
    // Fetch races, qualifying data, results data, and driver data
    useEffect(() => {
        const fetchData = async () => {
            
            // Fetch races
            const racesData = await fetchRaces(selectedSeason);
            setRaces(racesData);

            // If a race is selected, fetch qualifying data, results data, and driver data
            if (selectedRace) {
                const raceId = selectedRace.raceId;
                const qualifyingData = await fetchQualifying(raceId);
                setQualifyingData(qualifyingData);

                const resultsData = await fetchResults(raceId);
                setResultsData(resultsData);

                const driverData = await fetchDriver(raceId);
                setDriverData(driverData);
            }
        };

        // Call fetchData function
        fetchData();

        // selectedSeason and selectedRace in the dependency array
    }, [selectedSeason, selectedRace]);

    // Results button handler
    const handleResultBtn = (race) => {
        setSelectedRace(race);
    }

    // Standings button handler
    const navigate = useNavigate();
    const handleStandingsBtn = (race) => {
        console.log("Standings clicked, race clicked: ", race);
        navigate('/home2');
        setShowStandings(true);
    }

    return (
    <div>
        {/* Header with season select */}
        <Header 
            setSelectedSeason={setSelectedSeason}
            selectedSeason={selectedSeason}
            seasons={seasons}
        />   
    
    <div className="flex space-x-4">
        {showStandings ? (
            <HomeView2 />
        ) : (
           <>

           {/* Display races and buttons based on selected season */}
            <RacesDisplay 
                races={races} 
                handleResultBtn={handleResultBtn} 
                handleStandingsBtn={handleStandingsBtn}
                selectedSeason={selectedSeason} 
            />
            
           {/* Display Qualifying/Result Displays based on selected race  */}
            <RaceOverview 
                selectedRace={selectedRace} 
                qualifyingData={qualifyingData} 
                resultsData={resultsData}
                driverData={driverData}
            />
        </>
    )}
</div>
</div>
    );
}

export default HomeView1;
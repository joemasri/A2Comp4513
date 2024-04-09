import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces, fetchQualifying, fetchResults, fetchDriver, fetchDriverStandings, fetchConstructorStandings } from '../../../Api';
import RacesDisplay from './RacesDisplay';
import RaceOverview from './RaceOverview';

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
    const [driverStandingsData, setDriverStandingsData] = useState([]);
    const [constructorStandingsData, setConstructorStandingsData] = useState([]);

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
            
            // If a race is selected, fetch qualifying, results, driver, driver standings, and constructor standings
            if (selectedRace) {
                const raceId = selectedRace.raceId;
                const qualifyingData = await fetchQualifying(raceId);
                const resultsData = await fetchResults(raceId);
                const driverData = await fetchDriver(raceId);
                const driverStandingsData = await fetchDriverStandings(raceId);
                const constructorStandingsData = await fetchConstructorStandings(raceId);
                
                setQualifyingData(qualifyingData);
                setResultsData(resultsData);
                setDriverData(driverData);
                setDriverStandingsData(driverStandingsData);
                setConstructorStandingsData(constructorStandingsData);

            }        
        };

        // Call fetchData function
        fetchData();
    }, [selectedSeason, selectedRace, showStandings]);
        
    // Results button handler
    const handleResultBtn = (race) => {
        setShowStandings(false);
        setSelectedRace(race);
    }

    // Standings button handler
    const handleStandingsBtn = (race) => {
        setShowStandings(true);
        setSelectedRace(race);
        
    };

    return (
    <div>
        {/* Header with season select */}
        <Header 
            setSelectedSeason={setSelectedSeason}
            selectedSeason={selectedSeason}
            seasons={seasons}
        />   
    
    <div className="flex space-x-4">
        
        {/* Races Display based on season selected */}
        <RacesDisplay 
            races={races} 
            handleResultBtn={handleResultBtn} 
            handleStandingsBtn={handleStandingsBtn}
            selectedSeason={selectedSeason} 
        />
                    
        {/* Qualifying/Results section */}
        <RaceOverview 
            selectedRace={selectedRace} 
            qualifyingData={qualifyingData} 
            resultsData={resultsData}
            driverData={driverData}
            showStandings={showStandings}
            driverStandingsData={driverStandingsData}
            constructorStandingsData={constructorStandingsData}
        />
    </div>
</div>
        );
    }

export default HomeView1;
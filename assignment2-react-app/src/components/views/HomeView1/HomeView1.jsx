import React, { useState, useEffect } from 'react';
import Header from '../../common/Header';
import { fetchSeasons, fetchRaces, fetchQualifying, fetchResults, fetchDriver } from '../../../Api';
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

    // Fetch drivers data
    useEffect(() => {
        const fetchDriverData = async () => {
            if(selectedRace) {
                const driverData = await fetchDriver(selectedRace.raceId);
                setDriverData(driverData);
            }
        };
        fetchDriverData();
    }, [selectedRace]);
    
    // Results button handler
    const handleResultBtn = (race) => {
        setSelectedRace(race);
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
        
        {/* Races Display based on season selected */}
        <RacesDisplay 
            races={races} 
            handleResultBtn={handleResultBtn} 
            selectedSeason={selectedSeason} 
        />
                    
        {/* Qualifying/Results section */}
        <RaceOverview 
            selectedRace={selectedRace} 
            qualifyingData={qualifyingData} 
            resultsData={resultsData}
            driverData={driverData}
        />
    </div>
</div>
        );
    }

export default HomeView1;
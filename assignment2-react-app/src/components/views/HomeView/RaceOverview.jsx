import React, {useState} from 'react';
import { fetchConstructor } from '../../../Api';
import ResandQualDisplay from './ResandQualDisplay';
import StandingsDisplay from './StandingsDisplay';
import ConstructorModal from '../../common/ConstructorModal';
import DriverDetailsModal from '../../common/DriverDetailsModal';

// Results and Qualifying Display based on Selected Race
const RaceOverview = ({ selectedRace, qualifyingData, resultsData, driverData, showStandings, driverStandingsData, constructorStandingsData}) => {
    
    // State to show/hide qualifying data
    const [showQualifying, setShowQualifying] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [isConstructorModalOpen, setIsConstructorModalOpen] = useState(false);
    const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
    const [selectedConstructor, setSelectedConstructor] = useState(null);
    
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

    const handleDriverClick = async (driverId) => {

        // Find driver details based on driverId
        const driverDetails = driverData.find(driver => driver.driverId === driverId);
        setSelectedDriver({
            name: `${driverDetails.forename} ${driverDetails.surname}`,
            dob: driverDetails.dob,
            nationality: driverDetails.nationality, 
            url: driverDetails.url 
        });
        setIsDriverModalOpen(true);
    };

    // Function to handle constructor click
    const handleConstructorClick = async (constructorId) => {
        const constructorData = await fetchConstructor(constructorId);
        setSelectedConstructor(constructorData[0]); 
        setIsConstructorModalOpen(true);
    };

    if (showStandings) {
        return (
        <>
          <StandingsDisplay
            showStandings={showStandings}
            selectedRace={selectedRace}
            driverStandingsData={driverStandingsData}
            constructorStandingsData={constructorStandingsData}
            findDriverName={findDriverName}
            handleConstructorClick={handleConstructorClick}
          />
            <DriverDetailsModal 
                isOpen={isDriverModalOpen} 
                onClose={() => setIsDriverModalOpen(false)} 
                driver={selectedDriver} 
              />
            <ConstructorModal 
                isOpen={isConstructorModalOpen} 
                onClose={() => setIsConstructorModalOpen(false)} 
                constructor={selectedConstructor}
            />
          </>
        );
    }
    
      if (!showStandings) {
        return (
        <>
          <ResandQualDisplay
            selectedRace={selectedRace}
            showQualifying={showQualifying}
            toggleQualifying={toggleQualifying}
            toggleResults={toggleResults}
            qualifyingData={qualifyingData}
            resultsData={resultsData}
            handleDriverClick={handleDriverClick}
            handleConstructorClick={handleConstructorClick}
            findDriverName={findDriverName}
            getPositionClassName={getPositionClassName}
          />
            <DriverDetailsModal 
                isOpen={isDriverModalOpen} 
                onClose={() => setIsDriverModalOpen(false)} 
                driver={selectedDriver} 
            />
            <ConstructorModal 
                isOpen={isConstructorModalOpen} 
                onClose={() => setIsConstructorModalOpen(false)} 
                constructor={selectedConstructor}
            />
      </>
        ); 
    }
}

export default RaceOverview;

{/*
STYLING FROM:
https://tailwindcomponents.com/component/customers-table
https://v1.tailwindcss.com/
https://v1.tailwindcss.com/docs/border-style
https://tailwindcss.com/docs/text-decoration
https://tailwindcss.com/docs/background-position
*/}
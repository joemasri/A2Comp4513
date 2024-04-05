import supabase from "../config/supabaseClient";

// Fetch all seasons from the database
export const fetchSeasons = async () => {
  const { data, error } = await supabase
    .from('seasons')
    .select('year')
    .gte('year', 2000)
    .lte('year', 2023)
    .order('year', { ascending: true });

    // Handle errors
    if (error) {
        console.error('Error fetching seasons: ', error.message);
        return null;
        } else {
        return data;
        }
    };

// Fetch race name and round number for a selected season
export const fetchRaces = async (selectedSeason) => {
  const { data, error } = await supabase
    .from('races')
    .select()
    .eq('year', selectedSeason)
    .order('round', { ascending: true });

    // Handle errors
    if (error) {
        console.error('Error fetching races: ', error.message);
        return null;
      } else {
        return data;
      }
    };

// Fetch qualifying data
export const fetchQualifying = async (selectedRace) => {
    const { data, error } = await supabase
        .from('qualifying')
        .select()
        .eq('raceId', selectedRace)
        .order('position', { ascending: true });
    
        // Handle errors
        if (error) {
            console.error('Error fetching qualifying data: ', error.message);
            return null;
        } else {
            return data;
        }
    }

// Fetch results data
export const fetchResults = async (selectedRace) => {
    const { data, error } = await supabase
        .from('results')
        .select()
        .eq('raceId', selectedRace)
        .order('positionOrder', { ascending: true });
    
        // Handle errors
        if (error) {
            console.error('Error fetching results data: ', error.message);
            return null;
        } else {
            return data;
        }
    }

// Fetch driver data based
export const fetchDriver = async (selectedRace) => {
    const { data, error } = await supabase
        .from('drivers')
        .select();
    
        // Handle errors
        if (error) {
            console.error('Error fetching driver data: ', error.message);
            return null;
        } else {
            return data;
        }
    }

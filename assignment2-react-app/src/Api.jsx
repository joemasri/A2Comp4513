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

// Fetch Driver Standings
export const fetchDriverStandings = async (raceId) => {
        const { data, error } = await supabase
            .from('driverStandings')
            .select('')
            .eq('raceId', raceId)
            .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching driver standings: ', error.message);
            return null;
        } else {
            return data;
        }
    }

// Fetch Constructor Standings
export const fetchConstructorStandings = async (raceId) => {
        const { data, error } = await supabase
            .from('constructorStandings')
            .select('')
            .eq('raceId', raceId)
            .order('position', { ascending: true });
        if (error) {
            console.error('Error fetching constructor standings: ', error.message);
            return null;
        } else {
            return data;
        }
    }


/* 

// Returns current season driver standings table for specified race
app.get('/api/standings/:raceId/drivers', async (req, res) => {
    
        const raceId = req.params.raceId;
        const { data, error } = await supabase
            .from('driverStandings')
            .select('*, drivers!inner(driverRef)')
            .eq('raceId', raceId)
            .order('position', { ascending: true });

        // Check for errors
        handleError(error, data, res, `Standings with raceId: '${raceId}' not found`);
});

// Returnss current season constructors standings table for specified race
app.get('/api/standings/:raceId/constructors', async (req, res) => {
    
        const raceId = req.params.raceId;

    try {
        const { data, error } = await supabase
            .from('constructorStandings')
            .select(`raceId, constructorId, position, wins, 
                    constructors(name, constructorRef, nationality)`)
            .eq('raceId', raceId)
            .order('position', { ascending: true }); 

        // Check for errors
        handleError(error, data, res, `No standings found for race with id '${raceId}'`);
    
    } catch (err) {
        res.send({ error: 'Internal Server Error' });
    }
});


*/
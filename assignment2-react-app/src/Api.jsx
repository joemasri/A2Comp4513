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
    

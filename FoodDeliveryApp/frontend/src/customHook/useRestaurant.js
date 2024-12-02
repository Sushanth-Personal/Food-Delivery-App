import { useState, useEffect } from 'react';
import {getMenu} from '../api/api';
const useRestaurant = (id) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await getMenu(id);
          console.log("restaurant", response);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const result = await response.json();
        setData(result);  // Set the fetched data to the state
      } catch (err) {
        setError(err.message);  // Set error if any
      } finally {
        setLoading(false);  // Set loading to false once the request is complete
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return { data, loading, error };
};

export default useRestaurant;

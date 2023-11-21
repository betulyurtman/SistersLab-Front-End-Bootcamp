// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// Axios ile API'den veri çekme
const fetchWithAxios = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return response.data;
  } catch (error) {
    console.error('Axios request failed:', error);
    return null;
  }
};

// Fetch ile API'den veri çekme
const fetchWithFetchAPI = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch request failed:', error);
    return null;
  }
};

const AxiosandFetch = () => {
  const [axiosData, setAxiosData] = useState(null);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const axiosResponse = await fetchWithAxios();
      setAxiosData(axiosResponse);

      const fetchResponse = await fetchWithFetchAPI();
      setFetchData(fetchResponse);
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h2>Axios Response:</h2>
      <pre>{JSON.stringify(axiosData, null, 2)}</pre>
      <h2>Fetch Response:</h2>
      <pre>{JSON.stringify(fetchData, null, 2)}</pre>
    </div>
  );
};

export default AxiosandFetch;

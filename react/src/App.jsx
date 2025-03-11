import { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Runs once, on mount

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

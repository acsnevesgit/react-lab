import { useState, useEffect } from 'react';

// Custom hook to fetch: if no method is specified, GET is the default
const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, [url]);

  return [data];
};

export default useFetch;

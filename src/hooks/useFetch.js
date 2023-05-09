import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const mfetchMydata = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("I am called");
      setData(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    mfetchMydata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;

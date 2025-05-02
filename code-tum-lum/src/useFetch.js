import axios from "axios";
import { useCallback, useState } from "react";
function useFetch() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const doFetch = useCallback(async (url, options = {}) => {
    setIsLoading(true);
    try {
      const res = await axios(url, options);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);
  return [{ isLoading, error, response }, doFetch];
}
export default useFetch;

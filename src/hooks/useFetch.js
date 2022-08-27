import { useState, useEffect } from 'react';
import { getAllDataFromAuthor } from '../utilities/fetchData';

export const useFetch = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getAllDataFromAuthor();

      setState({
        data,
        loading: false,
      });
    };

    fetchAPI();
  }, [setState]);

  return state;
};

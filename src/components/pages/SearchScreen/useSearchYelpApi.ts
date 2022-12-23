import { useEffect, useState } from 'react';
import yelp from '../../../services/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchParam: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchParam,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Somenthing went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [results, searchApi, errorMessage];
};

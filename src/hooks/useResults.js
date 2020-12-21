import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    // helper function
    const searchApi = async (searchTerm) => {
        // param ex. limit: 50 => /search?limit=50
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'brooklyn',
                    limit: 50 
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setError('Something went wrong')
        }
    };

    // Call searchApi when component is first rendered **BAD CODE**
    // searchApi('pasta')
    // this will cause an infinite re-render

    // default search
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, error]; 
};
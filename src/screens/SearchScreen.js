import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
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

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We have found {results.length} results</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;
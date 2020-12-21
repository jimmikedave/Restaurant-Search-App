import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

//useState(() => {}, [x]) - run the arrow function x amount of times
//useState(() => {}, [value]) - when the value changes run the arrow function

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // hook is a helper function that can be used inside other components
    // REACT IS ALL ABOUT RE-USABLE COMPONENTS
    const [searchApi, results, error] = useResults();
    

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
import React, { useState } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//useState(() => {}, [x]) - run the arrow function x amount of times
//useState(() => {}, [value]) - when the value changes run the arrow function

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // hook is a helper function that can be used inside other components
    // REACT IS ALL ABOUT RE-USABLE COMPONENTS
    const [searchApi, results, error] = useResults();
    
    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$' || '$$$$'
        return results.filter(result => {
            return result.price === price
        })
    };

    return (
        <View style={{flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;
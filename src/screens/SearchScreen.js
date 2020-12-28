import React, { useState } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//useState(() => {}, [x]) - run the arrow function x amount of times
//useState(() => {}, [value]) - when the value changes run the arrow function

const SearchScreen = ({ navigation }) => {
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
        <> 
        {/* this is the default syntax <> to fit everything onto the screen */}
        {/**The alternative is to use <View style={{flex: 1}}> */}
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation}/>
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation}/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" navigation={navigation}/>
            </ScrollView>
            
        </>
        
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;
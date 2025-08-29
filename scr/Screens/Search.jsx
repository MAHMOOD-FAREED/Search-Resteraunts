 import React, { useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import SearchBar from "../Components/SearchBar"
import useResteraunts from "../hooks/useResteraunts";
import ReaterauntList from "../Components/ResterauntsList";
import { ScrollView } from "react-native";


const Search = () => {
    const [search, setSearch] = useState('')
    const [searchapi, handleSearch, products, error, loading] = useResteraunts()
    console.log(products);
    const filterProductsByPrice = (price)=>{
     return products.filter((product)=>{
        return product.price === price
     })    
    }
    
   
    return (
        <View style={styles.container}>
            <SearchBar 
                search={search}
                onSearchChange={setSearch}
                onSearchSubmit={handleSearch}
            />
            
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <ScrollView style = {styles.scrollStyle}>
                
            <ReaterauntList 
           
            result = {filterProductsByPrice("$")} title = "Coast effective"/>
            <ReaterauntList 
               
            result = {filterProductsByPrice("$$")} title = "Big pricier"/>
            
            <ReaterauntList
               
            result = {filterProductsByPrice("$$$")} title = "Big spender" />
            </ScrollView>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        padding: 10,
        // paddingBottom :20
        // paddingLeft:30
        // marginLeft:10
    },
    text: {
        color: "white",
        marginVertical: 10
    },
    errorText: {
        color: "red",
        marginVertical: 10
    },
    scrollStyle:{
        flex:1
        ,marginBottom:30
    }
})

export default Search
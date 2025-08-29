 import React,{useState} from "react";
 import {View,TextInput, Button,StyleSheet} from "react-native"
 import {Feather} from "@expo/vector-icons"
 const SearchBar = ({search,onSearchChange,onSearchSubmit})=>{
     return(
         <View style = {Styles.background}>
            <Feather name="search" style = {Styles.Icon}/>  
            <TextInput  value= {search} placeholder="Search" 
             onChangeText = {(change) => onSearchChange(change)}
             autoCapitalize="none"
             autoCorrect ={false}
             onEndEditing={()=> onSearchSubmit(search)}
             
             
              placeholderTextColor="#888"  style = {Styles.InputStyle}/>     
         </View>
     )
 }
 const Styles = StyleSheet.create({
    background:{
        backgroundColor: "#000",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
        borderColor:"white",
        borderWidth:1
         ,marginTop:10,
         marginBottom:20
        
    },
    Icon:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15,
        color:"white"
     },
    InputStyle:{
        
        flex:1,
        color:"white",
        borderColor:"#888",
        textDecorationLine:"none",
        fontSize:20
        
        
    }
    
 })
 export default SearchBar
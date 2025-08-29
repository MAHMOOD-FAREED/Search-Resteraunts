import React , {useEffect} from "react";
import {View,Text} from "react-native"
import api from '../api/yelp'

const Details = ()=>{
    
         const callApi  = async ()=>{
            try{
        const response = await api.get("/products/category/resteraunts")
     const data = response.data
        console.log(response);
          }catch(err){
        console.log("not found",err);
        
    }
        
        
    }
      useEffect(()=>{
        callApi();
    },[])
        
  
  
    
   
    
    return(
        <View>
            <Text>Details screen</Text>
        </View>
    )
}
export default Details
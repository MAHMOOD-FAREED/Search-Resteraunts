import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";
import { ScrollView } from "react-native";
const ResterauntDetail = ({result})=>{
    return(
        <View style = {styles.screenStyle}>
            
            <Image style ={styles.imageStyle} source={{uri:result.image_url}} />
            <Text style = {styles.textStyle}>
                 {result.name}
                
            </Text>
            <Text style = {styles.textStyleR} >{result.rating} stars, {result.review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginLeft:10
    },
     screenStyle:{
        backgroundColor:"black",
        flex:1,
        marginLeft:15,
        marginBottom:10
         
    }
    ,textStyle:{
        color:"white"
    },
    titleStyle:{
        fontSize:14,
        fontWeight:"bold",
        color:"white"
    },
    imageStyle:{
        height:200,
        width:250,
        borderRadius:4,
        marginBottom:5
        
        // backgroundColor:"red"
    },
    textStyleR:{
        color:"orange"
    },
    
})
export default ResterauntDetail

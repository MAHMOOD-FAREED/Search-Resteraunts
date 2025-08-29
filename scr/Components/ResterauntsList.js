import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import ResterauntDetail from "./ResterauntDetail";
import { withNavigation } from "react-navigation";
const ReaterauntList = ({title,result,navigation})=>{
    if(!result.length){
        return null
    }
    return(
        <View style = {styles.screenStyle}>
            <Text style = {styles.titleStyle} >{title}</Text>
            <FlatList
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            data={result}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return(
                    // <Text style = {styles.textStyle}>{item.name}</Text>
                    <TouchableOpacity  onPress={()=>{
                        navigation.navigate("ResterauntShow",{id:item.id})
                    }}>
                        
                        <ResterauntDetail   result = {item}/>
                    </TouchableOpacity>
                )
            }}
            />
            
        </View>
    )
    
}
const styles = StyleSheet.create({
    screenStyle:{
        backgroundColor:"black"
    }
    ,textStyle:{
        color:"white"
    },
    titleStyle:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        marginLeft:15,
        marginBottom:5
    }
    
})
export default withNavigation(ReaterauntList )
import React,{useState,useEffect} from "react";
import yelp from "../api/yelp";
import {View,Text,StyleSheet,Image,FlatList, Touchable, TouchableOpacity} from "react-native"
import { ScrollView } from "react-native-gesture-handler";
const ResterauntShow = ({navigation})=>{
  const id =   navigation.getParam('id');
  const [result,setResult] = useState(null)
 
  const getResult = async (id)=>{
    const response =  await yelp.get(`/${id}`)
    setResult(response.data)
  }



  useEffect(()=>{
    getResult(id)
  },[])
  if(!result){
    return null
  }
  
    const getOpenStatus = () => {
    if (!result || !result.hours || result.hours.length === 0) {
      return { status: "Hours not available", color: "gray" };
    }
    
    const isOpenNow = result.hours[0].is_open_now;
    
    if (isOpenNow) {
      return { status: "🟢 Open Now", color: "green" };
    } else {
      return { status: "🔴 Closed Now", color: "red" };
    }
  };

 const openStatus = getOpenStatus();
 const getEatOptions = () => {
    if (!result || !result.transactions || result.transactions.length === 0) {
      return "No dining options available";
    }

    const optionsMap = {
      'delivery': '🚚 Delivery',
      'pickup': '📦 Pickup',
      'restaurant_reservation': '📅 Reservation',
      'dine_in': '🍽️ Dine-in',
      'takeout': '🥡 Takeout'
    };

    return result.transactions.map(option => optionsMap[option] || option).join(' • ');
  };

 
    return(
        <View style =  {styles.screenStyle}>
            
            <Text style = {styles.titleStyle}>
                {result.name}
            </Text>
            
          <Text style = {styles.textStyle} >Open Status  {openStatus.status}    </Text>
          <Text style={styles.textStyle}>
      Options to Eat  {getEatOptions()}  
      </Text>
            
             
            
            <Text style = {styles.titleStyleF}>Photos From {result.name}</Text>
            <View style = {styles.imgList}>
              
          
          <FlatList  
          horizontal = {true}
          shouldRasterizeIOS = {false}
          data={result.photos}
          keyExtractor={(photo)=>photo}
          renderItem={({item})=>{
            return(
              <TouchableOpacity>                    
                <Image style = {styles.imgStyle} source={{uri:item}}  />
            </TouchableOpacity>
            
          )
          
          
        }}
          />
            </View>
          {result.location && result.location.display_address && (
            <Text style={styles.textStyleA}>
          Address: {result.location.display_address.join(', ')}
        </Text>
      )}
            <Text style = {styles.textStyleC} >Contact us at  {result.phone}</Text>
            
          
        </View>
    )
}
const styles = StyleSheet.create({
    screenStyle:{
        backgroundColor:"black",
        flex:1,
        // flexDirection:"row"
    },
    titleStyle:{
        color:"white"
        ,textAlign:"center",
        fontSize:20,
        padding:20,
        fontWeight:"bold"
    },
    imgStyle:{
        width:200,
        height:200,
        borderRadius:10,
        marginRight:15,
        marginBottom:20
    },
    textStyleC:{
        color:"orange",
        fontSize:17,
        // marginLeft:20
        textAlign:"center",
        marginBottom:200
    
    },
    textStyle:{
         color:"white",
        fontSize:17,
        textAlign:"center",
        // marginTop:20
    },
      titleStyleF:{
        color:"orange"
        ,textAlign:"center",
        fontSize:20,
        padding:20,
        fontWeight:"bold"
    },
     textStyleA:{
         color:"white",
        fontSize:17,
        margin:20
    },
    imgList:{
      height:220,
      margin:30
       
    }
    
})
export default ResterauntShow
import React,{useState} from "react";
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import logo from ".././../assets/image.png"
const Login = ({navigation})=>{
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const handleInput = (text)=>{
        setEmail(text)
        
    }
    const handlePass = (text)=>{
        setPass(text)
        console.log(pass)
    }
    return(
        <View style = {styles.screenStyle}>
            
            <Text style = {styles.TextStyleH}>
                Login Now !
            </Text>
            <View style = {styles.inputContainer}>
                  <TextInput style = {styles.inputStyle}
            placeholder="Enter your email"
            placeholderTextColor= "#888"
            autoCapitalize="none"
             autoCorrect ={false}
            value= {email}
            onChangeText={handleInput}
            
            />
            
            <TextInput style = {styles.inputStyle}
            placeholder="Enter your Password"
            placeholderTextColor= "#888"
            autoCapitalize="none"
             autoCorrect ={false}
            value= {pass}
            onChangeText={handlePass}
             secureTextEntry={true}
            
            />
                
                
            </View>
            <TouchableOpacity  onPress={()=>{
                if(email && pass){
                    navigation.navigate("Search")
                }else{
                    return null
                }
                    
                }
            }
                
                
                
                
                >
                <Text style = {styles.btnStyle} >Login</Text>
            </TouchableOpacity  >
            <Image  style = {styles.logoStyle} source={logo} />
          
        </View>
    )
}
const styles = StyleSheet.create({
   screenStyle:{
    // backgroundColor:"white"
    flex:1,
    alignItems:"center",
    gap:5
   },
    TextStyleH:{
        color:"white",
        fontSize:30,
        textAlign:"center",
        paddingTop:20
    },
    logoStyle:{
        width:300,
        height:300,
        // margin:20
    },
    inputStyle:{
        // backgroundColor:"white",
        height:50,
        width:300,
         color:"white",
         borderRadius:10,
         borderColor:"orange",
         borderWidth:2,
          fontSize: 20,
          
    },
    inputContainer:{
        // backgroundColor:"white",
        // flex:20
        height:200,
        gap:30,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    btnStyle:{
        color:"black",paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"orange",
    fontSize:30,
    borderColor:"black",
    borderWidth:2

    }
    
})
export default Login
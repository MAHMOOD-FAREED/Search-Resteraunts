import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./scr/Screens/Search";
import Details from "./scr/Screens/Details";
import ResterauntShow from "./scr/Screens/ResterauntShow";
import Login from "./scr/Screens/Login";

const navigator  = createStackNavigator({
  Search:Search,
  Details:Details,
  ResterauntShow:ResterauntShow,
  Login:Login
},{
  initialRouteName : 'Login',
  defaultNavigationOptions:{
    title:"MyFoodBook",
     headerStyle: {
      backgroundColor: 'black', // Optional: change header background
    },
    headerTitleAlign: 'center',
    headerTintColor: 'orange', // This changes the header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:30  ,
      alignItems:"center"
    },
  cardStyle: {
    backgroundColor: 'black' // Same as header or your app background
  }
    
  }
}
);
export default createAppContainer(navigator)
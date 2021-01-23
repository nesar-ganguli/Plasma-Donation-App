import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import HomePage from './Screens/HomePage'
import HomePageClone from './Screens/HomePageClone'
import HomePage2 from './Screens/HomePage2'
import DonorSigninScreen from './Screens/DonorSigninScreen'
import DonationScreen from './Screens/DonationScreen'
import ReceiverSigninScreen from './Screens/ReceiverSigninScreen'
import DonorSignupScreen from './Screens/DonorSignupScreen'
import ReceiverSignupScreen from './Screens/ReceiverSignupScreen'
import LoadingScreen from './Screens/LoadingScreen'
import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator();

const App = () =>{
  const [isloggedin,setLogged] = useState(null)

  const dectectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
      if (token){
          setLogged(true)
      }
      else{
          setLogged(false)
      }
  }

  useEffect( ()=>{
      dectectLogin()
  },[])


  return(
    <NavigationContainer>
      <Stack.Navigator
      headerMode='none'
      >
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="HomePageClone" component={HomePageClone} />
        <Stack.Screen name="HomePage2" component={HomePage2} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DonorSignin" component={DonorSigninScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="ReceiverSignin" component={ReceiverSigninScreen} />
        <Stack.Screen name="DonorSignup" component={DonorSignupScreen} />
        <Stack.Screen name="ReceiverSignup" component={ReceiverSignupScreen} />
         
         
        
     </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
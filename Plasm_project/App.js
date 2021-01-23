import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DonorSignup from './Screens/DonorSignup'
import { StyleSheet,Text, Button,View,} from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      
    <View style={styles.container}>
    <Text   style={styles.head}  >
      PLASMA DONATION!
    </Text>
    <Text style={styles.subhead}>
      Be The Real Heros!
    </Text>
    </View >
    
      <View style ={styles.btn1}>
      
          <Button
            title="DONOR"
            onPress={() => navigation.navigate('Donors')}
          />
      </View> 
      <View style ={styles.btn2}>
          <Button
            title="RECIEVER"
            onPress={() => navigation.navigate('Recievers')}
          />
      </View>
    </View>
  )
}

function DonorScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1}}>
      <View style={{flex: 1, backgroundColor:'green'}} >
      
        <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
        
        <TextInput
          label="Username"
          mode="outlined"
          style={{height: 40, width:250, left:115, top: 100 }}
          theme={{colors:{primary:"green"}}}
          />
          <TextInput
          label="Password"
          mode="outlined"
          style={{height: 40, width:250, left:115, top: 140 }}
          theme={{colors:{primary:"green"}}}
          />
        
        <View style={{height: 40, width:140, left:165, top:200,}}>
          <Button 
          title='SUBMIT' 
          
          />
        </View>
        
        <Text style={{left:190, top:200, fontSize:18, color:'green', fontStyle:'italic'}} onPress={() => navigation.navigate('DONOR REGISTER')}>
          Register Now!
        </Text>
      </View>
     
    </View>
    
  );
}
function RecieverScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <View style={{flex: 1, backgroundColor:'tomato'}} >
        <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
        
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center',fontSize:20, fontStyle:'italic', borderColor: 'black', borderWidth: 4, top: 100 ,}}>
          Username
        </TextInput>
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center', fontSize:20, fontStyle:'italic',caretHidden:'true', borderColor: 'black', borderWidth: 4, top: 140,}}>
          Password
        </TextInput>
        <View style={{height: 40, width:140, left:165, top:200,}}>
          <Button title='SUBMIT' />
        </View>
        
        <Text style={{left:190, top:200, fontSize:18, color:'tomato', fontStyle:'italic'}} onPress={() => navigation.navigate('RECIEVER REGISTER')}>
          Register Now!
        </Text>
      </View>
     
    </View>
  );
}


function DonorRegister({Navigator}){

 
 
  return(
<View style={{ flex: 1}}>
      <View style={{flex: 1, backgroundColor:'green'}} >
        <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
        
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center',fontSize:20, fontStyle:'italic', borderColor: 'black', borderWidth: 4, top: 100 ,}}>
          Username
        </TextInput>
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center', fontSize:20, fontStyle:'italic', borderColor: 'black', borderWidth: 4, top: 140,}}>
          Password
        </TextInput>
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center', fontSize:20, fontStyle:'italic', borderColor: 'black', borderWidth: 4, top: 180,}}>
          Email
        </TextInput>
        <TextInput style={{height: 40, width:250, left:115,textAlign:'center', fontSize:20, fontStyle:'italic', borderColor: 'black', borderWidth: 4, top: 220,}}>
          Address
        </TextInput>
        
        <View style={{height: 40, width:140, left:165, top:300,}}>
          <Button title='SUBMIT'>
          </Button>
        </View>
        
        
      </View>
     
    </View>  );
}
function RecieverRegister({Navigator}){
  return(
    <>
      <DonorSignup/>
    </>  
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donors" component={DonorScreen} />
        <Stack.Screen name="Recievers" component={RecieverScreen} />
        <Stack.Screen name="DONOR REGISTER" component={DonorRegister} />
        <Stack.Screen name="RECIEVER REGISTER" component={RecieverRegister} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor:'black'
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#00ced1',
    justifyContent:'flex-start',
    alignContent:'flex-start',
    height: '20%',
    
  
  },
  head: {
    left:115,
    top:45,
    color: '#fff',
    fontWeight:'bold',
    fontSize: 30,
  },
  subhead: {
    left:150,
    top:120,
    fontSize: 20,
  },
  btn1: {
    marginVertical : 120,
    marginHorizontal: 120,
    backgroundColor:  'green',
    alignContent:'space-between'
    
    

  },
  btn2: {
    width:218,
    left: 120,
    
    
    
  },
 

});
export default App;

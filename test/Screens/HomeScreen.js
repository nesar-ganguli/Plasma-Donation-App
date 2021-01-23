import * as React from 'react';
import { StyleSheet,Text, Button,View,} from 'react-native';


const HomeScreen = (props) =>{
    return(
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
            onPress={()=>props.navigation.navigate("DonorSignin")}
           
          />
      </View> 
      <View style ={styles.btn2}>
          <Button
            title="RECIEVER"
            onPress={()=>props.navigation.navigate("ReceiverSignin")}
           
          />
      </View>
    </View>
    );
};


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
      color:'green',
      alignContent:'space-between'
      
      
  
    },
    btn2: {
      width:218,
      left: 120,
      color:'dodgerblue'
      
      
      
    },
   
  
});

export default HomeScreen;

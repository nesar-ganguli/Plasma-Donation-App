import React,{useEffect,useState} from 'react';
import { StyleSheet,Text, View,Alert} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'

var arr = []

const DonationScreen = () =>{
    
    
    fetch("http://192.168.1.6:3000/getdonor")
    .then((respone) => respone.json())
    .then((responeData) => {
        this.setState({ arr : responeData})
    })
   var donor_name = arr[1]
   var donor_address = arr[4]
    return(
        <View style={{ flex: 1}}>
            <View style={{flex: 1, backgroundColor:'dodgerblue'}} >
      
            <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
      <Text style={{left:115, top:55, fontSize: 30}}>Donor Availability</Text>
      <Text style={{left:115, top:56, fontSize: 15, width:200}}>(NOTE:If empty, try checking again or wait till a donor is found.)</Text>
      <Text style={{left:60, top:80, fontSize: 30}}>Donor Available:</Text>
      <Text style={{left:60, top:85, fontSize: 30}}>{donor_name}</Text>
      <Text style={{left:60, top:90, fontSize: 30}}>{donor_address}</Text>
        
      <Button
            mode="contained"
            style={{height: 40, width:150, left:150, top: 180 ,}}
            color="blue"
            onPress={() => logout(props)}>
            Accept
          </Button>
          
      </View>
     
    </View>
    );
};

export default DonationScreen;
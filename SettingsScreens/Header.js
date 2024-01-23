import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';

export default function Header({ screen }) {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={24} color="white" />
      </TouchableOpacity>
     {/* <View>
        <Text style={color="#fffff"}>{screen}</Text>
      </View> */} 
      <Image style={headerStyles.LogoImage} source={require('../assets/iconImageTransparent.png')} />
      
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    backgroundColor: '#00004D',
    elevation: 5,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  LogoImage: {
    width: 110,
    height: '100%',
  }
});
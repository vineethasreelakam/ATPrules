import React from 'react';
import { View, Button, TouchableOpacity,Platform, Pressable, Text } from 'react-native';
import { RuleStyles } from '../Rules/Styles.js';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { NavigationStyles } from '../Rules/Styles.js';
import BackButton from '../Component/BackButton.js';
export default function RuleNavigationButtons({ props }) {

  return (
    <>
    <BackButton/>
      <View style={RuleStyles.ButtonContainer}>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'} title='HOME' onPress={() => props.nav.navigate('ATPRulesList')}
          //  <FontAwesome5 name="home" size={24} color={"white"} style={NavigationStyles.ButtonIconStyle} />
          />
        </View>
        <View style={{...RuleStyles.ButtonViewStyle,paddingBottom:3}}>
          {/* <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
            title='< Prev Page'
            style={{...RuleStyles.ButtonViewStyle ,backgroundColor:'red'}}
            //title={<MaterialIcons style={NavigationStyles.ButtonIconStyle} name="navigate-before"/>}
            onPress={() => props.nav.navigate(props.prev)}
          /> */}
          <Pressable onPress={() => props.nav.navigate(props.prev)}><Text  style={{color: '#FFFFFF',fontSize:14}}>{'< Prev Page'}</Text></Pressable>
        </View>
        <View style={{...RuleStyles.ButtonViewStyle, marginLeft:25 ,paddingBottom:3}}>
          {/* <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
            title='Next Page >'
            //title={<MaterialIcons style={NavigationStyles.ButtonIconStyle} name="navigate-next"/>}
            onPress={() => props.nav.navigate(props.next)} /> */}
            <Pressable onPress={() => props.nav.navigate(props.next)}><Text  style={{color: '#FFFFFF',fontSize:14}}>{'Next Page >'}</Text></Pressable>
        </View>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
           title='END' onPress={() => props.nav.navigate('Rule188')} />
        </View>
      </View>



    </>
  );
}


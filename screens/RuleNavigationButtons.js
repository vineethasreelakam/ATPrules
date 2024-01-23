import React from 'react';
import { View, Button, TouchableOpacity,Platform } from 'react-native';
import { RuleStyles } from '../Rules/Styles.js';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { NavigationStyles } from '../Rules/Styles.js';
export default function RuleNavigationButtons({ props }) {

  return (
    <>
      <View style={RuleStyles.ButtonContainer}>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'} title='HOME' onPress={() => props.nav.navigate('ATPRulesList')}
          //  <FontAwesome5 name="home" size={24} color={"white"} style={NavigationStyles.ButtonIconStyle} />
          />
        </View>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
            title='< BACK'
            //title={<MaterialIcons style={NavigationStyles.ButtonIconStyle} name="navigate-before"/>}
            onPress={() => props.nav.navigate(props.prev)}
          />
        </View>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
            title='NEXT >'
            //title={<MaterialIcons style={NavigationStyles.ButtonIconStyle} name="navigate-next"/>}
            onPress={() => props.nav.navigate(props.next)} />
        </View>
        <View style={RuleStyles.ButtonViewStyle}>
          <Button color={Platform.OS==='android' ?'#00004D': '#FFFFFF'}
           title='END' onPress={() => props.nav.navigate('Rule188')} />
        </View>
      </View>



    </>
  );
}


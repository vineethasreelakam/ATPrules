import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ATPRulesList from './ATPRulesList.js';
import { AllPageIndexList } from './IndexList.js';
import { MaterialIcons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
export default function RulesListNavigation({ navigation }) {
  return (

    // title for stack screen  -  options={{ title: 'ATP Rules List' }}

    <Stack.Navigator initialRouteName="ATPRulesList" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="ATPRulesList" component={ATPRulesList} />
      {AllPageIndexList.map((item) => {
        return (
          <Stack.Screen key={item.id} name={item.pageName} component={item.comp} />
        );
      })}

    </Stack.Navigator>

  );
};

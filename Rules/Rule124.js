import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { NavigationStyles,RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import { SubIndex9_List } from '../screens/SubIndexList.js';

export default function Rule124({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        
        <ScrollView  minimumZoomScale={1} maximumZoomScale={10}>

          {SubIndex9_List.map((item) => {
            return (
                <TouchableOpacity key={item.id} style={NavigationStyles.container}
                  onPress={() => navigation.navigate(item.pageName)}>
                  <Text style={NavigationStyles.text}>  {item.name} </Text>
                  <MaterialIcons style={NavigationStyles.IconStyle} name="navigate-next" />
                </TouchableOpacity>
            );
          })}
        <Text>{'\n\n'}</Text>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule123', next: 'Rule125', nav: navigation }} />
    </>
  );
}

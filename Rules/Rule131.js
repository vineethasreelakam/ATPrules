import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { NavigationStyles,RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import { SubIndex10_List } from '../screens/SubIndexList.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule131({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        
        <ScrollView  minimumZoomScale={1} maximumZoomScale={10}>

          {SubIndex10_List.map((item) => {
            return (
                <TouchableOpacity key={item.id} style={NavigationStyles.container}
                  onPress={() => navigation.navigate(item.pageName)}>
                  <HighlightText style={NavigationStyles.text}>  {item.name} </HighlightText>
                  <MaterialIcons style={NavigationStyles.IconStyle} name="navigate-next" />
                </TouchableOpacity>
            );
          })}
        <HighlightText>{'\n\n'}</HighlightText>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule130', next: 'Rule132', nav: navigation }} />
    </>
  );
}


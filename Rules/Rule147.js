import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule147({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.11 - Media Backdrop</Text>
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule147.png'}}/>
          <Text>{'\n\n'}</Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule146', next: 'Rule148', nav: navigation }} />
    </>
  );
}


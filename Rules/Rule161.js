import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule161({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT F - Lighting</Text>
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule161.png'}}/>
          <Text>{'\n\n'}</Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule160', next: 'Rule162', nav: navigation }} />
    </>
  );
}


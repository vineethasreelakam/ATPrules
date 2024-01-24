import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule148({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.12 - Court Surface Color</Text>
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule148.png'}}/>
          <Text>{'\n\n'}</Text>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule147', next: 'Rule149', nav: navigation }} />
    </>
  );
}

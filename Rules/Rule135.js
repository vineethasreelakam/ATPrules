import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule135({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.04 - Positioning</Text>
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule135_1.png'}}/>
          <Text style={RuleStyles.Description}>
            MUST be placed closest to the tournament logo of tournament title, away from sponsor logos.
             NEVER add to sponsor logo strips
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule135_2.png'}}/>
          <Text style={RuleStyles.Description}>
          MUST be placed closest to the tournament logo of tournament title, away from sponsor logos. 
          NEVER add to sponsor logo strips
            {'\n\n'}
          </Text>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule134', next: 'Rule136', nav: navigation }} />
    </>
  );
}


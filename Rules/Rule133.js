import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule133({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.02 - Size Relationships - Men Only Events
          </Text>
          </Text>
          

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule133_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3}>Size Relationship: </Text>
            Tournament Logo{'\n\n'}
            MUST be a minimum of 60% of the surfaced area of the tournament logo
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule133_2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3}>Size Relationship: </Text>
            Tournament Title{'\n\n'}
            MUST be a minimum of 60% of the surface area of the tournament title
            {'\n\n'}
          </Text>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule132', next: 'Rule134', nav: navigation }} />
    </>
  );
}


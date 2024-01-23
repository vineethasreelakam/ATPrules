import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule162({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT G - ATP Challenger Tour Logo 
            (Print & Promotional Materials)</Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>Basic Guidelines:</Text>{'\n\n'}
            1) The brand mark may not be modified in any way or redrawn. The two fixed elements
             (the ATP Challenger Tour logo type; the official ATP Challenger Tour logo)
            may not be separated from each other.{'\n\n'}

            2) The ATP Challenger Tour brand mark may only be reproduced in its provided
            format.{'\n\n'}

            3) The ATP Challenger Tour brand mark may not be used on a background that may
            make it appear indistinct. It shall always appear on an uncluttered background to
            ensure clarity.{'\n\n'}

            4) The ATP Challenger Tour brand mark shall be positioned in its own clear space,
            standing apart from other images and/or brand marks. In order to achieve this, an
            area of clear space equal to the width of the stem of the T must always be on all
            sides of the brand mark.{'\n\n'}
            
            5) The ATP Challenger Tour brand mark may not be positioned like a sponsor. It
            should be separated from sponsor logos in order to stand out as an endorsement
            of the quality and authenticity of the tournament.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule161', next: 'Rule163', nav: navigation }} />
    </>
  );
}


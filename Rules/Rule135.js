import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule135({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.04 - Positioning</HighlightText>
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule135_1.png'}}/>
          
          {'\t\t'}<HighlightText style={RuleStyles.Description}>
            MUST be placed closest to the tournament logo of tournament title, away from sponsor logos.
             NEVER add to sponsor logo strips
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule135_2.png'}}/>
          {'\t\t'}<HighlightText style={RuleStyles.Description}>
          MUST be placed closest to the tournament logo of tournament title, away from sponsor logos. 
          NEVER add to sponsor logo strips
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule134', next: 'Rule136', nav: navigation }} />
    </>
  );
}


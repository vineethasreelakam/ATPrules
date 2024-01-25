import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule133({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.02 - Size Relationships - Men Only Events
          </HighlightText>
          </HighlightText>
          

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule133_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3}>Size Relationship: </HighlightText>
            Tournament Logo{'\n\n'}
            MUST be a minimum of 60% of the surfaced area of the tournament logo
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule133_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3}>Size Relationship: </HighlightText>
            Tournament Title{'\n\n'}
            MUST be a minimum of 60% of the surface area of the tournament title
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule132', next: 'Rule134', nav: navigation }} />
    </>
  );
}


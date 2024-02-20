import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule26({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.01 Composition of Commitment</HighlightText>
            {'\n\n'}
            {'\t'}Each tournament’s financial commitment is composed of on-site prize money and
            tournament fee obligations unless otherwise approved by ATP.{'\n\n'}

            
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule25', next: 'Rule27', nav: navigation }} />
    </>
  );
}


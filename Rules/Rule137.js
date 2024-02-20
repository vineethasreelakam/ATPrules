import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule137({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.06.1 - Acceptable & Unacceptable uses - Men Ony
          </HighlightText>
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule137_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Green}>DO </HighlightText>{'\n\n\t'}
            place the ATP Tour Official Tournament
            Stamp closest to the tournament logo.
            Ensure it is at least 60% of the surface area
            of the tournament logo and is positioned
            away from sponsor logos, federation names
            or any other brand mark.
            {'\n\n'}
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule137_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Green}>DO </HighlightText>{'\n\n\t'}
            place the ATP Tour Official Tournament
            Stamp closest to the tournament title when it
            is used larger than, or in place of the
            tournament logo. Ensure it is at least 60% of
            the surface area of the tournament title and
            is positioned away from the sponsor logos,
            federation names or any other brand mark.
            {'\n\n'}
          </HighlightText>

          </ZoomText>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule136', next: 'Rule138', nav: navigation }} />
    </>
  );
}


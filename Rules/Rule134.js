import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule134({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.03 - Size Relationship - Combined Events</HighlightText>
          </HighlightText>
          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
           {'\t'}<HighlightText style={RuleStyles.SubHeading3}>Size Relationship: </HighlightText>
            WTA Logo{'\n\n'}
            {'\t'}MUST be the same visual size (cover the same surface area)
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3}>Size Relationship: </HighlightText>
            Tournament Logo{'\n\n'}
            {'\t'}MUST be at a minimum, equal size to the WTA Logo or 30% of the surface area
            of the tournament logo, whichever is greater.
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3}>Size Relationship: </HighlightText>
            Tournament Title{'\n\n'}
            {'\t'}MUST be at a minimum, equal size to the WTA Logo or 30% of the surface area
            of the tournament title, whichever is greater.
            {'\n\n'}
          </HighlightText>
          </ZoomText>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule133', next: 'Rule135', nav: navigation }} />
    </>
  );
}


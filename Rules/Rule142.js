import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule142({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.06.6 - Acceptable & Unacceptable Uses -
           Combined</HighlightText>
          </HighlightText>

          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            place the ATP Tour Official
            Tournament Stamp alongside sponsor
            logos or add it to sponsor logo strips.
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            make the WTA Logo visually larger
            than the ATP Tour Official Tournament
            Stamp. DO NOT place sponsor logos
            closer to the tournament logo or
            tournament title.
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            break the exclusion area for sponsor logos.
            {'\n\n'}
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_4.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            make the size of the ATP Tour Official
            Tournament Stamp smaller than 30% of
            the surface area of the tournament logo
            tournament title.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule141', next: 'Rule143', nav: navigation }} />
    </>
  );
}


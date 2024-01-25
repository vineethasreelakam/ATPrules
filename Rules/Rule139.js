import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule139({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.06.3 - Acceptable & Unacceptable Uses -
            Men only</HighlightText>
            </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule139_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            Place sponsor logos closest to the
            tournament logo or tournament title

            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule139_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            place the ATP Tour Official Tournament
            Stamp alongside sponsor logos or add it
            to sponsor logo strips

            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule139_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            make the ATP Tour Official Tournament
            Stamp smaller that 60% of the surface
            area of the tournament logo or
            tournament title

            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule139_4.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            break the exclusion area for sponsor
            logos

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule138', next: 'Rule140', nav: navigation }} />
    </>
  );
}


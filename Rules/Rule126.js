import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule126({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>9.02 Eligibility</HighlightText>{'\n\n'}

            Unless otherwise approved by ATP, Pepperstone ATP Rankings and Pepperstone
            ATP Doubles Rankings points are awarded to all tournaments or series of tournaments that meet the following criteria. (An event seeking an exception must petition
            ATP in writing at least 90 days in advance of the tournament.):
            {'\n\n'}
            A.Events classified as ATP Tour and ATP Challenger Tour events. Also, Grand Slam,
            ITF M 25+H, ITF M 25, ITF M 15+H and ITF M 15 events.
            {'\n\n'}
            B.Prize money must be paid in a manner consistent with the breakdowns approved by
            ATP.
            {'\n\n'}
            C.Selection of direct acceptances shall be determined according to the Pepperstone
            ATP Rankings or Pepperstone ATP Doubles Rankings. The Pepperstone ATP Rankings and Pepperstone ATP Doubles Rankings lists utilized shall not be more than 42
            days prior to the start of the tournament.
            {'\n\n'}
            D. The minimum size for a draw is 28 singles players and 16 doubles teams unless
            otherwise approved by ATP.
            {'\n\n'}
            E. The composition of the draws shall be consistent with ATP rules. Tournaments are
            required to provide hotel accommodation consistent with ATP rules.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule125', next: 'Rule127', nav: navigation }} />
    </>
  );
}


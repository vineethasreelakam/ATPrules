import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule56({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.05 Agents, Tier I and Tier II </HighlightText>
            {'\n\n'}
            A list of Tier I and Tier II Agents will be established and revised on a yearly basis
            following the conclusion of the Nitto ATP Tour Finals. The criteria for becoming a Tier
            I or II Agent is defined below.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Tier I</HighlightText>
            {'\n\n'}
            1) Minimum of five (5) years of service, beginning with the first year’s representation
            of an ATP player, and
            {'\n\n'}
            2) Agent’s Player must be active, and
            {'\n\n'}
            3) Number of Singles Players representing
            {'\n\n'}
            a) Ranking 1-10 = 1 player, or
            {'\n\n'}
            b) Ranking 11-50 = 2 players, or
            {'\n\n'}
            c) Ranking 11-100 = 4 players, or
            {'\n\n'}
            4) Number of Doubles Players representing
            {'\n\n'}
            a) Ranking 1-20 = 4
            {'\n\n'}
            b) If agent does not represent four (4) doubles players, each doubles player
            ranked in the top 20 shall count as ½ player towards meeting the singles
            criteria.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Tier II</HighlightText>
            {'\n\n'}
            Agents that do not meet the criteria to be in Tier I may apply for consideration as a
            Tier II Agent. There are no benefits associated with Tier II classification
            {'\n\n'}

            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule55', next: 'Rule57', nav: navigation }} />
    </>

  );
}


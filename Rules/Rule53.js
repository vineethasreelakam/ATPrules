import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule53({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.02 Tour Manager</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Appointment</HighlightText>
            {'\n\n'}
            ATP shall provide a Tour Manager for each ATP Tour tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Responsibilities</HighlightText>
            {'\n\n'}
            1) The Tour Manager shall be present for all sign ins.
            {'\n\n'}
            2) The Tour Manager shall be present at the making of all draws.
            {'\n\n'}
            3) The Tour Manager shall act as the player representative for all aspects of the
            tournament, including as a member of the scheduling committee.
            {'\n\n'}
            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule52', next: 'Rule54', nav: navigation }} />
    </>
  );
}


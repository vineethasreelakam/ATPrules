import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule52({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.01 Tournament Director</HighlightText>
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.Appointment</HighlightText>
            {'\n\n'}
            {'\t\t'}1) A tournament may change the Tournament Director named in the tournament
            application by submitting the proposed change to the ATP Board for approval.
            {'\n\n'}
            {'\t\t'}2) The ATP Board may require a tournament to change the Tournament Director
            upon a finding that such Tournament Director has failed to or refused to comply
            with any provision of ATP’s rules and regulations.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.Responsibilities</HighlightText>
            {'\n\n'}
            Each Tournament Director shall:
            {'\n\n'}
            {'\t\t'}1) Act in cooperation with ATP staff on-site.
            {'\n\n'}
            {'\t\t'}2) Be responsible for tournament compliance with all rules and regulations.
            {'\n\n'}
            {'\t\t'}3) Not go on court during a match (including warm-up) or otherwise become involved in any Code of Conduct matter.
            {'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading2}>NOTE:</HighlightText> Tournament Directors are prohibited from playing in their own event (Tour
            Policy)
            {'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule51', next: 'Rule53', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule54({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.03 Public Relations (“PR”)</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Appointment</HighlightText>
            {'\n\n'}
            1) ATP will provide a PR representative for each ATP Tour tournament to coordinate
            advance publicity, help organize facilities and provide media assistance on-site.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Responsibilities </HighlightText>
            {'\n\n'}
            1) The PR representative shall liaise with journalists, players and sponsors.
            {'\n\n'}
            2) The PR representative shall organize and supervise post-match press conferences.
            {'\n\n'}
            3) The PR representative shall coordinate exclusive interviews.
            {'\n\n'}
            4) The PR representative shall provide statistical and biographical information to
            journalists.
            {'\n\n'}
            5) The PR representative shall disseminate information to international journalists.
            {'\n\n'}
            6) The PR representative shall suggest story lines to journalists.

            {'\n\n'}
            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule53', next: 'Rule55', nav: navigation }} />
    </>
  );
}


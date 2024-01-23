import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';

export default function Rule125({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>9.01 Definitions</Text>{'\n\n'}

            A.The 2024 Pepperstone ATP Doubles Team Rankings is the mathematical method of
            ranking men’s doubles pairs on a calendar-year basis.
            {'\n\n'}
            B.The Pepperstone ATP Rankings and the Pepperstone ATP Doubles Rankings are
            the objective merit-based method used for determining qualification for entry and
            seeding in all tournaments for both singles and doubles.
            {'\n\n'}
            C.The Pepperstone ATP Rankings and Pepperstone ATP Doubles Rankings are run
            approximately 45 times per year.
            {'\n\n'}
            D.Every player who has earned Pepperstone ATP Rankings points or Pepperstone
            ATP Doubles Rankings points in an eligible professional tournament during the entry
            ranking period is included in the Pepperrstone ATP Rankings or Pepperstone ATP
            Doubles Rankings.
            {'\n\n'}
            E. The Pepperstone ATP Rankings or Pepperstone ATP Doubles Rankings period is the
            immediate past 52 weeks, except for:
            {'\n\n'}
            * Nitto ATP Finals, singles and doubles, which is dropped on the Monday following
            the last ATP Tour event of the following year.
            {'\n\n'}
            * ITF tournaments that are only entered into the system on the second Monday
            following the tournament’s week.
            {'\n\n'}
            Once entered, all tournaments, except for the Nitto ATP Finals, remain in the
            system for 52 consecutive weeks.

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule124', next: 'Rule126', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule129({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>9.05 2023 Pepperstone ATP Doubles Team Rankings</Text>{'\n\n'}
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>A. </Text>
            Each team is ranked according to its total points from its best 19 results from all eligible tournaments (Grand Slam, ATP Tour, including the Nitto ATP Finals, ATP Challenger Tour, ITF Men’s WTT) played in the calendar year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>B.</Text>
            Loser points for the rounds achieved are awarded to players in any tournament not
            completed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>C.Ties. </Text>
            Ties between two or more teams having the same total number of points shall
            be broken using the same methods as for breaking ties between players in the Pepperstone ATP Doubles Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>D.Points. </Text>
            The provisions set forth under 7.08 E., including a), b) and c), apply as well
            when calculating the 2023 Pepperstone ATP Doubles Team Rankings.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule128', next: 'Rule130', nav: navigation }} />
    </>
  );
}


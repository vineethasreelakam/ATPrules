import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule12({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.11 Waiver of Claims</Text>{'\n\n'}
            All players entering ATP Tour and ATP Challenger Tour tournaments agree, as a
            condition of their entry, that for themselves, their executors, administrators, heirs and
            personal representatives, all claims of any kind, nature and description are waived,
            including past, present or future claims and injuries, if any, sustained in traveling to
            or from, or participating in, any ATP Tour or ATP Challenger Tour tournament, as
            against ATP, the tournaments concerned and the organizers and sponsors of the
            tournaments and circuits thereon.


            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule11', next: 'Rule13', nav: navigation }} />
    </>
  );
}


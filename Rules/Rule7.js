import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule7({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule7.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.06 Commitment to Rules/ATP Official Rulebook</Text>{'\n\n'}

            All ATP Tour and ATP Challenger Tour tournaments are subject to the jurisdiction of
            ATP and shall comply with, be bound by and conduct the tournament in accordance
            with ATP rules and regulations.{'\n\n'}
            The online ATP Official Rulebook is the official version of the rules.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule6', next: 'Rule8', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule62({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.11 Ball Persons</Text>
            {'\n\n'}
            Each ATP Tour and ATP Challenger Tour tournament must provide ball persons for all
            main draw and qualifying competition matches. Ball persons should be on-site and
            available at a reasonable time prior to the first match of the day and there shall be ball
            persons available until the conclusion of play each day.
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>A.Number.</Text>
            {'\n\n'}
            At ATP Tour events, six (6) ball persons are recommended per court. At Challenger
            Tour events a minimum number of four (4) ball persons is required per court, although
            it is recommended to provide six (6)
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B.Clothing</Text>
            {'\n\n'}
            Clothing provided by the tournament for ball persons shall not be solid white, yellow
            or other colors that may interfere with the vision of the players, unless otherwise approved by ATP. It is recommended that dark-colored clothing be avoided for outdoor
            tournaments played in high temperatures. Clothing should not be identical to clothing
            provided to the Line Umpires.
            {'\n\n'}

            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule61', next: 'Rule63', nav: navigation }} />
    </>
  );
}


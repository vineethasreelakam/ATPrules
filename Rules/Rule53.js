import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule53({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.02 Tour Manager</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Appointment</Text>
            {'\n\n'}
            ATP shall provide a Tour Manager for each ATP Tour tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Responsibilities</Text>
            {'\n\n'}
            1) The Tour Manager shall be present for all sign-ins.
            {'\n\n'}
            2) The Tour Manager shall be present at the making of all draws.
            {'\n\n'}
            3) The Tour Manager shall act as the player representative for all aspects of the
            tournament, including as a member of the scheduling committee.
            {'\n\n'}
            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule52', next: 'Rule54', nav: navigation }} />
    </>
  );
}


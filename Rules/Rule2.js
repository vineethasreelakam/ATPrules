import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule2({ navigation }) {

  return (
    <>          
      <View style={RuleStyles.Layout}>   
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule1_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.01 Categories of Tournaments{'\n\n'}</Text>
            
            In official men’s professional tennis, there are five (5) categories of events. ATP Tour
            tournaments and ATP Challenger Tour tournaments are governed by ATP. Unless otherwise specified, all regulations are applicable to both ATP Tour and ATP Challenger
            Tour tournaments.{'\n\n'}
            ATP Tour tournaments{'\n\n'}
            {'\t\t'}ATP Tour Finals (singles & doubles){'\n\n'}
            {'\t\t'}United Cup{'\n\n'}
            {'\t\t'}ATP Tour Masters 1000{'\n\n'}
            {'\t\t'}ATP Tour 500{'\n\n'}
            {'\t\t'}ATP Tour 250{'\n\n'}
            ATP Challenger Tour tournaments{'\n\n'}
            Grand Slams{'\n\n'}
            Davis Cup{'\n\n'}
            ITF Men’s WTT{'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule1', next: 'Rule3', nav: navigation }} />
    </>
  );
}


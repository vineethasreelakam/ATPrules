import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule2({ navigation }) {

  return (
    <>          
      <View style={RuleStyles.Layout}>   
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule1_1.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.01 Categories of Tournaments{'\n\n'}</HighlightText>
            
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
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule1', next: 'Rule3', nav: navigation }} />
    </>
  );
}


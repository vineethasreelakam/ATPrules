import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule4({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule4.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.03 Match Schedule Plan{'\n\n'}</HighlightText>


            Each tournament shall provide ATP, at least one hundred and eighty (180) days prior
            to the start of the tournament, a typed schedule that includes proposed daily starting
            times and number of courts to be used.
            {'\n\n'}
            ATP Challenger Tour tournaments should submit their match schedule plan at least
            ninety (90) days prior to the start of the tournament.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule3', next: 'Rule5', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule130({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>9.06 Retiring from the Professional Tennis Circuit</HighlightText>{'\n\n'}
            Any player wishing to officially retire from the professional tennis circuit must submit a
            signed Player Retirement Form to the Vice President, Player Relations of ATP. Once
            the signed form is received the player shall be removed from the Pepperstone ATP
            Rankings (singles and doubles). The player also agrees to the terms of the Tennis
            Anti-Doping Program regarding reinstatement protocol
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule129', next: 'Rule131', nav: navigation }} />
    </>
  );
}


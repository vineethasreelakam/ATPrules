import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule144({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.08 - Scoreboards / Draw Boards</HighlightText>
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule144.png'}}/>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule143', next: 'Rule145', nav: navigation }} />
    </>
  );
}


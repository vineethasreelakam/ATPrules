import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule148({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.12 - Court Surface Color</HighlightText>
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule148.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule147', next: 'Rule149', nav: navigation }} />
    </>
  );
}


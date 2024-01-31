import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule122({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>VIII. THE CODE</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>8.06 Tennis Anti-Corruption Program (“TACP”)</HighlightText>{'\n\n'}

            Complete rules of the TACP can be found at 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itia.tennis/tacp/rules');
            }}>
            https://www.itia.tennis/tacp/rules
            </HighlightText>.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule121', next: 'Rule123', nav: navigation }} />
    </>
  );
}


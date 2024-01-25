import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule10({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.09 Mandatory Player Meeting</HighlightText>{'\n\n'}

            Mandatory player meetings may be scheduled throughout the year as determined
            and announced in advance by ATP. These meetings are limited to and mandatory for
            all main draw singles and doubles players. Player members not entered will be sent
            the minutes. {'\n\n'}
            The penalty for non-attendance is the following:{'\n\n'}
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule10_1.png'}}/>

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule9', next: 'Rule11', nav: navigation }} />
    </>
  );
}


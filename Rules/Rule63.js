import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule63({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.12 ATP/GRAND SLAMS/ITF/WTA Code of Conduct for Officials</HighlightText>
            {'\n\n'}
            A.The ATP, the Grand Slam Tournaments, the ITF and the WTA as members of the Joint
            Certification Programme require a high standard of professionalism from all Certified
            Officials (National, Green, White, Bronze, Silver and Gold) and all other Officials,
            (together, “Officials”) working at ATP, Grand Slam, ITF and WTA events. All Officials
            are automatically bound by, and must comply with, this Code of Conduct for Officials
            (“Code”). The ATP, Grand Slam Board, ITF and WTA shall continue to have jurisdiction over a retired Official under the Code and, as applicable, ATP, Grand Slam, ITF
            and WTA Tournament Regulations and Codes of Conduct in respect of matters taking
            place prior to his/her retirement.
            {'\n\n'}

            The full text of the Code of Conduct for Officials can be found at the following website:
            {'\n\n'}
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itftennis.com/en/about-us/governance/rules-and-regulations/');
            }}>
            weblink.
          </HighlightText>            
            {'\n\n'}
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule61', next: 'Rule64', nav: navigation }} />
    </>
  );
}


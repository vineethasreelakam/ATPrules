import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule5({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.04 Finals Options</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A. General</HighlightText>{'\n\n'}
            1) When the singles and doubles finals are to be played on the same day, the doubles final shall be scheduled prior to the singles final, unless otherwise approved
            by ATP or due to player conflict.{'\n\n'}
            2) When possible, there should be one Awards Ceremony that follows the completion of the singles final. It is mandatory that both singles and doubles finalist
            players participate in the awards ceremony, whether ceremonies are separate or
            combined.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B. Singles</HighlightText>{'\n\n'}
            1) If any ATP Tour tournament singles final is not played, the tournament may elect
            to replace it as follows:{'\n\n'}
            a) Schedule a singles exhibition; or{'\n\n'}
            b) Re-schedule the doubles final in its place; or{'\n\n'}
            c) In the case where the doubles final has been completed or is in progress
            when it is discovered that there will not be a singles final, the tournament may
            elect to have the doubles finalists play a one (1) hour exhibition.{'\n\n'}
            2) The awards ceremony shall take place immediately following the singles or doubles exhibition or following the doubles final if it has been re-scheduled.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>C. Doubles.</HighlightText>{'\n\n'}
            The doubles final should be scheduled approximately two (2) hours prior to the published start time of the singles final, 
            unless otherwise approved by ATP.{'\n\n'}
            1) Exceptions shall be when one (1) or both of the singles finalists are also involved
            in the doubles final.{'\n\n'}
            2) Tournaments may petition ATP Senior Vice President - Rules & Competition for
            an exemption to this provision; however, it is the responsibility of the tournament
            to show that there are valid reasons for justifying the exemption.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule4', next: 'Rule6', nav: navigation }} />
    </>
  );
}


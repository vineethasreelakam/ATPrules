import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule117({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>VIII. THE CODE</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
         <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>8.01 Tournament Obligations</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A.Application Requirements</HighlightText>
            {'\n\n'}
            Each tournament agrees to comply with all provisions contained in the ATP Tour
            tournament and ATP Challenger Tour Applications where applicable.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Ranking Based Entry</HighlightText>
            {'\n\n'}
            Each tournament agrees to accept entries of tennis players on the basis of the Pepperstone ATP Rankings and the Pepperstone ATP Doubles Rankings.
            {'\n\n'}
            Notwithstanding the foregoing, Russian and Belarusian nationals may be required
            (as determined solely by ATP) to provide a signed Declaration of Neutrality (in a form
            approved by ATP) in order for them to enter and participate in certain tournaments.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Exception 1: </HighlightText>
            In the event that a government or country imposes restrictions preventing Russian or Belarusian nationals from entering the country after the singles
            or doubles main draw entry deadline, ATP reserves the right, in its sole discretion, to
            permit the tournament to proceed. In addition, in such instance, ATP may allow the
            affected Russian or Belarusian nationals to play in another ATP event.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Exception 2: </HighlightText>
            ATP will accept tournaments in countries where Covid-19 vaccination
            is required for entry into the country.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>C.Other Circuit</HighlightText>
            {'\n\n'}
            Each ATP Tour tournament and ATP Challenger Tour tournament agrees to refrain
            from being advertised or promoted as part of any other circuit or series of tournaments, unless expressly authorized by ATP.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule116', next: 'Rule118', nav: navigation }} />
    </>
  );
}


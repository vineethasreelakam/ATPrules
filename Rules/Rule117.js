import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';

export default function Rule117({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>VIII. THE CODE</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
         <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>8.01 Tournament Obligations</Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>A.Application Requirements</Text>
            {'\n\n'}
            Each tournament agrees to comply with all provisions contained in the ATP Tour
            tournament and ATP Challenger Tour Applications where applicable.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Ranking Based Entry</Text>
            {'\n\n'}
            Each tournament agrees to accept entries of tennis players on the basis of the Pepperstone ATP Rankings and the Pepperstone ATP Doubles Rankings.
            {'\n\n'}
            Notwithstanding the foregoing, Russian and Belarusian nationals may be required
            (as determined solely by ATP) to provide a signed Declaration of Neutrality (in a form
            approved by ATP) in order for them to enter and participate in certain tournaments.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Exception 1: </Text>
            In the event that a government or country imposes restrictions preventing Russian or Belarusian nationals from entering the country after the singles
            or doubles main draw entry deadline, ATP reserves the right, in its sole discretion, to
            permit the tournament to proceed. In addition, in such instance, ATP may allow the
            affected Russian or Belarusian nationals to play in another ATP event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Exception 2: </Text>
            ATP will accept tournaments in countries where Covid-19 vaccination
            is required for entry into the country.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Other Circuit</Text>
            {'\n\n'}
            Each ATP Tour tournament and ATP Challenger Tour tournament agrees to refrain
            from being advertised or promoted as part of any other circuit or series of tournaments, unless expressly authorized by ATP.

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule116', next: 'Rule118', nav: navigation }} />
    </>
  );
}


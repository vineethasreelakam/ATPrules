import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule34({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.09 On-Site Prize Money</HighlightText>{'\n\n'}
            {'\t'}Each ATP Tour and ATP Challenger Tour tournament is required to offer and pay as
            part of its financial commitment the on-site prize money shown in “Exhibit J” plus
            hotel accommodations, unless otherwise determined by ATP. The minimum prize
            money for ATP Challenger Tour Tournaments is $41,000/€36,900.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.ATP Tour Tournaments</HighlightText>{'\n\n'}
            Prize money and fee payments by all ATP Tour level tournaments shall be determined as follows:{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) U.S. Tournaments: </HighlightText>
            All prize money, fees etc. must be paid in USD.{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>2) European Region Tournaments: </HighlightText>
            All prize money, fees etc. must be paid in EUR.{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>3) All Other Tournaments: </HighlightText>
            All prize money, fees etc. must be paid in USD. Any
            change from USD payment must be approved by the ATP Board.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.ATP Challenger Tour Tournaments</HighlightText>{'\n\n'}
            Prize money and fee payments by all ATP Challenger Tour tournaments shall be
            determined as follows:{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) U.S. Challengers: </HighlightText>
            All prize money and fees must be paid in USD.{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>2) European Region Challengers: </HighlightText>
            All prize money and fees must be paid in EUR.{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>3) All Other ATP Challenger Tour Events: </HighlightText>
            Prize money and fees must be paid in USD.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule33', next: 'Rule35', nav: navigation }} />
    </>
  );
}


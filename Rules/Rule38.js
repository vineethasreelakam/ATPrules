import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule38({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.14 Withholding From Prize Money</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A.</HighlightText>
            Each ATP Tour and ATP Challenger Tour tournament shall withhold from prize money
            only a player’s applicable income tax deduction, non-member service fee, fines, advances 
            and other ATP designated expenses.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>
            Each ATP Tour and ATP Challenger Tour tournament shall document the player income tax
             deduction, if any, and provide players on-site with a withholding income tax
            receipt.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>C.</HighlightText>
            When a fine is deducted from a player’s prize money paid in a currency other than
            the assessed currency, the exchange rate used (on the day the fine is deducted) by
            ATP Tour and ATP Challenger Tour tournament for the payment of prize money shall
            be applicable to the payment of the fine.{'\n\n'}


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule37', next: 'Rule39', nav: navigation }} />
    </>
  );
}


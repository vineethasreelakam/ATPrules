import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule35({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.11 On-Site Prize Money Adjustment</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A. Exchange Rate Adjustment Rule</HighlightText>{'\n\n'}
            There will be no prize money adjustment for tournaments in the U.S. and tournaments in ATP’s European Group, except for those in non euro based countries. For
            all other tournaments, the on-site prize money will be increased or decreased from
            approved prize money levels when there are significant exchange rate changes between USD or EUR / local currency. The amount of the prize money adjustment shall
            be determined as follows:{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>1) </HighlightText>
            As of March 31, June 30, September 30 and December 31 of each year, ATP will
            compare the current market exchange (ratio of local currency to USD or EUR)
            with the 5-year average of the same currency exchange rate for each non-U.S./
            non-European group and calculate the change between the current rate and average rate as a percentage of the average rate. Prize money amounts for tournaments in countries where more than a 10% change occurs will be adjusted by
            one-half of the percentage change subject to a maximum adjustment of 15%.
            The calculations will apply to tournaments in the following year on the dates as
            follows:{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) </HighlightText>
            March 31 calculation tournaments that begin from January 1 through March 31{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b) </HighlightText>
            June 30 calculation tournaments that begin from April 1 through June 30{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>c) </HighlightText>
            September 30 calculation tournaments that begin from July 1 through September 30{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>d) </HighlightText>
            December 31 calculation tournaments that begin from October 1 through December 31{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>2) </HighlightText>
            Pepperstone ATP Rankings points will be based on approved prize money levels
            prior to any adjustment pursuant to this section. This section will not apply to
            tournaments in countries where currencies are not actively traded.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>3) </HighlightText>
            The Exchange Rate Adjustment rule will not apply to: new ATP Tour tournaments
            who have run their event for less than 5 years, existing tournaments that relocate
            to a country with different currency for the first 5 years in the new location, existing tournaments who previously elected to opt out of this rule and ATP Challenger
            Tour events. New ATP tournaments may not opt out of this rule.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule34', next: 'Rule36', nav: navigation }} />
    </>
  );
}


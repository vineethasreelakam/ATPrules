import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule29({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.04 Fee Obligation</HighlightText>{'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.</HighlightText>
            ATP Tour and ATP Challenger Tour tournaments must pay to ATP as part of their total
            financial commitment the following fees based on prize money level and tournament
            classification, unless otherwise determined by ATP:{'\n\n'}
            {'\t\t'}ATP Tour Masters 1000{'\n\n'}
            {'\t\t\t'}• Service Fee{'\n\n'}
            {'\t\t\t'}• Category Protection Fee{'\n\n'}
            {'\t\t\t'}• Extra Week Fee{'\n\n'}
            {'\t\t'}ATP Tour 500{'\n\n'}
            {'\t\t\t'}• Service Fee{'\n\n'}
            {'\t\t\t'}• Category Protection Fee{'\n\n'}
            {'\t\t'}ATP Tour 250{'\n\n'}
            {'\t\t\t'}• Service Fee{'\n\n'}
            {'\t\t'}ATP Challenger Tour{'\n\n'}
            {'\t\t\t'}• Tournament fees shall be 5% of total prize money.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B. </HighlightText>
            All fees shall be due and payable as follows:{'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading2}>1) ATP Masters 1000 and ATP 500 Tournaments:</HighlightText>{'\n\n'}
            {'\t\t\t'}a) Six (6) months prior to the first day of the tournament, the Advance Fee is
            due:{'\n\n'}
            {'\t\t\t\t'}ATP Tour Masters 1000 {'\t\t'} $60,000/€51,000{'\n\n'}
            {'\t\t\t\t'}ATP Tour 500 {'\t\t\t\t'} $50,000/€42,500{'\n\n'}
            {'\t\t\t'}b) On the first day of the tournament, the balance of unpaid fees is due and
            payable.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading2}>2) ATP 250 Tournaments:</HighlightText>
            On the first day of the tournament, the total fee is due and payable.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading2}>3) ATP Challenger Tour Tournaments:</HighlightText>
            The full fee is due with the tournament
            application.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading2}>4) Late Payments:</HighlightText>
            Fee payments not received by due dates are subject to an initial
            2% late fee, followed by a subsequent 2% late fee every 30 days.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule28', next: 'Rule30', nav: navigation }} />
    </>
  );
}


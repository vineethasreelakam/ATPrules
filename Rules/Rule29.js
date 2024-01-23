import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule29({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.04 Fee Obligation</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.</Text>
            ATP Tour and ATP Challenger Tour tournaments must pay to ATP as part of their total
            financial commitment the following fees based on prize money level and tournament
            classification, unless otherwise determined by ATP:{'\n\n'}
            ATP Tour Masters 1000{'\n\n'}
            {'\t\t'}• Service Fee{'\n\n'}
            {'\t\t'}• Category Protection Fee{'\n\n'}
            {'\t\t'}• Extra Week Fee{'\n\n'}
            ATP Tour 500{'\n\n'}
            {'\t\t'}• Service Fee{'\n\n'}
            {'\t\t'}• Category Protection Fee{'\n\n'}
            ATP Tour 250{'\n\n'}
            {'\t\t'}• Service Fee{'\n\n'}
            ATP Challenger Tour{'\n\n'}
            {'\t\t'}• Tournament fees shall be 5% of total prize money.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B. </Text>
            All fees shall be due and payable as follows:{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>1) ATP Masters 1000 and ATP 500 Tournaments:</Text>{'\n\n'}
            a) Six (6) months prior to the first day of the tournament, the Advance Fee is
            due:{'\n\n'}
            {'\t\t'}ATP Tour Masters 1000 {'\t\t'} $60,000/€51,000{'\n\n'}
            {'\t\t'}ATP Tour 500 {'\t\t'} $50,000/€42,500{'\n\n'}
            b) On the first day of the tournament, the balance of unpaid fees is due and
            payable.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>2) ATP 250 Tournaments:</Text>{'\n\n'}
            On the first day of the tournament, the total fee is due and payable.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>3) ATP Challenger Tour Tournaments.</Text>
            The full fee is due with the tournament
            application.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>4) Late Payments.</Text>
            Fee payments not received by due dates are subject to an initial
            2% late fee, followed by a subsequent 2% late fee every 30 days.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule28', next: 'Rule30', nav: navigation }} />
    </>
  );
}


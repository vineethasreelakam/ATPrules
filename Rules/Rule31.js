import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule31({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.06 Insurance</Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>A.</Text>
            Each ATP Tour and ATP Challenger Tour tournament shall obtain and maintain general 
            liability insurance or the equivalent thereof, with an insurance carrier maintaining
            a financial rating of “A” by AM Best and acceptable to ATP.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>1) </Text>
            Masters 1000 events shall maintain a minimum limit of $10,000,000 USD.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>2) </Text>
            ATP Tour 500 and ATP Tour 250 events shall maintain limits of not less than
            $5,000,000 USD.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>3) </Text>
            ATP Challenger Tour events offering prize money of $100,000 and above shall
            maintain limits of not less than $€1,000,000 in coverage.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>4) </Text>
            ATP Challenger Tour events offering prize money less than $100,000 shall maintain 
            limits of not less than $€500,000 in coverage.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>5) </Text>
            The liability insurance shall include bodily injury and property damage liability,
            personal injury, participant legal liability, hired and non-owned auto and contractual 
            liability coverage.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>6) </Text>
            The tournament liability insurance shall name ATP Tour, Inc. (a United States
            Corporation), its director and officers, employees, agents as additional named insureds 
            with respect to any claim or suits brought against ATP, its officials, employees, 
            agents, regardless of the court of jurisdiction, arising out of the negligence of
            the tennis tournament, its directors or representatives.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>7) </Text>
            Coverage will include volunteers, on-court officials and ball persons as “named
            insureds” under the policy.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B.</Text>
            Each ATP Tour and ATP Challenger Tour tournament is responsible for determining
            whether applicable worker’s compensation statutes apply to injuries sustained by
            volunteers, sub-contractors, on-court officials or ball persons. In the absence of a
            worker’s compensation coverage requirement, it is recommended that the tournament purchase 
            excess medical insurance for the event to provide medical payments
            coverage to injured volunteers, on-court officials or ball persons involved in the event.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>C.</Text>
            All such insurance shall provide, not less than thirty (30) days, prior written notice to
            ATP of cancellation.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>D.</Text>
            Each ATP Tour and ATP Challenger Tour tournament shall furnish to ATP no later
            than sixty (60) days prior to such tournament a certificate of insurance from such
            insurance carrier certifying compliance with the above requirements.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule30', next: 'Rule32', nav: navigation }} />
    </>
  );
}


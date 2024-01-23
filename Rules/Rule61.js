import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule61({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.10 Chief of Umpires</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Assignment and Designation Process</Text>
            {'\n\n'}
            ATP Tour and ATP Challenger Tour tournaments are required to hire a certified Chief
            of Umpires approved by ATP, unless otherwise determined by ATP.
            <Text style={RuleStyles.SubHeading2}>B.Fees and Expenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour and ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            Each tournament must provide each Chief of Umpires with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player
            hotel or another hotel approved by ATP or the Supervisor.
            {'\n\n'}
            Each tournament shall pay a fair and reasonable fee and travel expense to the Chief
            of Umpires hired by the tournament.

            <Text style={RuleStyles.SubHeading2}>C.General </Text>
            {'\n\n'}
            The Chief of Umpires is approved by ATP, hired by the tournament and is responsible
            for having sufficient quality Line Umpires assigned to each match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D. Responsibilities </Text>
            {'\n\n'}
            1) Recruit a sufficient number of competent officials for the tournament. Be prepared
            to respond to or make recommendations to the Fulltime Official who is coordinating assignments and designations of all necessary and required Chair Umpires.
            {'\n\n'}
            2) Conduct the necessary pre-tournament training of officials including review of all
            appropriate ATP Rules and Regulations.
            {'\n\n'}
            3) Prepare a list of officials, which shall include the mailing address and national
            or local certifications, if any, of all officials used during the tournament. A copy of
            such list shall be delivered to the Referee and to the Supervisor.
            {'\n\n'}
            4) Be on-site at all times during play. The Chief of Umpires may not be a chair or Line
            Umpire unless authorized by the Supervisor.
            {'\n\n'}
            5) Schedule the on-court assignments of Line Umpires for each day of the tournament, subject to the approval of the Supervisor. Line umpires for the quarterfinals,
            semi-finals and finals must have worked a minimum of two (2) days prior to the
            quar     terfinals and have the Supervisor’s specific approval.
            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule59', next: 'Rule62', nav: navigation }} />
    </>
  );
}


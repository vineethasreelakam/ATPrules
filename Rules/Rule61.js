import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule61({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.10 Chief of Umpires</HighlightText>
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.Assignment and Designation Process</HighlightText>
            {'\n\n'}
            {'\t\t'}ATP Tour and ATP Challenger Tour tournaments are required to hire a certified Chief
            of Umpires approved by ATP, unless otherwise determined by ATP.{'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.Fees and Expenses</HighlightText>
            {'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour and ATP Challenger Tour Tournaments</HighlightText>
            {'\n\n'}
            {'\t\t\t'}Each tournament must provide each Chief of Umpires with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player
            hotel or another hotel approved by ATP or the Supervisor.
            {'\n\n'}
            {'\t\t\t'}Each tournament shall pay a fair and reasonable fee and travel expense to the Chief
            of Umpires hired by the tournament.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.General </HighlightText>
            {'\n\n'}
            {'\t\t'}The Chief of Umpires is approved by ATP, hired by the tournament and is responsible
            for having sufficient quality Line Umpires assigned to each match.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>D. Responsibilities </HighlightText>
            {'\n\n'}
            {'\t\t'}1) Recruit a sufficient number of competent officials for the tournament. Be prepared
            to respond to or make recommendations to the Fulltime Official who is coordinating assignments and designations of all necessary and required Chair Umpires.
            {'\n\n'}
            {'\t\t'}2) Conduct the necessary pre-tournament training of officials including review of all
            appropriate ATP Rules and Regulations.
            {'\n\n'}
            {'\t\t'}3) Prepare a list of officials, which shall include the mailing address and national
            or local certifications, if any, of all officials used during the tournament. A copy of
            such list shall be delivered to the Referee and to the Supervisor.
            {'\n\n'}
            {'\t\t'}4) Be on-site at all times during play. The Chief of Umpires may not be a chair or Line
            Umpire unless authorized by the Supervisor.
            {'\n\n'}
            {'\t\t'}5) Schedule the on-court assignments of Line Umpires for each day of the tournament, subject to the approval of the Supervisor. Line umpires for the quarterfinals,
            semi-finals and finals must have worked a minimum of two (2) days prior to the
            quarterfinals and have the Supervisor’s specific approval.
            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule59', next: 'Rule62', nav: navigation }} />
    </>
  );
}


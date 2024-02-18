import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule60({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.09 Referee </HighlightText>
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}> A.Assignment and Designation Process</HighlightText>
            {'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments </HighlightText>
            {'\n\n'}
            {'\t\t\t'}Each tournament is required to hire a certified Referee approved by ATP.
            {'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</HighlightText>
            {'\n\n'}
            {'\t\t\t'}Each tournament is required to hire a certified Referee approved by ATP.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.Waiver of Obligation – Referee </HighlightText>
            {'\n\n'}
            {'\t\t'}A tournament may petition ATP to waive the Referee requirement. Waivers shall not
            be granted to:
            {'\n\n'}
            {'\t\t'}1) Challenger 125 and 175 events
            {'\n\n'}
            {'\t\t'}2) Any new Challenger tournament
            {'\n\n'}
            {'\t\t'}3) Tournaments played on two (2) separate sites, including qualifying
            {'\n\n'}
            {'\t\t'}4) Back-to-back tournaments (for a minimum of the overlapping week-end)
            {'\n\n'}
            {'\t\t'}Furthermore, the following elements shall be used to determine whether or not a
            waiver will be considered:
            {'\n\n'}
            {'\t\t'}1) 2-court event
            {'\n\n'}
            {'\t\t'}2) Venue size
            {'\n\n'}
            {'\t\t'}3) Recommendation of the supervisor from previous year that a waiver, if approved,
            will not jeopardize the quality of the service.
            {'\n\n'}
            {'\t\t'}Where a waiver is granted, tournament shall provide a suitable assistant to the supervisor.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.Fees and Expenses</HighlightText>
            {'\n\n'}
            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour and ATP Challenger Tour Tournaments</HighlightText>
            {'\n\n'}
            {'\t\t\t'}Each tournament must provide each Referee with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player hotel or
            another hotel approved by ATP or the Supervisor.
            {'\n\n'}
            {'\t\t\t'}Each tournament shall pay a fair and reasonable fee and travel expense to each
            designated and approved Referee hired by the tournament.
            {'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>D.General</HighlightText>
            {'\n\n'}
            {'\t\t'}The Referee is hired by the tournament to advise in planning the event and shall
            assist the Supervisor while being available to serve on the scheduling committee.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>E. Responsibilities </HighlightText>
            {'\n\n'}
            {'\t\t'}Advise, assist and cooperate with the Supervisor as appropriate and necessary when
            carrying out any assigned duties or responsibilities. Assigned duties may include;
            {'\n\n'}
            {'\t\t'}1) Organizing the facilities, equipment and staff, to support play beginning with the
            qualifying competition.
            {'\n\n'}
            {'\t\t'}2) Confirming the conditions of play, (i.e.), make and number of tennis balls, types of
            beverages including electrolyte, how matches are to be called, etc.
            {'\n\n'}
            {'\t\t'}3) Ensure that each court is equipped as follows:
            {'\n\n'}
            {'\t\t\t'}a) Umpire’s chair.
            {'\n\n'}
            {'\t\t\t'}b) Line umpire chairs.
            {'\n\n'}
            {'\t\t\t'}c) Player’s chairs.
            {'\n\n'}
            {'\t\t\t'}d) On-court beverages.
            {'\n\n'}
            {'\t\t\t'}f) Writing Tables and electrical outlet for the Electronic Scoring Device.
            {'\n\n'}
            {'\t\t\t'}g) Microphones (if applicable)
            {'\n\n'}
            {'\t\t'}4) Designate a highly visible place in the general player’s area as the “Official Bulletin Board” and notify all players of its designation and location.
            {'\n\n'}
            {'\t\t'}5) Make appropriate arrangements for the safe escorting of players to and from the
            court before and after the match.
            {'\n\n'}
            {'\t\t'}6) Be on-site at all times during the playing of matches in the tournament. The Referee may not be a Chair Umpire or Chief of Umpires.
            {'\n\n'}
            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule59', next: 'Rule61', nav: navigation }} />
    </>
  );
}


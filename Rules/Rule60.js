import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule60({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.09 Referee </Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> A.Assignment and Designation Process</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments </Text>
            {'\n\n'}
            Each tournament is required to hire a certified Referee approved by ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            Each tournament is required to hire a certified Referee approved by ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Waiver of Obligation – Referee </Text>
            {'\n\n'}
            A tournament may petition ATP to waive the Referee requirement. Waivers shall not
            be granted to:
            {'\n\n'}
            1) Challenger 125 and 175 events
            {'\n\n'}
            2) Any new Challenger tournament
            {'\n\n'}
            3) Tournaments played on two (2) separate sites, including qualifying
            {'\n\n'}
            4) Back-to-back tournaments (for a minimum of the overlapping week-end)
            {'\n\n'}
            Furthermore, the following elements shall be used to determine whether or not a
            waiver will be considered:
            {'\n\n'}
            1) 2-court event
            {'\n\n'}
            2) Venue size
            {'\n\n'}
            3) Recommendation of the supervisor from previous year that a waiver, if approved,
            will not jeopardize the quality of the service.
            {'\n\n'}
            Where a waiver is granted, tournament shall provide a suitable assistant to the supervisor.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Fees and Expenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour and ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            Each tournament must provide each Referee with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player hotel or
            another hotel approved by ATP or the Supervisor.
            {'\n\n'}
            Each tournament shall pay a fair and reasonable fee and travel expense to each
            designated and approved Referee hired by the tournament.
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>D.General</Text>
            {'\n\n'}
            The Referee is hired by the tournament to advise in planning the event and shall
            assist the Supervisor while being available to serve on the scheduling committee.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. Responsibilities </Text>
            {'\n\n'}
            Advise, assist and cooperate with the Supervisor as appropriate and necessary when
            carrying out any assigned duties or responsibilities. Assigned duties may include;
            {'\n\n'}
            1) Organizing the facilities, equipment and staff, to support play beginning with the
            qualifying competition.
            {'\n\n'}
            2) Confirming the conditions of play, (i.e.), make and number of tennis balls, types of
            beverages including electrolyte, how matches are to be called, etc.
            {'\n\n'}
            3) Ensure that each court is equipped as follows:
            {'\n\n'}
            a) Umpire’s chair.
            {'\n\n'}
            b) Line umpire chairs.
            {'\n\n'}
            c) Player’s chairs.
            {'\n\n'}
            d) On-court beverages.
            {'\n\n'}
            f) Writing Tables and electrical outlet for the Electronic Scoring Device.
            {'\n\n'}
            g) Microphones (if applicable)
            {'\n\n'}
            4) Designate a highly visible place in the general player’s area as the “Official Bulletin Board” and notify all players of its designation and location.
            {'\n\n'}
            5) Make appropriate arrangements for the safe escorting of players to and from the
            court before and after the match.
            {'\n\n'}
            6) Be on-site at all times during the playing of matches in the tournament. The Referee may not be a Chair Umpire or Chief of Umpires.
            {'\n\n'}
            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule59', next: 'Rule61', nav: navigation }} />
    </>
  );
}


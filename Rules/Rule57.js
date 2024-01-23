import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule57({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.06 Supervisor</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> A.Assignment & Designation</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments</Text>
            {'\n\n'}
            An ATP Supervisor shall be provided by ATP for each ATP Tour tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            ATP shall provide a Supervisor for each ATP Challenger Tour tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Fees and Expenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour and ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            ATP shall pay the fees and travel expenses of the supervisors hired by ATP.
            {'\n\n'}
            Each tournament must provide each Supervisor with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player hotel or
            another hotel approved by ATP or the Supervisor.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Genera</Text>
            {'\n\n'}
            The Supervisor at each ATP Tour and ATP Challenger Tour tournament is provided by ATP. Whenever the Supervisor is not available, the Supervisor shall
            designate an approved Referee or ATP Official to assume all duties and responsibilities. (All references to Supervisor inc
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D.Responsibilities</Text>
            {'\n\n'}
            In all ATP Tour and ATP Challenger Tour tournaments the Supervisor shall:
            {'\n\n'}
            1) Act as ATP’s representative, speaking with the full authority of ATP during the
            tournament
            {'\n\n'}
            2) Act as final on-site authority ensuring that the tournament is conducted fairly in
            accordance with ATP’s Rules and Regulations as to all matters arising that require immediate resolution at the tournament site including the evaluation of tournament compliance with Facilities and On-Site Condition requirements.
            {'\n\n'}
            3) Issue player conduct fines as necessary and appropriate.
            {'\n\n'}
            4) Direct, supervise, instruct and evaluate the Referee, Chief of Umpires and all oncourt officials, including the authority to:
            {'\n\n'}
            a) Make the assignment of all Chair Umpires and approve all Line Umpires and
            net judge for tournament matches.
            {'\n\n'}
            b) Remove a Chair Umpire and/or remove, rotate or replace any Line Umpire or
            net judge when necessary to improve the officiating of a match.
            {'\n\n'}
            5) Make all draws for the qualifying and main draw competitions.
            {'\n\n'}
            6) When weather or other conditions threaten the immediate safety of the players,
            spectators, officials or any other persons on the tournament site, the Supervisor
            may suspend or postpone the match(es) until such time that in his opinion the
            threat to safety is no longer evident.
            {'\n\n'}
            7) Decide if a court is fit for play or decide if a match should be moved to another
            court. The Supervisor may, if necessary to eliminate the possibility of a player
            having to play two singles matches in one day, or if necessary to complete the
            event, move a match to another court, indoors or outdoors, regardless of surface.
            {'\n\n'}
            8) Serve as the Chairman of the scheduling committee and make the final decision
            on all scheduling matters if the committee is not in agreement. Ensure that the
            daily order of play is posted on the bulletin board and at the official hotel.
            {'\n\n'}
            9) Designate a highly visible place in the general player area as the official bulletin
            board.
            {'\n\n'}
            10) Designate a visible timepiece at a fixed location as the “Official Clock” of the tournament.
            {'\n\n'}
            11) Designate a specific area from which matches shall be called and determine
            when a match is to be called.
            {'\n\n'}
            12) Maintain a continuous dialogue during the week with the Tournament Director
            and submit a report to ATP evaluating the tournament, including attendance, and
            officials. The Tournament Director shall receive a copy of the report prior to the
            Supervisor’s departure.
            {'\n\n'}
            13) Decide with the Tournament Director the designation of the lowest tier of seats
            that surround the playing area of the courts at each tournament
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. Clothing - ATP Tour</Text>
            {'\n\n'}
            The officiating uniform provided by ATP must be worn. No other commercial branding
            may be applied to the uniform without prior approval from ATP.
            {'\n\n'}

            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule56', next: 'Rule58', nav: navigation }} />
    </>
  );
}


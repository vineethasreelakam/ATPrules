import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule166({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT K - Glossary</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Draw Results:
            </Text>{'\n\n'}
            The Supervisor must record match results using, where appropriate, the following
            definitions:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Abandoned: 
            </Text>
            Match began but was not completed for any reason other than default or retirement. 
            There is no winner or loser. The match is not to be completed.
            Players receive points and money equivalent to loser of that round.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Default: 
            </Text>
            Losing player was defaulted under provisions of Code of Conduct after
            match had begun.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Incomplete: 
            </Text>Match began but was not completed for any reason other than
            weather, default, or retirement. There is no winner or loser. It is anticipated that
            the match will be resumed and completed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Ineligible: 
            </Text>
            Player fails to sign the Consent and Agreement form prior to his first
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Retired: 
            </Text>
            Losing player retired because of illness or injury after match had begun.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Unplayed: 
            </Text>Match did not begin for any reason other than (a) illness or injury on
            the part of one player or (b) one player was subjected to penalties of Code of
            Conduct before first serve of match was struck or otherwise not permitted by ATP
            or tournament Supervisor from playing. There is no winner or loser and the match
            will not be played.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Unregistered: 
            </Text>Player fails to complete the registration process prior to his first
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Walkover: 
            </Text>
            Match did not begin because:
            {'\n\n'}a) losing player was ill or injured or
            {'\n\n'}b) losing player was subjected to penalties of Code of Conduct before first serve
            of match was struck or otherwise not permitted by ATP or tournament Supervisor to play.
            {'\n\n'}This would not be used when a lucky loser or alternate is substituted. Winners
            of “walkover”/”no match” matches receive points and prize money as if the
            match had been played.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Weather: 
            </Text>Match began but was not completed because of inclement weather.
            There is no winner or loser. It is anticipated that the match will be resumed and
            completed.
            {'\n\n'}


            <Text style={RuleStyles.SubHeading2}> Miscellaneous Definition of Terms
            </Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Alternate: 
            </Text>
            The next highest ranked player(s) who were not a direct acceptance
            at the time of the entry deadline.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Player Dues: 
            </Text>
            Money owed or collected for ATP player membership or the
            annual dues of such membership.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Standards Committee: 
            </Text>A committee approved by the ATP Board with certain powers to oversee 
            creation and compliance of ATP tournament standards.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Ball Mark Inspection (BMI): 
            </Text>On clay courts the Chair Umpire may leave the chair
            and inspect the mark left by the ball in play to determine the correctness of the
            call. This can only be done after a point-ending shot or if the player or team stops
            play to request an inspection.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Ceremonies: 
            </Text>Awards presentations customarily held following the conclusion of
            the final championship match(es).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Chair Umpire: 
            </Text>This official is responsible for the conduct of the match. His main
            duties are to enforce all ATP Rules and Regulations and on-court procedures to
            ensure accuracy, fairness and safety. He is the final authority on all questions of
            fact that may arise during the match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Direct Acceptance: 
            </Text>Players or teams accepted directly in the draw by virtue of
            their position in the Pepperstone ATP Rankings or Pepperstone ATP Doubles
            Rankings System or by their protected ranking.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Pepperstone ATP Rankings (Singles & Doubles): 
            </Text>The objective merit-based
            method used for determining qualification for entry and seeding in all tournaments
            for both singles and doubles and the Nitto ATP Finals (singles & doubles).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Ineligible: 
            </Text>Player fails to sign the Consent and Agreement Form prior to his first
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Late Withdrawal: 
            </Text>Player withdraws after 10 AM PVB time on the Friday prior to
            the event; or player does not appear for his match and is not on-site.
            Late Withdrawal (Dbl-MD) – used to indicate a player who has withdrawn from
            doubles after the on-site entry deadline.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Late Withdrawal, Qualifying: 
            </Text>This applies to ATP Tour Masters 1000 and ATP
            Tour 500 events where there is an advance acceptance list for the qualifying and
            the player withdraws after the deadline.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Line Umpire: 
            </Text>Officials responsible for calling specific assigned lines according to
            the ATP Rules under the direct on-court supervision of the Chair Umpire.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Lucky Loser: 
            </Text>Players who have lost in the final round of qualifying, or if needed,
            earlier rounds. These players are placed in rank order and may become eligible
            to replace any player in the main draw who is forced to withdraw prior to his first
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Major Offenses: 
            </Text>aggravated behavior, Bribes or Other Payments, Conduct Contrary to the Integrity 
            of the Game, Prohibited Promotional Fees and Wagers. A
            Major Offense is initiated and investigated by the Senior Vice President - Rules &
            Competition and is in addition to any penalties that may have been levied by the
            on-site Supervisor.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Medical Time-Out (MTO): 
            </Text>Official time allotted during the match for treatment
            due to an approved medical condition. The treatment is given by the ATP Physiotherapist. The time 
            allowed is 3 minutes (4 1/2 if taken on a changeover) for each
            separate medical condition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>No Match: 
            </Text>There was not an eligible alternate available.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>No Show: 
            </Text>Player does not appear for his first match and there has been no contact or prior 
            notification from the player that he would not appear for the match.
            For penalty purposes, this would be penalized as a “Late Withdrawal”.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Non-Member Service Fee: 
            </Text>Players who are not members in good standing of
            ATP must pay a fee for services rendered. This applies to main draw players at
            all ATP Tour Masters 1000 or ATP Tour 500 and ATP Tour 250 events and to qual
            ifying players at ATP Tour Masters 1000, ATP Tour 500 events and ATP Tour 250
            events. This does not apply to the Challenger Circuit.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>On-Site Withdrawal (ATP Tour): 
            </Text>Player withdraws after 10 AM Eastern time,
            USA on Friday and was on-site at the event when the withdrawal occurred and
            is determined to be unfit for play by that tournament’s Doctor. Players still competing in a 
            tournament or Davis Cup match after the 10 AM deadline and are
            forced to withdraw/retire, from a match may be examined by that event’s Doctor
            and shall then be considered the same as an On-Site Withdrawal. Withdrawals/
            Retirements from Davis Cup must be from “live” matches and include a medical
            certification from the Independent Doctor. This should be documented on the
            withdrawal summary from the tournament that the player withdrew from.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>On-Site Withdrawal (ATP Challenger or ATP Tour Qualifying): 
            </Text>Player withdraws after the 10 AM 
            Friday deadline and is examined at the tournament site
            within the first three (3) days of the event, or in the case of ATP Tour qualifying on
            the Saturday or Sunday of qualifying. Players still competing in a tournament or
            Davis Cup match after the 10 AM deadline and are forced to withdraw/retire, from
            a match may be examined by that event’s Doctor and shall then be considered
            the same as an On-Site Withdrawal. Withdrawals/Retirements from Davis Cup
            must be from “live” matches and include a medical certification from the Independent Doctor. 
            This should be documented on the withdrawal summary from the
            tournament that the player withdrew from.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Protected Ranking: 
            </Text>A ranking assigned a player who has been unable, due to
            injury, to compete in any tennis event for a minimum of six (6) months.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Punctuality: 
            </Text>Player fails to appear, in a timely manner, when his match has been
            called. Provisions for Non-Appearance do not apply.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Qualifier: 
            </Text>Player who has won his place into the main draw by way of a qualifying
            competition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Qualifying Non-Appearance: 
            </Text>A player is entered into the qualifying through the
            Supervisor of another event and does not appear for his match. This also includes players accepted 
            into the qualifying as a wild card who do not appear
            for their match. This includes those who sign-in through the Supervisor as an
            alternate to ATP Tour qualifying. It also covers ATP Challenger Tour events.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Referee: 
            </Text>Official hired by the tournament to advise in planning the event and
            assist the ATP Supervisor in his assigned duties and responsibilities.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Review Official: 
            </Text>Official hired by ATP who is responsible for the Review function
            of Electronic Line Calling systems on-site.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Seed: 
            </Text>Players who are given preferential positions in the draw based on the
            Pepperstone ATP Rankings System.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Special Event: 
            </Text>Those events other than Grand Slams, ATP Tour tournaments or
            ATP Challenger Tour tournaments.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Special Exempt: 
            </Text>Player accepted into the main draw who was still competing in
            the singles event of another qualified event at the time of this event’s qualifying.
            Player may not have been accepted as a direct acceptance, if entered.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Special Exempt /Wild Card Non-Appearance: 
            </Text>A player accepts a SE or WC
            and does not appear for his match and is not on-site. This violation would be
            considered as a Late Withdrawal and be subject to the penalties set forth under
            Late Withdrawal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Supervisor: 
            </Text>Final on-site authority ensuring that the tournament is conducted
            fairly in accordance with ATP’s Rules and Regulations as to all matters arising
            that require immediate resolution.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Tour Manager: 
            </Text>Represents the player’s interests in all matters involving the signins, draws 
            and the scheduling of the event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Tournament Director: 
            </Text>Person representing the owners of the event in the dayto-day management
             of the tournament.
             {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Tournament Week: 
            </Text>Commences on a Monday and concluding on a Sunday,
            unless otherwise approved by ATP. Tournaments with a published Saturday final
            shall have the tournament week conclude on Saturday.
            Unregistered - Player fails to complete the registration process prior to his first
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Wild Card: 
            </Text>Players included in the draw at the sole discretion of the tournament.
            A specified number of wild cards are available in each event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Withdrawal: 
            </Text>Player who withdraws after the entry deadline but prior to 10 AM
            (PVB) on the Friday prior to the event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>• Withdrawal (Dbl) - 
            </Text>used to indicate a doubles withdrawal that is after the 10 AM
            Friday withdrawal deadline and prior to the on-site sign-in deadline
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>• Withdrawal (Dbl)/On-Site Medical –
            </Text> used to indicate a player who has withdrawn from doubles 
            where both members were on site at the time of the withdrawal and the withdrawal was due to a medical condition

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule165', next: 'Rule167', nav: navigation }} />
    </>
  );
}


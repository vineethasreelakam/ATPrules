import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule128({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>9.04 Pepperstone ATP Doubles Rankings</HighlightText>{'\n\n'}

            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>A.</HighlightText>
            The Pepperstone ATP Doubles Rankings is based on calculating, for each player, his
            total points from his best 19 results from all eligible tournaments, including the Nitto
            ATP Finals (Doubles) played in the Ranking period. For entry purposes there are no
            mandatory events, however, once a player is included in the main draw of any of the
            four (4) Grand Slams or the eight (8) ATP Tour Masters 1000, as a direct acceptance,
            a qualifier, alternate or a lucky loser or having accepted a wild card, his result in one
            of these twelve (12) tournaments, shall count for his ranking, whether or not he participates. The exception to this is once per player per calendar year, a player whose
            team is forced to withdraw after the draw has been made but prior to the team’s first
            match shall not have the withdrawal count as a tournament played for purposes of
            ranking.

            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>
            Loser points for the rounds achieved are awarded to players in any tournament not
            completed.

            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>C. Ties. </HighlightText>
            When two or more players have the same total number of points, ties shall be
            broken as follows:
            {'\n\n\t\t'}
            1) the fewest events played*, and if still tied, then,
            {'\n\n\t\t'}
            2) the most total points from the Grand Slams, ATP Tour Masters 1000 mandatory
            tournaments and the Nitto ATP Finals (Doubles), and if still tied, then
            {'\n\n\t\t'}
            3) the highest number of points from one single tournament, then, if needed, the
            second highest, etc.
            {'\n\n\t\t'}
            *Once a team is included in the main draw of a Grand Slam or one of the eight (8)
            ATP Tour Masters 1000 it shall count as an event played whether or not the team
            actually participated.
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            The method for breaking ties on-site, between teams, is described under
            Selections of Entries.


            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>D. Entry Protection. </HighlightText>
            The Entry Protection, as described above for the Pepperstone
            ATP Rankings, applies for doubles under the same provisions.
            
            
            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>E. Points. </HighlightText>
            The provisions set forth under 9.03.E.1), 2) and 3) related to the Pepperstone
            ATP Rankings apply to doubles as well, the point table being similar, except that the
            second-round loser column becomes irrelevant. No points are awarded in the first
            round at any event.
            
            
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading2}>Doubles - After First Round:</HighlightText>
            Should a doubles match in an ATP Tour or ATP Challenger Tour event be uncontested or fail to be completed, the losing team shall only receive points and prize
            money from the previous round unless one of the following exceptions is applicable:
            {'\n\n\t\t\t'}
            a) Neither player was in the singles main draw;
            {'\n\n\t\t\t'}
            b) Both players used, or could have used**, their doubles ranking for entry into
            the doubles draw (does not apply to wild card teams).
            {'\n\n\t\t\t'}
            c) The retiring/withdrawing player is still in the singles competition and at the
            time of the medical examination is declared unfit to play in the singles of
            that event or, if no longer involved in the singles competition of that event, is
            forced to withdraw from the singles or doubles*** of the next tournament in
            which he is entered.
            {'\n\n\t\t\t\t'}
            i) For ATP Tour events if the retiring/withdrawing player was not in the singles draw of that event and is forced to withdraw from the next event in
            which he is accepted in the main draw (singles or doubles).
            {'\n\n\t\t\t\t'}
            ii) For ATP Challenger events if the retiring/withdrawing player was not in
            the singles draw of that event and is forced to withdraw from the following
            week’s event (single or doubles) after the withdrawal deadline.
            {'\n\n\t\t\t'}
            d) The retiring/withdrawing player was not involved in the singles draw of that
            event and:
            {'\n\n\t\t\t\t'}
            i) For ATP Tour events is forced to withdraw from the next event in which he
            is entered (singles or doubles).
            {'\n\n\t\t\t\t'}
            ii) For ATP Challenger events is forced to withdraw from the following week’s
            event (singles or doubles***).
            {'\n\n\t\t\t'}
            e) The retiring/withdrawing player had withdrawn/retired from his singles match,
            which was scheduled the same day; or, if the doubles match is scheduled
            for a following day the player is examined by the tournament Doctor and is
            declared unfit for competition in the doubles event.
            {'\n\n\t'}
            ** Example: Player A is not in the singles draw and his doubles ranking is 20;
            his partner, Player B, is in the singles draw with a ranking of 15. Player B’s
            doubles ranking is 30. The cutoff for their method of entry is 60. Using player
            B’s doubles ranking would have kept them as a direct acceptance so they
            qualify for exception b) above.
            
            {'\n\n\t'}
            *** For ATP Challenger events the withdrawal for doubles must be after the withdrawal deadline.
            
            
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>
            Player A retires / withdraws from the doubles for medical
            reasons. Player A is also in the singles draw but is not scheduled to
            play his next match until the next day. On the day of his scheduled
            singles match Player A withdraws from the singles and receives
            medical documentation from the Tournament Doctor declaring him
            unfit for competition. The medical condition is the same condition
            that caused the doubles retirement / withdrawal.
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            In this case the doubles team shall receive points / prize
            money from the round reached.
            
            
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>
            Player A retires from the singles competition due to a medical
            issue. He is in the doubles competition but is not scheduled to play
            doubles that day. Player A is examined by the tournament Doctor
            who confirms that the medical issue is such that the player would
            not be able to compete in the doubles that week. May Player A’s
            withdrawal and medical be accepted even though he is not scheduled to play doubles that day?
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            If the medical issue is such that the tournament Doctor can confirm the player’s condition will not improve enough to
            compete in the doubles that week then the player may withdraw
            immediately and the medical is valid. Player A and his partner shall
            be eligible to receive ranking points and prize money from the round
            reached.
            
            
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>
            Player A withdraws from the singles competition due to food
            poisoning, he is in the doubles competition but is not scheduled to
            play doubles until the next day. Player A would like to withdraw from
            the doubles immediately, however the tournament Doctor says he
            cannot declare him unfit for play for a match scheduled the following
            day.
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            If Player A withdraws from the doubles without a medical
            from the tournament Doctor declaring him unfit for play then the
            team receives ranking points / prize money from the previous round.
            
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            In cases where the condition of the player is likely to improve
            in a short time period the tournament Doctor should examine the
            player on the day of the match to determine his status and if he
            feels the player is fit for competition.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule127', next: 'Rule129', nav: navigation }} />
    </>
  );
}


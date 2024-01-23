import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule48({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>IV. WORLD CHAMPIONSHIPS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>4.02 Nitto ATP Finals - Doubles</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Competition Format</Text>
            {'\n\n'}
            The tournament shall be a doubles round robin format with eight (8) teams. There
            shall be two (2) groups of four (4) teams each with eight (8) seeds to be determined
            by the 2023 Pepperstone ATP Doubles Team Rankings on the Monday after the last
            ATP Tour tournament of the calendar year. All matches shall be two (2) tie-break sets
            with a deciding Match Tie-break (10 point) at one (1) set all. The round robin shall
            determine the four (4) teams for the semi-finals with the format thereafter being a
            single elimination competition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Entries</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Selection List.</Text>The selection list for the event shall be:
            {'\n\n'}
            a) The top 7 teams in the 2023 Pepeprstone ATP Doubles Team Rankings as of
            the Monday after the last ATP Tour tournament of the calendar year; followed
            by
            {'\n\n'}
            b) Up to two (2) Grand Slam winners of that year, in order of their positions,
            positioned between eight (8) and twenty (20) in the 2023 Pepperstone ATP
            Doubles Team Rankings as of that Monday; followed by
            {'\n\n'}
            c) Teams positioned eight (8) and below in the 2023 Pepperstone ATP Doubles
            Team Rankings as of that Monday.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Direct Acceptances.</Text>
            The top eight (8) teams in the selection list shall qualify
            for the event as direct acceptances. Participation is mandatory, and all qualified
            teams shall be entered. All direct acceptances must be at the tournament site to
            attend the official pre-tournament media conference and must be available for
            play through the completion of the round robin competition and the knock-out
            competition if eligible.
            {'\n\n'}
            A player who qualifies as a direct acceptance on two (2) or more teams may
            choose the team with which he participates. Any player with whom he does not
            choose to participate is ineligible to be a direct acceptance unless such player
            qualifies with another partner.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Withdrawal.</Text>
            All eligible teams shall be entered by ATP; however, teams may
            withdraw through the Monday following the last ATP Tour tournament of the year.
            Any withdrawal, before the official pre-tournament media conference starts, shall
            be replaced by the next highest positioned team on the selection list, who shall be qualified as a direct acceptance.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) Alternate(s).</Text>
            {'\n\n'}
            a) On the Monday following the last ATP Tour tournament of the year, the next
            highest positioned team shall be asked to confirm its status as the alternate
            team. Alternate team(s) may be selected by ATP to fill the draw upon terms
            satisfactory to ATP. Any withdrawal after the official pre-tournament media
            conference through the start of the last scheduled round robin match shall be
            filled with the alternate team(s). The alternate team must appear at the official
            pre-tournament media conference and remain available through the start of
            the last scheduled round robin match.
            b) Additional alternate teams may be selected by ATP to fill the draw, based on
            the selection list, upon terms satisfactory to ATP. Participation of such additional alternate teams is not mandatory.
            c) The alternate team(s) is eligible to play in the single elimination competition
            and to receive points and prize money if they qualify.
            d) If the alternate team(s) does not play in the draw, then a fee shall be paid to
            the alternate team(s). If the alternate team(s) is inserted for the second or
            third round robin match, then they shall receive the alternate fee plus any
            prize money and points won. If the alternate team(s) replaces a team that
            does not compete in their first round robin match, the alternate team(s) becomes a direct acceptance and does not receive the alternate fee.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Order of Play</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Round Robin</Text>
            {'\n\n'}
            1) The field shall be divided into two (2) groups of four (4) teams each. The
            top-seeded team shall be placed in Group “A” and the second-seeded team shall
            be placed in Group “B”. Teams seeded three and four, five and six, and seven
            and eight, shall then be drawn in pairs with the first drawn placed into Group “A”.
            {'\n\n'}
            2) Each team shall play every other team in their group to determine the top two (2)
            teams in each group.
            {'\n\n'}
            3) The final standings of each group shall be determined by the first of the following
            methods that apply:
            {'\n\n'}
            a) Greatest number of wins.
            {'\n\n'}
            b) Greatest number of matches played.
            Comment: 2-1 won-loss record beats a 2-0 won-loss record; a 1-2 record
            beats a 1-0 record.
            {'\n\n'}
            c) Head-to-head results if only two (2) teams are tied.
            {'\n\n'}
            d) If three (3) teams are tied, then:
            {'\n\n'}
            i) If three (3) teams each have one (1) win, a team having played less than
            all three (3) matches is automatically eliminated and the team advancing
            to the single elimination competition is the winner of the match-up of the
            two (2) teams tied with 1-2 records; or
            {'\n\n'}
            ii) Highest percentage of sets won; (Winning the MTB counts as one (1) set
            won); or
            {'\n\n'}
            iii) Highest percentage of games won. (Winning the MTB counts as one (1)
            game won); a team completing less than all three (3) matches is automatically eliminated and the team advancing to the single elimination competition is the winner of the match-up of the two (2) remaining teams; or
            {'\n\n'}
            iv) The team positions on the 2023 Pepperstone ATP Doubles Team Rank-ings as of the Monday after the last ATP Tour tournament of the calendar
            yea.
            {'\n\n'}
            v) If (i), (ii), (iii) or (iv) produce one (1) superior team (first place), or one (1)
            inferior team (third place), and the two (2) remaining teams are tied, the
            tie between those two (2) teams shall be broken by head-to-head record
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 1:</Text> 1 team has 3 wins and the other 3 teams have 1 win. Of the
            3 teams with 1 win, 1 team has only played in 2 matches while the other 2
            teams have played 3 matches. The team who has only played 2 matches
            is eliminated and then the 2 remaining teams revert back to head-to-head
            results with the winner of their match advancing to the semi-finals.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 2:</Text> 1 team has 3 wins and the other 3 teams have 1 win and
            they all have played 3 matches. The tie-break for % of sets won has
            1 team with a better % than the other two. This team advances to the
            semi-final round.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 3:</Text> 3 teams have 2 wins and the other team has 0 wins. The
            team with 0 wins is eliminated. Of the 3 teams with 2 wins, they are ordered by their % of sets won. This produces a 1, 2 & 3 order and the
            teams finishing 1 and 2 move to the semi-final round and the team finishing 3 in % of sets won is eliminated. The team with the best % of sets won
            is the winner of the group.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 4:</Text> 3 teams have 2 wins and the other team has 0 wins. The
            team with 0 wins is eliminated. Of the 3 teams with 2 wins, 1 team’s sets
            won-loss is 5-2 for 71.43%; the other 2 teams both have a 4-3 record in
            sets for 57.14%. In this case there is 1 superior team (71.43%) and the
            remaining 2 teams are tied; it now reverts to the head to head result of the
            2 remaining teams with the winning team advancing as group runner-up.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 5:</Text> 3 teams have 2 wins and the other team has 0 wins. The
            team with 0 wins is eliminated. Of the 3 teams with 2 wins, 2 have set
            won-loss records of 5-3 (62.5%) while the other team is 4-3 (57.14%). In
            this case we have 1 inferior team (57.14%) and this team is eliminated.
            The remaining two teams both advance to the semi-finals with the winner
            of their head-to-head match advancing as the group winner.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment 6:</Text> 3 teams have 2 wins and the other team has 0 wins. The
            team with 0 wins is eliminated. Of the 3 teams with 2 wins, all have played
            3 matches and all 3 have set won-loss records of 5-4 (55.56%). In this
            case we move to % of games won. The % of games won breaks down
            like this: 44-40 for 52.38%, 45-43 for 51.14% and 44-43 for 50.57%. This
            produces a 1, 2 and 3 order of the group and the number 1 team in
            % of games won is the group winner while the team finishing 2nd in %
            of games won advances to the semi-finals as the group runner-up. The
            team with the 3rd best % of games won is eliminated.
            {'\n\n'}
            4) In applying the tie-breaking procedures, a conduct default or retirement shall
            count as a straight-set win or loss. However, games won or lost in matches with
            the defaulting or retiring team shall not be counted in the application of subsection
            3.d. (iii) above. A team who retires during the round robin because of illness or
            injury may continue in the competition if it is approved by the tournament Doctor.
            Comment: this prevents a scenario where a team knows he only needs to win 1
            set to qualify for the semi-finals from retiring once he has won a set.
            {'\n\n'}
            5) Any team who is defaulted pursuant to ATP Code during the round robin competition shall be defaulted from all other matches in the Championship and ATP
            default provisions shall apply, except for the following circumstances:
            {'\n\n'}
            a) The loss of physical condition; or
            {'\n\n'}
            b) Dress and Equipment.
            {'\n\n'}
            6) Any team who withdraws from any round robin match after the first round shall not
            be eligible for the single elimination competition
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D.Single Elimination Competition</Text>
            {'\n\n'}
            1) The winner of each group shall be placed in separate semi-final brackets. The
            runner-up of each group shall be placed in the semi-final bracket with the winner
            of the opposite group.
            {'\n\n'}
            2) The event shall be completed with a single elimination competition for the semi-finals and final.
            {'\n\n'}
            3) There shall be no playoff for the third and fourth-place positions.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. Prize Money and Points</Text>
            {'\n\n'}
            Final standings at the end of the tournament shall determine the prize-money and
            Pepperstone ATP Doubles Rankings points earned.
            {'\n\n'}

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule47', next: 'Rule49', nav: navigation }} />
    </>
  );
}


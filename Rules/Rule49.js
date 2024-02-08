import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule49({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>IV. WORLD CHAMPIONSHIPS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>

            <HighlightText style={RuleStyles.SubHeading1}>4.03 United Cup</HighlightText>
            {'\n\n'}
            The United Cup is an annual country vs country mixed team competition. Eighteen
            (18) countries will participate, with a minimum of two ATP and two WTA players per
            country
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Round Robin Competition</HighlightText>
            {'\n\n'}
            1) The United Cup is a competition for eighteen (18) teams, each team composed
            of a minimum of two (2) ATP and two (2) WTA players and a maximum of three
            (3) ATP/WTA players from the same country. The team criteria shall be:
            {'\n\n'}
            a) The two (2) highest ranked singles ATP/WTA players; then
            {'\n\n'}
            b) Teams may include a 3rd ATP and WTA player, whose entry will be accepted
            based on being the highest of singles ranking (up to maximum 500) or doubles ranking (up to maximum 250).
            {'\n\n'}
            c) A junior player, meeting the criteria stated below, may be included as a country’s 3rd respective Tour player.
            The junior player must,
            {'\n\n'}
            i) Be born in 2005 or later, and
            {'\n\n'}
            ii) Be ranked 500 or better in Singles rankings as of the Rankings Deadline,
            or
            {'\n\n'}
            iii) Be ranked 50 or better in the ITF Junior World Rankings as of the Rankings Deadline
            {'\n\n'}
            iv) Have entered the event
            {'\n\n'}
            Only one (1) junior player may be included per gender, per team (maximum 1
            male, 1 female)
            {'\n\n'}
            d) All players except an approved junior player must have an ATP Ranking (singles or doubles).
            2) A player’s nationality as of the entry date shall be used to determine team entry.
            All player nationality determinations are subject to ATP approval.
            {'\n\n'}
            3) The competition shall be a Round Robin format with six (6) groups of three (3)
            teams each. All singles matches shall be the best of three (3) tie-break sets. All
            mixed doubles matches shall be two (2) tie-break sets with a deciding Match TieBreak (10 point) at one (1) set all.
            {'\n\n'}
            4) Each team shall play each other in its group to determine the top team in each
            group. Group winners will advance to the Quarterfinals. One Quarterfinal spot in
            each city will be awarded to the best runner up in that City. Winners will advance
            to the Semi-Finals, to be hosted in the Finals City.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Player Nationality / Change of Nationality</HighlightText>
            {'\n\n'}
            A player’s nationality as of the entry date shall be used to determine team entry. All
            player nationality determinations are subject to ATP/WTA approval.
            <HighlightText style={RuleStyles.SubHeading2}>1) Nationality.</HighlightText> A player’s nationality on the date of that country’s acceptance to the
            United Cup shall determine the player’s eligibility to compete for that country.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2) Change of Nationality.</HighlightText>
            {'\n\n'}
            a) A player may only represent one (1) country in the United Cup during their
            career, unless
            {'\n\n'}
            a. The player change their nationality in the ATP/WTA database AND
            {'\n\n'}
            b. Any of the following apply:
            {'\n\n'}
            i. The player competed under such nationality in the BJK Cup, Davis
            Cup, or Olympic Tennis Event, or
            {'\n\n'}
            ii. The player competed under such nationality in professional tennis
            tournaments during the Tour Year immediately preceding the United
            Cup,
            {'\n\n'}
            iii. ATP/WTA determines the full circumstances of the player’s situation
            demonstrate the player has a sufficient, genuine connection to the
            nation that the player wishes to represent, or
            {'\n\n'}
            iv. In exceptional circumstances as determined by ATP/WTA.
            {'\n\n'}
            b) All requests to change a player’s nationality are subject to ATP/WTA approval.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>C.Teams Qualifications</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Entry.</HighlightText> The teams shall be selected and entered in the following manner:
            {'\n\n'}
            a) A team shall be entered based upon the ATP/WTA Ranking (singles) of the
            country’s Number 1 singles player.
            {'\n\n'}
            b) All players must confirm in writing they will be playing the event to confirm
            entry.
            {'\n\n'}
            c) There shall be one (1) wild card allocated for the host country in case their
            team does not otherwise qualify. If no Wild Card is necessary, then that position shall revert to an additional Direct Acceptance.
            If the Wild Card is needed for the host country, then the Wild Card team will
            be placed randomly into one of the six (6) groups.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2) Entry – Deadline and Acceptance</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) Entry deadline:</HighlightText>Tuesday 17 October 2023, 5pm Florida Time (Wednesday
            18 October 2023, 8am Sydney Time). The top fifteen (15) Direct Acceptance countries that qualify using 
            the 16 October 2023 ATP/WTA Ranking must confirm their acceptance to the competition by this deadline.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b) At Second Qualification Date:</HighlightText>
            The Second Qualification Date is designed to account for results and changes
            in ranking within the Top ATP and WTA eligible singles players since the
            Entry Deadline. The next highest ranked ATP and WTA eligible and entered
            players not already accepted into the competition determine the remaining 1
            x ATP and 1 x WTA qualifying teams, as long as the teams meet the minimum
            number of players required.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note:</HighlightText>Players will only be eligible to qualify at second qualification date if they
            have entered at the entry deadline.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>3) Qualification.</HighlightText> In order to qualify for the competition, a team that has accepted
            entry must comply with the following requirements:
            {'\n\n'}
            At this entry deadline, the Top 5 WTA qualified countries, Top 5 ATP qualified countries
            and Top 6 combined entry countries (inclusive of host country as Direct in or by
            wildcard) will be admitted to the competition, with the final two remaining entrants
            to be admitted to the competition on Monday 20 November 2023, 12 noon Florida
            time (Tuesday, 21 November 4 am Sydney time) based on the 20 November 2023
            rankings.
            {'\n\n'}
            Players must enter the event to be eligible (i.e., no automatic entries)
            {'\n\n'}
            a) The team is composed of the two (2) highest positioned and eligible players
            based on the ATP/WTA Ranking (Singles) as of 17 October 2023 (ATP/WTA
            Ranking (Singles) as of 20 November for the two teams qualifying at the second
            qualification deadline).
            {'\n\n'}
            b) A third player may be named, if eligible, at the time of the deadline. The No.
            3 players will be chosen based on their highest ATP/WTA Ranking (Singles or
            Doubles) as of 17 October 2023 (ATP/WTA Ranking (Singles or Doubles)
            as of 20 November for the two teams qualifying at the second qualification
            deadline).
            {'\n\n'}
            c) In the case of illness, injury or unforeseen circumstances, and the team number falls below two (2) members, the Supervisor and the Steering Committee may allow the team Captain to nominate a substitute player during the
            competition, although the team may continue with only one (1) member per
            gender.
            {'\n\n'}
            d) The Steering Committee may use discretion if a team includes a Top 20 ATP/
            WTA player and does not wholly meet the qualification criteria pertaining to
            the ATP or WTA second player.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>4) Ties – Team Entry</HighlightText>
            {'\n\n'}
            The 6 Highest ranked ATP and 6 highest ranked WTA players determine the first 12
            teams. If players of the same nationality qualify a team in both ATP and WTA or within either ATP or WTA Top 6, the next ranked players outside of the Top 6 will qualify
            their country until 12 teams are qualified (6 from ATP top ranked players and 6 from
            WTA top ranked players).
            {'\n\n'}
            a) For the top singles spot to determine team entry, entry is based on the ATP/
            WTA Ranking (Singles):
            {'\n\n'}
            i) If tied a current singles ranking beats a Protected Ranking/Special Ranking.
            {'\n\n'}
            ii) If tied between two current rankings or two Protected Rankings/Special
            Rankings, the ranking of the highest number 2 players will break the tie.
            If still tied, we move on to the number 3 player, etc.
            {'\n\n'}
            The final 6 teams will be determined by the highest combined ranking of the Top
            ATP and Top WTA ranked players who have not yet qualified their country. Where
            a combined ranking is equal between two teams, the team with the highest ranked
            singles player (ATP or WTA) will take priority. If still equal, the team with the highest
            ranked second singles player will take priority.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>5) Ties – Individual Entry</HighlightText>
            {'\n\n'}
            a) For spots 1-2 where entry is based on the ATP/WTA Ranking (Singles).
            {'\n\n'}
            i) If tied.
            {'\n\n'}
            • A current ranking beats a Protected Ranking/Special Ranking.
            {'\n\n'}
            • If still tied, the most total points from the Grand Slams, mandatory
            ATP Tour Masters 1000, WTA 1000 tournaments and Nitto ATP Finals/WTA Finals main draws, and if still tied, then
            {'\n\n'}
            • If still tied, the fewest events played, counting all missed Grand
            Slams, ATP Tour Masters 1000 tournaments/WTA 1000 events they could have played
            (as described under A. above) as if played, and if still tied, then,
            {'\n\n'}
            • If still tied, coin toss
            {'\n\n'}
            b) For spot 3 where entry is based on the best of ATP/WTA Ranking (Singles or
            Doubles).
            {'\n\n'}
            i) If tied.
            {'\n\n'}
            • If best-of ranking is the same, the player with the highest ATP/WTA
            Singles Ranking wins the tie. Ties between singles rankings are broken as per point a) above.
            {'\n\n'}
            • If both ATP/WTA Doubles Rankings are the same, the player with the
            highest ATP/WTA Ranking (Singles) wins the tie. Ties between doubles rankings are broken as per the ATP/WTA tie breaking rules.
            {'\n\n'}
            • A current ranking beats a Protected Ranking/Special Ranking.
            {'\n\n'}
            • If still tied, coin toss
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>6) Withdrawal of entry</HighlightText>
            {'\n\n'}
            a) The deadline for withdrawal of entry for a player / team shall be as follows:
            {'\n\n'}
            i) For those players/teams confirming entry on the entry deadline, any withdrawal after 5:00pm Eastern US on Tuesday, 17 October 2023 will be
            considered as a Late Withdrawal.
            {'\n\n'}
            ii) WTA - A player’s withdrawal from United Cup is subject to all applicable
            withdrawal requirements and penalties in Section IV of the WTA Rules.
            {'\n\n'}
            b) Violation of this Section shall be penalized consistent with the Player Code of
            Conduct. Late Withdrawal Fines shall apply and be based upon the player’s
            ranking at the date of acceptance. Any player withdrawing after accepting
            entry shall not be permitted to participate in any other event, including exhibitions, during the United Cup Competition.
            Any players accepted as the #3 player, may withdraw from the team without penalty to play another event
            during United Cup if she/he withdraws prior to the applicable entry deadlines
            for that tournament.
            {'\n\n'}
            c) Players have the right to an Appeal of the Late Withdrawal Fine which must
            be submitted to the ATP Appeals Tribunal/WTA, which consideration is limited
            to the fine only.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>7) Late Withdrawals / Substitutions</HighlightText>
            {'\n\n'}
            a) Number 1 player withdraws after the deadline, 17 October 2023.
            {'\n\n'}
            i) The team remains in the competition as long as there is a minimum of
            two (2) ATP/WTA Ranked players on the team, which must have
            an ATP/WTA Ranking (Singles), unless otherwise approved by ATP/WTA
            or, an Alternate is inserted as approved by ATP/WTA. This can include
            a replacement player. The team must also have at least 1 ATP or WTA
            member of the team ranked 250 or better in singles to remain in the competition. Number 1 and 2 players to be reclassified if required.
            (e.g. #2 becomes #1 and the replacement player becomes the new #2).
            {'\n\n'}
            ii) The next highest ranked singles player from that country may be added to
            the team, unless otherwise approved by ATP/WTA. Non entered substitute/alternate players may only be considered if the team does not have
            a minimum of 2 entered players meeting the criteria.
            {'\n\n'}
            b) The number 2 singles player withdraws prior to 10:00 am local time in Sydney, the
            day prior to the start of the competition.
            {'\n\n'}
            i) The next highest singles ranked player from that country may be added to
            the team, unless otherwise approved by the ATP/WTA. That player may
            either be a player not already accepted to a Week 1 Tour event, or a player
            who by approval of ATP/WTA may be able to withdraw from main draw and qualifying of
            a week 1 without penalty(For ATP, Challenger Tour
            only. For WTA 125, only if for main draw withdrawal before the main draw
            is made.), prior to the start of the qualifying event without penalty.
            {'\n\n'}
            c) All substitutions are subject to ATP/WTA approval.
            {'\n\n'}
            d) If through the withdrawal of the number 1 player or the numbers 1 and 2
            players between the deadline (17 October 2023) and 10:00 am local time in Perth/
            Sydney, the day prior to the start of competition, a team may be withdrawn
            and replaced by an alternate team if they do not have at least one member of
            the team ranked 250 or better in singles
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>8) Alternate Team Selection</HighlightText>
            {'\n\n'}
            a) The Alternate Team will be the first team out of the final selection.
            {'\n\n'}
            b) If needed, the individual players may be granted a release from any other
            ATP/WTA Tour Qualifying event they are entered in during the period of the
            United Cup Competition, pending ATP/WTA approval, or from any ATP Challenger Tour event.
            {'\n\n'}
            c) The Alternate Team may be selected for participation until 10:00 am local time
            in Perth/Sydney, the day prior to the start of competition.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>9) Withdrawals after Start of the Competition</HighlightText>
            {'\n\n'}
            a) Any team that through withdrawals of team members has only one (1) player
            from each Tour remaining may continue in the competition as long as those
            players have an ATP/WTA Ranking, unless otherwise approved by ATP/WTA.
            This player must play singles and be available for the mixed doubles.
            {'\n\n'}
            b) If a team does not have at least one (1) eligible ATP and one (1) WTA player,
            the team will lose by Walkover and no matches will be played, unless if
            approved by the Steering Committee the team may remain in competition
            and the matches for the missing player are lost by Walkover. No points are
            awarded for Walkovers.
            {'\n\n'}
            c) A team may add an alternate player after the competition has begun as long
            as the player is not violating ATP/WTA rules for “No Play after Withdrawal” or
            “One Tournament per Week”, or as approved by ATP/WTA. In no case may
            a player compete in two events offering ATP/WTA Ranking points which are
            held in the same ranking week.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>10) Seeding</HighlightText>
            Seeding for the event will be based off the combined regular ranking (no protected ranking/special ranking) of the top ATP and top WTA ranked player regardless
            of their qualification into the event. As per the entry order priority rule, where a
            combined ranking is equal between two teams, the team with the highest ranked
            singles player (ATP or WTA) will become the higher seed. If still equal, the team
            with the highest ranked second singles player will be the higher seed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>D. Competition Format</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Host Cities</HighlightText>
            {'\n\n'}
            Sydney and Perth will host Countries for the Group Stages and  Quarterfinals. Sydney
            will host the Semi Finals and Final.
            {'\n\n'}
            At the Official Draw, Sydney and Perth will be drawn as host of one of 2
            combinations of seeds –
            {'\n\n'}
            • #1 (Group A), #3 (Group C), and #5 (Group E)
            {'\n\n'}
            •#2 (Group B), #4 (Group D), and #6 (Group F)
            {'\n\n'}
            Which City hosts which combination of seeds to be determined at the Official Draw.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>1) Round Robin – The Groups</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>The Draw Teams 1-18</HighlightText>
            {'\n\n'}
            a) The oﬃcial draw for the placement of teams 1-18 shall take place, on Monday
            23 October 2023.
            {'\n\n'}
            b) The teams shall be positioned from 1 to 18 in accordance with the best
            combined ATP/WTA Ranking (Singles) as of 23 October 2023, of the number 1
            players of each team accepted at the 17 October 2023 deadline. Two team
            positions 1 ATP Qualified position and 1 WTA position will be reserved. The
            final two remaining entrants to be admitted to the competition on Monday 20
            November 2023 based on the November 20 rankings.
            {'\n\n'}
            c) The top six (6) teams shall be placed in separate groups.
            {'\n\n'}
            d) The next six (6) teams in rank order (7-12) shall be drawn at random into the
            six (6) groups.
            {'\n\n'}
            e) The next six (6) teams (13-18) shall be drawn at random for each of the six
            (6) groups.
            {'\n\n'}
            f) The final two (2) teams selected at the second deadline shall be drawn at
            random for each of the two (2) incomplete groups.
            {'\n\n'}
            Groups will be assigned as follows:
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group A</HighlightText>
            #1 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group B</HighlightText>
            #2 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group C</HighlightText>
            #3 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition.
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group D</HighlightText>
            #4 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group E</HighlightText>
            #5 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Group F</HighlightText>
            #6 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2) Daily Order of Play - The Tie</HighlightText>
            {'\n\n'}
            a) A tie consists of two (2) singles matches and one (1) mixed doubles match.
            {'\n\n'}
            b) Each team Captain shall submit to the ATP/WTA Supervisor, in writing, the
            name of the two (2) singles players and the mixed doubles team selected to
            compete in the Tie. The singles players shall be the top two (2) ranked ATP/
            WTA players (including protected ranking/special ranking) as of the date of
            the entry deadline unless there is a medically supported substitution.
            {'\n\n'}
            c) The deadline to submit the names of the competing players (singles/doubles)
            is 3:00pm local time, the day prior to the scheduled Tie.
            {'\n\n'}
            d) For each Tie, the highest positioned (hereafter, number ones) singles players
            named from each team shall compete against each other. The order of
            matches shall be as follows unless otherwise decided by the Steering
            Committee:
            {'\n\n'}
            i) Number 1 ATP/WTA Singles followed by
            {'\n\n'}
            ii) Number 1 ATP/WTA Singles followed by
            {'\n\n'}
            iii) Mixed Doubles
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note:</HighlightText> “Not Before” times may be assigned as determined by the organizers
            in consultation with the ATP Supervisor.
            {'\n\n'}
            e) Upon the completion of the mixed doubles match, the winner of the tie shall
            be the team that wins at least two (2) of the three (3) matches.
            {'\n\n'}
            f) The mixed doubles match must be played regardless of the results of the two
            singles matches. *
            *For the Final, if the tie is decided following the singles matches, the mixed doubles match will not be played (unless mutually agreed by
            both Countries), and the money will be split evenly amongst the members of
            both teams.
            {'\n\n'}
            </HighlightText>
            <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading2}>3) Format and Competition </HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) Groups</HighlightText>
            {'\n\n'}
            There will be six Groups comprising of three countries in each group. Each
            city will host three groups (nine countries) for the Group stages, which will consist of round robin ties where each country will play both other countries in
            their group.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>4) Determination of Group Winners</HighlightText>
            {'\n\n'}
            a) Number of ties won
            {'\n\n'}
            b) Number of Ties Played
            {'\n\n'}
            Comment: 2-1 win-loss beats 2-0 win-loss. A 1-2 win-loss beats a 1-1 or 1-0
            record. A team winning by walkover shall have the tie count in its results as a
            tie played. The team causing the walkover shall not have the tie counted as a
            tie played.
            {'\n\n'}
            c) In a tie between three (3) teams, the following shall apply:
            {'\n\n'}
            i) If three (3) teams have the same number of wins, then the team having
            played fewer total matches (singles & mixed doubles) will be eliminated
            and the winner of the head-to-head matchup between the two remaining
            teams advance, if still tied then,
            Comment: 5-1 win-loss beats 5-0 win-loss.
            {'\n\n'}
            ii) The team with the most match wins (singles & doubles), if still tied then,
            {'\n\n'}
            iii) The team with the highest percentage of matches won, if still tied then,
            {'\n\n'}
            iv) The team that has the highest percentage of sets won, if still tied then,
            {'\n\n'}
            v) The team with the highest percentage of games won,
            {'\n\n'}
            d) If ii), iii), iv) or v) produce one superior team (first place), then the tie is broken,
            or
            {'\n\n'}
            e) If ii), iii), iv) or v) produce one inferior team then that team is eliminated and
            the winner of the match between the two (2) remaining teams is the winner of
            the group.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Notes: </HighlightText>In all tie-break situations, the following shall apply.
            {'\n\n'}
            • Unplayed matches shall be scored as completed for purposes of matches
            played.
            {'\n\n'}
            • Defaulted and retired singles or doubles matches shall be scored as completed for purposes of matches played and will count as a straight set win or loss.
            However, games won or lost in matches with defaulting or retiring player shall
            not be counted for percentage of games won.
            {'\n\n'}
            • Teams advancing from a tie via a team walkover (i.e. no alternate) will count
            as a tie won but this does not count towards total matches won, percentage
            of sets or percentage of games won.
            {'\n\n'}
            • Any team that withdraws from any round robin tie after the first round robin tie
            shall not be eligible for the Quarterfinals.
            {'\n\n'}
            • The Match Tie-Break (doubles) counts as a set won and for games won
            counts as 1-0.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>5) Quarterfinals</HighlightText>
            {'\n\n'}
            Group winners will advance to the Quarterfinals. One Quarterfinal spot in each
            city will be awarded to the best runner up in that City. Winners will advance to the
            Semi-Finals, to be hosted in the Finals City.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>6) Determination of Best Runner up Quarterfinal spot</HighlightText>
            {'\n\n'}
            a) Number of ties won
            {'\n\n'}
            b) Number of Ties Played
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment:</HighlightText> 2-1 win-loss beats 2-0 win-loss. A 1-2 win-loss beats a 1-1 or 1-0
            record. A team winning by walkover shall have the tie count in its results as a
            tie played. The team causing the walkover shall not have the tie counted as a
            tie played.
            {'\n\n'}
            c) In a tie between three (3) teams, the following shall apply:
            {'\n\n'}
            i) If teams have the same number of wins, then the team
            having played fewer total matches (singles & mixed doubles) will be eliminated and, if still tied then,
            Comment: 5-1 win-loss beats 5-0 win-loss.
            {'\n\n'}
            ii) The team with the most match wins (singles & doubles), if still tied then,
            {'\n\n'}
            iii) The team with the highest percentage of matches won, if still tied then,
            {'\n\n'}
            iv) The team that has the highest percentage of sets won, if still tied then,
            {'\n\n'}
            v) The team with the highest percentage of games won,
            {'\n\n'}
            d) If ii), iii), iv) or v) produce one superior team (first place), then the tie is broken,
            or
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Notes:</HighlightText> In all tie-break situations, the following shall apply.
            {'\n\n'}
            • Unplayed matches shall be scored as completed for purposes of matches
            played.
            {'\n\n'}
            • Defaulted and retired singles or doubles matches shall be scored as completed for purposes of matches played and will count as a straight set win or loss.
            However, games won or lost in matches with defaulting or retiring player shall
            not be counted for percentage of games won.
            {'\n\n'}
            • Teams advancing from a tie via a team walkover (i.e. no alternate) will count
            as a tie won but this does not count towards total matches won, percentage
            of sets or percentage of games won.
            {'\n\n'}
            • Any team that withdraws from any round robin tie after the first round robin tie
            shall not be eligible for the Quarterfinals.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>6) Quarter finals  </HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>a) </HighlightText>
            The eight (8) teams advancing to the knock-out rounds shall be placed in the
            draw as follows:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Sydney: </HighlightText>
            {'\n\n'}
            • The winner of Group 1 will play the best runner-up* from the remaining groups
            from the city
            {'\n\n'}
            • The winner of Group 3 will play the winner of Group 5*  
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Perth: </HighlightText>
            {'\n\n'}
            • The winner of Group 2 will play the best runner-up* from the remaining groups
            from the city  
            {'\n\n'}
            • The winner of Group 4 will play the winner of Group 6*
            {'\n\n'}
            *No runner-up teams will play versus the winner of their groups before the Final
            of the competition.
            {'\n\n'}
            To avoid that the runner-up teams in the quarter finals will swap position with the
            winner of the lowest ranked group in the specific city.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>7) Semi-Finals  </HighlightText>
            {'\n\n'}
            The four winners of the quarterfinals will qualify for the Semi Finals in Sydney.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>8) The Final  </HighlightText>
            {'\n\n'}
            • Final – Winner Semi Final 1 v Winner Semi Final 2
            {'\n\n'}
            a) The Champion Team shall be decided by the result of a straight knock-out
            competition.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>E. Protected Ranking/Special Ranking*</HighlightText>
            {'\n\n'}
            The following applies to any player with a Protected Ranking (“PR”)/Special Ranking
            (“SR”) that has been used in any manner during the competition or to qualify a country for
            entry.
            {'\n\n'}
            1) The PR must be valid at the entry deadline and remain valid through to the start
            of the competition.
            {'\n\n'}
            2) Can be used for team entry.
            {'\n\n'}
            3) Will count for position in the singles lineup.
            {'\n\n'}
            4) Will count for Ranking points.
            {'\n\n'}
            5) Will not count for team seeding.
            {'\n\n'}
            6) For WTA players - Will count as Special Ranking used for the player(s).
            {'\n\n'}
            7) For ATP players - Will not count as Protected Ranking used for the player(s).
            {'\n\n'}
            8) May only be used at one (1) United Cup event
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>F. Schedule of Play</HighlightText>
            {'\n\n'}
            The following is the schedule of play unless otherwise determined by the Tournament
            Committee and Supervisor:
            {'\n\n'}
            1) The eighteen (18) teams shall play Round Robin matches over the first days to
            determine the six (6) winners of the Round Robin groups and the two best runner
            ups (one for each city) qualifying for the Quarterfinals.
            {'\n\n'}
            2) Following the draw, the daily ties (country v country) for the round robin sessions
            will be scheduled and announced.
            {'\n\n'}
            3) All players and Captains must be available for play on the first day of the event.
            {'\n\n'}
            4) Once the Captain has named the two (2) players competing in the singles, the
            pairings for the Tie shall be made automatic as determined by the ATP/WTA
            Ranking.
            {'\n\n'}
            5) Protected Ranking/Special Ranking (singles) will be used for a player’s position
            on the team but cannot be used for team seeding.
            {'\n\n'}
            6)A travel day for the Quarterfinal winners from Perth will take place on the 7th day
            (Thursday) of the Tournament.
            {'\n\n'}
            7) The Semi-Finals will be held on the 9th day of the tournament.
            {'\n\n'}
            8) The Final will be held on the 10th day of the tournament.
            {'\n\n'}
            9) The ATP/WTA Supervisors reserve the right to change the schedule of play, alter
            starting times and make other changes deemed necessary for the smooth running of the competitio
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>G.Team Captain / Team Coache</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Designation of Captain</HighlightText>
            {'\n\n'}
            a) The number one player on each team (the highest ATP/WTA singles ranked
            player) is by default the Team Captain, however each team can elect another player or person as Team Captain, provided such person is of the same
            nationality as the team they are representing. The No 1 player has the overall authority on the position of team
            captain. If the No 1 player decides to appoint a team captain instead of fulfilling the role, the chosen person must be either an ATP / WTA player, former
            player or coach. Exceptions to this are subject to approval by the Event Steering Committee. The Team Captain must be confirmed and submitted to the
            ATP/WTA no later than December 1.
            {'\n\n'}
            The Team Captain is responsible for attending all meetings, submitting the
            team’s line up and acting as the official representative for the team.
            {'\n\n'}
            Coaching is allowed, and the Team Captain will have the option to sit on the
            court throughout matches.
            {'\n\n'}
            b) The Captain must be communicated to ATP/WTA no later than December 1,
            2023.
            {'\n\n'}
            c) In the event the Captain is not on-site or not available, the number one (1)
            player shall assume the role of Captain or designate a non-playing team
            member as Captain.
            {'\n\n'}
            d) The Captain must be on-site for the duration of that team’s participation in the
            competition. The Captain shall be subject to all provisions of the Player Code
            of Conduct, including those pertaining to Dress and Equipment.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) Duties of the Captain.</HighlightText> The duties of the Captain are as follows:
            {'\n\n'}
            a) Designate the team’s lineup, after consultation with the team members;
            {'\n\n'}
            b) Act as official representative for their respective team;
            {'\n\n'}
            c) Attend all team meetings; and
            {'\n\n'}
            d) The designated Captain may sit on court during the match and may coach
            during changeovers, set-breaks and during play as long as it does not interrupt play.
            {'\n\n'}
            e) The Captain may speak to the Chair Umpire, however only the Player may
            initiate Challenges to line calls.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3) Individual Coaches*</HighlightText>
            {'\n\n'}
            a) Each player may have his personal coach be the designated coach for his
            matches.
            {'\n\n'}
            *Individual coaches with multiple players can coach their players even if they are
            competing for different countries. If a coach has one player on each competing
            team, then the coach may only be on court for one country in that tie. This does
            not apply if the individual coach is also the Captain of a team. A Captain may only
            sit on court and coach for the team he is captaining.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>4) Duties of the Coach. </HighlightText>The duties of the coach are as follows:
            {'\n\n'}
            a) During each match the player involved may use his personal coach to assist
            him during the match.
            {'\n\n'}
            b) The coach will sit in the designated area assigned for the coach of that match.
            {'\n\n'}
            c) The coach may sit on court during the match and may coach during changeovers, set-breaks and during play as long as it does not interrupt play.
            {'\n\n'}
            d) Official team members/coaches may also communicate with the player during
            changeovers and set-breaks
            {'\n\n'}
            e) All team members, Captain and coaches, when courtside, must sit in the area
            designated for the teams participating in that Tie.
            {'\n\n'}
            f) The coach must adhere to the ATP Code of Conduct, including logo restrictions on attire.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>5) Player Designations</HighlightText>
            {'\n\n'}
            a) Each team Captain shall submit to the ATP/WTA Supervisor, in writing, the
            name of the two (2) singles players and the mixed doubles team selected
            to compete in the Tie. The singles players shall be the top ATP/WTA
            ranked players (including protected ranking/special ranking) as of the date
            of the entry deadline, unless there is a medically supported substitution, or
            otherwise approved by the Supervisor.
            {'\n\n'}
            b) Change may be allowed for medical conditions or for unforeseen circumstances
            approved by the ATP/WTA Supervisor.
            {'\n\n'}
            c) The team Captains must give in writing the names of the two (2) singles players and the mixed doubles team to the Supervisor no later than 3:00pm on
            the day prior to the scheduled Tie. The mixed doubles team may be chosen
            from any ATP/WTA players named to the team.
            For the Tournament Final, the team Captain must give in writing the names
            of the two (2) singles players and the mixed doubles team to the Supervisor
            within fifteen minutes after the completion of the second tie determining the
            teams for the upcoming Final.
            {'\n\n'}
            d) Following the conclusion of the second singles match, any change in the mixed
            doubles team must be communicated to the ATP/WTA Supervisor, in writing,
            within 10 minutes of the conclusion of the fourth singles match. The Supervisors shall notify the opposing Captain and all other relevant staff once both
            Captains have submitted their doubles teams.
            {'\n\n'}
            e) There shall be a maximum of twenty five (25) minutes between the end of the
            last singles match and the start of the mixed doubles match if one or more of
            the doubles players competed in the last singles match. If none of the players
            designated for the mixed doubles has competed in the last singles match,
            the mixed doubles shall be scheduled as “followed by” with the exact time
            determined by the Supervisor. Fifteen minutes is recommended following the
            conclusion of the last singles match, however mixed doubles players who
            competed in the last singles match can elect to start after fifteen (15) minutes
            or after twenty five (25) minutes.
            {'\n\n'}
            f) The Captain must name the mixed doubles team one hour before the start of
            the day’s play if his team has no singles matches on that day (rain or other
            cause of delay).
            {'\n\n'}
            g) The team Captain may, whenever necessary, replace a singles player in the
            case of illness, injury or unforeseen circumstances approved by the ATP/WTA
            Supervisor.
            {'\n\n'}
            i) A player who withdraws from the singles shall be eligible for mixed doubles on that same day.
            {'\n\n'}
            h) In the event of a conduct default, the Supervisor may decide to remove the
            offending player(s) for the remainder of the tie or event.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>H. Medical</HighlightText>
            {'/n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Tournament Doctor</HighlightText>
            {'\n\n'}
            a) An official Tournament Doctor is required to be present at all times during play
            and a reasonable time before play begins.
            {'\n\n'}
            b) The tournament doctor shall be available for court calls as necessary.
            {'\n\n'}
            2) ATP Physiotherapist/WTA Primary Health Care Provider (PHCP)
            {'\n\n'}
            a) Each venue will have an ATP Physiotherapist(s)/WTA PHCP(s) assigned to
            the event.
            {'\n\n'}
            b) Only the ATP Physiotherapist/WTA PHCP will be allowed on court during the
            match.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>I. Code of Conduct</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Players.</HighlightText> All players are subject to the ATP/WTA Code of Conduct.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) Dress and Equipment.</HighlightText>
            {'\n\n'}
            i) All team members must dress in similar attire that identifies them with the
            country they are representing.
            {'\n\n'}
            ii) Team attire must be submitted to and approved by ATP/WTA in advance
            of the event.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) Team Captain / Coaches.</HighlightText> All Team Captains and Coaches are subject to the provisions specified in the ATP/WTA Code of Conduct regarding Dress and Equipment and conduct on-site during the event.
            {'\n\n'}
            During matches, official functions and media appearances, all Team Captains
            shall wear tournament provided unbranded clothing (polo shirt / jacket/ hat) with
            the United Cup logo provided by the event whilst sat on the team bench and
            performing all captains’ duties both on and off court; for example but not limited to
            official functions, walk ons, ceremonies, photo opportunities, media appearances
            etc.
            {'\n\n'}
            Captains with ongoing personal clothing sponsorship, will be permitted to wear
            a different shirt to the unbranded United Cup polo shirt, provided it is in the team
            colour or similar and is approved prior to the event.
            {'\n\n'}
            Captains wearing a personal shirt they will still be expected to wear the United
            Cup unbranded jacket for official functions, walk ons, ceremonies, photo opportunities, media appearances etc.
            If captains have other ongoing personal sponsorships (patch deals etc.) and wish
            to wear a shirt complying with the above provision during the event with sponsor
            logos on the shirt, all such sponsor logos must comply with ATP/WTA tour sizing
            guidelines and must be approved prior to the event.
            {'\n\n'}
            Coaches / other team members – if they are wearing shirts with sponsor logos in
            accordance with ATP/WTA tour sizing rules, they may sit on the team benches.
            {'\n\n'}
            Those not complying with this requirement will need to sit in the allocated team
            area in the stands.
            {'\n\n'}
            In addition, any violation occurring during the match shall be penalized with a
            “Coaches Warning”. The first violation results in a Warning and a second violation
            during the match will result in the coach being removed from the court for the
            remainder of that Tie.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3) Fines.</HighlightText> Any fines issued during the Tie will be levied against the individual.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>J. Prize Money (All figures in U.S. dollars)</HighlightText>
            {'\n\n'}
            Total Prize Money: USD$10,000,000 (USD$5,000,000 each for ATP and WTA)
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_1.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            *If the Tie is decided following the singles matches, the doubles match may not be
            played, and the money will be split evenly amongst the members of both teams.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            All players on the team (whether the player plays a match or not) earn the same
            amount for a team win.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_3.png'}}/>
          <ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>
         {/*  <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_4.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
 */}
 </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_5.png'}}/>
          <ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>
</ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_6.png'}}/>
          <ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>
{/* 
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_7.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText> */}

          <HighlightText style={RuleStyles.Description}>
          Ranking as of 16 October 2023 or 20 November 2023, for the teams accepted at the
          second qualification date.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Participation Fee Notes</HighlightText>
            {'\n\n'}
            • Players may only receive a participation fee in one category. Players will receive
            a fee for singles or mixed doubles, whichever was used for their entry.
            {'\n\n'}
            • Participation fee for any team substitutions following the 17 October 2023 entry
            order shall be based upon the entry ranking team order and player ranking.
            {'\n\n'}
            • A number 1 singles player will receive 100% of the participation fee if they
            compete in all Group stage singles matches. Pro-Rata schedule for players number
            1 competing in less than all Group stage singles matches is listed below including
            Pro-Rata schedule for mixed doubles matches participated in.
            {'\n\n'}
            • Players number 2-3 will receive 100% participation fee regardless of whether
            they compete in any of the Group state matches.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_8.png'}}/>
<ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>

          <HighlightText style={RuleStyles.Description}>
            • Max of 30% per tie
            {'/n'}
            • Playing Singles and Doubles in same tie = 30%
            {'/n'}
            • Applies to Group stage matches and ties only
            {'/n'}
            • This applies to all #1 players including players competing with Protected
            Ranking (PR)/Special Ranking
            {'/n'}
            • Promotional % = minimum participation fee
            {'/n'}
            *15 % maximum per all mixed doubles matches, regardless of if a player plays 1 or
            2 mixed doubles during the group stage. Players competing in singles and mixed
            doubles in a Tie will receive the Promotional fee plus 30 % per the singles match. A
            #1 Player only playing 2 mixed doubles during the group stage will receive 40 %
            Promotional + 15 % total for both mixed doubles matches (55 % overall). Examples
            in the table below.
            {'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_9.png'}}/>
          <ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_10.png'}}/>
          <ZoomText>
          <HighlightText>{'\n\n'}</HighlightText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading2}>K. ATP/WTA Ranking Points</HighlightText>
            <HighlightText style={RuleStyles.SubHeading3}>Singles
              {'\n\n'}
            </HighlightText>
            </HighlightText>
            </ZoomText>
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_11.png'}}/>
            <ZoomText>
            <HighlightText>{'\n\n'}</HighlightText>
            <HighlightText>
            WTA Only: WTA player who wins all 5 matches to receive 500 points. WTA player
            who wins 4 of 5 matches to receive a minimum of 325 points or points per the table
            above whichever is higher.
            </HighlightText>
            <HighlightText>{'\n\n'}</HighlightText>
            <HighlightText style={RuleStyles.Description}>
              <HighlightText style={RuleStyles.SubHeading2}>L. Walkovers</HighlightText>
              1) No points are awarded if no matches of the tie are played
              {'\n\n'}
              2) An individual match in the tie is won by a Walkover, points are awarded based
              upon the lowest ranking category (251+).
              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>M. Media / STARS Obligations</HighlightText>
              {'\n\n'}
              1) All teams are requested to arrive in Australia on time for any pre event media /
              STARS commitments, to be arranged.
              {'\n\n'}
              2) Normal post-match interview protocol will be followed with the exception being
              a player competing in the 4th singles match who is also competing in the mixed
              doubles may postpone his media commitment until after the mixed doubles
              match. However, the ATP/WTA PR Manager may approach the player following the singles match to obtain a few quotes to give to media, if requested.
              N.Jurisdiction Governing the competition
              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>N. Jurisdiction Governing the competition</HighlightText>
              {'\n\n'}
              1) The Competition is sanctioned and recognized by ATP Tour, Inc. and WTA Tour.
              {'\n\n'}
              2) All players who enter and compete in the competition agree to be subject to the
              Rules and Regulations of the ATP/WTA, including, but not limited to, the Code
              of Conduct, the Tennis Anti Corruption Program and the Tennis Anti-Doping Program.
              {'\n\n'}
              3) The ATP/WTA Supervisor, in consultation with the SVP, Rules & Competition and
              WTA Senior Vice President Competition & On-Site Operations, shall determine
              and resolve all questions not considered in these Rules and Regulations.
              {'\n\n'}            
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule48', next: 'Rule50', nav: navigation }} />
    </>
  );
}


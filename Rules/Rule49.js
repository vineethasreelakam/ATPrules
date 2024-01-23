import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule49({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>IV. WORLD CHAMPIONSHIPS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>

            <Text style={RuleStyles.SubHeading1}>4.03 United Cup</Text>
            {'\n\n'}
            The United Cup is an annual country vs country mixed team competition. Eighteen
            (18) countries will participate, with a minimum of three ATP and three WTA players per
            country
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Round Robin Competition</Text>
            {'\n\n'}
            1) The United Cup is a competition for eighteen (18) teams, each team composed
            of a minimum of three (3) ATP and three (3) WTA players and a maximum of four
            (4) ATP/WTA players from the same country. The team criteria shall be:
            {'\n\n'}
            a) The three (3) highest ranked singles ATP/WTA players; then
            {'\n\n'}
            b) Teams may include a 4th ATP and WTA player, whose entry will be accepted
            based on being the highest of singles ranking (up to maximum 500) or doubles ranking (up to maximum 250).
            {'\n\n'}
            c) A junior player, meeting the criteria stated below, may be included as a country’s 4th respective Tour player.
            The junior player must,
            {'\n\n'}
            i) Be born in 2004 or later, and
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
            group. Group winners will advance to the City Final match, playing off for one of 3
            guaranteed Semi-Final spots against the winner of the other group from that host
            city. The remaining Semi Final spot will be awarded to the best performing team
            throughout the entire competition, from the 3 City Final runners-up.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Player Nationality / Change of Nationality</Text>
            {'\n\n'}
            A player’s nationality as of the entry date shall be used to determine team entry. All
            player nationality determinations are subject to ATP/WTA approval.
            <Text style={RuleStyles.SubHeading2}>1) Nationality.</Text> A player’s nationality on the date of that country’s acceptance to the
            United Cup shall determine the player’s eligibility to compete for that country.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>2) Change of Nationality.</Text>
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
            <Text style={RuleStyles.SubHeading2}>C.Teams Qualifications</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Entry.</Text> The teams shall be selected and entered in the following manner:
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
            <Text style={RuleStyles.SubHeading2}>2) Entry – Deadline and Acceptance</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Entry deadline.</Text>Tuesday 8 November 2022. The top fifteen (15) Direct Acceptance countries that qualify using the 7 November 2022 ATP/WTA Ranking must confirm their acceptance to the competition by this deadline.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>3) Qualification.</Text> In order to qualify for the competition, a team that has accepted
            entry must comply with the following requirements:
            {'\n\n'}
            At this entry deadline, the Top 6 WTA qualified countries, 5 of the 6 ATP qualified
            countries and Top 5 combined entry countries will be admitted to the competition,
            with the final two remaining entrants to be admitted to the competition on Monday 21
            November 2022 based on the 21 November 2022 rankings.
            {'\n\n'}
            Players must enter the event to be eligible (i.e., no automatic entries)
            {'\n\n'}
            a) The team is composed of the two (2) highest positioned and eligible players
            based on the ATP/WTA Ranking (Singles) as of 7 November 2022.
            {'\n\n'}
            b) A third ATP/WTA singles ranked player must be named by the deadline, 8
            November 2022, and must be on-site for the competition.
            {'\n\n'}
            c) A fourth player may be named, if eligible, at the time of the deadline. The No.
            4 players will be chosen based on their highest ATP/WTA Ranking (Singles or
            Doubles) as of 7 November 2022.
            {'\n\n'}
            d) In the case of illness, injury or unforeseen circumstances, and the team number falls below three (3) members, the Supervisor and the Steering Committee may allow the team Captain to nominate a substitute player during the
            competition, although the team may continue with only two (2) members per
            gender.
            {'\n\n'}
            e) The Steering Committee may use discretion if a team includes a Top 20 ATP/
            WTA player and does not wholly meet the qualification criteria pertaining to
            the ATP or WTA third and fourth player.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>4) Ties – Team Entry</Text>
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
            <Text style={RuleStyles.SubHeading2}>5) Ties – Individual Entry</Text>
            {'\n\n'}
            a) For spots 1-3 where entry is based on the ATP/WTA Ranking (Singles).
            {'\n\n'}
            i) If tied.
            {'\n\n'}
            • A current ranking beats a Protected Ranking/Special Ranking.
            {'\n\n'}
            • If still tied, the most total points from the Grand Slams, mandatory
            ATP Tour Masters 1000, WTA 1000 mandatory and WTA 1000 tournaments and Nitto ATP Finals main draws, and if still tied, then
            {'\n\n'}
            • If still tied, the fewest events played, counting all missed Grand
            Slams, ATP Tour Masters 1000 tournaments they could have played
            (as described under A. above) as if played, and if still tied, then,
            {'\n\n'}
            • If still tied, coin toss
            {'\n\n'}
            b) For spot 4 where entry is based on the best-of ATP/WTA Ranking (Singles or
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
            <Text style={RuleStyles.SubHeading2}>6) Withdrawal of entry</Text>
            {'\n\n'}
            a) The deadline for withdrawal of entry for a player / team shall be as follows:
            {'\n\n'}
            i) For those players/teams confirming entry on the entry deadline, any withdrawal after 5:00pm Eastern US on Tuesday, 8 November 2022 will be
            considered as a Late Withdrawal.
            {'\n\n'}
            ii) WTA - A player’s withdrawal from United Cup is subject to all applicable
            withdrawal requirements and penalties in Section IV of the WTA Rules.
            {'\n\n'}
            b) Violation of this Section shall be penalized consistent with the Player Code of
            Conduct. Late Withdrawal Fines shall apply and be based upon the player’s
            ranking at the date of acceptance. Any player withdrawing after accepting
            entry shall not be permitted to participate in any other event, including exhibitions, during the United Cup Competition.
            {'\n\n'}
            c) Players have the right to an Appeal of the Late Withdrawal Fine which must
            be submitted to the ATP Appeals Tribunal/WTA, which consideration is limited
            to the fine only.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>7) Late Withdrawals / Substitutions</Text>
            {'\n\n'}
            a) Number 1 player withdraws after the deadline, 8 November 2022.
            {'\n\n'}
            i) The team remains in the competition as long as there is a minimum of
            three (3) ATP/WTA Ranked players on the team, two of which must have
            an ATP/WTA Ranking (Singles), unless otherwise approved by ATP/WTA
            or, an Alternate is inserted as approved by ATP/WTA. This can include
            a replacement player. The team must also have at least 1 ATP or WTA
            member of the team ranked 250 or better in singles to remain in the competition. Number 1 and 2 players to be reclassified if required.
            {'\n\n'}
            ii) The next highest ranked singles player from that country may be added to
            the team, unless otherwise approved by ATP/WTA. Non-entered substitute/alternate players may only be considered if the team does not have
            a minimum of 3 entered players meeting the criteria.
            {'\n\n'}
            b) A top 2 singles player withdraws prior to 10:00 am local time in Sydney, the
            day prior to the start of the competition.
            {'\n\n'}
            i) The next highest singles ranked player from that country may be added to
            the team, unless otherwise approved by the ATP/WTA. That player may
            either be a player not already accepted to a Week 1 event, or a player
            who by approval of ATP/WTA may be able to withdraw from qualifying of
            a week 1, prior to the start of the qualifying event without penalty.
            {'\n\n'}
            c) One of the positions (players 3-4) withdraws prior to 10:00 am local time in
            Sydney, the day prior to the start of competition.
            {'\n\n'}
            i) The next player from that country with the highest ATP/WTA Ranking
            (Singles or Doubles) may be added to the team. That player may either
            be a player not already accepted to a Week 1 event, or a player who by
            approval of ATP/WTA may be able to withdraw from ATP/WTA Tour qualifying or Challenger Main Draw and Qualifying of a week 1, prior to the
            start of the qualifying event without penalty.
            {'\n\n'}
            d) All substitutions are subject to ATP/WTA approval.
            {'\n\n'}
            e) If through the withdrawal of the number 1 player or the numbers 1 and 2
            players between the deadline (8 November 2022) and 10:00 am local time in
            Sydney, the day prior to the start of competition, a team may be withdrawn
            and replaced by an alternate team if they do not have at least one member of
            the team ranked 250 or better in singles
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>8) Alternate Team Selection</Text>
            {'\n\n'}
            a) The Alternate Team will be the first team out of the final selection.
            {'\n\n'}
            b) If needed, the individual players may be granted a release from any other
            ATP/WTA Tour Qualifying event they are entered in during the period of the
            United Cup Competition, pending ATP/WTA approval, or from any ATP Challenger Tour event.
            {'\n\n'}
            c) The Alternate Team may be selected for participation until 10:00 am local time
            in Sydney, the day prior to the start of competition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>9) Withdrawals after Start of the Competition</Text>
            {'\n\n'}
            a) Any team that through withdrawals of team members has only two (2) players
            remaining may continue in the competition as long as both players have, at a
            minimum, one player with an ATP/WTA Ranking and one player with an ATP/
            WTA Doubles Ranking, unless approved by ATP/WTA. These two players
            must play singles and be available for the mixed doubles.
            {'\n\n'}
            b) If a team has only one (1) eligible ATP or WTA player, loses by Walkover and
            no matches will be played, unless if approved by the Steering Committee the
            team may remain in competition and the matches for the missing player are
            lost by Walkover. No points are awarded for Walkovers.
            {'\n\n'}
            c) A team may add an alternate player after the competition has begun as long
            as the player is not violating ATP/WTA rules for “No Play after Withdrawal” or
            “One Tournament per Week”, or as approved by ATP/WTA. In no case may
            a player compete in two events offering ATP/WTA Ranking points which are
            held in the same ranking week.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>10) Seeding</Text>
            Seeding for the event will be based off the combined regular ranking (no protected ranking/special ranking) of the top ATP and top WTA ranked player regardless
            of their qualification into the event. As per the entry order priority rule, where a
            combined ranking is equal between two teams, the team with the highest ranked
            singles player (ATP or WTA) will become the higher seed. If still equal, the team
            with the highest ranked second singles player will be the higher seed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D. Competition Format</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Host Cities</Text>
            {'\n\n'}
            Sydney, Brisbane and Perth will host Countries for the Group Stages, and Sydney
            will host the Semi Finals and Final.
            {'\n\n'}
            At the Official Draw, Sydney, Brisbane and Perth will be drawn as host of one of 3
            combinations of seeds –
            {'\n\n'}
            • #1 (Group A) and #6 (Group F)
            {'\n\n'}
            • #2 (Group B) and #5 (Group E)
            {'\n\n'}
            • #3 (Group C) and #4 (Group D)
            {'\n\n'}
            For 2023 Australia will compete in Sydney, so the Groups competing in Sydney will
            be determined by where Australia is drawn.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>1) Round Robin – The Groups</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>The Draw-Teams 1-18</Text>
            {'\n\n'}
            a) The official draw for the placement of teams 1-18 shall take place, on Thursday 10 November 2022, following the 8 November 2022 deadline.
            {'\n\n'}
            b) The teams shall be positioned from 1 to 18 in accordance with the best combined ATP/WTA Ranking (Singles) as of 7 November 2022, of the number 1
            players of each team accepted at the 8 November 2022 deadline. Two team
            positions 1 ATP Qualified position and 1 Combined position will be reserved.
            The final two remaining entrants to be admitted to the competition on Monday
            21 November based on the November 21 rankings.
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
            <Text style={RuleStyles.underlineTextStyle}>Group A</Text>
            #1 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <Text style={RuleStyles.underlineTextStyle}>Group B</Text>
            #2 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <Text style={RuleStyles.underlineTextStyle}>Group C</Text>
            #3 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition.
            {'\n\n'}
            <Text style={RuleStyles.underlineTextStyle}>Group D</Text>
            #4 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <Text style={RuleStyles.underlineTextStyle}>Group E</Text>
            #5 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <Text style={RuleStyles.underlineTextStyle}>Group F</Text>
            #6 seeded country, plus one randomly selected team from each of the following
            bands –
            {'\n\n'}
            • Seeded countries 7 – 12
            {'\n\n'}
            • Seeded countries 13 – 18 inclusive of the final 2 countries to be included in
            the competition
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>2) Daily Order of Play - The Tie</Text>
            {'\n\n'}
            a) A tie consists of four (4) singles matches and one (1) mixed doubles match.
            {'\n\n'}
            b) Each team Captain shall submit to the ATP/WTA Supervisor, in writing, the
            name of the four (4) singles players and the mixed doubles team selected to
            compete in the Tie. The singles players shall be the top two (2) ranked ATP/
            WTA players (including protected ranking/special ranking) as of the date of
            the entry deadline unless there is a medically supported substitution.
            {'\n\n'}
            c) The deadline to submit the names of the competing players (singles/doubles)
            is 3:00pm local time, the day prior to the scheduled Tie.
            {'\n\n'}
            d) For each Tie, the highest-positioned (hereafter, number ones) singles players
            named from each team shall compete against each other and the second
            positioned (hereafter, number twos) singles players named from each team
            shall compete against each other. The order of positions in each team shall
            be based upon the most recent ATP/WTA Ranking as of the Monday prior to
            the start of the competition. The order of matches shall be as follows played
            over two (2) days unless otherwise decided by the Steering Committee:
            {'\n\n'}
            i) Number 2 ATP/WTA Singles followed by
            {'\n\n'}
            ii) Number 1 ATP/WTA Singles followed by
            {'\n\n'}
            iii) Number 1 ATP/WTA Singles followed by
            {'\n\n'}
            iv) Number 2 ATP/WTA Singles followed by
            {'\n\n'}
            v) Mixed Doubles
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Note:</Text> “Not Before” times may be assigned to the Number 1 singles match
            and the Doubles match as determined by the organizers in consultation with
            the ATP Supervisor.
            {'\n\n'}
            e) Upon the completion of the mixed doubles match, the winner of the tie shall
            be the team that wins at least three (3) of the five (5) matches.
            {'\n\n'}
            f) The mixed doubles match must be played regardless of the results of the two
            singles matches. *
            *For the Semi-Finals & Finals, if the tie is decided following the singles matches, the mixed doubles match will not be played (unless mutually agreed by
            both Countries), and the money will be split evenly amongst the members of
            both teams.
            {'\n\n'}
            </Text>
            <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading2}>3) Format and Competition </Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Groups</Text>
            {'\n\n'}
            There will be six Groups comprising of three countries in each group. Each
            city will host two groups (six countries) for the Group stages, which will consist of round robin ties where each country will play both other countries in
            their group.
            {'\n\n'}
            Group winners will advance to the City Final match, playing off for one of 3
            guaranteed Semi-Final spots against the winner of the other group from that
            host city. The remaining Semi Final spot will be awarded to the best performing team throughout the entire competition, from the 3 City Final runners-up.
            <Text style={RuleStyles.SubHeading2}>4) Determination of Group Winners</Text>
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
            Comment: 11-1 win-loss beats 11-0 win-loss. A 5-7 win-loss beats 5-0
            record
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
            <Text style={RuleStyles.SubHeading3}>Notes: </Text>In all tie-break situations, the following shall apply.
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
            • Any team that withdraws from any round robin tie after the first-round robin tie
            shall not be eligible for the City Finals.
            {'\n\n'}
            • The Match Tie-Break (doubles) counts as a set won and for games won
            counts as 1-0.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>5) City Finals</Text>
            {'\n\n'}
            Group winners will advance to the City Final match, playing off for one of 3 guaranteed Semi-Final spots against the winner of the other group from that hostcity. The remaining Semi Final spot will be awarded to the best performing team
            throughout the entire competition, from the 3 City Final runners-up.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>6) Determination of Best Runner up from City Finals</Text>
            {'\n\n'}
            a) Number of ties won
            {'\n\n'}
            b) Number of Ties Played
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Comment:</Text> 2-1 win-loss beats 2-0 win-loss. A 1-2 win-loss beats a 1-1 or 1-0
            record. A team winning by walkover shall have the tie count in its results as a
            tie played. The team causing the walkover shall not have the tie counted as a
            tie played.
            {'\n\n'}
            c) In a tie between three (3) teams, the following shall apply:
            {'\n\n'}
            i) If City Finals Runners UP have the same number of wins, then the team
            having played fewer total matches (singles & mixed doubles) will be eliminated and, if still tied then,
            Comment: 11-1 win-loss beats 11-0 win-loss. A 5-7 win-loss beats 5-0
            record
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
            <Text style={RuleStyles.SubHeading3}>Notes:</Text> In all tie-break situations, the following shall apply.
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
            • Any team that withdraws from the City Finals shall not be eligible for Semi
            Finals.
            {'\n\n'}
            • The Match Tie-Break (doubles) counts as a set won and for games won
            counts as 1-0
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>6) Finals in Sydney </Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>a) Semi-Finals</Text>
            {'\n\n'}
            The three winners of the City Finals will qualify for the Semi-Finals in Sydney.
            The remaining Semi-Final spot will be awarded to the best performing team
            throughout the entire competition, from the 3 losing teams out of the City
            Finals.
            {'\n\n'}
            • S/Final 1 – WINNER of Groups B/E v WINNER Groups C/D
            {'\n\n'}
            • S/Final 2 – WINNER Groups A/F v Best Runner Up from Group Winners
            Matches*
            {'\n\n'}
            *Should the best Runner Up from the City Finals Matches result in a City Final
            rematch in the Semi Finals, the match-ups will swap to award the highest seeded
            country with the best runner up.
            {'\n\n'}
            b) The Champion Team shall be decided by the result of a straight knock-out
            competition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. Protected Ranking/Special Ranking*</Text>
            {'\n\n'}
            The following applies to any player with a Protected Ranking (“PR”)/Special Ranking
            that has been used in any manner during the competition or to qualify a country for
            entry.
            {'\n\n'}
            1) The PR must be valid at the entry deadline in which the player/country qualifies.
            {'\n\n'}
            2) If valid at the entry deadline for qualification it shall remain valid throughout the
            competition.
            {'\n\n'}
            3) Can be used for team entry.
            {'\n\n'}
            4) Will count for position in the singles lineup.
            {'\n\n'}
            5) Will count for Ranking points.
            {'\n\n'}
            6) Will not count for team seeding.
            {'\n\n'}
            7) For WTA players - Will count as Special Ranking used for the player(s).
            {'\n\n'}
            8) For ATP players - Will not count as Protected Ranking used for the player(s).
            {'\n\n'}
            9) May only be used at one (1) United Cup event
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>F. Schedule of Play</Text>
            {'\n\n'}
            The following is the schedule of play unless otherwise determined by the Tournament
            Committee and Supervisor:
            {'\n\n'}
            1) The eighteen (18) teams shall play Round Robin matches over the first six days
            to determine the six (6) winners of the Round Robin groups qualifying for the City
            Finals.
            {'\n\n'}
            2) Following the draw, the daily ties (country v country) for the round robin sessions
            will be scheduled and announced.
            {'\n\n'}
            3) All players and Captains must be available for play on the first day of the event.
            {'\n\n'}
            4) Once the Captain has named the four (4) players competing in the singles, the
            pairings for the Tie shall be made automatic as determined by the ATP/WTA
            Ranking (including Protected Ranking/Special Ranking) on the Monday prior to
            the start of the competition.
            {'\n\n'}
            5) Protected Ranking/Special Ranking (singles) will be used for a player’s position
            on the team but cannot be used for team seeding.
            {'\n\n'}
            6) The City Finals final shall be held on the 7th day (Wednesday) of the Tournament.
            {'\n\n'}
            7) A travel day will take place on the 8th day (Thursday) of the Tournament
            {'\n\n'}
            8) The Semi-Finals will be held on the 9th and 10th day of the tournament – each
            Tie split over two days.
            {'\n\n'}
            9) The Final will be held on the 11th day of the tournament.
            {'\n\n'}
            10) The ATP/WTA Supervisors reserve the right to change the schedule of play, alter
            starting times and make other changes deemed necessary for the smooth running of the competitio
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>G.Team Captain / Team Coache</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Designation of Captain</Text>
            {'\n\n'}
            a) The number one player on each team (the highest ATP/WTA singles ranked
            player) is by default the Team Captain, however each team can elect another player or person as Team Captain, provided such person is of the same
            nationality. The No 1 player has the overall authority on the position of team
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
            2022.
            {'\n\n'}
            c) In the event the Captain is not on-site or not available, the number one (1)
            player shall assume the role of Captain or designate a non-playing team
            member as Captain.
            {'\n\n'}
            d) The Captain must be on-site for the duration of that team’s participation in the
            competition. The Captain shall be subject to all provisions of the Player Code
            of Conduct, including those pertaining to Dress and Equipment.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Duties of the Captain.</Text> The duties of the Captain are as follows:
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
            <Text style={RuleStyles.SubHeading3}>3) Individual Coaches*</Text>
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
            <Text style={RuleStyles.SubHeading3}>4) Duties of the Coach. </Text>The duties of the coach are as follows:
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
            <Text style={RuleStyles.SubHeading3}>5) Player Designations</Text>
            {'\n\n'}
            a) Each team Captain shall submit to the ATP/WTA Supervisor, in writing, the
            name of the four (4) singles players and the mixed doubles team selected
            to compete in the Tie. The singles players shall be the top two (2) ATP/WTA
            ranked players (including protected ranking/special ranking) as of the date
            of the entry deadline, unless there is a medically supported substitution, or
            otherwise approved by the Supervisor.
            {'\n\n'}
            b) The four (4) singles players, named from each country for the Tie, shall be
            designated as players 1 and player 2 (ATP/WTA), based upon the most recent ATP/WTA Ranking (including Protected Ranking/Special Ranking) as of
            the Monday prior to the start of the competition. Change may be allowed for
            medical conditions or for unforeseen circumstances approved by the ATP/
            WTA Supervisor.
            {'\n\n'}
            c) The team Captains must give in writing the names of the four (4) singles players and the mixed doubles team to the Supervisor no later than 3:00pm on
            the day prior to the scheduled Tie. The mixed doubles team may be chosen
            from any ATP/WTA players named to the team.
            For the Tournament Final, the team Captain must give in writing the names
            of the four (4) singles players and the mixed doubles team to the Supervisor
            within fifteen minutes after the completion of the second tie determining the
            teams for the upcoming Final.
            {'\n\n'}
            d) Following the conclusion of the fourth singles match, any change in the mixed
            doubles team must be communicated to the ATP/WTA Supervisor, in writing,
            within 10 minutes of the conclusion of the fourth singles match. The Supervisors shall notify the opposing Captain and all other relevant staff once both
            Captains have submitted their doubles teams.
            {'\n\n'}
            e) There shall be a maximum of twenty-five (25) minutes between the end of the
            last singles match and the start of the mixed doubles match if one or more of
            the doubles players competed in the last singles match. If none of the players
            designated for the mixed doubles has competed in the last singles match,
            the mixed doubles shall be scheduled as “followed by” with the exact time
            determined by the Supervisor. Fifteen minutes is recommended following the
            conclusion of the last singles match, however mixed doubles players who
            competed in the last singles match can elect to start after fifteen (15) minutes
            or after twenty-five (25) minutes.
            {'\n\n'}
            f) The Captain must name the mixed doubles team one hour before the start of
            the day’s play if his team has no singles matches on that day (rain or other
            cause of delay).
            {'\n\n'}
            g) The team Captain may, whenever necessary, replace a singles player in the
            case of illness, injury or unforeseen circumstances approved by the ATP/WTA
            Supervisor.
            {'\n\n'}
            i) After the Order of Play is released and up to the start of the first match.
            {'\n\n'}
            • Order of Play will be adjusted based upon the new team order, if necessary.
            {'\n\n'}
            ii) After the start of the first singles match.
            {'\n\n'}
            • A player who is substituted for a player named to the second match
            cannot change the team order. For example, a player substituted for the number 2 player cannot have a better ranking than the player
            competing at number 1 for that team.
            {'\n\n'}
            iii) A player who withdraws from the singles shall be eligible for mixed doubles on that same day.
            {'\n\n'}
            iv) In the event of match changes, the Supervisor may allow reasonable time
            adjustments in the schedule.
            {'\n\n'}
            h) In the event of a conduct default, the Supervisor may decide to remove the
            offending player(s) for the remainder of the tie or event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>H. Medical</Text>
            {'/n'}
            <Text style={RuleStyles.SubHeading3}>1) Tournament Doctor</Text>
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
            <Text style={RuleStyles.SubHeading2}>I. Code of Conduct</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Players.</Text> All players are subject to the ATP/WTA Code of Conduct.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Dress and Equipment.</Text>
            {'\n\n'}
            i) All team members must dress in similar attire that identifies them with the
            country they are representing.
            {'\n\n'}
            ii) Team attire must be submitted to and approved by ATP/WTA in advance
            of the event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Team Captain / Coaches.</Text> All Team Captains and Coaches are subject to the provisions specified in the ATP/WTA Code of Conduct regarding Dress and Equipment and conduct on-site during the event.
            {'\n\n'}
            During matches, official functions and media appearances, all Team Captains
            shall wear tournament provided unbranded clothing (polo shirt / jacket/ hat) with
            the United Cup logo provided by the event whilst sat on the team bench and
            performing all captains’ duties both on and off court; for example but not limited to
            official functions, walk-ons, ceremonies, photo opportunities, media appearances
            etc.
            {'\n\n'}
            Captains with ongoing personal clothing sponsorship, will be permitted to wear
            a different shirt to the unbranded United Cup polo shirt, provided it is in the team
            colour or similar and is approved prior to the event.
            {'\n\n'}
            Captains wearing a personal shirt they will still be expected to wear the United
            Cup unbranded jacket for official functions, walk-ons, ceremonies, photo opportunities, media appearances etc.
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
            <Text style={RuleStyles.SubHeading3}>3) Fines.</Text> Any fines issued during the Tie will be levied against the individual.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>J. Prize Money (All figures in U.S. dollars)</Text>
            {'\n\n'}
            Total Prize Money: USD$15,000,000 (USD$7,500,000 each for ATP and WTA)
            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_1.png'}}/>
          <Text style={RuleStyles.Description}>
            *If the Tie is decided following the singles matches, the doubles match may not be
            played, and the money will be split evenly amongst the members of both teams.
            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_2.png'}}/>
          <Text style={RuleStyles.Description}>
            All players on the team (whether the player plays a match or not) earn the same
            amount for a team win.
            {'\n\n'}
            *Entry order as of 8 November 2022
            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_3.png'}}/>
          <Text>{'\n\n'}</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_4.png'}}/>
          <Text>{'\n\n'}</Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_5.png'}}/>
          <Text>{'\n\n'}</Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_6.png'}}/>
          <Text>{'\n\n'}</Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_7.png'}}/>
          <Text>{'\n\n'}</Text>

          <Text style={RuleStyles.Description}>
            Ranking as of 7 November 2022
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Participation Fee Notes</Text>
            {'\n\n'}
            • Players may only receive a participation fee in one category. Players will receive
            a fee for singles or mixed doubles, whichever was used for their entry.
            {'\n\n'}
            • Participation fee for any team substitutions following the 8 November 2022 entry
            order shall be based upon the 7 November team order and player ranking.
            {'\n\n'}
            • A number 1 and number 2 singles player will receive 100% of the participation
            fee if they compete in all Group stage singles matches. Pro-Rata schedule for
            players number 1 and number 2 competing in less than all Group stage singles
            matches is listed below including Pro-Rata schedule for mixed doubles matches
            participated in.
            {'\n\n'}
            • Players number 3-5 will receive 100% participation fee regardless of whether
            they compete in any of the Group state matches.
            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_8.png'}}/>

          <Text>{'\n\n'}</Text>

          <Text style={RuleStyles.Description}>
            • Max of 30% per tie
            {'/n'}
            • Playing Singles and Doubles in same tie = 15%
            {'/n'}
            • Applies to Group stage matches and ties only
            {'/n'}
            • This applies to all #1 & #2 players including players competing with Protected
            Ranking (PR)/Special Ranking
            {'/n'}
            • Promotional % = minimum participation fee
            {'/n'}
            *15 % maximum per all mixed doubles matches, regardless of if a player plays 1 or
            2 mixed doubles during the group stage. Players competing in singles and mixed
            doubles in a Tie will receive the Promotional fee plus 30 % per the singles match. A
            #1 & #2 Player only playing 2 mixed doubles during the group stage will receive 40 %
            Promotional + 15 % total for both mixed doubles matches (55 % overall). Examples
            in the table below.
            {'\n\n'}

            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_9.png'}}/>
          <Text>{'\n\n'}</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_10.png'}}/>
          <Text>{'\n\n'}</Text>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading2}>K. ATP/WTA Ranking Points</Text>
            <Text style={RuleStyles.SubHeading3}>Singles
              {'\n\n'}
            </Text>
            </Text>
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule49_11.png'}}/>
            <Text>{'\n\n'}</Text>
            <Text style={RuleStyles.Description}>
              <Text style={RuleStyles.SubHeading2}>L. Walkovers</Text>
              1) No points are awarded if no matches of the tie are played
              {'\n\n'}
              2) An individual match in the tie is won by a Walkover, points are awarded based
              upon the lowest ranking category (251+).
              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>M. Media / STARS Obligations</Text>
              {'\n\n'}
              1) All teams are requested to arrive in Australia on time for any pre-event media /
              STARS commitments, to be arranged.
              {'\n\n'}
              2) Normal post-match interview protocol will be followed with the exception being
              a player competing in the 4th singles match who is also competing in the mixed
              doubles may postpone his media commitment until after the mixed doubles
              match. However, the ATP/WTA PR Manager may approach the player following the singles match to obtain a few quotes to give to media, if requested.
              N.Jurisdiction Governing the competition
              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>N. Jurisdiction Governing the competition</Text>
              {'\n\n'}
              1) The Competition is sanctioned and recognized by ATP Tour, Inc. and WTA Tour.
              {'\n\n'}
              2) All players who enter and compete in the competition agree to be subject to the
              Rules and Regulations of the ATP/WTA, including, but not limited to, the Code
              of Conduct, the Tennis Anti-Corruption Program and the Tennis Anti-Doping Program.
              {'\n\n'}
              3) The ATP/WTA Supervisor, in consultation with the SVP, Rules & Competition and
              WTA Senior Vice President Competition & On-Site Operations, shall determine
              and resolve all questions not considered in these Rules and Regulations.
              {'\n\n'}            
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule48', next: 'Rule50', nav: navigation }} />
    </>
  );
}


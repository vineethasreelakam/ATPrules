import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule50({ navigation }) {
  return (
    <>
    <View style={RuleStyles.Layout}>
      <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
        <HighlightText style={RuleStyles.MainHeading}>IV. WORLD CHAMPIONSHIPS</HighlightText>
        <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
        <ZoomText>
        <HighlightText style={RuleStyles.Description}>         
            <HighlightText style={RuleStyles.SubHeading1}>4.04 Next Gen ATP Finals</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Competition Format</HighlightText>
            {'\n\n'}
            The tournament shall be a round robin format with eight (8) players. There shall be 
            two (2) groups of four (4) players each with eight (8) seeds to be determined by their 
            position on the most recent Pepperstone ATP Singles Rankings. All matches shall be 
            the best of five (5) tie-break sets. Each set shall be the first to four (4) games with 
            a margin of two (2) with a tie-break played at three (3) games all. Games shall be 
            decided using the No-Ad scoring method. The round robin shall determine the four 
            (4) players for the semi-finals with the format thereafter being a single elimination 
            competition.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Entries</HighlightText>
            {'\n\n'}            
            <HighlightText style={RuleStyles.SubHeading3}>1) Age Eligibility. </HighlightText>All players must be 21 years or under throughout the 2024 calendar yea
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) Selection List.</HighlightText> The selection list for the event shall be:
            {'\n\n'}
            a) The top seven (7) players in the Pepperstone ATP Race to Jeddah standings
            as of Monday (20 November) following the Nitto ATP Finals event; followed
            by
            {'\n\n'}
            b) One (1) Wild Card designated by the ATP. The Wild 
            Card selection must meet the age restriction as specified in B. 1) above. 
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3) Direct Acceptances. </HighlightText>The top seven (7) players in the selection list shall 
            qualify for the event as direct acceptances. Participation is mandatory, and all 
            qualified players shall be entered. The exception to this is that any player(s) 
            who are qualified for the Nitto ATP Finals as a Direct Acceptance or as a designated Alternate are excluded from mandatory participation. All direct acceptances must be at the tournament site to attend the official pre-tournament 
            media events scheduled Sunday night and Monday and must be available for 
            play through the completion of the round robin competition and the knock-out 
            competition if eligible.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>4) Withdrawal.</HighlightText> Any withdrawal, before the official pre-tournament media conference starts, shall be replaced by the next highest positioned player on the selection list, who shall be qualified as a direct acceptance.           
           
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>5) Alternate(s).</HighlightText>
            {'\n\n'}
            a) Alternate(s) (who are not a direct acceptance at the time of the official 
            pre-tournament media conference) shall be designated as determined by 
            ATP. The alternate shall replace any player who subsequently withdraws. 
            The alternate must appear at the official pre-tournament media conference 
            and remain available through the start of the last scheduled round robin 
            match. Participation of the Alternate is not mandatory.
            {'\n\n'}
            b) Additional alternates may be selected by ATP to fill the draw, based upon 
            terms satisfactory to ATP. Participation of such additional alternates is not 
            mandatory. 
            {'\n\n'}
            c) The alternate(s) is eligible to play in the single elimination competition and to 
            receive prize money if he qualifies.
            {'\n\n'}
            d) If the alternate(s) does not play in the draw, then a fee shall be paid to the 
            alternate(s). If the alternate(s) is inserted for the second or third round robin 
            match, then he shall receive the alternate fee plus any prize money won. If 
            the alternate(s) replaces a player that does not compete in his first round robin match, the alternate(s) becomes a direct acceptance and does not receive 
            the alternate fee.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>C. Appearance at Event</HighlightText>
            {'\n\n'}
            All direct acceptances and the alternate must appear at the site of the event(s) as 
            determined by ATP and participate in the pre-tournament media events scheduled on 
            Sunday night and Monday.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>D.Failure to Participate</HighlightText>
            {'\n\n'}
            If a player, qualified for the Next Gen ATP Finals as a direct acceptance fails or refuses to participate in this event, except for bona fide injury or other reason which 
            constitutes good cause, the player shall receive a fine in the amount of $25,000
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>E. Order of Play</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Round Robin</HighlightText> 
            {'\n\n'}
            1) The field shall be divided into two (2) groups of four (4) players each. The 
            top-seeded player shall be placed in Group “A” and the second-seeded player 
            shall be placed in Group “B”. Players seeded three (3) and four (4), five (5) and six 
            (6), and seven (7) and eight (8), shall then be drawn in pairs with the first drawn 
            placed into Group “A.”
            {'\n\n'}
            2) Each player shall play every other player in his group to determine the top two (2) 
            players in each group.
            {'\n\n'}
            3) The final standings of each group shall be determined by the first of the following 
            methods that apply:
            {'\n\n'}
            a) Greatest number of wins.
            {'\n\n'}
            b) Greatest number of matches played.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment:</HighlightText> 2-1 won-loss record beats a 2-0 won-loss record; a 1-2 record 
            beats a 1-0 record.
            {'\n\n'}
            c) Head-to-head results if only two (2) players are tied.
            {'\n\n'}
            d) If three (3) players are tied, then:
            {'\n\n'}
            i) If three (3) players each have one (1) win, a player having played less 
            than all three (3) matches is automatically eliminated and the player advancing to the single elimination competition is the winner of the matchup of the two (2) players tied with 1-2 records; or
            {'\n\n'}
            ii) Highest percentage of sets won; or
            {'\n\n'}
            iii) Highest percentage of games won; or
            {'\n\n'}
            iv) The player positions on the most recent Pepperstone ATP Rankings.
            {'\n\n'}
            v) If (i), (ii), (iii) or (iv) produce one (1) superior player (first place), or one 
            (1) inferior player (third place), and the two (2) remaining players are tied, 
            the tie between those two (2) players shall be broken by head-to-head 
            record.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 1:</HighlightText> 1 player has 3 wins and the other 3 players have 1 win. Of 
            the 3 players with 1 win, 1 player has only played in 2 matches while the 
            other 2 players have played 3 matches. The player who has only played 2 
            matches is eliminated and then the 2 remaining players revert to head-to-head results with the winner of their match advancing to the semi-finals.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 2:</HighlightText>: 1 player has 3 wins and the other 3 players have 1 win and 
            they all have played 3 matches. The tie-break for % of sets won has 1 
            player with a better % than the other two. This player advances to the 
            semi-final round.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 3:</HighlightText> : 3 players have 2 wins and the other player has 0 wins. 
            The player with 0 wins is eliminated. Of the 3 players with 2 wins, they are ordered by their % of sets won. This produces a 1, 2 & 3 order and 
            the players finishing 1 and 2 move to the semi-final round and the player 
            finishing 3 in % of sets won is eliminated. The player with the best % of 
            sets won is the winner of the group.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 4:</HighlightText> : 3 players have 2 wins and the other player has 0 wins. The 
            player with 0 wins is eliminated. Of the 3 players with 2 wins, 1 player’s 
            sets won-loss is 5-2 for 71.43%; the other 2 players both have a 4-3 record in sets for 57.14%. In this case there is 1 superior player (71.43%) 
            and the remaining 2 players are tied; it now reverts to the head to head 
            result of the 2 remaining players with the winning player advancing as 
            group runner-up.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 5:</HighlightText>  3 players have 2 wins and the other player has 0 wins. The 
            player with 0 wins is eliminated. Of the 3 players with 2 wins, 2 have set 
            won-loss records of 5-3 (62.5%) while the other player is 4-3 (57.14%). 
            In this case, we have 1 inferior player (57.14%) and he is eliminated. The 
            remaining two players both advance to the semi-finals with the winner of 
            their head-to-head match advancing as the group winner.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment 6:</HighlightText> 3 players have 2 wins and the other player has 0 wins. The 
            player with 0 wins is eliminated. Of the 3 players with 2 wins, all have 
            played 3 matches and all 3 have set won-loss records of 5-4 (55.56%). 
            In this case, we move to % of games won. The % of games won breaks 
            down like this: 44-40 for 52.38%, 45-43 for 51.14% and 44-43 for 50.57%. 
            This produces a 1, 2 and 3 order of the group and the number 1 player in 
            % of games won is the group winner while the player finishing 2nd in % 
            of games won advances to the semi-finals as the group runner-up. The 
            player with the 3rd best % of games won is eliminated.
            {'\n\n'}
            e) In applying the tie-breaking procedures, a conduct default or retirement shall 
            count as a straight-set win or loss. However, games won or lost in matches 
            with the defaulting or retiring player shall not be counted in the percentage 
            of games won. A player who retires during the round robin because of illness 
            or injury may continue in the competition if it is approved by the tournament 
            Doctor.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Comment: </HighlightText>This prevents a scenario where a player knows he only needs to 
            win 1 set to qualify for the semi-finals from retiring once he has won a set.
            {'\n\n'}
            f) Any player who is defaulted pursuant to the ATP Code during the round robin 
            competition shall be defaulted from all other matches in the Championship 
            and ATP default provisions shall apply, except for the following circumstances:
            {'\n\n'}
            i) The loss of physical condition; or
            {'\n\n'}
            ii) Dress and Equipment.
            {'\n\n'}
            g) Any player who withdraws from any round robin match after the first round 
            shall not be eligible for the single elimination competition            
            {'\n\n'}
           
            <HighlightText style={RuleStyles.SubHeading2}>F. Single Elimination Competition</HighlightText>
            {'\n\n'}
            Final standings at the end of the tournament shall determine the prize-money and 
            Pepperstone ATP Doubles Rankings points earned.
            {'\n\n'}
            1) The winner of each group shall be placed in separate semi-final brackets. The 
            runner-up of each group shall be placed in the semi-final bracket with the winner 
            of the opposite group.
            {'\n\n'}
            2) The event shall be completed with a single elimination competition for the semifinals and final.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>G.Prize Money</HighlightText>
            {'\n\n'}Final standings at the end of the tournament shall determine the prize money earned
             {'\n\n'}             
        </HighlightText>
        </ZoomText>
  </ScrollView>
  </View>
  <RuleNavigationButtons props={{ prev: 'Rule49', next: 'Rule51', nav: navigation }} />
</>
  );
}


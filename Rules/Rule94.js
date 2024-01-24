import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule94({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.04 Entry/Withdrawal Method</Text>
                        {'\n\n'}
                        A player may enter a Grand Slam, ATP Tour or ATP Challenger Tour tournament
                        through a written entry form or other alternatives available to ATP player members.
                        For entry into an ATP Tour or ATP Challenger Tour main draw or qualifying singles
                        and doubles, the player must be an ATP Player Member or an ATP Registered Player.
                        Wild Cards are exempt from this provision.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>ATP Tour 250 Main Draw Singles Late Entry (LE) Spot: </Text>
                        A Late Entry spot is a reserved position (one) in each ATP 250 tournament. Only players with a ranking better than the original tournament entry list cut are allowed to enter. The entry deadline for this spot is Thursday, 10 AM Eastern Time, USA prior to the Monday of the tournament week. At this deadline, the position will be filled by the highest ranked player who entered using the Pepperstone ATP Rankings (Singles) used for tournament entries twenty-eight (28) days prior to the Monday of the tournament week. If there are no entries for the LE spot by the deadline, then the position in the main draw goes to the next eligible player on the entry list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>ATP Next Gen Programme </Text>
                        Players born in 2004 or later will be eligible for the Programme in 2024. Players who begin the season aged 20&U and turn 21 in 2024 will not be considered for the Programme. Starting from 01 January 2024, playing opportunities for players aged 20 & under who break into the Top 250 & 350 of the Pepperstone ATP Rankings will be reserved as follows:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• Players who break into the Top 350 and are aged 20 & under will be eligible to receive up to 8 CH 100 & 125 Opportunities in a calendar year. </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• Players who break into the Top 250 and are aged 20 & under will be eligible to receive up to 1 ATP 250 Main Draw Singles & 2 ATP 250 Qualifying opportunities each week with three ATP level events on the calendar in addition to their Challenger opportunities.</Text>
                        {'\n\n'}
                        Draw spots will be reserved and will drop to the next highest-ranked player should they not be utilized
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Junior Accelerator Spots (JAS) </Text>
                        {'\n\n'}
                        Junior Accelerator Spots are awarded at the Challenger level to the Junior players
                        who are ranked 1-20 in the year-end ITF Junior Rankings, Singles Junior Grand Slam
                        Champions, and Finalists.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• Challengers 50 and 75</Text> - Junior Accelerator Spot can be awarded to up to two (2)
                        players in every Main Draw (eligible Junior players ranked 1-10 and Junior Grand
                        Slam Champions) and to up to two (2) players in every Qualifying (eligible Junior
                        players ranked 11-20 and Singles Junior Grand Slam Finalists) of Challenger 50 and
                        75 tournaments.
                        {'\n\n'}
                        Each Junior player ranked 1-10 and Junior Grand Slam Champion shall be eligible
                        for up to eight (8) total Main Draw opportunities, with a maximum of four (4) uses per
                        six (6) months. Each player ranked 11-20 and Junior Grand Slam Finalist shall be
                        eligible for up to eight (8) total Qualifying opportunities, with a maximum of four (4)
                        uses per six (6) months.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• All Challengers </Text>– Players who are eligible for the Challenger Junior Accelerator
                        Spots (i.e. ranked 1-20) can be promoted via Promotion System from Qualifying to
                        Main Draw at any Challenger tournament(i.e. up to 2 spots reserved per tournament)
                        if they are directly accepted into the Qualifying with their ATP Ranking at the entry
                        deadline, subject to availability.
                        {'\n\n'}
                        Any Junior Accelerator Spot or Promotions from Qualifying to Main draw will be determined at the relevant Challenger Main Draw or Qualifying Entry Deadline.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>College Accelerator Spots (CAS)</Text>
                        College Accelerator Spots are awarded at the Challenger level to the College players who are ranked 1-20 in the season-end Intercollegiate Tennis Association (ITA) Collegiate Tennis Rankings, as well as individual NCAA Division I Tennis Championships quarterfinalists.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• Challengers 50 and 75 </Text>- College Accelerator Spots can be awarded to up to two (2) players in every Main Draw (eligible College players ranked 1-10 and individual NCAA DI Champion) and to up to two (2) players in every Qualifying (eligible College players ranked 11-20 and individual NCAA DI quarterfinalists) of Challenger 50 and 75 tournaments.
                        {'\n\n'}
                        Players who have finished College education – defined as any player who has obtained a College degree or who has stopped college education for the pursuit of full time competition on the professional tennis circuit – shall be eligible for the following
                        opportunities:
                        {'\n\n'}
                        i) Players ranked 1-10 in the season-end singles ITA Collegiate Tennis Ranking and
                        NCAA Division I Champion shall be eligible for up to eight (8) Accelerator Spots
                        over twelve (12) months at Challenger Main Draw, with a maximum of four (4)
                        uses per six (6) months, starting July 1, 2023.
                        {'\n\n'}
                        ii) Players ranked 11-20 in the season-end singles ITA Collegiate Tennis Ranking
                        and NCAA Division I quarter-finalists shall be eligible for up to eight (8) Accelerator Spots over twelve (12) months at Challenger Tour Qualifying, with a maximum
                        of four (4) uses per six (6) months, starting July 1, 2023.
                        {'\n\n'}
                        Players who remain in College education – defined as any player who is scheduled
                        to return to College in the following semester - shall be eligible for the following opportunities:
                        {'\n\n'}
                        i) Players ranked 1-10 in the season-end singles ITA Collegiate Tennis Ranking and
                        NCAA Division I Champion shall be eligible for up to six (6) Accelerator Spots at
                        Challenger Main Draw over six (6) months, starting July 1 2023, through to the
                        last week of Challenger events in the season.
                        {'\n\n'}
                        ii) Players ranked 11-20 in the season-end singles ITA Collegiate Tennis Ranking
                        and NCAA Division I quarter-finalists shall be eligible for up to six (6) Accelerator
                        Spots at Challenger Qualifying over six months, starting July 1, 2023, through to
                        the last week of Challenger events in December.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>• All Challengers – </Text>Players who are eligible for the Challenger College Accelerator
                        Spots (ranked 1-20) can be promoted via Promotion System from Qualifying to Main
                        Draw at any Challenger tournament (up to 2 spots reserved per tournament) if they
                        are directly accepted into the Qualifying with their ATP Ranking at the entry deadline,
                        subject to availability.
                        {'\n\n'}
                        Any College Accelerator Spot or Promotions from Qualifying to Main draw will be
                        determined at the relevant Challenger Main Draw or Qualifying Entry Deadline.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Main Draw - Singles</Text>
                        {'\n\n'}
                        1) No player shall be considered entered or withdrawn from an *ATP Tour Masters
                        1000, ATP Tour 500**, ATP Tour 250 or ATP Challenger Tour tournament unless
                        his written entry or written withdrawal is received on or before the entry or withdrawal deadline by a player relations staff member, ATP Supervisor or through the
                        PlayerZone. A player must have entered in order to be moved into the main draw
                        as a direct acceptance because of the withdrawals of other players. For each ATP
                        Tour Masters 1000 tournament, players with a Pepperstone ATP Rankings position that qualifies them as a direct acceptance or alternate, shall be automatically
                        entered by ATP.
                        {'\n\n'}
                        * For the mandatory ATP Tour Masters 1000 tournaments, this section is applicable
                        for withdrawals only as entries are automatic. If a withdrawal is made prior to the
                        Acceptance List being published, any player directly accepted as a result of that
                        withdrawal will be considered a Direct Acceptance once the list is published.
                        {'\n\n'}
                        ** Commitment players are automatically accepted into the main draw of all ATP
                        Tour 500 events in which they have entered in a proper manner.
                        {'\n\n'}
                        2) Once a player enters he is subject to all the withdrawal provisions.
                        {'\n\n'}
                        3) Withdrawals, retirements or defaults during an ATP Tour or ATP Challenger Tour
                        tournament must be made through the Supervisor.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Main Draw - Doubles</Text>
                        {'\n\n'}
                        1) Advance Entry – ATP Tour Only
                        {'\n\n'}
                        a) No team shall be considered entered or withdrawn from an ATP Tour tournament* unless their written entry or written withdrawal is received on or before
                        the entry or withdrawal deadline by a player relations staff member or ATP
                        Supervisor. A team must have entered in order to be moved into the main
                        draw as a direct acceptance because of the withdrawals of other players.
                        {'\n\n'}
                        b) Once a team enters they are subject to all the withdrawal provisions.
                        {'\n\n'}
                        *The top 13 teams from the final 2023 ATP Doubles Team Rankings
                        shall receive automatic Direct Acceptance into the first 5 Masters 1000 events
                        in the 2024 season (if not included as a Direct Acceptance on their own merit). To qualify for automatic acceptance a team must have competed as a
                        team in 11 ATP Tour or Grand Slam events during the 2023 season. A player
                        can only be eligible on one team.
                        {'\n\n'}
                        For each of the remaining four (4) Masters 1000 events, the top 13 teams in the Team Race at the advanced entry deadline for that event, shall
                        receive automatic Direct Acceptance into that Masters 1000 event (if not included as a Direct Acceptance on their own merit). A player can only be eligible on one team.
                        {'\n\n'}
                        To qualify for automatic acceptance into the first 5 Masters 1000 events a
                        team must have competed together as a team in each week of the 2024
                        season where both players were playing doubles in that week. The exception
                        would be when they were both involved in the singles of different events.
                        To qualify for automatic acceptance into the final 4 Masters 1000 events, a
                        team must compete together as a team in each week of the 2024 season
                        where both players were playing doubles in that week. The exception would
                        be when they were both involved in the singles of different events.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) On-Site Entry - ATP Tour - See 7.03 B. 1) c)</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>On-Site Entry - ATP Challenger Tour Tournaments</Text>
                        {'\n\n'}
                        a) No team shall be accepted for on-site entry into the doubles event unless one
                        player of the team personally signs the on-site entry list unless subsection d)
                        applies.
                        {'\n\n'}
                        b) If neither player of the team is able to sign the list then such team may enter
                        the doubles event by submitting a written entry to ATP or by personally contacting the Tour Manager or Supervisor at the tournament he wants to play.
                        {'\n\n'}
                        c) Written entries submitted by a player(s) who is not on-site and who has not
                        been able to talk to the Tour Manager or Supervisor, must be received by the
                        on-site Supervisor prior to the deadline.
                        {'\n\n'}
                        d) The Tour Manager or Supervisor may sign-in and enter doubles teams.
                        {'\n\n'}
                        e) Each member of a team wishing to enter the doubles event must be either an
                        ATP Player Member or an ATP Registered Player.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Emailed Doubles Entry</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> The Supervisor/Referee is sent a doubles entry via email.
                        The email was not seen by the Supervisor/Referee until after the
                        entry deadline. The date/time of the email show that it was received
                        prior to the deadline. Is this a valid entry?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. To be considered as a valid entry the official at the
                        site of the doubles event (Supervisor, Referee or Tour Manager)
                        must have actually viewed the email. The same decision would be
                        made on undelivered faxes or an entry left on voice mail.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Note:</Text> Proper procedure for any emailed or faxed entries would be
                        to ask for a confirmation from the person who the entry was sent.
                        Barring confirmation, you should make personal contact prior to the
                        entry deadline.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Qualifying </Text>
                        {'\n\n'}
                        Players may be entered in the main draw (singles or doubles) as qualifiers based on
                        their success in the respective qualifying competition.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Challenger.</Text> The ATP Challenger Alternate Sign-in shall begin no later than 4
                        p.m. and close at 6 p.m. local time on the day prior to the start of the qualifying
                        competition. There shall also be an Alternate sign-in on the day of first round
                        qualifying play, this deadline is one-half hour prior to the start of play on the day
                        of the qualifying competition.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Tour.</Text>
                        {'\n\n'}
                        a) Direct acceptances to ATP Tour qualifying are not required to sign-in.
                        {'\n\n'}
                        b) The ATP Tour Qualifying Alternate sign-in shall begin no later than 4 p.m.
                        and close at 6 p.m. local time on the night prior to the start of the qualifying
                        competition (Friday night for a qualifying commencing on Saturday).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Challenger & ATP Tour.</Text> There shall also be an Alternate sign-in on the day of
                        first round qualifying play, this deadline is one-half hour prior to the first scheduled
                        qualifying match. This is a new sign-in and any player who is on-site and with a
                        Pepperstone ATP Ranking (singles or doubles) is eligible to sign-in.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Can I Play Both?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player is playing a doubles match on the Friday night
                        before a Saturday start to Qualifying that will not finish before 9 p.m.
                        local time at the following week’s tournament. The next tournament
                        is 2-3 hours traveling time and because the doubles semi-finals is
                        scheduled for Saturday night, it is feasible for the player to drive
                        between the two locations so that he could compete in the qualifying
                        singles and still play the doubles semi-final should he win on Friday
                        night. Can he remain a direct acceptance?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. The Saturday night doubles match (which cannot
                        be a result of special scheduling) makes this possible for the player.
                        Appropriate penalties apply if the player does not appear for his
                        qualifying match or his doubles semi-final match, if he wins Friday
                        night.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Players Miss Sign-In</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> Players cannot be at the Lucky Loser/Alternate sign-in on
                        time because of circumstances beyond their control. If the Supervisor is satisfied that the players were not at fault, may he sign them
                        in?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D. Sign-in Protocol:</Text>
                        {'\n\n'}
                        All sign-ins (doubles, qualifying, alternates, lucky losers) must be done by phone
                        via text messaging. Each entry must be received and viewed by the on-site supervisor, or the designate listed on the official detail sheet, prior to the deadline.
                        The player is responsible for having his entry confirmed by the supervisor or the
                        designate listed on the official detail sheet.




                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule93', next: 'Rule95', nav: navigation }} />
        </>
    );
}
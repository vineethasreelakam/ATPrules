import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule93({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.03 Entry Deadlines</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Main Draw/Qualifying Singles </Text>
                        {'\n\n'}
                        The deadline for entries and withdrawals for the singles main draw is as follows:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments. </Text>12 Noon, Eastern Time, USA, twenty-eight (28) days
                        prior to the Monday of the tournament week (or the first tournament week in the
                        case of tournaments scheduled for more than one (1) week). A player on the alternate list for the singles main draw may withdraw at any time prior to such time that
                        he is moved into the main draw as a direct acceptance because of withdrawals of
                        other players. A player who moves in from the alternate list will be considered a
                        Direct Acceptance from Thursday, 10 AM Eastern Time, USA.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Tour Qualifying. </Text>12 Noon, Eastern Time, USA, twenty-one (21) days prior
                        to the first Monday of the tournament week. A player on the Alternate List for the
                        singles qualifying may withdraw at any time prior to such time that he is moved
                        into the qualifying as a Direct Acceptance from Thursday, 10 AM Eastern Time,
                        USA. A player directly accepted into the qualifying competition may withdraw,
                        without penalty, if he is moved into the main draw, or accepts a wild card into an
                        ATP Tour 250 or ATP Tour 500 tournament, or if he is still competing in an ATP
                        Tour, ATP Challenger Tour, or ITF Men’s WTT tournament at any time on the day
                        prior to the commencement of qualifying or two days prior if competing on another
                        continent. If a player is still competing past 9:00 p.m. local time, he will be automatically withdrawn from the qualifying without penalty. Players who withdraw
                        or are withdrawn due to “still competing” will be allowed to accept a wild card or
                        enter doubles into any ATP Tour 250, ATP Tour 500, ATP Challenger Tour or ITF
                        Men’s WTT tournament, including qualifying. If a withdrawal occurs prior to 10
                        AM, Eastern Time, USA, on Friday, the qualifying vacancy shall be filled by the
                        next player on the qualifying alternate list. This player is not required to sign in. If
                        a withdrawal occurs after 10 AM, Eastern Time, USA, on Friday, the qualifying vacancy will be filled from the on-site sign-in list, using the most recent Pepperstone
                        ATP Rankings list. Main draw vacancies will be filled from the main draw alternate
                        list, not the qualifying acceptance list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}> NOTE:</Text> For ATP Tour qualifying tournaments, withdrawals occurring after 10 AM
                        Eastern Time USA and prior to the draw* will be filled from that night’s alternate
                        sign-in. Vacancies occurring after the release of the qualifying draw, will be filled
                        from the next day’s on-site alternate list. Players must personally sign-in to be
                        eligible as an on-site alternate.
                        {'\n\n'}
                        * For events in a time zone where the qualifying draw is made prior to 10 AM Friday,
                        Eastern USA, vacancies occurring after the Qualifying Alternate sign-in deadline
                        but prior to the qualifying draw shall be filled from that night’s alternate sign-in.
                        {'\n\n'}
                        May I Accept a Wild Card after Withdrawing from an ATP Tour
                        Qualifying?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player was still competing in a Challenger on the day
                        before Qs started at an ATP Tour event. He wanted to withdraw
                        from the Qs due to “still competing” and then take a wild card into a
                        Challenger event. Is this allowed?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. The rule states that he may withdraw without
                        penalty from the qualifying if he is still competing on the day prior
                        to the commencement of the qualifying. By withdrawing due to“still
                        competing”, he is allowed to accept a wild card.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Can a player who is still competing the previous week on
                        Thursday or Friday (on the same continent*), or on Wednesday (on
                        a different continent*) be signed in over the phone as a Qualifying
                        Alternate for the following week’s event (Saturday Qualifying start)?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes, a player who is still competing the previous week on
                        Thursday or Friday (on the same continent*), or on Wednesday (on
                        a different continent*) can be signed in by the Supervisor over the
                        phone if he has lost before the Qualifying Alternate sign-in deadline. Players who lose after the release of the qualifying draw must
                        personally sign-in on-site the next day to be eligible as an on-site
                        alternate
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>*Continents are:</Text> Europe, Asia, Antarctica, Australia, Africa, North
                        America (including Central America) and South America.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> If a player is competing in an event (including Davis Cup)
                        that finishes on the day of the Qualifying Alternate sign-in for the following week’s event, can he be signed in as a Qualifying Alternate,
                        even though he may be competing past the Qualifying Alternate
                        sign-in deadline?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. Since the event finishes on the day of the Qualifying
                        sign-in deadline, the player may be signed in as a Qualifying Alternate for the following week’s even
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>From Q to Main Draw of another event</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> May a player who is a direct acceptance to an ATP Tour
                        qualifying event be withdrawn to move into the main draw of an ATP
                        Tour 250 or ATP Tour 500 event as a Direct Acceptance or Wild
                        Card which is held in the same week?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Yes, as long as the first ball of the qualifying at the tournament where he is in the qualifying draw has not been struck.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> May a player withdraw BDA from the main draw alternate list
                        of an ATP Tour Event and remain on and/or play the Qualifying of
                        the same event?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes, unless he would have moved into the main draw of
                        that event, had he not withdrawn. A player may not turn down this
                        main draw position to play the qualifying of that event.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>May a player who is accepted to play qualifying in an ATP
                        Challenger Tour Tournament, ATP Tour 250 or ATP Tour 500 be
                        withdrawn to move into the main draw singles of an ATP Tour 250 or
                        ATP Tour 500 event as a Direct Acceptance or as a Wild Card which
                        is held the same week?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes, as long as the first ball of the qualifying at the tournament where he is in the qualifying draw has not been struck.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Withdrawing from Qualifying to play Main Draw Doubles at another event.</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> May a player who is direct acceptance in the singles qualifying event of an ATP Challenger, ATP Tour 250 or ATP Tour 500 enter
                        through the Advance Entry system and become a direct acceptance
                        into the main draw doubles of another ATP Tour 250 or ATP Tour
                        500 event which is held the same week?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. Once a player enters and is accepted into the
                        Qualifying of an ATP Tour or ATP Challenger Tour Tournament, he is committed to that tournament unless he moves into the main draw
                        singles of another ATP Tour event. However, a player who competes and loses in the singles qualifying competition may enter the
                        doubles event of any tournament, provided he has lost prior to the
                        respective tournament’s on-site doubles sign-in deadline.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Withdrawing from Qualifying to play Main Draw Doubles at the same event.</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>May a player who is included in the singles qualifying event
                        of an ATP Challenger Tour Tournament, ATP Tour 250 or ATP Tour
                        500 and is forced to withdraw, be allowed to come back and play
                        doubles at the same event?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: Yes</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) ATP Challenger Tour Tournaments.</Text> 12 Noon, Eastern Time, USA, twenty-one
                        (21) days prior to the Monday of the tournament week. A player on the Alternate
                        List for the singles main draw may withdraw at any time prior to such time that he
                        is moved into the main draw as a direct acceptance because of withdrawals of
                        other players. A player who moves in from the alternate list will be considered a
                        Direct Acceptance from Thursday, 10 AM Eastern Time, USA.
                        {'\n\n'}
                        If a withdrawal/vacancy occurs after the withdrawal deadline and prior to the start
                        of Qualifying, the vacancy will be filled in ranking order from the original main draw
                        Acceptance List by players who have preserved their position on the list. Players
                        from the main draw alternate list who are directly accepted into the qualifying, are
                        considered to have preserved their eligibility. A player can only preserve his eligibility on one list. If there are no alternates from the original main draw acceptance
                        list who have preserved eligibility, the vacancy will be filled by the highest ranked
                        player from the qualifying or alternate list using the Pepperstone ATP Rankings,
                        and then Pepperstone ATP Doubles Rankings, used for seeding.
                        {'\n\n'}
                        After the start of the qualifying, any vacancy will come from the Lucky Loser/ Alternate list. The Alternates will be placed below the players who lost in qualifying
                        and shall be ordered based upon their position in the Pepperstone ATP Rankings,
                        and then the Pepperstone ATP Doubles Rankings, used for seeding.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>NOTE: </Text>In order to preserve his eligibility on the Acceptance List, the player must
                        email the ATP Supervisor directly prior to 6PM local time on the day before qualifying starts (email listed on detail sheet) and personally inform the Supervisor that
                        he wishes to preserve his position on the Acceptance List and the player must
                        leave a contact number. The player should ask for confirmation that the Supervisor has received the email in a timely manner. A player can only preserve his
                        eligibility on one list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>4) ATP Challenger Tour Qualifying. </Text>
                        {'\n\n'}
                        12 Noon, Eastern Time, USA, on Wednesday, nineteen (19) days prior to the first
                        Monday of the tournament week for ATP Challenger Tour. A player on the Alternate List for the singles qualifying may withdraw at any time prior to such time that
                        he is moved into the qualifying as a Direct Acceptance because of withdrawals
                        of other players. A player who moves in from the alternate list will be considered
                        a Direct Acceptance from Thursday, 10 AM Eastern Time, USA. A player directly
                        accepted into the qualifying competition may withdraw, without penalty, if he is
                        moved into the main draw, or accepts a wild card into a Challenger, ATP Tour
                        250 or ATP Tour 500 tournament, or if he is still competing in an ATP Tour, ATP
                        Challenger Tour, or ITF Men’s WTT tournament at any time on the day prior to the
                        commencement of qualifying or two days prior if competing on another continent.
                        If a player is still competing past 9:00 p.m. local time, he will be automatically withdrawn from the qualifying without penalty. Players who withdraw or are withdrawn
                        due to “still competing” will be allowed to accept a wild card or enter doubles
                        into any ATP Tour 250, ATP Tour 500, ATP Challenger Tour or ITF Men’s WTT
                        tournament, including qualifying. If a withdrawal occurs prior to 10 AM, Eastern
                        Time, USA, on Friday, the qualifying vacancy shall be filled by the next player on
                        the qualifying alternate list. This player is not required to sign in. If a withdrawal
                        occurs after 10 AM, Eastern Time, USA, on Friday, the qualifying vacancy will be
                        filled from the on-site sign-in list, using the most recent Pepperstone ATP Rankings list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>NOTE:</Text> For the purposes of this rule, the Continents are: Europe, Asia, Antarctica,
                        Australia, Africa, North America (including Central America) and South America.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Time.</Text> The ATP Challenger Alternate Sign-in shall begin no later than 4 p.m. and
                        close at 6 p.m. local time on the day prior to the start of the qualifying competition.
                        There shall also be an Alternate sign-in on the day of first round qualifying play,
                        this deadline is one-half hour prior to the first scheduled qualifying match. This
                        is a new sign-in and any player who is on-site with a Pepperstone ATP Ranking
                        (singles/doubles) is eligible to sign-in.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Can a player who is a direct acceptance in the qualifying of a
                        Challenger tournament, preserve his eligibility at another Challenger
                        tournament?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. A player is considered to have preserved his eligibility only at the tournament where he is a Direct Acceptance into
                        qualifying. He cannot withdraw and preserve eligibility at another
                        event unless the withdrawal was for “still competing”. However, he
                        can withdraw and preserve his eligibility at the same event where he
                        was a Direct Acceptance into qualifying.
                        {'\n\n'}
                        5) If a tournament date, site or surface is changed; it is the player’s responsibility to
                        withdraw from the event on or before the new entry/withdrawal deadline if he does
                        not wish to play.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>6) Late Entries.</Text>
                        Any player who submits an entry after the deadline may only be accepted into the
                        singles main draw as a wild card, qualifier, or as a special exempt (if eligible).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>7) Emergency Situations.</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>ATP Tour 250 Events</Text>
                        {'\n\n'}
                        a) Tournaments shall qualify for one (1) emergency substitution if the following
                        conditions exist:
                        {'\n\n'}
                        i) Two (2) of the tournament’s top four (4) seeds withdraw; and
                        {'\n\n'}
                        ii) One (1) of the withdrawals involves the first or second seeded player; and
                        {'\n\n'}
                        iii) The substitute player (1) will become one of the tournament’s top two (2)
                        seeds*.
                        {'\n\n'}
                        The withdrawals and substitution must occur within the period beginning on the
                        Monday prior to the start of the event week and ending at 10 AM, Eastern Time,
                        USA, on the Friday before the event week, or if the second withdrawal occurs
                        between 9:00 AM and 10 AM, Eastern Time, USA on the Friday before the event
                        the deadline for naming a qualified substitute shall be extended by one (1) hour.
                        During this one hour period all lists will be held awaiting a final cut-off for the
                        affected event. If no substitution is made within this defined time period, then the
                        next player on the acceptance list shall be moved into the main draw.
                        {'\n\n'}
                        b) The tournament shall pay prize money equal to that paid first-round losers
                        to each player who would have been a direct acceptance if not for the late
                        substitution. This payment shall not apply in the case where the player gained
                        entry into a main draw singles, at any event, by other means.
                        {'\n\n'}
                        *For purposes of determining if the substitute player qualifies as a 1 or 2 seed,
                        all players including Wild Cards, shall be ranked in order using the most recent
                        Pepperstone ATP Rankings. To be eligible for the emergency substitution, the
                        tournament must have declared their Wild Cards to the ATP prior to the withdrawal of the player that qualified them for the emergency substitution.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>CASE: </Text>Which Pepperstone ATP Ranking is used to determine the
                        emergency substitution rule?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>DECISION:</Text> The most recent Pepperstone ATP Rankings is used
                        to determine the seeding of the withdrawing players as well as the
                        seeding of the substitute player.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>CASE: </Text>If a Wild Card player will become one of the tournament’s
                        top two seeds, can a tournament switch the Wild Card to a substitute player if the Wild Card was announced?
                        DECISION: No, once the Wild Card has been announced, such
                        player is not eligible to become a substitute player.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>B.Main Draw Doubles</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) Advance Entry.</Text> 12 Noon, Eastern Time, USA, fourteen (14) days prior to the
                        Monday of the tournament week (or the first tournament week in the case of
                        tournaments scheduled for more than one (1) week). A team on the alternate
                        list for the doubles main draw may withdraw at any time prior to such time
                        that they are moved into the main draw as a direct acceptance because of
                        withdrawals of other teams.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>b) Withdrawal Deadline.</Text> The deadline for a team to withdraw from the advanced entry list closes at 10 AM, Eastern Time, USA, on the Friday prior to
                        the tournament week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>c) On-site Entry.</Text> The period for online on-site entries opens at 12:01 am, Eastern Time, USA on the Friday prior to the tournament week and closes at 3:00
                        pm Eastern Time, USA on the Friday prior to the tournament week. The online
                        sign-in is blind and no preliminary lists will be produced. Players entering
                        multiple events in the same week must do so with the same partner and shall
                        designate tournaments by priority. The on-site entry process will populate an
                        Alternate List for vacancies occurring after the tournament withdrawal deadline and prior to the doubles draw being made.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) Advance Entry.</Text> 12 Noon, Eastern Time, USA, seven (7) days prior to the
                        Monday of the tournament week unless otherwise authorized by ATP. Players entering multiple events in the same week must do so with the same
                        partner and shall designate tournaments by priority.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>b) Withdrawal Deadline.</Text> The deadline for a team to withdraw from the advanced entry list closes at 10 AM, Eastern Time, USA, on the Friday prior to
                        the tournament week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>c) On-site Entry.</Text> The on-site sign-in deadline for doubles shall be 12 Noon local
                        time on the Saturday prior to the first day of the tournament unless otherwise
                        authorized by ATP. The number of places available through the on-site entry
                        is specified in the Composition of Draws (7.08 D. 3)) plus any spots made
                        available through withdrawals occurring after the advance doubles entry
                        deadline. Teams who did not enter through the on-site sign-in and teams
                        where one member of the team is eligible to re-pair following the withdrawal
                        of his partner are eligible* to sign the daily alternate sign-in and are placed
                        below those teams on the alternate list who did enter through the on-site signin method.
                        *To be eligible, alternate teams who did not enter through the on-site protocol
                        must sign-in on the first day of the doubles competition.
                        {'\n\n'}
                        3) The doubles sign-in record shall be available for player sign-in at a reasonable time prior to the sign-in deadline.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>C. Qualifying Doubles</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour 500</Text>
                        {'\n\n'}
                        The size of the draw is four (4) with two (2) seeds. The composition of the doubles
                        qualifying draw will be the first three (3) teams from the entry list plus one (1) wild
                        card team. All matches will be played as two tie-break sets, no-ad scoring with a
                        match tie-break at one set all. Qualifying matches are to be held on the Saturday
                        / Sunday prior to the start of main draw, as determined by the Supervisor and Tour
                        Manager. Teams shall receive hospitality. Rooms for doubles qualifying players
                        shall be available beginning on Saturday and continue through the night of their
                        last match.
                        {'\n\n'}
                        Points. The qualifying team shall receive 45 ranking points. The team losing in
                        the final round of qualifying shall receive 25 ranking points*.
                        *Teams receiving a first round Bye and subsequently losing in the final round
                        receive no points.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</Text>
                        {'\n\n'}
                        There is no doubles qualifying at ATP Challenger tour events.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>D.Entry Deadline Extensions</Text>
                        {'\n\n'}
                        ATP may extend the deadline for entries and/or withdrawals when unforeseen circumstances arise.
                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule92', next: 'Rule94', nav: navigation }} />
        </>
    );
}
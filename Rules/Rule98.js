import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule98({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.08 The Draw</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Minimum Draw Size</HighlightText>
                        {'\n\n'}
                        1) The singles draw size for ATP Tour Masters 1000 tournaments shall be:
                        {'\n\n'}
                        ATP Tour Masters 1000 96 Draw
                        {'\n\n'}
                        ATP Tour Masters 1000 / Outdoors 56 Draw
                        {'\n\n'}
                        ATP Tour Masters 1000 / Indoors 48 Draw
                        {'\n\n'}
                        2) With the exception of the Nitto ATP Finals, the minimum singles draw size for all
                        other ATP Tour tournaments is as follows:
                        {'\n\n'}
                        ATP Tour 500 / Outdoors 32 Draw
                        {'\n\n'}
                        ATP Tour 500 / Indoors 32 Draw
                        {'\n\n'}
                        ATP Tour 250 / Indoors & Outdoors 28 Draw*
                        {'\n\n'}
                        * ATP Tour tournaments may petition ATP for an increased size of the main draw.
                        The deadline for submitting the petition is six (6) months prior to Monday of the
                        tournament week.
                        3) Doubles draw sizes may be found under “Composition of Draws”.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> B.Composition of Draws - ATP Tournaments</HighlightText>
                        {'\n\n'}
                        1) Main Draw Singles: The singles main draw shall be composed as follows:
                        {'\n\n'}
                        a) ATP Tour Masters 1000 Tournaments:
                        {'\n\n'}
                        Total Direct Wild Special
                        Accepted Acceptances Qualifiers Cards Exempts
                        48 38-39 6 3 0-1
                        {'\n\n'}
                        56 44-45 7 4 0-1
                        {'\n\n'}
                        96 78-79 12 5 0-1
                        {'\n\n'}
                        b) ATP Tour 500 Tournaments:
                        {'\n\n'}
                        Total Direct Wild Special
                        {'\n\n'}
                        Accepted Acceptances Qualifiers Cards Exempts
                        {'\n\n'}
                        32 23-25 4 3-4* 0-1
                        {'\n\n'}
                        48 36-38 6 4-5* 0-1
                        {'\n\n'}
                        56 42-44 7 5-6* 0-1
                        {'\n\n'}
                        *Applies only for an A+ player from the region
                        {'\n\n'}
                        c) ATP Tour 250 Tournaments:
                        {'\n\n'}
                        Total Direct Wild Special
                        {'\n\n'}
                        Accepted Acceptances Qualifiers Cards Exempts
                        {'\n\n'}
                        28 19-21 4 3 0-2
                        {'\n\n'}
                        32 23-25 4 3 0-2
                        {'\n\n'}
                        48 38-40 4 4 0-2
                        {'\n\n'}
                        56 45-47 4 5 0-2
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}></HighlightText>NOTE: All ATP Tour 250 tournaments shall have a 16 draw qualifying regardless of the size of the main draw.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}></HighlightText>C.Composition of Draws - Challenger Tour Tournaments (unless otherwise approved by ATP)
                        {'\n\n'}
                        1) Main Draw 32 Players
                        {'\n\n'}
                        a) 21/19 Direct Acceptances based on Pepperstone ATP Ranking
                        {'\n\n'}
                        b) 3 Wild Cards
                        {'\n\n'}
                        c) 6 Qualifying Positions
                        {'\n\n'}
                        d) 0-2 Special Exempts
                        {'\n\n'}
                        e) 0-2 JAS/CAS
                        {'\n\n'}
                        2) Qualifying is a 24-player event for 6 positions in the main draw
                        {'\n\n'}
                        a) 18 Direct Acceptances based on most recent Pepperstone ATP Ranking.
                        {'\n\n'}
                        b) 4 Wild Cards
                        {'\n\n'}
                        c) 0-2 JAS/CAS
                        {'\n\n'}
                        3) Vacancies
                        {'\n\n'}
                        a) Any main draw vacancies occurring after the withdrawal deadline and prior
                        to the start of Qualifying will be filled in ranking order from the original main
                        draw acceptance list by players who have preserved their position on the
                        list. Players from the main draw alternate list who are directly accepted into
                        qualifying are considered to have preserved their eligibility. A player can only
                        preserve his eligibility on one list. If there are no alternates from the original
                        main draw acceptance list who have preserved eligibility, the vacancy will be
                        filled by the highest ranked player from the qualifying or alternate list using
                        the Pepperstone ATP Rankings, and then Pepperstone ATP Doubles Rankings, used for seeding.
                        After the start of the qualifying, any vacancy will come from the Lucky Loser/
                        Alternate list. The Alternates will be placed below the players who lost in
                        qualifying and shall be ordered based upon their position in the Pepperstone
                        ATP Rankings, and then the Pepperstone ATP Doubles Rankings, used for
                        seeding.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>NOTE:</HighlightText> In order to preserve his eligibility on the Acceptance List, the player
                        must email the ATP Supervisor directly prior to 6 PM local time on the day
                        before qualifying starts (email listed on detail sheet) and personally inform
                        the Supervisor that he wishes to preserve his position on the Acceptance
                        List and the player must leave a contact number. The player should ask for
                        confirmation that the Supervisor has received the email in a timely manner. A
                        player can only preserve his eligibility on one list.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>D.Composition of Draws - Doubles:</HighlightText> The doubles main draw shall be composed as
                        follows:
                        {'\n\n'}
                        1) ATP Tour 250/500 Tournaments: Direct Acceptances
                        Singles Doubles Direct Acceptances Wild
                        Draw Size Draw Size Advance Entry Cards
                        {'\n\n'}
                        28/32 16 14* 2
                        {'\n\n'}
                        48 16 14* 2
                        {'\n\n'}
                        56 24 22* 2
                        {'\n\n'}
                        *For ATP 500 - 1 from Qualifying
                        {'\n\n'}
                        2) ATP Masters 1000 Tournaments: Direct Acceptances
                        Singles Doubles Direct Acceptances Wild
                        Draw Size Draw Size Advance Entry Cards
                        {'\n\n'}
                        96 32 29 3
                        {'\n\n'}
                        56* 28 25 3
                        {'\n\n'}
                        48* 24 22 2
                        {'\n\n'}
                        *Optional Draw Size for ATP Masters 1000 56 & 48 Draw Singles
                        Singles Doubles Direct Acceptances Wild
                        Draw Size Draw Size Advance Entry Cards
                        {'\n\n'}
                        56 32 29 3
                        {'\n\n'}
                        48 28 25 3
                        {'\n\n'}
                        3) ATP Challenger Tour Tournaments
                        Total Direct Acceptances Wild
                        Accepted Advance Entry On-Site Cards
                        {'\n\n'}
                        16 10 4 2
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>E. Qualifying</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>ATP Tour:</HighlightText> The Alternate Sign In for ATP Tour singles qualifying shall begin no later
                        than 4 p.m. and close at 6 p.m. local time on the night prior to the start of the qualifying competition (Friday night when qualifying commences on Saturday). There shall
                        also be an Alternate sign-in on the day of first round qualifying play, this deadline is
                        one-half hour prior to the first scheduled qualifying match. This is a new sign-in and any player who is on-site and with a Pepperstone ATP Ranking (singles or doubles)
                        is eligible to sign-in. Once the qualifying competition has begun, only those players
                        who ultimately qualify and lucky losers may be accepted into the main draw. The
                        qualifying competition commences when the first ball of the first qualifying match is
                        struck.
                        {'\n\n'}
                        ATP Challenger Tour. The on-site alternate sign-in shall begin no later than 4 p.m.
                        and close at 6 p.m. local time on the night prior to the start of the qualifying competition. There shall also be an Alternate sign-in on the day of first round qualifying
                        play, this deadline is one-half hour prior to the first scheduled qualifying match. This
                        is a new sign-in and any player who is on-site and with a Pepperstone ATP Ranking
                        (singles or doubles) is eligible to sign-in. Qualifying vacancies occurring after the
                        withdrawal deadline - 10 AM, Eastern Time, USA on Friday shall be filled from the
                        on-site alternate sign-in using the most recent Pepperstone ATP Rankings.
                        {'\n\n'}
                        Any main draw vacancies occurring after the withdrawal deadline and prior to the
                        start of Qualifying will be filled in ranking order from the original main draw acceptance list by players who have preserved their position on the list. Players from
                        the main draw alternate list who are directly accepted into qualifying are considered to have preserved their eligibility. A player can only preserve his eligibility on
                        one list. If there are no alternates from the original main draw acceptance list who
                        have preserved their eligibility, the vacancy will be filled by the highest ranked
                        player from the qualifying or alternate list using the Pepperstone ATP Rankings,
                        and then the Pepperstone ATP Doubles Rankings, used for seeding.
                        {'\n\n'}
                        Once the qualifying competition has begun, only those players who ultimately
                        qualify, lucky losers and eligible alternates may be accepted into the main draw.
                        The qualifying competition commences when the first ball of the first qualifying
                        match is struck. The Alternates will be placed below the players who lost in qualifying and shall be ordered based upon their position in the Pepperstone ATP
                        Rankings, and then the Pepperstone ATP Doubles Rankings, used for seeding.
                        NOTE: For ATP Challenger Tour qualifying tournaments, withdrawals occurring
                        after 10 AM Eastern Time USA and prior to the draw* will be filled from that night’s
                        alternate sign-in. Vacancies occurring after the release of the qualifying draw, will
                        be filled from the next day’s on-site alternate list. Players must personally sign-in
                        to be eligible as an on-site alternate.
                        {'\n\n'}
                        * For events in a time zone where the qualifying draw is made prior to 10 AM Friday, Eastern Time USA, vacancies occurring after the Qualifying Alternate sign-in
                        deadline but prior to the qualifying draw shall be filled from that night’s alternate
                        sign-in.
                        {'\n\n'}
                        1) Singles. ATP Tour Masters 1000 and ATP Tour 500 qualifying draw size will be
                        one-half (1/2) the size of the main draw. The qualifying size for all ATP Tour 250
                        tournaments shall be 16 with 4 qualifiers. The singles qualifying shall be composed as follows:
                        {'\n\n'}
                        a) ATP Tour Tournaments - Qualifying:
                        {'\n\n'}
                        Total Accepted Direct Acceptances Wild Cards
                        {'\n\n'}
                        16 13 3
                        {'\n\n'}
                        16* 14 2
                        {'\n\n'}
                        24 20 4
                        {'\n\n'}
                        28 24 4
                        {'\n\n'}
                        48 43 5
                        {'\n\n'}
                        * Denotes ATP Tour 250 Qualifying
                        b) ATP Challenger Tour Tournaments - Qualifying:
                        Total Accepted Direct Acceptances Wild Cards
                        24 20 4
                        2) Doubles Competition. The doubles qualifying shall be composed as follows:
                        {'\n\n'}
                        ATP Tour 500 Tournaments Qualifying:
                        {'\n\n'}
                        Total Accepted Direct Acceptances Wild Cards
                        {'\n\n'}
                        4 3 1


                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule97', next: 'Rule99', nav: navigation }} />
        </>
    );
}
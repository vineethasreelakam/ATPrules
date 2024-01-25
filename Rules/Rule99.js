import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule99({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.09 Size and Method of Draw</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> A.Main Draw</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}> 1) Singles</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>a) 28 Competitors.</HighlightText> A draw sheet with 32 places shall be used. After the seeds
                        and byes are placed, the remaining players, including the qualifiers, shall be
                        drawn and placed in the vacant spaces in the draw, beginning at the top of
                        the draw.
                        <HighlightText style={RuleStyles.SubHeading3}>b) 32 or 64 Competitors.</HighlightText> A draw sheet of 32 or 64 places shall be used. After
                        the seeds are placed, the remaining players, including the qualifiers, shall be
                        drawn and placed in the vacant spaces in the draw, beginning at the top of
                        the draw.
                        <HighlightText style={RuleStyles.SubHeading3}>c) 48 or 56 Competitors. </HighlightText>A draw sheet with 64 places shall be used. After the
                        seeds and byes are placed, the remaining players, including the qualifiers,
                        shall be drawn and placed in the vacant spaces in the draw, beginning at the
                        top of the draw.
                        <HighlightText style={RuleStyles.SubHeading3}>d) 96 Competitors.</HighlightText> A draw sheet with 128 places shall be used. After the seeds
                        and byes are placed, the remaining players, including the qualifiers, shall be
                        drawn and placed in the vacant spaces in the draw, beginning at the top of
                        the draw
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Doubles</HighlightText>
                        {'\n\n'}
                        a) The draw shall be for 16, 24 or 32 teams.
                        b) Placing of seeds and byes and the drawing of the remaining teams, including
                        qualifiers, shall be in accordance with the same principles used in the singles
                        main draw
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.Qualifying Draw</HighlightText>
                        {'\n\n'}
                        The qualifying draw shall be made in sections, and the winner of each section shall
                        be given a place in the main draw, as determined by lot
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>1) Singles</HighlightText>
                        a) If four (4) qualifiers are required, there shall be four (4) sections; six (6) qualifiers, six (6) sections; and so on. The draw shall be seeded and the selection
                        of seeds shall be based on the most recent available and complete Pepperstone ATP Rankings list.
                        b) There shall be no pre-qualifying event; however, a tournament may conduct
                        a separate or local event to determine wild cards in the qualifying competition
                        or main draw, and unsuccessful participants in this event are eligible to be
                        considered for entry into the qualifying competition.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>2) Doubles - ATP Tour 500</HighlightText>
                        {'\n\n'}
                        There shall be a four-draw event with one team qualifying.
                        Correct When Left Out of Draw
                        Case: After the qualifying draw has been made, it is discovered that
                        player A, who was properly entered, has been left out of the draw.
                        What is the procedure to correct this mistake?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText>
                        {'\n\n'}
                        1. If player A is unseeded, replace the last direct acceptance in the
                        qualifying draw with player A in the draw. Follow this procedure if
                        play has begun unless the last direct acceptance has begun his first
                        match. If the last direct acceptance has started his first match then
                        no correction is to be made and player A is left out of the draw.
                        {'\n\n'}
                        2. If player A is seeded, then if he is one of the top four (4) seeds he
                        replaces seed four (4) and then seed four (4) replaces seed eight
                        (8). Seed eight (8) then replaces the last direct acceptance. If player
                        A is to be seeded 5-8, then he shall replace seed eight (8) and
                        then seed eight (8) replaces the last direct acceptance. The same
                        principle is followed for larger qualifying draws where you have a
                        greater number of seeds. If play has begun, then the Supervisor
                        shall evaluate the impact upon the draw and correct when possible.
                        If the last direct acceptance has begun play, then no corrections are
                        possible.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Correcting an Error in Seeding</HighlightText>
                        {'\n\n'}
                        Case: After the event has begun, it is discovered that a tie between
                        2 seeded players or teams was not broken correctly. What action
                        may be taken?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> If the players or teams involved in the error have not
                        played their first match, then the error in seeding may be corrected
                        by switching the positions of the affected players or teams.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Don’t Have Eight Seeds</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> In a qualifying draw, there are only seven (7) players listed
                        in the Pepperstone ATP Rankings or the Pepperstone ATP Doubles
                        Rankings. Since there will not be an eighth seed, how are seeds 5-7
                        placed in the Draw?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Draw seeds 5, 6 and 7 for placement in sections 2,3 and
                        4.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Main Draw Seed for a Qualifier</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>May a player who gains a place in the main draw by qualifying be seeded in the main draw?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: Yes.</HighlightText> However, if the main draw is made prior to the completion of the qualifying, then the original seedings are final.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Who to Seed in singles Qualifying</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>Seven (7) players listed in the Pepperstone ATP Rankings
                        sign in for the singles qualifying. Two (2) other players listed in the
                        Pepperstone ATP Doubles Rankings sign-in along with fifteen (15)
                        other players. How many and which players will be seeded?
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Eight (8) players. The seven (7) singles players and the
                        highest-positioned doubles player.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Player Pulled from ATP Tour 250 and 500 Qualifying</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>An ATP Tour 500 and an ATP Tour 250 or a different ATP
                        Tour 250 or 500 event are being held the same week. Can a player
                        inside the original cut of the ATP Tour 250 or 500 qualifying list be
                        withdrawn in order to be moved into the main draw of the ATP Tour
                        250 or 500 or a different ATP Tour 500 or 250 event or accept a wild
                        card?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule98', next: 'Rule100', nav: navigation }} />
        </>
    );
}
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule97({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.07 Play-Up Regulation (ATP Challenger Tour Tournaments)</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Restrictions - Challengers 75-125</HighlightText>
                        {'\n\n\t\t'}
                        1) Players positioned 1-10 in the Pepperstone ATP Rankings twenty-one (21) days
                        prior to the first Monday of the ATP Challenger Tour tournament are prohibited from entering, accepting a wild card and/or competing in an ATP Challenger
                        Tour tournament. Players who would have been, had they and all other players
                        entered, a direct acceptance on the original acceptance list for a Grand Slam
                        are prohibited from entering, accepting a wild card and/or competing in an ATP
                        Challenger Tour tournament in the first week of the Grand Slam tournament.
                        {'\n\n\t\t'}
                        2) Players positioned 11-50 (excluding Entry Protection ranking) in the Pepperstone
                        ATP Rankings twenty-one (21) days prior to the first Monday of the ATP Challenger Tour tournament are prohibited from entering (with the exception of Challenger
                        175 category) but may receive an ATP approved wild card in order to compete
                        in the Challenger tournament. The Challenger Supervisor will make wild card
                        determinations consistent with the limitations outlined below. Players positioned 11-50 are also prohibited from entering, accepting a wild card or competing in a
                        Challenger 75 tournament.
                        {'\n\n\t\t'}
                        3) ATP Challenger Tour tournaments scheduled the same week as an ATP Tour
                        tournament may offer wild cards to players positioned 11-50 in the Pepperstone
                        ATP Rankings who have received approval from the ATP on-site Supervisor according to the following breakdown:
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 125 up to (2) two wild cards
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 100 up to (1) one wild card
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 75 no wild card
                        {'\n\n\t\t'}
                        4) ATP Challenger Tour tournaments not scheduled in the same week as ATP Tour
                        tournaments, or scheduled during the 2nd week of a Grand Slam, ATP Tour Masters 1000 96-draw tournaments may offer wild cards to players positioned 11-50
                        in the Pepperstone ATP Rankings who have received approval from the ATP onsite Supervisor according to the following breakdown:
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 125 up to (3) three wild cards
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 100 up to (3) three wild cards
                        {'\n\n\t\t\t\t'}
                        ATP Challenger 75 no wild card
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}></HighlightText>NOTE: These restrictions apply only to singles draws.
                        {'\n\n\t'}

                        <HighlightText style={RuleStyles.SubHeading2}>B. Restrictions - Challenger 50 </HighlightText>
                        {'\n\n\t\t'}
                        Players positioned 1-150 in the Pepperstone ATP Rankings twenty-one (21) days
                        prior to the first Monday of the ATP Challenger Tour tournament are prohibited
                        from entering Challenger 50 events. ATP Challenger 50 tournaments may offer
                        an ATP-approved wild card to players ranked 51-150 in the Pepperstone ATP
                        Rankings at the entry deadline who have received approval from the ATP on-site
                        Supervisor according to the following breakdown:
                        {'\n\n\t\t\t\t'}
                        51-100 1 wild card limited to a player of the same
                        nationality as the event
                        {'\n\n\t\t\t\t'}
                        101-150 1 wild card - no nationality restriction
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player ranked between 11-50 asks for a wild card into an
                        ATP Challenger 100 and is denied by the tournament. The player
                        then signs in for the qualifying. Is he allowed to play qualifying?
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> He is allowed to play only if the tournament grants him
                        a wild card into the qualifying. The WC, however, will not count
                        against the maximum allowed number of 11-50 players for the
                        tournament.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player ranked 11-50 at the time of the entry deadline asks
                        for a wild card into an ATP Challenger 100 and is denied by the
                        tournament. The players ranking then drops below 50 and he signs
                        in for the qualifying. Is he allowed to play qualifying?
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes. Since his ranking dropped below 50, he is allowed
                        to sign in and play qualifying and does not need a wild card.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> May a player who was ranked in the 11-50 range at the time
                        of the entry deadline into an ATP Challenger 75 event, but whose
                        ranking falls below this at the time of the qualifying sign-in, be accepted into the event as a main draw or qualifying wild card or
                        sign-in for the qualifying event?
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. The rule under 7.07 A 2) states that these players are
                        prohibited from entering, accepting a wild card or competing in an
                        ATP Challenger 75 tournament.
                        {'\n\n'}


                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule96', next: 'Rule98', nav: navigation }} />
        </>
    );
}
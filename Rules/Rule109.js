import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule109({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.19 Remake of Draw</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Singles</HighlightText>
                        {'\n\n'}
                        If two (2) or more of the top eight (8) seeds withdraw more than twenty-four (24)
                        hours before the start of the singles tournament, the tournament may choose either to remake the draw or let the draw stand. If a wild card withdraws after the original
                        draw and the draw is to be remade, the vacancy created may be filled at the tournament’s option by a substitute wild card. If the tournament elects not to use a substitute
                        wild card, the vacancy shall be treated as any other vacancy.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.Doubles </HighlightText>
                        {'\n\n'}
                        Prior to the draw being finalized (not sooner than when it is published but not later
                        than when the first ball of the doubles tournament is struck as determined by the
                        Supervisor), use the following procedure: If one fourth or more of the seeded teams
                        withdraw, or a minimum of two (2) seeded teams in a 16-team draw withdraw, the
                        Tournament Director has the option to have the draw remade if approved by the
                        Supervisor. If the draw is remade, the original pairings may not be changed except
                        where vacancies occur.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A draw has to be remade. How is the remake of the draw
                        done?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>There are 2 methods for remaking a draw: (1) Retaining
                        the original order of the chips drawn and (2) Starting from the beginning and redrawing the chips.
                        Retaining the original order of the chips drawn is the preferred method and is used in all cases except when the cause of the remake
                        had to do with an issue with the chips, such as a loss of a chip; a
                        chip being accidently thrown back into the bowl and drawn a second
                        time, etc.
                        {'\n\n'}
                        In the instance of remaking the draw retaining the original order of
                        the chips, the following procedure is followed:
                        {'\n\n'}
                        1) The Chip List (order of the names of players and/or teams) is regenerated
                        {'\n\n'}
                        2) The draw is populated using the list of chips drawn in the original
                        order
                        {'\n\n'}
                        3) No other action is taken
                        {'\n\n'}
                        In the instance when the draw is remade by starting from the beginning and redrawing the chips., the following procedure is followed:
                        {'\n\n'}
                        1) The Chip List (order of the names of players and/or teams) is regenerated.
                        {'\n\n'}
                        2) The Chips are redrawn according to the procedures outlined in the
                        ATP Rulebook 7.09
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Where does the “No Match” go?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Case: </HighlightText>At an ATP Tour Qualifying, the draw is made and the OP
                        is published on Friday night. Overnight, 3 withdrawals occur. The
                        players who withdrew were on Line 2, Line 11 and Line 13. The next
                        morning, only 2 players sign in for the on-site alternate list leaving a
                        “No Match” spot for the draw. How is it determined on which line the
                        “No Match” is placed?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Decision: </HighlightText>By random draw.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule108', next: 'Rule110', nav: navigation }} />
        </>
    );
}
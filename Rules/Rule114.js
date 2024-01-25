import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule114({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.24 Scoring of Match</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Manual </HighlightText>
                        {'\n\n'}
                        The Chair Umpire shall mark his scorecard in accordance with the following:
                        <HighlightText style={RuleStyles.SubHeading3}>1) Pre-Match.</HighlightText> Before the pre-match meeting with the players, ensure the completion of the information requested on the scorecard such as name of tournament,
                        round, players’ names, etc.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Toss. </HighlightText>After the “toss,” note who won the toss, their election, etc.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) Warm-Up.</HighlightText> Note the time that the warm-up begins.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) Time. </HighlightText>Note the time play begins and concludes in each set.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>5) Sides For Serve.</HighlightText> Note the initials of each player in the order of their serves and
                        also on the side of the scorecard corresponding to their proper sides of the court.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>6) Ball Change.</HighlightText> Mark in advance the game for which a ball change will be made on
                        the left side of the scorecard.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>7) Points.</HighlightText> Points should be made by slanted marks in the boxes on the scorecard
                        and/or by the following code:
                        {'\n\n'}
                        “A” - Ace
                        {'\n\n'}
                        “D” - Double Fault
                        {'\n\n'}
                        “C” - Code Violation
                        {'\n\n'}
                        “T” - Time Violation
                        {'\n\n'}
                        “.” - First Service Fault (a dot shall be made in the middle of the bottom line of
                        the Server’s box).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>8) Games.</HighlightText> Games may be marked by either of the following methods:
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>a) Method A.</HighlightText> The cumulative total of games won by each player is set out in the
                        “Games” column at the end of each game; and
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>b) Method B. </HighlightText>The cumulative total of games won by the winner of each game
                        only is set out in the “Games” column at the end of each game.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.Handheld Device </HighlightText>
                        {'\n\n'}
                        Instructions will be provided on-site at ATP Tour tournaments for the operation of the
                        handheld scoring device.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>C.Point Penalty Card </HighlightText>
                        {'\n\n'}
                        The Chair Umpire must mark his Point Penalty Card in accordance with the following:
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Post-Match.</HighlightText> If a Code Violation, Time Violation or Post Match incident occurs,
                        complete the information requested on the Point Penalty Card, such as name of
                        tournament and a summary of the incident.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Rules Violation. </HighlightText>The violation should be checked and the Code section noted for
                        each violation.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) Statement of Facts.</HighlightText> A contemporaneous statement should be made of all the
                        facts (who, what, when, where and why) of the violation quoting verbatim any
                        statements made that are considered to be obscene or abusive.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule113', next: 'Rule115', nav: navigation }} />
        </>
    );
}
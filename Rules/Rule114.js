import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';


export default function Rule114({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.24 Scoring of Match</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Manual </Text>
                        {'\n\n'}
                        The Chair Umpire shall mark his scorecard in accordance with the following:
                        <Text style={RuleStyles.SubHeading3}>1) Pre-Match.</Text> Before the pre-match meeting with the players, ensure the completion of the information requested on the scorecard such as name of tournament,
                        round, players’ names, etc.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Toss. </Text>After the “toss,” note who won the toss, their election, etc.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Warm-Up.</Text> Note the time that the warm-up begins.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) Time. </Text>Note the time play begins and concludes in each set.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>5) Sides For Serve.</Text> Note the initials of each player in the order of their serves and
                        also on the side of the scorecard corresponding to their proper sides of the court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>6) Ball Change.</Text> Mark in advance the game for which a ball change will be made on
                        the left side of the scorecard.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>7) Points.</Text> Points should be made by slanted marks in the boxes on the scorecard
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
                        <Text style={RuleStyles.SubHeading3}>8) Games.</Text> Games may be marked by either of the following methods:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) Method A.</Text> The cumulative total of games won by each player is set out in the
                        “Games” column at the end of each game; and
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>b) Method B. </Text>The cumulative total of games won by the winner of each game
                        only is set out in the “Games” column at the end of each game.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Handheld Device </Text>
                        {'\n\n'}
                        Instructions will be provided on-site at ATP Tour tournaments for the operation of the
                        handheld scoring device.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Point Penalty Card </Text>
                        {'\n\n'}
                        The Chair Umpire must mark his Point Penalty Card in accordance with the following:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Post-Match.</Text> If a Code Violation, Time Violation or Post Match incident occurs,
                        complete the information requested on the Point Penalty Card, such as name of
                        tournament and a summary of the incident.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Rules Violation. </Text>The violation should be checked and the Code section noted for
                        each violation.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Statement of Facts.</Text> A contemporaneous statement should be made of all the
                        facts (who, what, when, where and why) of the violation quoting verbatim any
                        statements made that are considered to be obscene or abusive.

                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule113', next: 'Rule115', nav: navigation }} />
        </>
    );
}
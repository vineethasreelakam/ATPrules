import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule113({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                   <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.23 Line Umpire Requirement, Positions and Calls</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Number for Matches</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Full Complement of Line Umpires.</HighlightText> If a Chair Umpire has a full complement of
                        Line Umpires, then the assignments shall be as follows:
                        {'\n\n'}
                        a) Base, side, center service and service Line Umpires call all “Outs” and
                        “Faults” for their respective lines.
                        {'\n\n'}
                        b) Net judge calls all “Nets” and “Throughs” (if designated by the Chair Umpire),
                        measures the net height at the beginning of each set and administers the ball
                        changes. A net device may be authorized for use.
                        {'\n\n'}
                        c) Base, side and center service Line Umpires call “Foot Faults” on their respective lines.
                        {'\n\n'}
                        d) Chair umpire calls all “Lets,” “Foul Shots,” “Foul Strokes,” “Hindrances,” “Not
                        Ups” and “Touches.”
                        {'\n\n'}
                        e) Line umpires shall not be permitted to call through the net.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Less than a Full Complement of Line Umpires.</HighlightText> If less than a full complement
                        of Line Umpires is available, the following should be used (Sufficient Line Umpires must be assigned in the main draw so that the Chair Umpire is not solely
                        responsible for calling any one line.):
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>a) Seven (7) Line Umpires.</HighlightText> All long lines are called only up to the net. Serves
                        are called from the receiver’s end and the center Line Umpire returns to his
                        assigned sideline after the serve is put into play, i.e., there is movement
                        during the point. The assignments for seven (7) Line Umpire crew are as
                        follows:
                        {'\n\n'}
                        i) Four (4) side Line Umpires, one of who calls the receiver’s center service
                        line; after the serve is put into play, this umpire returns to his assigned
                        side line. (The umpire calling the center service line on the receiver’s end
                        moves during the point when he returns to his assigned side line after the
                        serve is put into play.). In addition, the side Line Umpire on the receiver’s
                        end shall alternate calling the center service line of the “deuce” and “advantage” courts, moving between points.
                        {'\n\n'}
                        ii) One Line Umpire calls serves at each end of the court.
                        {'\n\n'}
                        iii) One Line Umpire calls each base line (2).
                        {'\n\n'}
                        iv) Chair umpire calls all “Lets,” “Not Ups,” “Foul Shots,” “Touches,” “Hindrances” and “Throughs.”
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>b) Six (6) Line Umpires.</HighlightText>
                        {'\n\n'}
                        i) Three (3) umpires cover the long lines; the side service lines are called
                        through the net from the server’s end of court and the center service line
                        is called from the receiver’s end.
                        {'\n\n'}
                        aa) There is no movement during a point.
                        {'\n\n'}
                        ii) One Line Umpire calls serves at each end of the court.
                        {'\n\n'}
                        iii) One Line Umpire calls each base line (2).
                        {'\n\n'}
                        iv) Chair umpire calls all “Lets,” “Not Ups,” “Foul Shots,” “Touches,” “Hindrances” and “Throughs.”
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>c) Five (5) Line Umpires.</HighlightText> The assignments are the same as for the six (6) man
                        crew, except that the center service Line Umpire shall move after the serve to
                        the side line.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>d) Four (4) Line Umpires.</HighlightText> The assignments are the same as for the five (5)
                        man crew, except that the Chair Umpire, depending on personal preference
                        and court surface, selects the lines that he will call.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>e) Less Than Four (4) Line Umpires.</HighlightText> The Chair Umpire shall assign the Line
                        Umpires to the best advantage possible.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>f) Umpiring Without Line Umpires.</HighlightText> If a Chair Umpire is required to umpire a
                        match without any Line Umpires, or without a full complement of Line Umpires, then the Chair Umpire must make the calls for the net and all unattended lines. If the Chair Umpire is unable to give a decision on a call or other
                        questions of fact, then he must order a “Let” to be played.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Players Don’t Call Lines</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> In ATP Tour or ATP Challenger Tour qualifying events where
                        approval has been granted to use less than five (5) Line Umpires
                        per match; may the Chair Umpire designate certain or all lines for
                        the players to make the calls?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. If a Chair Umpire is required to umpire a match
                        without any Line Umpires or without a full complement of Line Umpires, then the Chair Umpire must make the calls for the net and all
                        unattended lines.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> B.Hand Signals of Line Umpires </HighlightText>
                        {'\n\n'}
                        The approved hand signals are as follows:
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) “Out” or “Fault.” </HighlightText>The arm should be fully extended sideways at shoulder height,
                        pointing in the direction in which the ball has fallen, palm of the hand facing the
                        Chair Umpire, fingers extended and joined. If the ball falls out of the court to the
                        left or the right, the left or right arm as the case may be is extended after the verbal call of “Out” or “Fault” (as applicable) is made. The hand signal is in addition to
                        and is secondary to the verbal call of “Out” or “Fault”; the hand signal must never
                        be used instead of the verbal call.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) “Good Ball.”</HighlightText> The hands shall be pointed down with palms down and fingers
                        extended together. There is no verbal call for a good ball. The hand signal is used
                        in silence and only when necessary to verify that a close ball was good.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) “Unsighted.”</HighlightText> The hands are placed beneath the eyes facing in the direction of
                        the Chair Umpire but not affecting the vision of the Line Umpire. The hand signal
                        verifies that a Line Umpire is unable to call a ball because of his vision being
                        obscured. There is no verbal call for a Line Umpire being unsighted and the hand
                        signal is used in silence.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule112', next: 'Rule114', nav: navigation }} />
        </>
    );
}
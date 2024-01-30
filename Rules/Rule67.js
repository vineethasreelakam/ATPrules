import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule67({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.03 Balls</HighlightText>
                        {'\n\n'}
                        Tennis balls used at ATP Tour and ATP Challenger Tour tournaments must be approved by ATP a minimum of ninety (90) days prior to the start of the tournam
                        <HighlightText style={RuleStyles.SubHeading2}>A.Changes and Number.</HighlightText>
                        {'\n\n'}
                        Ball changes and the number of balls used per match shall be the same for all main
                        draw matches throughout the tournament unless authorized by the Supervisor. Balls
                        should be opened just prior to the match or ball change. In case of a suspended or
                        postponed match, the match balls shall not be used in the warm-up, they shall only
                        be used when play resumes. Each tournament must provide approved tennis balls in
                        accordance to the following:
                        {'\n\n'}

                        <HighlightText style={RuleStyles.SubHeading2}>1) ATP Tour Tournaments:</HighlightText> Six (6) balls for each main draw and qualifying match to
                        be changed after seven (7) and nine (9) games throughout the tournament.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>2) ATP Challenger Tour Tournaments:</HighlightText> Six (6) balls, for each main draw and qualifying match to be changed after seven (7) and nine (9) games for all matches.
                        This will be mandatory for Challenger 50 and 75 events from 1 May 2024.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> B.Lost Balls.</HighlightText> Play must be continuous even if a ball needs to be replaced.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments:</HighlightText> If a ball is lost or becomes unplayable, then another
                        shall be added as soon as it is reasonably possible. During the warm-up or within
                        two (2) games (before first point is begun in the third game or if the first point has
                        to be replayed for any reason) after a change of ball, a new ball shall be used as
                        a replacement; otherwise a ball of like wear shall be supplied.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) ATP Challenger Tour Tournaments:</HighlightText> If a ball is lost or becomes unplayable and
                        there are fewer than three (3) balls remaining, then another ball must be added
                        immediately for use in play. During the warm-up or within two (2) games (before
                        first point is begun in the third game or if the first point has to be replayed for any
                        reason) after a change of balls, a new ball shall be used as a replacement; otherwise a ball of like wear shall be supplied.

                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>C.Practice Balls</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour Masters 1000 and ATP 500 Tournaments:</HighlightText> Each main draw player is
                        entitled to twelve (12) new balls per day for practice, free of charge, two (2) day
                        prior to the start of qualifying until that player is eliminated. Once eliminated, he
                        shall be entitled to six (6) new balls per day for practice. Tournaments should
                        provide tennis ball baskets upon request. Players must return practice balls.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) ATP 250 Tournaments:</HighlightText> Each main draw player is entitled to nine (9) new balls
                        per day for practice, free of charge, two (2) day prior to the start of qualifying
                        until that player is eliminated. Once eliminated, he shall be entitled to six (6) new
                        balls per day for practice. Tournaments should provide tennis ball baskets upon
                        request. Players must return practice balls.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) ATP Qualifying Competition:</HighlightText> : Players listed in the Pepperstone ATP Rankings
                        (singles/doubles) who are practicing for qualifying competition are entitled to six
                        (6) new balls per day for practice, free of charge, two (2) days prior to the start
                        of the qualifying competition until that player is eliminated. Players must return
                        practice balls.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) ATP Challenger Tour Tournaments:</HighlightText>  Each main draw and qualifying player is
                        entitled to three (3) new balls per day for practice (six (6) balls for Challenger 125
                        and 175 events), free of charge, from 12 Noon two (2) days prior to the start of the
                        event until that player is eliminated. Once eliminated, he shall be entitled to six (6)
                        used balls per day for practice. Players must return practice balls
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>D.Ball Logo.</HighlightText> Tournaments may add an additional logo to the tournament ball under the
                        following conditions.
                        {'\n\n'}
                        1) The logo is no larger than the logo of the ball manufacturer, and
                        {'\n\n'}
                        2) The logo is positioned on the side of the ball opposite the ball manufacturer logo.
                        Ball Change Error
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player serves a first service fault. He starts to serve the
                        second serve and the Chair Umpire realizes that there should be
                        new balls in play.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire should wait to change balls until that
                        player or team is scheduled to serve (Rules of Tennis, “Rule 27”),
                        unless a let is called resulting in the first point being replayed.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>New Balls to Wrong Player(s)</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> The wrong player or team was given new balls with which to
                        serve.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Decision: </HighlightText>If the error is discovered after the first point, then the
                        team/player continues to serve with the new balls. The team/player
                        who should serve with new balls receives new balls to serve the
                        next game. Once a point has been played in the second game, the
                        ball change sequence shall remain as altered. In no case shall new
                        balls be replaced by the old balls after a service game has started.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Re-Warm-Up, Balls</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>At the end of a game there is a twenty (20) minute rain
                        delay. A ball change was also to occur after that game. When play
                        is resumed, new balls will be in play. What balls are used for the
                        re-warm-up?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Decision:</HighlightText> New balls should be used for the re-warm-up. At the end
                        of the warm-up, these balls will be taken away and replaced with
                        new balls to resume the match.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Broken Ball</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A ball in play breaks (no compression).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Replay the point.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Soft Ball</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After the point has been completed, the player claims that the
                        point should be replayed because the ball is soft and unplayable.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The point stands as played. A “soft” ball is not cause for
                        replaying a point even if the Chair Umpire decides that the ball must
                        be replaced.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> During a rally, player A catches the ball and wants the point
                        re-played, claiming that the ball is “soft” and unfit for play.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Player A loses the point. A “soft” ball is not cause for
                        replaying a point. The ball, however, may be taken out of play.


                        {'\n\n'}

                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule66', next: 'Rule68', nav: navigation }} />
        </>
    );
}



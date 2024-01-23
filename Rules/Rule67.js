import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule67({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.03 Balls</Text>
                        {'\n\n'}
                        Tennis balls used at ATP Tour and ATP Challenger Tour tournaments must be approved by ATP a minimum of ninety (90) days prior to the start of the tournam
                        <Text style={RuleStyles.SubHeading2}>A.Changes and Number.</Text>
                        {'\n\n'}
                        Ball changes and the number of balls used per match shall be the same for all main
                        draw matches throughout the tournament unless authorized by the Supervisor. Balls
                        should be opened just prior to the match or ball change. In case of a suspended or
                        postponed match, the match balls shall not be used in the warm-up, they shall only
                        be used when play resumes. Each tournament must provide approved tennis balls in
                        accordance to the following:
                        {'\n\n'}

                        <Text style={RuleStyles.SubHeading2}>1) ATP Tour Tournaments:</Text> Six (6) balls for each main draw and qualifying match to
                        be changed after seven (7) and nine (9) games throughout the tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>2) ATP Challenger Tour Tournaments:</Text> It is recommended that all Challenger
                        events use six (6) balls, changed after seven (7) and nine (9) games for all matches, however, it is mandatory for Challenger 125 and 175 events. For all other
                        challenger events, as a minimum, four (4) balls are to be provided for each main
                        draw and qualifying match to be changed at least every seven (7) and nine (9)
                        games.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}> B.Lost Balls.</Text> Play must be continuous even if a ball needs to be replaced.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments:</Text> If a ball is lost or becomes unplayable, then another
                        shall be added as soon as it is reasonably possible. During the warm-up or within
                        two (2) games (before first point is begun in the third game or if the first point has
                        to be replayed for any reason) after a change of ball, a new ball shall be used as
                        a replacement; otherwise a ball of like wear shall be supplied.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) ATP Challenger Tour Tournaments:</Text> If a ball is lost or becomes unplayable and
                        there are fewer than three (3) balls remaining, then another ball must be added
                        immediately for use in play. During the warm-up or within two (2) games (before
                        first point is begun in the third game or if the first point has to be replayed for any
                        reason) after a change of balls, a new ball shall be used as a replacement; otherwise a ball of like wear shall be supplied.

                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Practice Balls</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour Masters 1000 and ATP 500 Tournaments:</Text> Each main draw player
                        is entitled to twelve (12) new balls per day for practice, free of charge, one (1)
                        day prior to the start of qualifying until that player is eliminated. Once eliminated,
                        he shall be entitled to six (6) new balls per day for practice. Players must return
                        practice balls.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP 250 Tournaments:</Text> Each main draw player is entitled to nine (9) new balls
                        per day for practice, free of charge, one (1) day prior to the start of qualifying until
                        that player is eliminated. Once eliminated, he shall be entitled to six (6) new balls
                        per day for practice. Players must return practice balls.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) ATP/Challenger Qualifying Competition:</Text> Players listed in the Pepperstone ATP
                        Rankings (singles/doubles) who are practicing for qualifying competition are entitled to three (3) new balls per day for practice, free of charge, one (1) day prior to
                        the start of the qualifying competition until that player is eliminated. Players must
                        return practice balls. For ATP Tour qualifying at combined events, each player is
                        entitled to six (6) new balls per day until that player is eliminated.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) ATP Challenger Tour Tournaments:</Text> Each main draw player is entitled to three
                        (3) new balls per day for practice (six (6) balls for Challenger 125 and 175 events),
                        free of charge, from 12 Noon Saturday (Friday for events with a Sunday start) prior to the start of the event until that player is eliminated. Once eliminated, he shall
                        be entitled to three (3) used balls per day for practice (six (6) balls for Challenger
                        125 and 175 events). Players must return practice balls.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D.Ball Logo.</Text> Tournaments may add an additional logo to the tournament ball under the
                        following conditions.
                        {'\n\n'}
                        1) The logo is no larger than the logo of the ball manufacturer, and
                        {'\n\n'}
                        2) The logo is positioned on the side of the ball opposite the ball manufacturer logo.
                        Ball Change Error
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player serves a first service fault. He starts to serve the
                        second serve and the Chair Umpire realizes that there should be
                        new balls in play.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The Chair Umpire should wait to change balls until that
                        player or team is scheduled to serve (Rules of Tennis, “Rule 27”),
                        unless a let is called resulting in the first point being replayed.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>New Balls to Wrong Player(s)</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> The wrong player or team was given new balls with which to
                        serve.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Decision: </Text>If the error is discovered after the first point, then the
                        team/player continues to serve with the new balls. The team/player
                        who should serve with new balls receives new balls to serve the
                        next game. Once a point has been played in the second game, the
                        ball change sequence shall remain as altered. In no case shall new
                        balls be replaced by the old balls after a service game has started.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Re-Warm-Up, Balls</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>At the end of a game there is a twenty (20) minute rain
                        delay. A ball change was also to occur after that game. When play
                        is resumed, new balls will be in play. What balls are used for the
                        re-warm-up?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Decision:</Text> New balls should be used for the re-warm-up. At the end
                        of the warm-up, these balls will be taken away and replaced with
                        new balls to resume the match.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Broken Ball</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A ball in play breaks (no compression).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Replay the point.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Soft Ball</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> After the point has been completed, the player claims that the
                        point should be replayed because the ball is soft and unplayable.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The point stands as played. A “soft” ball is not cause for
                        replaying a point even if the Chair Umpire decides that the ball must
                        be replaced.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> During a rally, player A catches the ball and wants the point
                        re-played, claiming that the ball is “soft” and unfit for play.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Player A loses the point. A “soft” ball is not cause for
                        replaying a point. The ball, however, may be taken out of play.


                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule66', next: 'Rule68', nav: navigation }} />
        </>
    );
}



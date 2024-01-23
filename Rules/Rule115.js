import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';


export default function Rule115({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.25 Announcing</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Calls of On-Court Officials</Text>
                        {'\n\n'}
                        The verbal calls of the on-court officials shall be made loudly and clearly in English
                        and any other appropriate language as follows:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) “Fault.” </Text>If either the first or second service fails.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) “Out.” </Text>If a return hits the ground, a permanent fixture or another object outside
                        the court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) “Net” </Text>If a service hits the top of the net.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) “Footfault” </Text>If a player violates rule 7 or 8 of the Rules of Tennis.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>5) “Let.” </Text>If the Chair Umpire determines that a point should be replayed.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>6) “Not Up.” </Text>If a player fails to hit a ball in play on the first bounce.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>7) “Foul Shot” or “Touch.”</Text> If a ball is intentionally struck twice, or touched before
                        it comes over the net, or while volleying, the ball hits the court after leaving the
                        racquet before going over the net, or a player touches the net while the ball is in
                        play, or a ball in play touches a player, or anything that he wears or carries falls
                        into the opponent’s court or touches the net.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>8) “Hindrance.”</Text> If a player deliberately or involuntarily commits an act which hinders his opponent in making a stroke.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>9) “Through.”</Text> If a ball goes through the net.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>10) “Wait Please.” </Text>To preclude starting play when a hazard or other circumstance
                        makes it appropriate to delay the beginning of a point. Do not make this call if a
                        player’s arm is in motion to strike the ball (call “Let” immediately after the serve is
                        struck).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>11) Overrule.</Text> Make the following announcement:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) “Correction, the ball was in;” or</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>b) “Out” or “Fault.”</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Code and Time Violations </Text>
                        {'\n\n'}
                        The following are examples of Code of Conduct announcements to be used:
                        {'\n\n'}
                        1) Point Penalties assessed for violation of the Code should be announced in accordance with the following examples:
                        {'\n\n'}
                        “Code Violation, Delay of Game, Warning, Mr..___(last name).”
                        {'\n\n'}
                        “Code Violation, Verbal Abuse, Point Penalty, Mr..___(last name).” “Let’s
                        play” (“Let’s Play” is optional).
                        {'\n\n'}
                        “Code Violation, Verbal Abuse, Game Penalty, Mr..___(last name).”
                        {'\n\n'}
                        If instructed by the Supervisor, the announcement for a default shall be, for example:
                        {'\n\n'}
                        “Code Violation, Unsportsmanlike Conduct, Default, Mr..___(last name).”
                        {'\n\n'}
                        2) Time Violations resulting from non-compliance with the Unreasonable Delay provisions of the Code shall be announced in accordance with the following examples:
                        {'\n\n'}
                        “Time Violation, Warning, Mr..___(last name).” (“Let’s Play” is optional.)
                        {'\n\n'}
                        Subsequent Delays by the Server:
                        {'\n\n'}
                        “Time Violation, 2nd Service” (“Let’s Play” is optional.)
                        {'\n\n'}
                        Subsequent Delays by the Receiver:
                        {'\n\n'}
                        “Time Violation, Point Penalty, Mr..___(last name).”(“Let’s Play” is optional.)
                        {'\n\n'}
                        3) After a point or game penalty, the new score is announced.
                        {'\n\n'}
                        4) If a Chair Umpire wants the Supervisor to assess an immediate default, he is to
                        announce “Code Violation, Supervisor to the court.”
                        {'\n\n'}
                        5) A player cannot appeal to the Chair Umpire for the withdrawal of a “Time Violation” or “Code Violation” given to his opponent.
                        {'\n\n'}
                        6) Code Violations shall be announced in English.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Language - Chair Umpire</Text>
                        {'\n\n'}
                        Chair umpires should announce matches in the language of the tournament and subsequently in English. Conversations between the Chair Umpire and player may be in
                        any language; however, if the language used is not English, then the Chair Umpire
                        must be prepared to advise the other player of the nature of the discussion.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D.Medical Time-Out </Text>
                        {'\n\n'}
                        The following are examples of announcements to be made when there is a medical
                        time-out:
                        {'\n\n'}
                        When the Chair Umpire decides to call for the Physiotherapist, the Chair Umpire
                        shall announce:
                        {'\n\n'}
                        “The Physiotherapist has been called to the court.”
                        {'\n\n'}
                        After a three (3) minute time-out is authorized, the Chair Umpire should make the
                        public announcement of:
                        {'\n\n'}
                        “Mr..________________is now receiving a medical time-out.”
                        {'\n\n'}
                        The following announcements are to be made privately to the Physiotherapist and
                        both players/teams:
                        {'\n\n'}
                        “Two (2) minutes remaining”
                        {'\n\n'}
                        “One (1) minute remaining”
                        {'\n\n'}
                        “Thirty (30) seconds remaining”
                        {'\n\n'}
                        “Treatment complete”
                        {'\n\n'}
                        “Time” (public)
                        {'\n\n'}
                        Once the “Treatment complete” notice has been given to the Physiotherapist and
                        both players/teams, then if needed, the player should be given the time necessary to put on socks and shoes before “Time” is called.
                        If there is no play after an additional thirty (30) seconds, the delay is penalized in
                        accordance with the Point Penalty Schedule.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>E. Player Introductions </Text>
                        {'\n\n'}
                        The following are examples of announcing statements to be used for player introductions:
                        {'\n\n'}
                        1) If the introduction of players is to be made from the chair, then during the warmup, the Chair Umpire says: “This is a ___round singles/doubles match, best of
                        three (3) tie-break sets. To the right of the chair _____(full name) and to the left of
                        the chair _____(full name).____(full name)won the toss and elected to _____.”
                        {'\n\n'}
                        2) If the introduction of players is made by a tournament announcer, then before
                        each player’s first service game the Chair Umpire says: “______(full name) to
                        serve.” (optional - “first set “).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>F. Score </Text>
                        {'\n\n'}
                        The following are examples of announcing statements to be used for scoring:
                        {'\n\n'}
                        1) The Server’s score is always called first, except in the Tie-break.
                        {'\n\n'}
                        2) The score is announced: Fifteen-Love, Love-Fifteen, Thirty-Love, Love-Thirty,
                        Forty-Love, Love-Forty, Fifteen-All, Fifteen-Thirty, Thirty-Fifteen, Fifteen-Forty,
                        Forty-Fifteen, Thirty-All, Thirty-Forty, Forty-Thirty, Deuce (never Forty-All), Advantage ____(last name), Game _____(last name). For No-Ad scoring, when the
                        score reaches deuce, the chair should announce: “Deuce, Deciding Point, Receiver’s Choice.”
                        {'\n\n'}
                        3) The score must be announced loudly and distinctly when a point is finished for the
                        players and the crowd. The Chair Umpire has the option to make the announcement either before or after the applause, whichever guarantees the announcement can be heard by the players. “Timing” for the next point begins when the
                        point ends, not when the announcement is made.
                        {'\n\n'}
                        4) At the end of a game or set the Chair Umpire, in addition to announcing “Game
                        _____(last name),” should announce the score in games in conformity with the
                        following example:
                        {'\n\n'}
                        “Game Smith, Jones/Smith lead 4 games to 2 (or 4-2)” or Game Smith, 3
                        games all.”
                        {'\n\n'}
                        “Game and third set, Smith, 7 games to 5. Jones leads 2 sets to 1.”
                        If there is a scoreboard visible to the spectators, then the set number need not be
                        mentioned. In such case only the score in games should be announced: “Game
                        Smith, first game.”
                        {'\n\n'}
                        5) When a set reaches the Tie-break, the Chair Umpire announces:
                        “Game Smith, 6 games all. Tie-break.”
                        {'\n\n'}
                        6) During the Tie-break, the score is announced by first giving the score and then the
                        name of the player(s) leading, e.g.:
                        {'\n\n'}
                        “1-0, Jones” or “1-0, Jones/Smith” (Use “Zero” rather than “Love” in the Tiebreak.)
                        {'\n\n'}
                        “1 All”
                        {'\n\n'}
                        “2-1,Smith”
                        {'\n\n'}
                        At the conclusion of the Tie-break, the Chair Umpire announces:
                        {'\n\n'}
                        “Game and _____set,_____(last name), 7 games to 6 (or 7-6).”
                        {'\n\n'}
                        7) At the conclusion of the match, the Chair Umpire announces the winner in conformity with the following example:
                        “Game, set and match Smith (optional -3 sets to 2); 3-6, 5-7, 7-5, 6-1, 6-3.”
                        In each set, call first the number of games won by the winner of the match.
                        {'\n\n'}
                        8) During the warm-up, the following examples of announcing statements should be
                        used at the appropriate times:
                        {'\n\n'}
                        “Three (3) minutes - 3 minutes until warm-up ends.
                        {'\n\n'}
                        “Two (2) minutes” - 2 minutes until warm-up ends.
                        {'\n\n'}
                        “One (1) minute” - 1 minute until warm-up ends.
                        {'\n\n'}
                        “Time” (optional - “prepare to play”)- end of warm-up; direct balls to Server’s
                        end of court.
                        {'\n\n'}
                        “______” (full name), (optional - “first set”), to Serve, Play” - immediately prior
                        to Server preparing to serve.

                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule114', next: 'Rule116', nav: navigation }} />
        </>
    );
}
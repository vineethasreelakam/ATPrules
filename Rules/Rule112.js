import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule112({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule2.png' }} />
                    <ZoomText>
                        <HighlightText style={RuleStyles.Description}>
                            <HighlightText style={RuleStyles.SubHeading1}>7.22 On-Court Procedures and Requirements</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}> A.Start of Tournament</HighlightText>
                            {'\n\n'}
                            A tournament shall commence when the first serve of the first point of the first match
                            is struck.
                            {'\n\n'}

                            <HighlightText style={RuleStyles.SubHeading2}>B.Start of Match </HighlightText>
                            {'\n\n'}
                            A match shall commence when the first serve of the first point is struck.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>C. Rules of Tennis</HighlightText>
                            {'\n\n'}
                            The Rules of Tennis shall apply to all ATP Tour and ATP Challenger Tour tournaments
                            except as amended by the ATP Official Rulebook.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>D.Appeal of Calls </HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>1) Questions of Fact.</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Definition.</HighlightText> A question of fact is defined as an issue relating to what actually
                            occurred on court during a specific match. Only the on-court officials shall
                            determine questions of fact arising during a match and the player or the Supervisor may not change such determinations.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) Rule. </HighlightText>A player may not appeal the determination made by the on-court officials on a question of fact.
                            {'\n\n'}


                            <HighlightText style={RuleStyles.SubHeading3}>2) Questions of Tennis Law.</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Definition. </HighlightText>A question of tennis law is defined as an issue relating to the
                            construction and application of specific facts to the ATP rules and regulations
                            and the rules of tennis. During a match, the Chair Umpire shall first determine
                            questions of tennis law. If the Chair Umpire is uncertain or if a player appeals
                            the determination of the Chair Umpire, then the decision shall be made by the
                            Supervisor, which shall be final and non-appealable.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) Player Rights.</HighlightText> A player shall have the right to appeal any ruling of tennis law
                            in accordance with the following procedures:
                            {'\n\n'}
                            i) When a player is of the opinion that a ruling by the Chair Umpire on a
                            matter of tennis law is erroneous, he may appeal the ruling by notification
                            to the Chair Umpire in a professional and non-abusive manner.
                            {'\n\n'}
                            ii) The Chair Umpire shall stop play and immediately call for the Supervisor.
                            Upon the arrival of the Supervisor, the Chair Umpire shall state the facts
                            of the incident and the Supervisor shall be bound by the facts as stated.
                            The Chair Umpire shall then state his position with respect to the ruling.
                            The Supervisor shall review briefly the applicable rules with the player
                            and the Chair Umpire and either affirm or reverse the ruling.
                            {'\n\n'}
                            iii) Play shall be resumed upon the statement of “Let’s Play” by the Supervisor and the players must proceed to commence play and the twenty-five
                            (25) second clock shall commence.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>E. Tennis Law - Cases</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Appeal of Judgment Calls</HighlightText>
                            {'\n\n'}

                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A first serve is hit down the middle and is called out and then
                            corrected to good by the center service Line Umpire. The Chair
                            Umpire awards the point to the server, but the receiver disagrees
                            saying that he had a play on the ball. The Chair Umpire agrees
                            and rules that the point be replayed. The Supervisor is called to the
                            court.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Point to server. The Chair Umpire may not change a
                            judgment decision after a player appeal.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Appeal of the “Facts”: Receiver</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> First point of a game, the first serve is called fault and overruled by the Chair Umpire to good. The Chair Umpire then announces 15-Love. The receiver states that the point should be re-played
                            because he returned the ball into the court. The Chair Umpire realizes that the receiver did in fact return the ball and orders the point
                            to be replayed. The server claims that the Chair Umpire cannot
                            change his decision and asks for the Supervisor to be called.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The point is re-played. The Chair Umpire’s initial awarding of the point to the server was incorrect based upon the facts as
                            described by the Chair Umpire: The receiver did return the serve.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Appeal of the “Facts”: Server</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> First point of a game, the first serve is called fault and
                            overruled by the Chair Umpire to good. The Chair Umpire awards
                            the point to the server based upon his judgment that the receiver
                            did not have a play on the ball. The receiver claims that he could
                            have played the ball. The Chair Umpire is not sure of his original
                            judgment and orders the point to be re-played. The server claims
                            that the Chair Umpire may not change his judgment based upon an
                            appeal from the receiver and asks for the Supervisor to be called.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Point to the server. The facts on which the Chair Umpire
                            based his initial decision did not change. Therefore, the Chair
                            Umpire may not change his original decision based upon a player’s
                            appeal or protest.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Umpire Blocked on Question of Fact</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>Player A stops play claiming that player B had played the
                            ball after it had bounced twice. The Chair Umpire said that he was
                            “blocked” and could not make the decision.
                            {'\n\n'}

                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The point stands as played. When the Chair Umpire has
                            the primary responsibility for a call (nets, throughs, not-ups and
                            touches) as opposed to the secondary responsibility (line calls), an
                            immediate decision must be made. If the Chair Umpire did not see a
                            rules violation on something for which he has the primary responsibility then technically no violation can be called
                            Appealing for a Let
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Player A serves and player B returns the ball for a winner.
                            Player A appeals to the Chair Umpire that the service was a let. The
                            Chair Umpire says that he did not hear a let. Player A then asks
                            player B if he heard a let. Player B answers yes. Upon hearing this,
                            the Chair Umpire says that since both players heard a let, we shall
                            play a let. Player B objects saying that it is the Chair Umpire’s call
                            and that he was only confirming to player A that the Chair Umpire
                            had made a mistake.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The point stands as played. The Chair Umpire cannot
                            make assumptions as to the intent of player B’s comment. The Chair Umpire should be certain that the intention of player B was to
                            play a let before making any decision.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>F. Hindrance. </HighlightText>A hindrance may result (1) from a corrected call by an official or (2) from
                            an inadvertent event that occurs on-court:
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>1) Corrected Call. </HighlightText>Whenever there is a corrected call either by overrule, correction
                            by a Line Umpire or otherwise, the Chair Umpire in his sole judgment must determine if either player was hindered, and if so, order a “Let” to be played.
                            {'\n\n'}





                            a) If a call is corrected from “Good Ball” to “Out,” then the point is ended and
                            there is no hindrance.
                            {'\n\n'}
                            b) If the call is corrected from “Out” to “Good Ball,” then there must be a “Let”
                            played unless it was a clear ace or a clear winning shot that the player could
                            not possibly have retrieved. If there is any reasonable possibility that such a
                            ball could have been played, then the player who would have lost the point
                            must be given the benefit of the doubt.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>2) Inadvertent or Deliberate event. </HighlightText>A distraction occurring on-court may be ruled
                            inadvertent (unintentional) or ruled deliberate.
                            {'\n\n'}
                            a) Inadvertent distractions may include the following (a “Let” may be called in
                            these cases): a ball rolling onto the court; a ball falling out of a pocket; a hat
                            falling off; or an involuntary sound or exclamation (ex. verbal reaction to an
                            injury) from a player. Any player who created the hindrance must be advised
                            that the next time play is stopped by the Chair Umpire because of that player’s similar actions; it shall result in a loss of point.
                            {'\n\n'}
                            b) Any distraction caused by a player may be ruled deliberate and result in the
                            loss of a point (intentional or unintentional). Deliberate is defined as the player meant to do what it was that caused the hindrance or distraction.
                            {'\n\n'}
                            c) Care must be exercised to ensure rulings do not result in providing a player(s)
                            with two opportunities to win a point.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>G.Hindrance Cases</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Delaying the Server</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>During a match with Review ELC in use, the receiver breaks
                            a string after returning a first serve called fault. The server challenges the fault call and the receiver changes his racket before the result
                            of the challenge is displayed on the screen. Should the server be
                            awarded a first serve if the call stands?
                            {'\n\n'}
                            Decision: Second serve, as the receiver changing his racket did not
                            delay the server in any way.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Corrected Call</HighlightText>
                            {'\n\n'}
                            Case: A second serve is a “net” call. The service Line Umpire calls
                            “out,” then corrects it to “good.”
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Second serve
                            Opponent’s Gear Falls On The Court
                            {'\n\n'}



                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Clothing or equipment (excluding the racquet) that is worn or
                            carried by a player, including a ball from his pocket, falls to the court
                            during play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire shall call a let and replay the point. He
                            shall also inform the player that if the Chair Umpire makes a second
                            call of let, it will result in a loss of point.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player’s shoe comes off during play and is laying on the
                            court.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The default position of the Chair Umpire should be that
                            the point continues, unless the Chair Umpire is convinced that the
                            opponent is hindered and in that case, a let could be called.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Opponent Makes Noise</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> During play, a player thinking he has hit a winner, shouts “vamos”, “come on”, “yes”, etc. as his opponent is in the act of hitting
                            the ball.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> If the Chair Umpire rules that a hindrance has occurred
                            then, as the sound or exclamation that caused the hindrance was
                            deliberate, the point shall be awarded.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Inadvertent Hindrance</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>As a player is in the process of hitting a volley into the net,
                            his hat falls off. He then claims a let for hindrance.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>No let. A player may not hinder himself. A let should only
                            be called when the opponent could have been hindered.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Singles Stick Falls</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>After a first serve fault, the singles stick falls to the court.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire should award a first serve unless in
                            his opinion the replacement time was such that the server was not
                            delayed in his delivery of a second serve.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Spectator Noise</HighlightText>
                            {'\n\n'}






                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> During play an “out” call is made by a spectator. The player
                            stops playing and claims hindrance.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: The point stands as played. </HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Early Foot Fault Call</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>The baseline umpire calls a foot fault on the server prior to
                            him hitting a first serve. The server continues with his motion and
                            hits the serve into the net.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}></HighlightText>Decision: First serve awarded. It is not a foot fault until the ball has
                            been struck. Therefore, the call is erroneous and the Line Umpire
                            has hindered the server.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>H.Overrule </HighlightText>
                            {'\n\n'}
                            1) The Chair Umpire may overrule a Line Umpire only if (1) there is a clear mistake
                            by a Line Umpire, and (2) the overrule is made promptly after the mistake. A player may never appeal a determination on questions of fact to the Supervisor.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Clear Mistake.</HighlightText> As a matter of practice the Chair Umpire must be in a position to make a determination that a call was erroneous beyond a reasonable
                            doubt. To overrule a ball called “Good” by the Line Umpire, the Chair Umpire
                            must have been able to see a space between the ball and the line. To overrule
                            an “Out” or “Fault” call by a Line Umpire, the Chair Umpire must have seen
                            the ball hit on or inside the line. Clear foot-faults not called by the responsible
                            Line Umpire should be called by the Chair Umpire.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) Promptly. </HighlightText>The Chair Umpire must overrule immediately after the Line Umpire
                            makes the “clear mistake.” The overrule “call” must be made almost simultaneously with the “clear mistake” made by the Line Umpire.
                            {'\n\n'}
                            2) A player may request that the Chair Umpire verify a call or other determination
                            of fact on a point-ending call made by an on-court official; upon such request the
                            Chair Umpire shall immediately verify the same either by his own personal observation or upon confirmation of the Line Umpire or other on-court official involved.
                            The Chair Umpire may never overrule the call of a Line Umpire upon the request
                            of a player. A Line Umpire may never change a call as a result of a protest or
                            appeal, except in the case of clay court ball mark procedures.
                            {'\n\n'}
                            3) The request, verification and resumption of play should be completed within the
                            twenty-five (25) seconds allowed between points. If the player prolongs the argument, the Chair Umpire should announce “Let’s Play,” and the player is subject to
                            the provisions of the Code.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>I. Correction/Verification of Call</HighlightText>
                            <HighlightText style={RuleStyles.SubHeading3}>Line umpires. </HighlightText>When a Line Umpire realizes that he/she has made an erroneous
                            call, including an inadvertent sound, he/she should immediately call “Correction”
                            so that the Chair Umpire and the players are aware of the error. The Line Umpire
                            should then make the corrected call.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>J. Ball Mark Inspection Procedures (Clay Courts)</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>1) Chair Umpire</HighlightText>
                            {'\n\n'}
                            a) A ball mark inspection requested by a player (team) shall be allowed only if
                            the Chair Umpire cannot determine the call with surety on either a point-ending shot or when a player (team) stops playing the point during the rally (Returns are permitted but then the player must immediately stop). The Chair
                            Umpire shall check ball marks if there is some doubt about the accuracy of
                            the call.
                            {'\n\n'}






                            b) If the Chair Umpire sees a clear mistake, he may stop play with an overrule.
                            {'\n\n'}
                            c) The original call or overrule shall always stand if the Line Umpire and/or Chair
                            Umpire cannot determine the location of the mark or if the mark is unreadable.
                            {'\n\n'}
                            d) Once the Chair Umpire has identified and ruled on a ball mark, this decision
                            is final and not appealable.
                            {'\n\n'}
                            e) In clay court tennis, the Chair Umpire should not be too quick to announce
                            the score unless absolutely certain of the call. If in doubt, the Chair Umpire
                            should wait before calling the score to determine whether a ball mark inspection is necessary. Ball mark inspections made after the score has been
                            announced or after first serves shall be done as quickly as possible so the
                            server is not unreasonably delayed.
                            {'\n\n'}
                            f) In doubles, the appealing player must make his appeal in such a way that
                            either both players stop playing the point or the Chair Umpire stops play.
                            If an appeal is made to the Chair Umpire, then the Chair Umpire must first
                            determine that the correct procedure was followed. If it is not proper or if it
                            is late, then the Chair Umpire may determine that the opposing team was
                            deliberately hindered.
                            {'\n\n'}
                            g) Players may not cross the net to check a ball mark without being subject to
                            the Code. A player may not erase marks unless he is conceding the call or
                            after a ball mark inspection occurs and the Chair Umpire has made a final
                            decision.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>2) Line Umpires</HighlightText>
                            {'\n\n'}
                            a) If a Line Umpire has to make a close call, he must keep his eyes on the mark
                            and should not look at the Chair Umpire.
                            {'\n\n'}
                            b) If requested by the Chair Umpire, the Line Umpire shall walk directly to the
                            mark and identify the mark to the Chair Umpire. The Chair Umpire shall then
                            inspect the mark and make the determination.
                            {'\n\n'}
                            c) If directed by the Chair Umpire to identify a mark and the Line Umpire is not
                            sure of the mark, the Line Umpire must state immediately to the Chair Umpire, “I do not have the mark.”
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>K.Clay Court Cases</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Can’t Find Ball Mark</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A Line Umpire calls a ball out on a clay court. The Chair
                            Umpire asks him to show the mark. The Line Umpire cannot locate
                            the mark and neither can the Chair Umpire.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The original (out) call must stand.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Clay Court:</HighlightText> Doubles Ball Mark Appeal
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Player B returns a serve but his partner, player A, says, “wait”
                            as he moves to look at the mark. The Chair Umpire stops play. The
                            opponent, player C, appeals to the Supervisor, saying player B
                            returned the serve, which player C put away.
                            Decision: The procedure was correct (The Chair Umpire stopped
                            play after an interruption by player A.) The mark is examined and if
                            it is good, Team A-B loses the point; otherwise, it is a second serve.
                            Must Both Players on a Team Stop to Get Ball Mark Inspection.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> In doubles on a clay court, the second serve is called good.
                            The receiver returns the ball but hesitates in search of the mark. His
                            partner crosses (poaches) and hits the ball into the net. The receiver
                            then appeals the second serve, stating that he stopped play prior to
                            his reflex return.
                            {'\n\n'}





                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The point stands as played. Both players must stop
                            playing or the player appealing must do so in a manner that results
                            in the Chair Umpire stopping play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Overrule Then Inspect Ball Mark</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>As a Chair Umpire, you overrule a ball on a clay court. The
                            player disagrees and asks for a ball mark inspection. You think that
                            maybe you made a mistake on the overrule.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire should check the mark.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>L. Electronic Review / Electronic Review - Line Calling (Review ELC)</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>A. Electronic Review (Review ELC)</HighlightText>
                            {'\n\n'}
                            The use of an approved electronic system for reviewing line calls and/or overrules is
                            authorized for use at ATP events. The protocol for Review ELC is as follows:
                            {'\n\n'}
                            1) A request for an electronic review of a line call by a player (team) shall be allowed
                            only on either a point-ending shot or when a player (team) stops playing the point
                            during a rally (returns are permitted but then the player must immediately stop).
                            {'\n\n'}
                            2) In doubles the appealing player must make his appeal in such a way that either
                            play stops or the Chair Umpire stops play. If an appeal is made to the Chair Umpire the Chair Umpire must first determine that the correct appeal procedure
                            was followed. If it was not correct or if it was late, then the Chair Umpire may
                            determine that the opposing team was deliberately hindered, in which case the
                            appealing team loses the point.
                            {'\n\n'}
                            3) Each player/team shall receive three (3) challenges per set (excluding the tiebreak game). If the player/team is incorrect with a challenge, then one of the
                            challenges is lost. If the player (team) is correct with a challenge, then the player
                            retains his same number of challenges. Challenges remaining, if any, at the end
                            of a set do not carry over to the next set.
                            {'\n\n'}
                            4) During the tie-break game in any set, each player/team shall receive one (1) additional challenge. This is in addition to any challenges not lost, if any, during the
                            set.
                            {'\n\n'}
                            5) For doubles, the Match Tie Break shall be considered as a new set and each
                            team shall receive three (3) challenges. Challenges remaining from the previous
                            set do not carry over into the Match Tie Break. Successful challenges do not
                            reduce the number of challenges that may remain.
                            {'\n\n'}
                            6) In order to challenge, a player must show an immediate interest in making a
                            challenge and must do it in a timely manner. The key to the policy is “immediate
                            interest”. The player must also make his/her intention to challenge known to the
                            Chair Umpire either verbally or visually using his racquet or finger. The Chair
                            Umpire will (a) reconfirm with the player his intent to challenge; (b) confirm that
                            the player has challenges remaining; and (c) proceed with the electronic review.
                            {'\n\n'}
                            7) The original call or overrule will always stand if the electronic review is unable, for
                            whatever reason, to make a decision on that line call or overrule. In this case, the
                            player shall not have his available number of challenges reduced.
                            {'\n\n'}
                            8) If there is no call made from the on-court officials (unsighted Line Umpire and
                            Chair Umpire cannot make the call) on a point ending shot, the Chair Umpire may
                            call for a review and the result of the review will not affect the remaining challenges of either player.
                            {'\n\n'}
                            9) The decision of the electronic review is final and cannot be appealed.
                            {'\n\n'}
                            10) A certified official, approved by the ATP Supervisor, shall act as the Review Official* and his duties shall include, but are not limited to:
                            {'\n\n'}
                            a) Determining which impact shall be reviewed by the system.
                            {'\n\n'}
                            b) Act as the final authority on tracking the number of challenges each player
                            has remaining.
                            {'\n\n'}
                            c) Monitor the system to ensure that it is functioning properly.
                            {'\n\n'}
                            d) Notify the Chair Umpire immediately in the case of a system failure or any
                            other condition that prohibits or brings into question the ability of the system
                            to review a challenged call. In this case, the Chair Umpire shall immediately
                            notify both players that review is not available until further notice.
                            {'\n\n'}
                            * Review official and supporting technology staff shall be located within the stadium or arena in a secured area and with an unobstructed view of the court.
                            {'\n\n'}
                            11) For each court that is using a review system, there shall be a minimum of one
                            (1) video board, of sufficient size, located in a position where the Chair Umpire,
                            players and spectators may view the results of the challenge.
                            {'\n\n'}







                            12) Review Official Protocol is described in “Exhibit T.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>B. Electronic Review -</HighlightText> Live Line Calling (Live ELC)
                            The use of an approved Live ELC electronic line calling system is authorized for use
                            at ATP events in 2024.
                            {'\n\n'}
                            The following protocol shall be used.
                            {'\n\n'}
                            1) There shall be no line umpires. All lines shall be called using the Live ELC System
                            approved by ATP to call all lines.
                            {'\n\n'}
                            2) Foot-faults will be called by a Review Official monitoring two (2) court-level cameras placed on the baseline and on the center service line at each end of the court
                            if available or the Chair Umpire.
                            {'\n\n'}
                            3) In the unlikely event the Live ELC system malfunctions, play will be delayed for up
                            until such time as the issue is corrected or 15 minutes have elapsed. If the issue
                            is not resolved within 15 minutes the ATP Tour Supervisor will decide when and
                            how the match will resume.
                            {'\n\n'}
                            4) If the Live ELC system fails to make a call, the call shall be made by the Chair
                            Umpire. If the Chair Umpire is unable to determine if the ball was in or out, then
                            the point shall be replayed. This protocol applies only to point ending shots or
                            in the case when a player stops play. In the case where there is no call, and the
                            player stops play, the umpire shall call for the shot to be displayed on the video
                            board for confirmation.
                            {'\n\n'}
                            5) If equipment is available, automatic replays of the call will be shown on the video
                            boards on point ending shots that are “out” by 15 centimeters or less. Winning
                            shots warranting a replay will be manually directed to the video board by the Review Official.
                            {'\n\n'}
                            6) Physical requirements for the on-site booth to be confirmed..
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>M. Continuous Play/Delay of Game </HighlightText>
                            {'\n\n'}
                            Play shall be continuous, except that a maximum of twenty-five (25) seconds may
                            elapse from the moment the ball goes out of play at the end of one point to the time
                            the ball is struck for the next point, except at a ninety (90) second changeover or a
                            one hundred and twenty (120) second set break. The procedures for enforcing this
                            rule are as follows:
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>1) Time Between Points. 25 Seconds/Continuous Play</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Start Stop Watch.</HighlightText> The Chair Umpire must start the stopwatch after the ball
                            goes out of play or when the players are ordered to play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) Time Violation or Code Violation.</HighlightText> A Time or Code Violation must be assessed if the ball is not struck for the next point within the twenty-five (25)
                            seconds allowed, except if the Chair Umpire extends the time for special circumstances defined by ATP. There is no time warning prior to the expiration
                            of the twenty-five (25) seconds.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>2) 90 Seconds/Change-Over (Changing Ends)</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Start Stop Watch. </HighlightText>The Chair Umpire must start the stopwatch the moment
                            the ball goes out of play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) “Time.” </HighlightText>The Chair Umpire must announce to players “Time” after one (1)
                            minute has elapsed. If requested, prior to the match, by a television broadcaster, the Chair Umpire shall have the authority to delay the start of play until
                            the end of the ninety (90) second changeover period.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>c) “15 Seconds.” </HighlightText>The Chair Umpire may announce to players “15 Seconds” if
                            the players are still at their chairs and/or have not started toward their playing
                            positions.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>d) Time Violation or Code Violation. </HighlightText>The Chair Umpire must assess a Time
                            Violation or, when applicable, a Code Violation (after a medical time-out or
                            treatment) if the ball is not struck for the next point within the ninety (90) seconds / one hundred twenty (120) seconds allowed, provided there has been
                            no interference which prevented the Server from serving within that time or a
                            delay by the Chair Umpire.
                            {'\n\n'}





                            <HighlightText style={RuleStyles.SubHeading3}>3) 120 Seconds/Set Break</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Start Stop Watch. </HighlightText>The Chair Umpire must start the stopwatch the moment
                            the ball goes out of play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) “Time”. </HighlightText>The Chair Umpire must announce to players “time” after 90 seconds
                            has elapsed. If requested, prior to the match, by a television broadcaster, the
                            Chair Umpire shall have the authority to delay the start of play until the end of
                            the one hundred twenty (120) second set break.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>c) “15 Seconds.” </HighlightText>The Chair Umpire may announce to players “15 Seconds” if
                            the players are still at their chairs and/or have not started toward their playing
                            positions.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>d) Time Violation or Code Violation. </HighlightText>The Chair Umpire must assess a Time
                            Violation or, when applicable, a Code Violation (after a medical time-out or
                            treatment) if the ball is not struck for the next point within the one hundred
                            twenty (120) / one hundred fifty (150) seconds allowed, provided there has
                            been no interference which prevented the server from serving within that time
                            or a delay by the Chair Umpire.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>4) Not Playing to the Reasonable Pace of the Server</HighlightText>
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Start Stop Watch. </HighlightText>The Chair Umpire must start the stopwatch when the player is ordered to play or the moment the ball goes out of play.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>b) Time Violation or Code Violation.</HighlightText> The Chair Umpire must assess a Code
                            Violation if the receiver is employing “gamesmanship.” The Chair Umpire
                            must issue a Time Violation before the expiration of twenty-five (25) seconds
                            if the receiver’s actions delay the reasonable pace of the server.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>5) Stoppage and Postponement of a Match</HighlightText>
                            {'\n\n'}
                            a) The Chair Umpire may stop a match temporarily because of or conditions
                            of the grounds or weather. Any such stoppage by a Chair Umpire must be
                            reported immediately to the Supervisor. Once a match is stopped and until
                            a match is postponed, the Chair Umpire must ensure that he, the players
                            and all on-court officials remain ready to resume the match. The Supervisor
                            makes the decision to postpone a match until a later day.
                            {'\n\n'}
                            b) Upon stoppage or postponement by the Supervisor, the Chair Umpire shall
                            record the time, point, game and set score, the name of the server, the side
                            on which each player was situated and shall collect all balls in use for the
                            match.
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>6) Warm up / Re-warm up.</HighlightText>
                            {'\n\n'}
                            There shall be a four (4) minute warm-up before a match and in the case of a
                            stopped or postponed match, the period of warm-up shall be as follows:
                            {'\n\n'}
                            a) 0-15 minutes delay — No warm--up;
                            {'\n\n'}
                            b) more than 15 minutes but less than 30 minutes —Three (3) minutes of warmup; and
                            {'\n\n'}
                            c) 30 or more minutes of delay — Four (4) minutes of warm-up [Five (5) minutes
                            at Challengers].
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading2}>N. Video Review (“VR”)</HighlightText>
                            {'\n\n'}
                            The use of VR to determine specific judgment calls is approved for use at events
                            where there is Electronic Line Calling (“ELC”) and the VR system has been approved
                            by ATP.
                            {'\n\n'}
                            The protocol for use is as follows:
                            {'\n\n'}
                            <HighlightText style={RuleStyles.SubHeading3}>a) Reviewable calls</HighlightText>
                            {'\n\n'}
                            i) Not-up – ball bounced more than once prior to contact.
                            {'\n\n'}
                            ii) Foul shot – player carries the ball on the racquet, player contacts the ball
                            before it crosses the net, player’s racquet touches the ball while not under
                            the control of the player.
                            {'\n\n'}
                            iii) Touch – ball touches player, or anything he is wearing or carrying (except
                            racquet), player touches net while ball is in play.
                            {'\n\n'}
                            iv) Invasion – player touches the opponent’s court with any part of his body
                            or his racquet while the ball is in play.
                            {'\n\n'}
                            v) Through – the ball passes through the net instead of passing over the net.
                            {'\n\n'}
                            vi) Hindrance – any decision on whether a point should be awarded, or the
                            point should be replayed. Most common use of this would be a call corrected from out to good and whether the
                            player had a play on the ball.
                            {'\n\n'}
                            vii) Original Call Stands – when a challenge to a line call has properly been
                            made and the line review system is unable to make a determination, the chair umpire may review the
                            call for clear evidence that confirms or overturns the call on the cour.
                        </HighlightText>
                    </ZoomText>
                    <HighlightText style={RuleStyles.Description}>

                        {'\n\n'}
                        viii) Foot-faults
                        {'\n\n'}
                        ix) Scoring error
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>b) Process</HighlightText>
                        {'\n\n'}
                        i) When a reviewable call is challenged, the VR operator will find, through
                        the various camera angles available, the best view of the incident.
                        {'\n\n'}
                        ii) The VR operator will then send the video to a screen attached to the
                        Chair Umpire’s chair.
                        {'\n\n'}
                        iii) The Chair Umpire will review the video and determine if there is clear
                        evidence to support the original decision or to overturn the decision.
                        {'\n\n'}
                        iv) If there is no clear evidence, then the original decision stands.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>c) Limit to Challenges</HighlightText>
                        {'\n\n'}
                        i) Each player will be limited to three (3) incorrect challenges during the set.
                        {'\n\n'}
                        ii) If any set reaches 6-all, each player will receive one (1) additional challenge.
                        {'\n\n'}
                        iii) A review under a) vii) above shall not be recorded as a won/lost challenge.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>O. Time and Equipment Cases</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Crowd Movement</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>The server is given a Time Violation for going beyond the 25
                        seconds that is allowed between points. The server claims that he
                        should have been given additional time because there were some
                        spectators taking their seats.
                        {'\n\n'}

                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Time Violation stands. The continuous play procedures shall be in effect regardless of spectator movement unless
                        the Chair Umpire believes the movement is intended as a deliberate
                        attempt to distract a player(s) or occurs in the designated lowest tier
                        of seats.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Ball Person as Personal Valet</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player receives a time violation from the Chair Umpire while
                        waiting for the ball person to retrieve a towel. The player claims the
                        ball person caused the delay.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Time Violation stands. Toweling off between points
                        with or without the help of a ball person is not a valid reason for
                        delay.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Time Violation, No Play, Results in Code</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player, upon hearing a Time Violation, comes to the Chair
                        Umpire and asks “Why?” He receives an explanation followed by
                        “Let’s Play”. The player continues his discussion and is given a
                        Code Violation. The player appeals to the Supervisor saying he
                        should have received a Time Violation, Point Penalty.
                        Decision: The Chair Umpire suspends play and calls for the Supervisor. Upon arrival, the Supervisor affirms the decision of the Chair
                        Umpire as the player was directed to play when the Chair Umpire
                        said “Let’s Play.”
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Time Violation + 25 Seconds = Code</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player receives a time violation while standing at the back
                        fence. He does not move to play and the Chair Umpire says, “Let’s
                        play”. After another 25 seconds elapses, what does the Chair
                        Umpire do?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> A Code Violation is announced, (and possibly an inquiry,
                        such as, “Are you OK?”) followed by “Let’s Play”.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Two Explanations are Enough</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player asks for an explanation and is given one. He then
                        raises another point and receives another response. How long may
                        this go on?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Normally only twice since continuous play provisions are
                        not being complied with. After two brief responses, the Chair Umpire
                        announces “Let’s Play” and subsequently issues a Code Violation if
                        the ball is not in play as a result of that player’s action.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Changing Shoes</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>May a player receive extra time on a changeover in order to
                        change his shoes and/or socks? If yes, how many times may he do
                        so during the course of the match?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes. The Chair Umpire may allow a reasonable extension
                        of the allotted changeover time in order for a player to change his
                        shoes and/or socks. The player should not be allowed to leave the
                        court in this instance. The player is limited to one change per match
                        when extra time is granted unless the provisions for “equipment out
                        of adjustment” take precedent. In that case, the Chair Umpire has
                        the authority to decide each request on its own merit.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Contact Lens</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>During a match, a player requests permission to leave the
                        court in order to put in a contact lens.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The request to leave the court is denied. Contact lenses
                        shall not be considered as equipment out of adjustment unless the
                        player is wearing them at the time of the incident.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Note </HighlightText>- Every attempt should be made to assist the player so that he
                        may put the contact lenses in during the changeover.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Time: </HighlightText>Refusal to Play
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After several close calls that go against him, a player comes
                        to his chair on the changeover and says, “I’m not playing until the
                        Line Umpire Crew is changed”. After the Chair Umpire calls “Time”,
                        the player says“, I told you I’m not playing until the Line Umpires are
                        changed”. What should the Chair Umpire do?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire should order the player to play and
                        after 25 seconds use the Point Penalty Schedule.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Re-Gripping Racquet</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>During a change of ends, while a player is re-taping the grip
                        of his racquet, the Chair Umpire calls time. The player walks out to
                        the baseline still taping the grip. At the end of the 90 seconds, the
                        player has failed to commence his serve and is still working on the
                        grip.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire issues a Time Violation. The racquet
                        is not equipment out of adjustment and therefore the player must
                        serve within the allotted time. (Rules of Tennis, “Rule 29”.) Similarly,
                        adjusting the position of the strings or fixing string savers is not an
                        excuse for delaying play.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Replacing Shoes</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>During a match, a player requests permission to leave the
                        court area to retrieve another pair of tennis shoes. He states that he
                        is slipping and wants to get a pair of shoes with a different sole from
                        his locker.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The request is denied. However, the Chair Umpire should
                        use all possible means to have the shoes retrieved and brought to
                        the court. This is not considered “Equipment Out of Adjustment”.
                        The shoes could have been brought to the court with the player and
                        changed on-court; however, once he has the shoes, reasonable
                        time is allowed for the change.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Shoe Breaks</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player breaks his shoe and he needs to change, but his
                        second pair is in the locker room.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire should stop play and allow the player
                        to get shoes.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>No Play After 90 Seconds</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player is not ready to play after the ninety (90) second
                        changeover (no injury involved).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> A Time Violation is announced. “Let’s Play” is normally
                        added. The same applies if a player is not ready to play after the
                        120-second set break.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>P. Toilet/Change of Attire Break</HighlightText>
                        {'\n\n'}

                        1) A player may be permitted to leave the court for a toilet or change of attire break.
                        A player is entitled to one (1) toilet or change of attire break during a best of three
                        set match and two (2) toilet or change of attire breaks during a best of five set
                        match. For best of five set matches one toilet break may be taken during the first
                        three sets. The second break may only be taken after the end of the third set. Toilet or change of attire breaks may only be taken on a set break and can be used
                        for no other purpose. The toilet break is limited to a maximum of three (3) minutes
                        from the time the player enters the toilet.
                        {'\n\n'}
                        A change of attire break combined with a toilet break is limited to a maximum of
                        five (5) minutes from the time the player enters the off court changing area/toilet.
                        {'\n\n'}
                        A change of attire break is limited to a maximum of five (5) minutes from the time
                        the player enters the off court changing area/toilet.
                        {'\n\n'}
                        Players will only be allowed to leave the court on a set break to change wet
                        shorts/underwear. Shirts, socks, and shoes should be changed on court.
                        {'\n\n'}
                        Players exceeding the allowed time will be penalized by back-to-back Time Violations.
                        {'\n\n'}
                        a) For doubles, each team is entitled to a total of one (1) toilet or change of attire break in all matches. If partners leave the court together, it counts as the
                        team’s authorized break.
                        {'\n\n'}
                        2) Any time a player leaves the court for a toilet break or a change of attire break, it is considered the authorized
                        break regardless of whether or not the opponent has left the court.
                        {'\n\n'}
                        3) Any toilet break taken after the warm-up has started is considered the authorized
                        break. Additional breaks will be authorized, but will be penalized with the back-toback Time Violations if the player is not ready within the allowed time.
                        {'\n\n'}
                        4) The Chair Umpire has the authority to decide each request for change of attire
                        break on its own merit when provisions of “equipment out of adjustment” take
                        precedent.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Toilet Visit</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>In a best of three (3) set match, a player has used his one
                        toilet visit. The player informs the Chair Umpire that at the next
                        changeover he would like to take another toilet visit prior to his
                        serving.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire may allow a player to leave the court
                        but must inform the player that any delay beyond the 90 seconds
                        will be penalized with the back-to-back Time Violations.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Toilet Visit: When Does Play Resume?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After play has been paused for an authorized toilet visit,
                        <HighlightText style={RuleStyles.SubHeading3}>when does the “clock” start to resume play?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> When the player returns to the court and has had the
                        opportunity to retrieve his racquet, then the Chair Umpire should
                        announce “Time”. This announcement shall signal the players to
                        resume the match.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Q.Medical</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Medical Condition</HighlightText>
                        {'\n\n'}
                        A medical condition is a medical illness or a musculoskeletal injury that warrants
                        medical evaluation and/or medical treatment by the Physiotherapist during the
                        warm-up or the match.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>a) Treatable Medical Conditions</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}> i) Acute medical condition: </HighlightText>the sudden development of a medical illness
                        or musculoskeletal injury during the warm-up or the match that requires
                        immediate medical attention.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>ii) Non-acute medical condition:</HighlightText> a medical illness or musculoskeletal injury that develops or is aggravated during the warm-up or the match and
                        requires medical attention at the changeover or set break.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>b) Non-Treatable Medical Conditions</HighlightText>
                        {'\n\n'}
                        i) Any medical condition that cannot be treated appropriately, or that will not
                        be improved by available medical treatment within the time allowed.
                        {'\n\n'}
                        ii) Any medical condition (inclusive of symptoms) that has not developed or
                        has not been aggravated during the warm-up or the match.
                        {'\n\n'}
                        iii) General player fatigue.
                        {'\n\n'}
                        iv) Any medical condition requiring injections or intravenous infusions, except for diabetes, for which prior medical certification has been obtained,
                        and for which subcutaneous injections of insulin may be administered.
                        For the avoidance of any doubt, the use of supplemental oxygen is not
                        permitted at any time.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Medical Evaluation</HighlightText>
                        {'\n\n'}
                        During the warm-up or the match, the player may request through the Chair Umpire for the Physiotherapist to evaluate him during the next change over or set
                        break. Only in the case that a player develops an acute medical condition that
                        necessitates an immediate stop in play may the player request through the Chair
                        Umpire for the Physiotherapist to evaluate him immediately.
                        {'\n\n'}
                        The purpose of the medical evaluation is to determine if the player has developed
                        a treatable medical condition and, if so, to determine when medical treatment is
                        warranted. Such evaluation should be performed within a reasonable length of
                        time, balancing player safety on the one hand, and continuous play on the other.
                        At the discretion of the Physiotherapist, such evaluation may be performed in
                        conjunction with the tournament Doctor, and may be performed off-court. *
                        {'\n\n'}
                        If the Physiotherapist determines that the player has a non-treatable medical condition, then the player will be advised that no medical treatment will be allowed.
                        {'\n\n'}


                        * It is recognized that national laws or governmental or other binding regulations imposed upon the event by authorities outside its control may require
                        more compulsory participation by the tournament Doctor in all decisions regarding diagnosis and treatment.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) Medical Time-Out</HighlightText>
                        {'\n\n'}
                        A medical time-out is allowed by the Supervisor or Chair Umpire when the Physiotherapist has evaluated the player and has determined that additional time for
                        medical treatment is required. The medical time-out takes place during a change
                        over or set break, unless the Physiotherapist determines that the player has developed an acute medical condition that requires immediate medical treatment.
                        The medical time-out begins when the Physiotherapist is ready to start treatment.
                        At the discretion of the Physiotherapist, treatment during a medical time-out may
                        take place off-court, and may proceed in conjunction with the tournament Doctor.
                        The medical time-out is limited to three (3) minutes of treatment. However, at
                        professional events with prize money of $50,000/€43,000 or less, the Supervisor
                        may extend the time allowed for treatment if necessary.
                        {'\n\n'}
                        A player is allowed one (1) medical time-out for each distinct treatable medical
                        condition. All clinical manifestations of heat illness shall be considered as one (1)
                        treatable medical condition. All treatable musculoskeletal injuries that manifest as
                        part of a kinetic chain continuum shall be considered as one (1) treatable medical
                        condition.
                        {'\n\n'}
                        A total of two (2) consecutive medical time-outs may be allowed by the Supervisor or Chair Umpire for the special circumstance in which the Physiotherapist
                        determines that the player has developed at least two (2) distinct acute and treatable medical conditions. This may include: a medical illness in conjunction with a
                        musculoskeletal injury; two or more acute and distinct musculoskeletal injuries.
                        In such cases, the Physiotherapist will perform a medical evaluation for the two
                        or more treatable medical conditions during a single evaluation, and may then
                        determine that two consecutive medical time-outs are required.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) Muscle Cramping</HighlightText>
                        {'\n\n'}
                        A player may receive treatment for muscle cramping only during the time allotted
                        for changeovers and/or set breaks. Players may not receive a medical time-out
                        for muscle cramping. In cases where there is doubt about whether the player
                        suffers from an acute medical condition, non-acute medical condition inclusive of
                        muscle cramping, or non-treatable medical condition, the decision of the Physiotherapist, in conjunction with the tournament Doctor, if appropriate, is final. There
                        may be a total of two (2) full change of ends treatments for muscle cramping in a
                        match, not necessarily consecutive.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>A player who has stopped play by claiming an acute medical condition, but
                        is determined by the Physiotherapist and/or tournament Doctor to have muscle
                        cramping, shall be instructed by the Chair Umpire to resume play immediately.
                        If the player cannot continue playing due to severe muscle cramping, as determined by the Physiotherapist and/or tournament Doctor, he may forfeit the
                        point(s)/game(s) needed to get to a change of end or set-break in order to receive
                        treatment.
                        {'\n\n'}
                        If it is determined by the Chair Umpire or Supervisor that gamesmanship was
                        involved, then a Code Violation for Unsportsmanlike Conduct could be issued.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>5) Medical Treatment</HighlightText>
                        {'\n\n'}
                        A player may receive on-court medical treatment and/or supplies from the Physiotherapist and/or tournament Doctor during any changeover or set break. As
                        a guideline, such medical treatment should be limited to two (2) changeovers/
                        set breaks for each treatable medical condition, before or after a medical timeout, and need not be consecutive. Players may not receive medical treatment for
                        non-treatable medical conditions.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>6) Penalty</HighlightText>
                        {'\n\n'}
                        After completion of a medical time-out or medical treatment, any delay in resumption of play shall be penalized by Code Violations for Delay of Game.
                        Any player abuse of this medical rule will be subject to penalty in accordance with
                        the Unsportsmanlike Conduct section of the Code of Conduct.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>7) Bleeding </HighlightText>
                        {'\n\n'}
                        If a player is bleeding, the Chair Umpire must stop play as soon as possible, and
                        the Physiotherapist should be called to the court for evaluation and treatment.
                        The Physiotherapist, in conjunction with the tournament Doctor if appropriate,
                        will evaluate the source of the bleeding, and will request a medical time-out for
                        treatment if necessary.
                        {'\n\n'}
                        If requested by the Physiotherapist and/or tournament Doctor, the Supervisor or
                        Chair Umpire may allow up to a total of five (5) minutes to assure control of the
                        bleeding.
                        {'\n\n'}


                        If blood has spilled onto the court or its immediate vicinity, play must not resume
                        until the blood spill has been cleaned appropriately.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>8) Vomiting</HighlightText>
                        {'\n\n'}
                        If a player is vomiting, the Chair Umpire must stop play if vomiting has spilled
                        onto the court, or if the player requests medical evaluation. If the player requests
                        medical evaluation, then the Physiotherapist should determine if the player has a
                        treatable medical condition, and if so, whether the medical condition is acute or
                        non-acute.
                        {'\n\n'}
                        If vomiting has spilled onto the court, play must not resume until the vomit spill
                        has been cleaned appropriately.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>9) Physical Incapacity</HighlightText>
                        {'\n\n'}
                        During a match, if there is an emergency medical condition and the player involved is unable to make a request for a Physiotherapist, the Chair Umpire shall
                        immediately call for the Physiotherapist and tournament Doctor to assist the player.
                        Either before or during a match, if a player is considered unable physically to
                        compete at a professional level, or poses a significant health risk to players, officials or Tournament staff, the Physiotherapist and/or tournament Doctor should
                        inform the Supervisor and recommend that the player is ruled unable to compete
                        in the match to be played, or retired from the match in progress. Additionally, if
                        the Supervisor, in consultation with the tournament Doctor, Physiotherapist, or a
                        representative of the ATP Medical Advisory Board, determines that a player’s participation in a tournament match may put the player at risk due to a life threatening
                        or otherwise serious medical problem, the Supervisor has the authority to rule a
                        player ineligible to compete.
                        {'\n\n'}
                        The Supervisor shall use great discretion before taking this action and should
                        base the decision on the best interests of professional tennis, as well as taking all
                        medical advice and any other information into consideration.
                        When the Supervisor has ruled a player ineligible to play due to circumstances
                        involving a life threatening or otherwise serious medical condition, the player may
                        return to play and be deemed eligible upon receipt by ATP of a written statement
                        from the player’s personal physician concluding that the player’s medical condition is sufficient to play in competition, and the Supervisor, following consultation with the tournament Doctor and/or a representative of ATP Medical Advisory
                        Board (who may require that the player undergo additional testing and obtain a
                        written statement clearing player to return to competition from a specialist physician), indicates that the player is eligible to play.
                        For retirements or withdrawals that are not deemed to be life threatening or otherwise serious medical condition, the player may subsequently compete in another
                        event at the same tournament if the tournament Doctor determines that the player’s condition has improved to the extent that the player may safely physically perform at an appropriate level of play or no longer poses a significant health risk
                        to players, officials or Tournament Staff, whether the same day or on a later day.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>R.Medical Cases</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Delayed Medical Time-Out</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player has an accidental injury and asks to have a medical
                        time-out during the next changeover. What procedure should be
                        used for timing the treatment if the Physiotherapist arrives?
                        {'\n\n'}
                        A. 30 seconds into the changeover?
                        {'\n\n'}
                        B. After 60 seconds has elapsed on the changeover?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision A: </HighlightText>The Physiotherapist has 3 1/2 minutes [but, as a
                        minimum, he has three (3) minutes to treat after completing his
                        diagnosis] to treat the player before the Chair Umpire announces
                        “Time”. The player then has 30 seconds to play, subject to the Point
                        Penalty Schedule.
                        {'\n\n'}

                    </HighlightText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading3}>Decision B: </HighlightText>The Chair Umpire stops the clock at 60 seconds and
                        stops play until the Physiotherapist is ready to treat the player. The
                        three-minute medical time-out begins, and after the Chair Umpire
                        announces “Time”, the player has 30 seconds to play or be subject
                        to the Point Penalty Schedule.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Equipment Out of Adjustment (Knee Brace)</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> During play, a player’s knee brace becomes out of adjustment. The player requests time to repair his knee brace.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The player is allowed reasonable time to repair his knee
                        brace without penalty. Any medical apparatus worn by a player
                        shall be considered as equipment in regards to “Equipment Out of
                        Adjustment”.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Exceeding 90 Seconds: Code Violation</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>If a player is receiving treatment by the Physiotherapist on a
                        90-second change-over, and the treatment goes over the allowed
                        90 seconds, what happens?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> When the Chair Umpire says “Time”, the player must put
                        the ball in play within 30 seconds. Any delay after that will result in a
                        Code Violation.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Medical Time-Out and Re-Warm-Up</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>If eight (8) minutes elapse before the Physiotherapist arrives
                        and treatment begins two (2) minutes later (the medical time-out
                        begins) and is completed after another three (3) minutes, is a rewarm-up authorized?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No, a re-warm-up is not authorized.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Medical Time-Out Request Honored?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player asks for the Physiotherapist. After examination, it is
                        determined by the Physiotherapist that the player is suffering from
                        general fatigue that may not be improved by on-court medical treatment. What course of action should the Chair Umpire take?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire announces, “Let’s Play”, after the
                        Physiotherapist completes his diagnosis. Delays will be penalized in
                        accordance with the Point Penalty Schedule. The Chair Umpire has
                        the option to issue a Code Violation for Unsportsmanlike Conduct in
                        unusual cases.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Medical Time-Out Starts When?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case A:</HighlightText> When does a medical time-out begin?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision A: </HighlightText>Medical time-out begins when the Physiotherapist
                        arrives and is ready and able to treat the player. Thus, the Physiotherapist has completed his examination/diagnosis and the medical
                        time-out starts when the Physiotherapist begins treating the player.
                        Case B: A player asks to see the Physiotherapist during the middle
                        of a game although the Chair Umpire observed no accidental injury.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>What should the umpire do?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision B:</HighlightText> First, tell the player that you will call the Physiotherapist
                        and he can see him at the changeover. If the player insists that he
                        cannot continue, then stop play and call the Physiotherapist. The
                        Physiotherapist will make the decision, upon examining the player,
                        whether a medical time-out is needed.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Only 90 Seconds to Re-Tape</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player turns his ankle, which is taped by the Physiotherapist, and then on the next changeover wants the ankle re-taped.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire may authorize the re-taping which
                        must be completed within the 90-second changeover or the Point
                        Penalty Schedule applies.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Penalties After Medical Time-Out</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> When is the player penalized for going over three minutes on
                        a medical time-out?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> After the Chair Umpire says “Time”; the player must put
                        the ball in play within 30 seconds. Any delay after that will result in a
                        Code Violation. The player is allowed the time necessary to put on
                        shoes, socks, ankle supports, etc.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player receives treatment on a changeover or receives
                        a Medical Time-Out. The player is then slow to resume play after
                        “Time” has been called. What is the appropriate penalty?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The appropriate Delay of Game Penalty (Warning, Point,
                        Game).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After receiving treatment for cramping on the changeover, a
                        player plays one or more points and then is slow to resume play. If
                        the player goes over the allowed time, what penalty does the player
                        receive?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The appropriate Time Violation (Warning, Point/Fault).
                        {'\n\n'}
                        Re-Injury
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player injures his ankle and is granted a three (3) minute
                        medical time-out by the Physiotherapist. Five (5) games later, the
                        player asks for another medical time-out claiming that he has re-injured the same ankle.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The Chair Umpire shall call for the Physiotherapist who
                        shall determine upon examination whether or not a three (3) minute
                        medical time-out is authorized.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Resuming Play After a Medical Time-Out</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case A: </HighlightText>After an injury and a four-minute suspension (by the Chair
                        Umpire) for the arrival of the Physiotherapist, the Physiotherapist arrives and completes the treatment in one and 1/2 minutes. When
                        does play resume?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision A: </HighlightText>Immediately.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case B:</HighlightText> After a player becomes injured, the Physiotherapist treats
                        the player in two (2) minutes. When should play resume?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision B:</HighlightText> Immediately when the player and Physiotherapist are
                        satisfied with the treatment administered, but the treatment is not to
                        exceed three (3) minutes.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Tape Is Not “Equipment Adjustment”</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> During play, a player requests play to be suspended in order
                        for him to adjust the tape on his ankle.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Play must continue. Taping is not considered as “Equipment Out of Adjustment”.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Note:</HighlightText> The Physiotherapist may be called to make adjustments
                        during the 90-second changeover; however, any delays shall be penalized in accordance with the Point Penalty Schedule. If the player
                        makes the adjustment without the help of the Physiotherapist and violates the continuous play rule, then the player shall be penalized in
                        accordance with the penalties set forth under “Unreasonable Delay”,
                        i.e., Time Violation.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Treatment for Fatigue</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> May a Physiotherapist put his hands on a player suffering
                        from what appears to be fatigue?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes. The Physiotherapist then makes the decision regarding a medical time-out.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Treatment:</HighlightText> Within 90 Seconds
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After an even game, a player asks to see the Physiotherapist on the next changeover. The next game ends and 90 seconds
                        elapse without the Physiotherapist arriving on-court. The player
                        asks that the changeover time be extended so that he may receive
                        treatment. His rationale is that the Physiotherapist’s arrival to the
                        court is not the player’s fault.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire suspends play until the Physiotherapist
                        examines the player and determines whether a medical Time-out is
                        needed.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>When to Take a Medical Time-Out?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> What happens if a player is injured during a match and
                        decides not to take his injury time-out right away? (Before the end of
                        the next change-over)
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> A player may call for the Physiotherapist at any time. The
                        Physiotherapist shall determine whether the medical time-out is to
                        be authorized.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Chair Umpire Orders Medical Time-Out</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player has an accidental ankle injury and the Chair Umpire
                        believes that continued play will result in non-professional play. May
                        the Chair Umpire stop play (and call for the Physiotherapist)?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Singles Retirement: Still in Doubles?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player retires from his singles match because of illness or
                        medical reason. May he compete in the doubles competition?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> If upon examination by the tournament Doctor after the
                        retirement and again before the player’s scheduled doubles match,
                        it is determined that the player’s condition has “improved” to the
                        extent that he can compete at a professional level, then the player
                        may continue in the doubles competition. If the player’s condition
                        has not improved then he must not be allowed to compete in the
                        doubles.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>S. Miscellaneous Officiating Cases and Decisions</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Broken String:</HighlightText> First Service Fault
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> On a first service fault, the receiver breaks a string.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> In Singles matches If the receiver changes his racquet,
                        then a first serve will be awarded to the server. If the receiver elects
                        not to change racquets, then the server must play a second serve.
                        In Doubles matches if the receiver changed the racquet with his
                        partner the Chair Umpire should award a second serve unless in his
                        opinion the replacement time was such that the server was delayed
                        in his delivery of a serve.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Broken String: </HighlightText>First Service Let
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>The receiver breaks a string on a first service let.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The receiver must change racquets. A player is allowed
                        to finish the point with a broken string but may not start a point with
                        a broken string.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Broken String: No Racquets</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>The player breaks a string in his last racquet.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The player is not allowed to continue with broken strings.
                        The player is subjected to the penalties set forth in the Point Penalty
                        System for Unreasonable Delay.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Receiver Not Ready</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>The receiver is not ready but looks up as the second serve is
                        hit, reflexes a return and says, “wait.”
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Second serve. The server should observe that the
                        receiver is ready. (If the Chair Umpire believes that gamesmanship
                        is involved on the part of the receivers, then he may issue a code
                        violation for Unsportsmanlike Conduct).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Ball Hits Net Post Signage</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> The ball, while in play, hits the top of the ATP net signage and
                        goes into the proper court.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> ATP net signage will be considered permanent fixtures
                        (other than the net, posts, singles sticks, cord or metal cable, strap
                        or band) and will result in the loss of point.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Ball hits Overhead Camera Cable</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player throws up a lob which is over the court and it hits the
                        cable supporting Spider Cam which is positioned diagonally across
                        the court from the service line to baseline. Is the point awarded to
                        the opponent; is the point replayed; or does play continue?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The cable is considered a permanent fixture and therefore, it is a loss of point.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Invasion: </HighlightText>Ball in Play
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player’s dampening device flies out of his racquet and
                        touches the net or goes into his opponent’s court.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> If the ball was still in play, the player loses point. The
                        dampening device shall be considered a part of the racquet.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Invasion: </HighlightText>No Replay
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After the point has been completed, player discovers opponent’s dampening device lying in his court. The player claims a point
                        based on Rules of Tennis, rule “Rule 24”).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The point stands as played. Since the Chair Umpire did
                        not see the dampening device land in the opponent’s court, he may
                        not rule that an invasion occurred. Invasion occurs only when the
                        ball is in play. Since the Chair Umpire did not know the timing of the
                        incident, he may not assume that an invasion did occur.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Player Hits Net Pipe Support</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player touches a “pipe support” with his foot while the ball
                        is in play.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>In this case the “pipe support” is to be considered as part
                        of the net; thus if a player touches it while the ball is in play, he loses
                        the point.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Touching Net or Opponent’s Court</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> If while the ball is in play a player’s foot slides under the net
                        but does not touch the net, should this still be considered a “touch”
                        since the net should have extended fully to the court surface?
                        Decision: No. This cannot be considered a “touch” if the player did
                        not actually touch the net. It is likely, however, that an invasion has
                        occurred from the player’s foot touching his opponent’s court. If this
                        did occur, then the Chair Umpire shall call an “invasion” and award
                        the point to the player’s opponent.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Ball Touches Net Pipe Support</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> The ball falls over the net and hits the “pipe support ”used on
                        indoor courts.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> In this case, the “pipe support” is to be considered as
                        part of the court; thus when the ball hit the pipe, it would be ruled as
                        a first bounce.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Player Touches Net Outside of Singles Stick</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player runs for a drop shot and returns it into the opponent’s court and then runs into net between net post and singles
                        stick. What is the ruling?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Play continues. This part of the net is considered a permanent fixture.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Ball Rolls Onto Court</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText>  After a first service fault, a ball comes into the court from
                        another court.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> If the server has started his motion, then a first serve
                        shall be awarded. In other cases, a second serve shall be played unless in the opinion of the Chair Umpire the delay was unusually
                        long and unfairly disrupted the rhythm of the server.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Umpire Unsighted</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A Line Umpire is unsighted and the Chair Umpire cannot
                        make the decision.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The point is replayed, except in the case where it was
                        discovered after the point had been completed that during a rally a
                        Line Umpire had been unsighted. In that case, the point would stand
                        as played.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Intimidating Line Umpire</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A serve is hit near the sideline and the receiver, hearing no
                        call, immediately turns around and screams at the Line Umpire. The
                        Line Umpire, who had signaled good, then calls and signals out.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire rules the serve good based on the Line
                        Umpire’s original call. The Supervisor, if called, upholds the Chair
                        Umpire’s decision based on an official not changing his call based
                        on a player appeal.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Note:</HighlightText> The Chair Umpire may have to ask for the Line Umpire’s
                        original call if he is uncertain or disregard the Line Umpire’s call and
                        make the call himself.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Service Order</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> In a doubles match, Team A serves out of order. After two
                        points have been played, the Chair Umpire realizes the mistake.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The Chair Umpire should correct the mistake immediately.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Receiving Order</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>In a doubles match, the players on the team switched their
                        receiving positions during the set. When this is realized, what action
                        should the Chair Umpire take?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The original receiving positions of each player on that
                        team must be taken after the completion of the game in progress.
                        If error occurred during a tie break, then the receiving order shall
                        remain as altered until the completion of the tie break game.

                        {'\n\n'}

                    </HighlightText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule111', next: 'Rule113', nav: navigation }} />
        </>
    );
}
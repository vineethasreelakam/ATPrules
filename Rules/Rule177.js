import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule177({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT T.1 - Review Electronic Line Calling System (Review ELC)</HighlightText>{'\n\n\t'}
            A Line calling system with a challenge process (Line Umpires on-court)


            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>Review ELC Official (RO) Protocol
            </HighlightText>{'\n\n'}
            {'\n\n\t\t'}• RO shall be in direct communication with the CU.
            {'\n\n\t\t'}• Most desirable method is a direct talk box with a “push to talk” button. The alternative is dedicated walkie-talkie.
            {'\n\n\t\t'}• If using a computer to record the challenges load proper match into it.
            {'\n\n\t\t'}• On all “potential” review impacts – Make sure you listen to the CU announcement
            (which line and call made) – if in any doubt radio the CU to double-check. For
            additional information, see Review Official Protocol for a Challengeable shot
            {'\n\n\t\t'}• Alert system operators to a possible Challenge by announcing “STANDBY” Confirm that a Challenge has been requested or anticipate that there will be no Challenge. “Release to television” announcement establishes the time when the video
            may be sent the television.
            {'\n\n\t\t'}• This applies to when either the RO determines that a Challenge will not be made
            or cannot be made. A visual indication that the player has accepted the call and a
            Challenge is not likely. Circumstances when a Challenge cannot be made would
            include an improper Challenge (not a point-ending shot) or when the player has no
            Challenges remaining. Responsible for determining that the requested impact is
            available for review.
            {'\n\n\t\t'}• RO is responsible to send the correct shot and correct line to the videoboard for
            the Challenge. The RO must listen to the CU announcement (which line was challenged). And double-check if the correct ball is requested. If any doubt, confirm
            with the CU before sending to the board.
            {'\n\n\t\t'}• Once the proper impact is determined, gives the order to send to video board and
            television simultaneously. The On- Court Board should be sent first if 2 different
            inputs need to be sent.
            {'\n\n\t\t'}• Responsible for monitoring the status of the system.
            {'\n\n\t\t'}• If the system crashes or is not functioning, the RO must immediately notify the CU
            so that the players may be informed that no review is available until further notice.
            {'\n\n\t\t'}• If the RO’s monitor cannot retrieve the data to review the call, then the RO shall
            notify the CU that the original call shall stand.
            {'\n\n\t\t'}• If the RO’s monitor is working properly but it is the Main Video Board (in-stadium
            video) that is malfunctioning, then the RO will notify the CU of the decision via
            radio or other communication device. The CU should inform the players of this at
            the first opportunity.
            {'\n\n\t\t'}• Will notify the CU when the system is back and available for review (if the RO is
            satisfied that the cause has been identified and corrected).
            {'\n\n\t\t'}• The RO shall notify the CU at the first available time, including during a game in
            progress. Before returning to “live” mode:
            {'\n\n\t\t'}• Ensure that the operators have performed all their protocols when returning a system to “go” status following a crash or restart of the system.
            {'\n\n\t\t'}• Act as the final authority on the number of Challenges remaining for each player or
            team.
            {'\n\n\t\t'}• Since available Challenges will be displayed on the video board, the RO is responsible for the correct number of the Challenges to be displayed (including the additional Challenges in a tie-break or re-setting after the set break). If the video board
            operator is changing the Challenges on cue from the CU, then only verification is
            needed.
            {'\n\n\t\t'}• If a Challenged call is not available for review – this shall not count against the
            total of the challenging player.
            {'\n\n\t\t'}• Ensure that the RO and CU communicate verbally when one player or team has
            only 1 and no (0) Challenges remaining.
            {'\n\n\t\t'}• Ensure that communication between RO and CU regarding the number of Challenges is made in a timely manner and considering pace of the match.



            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>Video Board
            </HighlightText>{'\n\n\t\t'}
            • During the warm-up, the following statement shall appear on the video board
            and remain visible for at least 90 seconds. This should coincide with the Announcer’s introductions (if an announcer is used).
            “This match will use Electronic Review as an officiating aid. Each player (team)
            will have three incorrect Challenges per set, plus one more in a tiebreak. Challenges must be made in a timely manner and can only be made on point-ending
            shots or when a player stops play. If, for any reason, Electronic Review of the
            call is unavailable, the original call will stand.”
            {'\n\n\t\t'}• There shall not be any review shown in the Stadium except for “Official Review”
            challenges. The RO is responsible for the correct communication with the operators.
            {'\n\n\t\t'}• The in-stadium video shall not replay “live” action on any controversial or reviewed call.
            {'\n\n\t\t'}• If video replays are shown between points or if the video goes live between
            points, the operator shall return to the scoreboard just prior to the serving player
            taking his position at the baseline.
            {'\n\n\t\t'}• Once it is confirmed that a Challenge has been made:
            {'\n\t\t\t'}- The RO shall have direct communication with the operator of the video
            board and will give verbal instructions on when to show review.
            {'\n\t\t\t'}- When the RO has confirmed the impact-image is correct then the RO
            gives the order to send the result to board or if the RO has control of the
            board then sends the result personally. When sending Challenge to the
            board, make sure to check that what is displayed on the stadium scoreboard is the same (same line) that was confirmed with the operator and
            was challenged.
            {'\n\t\t\t'}- Video shows the tracking of the ball into and out of the impact area, and
            then the view angle is moved to show the impact mark. The “flyover” mode
            is used to slow the process down “to build the moment”.
            {'\n\n\t\t'}• Graphic includes “Official Review”.
            {'\n\n\t\t'}• Graphic at bottom of the screen shows “IN” or “OUT”. The “in” / “out” will not
            appear until after the overhead zoom to enhance the drama of the video. Television will receive the exact same feed as the video board with the graphic
            <HighlightText style={RuleStyles.SubHeading3}>“OFFICIAL REVIEW”</HighlightText>
            and showing
            <HighlightText style={RuleStyles.SubHeading3}>“IN” or “OUT”.</HighlightText>
            {'\n\n\t\t'}• If review is not available, the RO shall notify the CU and then while the CU is
            informing the players, the graphic “Review Not Available - Original Call Stands”
            shall be sent to the video board. Reviews not available shall not count against
            the challenging players’ total.
            {'\n\t\t\t'}- The graphic is held until the players have reached the baselines preparing
            to play, at which time the board returns to the main scoreboard view.
            {'\n\t\t\t'}- The video board(s), scoreboard(s) or other location(s) must always show
            number of remaining Challenges for each player. This information must be
            part of the scoreboard build.



            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>
              Announcing
            </HighlightText>{'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>
              Chair Umpire
            </HighlightText>{'\n\n\t'}
            When a Challenge is made:
            {'\n\n\t\t'}• The Player shall clearly express their desire to have the call reviewed by stating, “I
            Challenge”. If the CU is not 100% sure that the Player is Challenging, then the CU
            shall confirm with the Player prior to announcing the Challenge request. When the
            CU is satisfied that a proper Challenge request has been made, then:
            {'\n\t\t\t'}o CU shall announce over the microphone “Mr./Ms. _______ is Challenging the
            call on the Base Line (give specific line) the ball was called IN/OUT”.
            {'\n\n\t\t'}• After the review, CU should announce “The call stands, or the call is overturned.
            Then announce the score if point is awarded or replay the point and then repeat
            the previous score. Depending on the timing, try to also announce “Mr./Ms. X has
            X Challenges remaining” when there is a reduction.
            {'\n\n\t\t'}• If the review is not available, simply say (after informing the players) “Review is
            unavailable; the original call of IN/OUT stands. No Challenge is charged to Mr./Ms.
            _______.”
            {'\n\n\t\t'}• In the case where the line umpire is unsighted and the CU cannot make the call,
            if the umpire asks for a review then he shall inform the crowd of this procedure by
            stating, “line umpire was unsighted – the call shall be reviewed”.
            {'\n\n\t\t'}• Announce the additional Challenges available at the start of each tiebreak.
            {'\n\n\t\t'}• After announcing 6-games all – tie-break, announce “Both players/teams receive
            one additional Challenge.”
            {'\n\n\t\t'}• If there are no in-Stadium Video Boards or if there is a malfunction and they are not
            available for use, then the CU shall use the following procedures:
            {'\n\t\t\t'}o The RO will communicate the result of the Challenge to the CU via the radio, using the following wording: “Call Challenged by [name of player] on the
            [name of the line]: the ball is IN/OUT”.
            {'\n\t\t\t'}o The CU will acknowledge the good reception of the information by immediately answering the RO using the following wording: “The result of the challenged call on the [name of the line] is IN/OUT”.
            {'\n\t\t\t'}o If the review is not available, simply say (after informing the players) “Review
            is unavailable; the call (in/out) stands”.
            {'\n\n\t\t'}• In the event the video screen shows the mark OUT and the “IN/OUT” text graphic
            shows IN or the video screen shows the mark IN and the “IN/OUT” text graphic
            shows OUT, the protocol is as follows:
            {'\n\t\t\t'}o The mark determines IN / OUT not the text graphic.
            {'\n\t\t\t'}o The CU should communicate with the RO to ensure that is correct.
            {'\n\t\t\t'}o The corrected text graphic should be displayed on the big screen, so players,
            officials and spectators see the corrected mistake.


            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>
              Additional REVIEW ELC procedures Specifically for Hawk Eye
            </HighlightText>{'\n\n\t\t'}
            • The RO will instruct the Hawkeye Operator that when the command “Stand By”
            is given, the operator will immediately say if the ball is “in” or “out” and give the
            measurement.
            {'\n\n\t\t'}• Confirm specifically with the VR Operator that:
            {'\n\t\t\t'}o The system is set for the appropriate event (singles or doubles)
            {'\n\n\t\t'}• During warm-up, view at least one (1) test review.
            {'\n\n\t\t'}• At 1 min. announcement, confirm with the System Operator and the VR Operator
            that all systems are good to go.
            {'\n\n\t\t'}• In doubles, when the score reaches “Deuce” – deciding point, tell the Hawkeye
            Operator if the receiver will be from the “Deuce” or “Advantage” side.
            {'\n\n\t\t'}• Before sending the Challenge to the video board double-check that the distance
            and the decision “IN” or “OUT” given by the Hawk eye operator is corresponding
            with the image on the RO screen (serve, rally, singles, doubles etc.)


            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>
              Additional REVIEW ELC Procedures Specifically for FoxTenn
            </HighlightText>{'\n\n\t'}
            In general, the role of the RO when working with FoxTenn is the same but there are
            some differences, which are going to be mentioned here.
            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading3}>Pre-match:</HighlightText>
            {'\n\n\t\t'}• Check with the Operator that they have calibrated the lines for the appropriate
            event – singles or doubles.
            {'\n\n\t\t'}• During the warmup look at one image of the ball to make sure the system is ready.
            {'\n\n\t\t'}•
            <HighlightText style={RuleStyles.SubHeading3}>When the match starts:</HighlightText>

            {'\n\n\t\t'}• When giving “Standby”, the RO must also give the exact line. So, for example:
            “Standby –left near sideline”.
            {'\n\n\t\t'}• For FoxTenn it’s very important to give the “Standby” as soon as possible because
            they must capture the image immediately to avoid long delays. So, the RO should
            be giving more “Standby” commands. Give the “Standby” every time if there is any
            chance there will be a Challenge.
            {'\n\n\t\t'}• When the Challenge is made the RO will be looking at the live image and needs to
            confirm the bounce on the live image. There will be no numbers on the screen, so
            it’s
            <HighlightText style={RuleStyles.SubHeading3}>IMPERATIVE</HighlightText>
            that the RO watch the match all the time to know which bounce
            it is.
            {'\n\n\t\t'}• When the VR operator says “ready”, the RO should have graphic image of the
            mark on the RO’s screen with the decision “in” or “out” written. Then the RO can
            send the Challenge to the video board.
            {'\n\n\t\t'}• When the Challenge is shown on the video board there are two images shown: the
            live image of the ball and graphic image of the mark with the decision “in” or “out”.
            There may be instances when only one of those two images will be shown.
            {'\n\n\t\t'}• Do not “Release” the Challenge too early. It’s better to hold it longer, until the RO is
            100% sure there will be no Challenge, or the next point is about to start. If the RO
            has a Challenge after it was released, it will cause a longer delay.
            {'\n\n\t\t'}• There will be no distances given from FoxTenn, only “in” or “out”.
            {'\n\n\t\t'}• As FoxTenn operates differently than Hawkeye, there is no option to look at some
            of the close balls from the points played, so, do not ask for that.
            {'\n\n\t\t'}•
            <HighlightText style={RuleStyles.SubHeading3}>IMPORTANT</HighlightText>
            to remember
            <HighlightText style={RuleStyles.SubHeading3}>LANGUAGE</HighlightText>
            to use:
            {'\n\t\t\t'}o
            <HighlightText style={RuleStyles.SubHeading3}>STAND BY </HighlightText>
            and the line (ex. STAND BY LEFT BASE)
            {'\n\t\t\t'}o
            <HighlightText style={RuleStyles.SubHeading3}>WORK ON IT </HighlightText>
            (when it’s not sure if the ball will be Challenged)
            {'\n\n\t\t'}• The CU’s chair is shown in a different position based on which camera is in use,
            but the
            <HighlightText style={RuleStyles.SubHeading3}>ORIENTATION POINT IS ALWAYS</HighlightText>
            the CU’s chair, so, left base will always
            be left base in relation to the CU’s chair, regardless of what side of the screen the
            chair is located at that particular Challenge.



            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>
              Additional REVIEW ELC Procedures Specifically for FlightScope
            </HighlightText>{'\n\n\t'}
            At the beginning of the match Remember to check the
            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading3}>1. INITIAL SCREEN</HighlightText>
            {'\n\n\t\t'}• To ensure the correct match is loaded
            {'\n\n\t\t'}• To ensure the player names are at the correct side of the court (after the coin toss)
            {'\n\n\t\t'}• To ensure the number of Challenges for each player is correct.
            {'\n\n\t\t'}• When there is a Challenge press the button
            <HighlightText style={RuleStyles.SubHeading3}>START CHALLENGE.</HighlightText>

            {'\n\n\t'}2. When the RO presses
            <HighlightText style={RuleStyles.SubHeading3}>START CHALLENGE</HighlightText>
            the RO will see
            <HighlightText style={RuleStyles.SubHeading3}>(WAITING FOR DATA)</HighlightText>
              {'\n\n\t\t'}• If DATA is displayed go to point 3,
              {'\n\n\t\t'}• if DATA NOT AVAILABLE is displayed, go to Point 8
            {'\n\n\t'}3. If DATA is received the RO will have to choose the ball, which the RO can do in 2
            ways:
            {'\n\n\t\t'}• Press the dot with the number on the court (after the dot is pressed it will become
            red), or
            {'\n\n\t\t'}• Press the number at the bottom of the screen (yellow balls above
            <HighlightText style={RuleStyles.SubHeading3}>“CHOOSE BALL”</HighlightText>
            writing)

            {'\n\n\t'}4. After choosing the ball, the RO needs to double-check if the RO has chosen the
            correct ball and
            <HighlightText style={RuleStyles.SubHeading3}>CONFIRM BALL</HighlightText>

            {'\n\n\t'}5. Next step is to confirm/change the area (darker grey color) to the correct area
            {'\n\n\t\t'}• If it is a serve, then one of the service boxes should be in darker color – if it’s incorrect, touch the screen to change the box
            {'\n\n\t\t'}• If it is a rally, the whole half of the court (singles/doubles) should be in a darker
            color.

            {'\n\n\t'}6. When the RO confirms the area, the RO will see the screen with the information:

            <HighlightText style={RuleStyles.SubHeading3}>“WAITING FOR RESULT” If NO SHOTS WERE RECEIVED go to point 8.
            </HighlightText>
            {'\n\n\t'}7. After the RO receives the result the RO will have to
            <HighlightText style={RuleStyles.SubHeading3}>PREVIEW the Challenge</HighlightText>
            – if
            everything is good and correct, press:
            <HighlightText style={RuleStyles.SubHeading3}>START ANIMATION </HighlightText>
            (system won’t let the RO
            send the Challenge to the board before the RO previews the Challenge)


            {'\n\n\t'}8. At point 2 or 6 the RO might receive the screen with the information
            <HighlightText style={RuleStyles.SubHeading3}>“NO DATA RECEIVED” </HighlightText>
            or
            <HighlightText style={RuleStyles.SubHeading3}>“NO SHOTS WERE RECEIVED”</HighlightText>
            {'\n\n\t\t'}• If
            <HighlightText style={RuleStyles.SubHeading3}>“NO SHOTS WERE RECEIVED”</HighlightText>
            , the procedure is to ask the operator: “Do you
            have it?”
            {'\n\t\t\t'}o <HighlightText style={RuleStyles.SubHeading3}>YES</HighlightText> –the operator will input the rally from their computer to the tablet or
            {'\n\t\t\t'}o
            <HighlightText style={RuleStyles.SubHeading3}>NEED MORE TIME</HighlightText>
            – the operator will look for the rally and input it to the
            tablet or
            {'\n\n\t\t'}
            <HighlightText style={RuleStyles.SubHeading3}>• In both cases the RO needs to go back to the original procedure – DATA
              available Point 2/ SHOT available Point 7)</HighlightText>
            {'\n\n\t\t'}•
            <HighlightText style={RuleStyles.SubHeading3}>NO – ORIGINAL CALL STANDS </HighlightText>
            (the RO presses the red button located under
            match time in the right top corner), see below


            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}>IMPORTANT INFORMATION:
            </HighlightText>{'\n\n\t'}
            1. Any time that the RO presses the button
            <HighlightText style={RuleStyles.SubHeading3}>START CHALLENGE
            </HighlightText>
            the system is
            <HighlightText style={RuleStyles.SubHeading3}>LOCKED
            </HighlightText>
            and is not recording anything further, the RO has buttons that can be used
            in case a Challenge is not happening or has been cancelled:
            {'\n\n\t\t'}• If
            <HighlightText style={RuleStyles.SubHeading3}>“WAITING FOR DATA” or “WAITING FOR RESULT” press DISMISS
            </HighlightText>

            {'\n\n\t\t'}• In any other case press
            <HighlightText style={RuleStyles.SubHeading3}>RELEASE
            </HighlightText>
            (located in the bottom right corner)
            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading3}>NOTE:
            </HighlightText>
            It is very important to
            <HighlightText style={RuleStyles.SubHeading3}>DISMISS/RELEASE
            </HighlightText>
            as soon as it is known that there
            won’t be a Challenge to have the system fully functioning.
            {'\n\n\t'}2. Another button that the RO can see is
            <HighlightText style={RuleStyles.SubHeading3}>BACK
            </HighlightText>
            – it can be used to go one step back at
            the time.
            {'\n\n\t'}3. In point 7 the RO sees the button
            <HighlightText style={RuleStyles.SubHeading3}>REPLAY
            </HighlightText>
            – which can be used to replay the preview
            of the Challenge as many times as needed before the RO
            <HighlightText style={RuleStyles.SubHeading3}>START ANIMATION.
            </HighlightText>

            {'\n\n\t'}4. In point 3-5 two buttons can be seen -
            <HighlightText style={RuleStyles.SubHeading3}>PREVIOUS and NEXT
            </HighlightText>
            – this is the option to
            see all the bounces (long rally) as on the RO’s screen when the RO presses
            <HighlightText style={RuleStyles.SubHeading3}> START CHALLENGE
            </HighlightText>
            the RO will see the last 5 bounces –
            <HighlightText style={RuleStyles.SubHeading3}> It is strongly recommended
              NOT TO USE these buttons
            </HighlightText>
            unless necessary (there should be no reason to allow
            the Challenge of the ball that is 5 shots or more back).
            {'\n\n\t'}
            This system is provided by FlightScope, who at some events is also providing other
            services (e.g. Scoreboards).
            {'\n\n\t'}
            At some events whenever the RO presses
            <HighlightText style={RuleStyles.SubHeading3}> START ANIMATION
            </HighlightText>
            it will go directly to the
            scoreboard and will automatically go off-board when the animation is finished (the RO
            will have the option to press the button

            <HighlightText style={RuleStyles.SubHeading3}> OFF BOARD
            </HighlightText>-located in the bottom left cornerearlier if needed).
            {'\n\n\t'}
            If FlightScope is not operating the scoreboards there will be an extra step when the
            RO releases it, the Challenge will be sent to the vendor who will be responsible to
            send to the board.

            {'\n\n\t'}
            <HighlightText style={RuleStyles.SubHeading2}> Review Official Protocol for Challengeable Shot
            </HighlightText>
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule177.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
        </ScrollView>
      
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule176', next: 'Rule178', nav: navigation }} />
    </>
  );
}


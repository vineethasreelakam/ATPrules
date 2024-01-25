import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule178({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT T.2 - Live Electronic Line Calling System (LIVE ELC)</HighlightText>{'\n\n'}
            A line calling system making automated line calls with no Line Umpires on-court.

            <HighlightText style={RuleStyles.SubHeading2}>LIVE ELC Review Official Procedures and Protocols
            </HighlightText>{'\n\n'}
            The players do not have any challenges when using the LIVE ELC and therefore the
            RO duties are different than when using the REVIEW ELC system.
            Review Booth Procedures
            {'\n\n'}• Prior to the first match of the day, confirm with the System operators that all sound
            and system checks have been completed, if not please request a sound and system check.
            {'\n\n'}• Communication to the CU should be limited to essential communication as live
            microphones are on court.
            {'\n\n'}• Confirm that close calls have been tested and sent to the board.
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            The RO should not do sound checks or close call checks to the board upon
            arrival in the booth other than prior to the first match. This will disturb the production of the event and could be heard on television broadcast which should be
            avoided. If any issue, it is always suggested to do an extra check if possible.
            {'\n\n'}• Confirm specifically the system is:
            {'\n\t'}o Set for the right event
            <HighlightText style={RuleStyles.SubHeading3}>singles/doubles. </HighlightText>
            If singles confirm regular scoring is
            activated. If doubles confirm no-ad scoring is activated.
            {'\n\t'}o At 1 min in the warmup confirm system is armed and ready to go.
            {'\n\n'}• Perform a radio test with the CU during the warm-up to make sure the CU’s radio
            is on and to find out who is serving first.
            {'\n\t'}o Inform the Operator who is serving first and from which end of the court.
            {'\n\n'}• The RO has a monitor that will show 3 camera angles. The camera should be set
            to watch the server and it is the responsibility of the RO to call foot faults if they
            occur.
            {'\n\t'}o Foot fault cameras are available for center serve and the base line on both
            ends. To toggle between each end, use the F1 and F2 keys on the keyboard.
            The CU is responsible for calling sideline foot faults.
            {'\n\t'}o If a foot fault occurs press the foot fault button making sure to wait until the
            player has struck the ball. This will make an audible “foot fault” call over the
            speakers.
            {'\n\n'}• If any foot fault camera becomes inoperable either by loss of video or it is knocked
            the RO should inform the operating staff so they can send someone down to fix it. If
            the RO can still call foot faults using the other cameras they should continue to do
            so. If ALL cameras lose video or the foot fault camera PC crashes, the RO should
            communicate this with the CU and inform them they will need to call foot faults
            from the chair until the cameras are operational again. Once cameras resume
            operation, inform the CU that the RO can start calling foot faults again.
            {'\n\n'}• Close calls will be shown on the board in one of two ways depending on system
            set up. Automatically or Manually.
            {'\n\t'}
            <HighlightText style={RuleStyles.SubHeading3}>o Automatic System: </HighlightText>
            Automatic replays of close calls will be shown on the video boards (if video boards are available).
            These replays will be on
            <HighlightText style={RuleStyles.SubHeading3}> point-ending non-service shots  </HighlightText>
            that are in or out by 150mm or less. The replays will
            be of
            <HighlightText style={RuleStyles.SubHeading3}> point-ending service shots </HighlightText>
            that are in or out by 50mm or less.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note:  </HighlightText>
            Close calls between first and second serves
            <HighlightText style={RuleStyles.SubHeading3}> that can disturb play </HighlightText>
            should be
            cancelled from going to board by the RO using the cancel button.
            {'\n\t'}
            <HighlightText style={RuleStyles.SubHeading3}>o Manual System: </HighlightText>
            The system works the same as above except the close calls
            do not go automatically to the board. The RO is responsible for sending close
            calls to the board and taking them off again. Normally this is done simply with
            the press of a button.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            Close calls between first and second serves that can disturb play should
            not be sent to the board by the RO.
            {'\n\n'}• If a player wants to see a replay of a shot outside of this range (150mm & 50mm)
            the CU should announce “Mr./Mrs. (players name) is requesting the replay of the
            call on the (line)” to alert the RO and the operator. Play must not continue until the
            replay has been shown on the board.
            {'\n\n'}• If it is suspected that the LIVE ELC System malfunctioned or failed to decide on a
            call this call may be made by the CU. This protocol will only apply on point ending
            shots or when a player stops play.
            {'\n\n'}• The CU should communicate with the RO to confirm if the system was able to
            decide.
            {'\n\n'}• If the RO can confirm the ball is “in” or “out” then the CU should acknowledge the
            result and inform the players.
            {'\n\n'}• If the system is not available and the CU is unable to make a call, the point should
            be replayed.
            {'\n\n'}• There is sometimes a slight delay on the “out” call. This can in some situations
            create confusion and if this happens the CU might contact the RO. The RO should
            confirm the outcome of the call.
            {'\n\n'}• If play continues after the Electronic Line Calling Live System has determined a
            ball is out, the RO should deploy the Stop Play Protocol from the booth by pressing
            the stop play button triggering an audible “Stop, Stop” announcement on court.
            The RO should communicate the explanation of the out call to the CU and the CU
            should inform the players of the decision by the system.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            This can happen for a number of reasons, players and CU did not hear the
            audio out call, the audio out call failed, the operator has stopped the point too early
            effectively disarming the system so there is no audio call.
            {'\n\n'}• The RO has the
            <HighlightText style={RuleStyles.SubHeading3}> responsibility </HighlightText>
            of making sure that the correct service box is
            selected by the operator at the start of every point. A view of the court should be
            visible on the ROs screen with a highlighted service box. The highlighted service
            box indicates the “active” box to which the system shall decide if the serve is in or
            out. On any match where the “no-ad” scoring system is being used
            when the score
            reaches “deuce” the RO should inform the operator if they will be serving to the
            <HighlightText style={RuleStyles.SubHeading3}> deuce or advantage </HighlightText>
            court.
            {'\n\t'}o If the RO sees, for any reason, that the wrong box is highlighted before the
            start of the point, they should immediately tell the operator to change to the
            correct box before the serve is hit.
            {'\n\n'}<HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            It is very important to always keep a close eye on the service box selection
            by the operator especially if anything odd or unusual happens during the point.
            Let 1st serves, let 2nd serves, let replay the point, touch, are just a few unusual
            situations where the operator may not be aware of what has happened and may
            have the incorrect score and therefore the incorrect service box highlighted.
            {'\n\n'}• On “let” serves repeat “let 1st’ serve” or “let 2nd serve” to ensure the operator
            knows whether it is a 1st serve or 2nd serve.
            {'\n\n'}• If there is a malfunction of the LIVE ELC System and it is not functional the match
            must be
            <HighlightText style={RuleStyles.SubHeading3}> stopped. </HighlightText>
            The RO should contact the CU immediately and inform the CU
            that the system is not operational. The supervisor/referee should also be contacted
            {'\n\t'}o The RO should keep in radio contact with the CU and supervisor/referee and
            inform them on how long it is expected before the system is again operational.
            {'\n\t'}o The supervisor/referee will then decide on how/when/where the match will
            resume again.
            {'\n\t'}o If it is deemed the system will be operational in a short reasonable time the
            players will wait on court and resume play when the system is available.
            {'\n\t'}o If it is deemed the system will not be available in a reasonable time, the
            supervisor/referee will decide on another option. These could include suspending the match, moving the match to another court, using line umpires (if
            available), postponing the match or continuing the match without the system
            and the CU calling
            <HighlightText style={RuleStyles.SubHeading3}>ALL</HighlightText>  the lines.
            {'\n\t'}o The RO should note the time of the match and the score when the system
            became unavailable and also the time when the system became available
            again. The Lead RO should then be informed of this either at the end of the
            shift or between matches.
            {'\n\n'}• The RO should record the time and the score of any system malfunctions or unusual situations with the LIVE ELC System and report them to the Lead RO after
            their shift or between matches.
            {'\n\n'}• If the LIVE ELC System is operational but the audio speakers around the court
            fail the match should not be stopped. The CU must use the LED lights (green and
            red) on the chair to determine if the ball is “in” or “out” and must call audibly by
            themselves.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule177', next: 'Rule179', nav: navigation }} />
    </>
  );
}


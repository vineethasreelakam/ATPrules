import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule58({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>V. PERSONNEL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>5.07 Chair Umpire / Review Official</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}> A.Assignment and Designation Process</HighlightText>
            {'\n\n'}
            1) ATP Tour Tournaments. Officials required to support the tournament are as follows:
            {'\n\n'}
            ATP shall hire designated Chair Umpires as follows:
            {'\n\n'}
            <HighlightText style={RuleStyles.underlineTextStyle}>Main Draw Size (Singles)</HighlightText><HighlightText style={RuleStyles.underlineTextStyle}> Total # of chair Umpires</HighlightText>
            96 9
            {'\n\n'}
            56 7
            {'\n\n'}
            48 5
            {'\n\n'}
            32 4
            {'\n\n'}
            28 4
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>NOTE:</HighlightText>  In the event the tournament elects to employ the services of an electronic
            line calling system, ATP will hire a Review Official in addition to the Chair Umpires
            as stated above.
            Each tournament is required to provide supplemental Chair Umpires approved
            by ATP for the qualifying competition as well as for some main draw matches
            not covered by the designated Chair Umpires hired by ATP. Supplemental Chair
            Umpires must have international certification of Gold, Silver or Bronze.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments.</HighlightText>Tournaments must hire Chair Umpires as
            specified below:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) Chair Umpires.</HighlightText> Each tournament shall have a minimum of four (4) designated Chair Umpires for the entire week as selected and coordinated by ATP.
            Under special circumstances, ATP may require additional Chair Umpire(s) to
            be hired by the tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b) Supplemental Chair Umpires.</HighlightText> Each tournament shall provide supplemental
            Chair Umpires approved by ATP for matches not covered by the designated
            Chair Umpires. Supplemental Chair Umpires must have certification of Gold,
            Silver, Bronze or White.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.Fees and Expenses</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>ATP Tour and ATP Challenger Tour Tournaments.</HighlightText>
            {'\n\n'}
            ATP shall pay the fees and travel expenses of the designated Chair Umpires and
            review officials (if any) hired by ATP
            {'\n\n'}
            Each tournament must provide each designated Chair Umpire and Review Official (if any) with single room hotel accommodations, meals and laundry. Complimentary rooms shall be in the player hotel or another hotel approved by ATP or
            the Supervisor.
            {'\n\n'}
            Each ATP Challenger Tour tournament shall pay a fair and reasonable fee and
            travel expense to each Chair Umpire hired by the tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>C.Genera</HighlightText>
            {'\n\n'}
            Chair umpires are assigned matches by the ATP Supervisor and are responsible to
            ensure those matches are conducted according to the rules of ATP in order to present
            a professional tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>D.Responsibilities</HighlightText>
            {'\n\n'}
            1) Enforce all ATP Rules and Regulations and on-court procedures to ensure accuracy, fairness and safety. Ensure that the players and all on-court officials observe
            the rules.
            {'\n\n'}
            2) The following pertain to the rules for continuous play: Have a stopwatch in his
            possession which shall be used to time the warm-up, the time between points,
            the time permitted on changeovers, the time permitted during the set break and
            all other specified time periods designated under the provisions of any rule or
            regulation.
            {'\n\n'}
            3) Dress uniformly with other Chair Umpires as prescribed by the Supervisor.
            {'\n\n'}
            4) If appropriate, conduct a pre-match meeting with all of the on-court officials for
            the match to specify court assignments and the procedures to be used for making
            calls, hand signals, rotation of court assignments, etc.
            {'\n\n'}
            5) Ascertain prior to matches from the Supervisor or the Chief of Umpires that the
            tournament has made appropriate arrangements for the safe escorting of players
            to and from the court before and after the match.
            {'\n\n'}
            6) Immediately before the start of the match meet with the players to:
            {'\n\n'}
            a) Verify the correct pronunciation of the player’s names.
            {'\n\n'}
            b) State any pertinent information (rule changes, new procedures, etc. for the
            players.
            {'\n\n'}
            7) Flip a coin in the presence of both players or teams to determine choice of serve
            and side at the beginning of the match prior to the warm-up. If play is suspended
            before the match begins, the winner of the toss may choose again before the
            match commences.
            {'\n\n'}
            8) Determine if each player is dressed in accordance with the dress provisions of
            ATP rules. Corrective action taking more than fifteen (15) minutes shall result in
            a default in consultation with the Supervisor. An appropriate re-warm-up may be
            authorized.
            {'\n\n'}
            9) Determine all Questions of Fact arising during the match (including the permitted
            five (5) minute warm-up).
            {'\n\n'}
            10) Make the first determination of all Questions of Tennis Law arising during the
            match, subject to the right of a player to appeal to the Supervisor.
            {'\n\n'}
            11) Announce the score after each point in accordance with On-Court Procedures.
            Announcements as a minimum must be in English. If two (2) languages must be
            used, announce in the local language first, then English. Conversations between
            the Chair Umpire and a player can be in any language. However, if the language
            used is not English, then the Chair Umpire must be prepared to advise the other
            player of the nature of the discussion.
            {'\n\n'}
            12) Repeat the calls of a Line Umpire or net judge if the call is made in a weak voice
            or there is a close call that must be confirmed to remove any doubt from the minds
            of the players.
            {'\n\n'}
            13) Be responsible for any ball mark inspection on clay courts. A ball mark inspection
            must be made in accordance with the approved on-court procedures.
            {'\n\n'}
            14) Overrule a Line Umpire only in the case of a clear mistake by the Line Umpire and
            only if the overrule is made promptly after the mistake is made. All overrules must
            be made in accordance with the approved on-court procedures. Obvious foot
            faults must be called by the Chair Umpire consistent with the procedures used for
            handling “clear mistakes”.
            {'\n\n'}
            15) Remove, rotate or replace any Line Umpire or net judge whenever, in the opinion
            of the Chair Umpire, it will improve the officiating of a match.
            {'\n\n'}
            16) Exercise his best efforts to control the crowd. Spectator involvement is encouraged as long as the Chair Umpire does not determine such involvement to be
            deliberately distracting. Whenever the spectators are impeding the progress of
            the match, the Chair Umpire should address them respectfully and request their
            cooperation. The tournament announcer and security personnel may be used to
            assist the Chair Umpire after consultation with the Supervisor.
            {'\n\n'}
            17) Be responsible for the direction of the ball persons during the match so that they
            assist but do not disturb the players.
            {'\n\n'}
            18) Be responsible for having the appropriate number of balls on-court for the match,
            for all changes of balls and for determining if a ball is fit for play. The appropriate
            number of ball containers should be opened and inspected sufficiently in advance
            of each ball change so as to avoid any delay of the match at the time of a ball
            change.
            {'\n\n'}
            19) Complete a scorecard in accordance with the approved on-court procedures. Following the completion of a match, the scorecards or printouts are to be finalized
            and distributed to appropriate ATP tournament and/or media personnel. Maintain
            the ATP Point Penalty Card in accordance with the approved on-court procedures.
            {'\n\n'}
            20) Determine if a court continues to be fit for play. If a change in condition occurs
            during a match that the Chair Umpire considers sufficient to make the court unfit
            for play or if weather conditions require stoppage of play, he should stop play and
            immediately notify the Supervisor.
            {'\n\n'}
            21) Following the conclusion of the match, complete and give to the Supervisor, the
            Post Match Review form including all actions taken under the Code during the
            match. If required by the Supervisor, in addition to the brief summary of the violation made on the Point Penalty Card, the Chair Umpire shall write a detailed
            statement of the incident. All reports shall be signed, dated and delivered to the
            Supervisor.
            {'\n\n'}
            22) Chair umpire responsibilities to include primary responsibility to call nets or
            throughs, unless otherwise assigned.
            {'\n\n'}
            23) Chair umpires must promptly and accurately score matches using the handheld
            or other method provided by ATP. In addition, Chair Umpires agree not to, and
            shall not authorize or assist any third party to, disseminate, transmit, publish or
            release any match related data or information to or for any third party without the
            express written consent of ATP. Further, each Chair Umpire agrees that any and
            all work or data he/she collects or creates in connection with any match shall constitute a “work made for hire” and any and all rights attributable to such work shall
            be retained by, or if necessary automatically assigned to, ATP and its members
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>E. Clothing - ATP Tour</HighlightText>
            {'\n\n'}
            The officiating uniform provided by ATP must be worn. No other commercial branding
            may be applied to the uniform without prior approval from ATP.
            {'\n\n'}

            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule57', next: 'Rule59', nav: navigation }} />
    </>
  );
}


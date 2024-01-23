import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';

export default function Rule120({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>VIII. THE CODE</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
         <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>8.04 Player Code of Conduct (“Code”)</Text>{'\n\n'}

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Entry/Withdrawal Offenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Entry Obligations. </Text>
            No player or team entered into the main draw or moved into
            the main draw as a direct acceptance of a tournament may withdraw after the
            entry and withdrawal deadline or not appear for first-round match(es) without penalty as described below. The Senior Vice President, Rules & Competition shall
            make such investigation as is reasonable to determine the facts regarding any
            such entry offense and, upon determining that a violation has occurred, shall
            specify the fine.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Fines</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments</Text>
            {'\n\n'}
            a) The provisions relating to assessment and payment of withdrawal, late withdrawal or punctuality fines for tournaments are separate from but in addition
            to the provisions of the player ATP commitment. The penalties are:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) Singles</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>aa) ATP Tour 250 Only. </Text>
            Withdrawals occurring prior to the 10 AM, Eastern time, USA, Friday withdrawal deadline:

            {'\n\n'}
          </Text>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule120_1.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>


            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>bb)ATP Tour Masters 1000, ATP Tour 500 & 250 events.</Text>
            {'\n\n'}
            Withdrawals occurring after the 10 AM, Eastern Time, USA, Friday
            withdrawal deadline (Late Withdrawals):

            {'\n\n'}
          </Text>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule120_2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            {'\n\n'}
            *For purposes of determining 2nd, 3rd and Subsequent Offenses, only Late
            Withdrawals are counted.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ii) Doubles.</Text>
            {'\n\n'}

            aa) If the withdrawal was after 10 AM, Eastern time, USA, Friday and prior
            to the onsite sign-in deadline then the fine is $1,000 per team member
            (doubled if team would have been seeded).
            {'\n\n'}
            bb) If the withdrawal was after the on-site sign-in deadline then this is to
            be considered as a Late Withdrawal and the fine is $2,500 per team
            member (doubled if team would have been, or was, seeded).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iii) Doubles Qualifying. </Text>
            {'\n\n'}
            If the withdrawal was after 10 AM Eastern time,
            USA, Friday, then the fine is $500 per team member (doubled if the team
            would have been seeded).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> iv) Doubles – Exceptions</Text>
            {'\n\n'}
            aa) If both members of the team were on-site at the time of the withdrawal
            and the withdrawal was due to a medical condition, then neither player is subject to a fine.
            {'\n\n'}
            bb)If the withdrawal was due to one or both members of the team being
            accepted into the main draw singles of another event, then neither
            player is subject to a fine.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) </Text>
            Fines shall be doubled in the case of any player who would have been seeded, based on the most recent Pepperstone ATP Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) ATP Tour Masters 1000 or ATP Tour 500 Qualifying. </Text>
            Third and subsequent
            withdrawals from the qualifying competition will be fined $250 or $500 if he
            would have been seeded based upon the most recent Pepperstone ATP
            Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 250 Qualifying. </Text>
            Third and subsequent withdrawals from the qualifying competition will be fined $250 or $500 if he would have been seeded
            based upon the most recent Pepperstone ATP Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>All ATP Tour Qualifying events. </Text>
            If the player withdraws after the 10 AM
            Eastern time, USA, Friday deadline, or is a No Show, it is a Late Withdrawal
            and the fine shall be $1,000 (or $2,000 if seeded).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) </Text>
            In circumstances that are flagrant and particularly injurious to the success of
            a tournament, or are singularly egregious, a single violation of this section
            shall also constitute the player Major Offense of Aggravated Behavior.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) </Text>
            The penalty for fourth and subsequent withdrawals is a fine of $250 for each
            offense and applies to singles. Fines shall be doubled in the case of any
            player who would have been seeded, based on the most recent Pepperstone
            ATP Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) </Text>
            Any singles withdrawal occurring after 10 AM, Eastern Time, USA on Friday,
            shall be assessed a fine of $1,000 (or $2,000 if seeded).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) ATP Challenger Tour Qualifying. </Text>
            Fifth and subsequent withdrawals from
            the qualifying competition will be fined $150 or $300 if he would have been
            seeded based upon the most recent Pepperstone ATP Rankings. If the player
            withdraws after the 10 AM Eastern time, USA, Friday deadline, or is a No
            Show, it is a Late Withdrawal and the fine shall be $500 (or $750 if seeded).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) ATP Challenger Doubles.</Text>
            {'\n\n'}
            i) If the withdrawal was after 10 AM, Eastern time, USA, Friday and prior to
            the onsite sign-in deadline then the fine is $500 per team member (doubled if team would have been seeded).
            {'\n\n'}
            ii) If the withdrawal was after the on-site sign-in deadline then this is to be
            considered as a Late Withdrawal and the fine is $1,000 per team member
            (doubled if team would have been, or was, seeded).
            {'\n\n'}
            iii) Doubles Exceptions apply as noted above for ATP Tour.




            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C. Tournament Rebates</Text>
            {'\n\n'}
            Tournaments shall receive a rebate from ATP when the following conditions have
            occurred:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour Masters 1000. </Text>
            All fine amounts collected as a result of late withdrawals
            shall be returned to the tournament where the late withdrawal occurred.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Tour 500. </Text>
            All fine amounts collected as a result of late withdrawals shall be
            returned to the tournament where the late withdrawal occurred.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) ATP Tour 250. </Text>
            All fine amounts collected as a result of withdrawals or late withdrawals shall be returned to the tournament where the withdrawal or late withdrawal occurred.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) ATP Tour Qualifying. </Text>
            All fine amounts collected as a result of withdrawals or late
            withdrawals shall be returned to the tournament where the withdrawal or late
            withdrawal occurred.




            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D.Withdrawal Penalties</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour 500. </Text>
            Any player withdrawing after the entry/withdrawal deadline shall
            have a ranking penalty assessed in accordance with procedures specified in the
            ranking section of this rule book. Players shall not have the ranking penalty assessed if they complete the requirements for “promotional activities”; are out of
            competition for 30 days; or the withdrawal complied with the requirements for an
            on-site withdrawal. Players may appeal withdrawal penalties to a Tribunal who
            will determine whether the penalties are affirmed or set aside.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Tour Masters 1000. </Text>
            Any player withdrawing from the main draw shall have
            a ranking penalty assessed in accordance with procedures specified in the ranking section of this rule book and be suspended from a subsequent ATP Tour
            Masters 1000 event. This event shall be the event where the player earned the
            highest point total during the previous 12 months. Subsequent withdrawals will
            carry a second suspension from the next event where the player earned his second highest point total. Additional withdrawals will include further suspensions in
            the same manner. Players shall not have the suspension penalty assessed if they
            complete the requirements for “promotional activities” or the withdrawal complied
            with the requirements for an on-site withdrawal. Players may appeal suspension
            penalties to a Tribunal who will determine whether the penalties are affirmed or
            set aside (see sections J & K). Ranking penalties are automatic and cannot be
            appealed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>NOTE1</Text>
            : If there were no 1000 results, the suspension would be from the next
            Masters 1000 event he is accepted as a Direct Acceptance.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>NOTE2</Text>
            : Players with grandfathered earned complete commitment reduction from
            all ATP Tour Masters 1000 events, who withdrew from that event for any reason
            the previous year, do not need to submit an appeal to avoid the suspension penalty.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. Retirement or Withdrawal Penalty (On-Site)</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) </Text>
            A player who, because of injury or illness, retires during a match or withdraws
            during the tournament week must submit to an on-site medical examination by
            the designated tournament Doctor. Any player who retires during a match must be
            examined by the tournament Doctor prior to the end of play on the day of the retirement. Failure to submit to such examination shall be a violation of this section
            and shall subject a player to a fine at ATP Tour tournaments of $10,000 ($2,500
            for the qualifying competition) or at ATP Challenger Tour tournaments to a fine of
            $1,000, ($500 for the qualifying competition), or the amount of prize money won
            at the tournament, whichever is greater.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) </Text>
            Following any on-site retirement or withdrawal, the Supervisor at the next tournament in which the players wants to play, may require the player to submit to an onsite examination by the designated tournament Doctor and receive authorization
            from the Supervisor before competing in any future ATP Tour and ATP Challenger
            Tour tournaments. The Supervisor’s authorization shall be based on the following:
            the results of the on-site medical examination; a review of such results with one of
            ATP’s medical services directors, if possible; and any other appropriate information.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>No Medical? Big Mistake</Text>
            {'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player retires from his singles match and leaves the tournament site without having been examined by the tournament Doctor.
            Later, it is discovered that the player has left the tournament city.
            What action does the Supervisor take?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            Any player who fails to submit to an on-site examination by the tournament Doctor after retiring from a match shall be
            subjected to a fine of $10,000 ($1,000 for ATP Challenger Tour
            tournaments) or the amount of prize money won at the tournament,
            whichever is greater.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>F. Special Exempt/Wild Card Non-Appearance</Text>
            {'\n\n'}
            A player who accepts a wild card or a special exempt pursuant to the procedures set
            forth under section 7.10, special exempts, shall appear for play. A violation of this
            section would be considered as a late withdrawal and be subject to the penalties set
            forth under late withdrawals.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>G.Payment of Fines</Text>
            {'\n\n'}
            The player shall pay all fines to ATP within ten (10) days after the notice of fine is
            provided to the player. All collected entry/withdrawal fine amounts, with the exception
            of Challenger fines, shall be returned to the event from which the fine was incurred.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>H.Playing Another event</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) </Text>
            No player who has entered and been accepted into the main draw or qualifying
            of an ATP Tour or ATP Challenger Tour tournament shall play in any other tennis
            event during the period of such tournament, except if appropriately released by
            ATP. Once a player enters and is accepted into the main draw or qualifying of the
            singles or doubles competition, he is committed to that tournament for the week,
            unless released by the Senior Vice President - Rules & Competition or Supervisor. A violation of this section shall constitute the Major Offense of Aggravated
            Behavior.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) </Text>
            A player who has entered and been accepted into the main draw of an ATP Tour
            or ATP Challenger Tour tournament shall be permitted to sign-in and compete
            in the doubles event of the same tournament if his withdrawal was for medical
            reasons and he is determined by the Supervisor, upon written medical advice, to
            be physically capable to compete on a professional level of play.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) </Text>
            A player may receive permission from a Tournament Director of an ATP Tour 250
            tournament to compete in a special event on the Monday of that tournament.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>I. Repeal of Withdrawal Fines and/or Penalties</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour 250</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Consecutive Withdrawals</Text>
            {'\n\n'}
            i) Players with multiple consecutive withdrawals* who are out of competition for thirty (30) days or more due to injury will not be subject to a fine
            as long as verified and approved medical forms are provided.
            Note: The count shall begin on the withdrawal deadline date; the date of
            the retirement; the date of the late withdrawal; or the date of the on-site
            withdrawal, whichever was chronologically first.
            {'\n\n'}
            ii) A player must not compete in any other tennis event during those periods.
            {'\n\n'}
            *Each consecutive withdrawal must be prior to 10 AM on Friday, before the
            tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) On-Site Medical Examination.</Text>
            {'\n\n'}

            Players who withdraw after 10 AM Eastern Time, USA on Friday (or in the
            case of doubles, after the entry deadline) before a tournament shall not have
            the late withdrawal fine assessed if determined to be unfit to play that week if:
            {'\n\n'}
            i) The player who is still competing in a tournament or Davis Cup* after the
            Friday 10 AM deadline is forced to withdraw/retire and is examined by
            that event’s Doctor and determined to be unfit for the following week’s
            tournament; or
            {'\n\n'}
            ii) The player was on-site at the event when the withdrawal occurred and is
            determined to be unfit for play by that tournament’s Doctor. Players who
            are examined by the on-site tournament Doctor shall receive tournament
            provided hotel rooms through the night of the examination.
            {'\n\n'}
            * A withdrawal from Davis Cup must be from a “live” match, for medical
            reasons.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Promotional Activities.</Text>
            {'\n\n'}

            A player who was not on-site when the withdrawal/late withdrawal occurred
            but travels to the tournament within the first three (3) days of the main draw,
            unless otherwise determined by ATP, and participates in a reasonable
            amount of promotional activities over a two (2) day period, as determined
            by ATP, shall not have the applicable fines assessed. Players who travel to
            the event to complete their promotional activity requirement shall receive full
            hospitality from the day of arrival through the night following the completion of
            their promotional obligation.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) Appeal.</Text>
            {'\n\n'}

            The player may appeal the fine to the SVP - Rules and Competition as specified below under “Review of Penalties for Entry and Commitment Offenses”
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP Tour 500</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Consecutive Withdrawals</Text>
            {'\n\n'}
            i) Players with multiple consecutive withdrawals* who are out of competition for thirty (30) days or more due to injury will not be subject to a late
            withdrawal fine or a ranking penalty as long as verified and approved
            medical forms are provided.
            Note: The count shall begin on the withdrawal deadline date; the date of
            the retirement; the date of the late withdrawal; or the date of the on-site
            withdrawal, whichever was chronologically first.
            {'\n\n'}
            ii) A player must not compete in any other tennis event during those periods.
            {'\n\n'}
            *Each consecutive withdrawal must be prior to 10 AM on Friday, before the
            tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) On-Site Medical Examination.</Text>
            {'\n\n'}

            Players who withdraw after 10 AM Eastern Time, USA on Friday (or in the
            case of doubles, after the on-site entry deadline) before a tournament shall
            not have the late withdrawal fine or ranking penalty assessed if determined to
            be unfit to play that week if:
            {'\n\n'}
            i) The player who is still competing in a tournament or Davis Cup* after the
            Friday 10 AM deadline is forced to withdraw/retire and is examined by
            that event’s Doctor and determined to be unfit for the following week’s
            tournament; or
            {'\n\n'}
            ii) The player was on-site at the event when the withdrawal occurred and is
            determined to be unfit for play by that tournament’s Doctor. Players who
            are examined by the on-site tournament Doctor shall receive tournament
            provided hotel rooms through the night of the examination.
            {'\n\n'}
            * A withdrawal from Davis Cup must be from a “live” match, for medical
            reasons.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Promotional Activities.</Text>
            {'\n\n'}
            A player who was not on-site when the withdrawal/late withdrawal occurred
            but travels to the tournament within the first three (3) days of the main draw,
            unless otherwise determined by ATP, and participates in a reasonable amount
            of promotional activities over a two (2) day period, as determined by ATP,
            shall not have the applicable fine and ranking penalties assessed. Players
            who travel to the event to complete their promotional activity requirement
            shall receive full hospitality from the day of arrival through the night following
            the completion of their promotional obligation.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) Appeal.</Text>
            {'\n\n'}

            The player may appeal the fine and ranking penalty to the Appeals Tribunal
            as specified below under “Review of Penalties for Entry and Commitment
            Offenses”. See also ATP Tour 500 - Ranking Penalty, page 250.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>e) Replacement Event. </Text>
            {'\n\n'}
            A commitment player who has received a zero (0) point
            ranking penalty for withdrawing from an ATP Tour 500 event may replace the
            zero (0) point by playing an additional ATP Tour 500 event in that same calendar year for a total of four (4) played. The replacement tournament must be
            after the 500 withdrawal that has resulted in a ranking penalty. Only one (1)
            additional ATP Tour 500 event per year may be used to replace an ATP Tour
            500 ranking penalty. See also ATP Tour 500 - Ranking Penalty, page 250.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) ATP Tour Masters 1000</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> a) On-Site Medical Examination.</Text>
            {'\n\n'}
            Players who withdraw after 10 AM Eastern Time, USA on Friday (or in the
            case of doubles, after the entry deadline) before a tournament shall not have
            the late withdrawal fine and the suspension assessed if determined to be unfit
            to play that week if:
            {'\n\n'}
            i) The player who is still competing in a tournament or Davis Cup* after the
            Friday 10 AM deadline is forced to withdraw/retire and is examined by
            that event’s Doctor and determined to be unfit for the following week’s
            tournament; or
            {'\n\n'}
            ii) The player was on-site at the event when the withdrawal occurred and is
            determined to be unfit for play by that tournament’s Doctor. Players who
            are examined by the on-site tournament Doctor shall receive tournament
            provided hotel rooms through the night of the examination.
            {'\n\n'}
            * A withdrawal from Davis Cup must be from a “live” match, for medical
            reasons.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) Promotional Activities.</Text>
            {'\n\n'}
            A player who was not on-site when the withdrawal/late withdrawal occurred
            but travels to the tournament within the first three (3) days of the main draw,
            unless otherwise determined by ATP, and participates in a reasonable
            amount of promotional activities over a two (2) day period, as determined
            by ATP, shall: (i) not have the applicable fine assessed, (ii) may recoup potential bonus pool money under Section 1.07.H.2 and (iii) shall not have the
            suspension penalties assessed. Players who travel to the event to complete
            their promotional activity requirement shall receive full hospitality from the
            day of arrival through the night following the completion of their promotional
            obligation.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Appeal.</Text>
            {'\n\n'}
            The player may appeal the fine and suspension to the Appeals Tribunal as
            specified below under “Review of Penalties for Entry and Commitment Offenses.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) Exceptions.</Text>
            {'\n\n'}
            The player will not have the suspension assessed if he has grandfathered
            earned commitment reductions and withdraws prior to the withdrawal deadline and he did not withdraw in any manner from the same event the previous
            year. For the avoidance of doubt, the ranking penalty is automatic and unappealable regardless of any grandfathered ATP Masters 1000 exemptions.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) ATP Challenger Tour/ATP Qualifying/ATP Challenger Tour Qualifying</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Consecutive Withdrawals</Text>
            {'\n\n'}

            i) Players with multiple consecutive withdrawals* who are out of competition for 30 days or more due to injury will not be subject to a fine as long
            as verified and approved medical forms are provided.
            {'\n\n'}
            ii) A player must not compete in any other tennis event during those periods.
            Note: The count shall begin on the withdrawal deadline date; the date of
            the retirement; the date of the late withdrawal; or the date of the on-site
            withdrawal, whichever was chronologically first.
            {'\n\n'}
            *Each consecutive withdrawal must be prior to 10 AM on Friday, before the
            tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) On-Site Medical Examination.</Text>
            {'\n\n'}
            Players who withdraw after 10 AM Eastern Time, USA on Friday (or in the
            case of doubles, after the entry deadline) before a tournament shall not have
            the late withdrawal fine assessed if determined to be unfit to play that week if:
            {'\n\n'}
            i) The player who is still competing in a tournament or Davis Cup* after the
            Friday 10 AM deadline is forced to withdraw/retire and is examined by
            that event’s Doctor and determined to be unfit for the following week’s
            tournament; or
            {'\n\n'}
            ii) The player is examined on-site, at the event from which he withdrew, and
            determined to be unfit for play by that tournament’s Doctor during qualifying or within the first three (3) days of the main draw for Challengers/ATP
            Tour Qualifying. Players who are examined by the on-site tournament
            Doctor shall receive tournament provided hotel rooms through the night
            of the examination.
            {'\n\n'}
            * A withdrawal from Davis Cup must be from a “live” match, for medical
            reasons.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Appeal.</Text>
            {'\n\n'}

            The player may appeal the fine to the SVP - Rules and Competition as specified below under “Review of Penalties for Entry and Commitment Offenses”.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>No Penalty After Retirement</Text>
            {'\n\n'}
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player is injured at an ATP Tour tournament and is forced
            to retire from his match. He is also unable to compete in the next
            week’s tournament. The injury occurred after 10 AM, Friday, Eastern
            Time, USA. Must the player travel to the next tournament to be
            examined by that tournament’s Doctor to avoid the appropriate
            penalties?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            No. If the player is forced to retire after 10 AM, Friday,
            Eastern Time, USA, he may be examined by that tournament’s
            Doctor.

            </Text>
            </ZoomText>
            <ZoomText>
            <Text style={RuleStyles.Description}>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>J. Review of Penalties for Entry and Commitment Offenses</Text>
            {'\n\n'}
            Any player found to have committed a United Cup, ATP Tour Masters 1000 or ATP
            Tour 500 entry or commitment offense may petition the Appeal Tribunal for discretionary review. ATP Tour 250, ATP Tour Qualifying and ATP Challenger Tour appeals
            shall be submitted to and determined by the ATP Senior Vice President – Rules and
            Competition. This written petition shall detail the basis for the appeal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Deadline. </Text>
            The deadline for filing an appeal is as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000 - </Text>
            6:00 PM Eastern USA on the Tuesday of the event
            week; except that:
            {'\n\n'}
            96-draw tournaments shall be the first Thursday of the tournament week.
            If the Tribunal requests additional information, the player will have 24 hours
            from receipt of this notice to submit the requested information.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 500 - </Text>
            10 days from the Monday of the event week.
            If the Tribunal requests additional information, the player will have 48 hours
            from receipt of this notice to submit the requested information.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 250/ATP Tour Qualifying/ATP Challenger Tour - </Text>
            10 days from
            the Monday of the event week.
            {'\n\n'}
            If the SVP - Rules and Competition requests additional information, the player
            will have 48 hours from receipt of this notice to submit the requested information.
            {'\n\n'}
            Appeals must be submitted in writing to the Appeals Tribunal/SVP - Rules and
            Competition and received prior to the deadline. Send electronically via email or
            fax to:
            {'\n\n'}
            {'\n\t\t'}Miro Bratoev
            {'\n\t\t'}Senior Vice President - Rules & Competition
            {'\n\t\t'}201 ATP Tour Boulevard
            {'\n\t\t'}Ponte Vedra Beach, Florida 32082 USA
            {'\n\t\t'}Email: miro.bratoev@atptour.com
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Determination. </Text>
            The Tribunal President/SVP - Rules and Competition shall review the petition and make a determination within the following time period:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000 - </Text>
            10 AM Eastern USA on the Friday* of the event
            week.
            {'\n\n'}
            *For 96-draw tournaments, the determination shall be made by 10 AM
            Eastern USA on the 2nd Friday of the event.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 500 - </Text>
            20 days from the Monday of the event week.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 250/ATP Tour Qualifying/ATP Challenger Tour - </Text>
            20 days from the Monday of the event week.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Scope of determination. </Text>
            The Tribunal’s/SVP - Rules and Competition decision
            on each case is limited to the following:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>United Cup</Text>
            {'\n\n'}
            Late Withdrawal Fine, if applicable
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000</Text>
            {'\n\n'}
            Suspension
            {'\n\n'}
            Late Withdrawal Fine, if applicable.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 500</Text>
            {'\n\n'}
            Ranking penalty
            {'\n\n'}
            Late Withdrawal Fine, if applicable.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Tour 250/ATP Tour Qualifying/ATP Challenger Tour</Text>
            {'\n\n'}
            Withdrawal Fine
            {'\n\n'}
            Late Withdrawal Fine



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> K. Tribunal.</Text>
            {'\n\n'}
            The ATP Board of Directors and ATP CEO shall nominate designees for the appeals
            tribunal as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) </Text>
            The three members of the board representing the players shall nominate a designee to serve a one (1) year term on the tribunal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) </Text>
            The three members of the board representing the tournaments shall nominate a
            designee to serve a one (1) year term on the tribunal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) </Text>
            The ATP CEO shall nominate a designee to serve a one (1) year term on the
            tribunal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) Medical Advisor.</Text>
            {'\n\n'}
            a) A person nominated by the medical services committee shall be present,
            if requested by the three (3) voting members of the Tribunal, at all tribunal
            meetings to offer advice and expert opinion on medical matters presented to
            the Tribunal.
            {'\n\n'}
            b) The advisor has no vote in any appeal decisions.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>L. On-Site Offenses/Procedures</Text>
            {'\n\n'}
            The on-site offense provisions shall apply to every player during his participation in
            an ATP Tour or ATP Challenger Tour tournament. On-site includes tournament hotels,
            transportation, all tournament facilities and activities.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Dress and Equipment</Text>
            {'\n\n'}
            Every player shall dress and present himself for play in a professional manner.
            Clean and customarily acceptable tennis attire as approved by ATP shall be worn.
            A player who violates this section may be ordered by the Chair Umpire or Super-
            visor to change his attire or equipment immediately. Failure of a player to comply
            with such order may result in an immediate default.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Identification/Visible</Text>
            {'\n\n'}
            No visible identification shall be permitted on a player, his clothing, products
            or equipment on court during a match or at any press conference or tournament ceremony, except as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) ATP Definitions.</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1. Clothing Designs. </Text>
            Clothing designs will not be interpreted as manufacturer’s logos and such logos can be incorporated into the clothing
            design, provided they conform to the size and placement restrictions.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2. Commercial Identification. </Text>
            Corporate or product identification other
            than the manufacturer of the item, including social media usernames,
            hashtags, and URLs.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3. Tennis Equipment Manufacturer. </Text>
            The tennis equipment manufacturer is the entity that distributes, or offers for sale, tennis racquets,
            clothing, strings or shoes.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4. Clothing Manufacturer. </Text>
            Clothing manufacturer is the corporate or
            product identification, trademarks (regardless of registration status)
            or other recognizable names presented in the form of a logo or mark
            on the clothing product in question.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>5. Size Limitation.</Text>
            {'\n\n'}
            - If a patch, the size is determined by the area of the actual patch.
            If a solid color patch is the same color as the clothing, then the
            size of the actual patch will be determined by the size of the logo
            identification, as described below.
            {'\n\n'}
            - If not a patch, the area of a logo or mark shall be determined
            by the circumference of a circle or the perimeter of a triangle or
            rectangle drawn around the logo or mark.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ii) Logo Usage. </Text>
            All logos or patches must be firmly attached at all points
            on the clothing or equipment. All commercial ID logos placed on the shirt
            front or collar must be embroidered or screen printed. All manufacturer
            logos must be embroidered, screen printed or otherwise professionally
            attached at all points.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1. Bags, Towels or Other Items. </Text>
            Standard logos of tennis equipment
            manufacturers on each item plus two (2) separate commercial identifications on one (1) bag, neither of which may exceed six (6) square
            inches (39 sq. cm.).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2. Drink Containers. </Text>
            Players are permitted to use drink containers oncourt if they are of reasonable size and they contain no logo or writing
            of the drink manufacturer. ATP has designated three (3) beverage
            categories of drinks for purposes of this rule: bottled water, electrolyte
            or other drinks (soft drinks, energy drinks and any other drink with the exception of alcoholic drinks and tea / cofee). The Supervisor may approve for use on-court a reasonably sized drink container that has a logo or writing, not to exceed
            four (4) square inches (26 sq. cm.) if:
            {'\n\n'}
            · The advertised on-court drink sponsor is the same as the player’s drink container manufacturer, or;
            {'\n\n'}
            · The advertised on-court drink sponsor(s) is not in the same beverage category as the player’s drink container.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3. Hat or Headband. </Text>
            One (1) standard logo of a clothing manufacturer
            or a tennis equipment manufacturer and/or one (1) commercial identification, both of which may contain writing. Neither shall exceed four
            (4) square inches (26 sq. cm.).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Restrictions:</Text>
            {'\n\n'}
            • The commercial logo must be located on the side of the hat /
            headband and worn so that it is positioned on the side of the
            head;
            {'\n\n'}
            • No hat or headband, with or without logos, may be worn during
            the awards ceremony;
            {'\n\n'}
            • Once a player has competed in the first match of his first event
            with a commercial brand logo on his hat/headband then he may
            not change commercial brands during that calendar year, unless
            approved by ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> Note: </Text>
            Players shall include a clause in their contracts permitting
            them to opt out at the end of any year in the event ATP rules
            change to prohibit a commercial brand logo on the hat or headband in the manner described above.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> 4. Wristband. </Text>
            One (1) standard logo of a clothing manufacturer or tennis equipment manufacturer, which may contain writing, not to exceed
            four (4) square inches (26 sq. cm.)
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>5. Racquet. </Text>
            Standard logos of the manufacturer shall be permitted on
            racquets and strings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>6. Shirt, Sweater or Jacket.</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>· Front, Back and Collar. </Text>
            Two (2) standard logo positions of the
            clothing manufacturer or commercial ID, neither of which exceeds six (6) square inches (39 sq. cm.), may be placed in any
            location (i.e. 2 on the front, or 1 on the front and 1 on the collar)
            or one (1) logo of the clothing manufacturer or commercial ID
            which may not exceed six (6) square inches (39 sq. cm.), may be
            placed on the front or collar and then an additional clothing manufacturer logo, not to exceed four (4) square inches (26 sq. cm.),
            may be placed on the back. Logos may contain writing. Once a
            player has competed in the first match of his first event with a
            commercial brand logo on the front, collar or headgear, he may
            not change brands during that calendar year, unless approved
            by ATP. No new commercial logo may be added to the shirt front
            for events following the US Open through the Nitto ATP Finals.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Note: </Text>
            Players shall include a clause in their contracts permitting
            them to opt out at the end of any year in the event ATP rules
            change to prohibit a commercial brand logo on the front of a
            shirt, sweater or jacket in the manner described above.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ATP Premier / Platinum Sponsor Patch. </Text>
            An additional commercial identification patch may be placed on the back of the
            shirt, below the collar, if part of the ATP Premier / Platinum sponsor patch program. This program is optional and is in addition to
            any manufacturer identification on the back of the shirt.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>· Sleeves. </Text>
            Two positions for commercial (i.e., non-clothing manufacturer) or manufacturer’s identification for each sleeve, neither
            of which exceeds six (6) square inches (39 sq. cm). A maximum
            of two (2) logos may be placed within each 6 square inch (39 sq.
            cm.) position. Logos may contain writing.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>· Sleeveless. </Text>
            Two (2) logo positions of the clothing manufacturer
            or commercial ID none of which exceeds six (6) square inches
            (39 sq. cm.) may be placed on the front of the shirt. If no more
            than one (1) logo is placed on the front or collar of the shirt, then
            one (1) manufacturer logo may be placed on the back of the
            shirt, not to exceed four (4) square inches (26 sq. cm).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>· Other. </Text>
            A logo of the clothing manufacturer, without the name of
            the manufacturer or any other writing, may be placed once or repeatedly within an area not to exceed twelve (12) square inches
            (77.5 sq. cm.) in one of the following positions:
            {'\n\n'}
            a. On each of the shirt sleeves, or
            {'\n\n'}
            b. On the outer seams (sides of torso) of the shirt.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>7. Shorts.</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>· Front and Back. </Text>
            Two (2) standard logos of the clothing manufacturer neither of which exceeds two (2) square inches (13 sq.
            cm.), may be placed on the front or back of the shorts; or two
            (2) standard logos of the clothing manufacturer neither of which
            exceeds four (4) square inches (26 sq. cm), may be placed as
            follows: one (1) logo on the front and one (1) logo on the back of
            the shorts. Logos may contain writing.
            {'\n\n'}
            · Compression shorts and/or compression sleeves may contain
            two (2) standard logos of the clothing manufacturer which must
            not exceed two (2) square inches (13 sq. cm.) or one (1) standard logo of the clothing manufacturer which must not exceed
            four (4) square inches (26 sq. cm.).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>8. Socks /Shoes. </Text>
            {'\n\n'}
            Standard logos of the manufacturer of the article may
            appear on each sock and each shoe.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Tattoo as Logo</Text>
            {'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player arrives on court wearing an approved sleeveless
            shirt. The Chair Umpire notices that the player has a tattoo of the
            clothing manufacturer on his upper arm. If there is no issue with the
            size, is this allowed?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            No. The rules for both clothing manufacturer and commercial I.D. logo placement clearly specify where these logos may
            be placed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iii) Restrictions /Government. </Text>
            Any commercial or other identification that
            violates applicable governmental and/or television regulations is prohibited.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iv) Restrictions/Other Tennis event. </Text>
            The identification by use of the name,
            emblem, logo, trademark, symbol or other description of any tennis circuit, series of tennis events, tennis exhibition or tournament other than
            the “ATP” is prohibited on all dress or equipment at any ATP Tour and ATP
            Challenger Tour tournaments, unless otherwise approved by ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>v) Restrictions /Timing. </Text>
            Once a player has competed in the first match of
            his first event with a commercial brand logo in either of the two locations
            (shirt front and/or hat/headband), he may not change brands during that
            calendar year, unless approved by ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Note: </Text>
            Players shall include a clause in their contracts permitting them to
            opt out at the end of any year in the event ATP rules change to prohibit
            a commercial brand logo on the front of a shirt, sweater or jacket in the
            manner described above.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>vi) Restrictions / General. </Text>
            Tobacco and companies associated with tennis
            gambling will be prohibited from any endorsements on player clothing.
            ATP reserves the right to prohibit any identification it deems not to be in
            the best interest of the game and/or ATP.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) Shoes</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) General. </Text>
            Players are required to wear tennis shoes generally accepted
            as proper tennis attire. Shoes shall not cause damage to the court other
            than what is expected during the normal course of a match or practice.
            Damage to a court may be considered as physical or visible, which may
            include a shoe that leaves marks beyond what is considered acceptable. The Supervisor has the authority to determine that a shoe does not
            meet the criteria of “customarily acceptable” and may order the player to
            change.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ii) Clay Courts. </Text>
            Players are required to wear tennis shoes generally accepted for play on clay courts or granular surfaces. The Supervisor has
            the authority to determine that a tennis shoe’s sole does not conform and
            can prohibit its use at any ATP Tour or ATP Challenger Tour tournament.
            Grass court shoes should not be worn during a match on clay courts.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iii) Grass Courts. </Text>
            In ATP Tour and ATP Challenger Tour tournaments played
            on grass courts, no shoes other than those with rubber soles, without
            heels, ribs, studs or covering, shall be worn by players.
            {'\n\n'}
            aa) Special grass court shoes shall not be used without the express approval of ATP, based on the following specifications:
            {'\n\n'}
            1) The pimples or studs on the base of the sole should be vertical from the outsole and shall have a maximum top diameter
            of three (3) millimeters and a minimum top diameter of two (2)
            millimeters. The maximum height of the pimples or studs shall
            be two (2) millimeters, from the base of the shoe. The hardness
            of any pimple or studs shall be between 55 and 60 based on a
            Shore “A” scale. The number of pimples per square inch shall be
            no less than 15 and no more than 28.
            {'\n\n'}
            2) Shoes with pimples or studs around the outside of the toes shall
            not be permitted. The foxing / sidewall can be contoured only
            in the medial forefoot and medial toe area but only within the
            following restrictions. The contoured area may begin in the transition area between outsole and sidewall but can only go to a
            maximum of 1.5 cm up the sidewall. This contoured area must
            be flat (not textured or undulating) but can be stepped with no
            more than 5 steps each no more than 1 mm in depth.
            {'\n\n'}
            3) Forefoot and heel areas may be separated but there should be
            no more than a 2 mm step in the outsole of the shoe.
            {'\n\n'}
            • Approval of special grass court shoes should be received by
            ATP at least ninety (90) days in advance of the grass court
            tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>
              All shoes approved for play in 2008 shall continue to be approved.

            </Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Violations/Fines</Text>
            {'\n\n'}
            Any player who violates this section and is not defaulted shall be subject to
            the following fines:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) Commercial Identification. </Text>
            {'\n\n'}
            Violation of the provisions with respect to
            commercial identifications shall result in a fine up to:
            {'\n\n'}
            • $2,000 for ATP Challenger Tour tournaments.
            {'\n\n'}
            • $30,000 for ATP Tour 250 tournaments.
            {'\n\n'}
            • $40,000 for ATP Tour 500 tournaments.
            {'\n\n'}
            • $60,000 for ATP Tour Masters 1000 tournaments.
            {'\n\n'}
            The maximum fine will increase by one hundred percent (100%) for each
            consecutive violation during the same calendar year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ii) Tennis Equipment Manufacturer’s logo. </Text>

            </Text>
            </ZoomText>
            <ZoomText>
            <Text style={RuleStyles.Description}>
            Violation of the provisions with
            respect to standard logos of manufacturers shall result in a fine up to:
            {'\n\n'}• $500 for ATP Challenger Tour tournaments.
            {'\n\n'}• $30,000 for ATP Tour 250 tournaments.
            {'\n\n'}• $40,000 for ATP Tour 500 tournaments.
            {'\n\n'}• $60,000 for ATP Tour Masters 1000 tournaments.
            {'\n\n'} The maximum fine will increase by one hundred percent (100%) for each
            consecutive violation during the same calendar year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iii) Other Tennis event. </Text>
            Violation of the provisions with respect to the name
            of an event other than the “ATP” shall result in a fine up to:
            {'\n\n'}• $5,000 for ATP Challenger Tour tournaments.
            {'\n\n'}• $30,000 for ATP Tour 250 tournaments.
            {'\n\n'}• $40,000 for ATP Tour 500 tournaments.
            {'\n\n'}• $60,000 for ATP Tour Masters 1000 tournaments.
            {'\n\n'}The maximum fine will increase by one hundred percent (100%) for each
            consecutive violation during the same calendar year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iv) Unacceptable Attire. </Text>
            Violation of the provisions with respect to unacceptable attire shall result in a fine up to:
            {'\n\n'}• $1,000 for ATP Challenger Tour tournaments
            {'\n\n'}• $30,000 for ATP Tour 250 tournaments.
            {'\n\n'}• $40,000 for ATP Tour 500 tournaments.
            {'\n\n'}• $60,000 for ATP Tour Masters 1000 tournaments.
            {'\n\n'}The maximum fine will increase by one hundred percent (100%) for each
            consecutive violation during the same calendar year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Point Penalty Schedule</Text>
            {'\n\n'}
            a) The Point Penalty Schedule to be used for Code Violations is as follows:
            {'\n\n'} FIRST OFFENSE {'\t\t\t'} WARNING
            {'\n\n'}SECOND OFFENSE {'\t\t\t'} POINT PENALTY
            {'\n\n'}THIRD AND EACH SUBSEQUENT OFFENSE {'\t'} GAME PENALTY
            {'\n\n'}However, after the third Code Violation, the Supervisor shall determine
            whether each subsequent offense shall constitute a default.
            {'\n\n'}b) In ATP Tour and ATP Challenger Tour tournaments and events, Code Violations shall be levied by the Chair Umpire for on-court offenses. In the event
            that the Chair Umpire fails to levy a code violation, then the Supervisor may
            order him to do so.
            {'\n\n'} c) In doubles, code violations shall be assessed against the team.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Code Violations Not Witnessed By Chair Umpire</Text>
            {'\n\n'}
            Occasionally, there are code violations by players that are not witnessed by the
            Chair Umpire. The Line Umpire should immediately approach the Chair Umpire
            and report the facts of the violation, during which time the Chair Umpire should
            turn off all microphones in the area of the chair. The Chair Umpire may ask the
            player to respond to such report; thereafter, the Chair Umpire must make a decision and he either dismisses the report or declares a code violation and assesses
            a penalty. If a code violation is assessed, then the Chair Umpire must announce
            such violation to the player, opponent and spectators. If in his opinion there was
            a code violation, but because of the time of discovery (another point has been
            played), it would be inappropriate to issue a Code Violation Warning, Point or
            Game Penalty, then he/she must notify the player that he/she will refer the matter
            to the Supervisor for action after the match. If a serious violation that may warrant
            an Immediate Default has been reported and acted upon no later than the end of
            the next changeover, the ATP Supervisor may be called to discuss an Immediate
            Default. The Supervisor may order the Chair Umpire to issue a code violation for
            a violation witnessed or not witnessed by the Chair Umpire.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case 1: </Text>
            A Line Umpire reports to the Chair Umpire an incident
            which occurred three (3) points earlier, may the Chair Umpire issue
            a Warning, Point or Game Penalty?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision 1: </Text>
            No, in this case a Code Violation may be issued only
            if the violation was reported immediately (before the next point is
            played).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case 2: </Text>
            Same situation as Case 1 above except that the violation
            reported is a serious violation that may warrant an Immediate Default. May the Supervisor/Referee be called to discuss an Immediate
            Default?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision 2: </Text>
            Yes, as long as the violation has been reported and
            acted upon no later than the end of the next changeover. Once the
            first point of the game immediately following the changeover has
            been played then no Code Violation for an Immediate Default may
            be issued. The player may however be subject to a fine as determined by the Supervisor.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) Offenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Ball Abuse</Text>
            {'\n\n'}

            i) Players shall not violently, dangerously or with anger hit, kick or throw
            a tennis ball while on the grounds of the tournament site except in the
            reasonable pursuit of a point during a match (including warm-up). For
            purposes of this rule, abuse of balls is defined as intentionally or recklessly hitting a ball out of the enclosure of the court, hitting a ball dangerously
            or recklessly within the court or hitting a ball with disregard of the consequences.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine of up to $350 for
            each violation. In addition, if such violation occurs during a match, the
            player shall be penalized in accordance with the Point Penalty Schedule.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) Racquet or Equipment Abuse</Text>
            {'\n\n'}

            i) Players shall not violently, dangerously or with anger hit, kick or throw a
            racquet or other equipment within the precincts of the tournament site.
            For purposes of this rule, abuse of racquets or equipment is defined as
            intentionally, dangerously and violently destroying or damaging racquets
            or equipment or intentionally and violently hitting the net, court, umpire’s
            chair or other fixture during a match out of anger or frustration.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $500 for each
            violation. In addition, if such violation occurs during a match, the player
            shall be penalized in accordance with the Point Penalty Schedule.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Physical Abuse</Text>
            {'\n\n'}

            i) Players shall not at any time physically abuse any official, opponent,
            spectator or other person within the precincts of the tournament site. For
            purposes of this rule, physical abuse is the unauthorized touching of an
            official, opponent, and spectator or other person.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $20,000
            for ATP Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments, $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour
            Masters 1000 tournaments for each violation. The maximum fine will increase by one hundred percent (100%) for each consecutive violation
            during the same calendar year. In addition, if such violation occurs during
            a match, the player shall be penalized in accordance with the Point Penalty Schedule. In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, the ATP
            Supervisor may refer the matter to the ATP Members Fines Committee who shall
            conduct an investigation to determine whether the player Major Offense
            of Aggravated Behavior or Conduct Contrary to the Integrity of the Game
            has occurred. Prize money earned at that event shall be held by ATP until
            the ATP Members Fines Committee has concluded their investigation and made a
            determination.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> d) Verbal Abuse</Text>
            {'\n\n'}

            i) Players shall not at any time directly or indirectly verbally abuse an official, opponent, sponsor, spectator or any other person within the precincts of the tournament site. Verbal abuse is defined as any statement
            about an official, opponent, sponsor, spectator or any other person that
            implies dishonesty or is derogatory, insulting or otherwise abusive.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $20,000
            for ATP Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments, $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour
            Masters 1000 tournaments for each violation. The maximum fine will increase by one hundred percent (100%) for each consecutive violation
            during the same calendar year. In addition, if such violation occurs during
            a match, the player shall be penalized in accordance with the Point Penalty Schedule. In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, the ATP
            Supervisor may refer the matter to the ATP Members Fines Committee who shall
            conduct an investigation to determine whether the player Major Offense
            of Aggravated Behavior or Conduct Contrary to the Integrity of the Game
            has occurred. Prize money earned at that event shall be held by ATP until
            the ATP Members Fines Committee has concluded their investigation and made a
            determination.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>e) Audible Obscenity</Text>
            {'\n\n'}

            i) A player shall not use an audible obscenity while on-site. Audible obscenity is defined as the use of words commonly known and understood to be
            profane and uttered clearly and loudly enough to be heard.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $5,000 for
            each violation. In addition, if such violation occurs during a match, the
            player shall be penalized in accordance with the Point Penalty Schedule.
            In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, a single violation of
            this section shall also constitute the player Major Offense of Aggravated
            Behavior.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>f) Visible Obscenity</Text>
            {'\n\n'}

            i) Players shall not make obscene gestures of any kind while on-site. Visible
            obscenity is defined as the making of signs by a player with hands and/or
            racquet or balls that commonly have an obscene meaning.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $5,000 for
            each violation. In addition, if such violation occurs during a match, the
            player shall be penalized in accordance with the Point Penalty Schedule.
            In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, a singles violation of
            this section shall also constitute the player Major Offense of Aggravated
            Behavior.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>g) Unsportsmanlike Conduct</Text>
            {'\n\n'}

            i) Players shall at all times conduct themselves in a sportsmanlike manner
            and give due regard to the authority of officials and the rights of opponents, spectators and others. Unsportsmanlike conduct is defined as any
            misconduct by a player that is clearly abusive or detrimental to the success of a tournament, ATP and/or the Sport. In addition, unsportsmanlike
            conduct shall include, but not be limited to, the giving, making, issuing,
            authorizing or endorsing any public statement having, or designed to
            have, an effect prejudicial or detrimental to the best interest of the tournament and/or the officiating thereof.
            {'\n\n'}
            ii) Players and their support team members accredited at any event must
            comply with the physical distancing and COVID-19 precautionary measures applicable for each event. Any repetitive or blatant breach of those
            measures may be considered a violation of the code of conduct under this
            Section or the Major Offense of Conduct Contrary to the Integrity of the
            Game depending on the severity of the violation.
            {'\n\n'}
            iii) Violation of this section shall subject a player to a fine up to $20,000
            for ATP Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments, $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour
            Masters 1000 tournaments for each violation. The maximum fine will increase by one hundred percent (100%) for each consecutive violation
            during the same calendar year. In addition, if such violation occurs during
            a match, the player shall be penalized in accordance with the Point Penalty Schedule. In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, the ATP
            Supervisor may refer the matter to the ATP Members Fines Committee who shall
            conduct an investigation to determine whether the player Major Offense
            of Aggravated Behavior or Conduct Contrary to the Integrity of the Game
            has occurred. Prize money earned at that event shall be held by ATP until
            the ATP Members Fines Committee has concluded their investigation and made a
            determination.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>h) Best Efforts</Text>
            {'\n\n'}

            i) A player shall use his best efforts during the match when competing in a
            tournament. Violation of this section shall subject a player to a fine up to
            $20,000 for ATP Challenger Tour tournaments, $30,000 for ATP Tour 250
            tournaments, $40,000 for ATP Tour 500 tournaments, $60,000 for ATP
            Tour Masters 1000 tournaments for each violation. The maximum fine will
            increase by one hundred percent (100%) for each consecutive violation
            during the same calendar year.
            {'\n\n'}
            ii) For purposes of this rule, the Supervisor and/or the Chair Umpire shall
            have the authority to penalize a player in accordance with the Point Penalty Schedule. In circumstances that are flagrant and particularly injurious to the success of a tournament, or are singularly egregious, the ATP
            Supervisor may refer the matter to the ATP Members Fines Committee who shall
            conduct an investigation to determine whether the player Major Offense
            of Aggravated Behavior or Conduct Contrary to the Integrity of the Game
            has occurred. Prize money earned at that event shall be held by ATP until
            the ATP Members Fines Committee has concluded their investigation and made a
            determination.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) Leaving the Court</Text>
            {'\n\n'}

            i) A player shall not leave the court area during a match (including the
            warm-up) without the permission of the Chair Umpire or Supervisor.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $3,000 for ATP
            Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments,
            $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour Masters
            1000 tournaments for each violation. The maximum fine will increase by
            one hundred percent (100%) for each consecutive violation during the
            same calendar year. In addition, the player may be defaulted and shall be
            subject to the additional penalties for failure to complete match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>j) Failure to Complete Match</Text>
            {'\n\n'}

            i) A player must complete a match in progress unless he is reasonably unable to do so.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $5,000 for ATP
            Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments,
            $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour Masters
            1000 tournaments. The maximum fine will increase by one hundred percent (100%) for each consecutive violation during the same calendar
            year. Violation of this section shall subject a player to immediate default
            and shall also constitute the Major Offense of Aggravated Behavior.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>k) Ceremonies</Text>
            {'\n\n'}

            i) All tournament finalists must attend and participate in the post-match ceremonies, unless he is physically unable to do so as determined by the
            tournament Doctor. This includes retirements and finals not played due to
            a walkover.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $5,000.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>l) Coaching and Coaches</Text>
            {'\n\n'}

            i) Players shall not receive coaching during a tournament match*. Communications of any kind, audible or visible, between a player and a coach
            may be construed as coaching. Coaches on-site are prohibited from:
            {'\n\n'}
            aa) Using an audible obscenity or making obscene gestures of any kind.
            {'\n\n'}
            bb)Abusing any official, opponent, spectator or other person, verbally or
            physically.
            {'\n\n'}
            cc) Engaging in conduct contrary to the integrity of the game of tennis.
            Conduct contrary to the integrity of the game shall include, but not be
            limited to, comments to the news media that unreasonably attack or
            disparage a tournament, sponsor, player, official or ATP. Responsible expressions of legitimate disagreement with ATP policies are not
            prohibited. However, public comments that one of the stated persons
            above knows, or should reasonably know, will harm the reputation or
            financial best interest of a tournament, player, sponsor, official or ATP
            are expressly covered by this section.
            {'\n\n'}
            ii) Violation of this section shall subject a player to a fine up to $5,000 for
            each violation. In addition, if such violation occurs during a match, the
            player shall be penalized in accordance with the Point Penalty Schedule.
            In circumstances that are flagrant and particularly injurious to the success
            of a tournament, or are singularly egregious, the Supervisor shall have
            the authority to relocate the position of a coach if there is reasonable
            belief that coaching is occurring or the Supervisor may order the coach to
            be removed from the match site or tournament site and upon his failure to
            comply with such order, may declare an immediate default of such player.
            {'\n\n'}
            *Coaching is allowed at ATP Tour and Challenger Tour tournaments through the
            end of 2024 on a trial basis with the following conditions:
            {'\n\n'}
            ● The coach must sit in the tournament’s designated coaches’ seats
            {'\n\n'}● Verbal coaching is permitted only when the player is at the same end of
            the court
            {'\n\n'}● Verbal coaching may consist of a few words and/or short phrases (no conversations are permitted)
            {'\n\n'}● Non-verbal coaching (hand signals) is permitted
            {'\n\n'}● Coaching (verbal and non-verbal) is allowed only if it does not interrupt
            play or create any hindrance to the opponent
            {'\n\n'}● Players may approach their coach or engage in conversation with their
            coach during an opposing player’s Medical Timeout or a Toilet
            Break/Change of Attire Break or another break approved by the Chair Umpire during which the players remain on court
            {'\n\n'}● Coaches may not speak to their player, when the player leaves the court
            for any reason
            {'\n\n'}● Penalties and fines to apply for abuse or misuse of the coaching conditions
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Electronic devices</Text>
            {'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            May a player listen to an mp3 player or other device on a
            changeover?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            A player is not allowed to use any electronic devices (e.g.
            CD players, mobile phones, etc.) during matches, unless approved
            by the Supervisor. (Tour Policy)
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>m) Default</Text>

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) During the match. </Text>
            The Supervisor may default a player either for a single violation of the Code (immediate default) or as outlined in the Point
            Penalty Schedule.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>ii) On-site. </Text>
            The Supervisor may withdraw a player from all events for a single
            violation of the Code occurring during the event but not during a player’s
            match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iii) </Text>
            In all cases of default, the Supervisor’s decision shall be final and may
            not be appealed.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>iv) Penalties:</Text>

            {'\n\n'}aa) Any player who is defaulted shall lose all prize money (gross prize
            money to be paid to ATP), hotel accommodations and points earned
            for that event at that tournament.
            {'\n\n'}bb)At the discretion of the Supervisor, the player may be withdrawn from
            all other events, if any, in that tournament.
            {'\n\n'}cc) In addition, if the Senior Vice President - Rules & Competition determines that the default was particularly injurious to the success of the
            tournament or detrimental to the integrity of the sport, he may consider additional penalties (fines and/or suspensions).
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>v) </Text>
            The exception is when the offending incident involves:
            {'\n\n'}aa) A violation of the punctuality or dress and equipment provisions set
            forth in the Code; or
            {'\n\n'}bb)As a result of a medical condition; or
            {'\n\n'}cc) A match ending on a delay penalty (Code Violation for Delay of Game)
            if the delay penalty was the result of a medical condition.
            {'\n\n'}dd)A member of a doubles team did not cause any of the misconduct
            code violations that resulted in the team being defaulted.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>vi) In doubles:</Text>
            {'\n\n'}

            aa) A default assessed for violation of the Code shall be assessed against
            the team.
            {'\n\n'}bb)The Supervisor will assess the default penalties against both players
            on the team, unless the provisions in 4 above apply.
            {'\n\n'}cc) At the discretion of the Supervisor, one or both of the players may be
            withdrawn from all other events, if any, in that tournament.
            {'\n\n'}dd)The partner of the player who caused the default shall receive points
            and prize money from the previous round.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Default - List Penalties</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            If a player is defaulted through the Code of Conduct for misconduct, what penalties result?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The player may be withdrawn from any other event he
            is entered in, as determined by the Supervisor; lose all points and
            gross prize money earned for the event where he was defaulted;
            and hotel accommodations, in addition to the fines that may be imposed for the code violations. If the player is removed from the other
            event as well, he will lose all points and prize money earned from
            both events, and hotel accommodations.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>n) Punctuality</Text>
            {'\n\n'}
            Players shall be ready to play when their matches are called.
            {'\n\n'}i) Any player not ready to play within ten (10) minutes after his match is
            called shall be fined $250.
            {'\n\n'}ii) For televised matches with an announced “walk-on” time, players not
            ready to walk-on at the announced time may be issued a fine at the
            sole discretion of the ATP Supervisor. Normal fines may be in the range
            of $1,000-$5,000 but in extreme cases could be up to a maximum of
            $10,000.
            {'\n\n'}iii) Any player not ready to play within fifteen (15) minutes after his match
            is called may be fined up to an additional $750 and shall be defaulted
            unless the Supervisor, after consideration of all relevant circumstances,
            elects not to declare a default. In such case, the Supervisor shall immediately inform the Senior Vice President - Rules & Competition. This section
            applies only to those players who are or have been on-site.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Late Transportation</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            The scheduled transportation is late to pick up players from
            the tournament hotel. A player is defaulted for punctuality and subsequently arrives on-site with tournament transportation. Should the
            default be rescinded and the match played?
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The player is defaulted. Transportation is a service
            provided by the tournament; however, the player is responsible for
            arriving on time for his match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>o) Continuous Play</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>i) Delay of Play. </Text>
            A player will receive a warning for the first violation and
            be subject to a fine for each subsequent violation ($250 then doubled for
            each additional violation) during that week’s event for violating the following timings:


            {'\n\n'}
          </Text>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule120_3.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            {'\n\n'}

            <Text style={RuleStyles.SubHeading3}>ii) Delay of Game. </Text>
            Once the match has begun, play shall be continuous and a
            player shall not unreasonably delay a match for any cause. A maximum of
            twenty-five (25) seconds shall elapse from the moment the ball goes out of
            play until the time the ball is struck for the next point. If such serve is a fault,
            then the second serve must be struck by the server without delay. The exception is at a ninety (90) second changeover or a one hundred twenty (120) set
            break. The procedures for enforcing this rule are as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>aa) 25 Seconds Between Points.</Text>
            {'\n\n'}
            1) Start stopwatch when the player is ordered to play or when the
            ball goes out of play.
            {'\n\n'}
            2) Assess time violation or code violation if the ball is not struck for
            the next point within the twenty-five (25) seconds allowed. There
            is no time warning prior to the expiration of the twenty-five (25)
            seconds.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>bb)Changeover (Ninety (90) Seconds) and Set Break (One Hundred
              and Twenty (120) Seconds).</Text>
            {'\n\n'}
            1) Start stopwatch the moment the ball goes out of play.
            {'\n\n'}2) Announce “Time” after sixty (60) / ninety (90) seconds have
            elapsed.
            {'\n\n'}3) Announce “15 Seconds” if one or both of the players are still at
            their chairs and/or have not started toward their playing positions after seventy-five (75) / one hundred and five (105) seconds have elapsed.
            {'\n\n'}4) Assess time violation or code violation (after medical time-out
            or treatment) if the ball is not struck for the next point within the
            ninety (90) / one hundred and twenty (120) seconds allowed provided there has been no interference which prevented the server
            from serving within that time.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>NOTE: </Text>
            When requested by television, “Time” shall be announced after ninety (90) seconds for a changeover and one
            hundred twenty (120) seconds for a set break.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>cc) Time Violations.</Text>
            {'\n\n'}

            Violating a provision of this Section, as server or receiver, shall be
            penalized by a “Time Violation – Warning” and each subsequent vio-
            ation shall be penalized as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>• Server. </Text>
            When serving the time violation shall result in a “fault”.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>• Receiver. </Text>
            When it is determined that the receiver is the cause
            of the time violation, then the receiver shall be penalized by the
            assessment of one (1) point penalty. The receiver must also
            play to the reasonable pace of the server. A Time Violation may
            be issued in this case prior to the expiration of twenty-five (25)
            seconds if the receiver’s actions are delaying the reasonable
            pace of the server. Assess a code violation if the receiver is consistently or obviously delaying the server, thus employing “Unsportsmanlike Conduct”.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>• Server/Receiver </Text>
            following a toilet break. Point Penalty.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Note: </Text>
            A second time violation occurs when a player who has received
            a prior warning as either the server or receiver is issued another time
            violation as either server or receiver. Example is Player A had received a warning for not serving within the 25 second limit; later, as
            receiver, Player A is deemed to not be playing to the reasonable pace
            of the server. This would be considered a second violation and a point
            penalty would be issued.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>p) Post-Match Media Availability</Text>
            {'\n\n'}i) All players scheduled to play on televised courts will be required, if requested, to perform a pre-match TV interview on the day of the match (not
            to exceed 2 minutes in total). The interview may be conducted at either
            the player’s practice court or as the players approach the court for walkon as determined by the host and player’s national broadcasters.
            {'\n\n'}ii) Unless injured and physically unable to appear, a player or team must
            be available, as determined by ATP, on court (for TVs only), in the mixed
            zone or media conference area after the conclusion of each match whether the player or team was the winner or loser. Post-match media obligations include three (3) interviews, with the news service, host and player’s
            national broadcasters. This rule shall also apply to matches won or lost as
            a result of a withdrawal or retirement.
            {'\n\n'}iii) Violation of this section shall subject a player to a fine in accordance with
            the following schedule (based on most recent position in the Pepperstone
            ATP Rankings):
            {'\n\n'}
            {'\n\t\t'}1 - 10 {'\t\t'} $20,000
            {'\n\t\t'}11 - 25 {'\t\t'} $10,000
            {'\n\t\t'}26 - 50 {'\t\t'} $5,000
            {'\n\t\t'}51 - 100 {'\t\t'} $3,000
            {'\n\t\t'}101+  {'\t\t'} $1,000
            {'\n\n'}
            Fines will be increased to the next higher level for any national player.
            Fines will double for each repeat offense within an ATP Circuit Year.
            For ATP Challenger Tour events, a violation of this section shall result in
            a fine of $500.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>q) Pre-Tournament Media Availability</Text>
            {'\n\n'}
            All players will be required, if requested, to take part in media availability prior
            to their first match at each tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>r) ATP STARS Program Penalties</Text>
            {'\n\n'}
            Players shall be required to participate in ATP sponsored activities at each
            ATP Tour tournament. Failure to participate in a scheduled activity due to
            non-appearance or tardiness shall be deemed a missed activity. Violation of
            this section shall subject a player to a fine as indicated below:
            Fine Schedule (based on most recent position in the Pepperstone ATP Rankings):
            {'\n\t\t'}1 - 10 {'\t\t'} $20,000
            {'\n\t\t'}11 - 25 {'\t\t'} $10,000
            {'\n\t\t'}26 - 50 {'\t\t'} $5,000
            {'\n\t\t'}51 - 100 {'\t\t'} $3,000
            {'\n\t\t'}101 + {'\t\t'} $1,000
            {'\n\n'}Fines will be increased to the next higher level for any national player. Fines
            will double for each repeat offense within an ATP Circuit Year.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>s) Champion’s Media Tour</Text>
            {'\n\n'}
            Each winner of a Grand Slam or the Nitto ATP Finals, if requested, is obligated to participate in media tour as arranged by ATP during the days immediately following the finals of any such tournament. Players and their agents
            will be consulted with respect to the scope and substance of the activities to
            take place during the media tour to ensure that the player is comfortable with
            the proposed activities. ATP will cover all expenses incurred by a player while
            participating in the media tour.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>t) Special Functions</Text>
            {'\n\n'}
            Each player, if requested, is obligated to attend the ATP Awards Show and
            up to two (2) additional ATP sponsored/conducted special events. Players
            and their agents will be consulted in advance to ensure that attendance at
            any such event(s) will not substantially intrude upon the player’s schedule.
            Players and their agents will also be consulted with respect to the scope and
            substance of the events to ensure that the player is comfortable with attending the event(s).



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>M. Determination of Violation and Penalty</Text>
            {'\n\n'}

            1) The Supervisor shall make a reasonable investigation to determine the facts
            regarding all player on-site offenses. Upon determining that a violation has occurred, the Supervisor shall specify the fine and/or other punishment in written
            notice to the player. The Supervisor may limit the fines levied during qualifying
            competition as follows:
            {'\n\n'}
            a) ATP Tour Tournament Qualifying Competition. A maximum of $500 for each
            violation.
            {'\n\n'}
            b) ATP Challenger Tour Tournament Qualifying Competition. A maximum of
            $100 for each violation.
            {'\n\n'}
            2) The ATP Members Fines Committee shall have the authority to investigate statements or
            actions made by a player that are not heard or seen by on-court officials by reviewing tapes of televised matches. After reviewing all facts and circumstances,
            the ATP Members Fines Committee may determine that a violation of the Code has occurred and shall specify the fine and/or other punishment. The player shall be
            given written notice of the violation and fine. The player shall have the right to appeal such determination to the ATP Senior Vice President - Rules & Competition,
            consistent with the procedures outlined in the Code.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>N. Payment of Fines</Text>
            {'\n\n'}
            Fines levied by the Supervisor for player on-site offenses shall be paid in accordance
            with the following:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> 1) ATP Tour and ATP Challenger Tour Tournaments. </Text>
            Each tournament shall deduct fines from the player’s winnings, if any, and promptly pay the fine to ATP. In
            the event that the player’s winnings are insufficient to pay the fine, the player shall
            pay the balance within twenty (20) days after the tournament to ATP.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>O.Procedures for Appeal</Text>
            {'\n\n'}
            1) Except for appeals of violations of the Stars Program, any player in violation of a
            player on-site offense may, after paying all fines, appeal to the ATP Members Fines Committee for review of a determination of guilt and the penalty assessed.
            {'\n\n'}
            2) Any player found to have committed a player on-site offense may appeal such
            decision in writing to the ATP Members Fines Committee. Such appeal shall be lodged
            within ten (10) days of the on-site offense. The ATP Members Fines Committee shall review
            the Appeal within twenty-one (21) days and, if necessary, designate a date, time
            and place for a hearing. At the hearing, the player shall present to the ATP Members Fines
            Committee his respective positions on the facts. The ATP Members Fines Committee may
            affirm, reverse or modify the penalty initially imposed by the Supervisor.




            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>P. Appeal of Violations of STARS Program</Text>
            {'\n\n'}

            1) All appeals concerning the ATP STARS Program shall be governed by the procedures in this section.
            {'\n\n'}2) A player can file a written appeal with the Senior Vice President - Rules & Competition within ten (10) days after the player’s receipt of notification of a violation
            of the Stars Program. As a condition to filing an appeal, the player must pay the
            fine prescribed in the Program for the violation.
            {'\n\n'}3) Upon receipt of a timely written appeal, the Senior Vice President - Rules & Competition, or his designee, shall appoint a committee to hear and decide the appeal,
            and also shall appoint one of the committee members to act as the committee’s
            chairman. ATP may provide reasonable compensation and reimbursement of expenses to committee members.
            {'\n\n'}4) The committee shall convene a hearing to hear the appeal and shall render its
            written decision on the case as soon as practicable following the conclusion of the
            hearing. The decision shall be by majority of the committee members.
            {'\n\n'}5) The procedure prior to and at the hearing shall be at the discretion of the committee chairman, including but not limited to the decision to conduct the hearing
            by telephone conference or in person. In establishing such procedures, the chairman shall take into account the amount of the fine involved and any other relevant
            considerations.
            {'\n\n'}6) The committee shall not be bound by judicial rules governing the procedure or the
            admissibility of evidence, provided that the hearing is conducted in a fair manner
            with a reasonable opportunity for each party to submit evidence, address the
            committee and present his or its case.
            {'\n\n'}7) In all appeals, ATP will appear and defend the finding of a violation, and shall
            have the burden of proving, by a preponderance of the evidence, that there has
            been a violation of the STARS Program.
            {'\n\n'}8) The committee’s decision shall be the full, final and complete disposition of the
            appeal and will be binding on all parties.
            {'\n\n'}9) If the player’s appeal is upheld, the Senior Vice President - Rules & Competition
            shall refund to the player the fine paid by the player in connection with this appeal.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Q.Notice and Service</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}></Text>
            {'\n\n'}
            1) Any written communication to be sent to the ATP CEO or Senior Vice President -
            Rules & Competition should be addressed as follows, unless notice of change is
            subsequently published.

            {'\n\t'}ATP Members Fines Committee or SVP - Rules & Competition
            {'\n\t'}ATP Americas
            {'\n\t'}201 ATP Blvd
            {'\n\t'}Ponte Vedra Beach, FL 32082, USA
            {'\n\t'}Telephone: +1 904 285 8000
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Service. </Text>
            {'\n\n'}
            Service to a player of any notice or other document shall be deemed
            completed if mailed to the player at his home address or other address designated by the player.


            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule119', next: 'Rule121', nav: navigation }} />
    </>
  );
}


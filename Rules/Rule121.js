import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule121({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>VIII. THE CODE</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>8.05 Player Major Offenses/Procedures</Text>{'\n\n'}

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Offenses</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Aggravated Behavior</Text>
            {'\n\n'}
            a) No player, their coaches, Physiotherapist, therapist, physician, management
            representative, agent, family member, tournament guest, business associate
            or other affiliate or associate of any player (“Related Persons”), or any other
            person who receives accreditation at an Event at the request of the player or
            any other Related Person, at any ATP Tour or ATP Challenger Tour tournament shall engage in aggravated behavior which is defined as follows:
            {'\n\n'}
            i) One or more incidents of behavior designated in this Code as constituting
            aggravated behavior.
            {'\n\n'}
            ii) One incident of behavior that is flagrant and particularly injurious to the
            success of a tournament, or is singularly egregious, including the sale of
            credentials.
            {'\n\n'}
            iii) A series of two (2) or more violations of this Code within a twelve (12)
            month period which singularly do not constitute aggravated behavior, but
            when viewed together establish a pattern of conduct that is collectively
            egregious and is detrimental or injurious to ATP Tour or ATP Challenger
            Tour tournaments.
            {'\n\n'}
            b) Violation of this section shall subject a player to a fine up to $100,000 or the
            amount of prize money won at the tournament, whichever is greater, and/or
            suspension from play in ATP Tour and ATP Challenger Tour tournaments or
            events for a minimum period of twenty-one (21) days and a maximum period
            of one (1) year. The suspension shall commence on the Monday after the
            expiration of the time within which an appeal may be filed, or, in the case of
            appeal, commencing on the Monday after a final decision on appeal. Violation
            of this Section by a Related Person may result in a maximum penalty of permanent revocation of accreditation and denial of access to all ATP Tour and
            ATP Challenger Tour Tournaments.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Conduct Contrary to the Integrity of the Game</Text>
            The favorable reputation of ATP, its tournaments and players is a valuable asset
            and creates tangible benefits for all ATP members. Accordingly, it is an obligation
            for ATP players and Related Persons, to refrain from engaging in conduct contrary to the integrity of the game of tennis.
            {'\n\n'}
            a) Conduct contrary to the integrity of the game shall include, but not be limited
            to, publicized comments that unreasonably attack or disparage any person or
            group of people, a tournament, sponsor, player, official or ATP. Responsible
            expressions of legitimate disagreement with ATP policies are not prohibited.
            However, public comments that one of the stated persons above knows, or
            should reasonably know, will harm the reputation or financial best interests of
            a tournament, player, sponsor, official or ATP are expressly covered by this
            section.
            {'\n\n'}
            b) A player, or related person, that has at any time behaved in a manner severely damaging to the reputation of the sport, including submitting a falsified
            Covid-19 vaccination record, may be deemed by virtue of such behavior to
            have engaged in conduct contrary to the integrity of the Game of Tennis and
            be in violation of this Section.
            {'\n\n'}
            c) A player, or related person, convicted of a violation of a criminal or civil law of
            any jurisdiction may be deemed by virtue of such conviction to have engaged
            in conduct contrary to the integrity of the Game of Tennis.
            {'\n\n'}
            d) A player, or related person, charged with a violation of a criminal or civil law
            of any jurisdiction may be deemed by virtue of such charge to have engaged
            in conduct contrary to the integrity of the Game of Tennis and the ATP Fines
            Committee may provisionally suspend such player, or related person, from
            further participation in ATP tournaments pending a final determination of the
            criminal or civil proceeding.
            {'\n\n'}
            e) Violation of this section shall subject the player to a fine of up to $250,000
            and/or suspension from play in ATP Tour or ATP Challenger Tour tournaments
            for a period of up to three (3) years. Violation of this Section by a Related
            Person may result in a maximum penalty of permanent revocation of accreditation and denial of access to all ATP Tour and ATP Challenger Tour Tournaments.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Prohibited Promotional Fees</Text>
            {'\n\n'}
            a) ATP Tour 500 and 250 tournaments have the option to offer fees for promotional services. No other ATP Tour or ATP Challenger Tour tournament owner,
            operator, sponsor or agent is permitted to offer, give or pay money or anything
            of value, nor shall the tournament permit any other person or entity to offer,
            give or pay money or anything of value to a player, directly or indirectly, to
            influence or assure a player’s competing in a tournament, other than prize
            money, unless authorized to do so by ATP.
            {'\n\n'}
            b) Violation of this section shall subject the player to a fine up to $20,000 for
            ATP Challenger Tour tournaments, $30,000 for ATP Tour 250 tournaments,
            $40,000 for ATP Tour 500 tournaments, $60,000 for ATP Tour Masters 1000
            tournaments plus the amount of value of any such payment, and/or to sus
            pensions from play in ATP Tour and ATP Challenger Tour tournaments for a
            period of up to three (3) years. The suspension shall begin on the Monday
            after the expiration of the time within which an appeal may be filed, or, in the
            case of appeal, commencing on the Monday after a final decision on appeal.
            The maximum fine will increase by one hundred percent (100%) for each
            consecutive violation during the same calendar year.
            {'\n\n'}
            c) If the ATP Fines Committee believes that a player may be violating this section, then upon demand, the player or his agent, must furnish or provide access to the ATP Fines Committee copies of all records relating to their participation in or, in the absence of such records, an affidavit setting forth the
            facts with respect to any transaction in question. In the event a player fails to
            provide the records or affidavit, the ATP Fines Committee may suspend him
            from participation in ATP Tour and ATP Challenger Tour tournaments pending
            compliance with such demand.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Procedures</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Determination and Penalty</Text>
            {'\n\n'}
            The ATP Fines Committee shall conduct such investigation of an alleged player
            major offense as they, in their sole discretion, determine is appropriate and necessary. Upon completion of their investigation, the ATP Fines Committee shall determine whether a player major offense has occurred and, if so, shall fix a penalty
            to be imposed. A copy of the decision setting forth such penalty shall be promptly
            delivered to the player.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Payment of Fines</Text>
            {'\n\n'}
            The player shall pay all fines levied for player major offenses to ATP by delivery
            to the ATP Fines Committee within twenty-one (21) days after receiving written
            notice.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Appeal</Text>
            {'\n\n'}
            Any player who has received a penalty for a player major offense may, after paying all monetary fines, appeal such determination by filing a written notice with the
            ATP Senior Vice President - Rules & Competition within five (5) days (excluding
            weekends) of such player’s receipt of notice of such determination. Upon receiving such notice of appeal, the ATP Senior Vice President - Rules & Competition
            or his designee shall set a date and place for the hearing.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>4) Hearing on Appeal</Text>
            {'\n\n'}
            The ATP Senior Vice President - Rules & Competition or his designee shall conduct the hearing on appeal in accordance with the following:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) Burden of Proof. </Text>
            The ATP Fines Committee has the responsibility to prove
            the violation by a preponderance of the evidence.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) Rules. </Text>
            The ATP Senior Vice President - Rules & Competition or his designee
            must conduct the hearing in a fair and orderly manner with opportunity for
            each side to present its evidence as to the facts involved, and the player and
            his representative, if any, and the ATP Fines Committee are bound to cooperate fully to this end.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>c) Statement of Position. </Text>
            The ATP Senior Vice President - Rules & Competition or his designee may request the ATP Fines Committee and the player
            to state in writing their respective positions on the facts, the provision(s) of
            the Code allegedly violated and the penalty specified and file the same with
            the ATP Senior Vice President - Rules & Competition or his designee at least
            three (3) days prior to the hearing, with a copy to each other.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) Presentation. </Text>
            The ATP Fines Committee and the player may present evidence personally or through counsel. Each party shall have the right to
            present and to cross-examine witnesses, and to offer documentary evidence
            and testimony by affidavit or deposition. Except for purposes of rebuttal,
            documentary evidence and affidavits shall not be admissible unless a copy
            is submitted at least three (3) days prior to the hearing to the ATP Senior
            Vice President - Rules & Competition or his designee and to the other party.
            Should objection be made to the introduction of an affidavit, the ATP Senior
            Vice President - Rules & Competition or his designee may determine in his
            discretion that the interests of fairness require that the individual be produced
            to testify at the hearing, or alternatively, that such affidavit be excluded. In the
            case of the former, a reasonable continuance may be granted for production
            of such witness.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>e) Hearing. </Text>
            The hearing shall be closed to the public. Once commenced, the
            hearing shall continue from day to day until concluded, unless the ATP Senior Vice President - Rules & Competition or his designee allows otherwise.
            Postponements, adjournments or any form of delay shall be permitted only
            in the case of documented emergency and at the sole discretion of the ATP
            Senior Vice President - Rules & Competition or his designee. Requests for
            postponement shall be submitted in writing to the ATP Senior Vice President
            - Rules & Competition or his designee.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>f) Record. </Text>
            Each party shall have the right to have the hearing recorded or transcribed at its expense.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>g) Interpreter-Legal Advisor. </Text>
            The ATP Senior Vice President - Rules & Competition or his designee may, at his discretion, make provisions for the presence of an interpreter and/or legal advisor for the hearing. The reasonable expenses of such interpreter or legal advisor shall be assumed by ATP pending
            the final decision of the ATP Senior Vice President - Rules & Competition or
            his designee and the taxing of costs as is provided in the decision on appeal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>5) Decision on Appeal</Text>
            {'\n\n'}
            As soon as practicable after the conclusion of the hearing on appeal, the ATP
            Senior Vice President - Rules & Competition or his designee shall render a written
            decision, which decision shall constitute the full, final and complete disposition of
            the issue and will be binding upon the player and upon all members of ATP. The
            ATP Senior Vice President - Rules & Competition or his designee may vacate,
            affirm or modify in whole or in part the penalty, but may not increase it. Notwithstanding the foregoing, the ATP Senior Vice President - Rules & Competition or
            his designee may tax the losing party, whether ATP or the player, all reasonable
            costs of the Appeal, including, but not limited to, the expenses and charges of
            the interpreter, legal advisor and any adverse witness required upon objection
            to testify concerning facts originally presented by way of affidavit. If the costs are
            taxed against a player, then they must be paid by the player to ATP by delivery to
            the ATP Fines Committee within (10) days after receipt of the decision of the ATP
            Senior Vice President - Rules & Competition or his designee.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Suspensions and Collection of Fines</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Suspension - Weeks/Scope</Text>
            {'\n\n'}
            Whenever any suspension is involved as a penalty for a violation of the Code,
            only weeks with ATP Tour or ATP Challenger Tour tournaments shall be included
            in the suspension period.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) Stay of Suspensions Pending Appeal</Text>
            {'\n\n'}
            Whenever a player is suspended by ATP and an appeal either of right or discretionary review is filed, then the suspension shall be stayed pending the resolution
            of the appeal.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Suspension for Non-Payment of Fines</Text>
            {'\n\n'}
            If a fine is not paid in a timely fashion, ATP may suspend, pending payment, the
            party fined from further participation in any ATP Tour and ATP Challenger Tour
            tournament. In addition, ATP is authorized to collect all overdue fines along with
            costs, if any, by all reasonable means, including deduction of the fine from any
            subsequent winnings, or through legal proceedings. When a fine is deducted from
            prize money being paid in non-U.S. currency, the official ATP exchange rate shall
            be applicable to the payment of the fine, to the extent deducted.



            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule120', next: 'Rule122', nav: navigation }} />
    </>
  );
}


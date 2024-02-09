import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule119({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>VIII. THE CODE</HighlightText>
          <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule2.png' }} />
          <ZoomText>
            <HighlightText style={RuleStyles.Description}>
              <HighlightText style={RuleStyles.SubHeading1}>8.03 Tournament Major Offenses</HighlightText>{'\n\n'}

              No ATP Tour or ATP Challenger Tour tournament shall violate any provision of ATP’s
              rules and regulations contained below under the Tournament Major Offense section of the current ATP Official Rule Book. Unless otherwise specified, violation of
              this section shall subject the tournament to a fine up to $250,000, or in the case of
              Tournament Standards Violation under the Tournament Standards Violations Fine
              Table, plus any additional financial penalties specified in other rules, and/or change
              in membership status, and/or forfeiture of all sums, if any, previously paid to ATP.


              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>A.Conduct Contrary to the Integrity of the Game</HighlightText>
              {'\n\n'}

              The favorable reputation of ATP, its tournaments and players is a valuable asset and
              creates tangible benefits for all ATP members. Accordingly, it is an obligation for ATP
              Tour or ATP Challenger Tour tournaments, owner(s), promoter(s), operator(s) or representative(s) thereof, to refrain from engaging in conduct contrary to the integrity of
              the game of tennis. Conduct contrary to the integrity of the game shall include, but not
              be limited to, comments to the news media publicized comments that unreasonably
              attack or disparage any person or group of people, a tournament, sponsor, player,
              official or ATP.
              {'\n\n'}
              Responsible expressions of legitimate disagreement with ATP policies are not prohibited. However, public comments that one of the stated persons above knows,
              or should reasonably know, will harm the reputation or financial best interests of a
              tournament, player, sponsor, official or ATP are expressly covered by this section.


              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}> B.Aggravated Behavior</HighlightText>
              {'\n\n'}

              1) No ATP Tour or ATP Challenger Tour tournament, or any person who directly or
              indirectly has a controlling ownership interest therein or who is the Designated
              Representative (as defined in the ATP By-Laws) or Tournament Director or other
              employee or agent of an ATP Tour or ATP Challenger Tour tournament shall engage in aggravated behavior which is defined as follows:
              {'\n\n'}
              a) One incident of behavior that is flagrant and particularly injurious to the success of the ATP or its members or is singularly egregious.

              {'\n\n'}
              b) A series of two (2) or more violations of this Code in consecutive years which
              singularly do not constitute aggravated behavior, but when viewed together
              establish a pattern of conduct that is collectively egregious and is detrimental
              or injurious to ATP and/or its members.


              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>C.Promotional Fees</HighlightText>
              {'\n\n'}

              1) ATP Tour 500 and ATP Tour 250 tournaments have the option to offer fees for promotional services. No other ATP Tour or ATP Challenger Tour tournament owner,
              operator, sponsor or agent is permitted to offer, give or pay money or anything of
              value, nor shall the tournament permit any other person or entity to offer, give or
              pay money or anything of value to a player, directly or indirectly, to influence or
              assure or entice a player’s competing in a tournament or event within the tournament, other than prize money, unless authorized to do so by ATP.
              {'\n\n'}
              2) In the event the ATP CEO or Senior Vice President - Rules & Competition believes that a tournament may be violating this section, then upon demand, the
              tournament must furnish to the Senior Vice President - Rules & Competition or his
              agent access to and copies of all records to which it has access relating to such
              alleged prohibited compensation or, in the absence of such records, an affidavit
              setting forth the facts in detail with respect to any transaction under question by
              the Senior Vice President - Rules & Competition. In the event a tournament fails
              to provide such records or affidavit for such audit, it may be subject to a fine up
              to $100,000 and termination of membership, pending compliance with such demand.
              {'\n\n'}
              3) Violation of this section shall subject the tournament to a fine up to $100,000 plus
              the amount or value of any such compensation, and termination of membership,
              and/or forfeiture of all sums, if any, previously paid to ATP.


              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>D.Wagers and On-Site Tennis Betting</HighlightText>
              {'\n\n'}

              No ATP Tour or ATP Challenger Tour tournament, ATP member or any person w h o
              directly or indirectly has a controlling ownership interest therein or who is the Designated Representative (as defined in the ATP By-Laws) or Tournament Director or
              other employee or agent of an ATP Tour or ATP Challenger Tour tournament or ATP
              member (excluding employees or agents who do not have executive or material management authority) shall engage in any form of gambling or wagering in connection
              with any ATP Tour or ATP Challenger Tour tournament.


              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>E. Wild Cards</HighlightText>
              {'\n\n'}

              No ATP Tour or ATP Challenger Tour tournament, or any person who directly or indirectly has a controlling ownership interest therein or who is the Designated Representative (as defined in the ATP By-Laws) or Tournament Director or other employee
              or agent of an ATP Tour or ATP Challenger Tour tournament shall directly or indirectly,
              accept compensation in exchange for a wild card.



              {'\n\n'}
              <HighlightText style={RuleStyles.SubHeading2}>F. Investigation, Determination, Imposition and Review</HighlightText>
              {'\n\n'}

              1) The Senior Vice President - Rules & Competition/ATP Members Fines Committee, as applicable, shall investigate all facts concerning any alleged tournament
              violation of an ATP rule or regulation and shall provide written notice of such
              investigation to the tournament involved. The tournament shall be given at least
              five (5) days (excluding weekends) to provide to the Senior Vice President - Rules
              & Competition/ATP Members Fine Committee, directly or through counsel, such
              evidence as the tournament deems to be relevant to the investigation. The Senior Vice President - Rules & Competition/ATP Members Fine Committee shall
              conduct the investigation in consultation with the applicable ATP Regional EVP or
              SVP.
              {'\n\n'}
              2) Upon the completion of the investigation, the Senior Vice President - Rules &
              Competition/ATP Members Fine Committee, as applicable, shall determine the
              innocence or guilt of the tournament involved and, in the latter case, shall state in
              writing the facts as found by him, his conclusions and the penalty to be imposed
              on the tournament. A copy of the decision of the Senior Vice President - Rules
              & Competition/ATP Members Fine Committee shall be promptly delivered to the
              tournament with copies to the ATP CEO, or in the case of Standards Violations,
              the ATP Members Fine Committee up to $10,000 or the ATP Standards Committee for fines over $10,000 and the applicable ATP Regional EVP or SVP.

              {'\n\n'}
              3) All fines shall be paid by the tournament by delivery to the Senior Vice President
              - Rules & Competition within twenty one (21) days after receipt of written notice.
              {'\n\n'}
              4) Any tournament found to have violated an ATP rule, regulation or condition of
              approval that results in a fine, may, after paying all fines, petition the ATP CEO
              for discretionary review, or in the case of Standards Violations, the ATP Members
              Fines Committee for fines up to $10,000 or the ATP Standards Committee for
              fines over $10,000. This petition shall be in writing and must be filed with the
              ATP CEO, Senior Vice President - Rules & Competition, or the ATP Members
              Fine Committee/ATP Standards Committee (as applicable) within twenty one (21)
              days after notice of the determination and penalty is received by the tournament.
              (The Senior Vice President - Rules & Competition/ATP Members Fines Committee, where applicable, shall forward the review petition promptly to the ATP CEO
              or ATP Members FInes Commiteee/ATP Standards Committee (as applicable)).
              Such petition shall state in detail the basis for the appeal. Within twenty-one (21)
              days after receipt of the petition, the ATP CEO or his designee, or in the case of
              Standards Violations, the ATP Members Fines Commiteee/ATP Standards Committee (as applicable) shall determine whether the appeal should proceed to a
              hearing or if a determination based upon the facts as presented is appropriate.
              If the ATP CEO or his designee, or in the case of Standards Violations, the ATP
              Members Fines Commitee/ATP Standards Committee (as applicable) determines
              that the appeal should not proceed to a hearing, then the decision, upon notice
              to the tournament, becomes final. This decision may affirm, reverse or modify
              the decision of the Senior Vice President - Rules and Competition/ATP Members
              Fines Committee. If the ATP CEO or his designee, or in the case of Standards
              Violations, the ATP Members Fines Committee/ATP Standards Committee (as
              applicable) determines that the appeal should proceed to a hearing, he shall designate a date; time and place for the hearing of the appeal, and the ATP CEO
              or his designee, or in the case of Standards Violations, the ATP Members Fines
              Committee/ATP Standards Committee (as applicable) shall notify the tournament
              and the Senior Vice President - Rules & Competition/ATP Members Fines Committee. At the hearing, the tournament and the Senior Vice President - Rules
              & Competition/ATP Members Fines Commitee shall present to the ATP CEO or
              his designee, or in the case of Standards Violations, the ATP Members Fines
              Committee/ATP Standards Committee (as applicable), their respective positions
              on the facts. On the appeal, the ATP CEO or his designee, or in the case of Standards Violations, the ATP Members Fines Committee/ATP Standards Committee (as applicable) may affirm, reverse or modify the decision of the Senior Vice
              President - Rules & Competition/ATP Members Fines Committee. If the appeal
              is decided against the tournament, then the ATP CEO or his designee, or in the
              case of Standards Violations, the ATP Members Fines Committee/ATP Standards
              Committee (as applicable) shall charge to the tournament the reasonable costs
              of the appeal, which shall include, but not be limited to, the reasonable travel and
              living expenses incurred by all witnesses.
              {'\n\n'}
              5) If the penalty imposed on the tournament includes a recommendation for loss
              or change in tournament membership status, that recommendation shall be reviewed by the ATP Board, which may implement, modify or reject the recommendation of the Senior Vice President - Rules & Competition/ATP Members Fines
              Committee or ATP Standards Committee. The imposition of any non fine penalty
              by the ATP Board shall be made in accordance with the By-laws.
              {'\n\n'}
              6) Service of any document on a tournament as is required by this section shall be
              deemed completed if mailed to the Tournament Director at the address indicated in the tournament application or as subsequently revised by the tournament
              member. Any written communication to be sent to the ATP CEO or Senior Vice
              President - Rules & Competition, or in the case of Standards Violations, the ATP
              Members Fines Committee/ATP Standards Committee (as applicable) should be
              addressed as follows, unless notice of change is subsequently published.
              {'\n\n'}
              {'\n\n'}ATP CEO
              {'\n\n'}22 Worple Road
              {'\n\n'}Wimbledon
              {'\n\n'}SW14 4DD
              {'\n\n'}Telephone: +44 207 381 7890
              {'\n\n'}Facsimile: +44 207 381 7895
              {'\n\n'}
              OR
              {'\n\n'}
              {'\n\n'}SVP - Rules & Competition or ATP Fines/Standards Committees
              {'\n\n'}ATP
              {'\n\n'}201 ATP Tour Blvd.
              {'\n\n'}Ponte Vedra Beach, FL 32082, USA
              {'\n\n'}Telephone: +1 904 285 8000
              {'\n\n'}Facsimile: +1 904 779 3300

              {'\n\n'}
              7) ATP is authorized to obtain collection of all overdue fines along with costs, if any,
              by all reasonable means, including legal proceedings as may be deemed necessary and appropriate.




              {'\n\n'}
            </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule118', next: 'Rule120', nav: navigation }} />
    </>
  );
}


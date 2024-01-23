import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule118({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>VIII. THE CODE</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>8.02 Tournament Standards Violations</Text>{'\n\n'}

            No ATP Tour or ATP Challenger Tour tournament shall violate any provision of ATP’s
            rules, regulations, or conditions of approval. Unless otherwise specified, a violation of
            this section shall subject the tournament to a fine specified in the table below (“Tournament Standards Violations Fines Table”).
            {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule118_1.png'}}/>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule118_2.png'}}/>
          <Text style={RuleStyles.Description}>
            {'\n\n'}
            *Specific amounts are on a per violation basis and should depend and may vary on
            the severity of the violation and issue(s) presented. This maximum fine amount will
            increase by one-hundred percent (100%) for each consecutive year violation of the
            same standard by a tournament.

            {'\n\n'}
            ** Change in category and/or membership status is subject to a decision by the ATP
            Board.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.On-Site</Text>
            {'\n\n'}

            On-site violations may include, but are not limited to, tournament obligations specified in the current ATP Official Rulebook under sections titled ATP Circuit Regulations, Branding, Financial, Personnel and Facilities & On-Site Conditions.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.Security at Tournaments</Text>
            {'\n\n'}

            Each tournament has the responsibility to provide security at the tournament site.
            Tournaments must submit their security plan sixty (60) days in advance to the ATP
            Security Director.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Tournament Report</Text>
            {'\n\n'}

            Each ATP Tour and ATP Challenger Tour tournament shall submit to ATP a report of
            the tournament and its affairs as requested by ATP.



            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>D.ATP Fantasy Sport and Sponsorship</Text>
            {'\n\n'}

            ATP Tour tournaments may enter sponsorship agreements with a company that offers wagering on tennis (a “Tennis Betting Operator”) subject to the terms and conditions stated in Exhibit AD. The agreements may not extend beyond December 31,
            2026. ATP Challenger 125 and 175 tournaments may enter sponsorship agreements
            with a Tennis Betting Operator subject to those agreements being sold and controlled
            centrally by the ATP, the revenues are distributed to the relevant tournaments and
            follow the rules applicable to ATP Tour events. The agreements for ATP Challenger
            125 and 175 tournaments may not extend beyond December 31, 2026. ATP will assess any negative effects of such sponsorship agreements in determining whether to
            extend these periods.
            {'\n\n'}
            ATP Tour tournaments may accept sponsorship from a fantasy sport branded company promoting only the fantasy sport brand. If the company does not offer, and is not
            affiliated with a company that offers, wagering on tennis, or if a betting, casino, lottery
            or fantasy sport-branded company is not a Tennis Betting Operator and the proposed
            sponsorship will not promote a Tennis Betting Operator, these rules shall not apply to
            the sponsorship and there are no restrictions on the sponsorship agreement, except
            that ATP approval shall still be required and Tournament Support Personnel shall
            still comply with the TACP (as defined below). If, during the term of the sponsorship,
            the company becomes a Tennis Betting Operator or the sponsorship will promote a
            tennis betting brand, the sponsorship must comply with these rules. However, most
            fantasy sport brands offer, or are affiliated with companies that offer, wagering on
            tennis and constitute a Tennis Betting Operator as defined herein. In that case, all
            the terms and conditions in Exhibit AD apply to such fantasy sport Tennis Betting
            Operator. Such agreements may not extend beyond December 31, 2026.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>E. On-Site Tennis Betting</Text>
            {'\n\n'}

            No ATP Tour or ATP Challenger Tour tournament shall, directly or indirectly, solicit or
            facilitate any person to wager on tennis matches while at the tournament site. Allowing betting companies, directly or through a third party, to accept any tennis wagers
            (electronically or otherwise) at the tournament site or any tournament related event is
            prohibited.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>F. Determination of Violation and Penalty</Text>
            {'\n\n'}

            The SVP – Rules & Competition shall make a reasonable investigation to determine
            the facts regarding all tournament on-site offenses. Upon determining that a violation
            has occurred, the SVP – Rules & Competition shall specify the fine and/or other
            punishment in written notice to the tournament. The tournament shall have the right
            to appeal such determination to the ATP Standards Committee, consistent with the
            procedures outlined in the Code.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>G.Payment of Fines</Text>
            {'\n\n'}

            Fines levied by the SVP – Rules & Competition for tournament on-site offenses shall
            be paid in accordance with the following:
            {'\n\n'}
            1) ATP Tour and ATP Challenger Tour Tournaments. Each tournament shall promptly
            pay the fine to ATP.
            {'\n\n'}
            2) The tournament may authorize ATP to withhold the amount of the fine from any
            monies owed the tournament by ATP.
            {'\n\n'}
            3) If the monies owed to the tournament are insufficient to pay the fine, the tournament shall pay the balance within twenty-one (21) days after receiving written
            notice of the fine.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>H.Procedures for Appeal</Text>
            {'\n\n'}

            1) Any tournament in violation of a tournament on-site offense may, after paying all
            fines, appeal to the ATP Standards Committee for review of a determination of
            guilt and the penalty assessed.
            {'\n\n'}
            2) Such appeal shall be in accordance with the procedure specified in Section 8.03
            F. 4.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule117', next: 'Rule119', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule42({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.18 ATP Tournament 500 Financial Information</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A. </HighlightText>
            Each ATP 500 tournament member is required to annually submit to the 500 PM
            Committee Auditor an independently audited tournament income statement and
            related footnotes, along with other information as requested by the 500 PM Committee
            and the 500 PM Committee Auditor . This income statement must be a complete and
            accurate determination of actual net income and net income before income taxes.
            In connection with the foregoing, each 500 tournament member shall provide its full
            cooperation to the 500 PM Committee Auditor, who will examine and verify the accuracy
            of such information.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>The following terms shall have the meanings set forth below: {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>“500 Prize Money Committee (500 PM Committee)”</HighlightText>
            means the committee appointed
            by the ATP Board of Directors and authorized to act in accordance with this
            rule, which shall be comprised of the ATP Chairman or his designee, a 500
            Independent Member (as defined below) and an equal number of tournament and player
            representatives, with only one (1) tournament representative and one (1) player
            representative serving on such 500 PM Committee being designated by the class of ATP
            Board Directors that appointed such representatives with the right to vote on any 500
            PM Committee matters, regardless of the number of tournament and player
            representatives appointed to serve on the 500 PM Committee. The player representative
            and the tournament representative designated with the right to vote on 500 PM
            Committee matters shall be collectively referred to herein as the “500 Voting Members”.
            If appointed voting member is unable to attend meeting, provided that proper notice
            has taken place for such meeting, voting member is allowed to grant his/her vote by
            proxy to another committee member.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“500 PM Committee Auditor” </HighlightText>
            means an independent accounting firm appointed
            by the 500 PM Committee to (i) receive and evaluate each tournament member’s
            500 Submissions and tournament financials, (ii) perform agreed upon procedures
            regarding financial information included in each 500 Submission, and (iii) prepare
            reports to be provided to the 500 PM Committee and to the ATP Board of Directors
            in accordance with this rule summarizing the 500 Submissions. The 500 PM Committee
            Auditor will also act as advisor to the 500 PM Committee on financial and
            accounting related matters and GAAP reporting issues and questions. The 500 PM
            Committee Auditor will be instructed not to provide to any party, including the 500 PM
            Committee, any of its members, the ATP Board of Directors, ATP or its staff, except
            for the 500 Player Auditor, the ATP Chairman, CEO and CFO (or their respective
            reasonably appointed designees), individual tournament information or any information
            that could reasonably lead to the calculation of individual tournament information and
            the matching of the information to a particular tournament. The 500 PM Committee
            Auditor will be required to execute and deliver to the 500 PM Committee a statement
            of confidentiality and non-disclosure prohibiting the 500 PM Committee Auditor from
            making any such disclosure. Notwithstanding the foregoing, the 500 PM Committee
            Auditor, the 500 Player Auditor, the ATP Chairman, CEO and CFO (or their respective
            reasonably appointed designees) may share individual tournament information
            or documentation across the 500 category tournament members in an anonymized
            fashion.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“500 Independent Auditor”</HighlightText>
            means a highly qualified independent certified public
            accounting firm selected by each 500 tournament member and approved by ATP to
            perform a full scope independent audit of the 500 Tournament Income Statement and
            perform certain other agreed upon procedures and to provide results of such
            procedures to the 500 PM Committee Auditor. {'\n\n'}  

            <HighlightText style={RuleStyles.SubHeading3}>“500 Independent Member”</HighlightText>
            means the independent member of the 500 PM Committee
            appointed by the ATP Board of Directors by the aﬃrmative vote of a super
            majority vote of the Board to serve on the 500 PM Committee for a 3-year term. The
            Independent Member is subject to removal at any time by the ATP Board of Directors
            by the aﬃrmative vote of a super majority vote of the Board.  {'\n\n'}  
   
            <HighlightText style={RuleStyles.SubHeading3}>“500 Player Auditor”</HighlightText>

            means an independent certified public accountant and/or financial
            advisor selected by the player member(s) of the 500 PM Committee and
            approved by the 500 PM Committee in accordance with Section C below, who meets
            the appropriate level of expertise and experience to evaluate the accuracy of the 500
            Submissions. The 500 Player Auditor will act as advisor to the player member(s) of
            500 PM Committee. The 500 Player Auditor may also review items and information
            related to the application of the 500 Prize Money Formula Rule to the extent requested
            by the player member(s) of the 500 PM Committee and shall provide comfort to
            such member(s) as to the accuracy of the 500 Submissions to confirm the
            reasonableness of the 500 PM Committee Auditor’s evaluation thereof. 500 Player Auditor
            will be instructed not to provide to any party, including the 500 PM Committee, any
            of its members, ATP or its staff, except for the ATP Chairman, CEO and CFO (or
            their respective reasonably appointed designees), individual tournament information
            or any information that could reasonably lead to the calculation of individual tournament
            information and the matching of the information to a particular tournament. The
            500 Player Auditor will be required to execute and deliver to the 500 PM Committee
            a statement of confidentiality and non-disclosure prohibiting the 500 Player Auditor
            from making any such disclosure.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“Gross Revenues”</HighlightText>
            means the total amount of gross revenues related to a tournament
            determined on the basis of local GAAP, US GAAP or the IFRS (depending on
            the applicable accounting rules in the country in which the tournament operates), in
            each case, as in effect on such date of determination and consistently applied, which
            shall include all revenues related to the tournament’s operations regardless of which
            entity affiliated with the tournament receives, or accounts for, such revenues or in
            which jurisdiction such revenues are reported. All such revenues shall be reported
            in the tournament’s domestic reporting currency. For men’s and women’s combined
            tournaments, total Gross Revenues should be broken out by tournament and categorized
            by those identifiable only to the men’s tournament, those identifiable only to
            the women’s tournament, and all other revenues. The 500 PM Committee has the
            power to create additional rules for reporting Gross Revenues. Consistent with local
            GAAP, US GAAP and IFRS, tournaments will report estimated revenues for those
            revenue sources where final revenue amounts are not determinable by the deadline
            for completing the 500 Submission. Subsequent adjustments of these estimates to
            actual will be included in Gross Revenues in the subsequent 500 Submission when
            such final revenue amounts are known.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“Barter”</HighlightText>
            a description of each Barter transaction must be included as part of each
            500 Submission. Barter transactions as defined below for each revenue category
            are required to be included in Gross Revenues. Barter for this purpose is non-cash
            transactions (for example advertising) where value is exchanged (for example, when
            cars are provided as part of a car sponsor deal the value of the cars provided must
            be included in sponsor revenues. Another example is tickets given to a local club or
            charity for no consideration would not be valued or included in ticketing revenues).
            Barter valuations should be in accordance with local GAAP, US GAAP or IFRS applicable
            to each tournament. The 500 PM Committee will work with the 500 PM Committee
            Auditor and include a comprehensive definition of barter transactions and their
            valuation for Gross Revenue purposes and include such comprehensive definition as
            part of the 500 Submission.{'\n\n'}

            The following Barter transactions are excluded from Gross Revenues:{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>(a)</HighlightText>
            Media commitments for promotional time or space that are not for resale and are
            used solely (i) to promote the tournament, (ii) to promote the ATP or any related
            event or activity of the tournament that generates Gross Revenues, (iii) to promote
            charitable or not for profit organizations or agencies that are unrelated to the
            tournament or tournament affiliates, or (iv) for public service announcements.{'\n\n'}
           
            <HighlightText style={RuleStyles.SubHeading3}>(b)</HighlightText>
            Any barter transaction that is both used to satisfy tournament standards and is
            for the direct benefit of the players. Such direct player benefits include, but are
            not limited to, hotel accommodations; player transportation, player food, meals
            and beverages; lounge for players; internet access for players; and gifting and
            on-court supplies for players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>(c)</HighlightText>
            De Minimus barter transactions are defined as individual transactions with valuations
            under $20,000 for 500 tournaments. De Minimus transactions are not
            required to be reported individually in the 500 Submission as long as the total
            of such individual transactions is 5% or less of Gross Revenues. In the event
            such total exceeds 5% of Gross Revenues, tournaments must individually report
            the highest valued barter transactions included in the total such that the total
            excluding those transactions is 5% or less of Gross Revenues. A summary
            written description of each De Minimus transaction is required to be included in the
            Submission.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>“500 Submission”</HighlightText>
            means the prescribed, mandatory annual financial information
            report required to be submitted to the 500 PM Committee Auditor by each 500
            tournament member (or its 500 Independent Auditor) hereunder, which, for the avoidance
            of doubt, shall include a 500 Tournament Income Statement and further information
            reasonably requested by the 500 PM Committee Auditor similar in detail to the previous
            Tournament Financial Review process, but also including full disclosure and
            arms- length fair valuation of related party transactions for both income and expenses
            and owner transactions. 500 Submission must reconcile (with a schedule and
            explanation of any reconciling differences provided) to the audited 500 Tournament
            Income Statement. 500 Submission may also include any other information reasonably
            requested by the 500 PM Committee. The 500 Submission must be completed in
            full as determined by the 500 PM Committee Auditor to be considered in compliance
            with this rule.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>“500 Tournament Income Statement”</HighlightText>
            means the independently audited income
            statement which includes all revenues, costs and expenses and provides both net
            income and net income before income taxes related to the tournament. Such 500
            Tournament Income Statement will be reported in accordance with local GAAP, US
            GAAP, the IFRS for small and medium size businesses, in each case consistently
            applied. Each 500 Tournament Income Statement shall include all revenues, costs
            and expenses related to the tournament’s event operations regardless of which entity
            affiliated with the tournament event receives, or accounts for, such revenues, costs
            or expenses or which jurisdiction such items are reported. All such amounts shall be
            reported in the tournament’s domestic reporting currency. The 500 PM Committee
            has the authority to create additional rules for such reporting. Consistent with both
            GAAP, the IFRS for small and medium size businesses, or Local GAAP, tournaments
            will report estimated revenues, costs and expenses where final amounts are not
            determinable by the deadline for completing the 500 Submission. Subsequent adjustments
            of these estimates to actual will be included in the 500 Tournament Income
            Statement in the subsequent 500 Submission when such final amounts are known.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>C. </HighlightText>
            The 500 PM Committee will administer, implement and enforce this rule, Iing, but not
            limited to (i) determining procedures for audits for purposes of financial disclosures
            in accordance with the terms of this rule; (ii) determining the process of receiving
            financial information from tournament members and audits with respect to such
            information (iii) evaluating and resolving questions and issues that may arise in respect
            of any audit, 500 Submission or violation of this rule; (iv) enforcing this rule pursuant
            to Section G below; and (v) implementing any other aspect of this rule. All actions,
            approvals and determinations of the 500 PM Committee shall require a unanimous
            vote of the 500 Voting Members, unless otherwise expressly provided in this rule
            (including as set forth in Sections D, E, F and G). The ATP Chairman shall have no
            right to vote on 500 PM Committee matters; provided, however, that in the event
            that the 500 Voting Members are unable to unanimously agree on the appointment
            of the 500 Player Auditor, the ATP Chairman acting reasonably shall have the right
            to vote on whether approval of the proposed 500 Player Auditor should be granted.
            If any such vote by the ATP Chairman occurs and the ATP Chairman votes against
            the approval of any proposed 500 Player Auditor, then the ATP Chairman will provide
            a brief description of his or her reason for such decision to the 500 PM Committee.
            The 500 PM Committee will meet regularly as deemed necessary by the 500 PM
            Committee to properly administer, implement and enforce this rule. The ATP Board of
            Directors will make reasonable and adequate funding available to enable to the 500
            PM Committee to administer, implement and enforce this rule in accordance with the
            terms herein.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>D. </HighlightText>
            Each 500 tournament member is required to provide a complete and accurate 500
            Submission annually to the 500 PM Committee Auditor no later than 120 days 
            following the conclusion of its tournament for such year. Independently audited financial
            information is to be provided no later than 120 days following the conclusion of
            tournament’s fiscal year end. Each 500 Submission must be certified by the applicable
            tournament member as complete and accurate and in compliance with this rule in all
            material respects.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>E. </HighlightText>
            Each year, the 500 PM Committee Auditor will perform agreed upon audit procedures
            (as directed by the 500 PM Committee) of each tournament member 500 Submission,
            and report to the 500 PM Committee any issues that it may identify as a result
            of these procedures for which the 500 PM Committee Auditor is unable to resolve
            with the respective tournament. Once this process is complete, the 500 PM Committee
            Auditor will provide the results of its procedures and the supporting audit work
            papers to the 500 Player Auditor. Such information will be provided to the 500
            Player Auditor without identifying individual tournament names. The 500 Player Auditor
            will undertake a review of the provided information and results. After completing this
            review, if the 500 Player Auditor has any outstanding issues or questions, the 500
            Player Auditor will work with the 500 PM Committee Auditor to resolve such issues
            and questions. In the event that the 500 PM Committee Auditor and the 500 Player
            Auditor are unable to resolve any such issues or questions, the 500 PM Committee
            Auditor and the 500 Player Auditor will inform the 500 PM Committee and may jointly
            conduct an on-site audit at the offices of the relevant tournament or Related Party
            to review and evaluate the books and records of such tournament or Related Party
            that are reasonably necessary to resolve such issue or question; provided, that any
            such joint on-site audit must be conducted during regular business hours. If after any
            joint on-site audit, the 500 PM Committee Auditor and the 500 Player Auditor are still
            unable to resolve any such issues or questions (or in the event the 500 PM Committee
            Auditor and the 500 Player Auditor elect not to conduct an on-site audit and
            such issues or questions remain), the 500 PM Committee Auditor and the 500 Player
            Auditor will inform the 500 PM Committee and the 500 PM Committee will evaluate
            the information presented and make a determination on the issue(s) or question(s),
            and then issue a determination as to whether the unresolved issue(s) or question(s)
            is due to an act or omission of a tournament member. In the event that the 500
            Voting Members are unable to unanimously agree on such determination, then the 500
            Independent Member will make such determination in his or her sole discretion. If it is
            determined that the unresolved issue(s) or questions(s) are due to an act or omission
            of a tournament member, then the 500 PM Committee will determine the implications
            for the purpose of the prize money formula calculation and/or that tournament may
            be subject to a fine pursuant to Section G below.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>F.</HighlightText>
            Any tournament member that (i) fails to provide a 500 Submission to the 500 PM
            Committee Auditor as required under this rule (including with respect to the
            timing, accuracy and/ or completeness thereof), (ii) submits a report or document that
            contains a material misstatement or omits material information, (iii) does not fully
            cooperate with the 500 PM Committee Auditor and 500 Player Auditor as required
            hereunder, or (iv) otherwise fails to comply with this rule, may request from the 500
            PM Committee a 10 day extension in order to comply with its submission failure.
            Following any such extension the tournament in each case, may be subject to a fine in a
            maximum amount of $250,000. This maximum fine amount will increase by 100% for
            each consecutive year submission failure by a tournament. The 500 PM Committee
            shall evaluate the circumstances that led to the failure of such tournament member
            to comply with the terms of this rule and assess an appropriate fine taking into
            consideration the guidelines set forth in Section G below or as otherwise provided by the
            ATP Board of Directors from time to time. For clarity, any such guidelines will be for
            guidance purposes only and the 500 PM Committee will have the right to determine
            an appropriate fine in its sole discretion. In the event that the 500 Voting Members are
            unable to unanimously agree on a fine, the 500 Independent Member will make such
            determination in his or her sole discretion taking into account the circumstances that
            led to the failure of the tournament member to comply with the terms of this rule. All
            fines assessed under this rule will be contributed to player programs as determined
            by the Player Board Representatives.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>G. </HighlightText>
            The following guidelines are fines that may be imposed for violations of this rule (subject
            to the discretion of 500 PM Committee as set forth in this rule):{'\n\n'}
            </HighlightText>
            </ZoomText>
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule42_1.png'}}/>
            <ZoomText>
            <HighlightText> {'\n\n'}
            * Specific amounts should depend on the severity of the violation and issue(s)
            presented.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule41', next: 'Rule43', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule41({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.17 ATP Masters 1000 Tournament Financial Information</HighlightText>{'\n\n'}
            
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A. </HighlightText>
            Each Masters 1000 tournament member is required to annually submit to the M1000
            PM Committee Auditor an independently audited tournament income statement
            and related footnotes, along with other information as requested by the M1000 PM
            Committee and the M1000 PM Committee Auditor. This income statement must be
            a complete and accurate determination of actual net income and net income before
            income taxes. In connection with the foregoing, each Masters 1000 tournament
            member shall provide its full cooperation to the M1000 PM Committee Auditor, who
            will examine and verify the accuracy of such information.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>
            The following terms shall have the meanings set forth below:{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Prize Money Committee (M1000 PM Committee)”</HighlightText>
            means the committee
            appointed by the ATP Board of Directors and authorized to act in accordance with
            this rule, which shall be comprised of the ATP Chairman or his designee, an M1000
            Independent Member (as defined below) and an equal number of tournament and
            player representatives, with only one (1) tournament representative and one (1)
            player representative serving on such M1000 PM Committee being designated by the
            class of ATP Board Directors that appointed such representatives with the right to
            vote on any M1000 PM Committee matters, regardless of the number of tournament
            and player representatives appointed to serve on the M1000 PM Committee. The
            player representative and the tournament representative designated with the right to
            vote on M1000 PM Committee matters shall be collectively referred to herein as the
            “M1000 Voting Members”. If appointed voting member is unable to attend meeting,
            provided that proper notice has taken place for such meeting, voting member is
            allowed to grant his/her vote by proxy to another committee member.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 PM Committee Auditor” </HighlightText>
            means an independent accounting firm appointed
            by the M1000 PM Committee to (i) receive and evaluate each tournament member’s
            M1000 Submissions and tournament financials, (ii) perform agreed upon procedures
            regarding financial information included in each M1000 Submission, and (iii) prepare
            reports to be provided to the M1000 PM Committee and to the ATP Board of Directors
            in accordance with this rule summarizing the M1000 Submissions. The M1000 PM
            Committee Auditor will also act as advisor to the M1000 PM Committee on financial
            and accounting related matters and GAAP reporting issues and questions. The
            M1000 PM Committee Auditor will be instructed not to provide to any party, including
            the M1000 PM Committee, any of its members, the ATP Board of Directors, ATP or
            its staff, except for the M1000 Player Auditor, the ATP Chairman, CEO and CFO,
            individual tournament information or any information that could reasonably lead to the
            calculation of individual tournament information and the matching of the information
            to a particular tournament. The M1000 PM Committee Auditor will be required to
            execute and deliver to the M1000 PM Committee a statement of confidentiality and
            non-disclosure prohibiting the M1000 PM Committee Auditor from making any such
            disclosure.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Independent Auditor” </HighlightText>
            means a highly qualified independent certified public
            accounting firm selected by each 1000 tournament member and approved by ATP to
            perform a full scope independent audit of the M1000 Tournament Income Statement
            and perform certain other agreed upon procedures and to provide results of such
            procedures to the M1000 PM Committee Auditor.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Independent Member” </HighlightText>
            means the independent member of the M1000 PM
            Committee appointed by the ATP Board of Directors by the aﬃrmative vote of a super
            majority vote of the Board to serve on the M1000 PM Committee for a 3 year term.
            The Independent Member will serve as Chair of M1000 PM Committee. The Independent
            Member is subject to removal at any time by the ATP Board of Directors by the
            aﬃrmative vote of a super majority vote of the Board.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Player Auditor” </HighlightText>
            means an independent certified public accountant and/or
            financial advisor selected by the player member(s) of the M1000 PM Committee and
            approved by the M1000 PM Committee in accordance with Section C below, who
            meets the appropriate level of expertise and experience to evaluate the accuracy of
            the M1000 Submissions. The M1000 Player Auditor will act as advisor to the player
            member(s) of M1000 PM Committee. The M1000 Player Auditor may also review
            items and information related to the application of the Masters 1000 Player Compensation
            Rule to the extent requested by the player member(s) of the M1000 PM Committee
            and shall provide comfort to such member(s) as to the accuracy of the M1000
            Submissions to confirm the reasonableness of the M1000 PM Committee Auditor’s
            evaluation thereof. M1000 Player Auditor will be instructed not to provide to any party,
            including the M1000 PM Committee, any of its members, ATP or its staff, except for
            the ATP Chairman, CEO and CFO, individual tournament information or any information
            that could reasonably lead to the calculation of individual tournament information
            and the matching of the information to a particular tournament. The M1000 Player
            Auditor will be required to execute and deliver to the M1000 PM Committee a statement
            of confidentiality and non-disclosure prohibiting the M1000 Player Auditor from
            making any such disclosure.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“Related Party” </HighlightText>
            means a person or company that has control, joint control or significant
            influence over the tournament or a tournament entity, either by ownership, by
            agreement, or by power to manage, govern or influence the tournament’s finances
            and/or operations. Also, a person or company is considered to be a related party to
            the tournament if the tournament has control, joint control or significant influence over
            the person or company, either by ownership, by agreement, or by power to manage,
            govern or influence the person or company’s finances and/or operations.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Submission”</HighlightText>
            means the prescribed, mandatory annual financial information
            report required to be submitted to the M1000 PM Committee Auditor by each
            Masters 1000 tournament member (or its M1000 Independent Auditor) hereunder,
            which, for the avoidance of doubt, shall include a M1000 Tournament Income Statement
            and further information reasonably requested by the M1000 PM Committee
            Auditor similar in detail to the previous Tournament Financial Review process, but also
            ncluding full disclosure and armslength fair valuation of related party transactions for
            both income and expenses and owner transactions. M1000 Submission must
            reconcile (with a schedule and explanation of any reconciling differences provided) to the
            audited M1000 Tournament Income Statement. M1000 Submission may also include
            any other information reasonably requested by the M1000 PM Committee. The M1000 Submission 
            must be completed in full as determined by the M1000 PM Committee Auditor to be considered 
            in compliance with this rule.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>“M1000 Tournament Income Statement” </HighlightText>
            means the independently audited income
            statement which includes all revenues, costs and expenses and provides both net
            income and net income before income taxes related to the tournament. Such M1000
            Tournament Income Statement will be reported in accordance with Generally Accepted
            Accounting Principles in the United States (“US GAAP”), the International
            Financial Reporting Standards (“IFRS”) for small and medium size businesses or the
            applicable General Accepted Accounting Principles (“local GAAP”) in the country in
            which the tournament operates. These reporting standards must be consistently applied
            over a period of five years at least. Each M1000 Tournament Income Statement
            shall include all revenues, costs and expenses related to the tournament’s event
            operations regardless of which entity affiliated with the tournament event receives,
            or accounts for, such revenues, costs or expenses or which jurisdiction such items
            are reported. All such amounts shall be reported in the tournament’s domestic reporting
            currency. The M1000 PM Committee has the authority to create additional rules
            for such reporting. Consistent with local GAAP, US GAAP and IFRS, tournaments
            will report estimated revenues, costs and expenses where final amounts are not
            determinable by the deadline for completing the M1000 Submission. Subsequent
            adjustments of these estimates to actual will be included in the M1000 Tournament
            Income Statement in the subsequent M1000 Submission when such final amounts
            are known.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.</HighlightText>
            The M1000 PM Committee will administer, implement and enforce this rule, including,
            but not limited to (i) determining procedures for audits for purposes of financial
            disclosures in accordance with the terms of this rule; (ii) determining the process of
            receiving financial information from tournament members and audits with respect to
            such information (iii) evaluating and resolving questions and issues that may arise
            in respect of any audit, M1000 Submission or violation of this rule; (iv) enforcing this
            rule pursuant to Section G below; and (v) implementing any other aspect of this rule.
            All actions, approvals and determinations of the M1000 PM Committee shall require
            a unanimous vote of the M1000 Voting Members, unless otherwise expressly provided
            in this rule (including as set forth in Sections D, E, F and G). The ATP Chairman
            shall have no right to vote on M1000 PM Committee matters; provided, however, that
            in the event that the M1000 Voting Members are unable to unanimously agree on
            the appointment of the M1000 Player Auditor, the ATP Chairman acting reasonably
            shall have the right to vote on whether approval of the proposed M1000 Player Auditor
            should be granted. If any such vote by the ATP Chairman occurs and the ATP
            Chairman votes against the approval of any proposed M1000 Player Auditor, then
            the ATP Chairman will provide a brief description of his or her reason for such decision
            to the M1000 PM Committee. The M1000 PM Committee will meet regularly as
            deemed necessary by the M1000 PM Committee to properly administer, implement
            and enforce this rule. The ATP Board of Directors will make reasonable and adequate
            funding available to enable to the M1000 PM Committee to administer, implement
            and enforce this rule in accordance with the terms herein.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>D.</HighlightText>
            Each Masters 1000 tournament member is required to provide a complete and
            accurate M1000 Submission annually to the M1000 PM Committee Auditor no later
            than 120 days following the conclusion of tournament’s fiscal year end. Each M1000
            Submission must be certified by the applicable tournament member as complete and
            accurate and in compliance with this rule in all material respects.{'\n\n'}
  
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>E. </HighlightText>
            Each year, the M1000 PM Committee Auditor will perform agreed upon audit
            procedures (as directed by the M1000 PM Committee) of each tournament member M1000
            Submission, and report to the M1000 PM Committee any issues that it may identify
            as a result of these procedures for which the M1000 PM Committee Auditor is unable
            to resolve with the respective tournament. Once this process is complete, the M1000
            PM Committee Auditor will provide the results of its procedures and the supporting
            audit work papers to the M1000 Player Auditor. Such information will be provided
            to the M1000 Player Auditor without identifying individual tournament names. The
            M1000 Player Auditor will undertake a review of the provided information and results.
            After completing this review, if the M1000 Player Auditor has any outstanding issues
            or questions, the M1000 Player Auditor will work with the M1000 PM Committee
            Auditor to resolve such issues and questions. In the event that the M1000 PM
            Committee Auditor and the M1000 Player Auditor are unable to resolve any such issues
            or questions, the M1000 PM Committee Auditor and the M1000 Player Auditor will
            inform the M1000 PM Committee and may jointly conduct an on-site audit at the
            offices of the relevant tournament or Related Party to review and evaluate the books
            and records of such tournament or Related Party that are reasonably necessary to
            resolve such issue or question; provided, that any such joint on-site audit must be
            conducted during regular business hours. If after any joint on-site audit, the M1000
            PM Committee Auditor and the M1000 Player Auditor are still unable to resolve any
            such issues or questions (or in the event the M1000 PM Committee Auditor and
            the M1000 Player Auditor elect not to conduct an on-site audit and such issues or
            questions remain), the M1000 PM Committee Auditor and the M1000 Player Auditor
            will inform the M1000 PM Committee and the M1000 PM Committee will evaluate
            the information presented and make a determination on the issue(s) or question(s),
            and then issue a determination as to whether the unresolved issue(s) or question(s)
            is due to an act or omission of a tournament member. In the event that the M1000
            Voting Members are unable to unanimously agree on such determination, then the
            M1000 Independent Member will make such determination in his or her sole discretion.
            If it is determined that the unresolved issue(s) or questions(s) are due to an act
            or omission of a tournament member, then the M1000 PM Committee will determine
            the implications for the purpose of the prize money formula calculation and/or that
            tournament may be subject to a fine pursuant to Section G below.{'\n\n'}
  
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>F. </HighlightText>
            Any tournament member that (i) fails to provide a M1000 Submission to the M1000
            PM Committee Auditor as required under this rule (including with respect to the timing,
            accuracy and/ or completeness thereof), (ii) submits a report or document that
            contains a material misstatement or omits material information, (iii) does not fully
            cooperate with the M1000 PM Committee Auditor and M1000 Player Auditor as
            required hereunder, or (iv) otherwise fails to comply with this rule, may request from
            the M1000 PM Committee a 10 day extension in order to comply with its submission
            failure. Following any such extension the tournament in each case, may be subject to
            a fine in a maximum amount of $250,000. This maximum fine amount will increase by
            100% for each consecutive year submission failure by a tournament. The M1000 PM
            Committee shall evaluate the circumstances that led to the failure of such tournament
            member to comply with the terms of this rule and assess an appropriate fine taking
            into consideration the guidelines set forth in Section G below or as otherwise
            provided by the ATP Board of Directors from time to time. For clarity, any such guidelines
            will be for guidance purposes only and the M1000 PM Committee will have the right
            to determine an appropriate fine in its sole discretion. In the event that the M1000
            Voting Members are unable to unanimously agree on a fine, the M1000 Independent
            Member will make such determination in his or her sole discretion taking into account
            the circumstances that led to the failure of the tournament member to comply with
            the terms of this rule. All fines assessed under this rule will be contributed to player
            programs as determined by the Player Board Representatives.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>G.</HighlightText>
            The following guidelines are fines that may be imposed for violations of this rule
            (subject to the discretion of M1000 PM Committee as set forth in this rule):{'\n\n'}
</HighlightText>
</ZoomText>
{'\t'}<ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule41_1.png'}}/>  
<ZoomText>
  <HighlightText>{'\n\n'}
            {'\t'}* Specific amounts should depend on the severity of the violation and issue(s) presented.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule40', next: 'Rule42', nav: navigation }} />
    </>
  );
}


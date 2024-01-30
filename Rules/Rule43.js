import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule43({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.19 ATP 250 Tournament Financial Information</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A. </HighlightText>
            Each 250 category tournament member is required to annually provide to the 250 PM
            Committee Auditor (as defined below) a complete and accurate determination and
            calculation of its actual tournament Gross Revenues (as defined below), costs, 
            expenses and net income and all other financial information and supporting 
            documentation relating thereto, in each case, as requested by the 250 PM Committee Auditor
            and in accordance with the terms of this rule. In connection with the foregoing, each
            250 category tournament member shall provide its full cooperation to the 250 PM
            Committee Auditor, who will examine and verify the accuracy of such information.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B. </HighlightText>
            The following terms shall have the meanings set forth below:{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“250 Prize Money Committee (250 PM Committee)”</HighlightText>
            means the committee appointed
            by the ATP Board of Directors and authorized to act in accordance with this
            rule, which shall be comprised of the ATP Chairman or his designee, an Independent
            Member (as defined below) and an equal number of tournament and player representatives, 
            with only one (1) tournament representative and one (1) player representative 
            serving on such 250 PM Committee, being designated by the class of ATP
            Board Directors that appointed such representatives, with the right to vote on any 250
            PM Committee matters, regardless of the number of tournament and player representatives 
            appointed to serve on the 250 PM Committee. The player representative
            and the tournament representative designated with the right to vote on 250 PM Com
            mittee matters shall be collectively referred to herein as the “250 Voting Members”.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“250 PM Committee Auditor”</HighlightText>
            means an independent accounting firm appointed
            by the 250 PM Committee to (i) receive and evaluate each tournament member’s
            250 Submissions and projected tournament financials, (ii) perform agreed upon 
            procedures regarding financial information included in each 250 Submission, and (iii)
            prepare reports to be provided to the 250 PM Committee and to the ATP Board of 
            Directors in accordance with this rule summarizing the 250 Submissions. The 250 PM
            Committee Auditor will also act as advisor to the 250 PM Committee on financial and
            accounting related matters and Gross Revenue, costs, expenses and net income
            reporting issues and questions.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“Independent Member” </HighlightText>
            means the independent member of the 250 PM Committee
            appointed by the ATP Board of Directors, by the aﬃrmative vote of a super majority
            of the Board, to serve on the 250 PM Committee for a 3-year term. The Independent
            Member is subject to removal at any time by the ATP Board of Directors by the same
            vote required for appointment.{'\n\n'}


            <HighlightText style={RuleStyles.SubHeading3}>“250 Player Auditor” </HighlightText>
            means an independent certified public accountant and/or 
            financial advisor selected by the player member(s) of the 250 PM Committee and
            approved by the 250 PM Committee in accordance with Section C below, who meets
            the appropriate level of expertise and experience to evaluate the accuracy of the 250
            Submissions. The 250 Player Auditor will act as advisor to the player member(s) of
            250 PM Committee.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>“250 Submission” </HighlightText>
            means the prescribed, mandatory annual financial information
            report required to be submitted hereunder to the 250 PM Committee Auditor by each
            250 category tournament which, for the avoidance of doubt, shall include a determination
            and calculation of Gross Revenues, costs, expenses and net income, similar
            n detail to the prior Tournament Financial review process and any other information
            required or reasonably requested by the 250 PM Committee. The 250 Submission
            must be completed in full as determined by the 250 PM Committee Auditor to be
            considered in compliance with this rule.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>C. </HighlightText>
            The 250 PM Committee will administer, implement and enforce this rule, including,
            but not limited to (i) determining procedures for audits for purposes of financial 
            disclosures in accordance with the terms of this rule; (ii) determining the process of
            receiving financial information from tournament members and audits with respect to
            such information; (iii) evaluating and resolving questions and issues that may arise
            in respect of any audit, 250 Submission or violation of this rule; (iv) enforcing this
            rule pursuant to Section H below; and (v) implementing any other aspect of this rule.
            All actions, approvals and determinations of the 250 PM Committee shall require a
            unanimous vote of the 250 Voting Members, unless otherwise expressly provided in
            this rule (including as set forth in Sections D, E, F, G and H below). The ATP Chairman
            shall have no right to vote on 250 PM Committee matters; provided, however,
            that in the event that the 250 Voting Members are unable to unanimously agree on
            the appointment of the 250 Player Auditor, the ATP Chairman acting reasonably shall
            have the right to vote on whether approval of the proposed 250 Player Auditor should
            be granted. If any such vote by the ATP Chairman votes against the approval of any
            proposed 250 Player Auditor, then the ATP Chairman will provide a brief description
            of his or her reason for such decision to the 250 PM Committee. The 250 PM 
            Committee will meet regularly as deemed necessary by the 250 PM Committee to properly
            administer, implement and enforce this rule. The ATP Board of Directors will make
            reasonable and adequate funding available to enable to the 250 PM Committee to
            administer, implement and enforce this rule in accordance with the terms herein.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>D. </HighlightText>
            Each 250 category tournament member is required to provide a complete and 
            accurate 250 Submission annually to the 250 PM Committee Auditor no later than 120
            days following the conclusion of its tournament for such year. Each 250 Submission
            must be certified by the applicable tournament member as complete and accurate
            and in compliance with this rule in all material respects. The financial information
            included in each 250 Submission shall be construed and prepared in accordance
            with GAAP or IFRS, unless a different basis is legally mandated by the country in
            which the tournament operates. In such case, differences between any such other
            basis and GAAP or IFRS, as applicable, must be identified and resolved by such
            tournament member as part of its 250 Submission. Upon appointment by the 250 PM
            Committee, each of the 250 PM Committee Auditor and the 250 Player Auditor will
            be instructed not to disclose any individual tournament information or documentation
            that it receives to any party, including the 250 PM Committee, any of its members,
            the ATP Board of Directors, ATP or its staff, except for the ATP Chairman, CEO and
            CFO (or their respective reasonably appointed designees). The 250 PM Committee
            Auditor and 250 Player Auditor will be required to execute and deliver to the 250 PM
            Committee a statement of confidentiality and non-disclosure prohibiting either the
            250 PM Committee Auditor or 250 Player Auditor from making any such disclosure.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>E. </HighlightText>
            Each year, the 250 PM Committee Auditor will perform an agreed upon desk-based
            procedures audit (as directed by the 250 PM Committee) of each tournament’s Gross
            Revenues included in the 250 Submission and report to the 250 PM Committee any
            issues that it may identify as a result of these procedures for which the 250 PM 
            Committee Auditor is unable to resolve with the respective tournament. Once this process
            is complete, the 250 PM Committee Auditor will provide the results of its procedures
            and the supporting audit work papers to the 250 Player Auditor. The 250 Player 
            Auditor will undertake a review of the provided information and results. After completing
            this review, if the 250 Player Auditor has any outstanding issues or questions, the 250
            Player Auditor will work with the 250 PM Committee Auditor to resolve such issues
            and questions. In the event that the 250 PM Committee Auditor and the 250 Player
            Auditor are unable to resolve any such issues or questions, the 250 Committee 
            Auditor and the 250 Player Auditor will inform the 250 PM Committee and may jointly
            conduct an on-site audit at the offices of the relevant tournament or Related Party to
            review and evaluate the books and records of such tournament or Related Party that
            are reasonably necessary to resolve such issue or question; provided, that any such
            joint on-site audit must be conducted during regular business hours and no more
            than three (3) joint on-site audits may be conducted during any consecutive twelve
            (12) month period. If after any joint on-site audit, the 250 PM Committee Auditor and
            the 250 Player Auditor are still unable to resolve any such issues or questions (or in
            the event the 250 PM Committee Auditor and the 250 Player Auditor elect not to 
            conduct an on-site audit and such issues or questions remain), the 250 PM Committee
            Auditor and the 250 Player Auditor will inform the 250 PM Committee and the 250 PM
            Committee will evaluate the information presented and then issue a determination as
            to whether the unresolved issue(s) or question(s) is due to an act or omission of a
            tournament member. In the event that the 250 Voting Members are unable to 
            unanimously agree on such determination, then the 250 Independent Member will make
            such determination in his or her sole discretion.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>F. </HighlightText>
            Any tournament member that (i) fails to provide a 250 Submission to the 250 PM
            Committee Auditor as required under this rule (including with respect to the 
            timing, accuracy and/ or completeness thereof), (ii) submits a report or document that
            contains a material misstatement or omits material information, (iii) does not fully
            cooperate with the 250 PM Committee Auditor and 250 Player Auditor as required
            hereunder, or (iv) otherwise fails to comply with this rule, may request from the 250
            PM Committee a 10 day extension in order to comply with its submission failure. 
            Following any such extension the tournament in each case, may be subject to a fine in a
            maximum amount of $250,000. This maximum fine amount will increase by 100% for
            each consecutive year submission failure by a tournament. The 250 PM Committee
            shall evaluate the circumstances that led to the failure of such tournament member
            to comply with the terms of this rule and assess an appropriate fine taking into 
            consideration the guidelines set forth in Section G below or as otherwise provided by the
            ATP Board of Directors from time to time. For clarity, any such guidelines will be for
            guidance purposes only and the 250 PM Committee will have the right to determine
            an appropriate fine in its sole discretion. In the event that the 250 Voting Members are
            unable to unanimously agree on a fine, the 250 Independent Member will make such
            determination in his or her sole discretion taking into account the circumstances that
            led to the failure of the tournament member to comply with the terms of this rule. All
            fines assessed under this rule will be contributed to player programs as determined
            by the Player Board Representatives.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>G. </HighlightText>
            The following guidelines set forth fines that may be imposed for violations of this rule
            (subject to the discretion of 250 Committee as set forth in this rule):{'\n\n'}

            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule43_1.png'}}/> {'\n\n'}



            *Specific amounts should depend on the severity of the violation and issue(s)
            presented.




            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule42', next: 'Rule44', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule44({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.20 ATP Masters 1000 Player Compensation & ATP Variable
Bonus Pool</HighlightText>{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.</HighlightText>
            On-site prize money for 2023 was the amount approved by the ATP Board for each
            tournament. The yearly aggregated on-site prize money for all Masters 1000 tournaments
            (Base Prize Money or “BPM”) increases by 2.5% annually beginning in 2023.
            The 2.5% annual increase in BPM will be divided as determined by the tournaments.{'\n\n'}
            
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>
            VBP (as defined below) is an additional annual amount that will vary with the calculation
            for each year and the amounts are not cumulative (don’t carry over year to year).
            VBP is calculated using current year ANI, as defined below, compared to the BPM of
            the then current year. 50% of any excess of ANI over BPM will be contributed to VBP
            and paid to players based on participation and performances at the Masters 1000
            and ATP Finals tournaments during the respective calendar year. The M1000 PM
            Committee Auditor will be responsible for making these calculations and reporting
            such results to the M1000 PM Committee for approval by the end of September each
            year. Any VBP contribution approved for payment will be shared as determined by
            the tournaments and will be paid to ATP for distribution to players at the end of each
            respective calendar year in conjunction with the payment of the ATP Fixed Bonus
            Pool. Allocation to players of both ATP Fixed Bonus Pool and Variable Bonus Pool as
            determined by the ATP Board.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.</HighlightText>
            The following terms used in this Rule shall have the meanings set forth below:{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Tournament Financial Information Rule for Masters 1000 Tournaments (“1000s
            Audit Rule”) – </HighlightText>
            The ATP rule which, among other provisions, specifies the required
            revannual independently audited reporting by each Masters 1000 tournament of its 
            enues, costs and expenses, net income, net income before taxes and other financial
            information, and specifies the audit procedures to be applied to submitted information.
            Definitions within the 1000s Audit Rule are incorporated herein by reference.
            Implementation of this Masters 1000 Player Compensation Rule will be the responsibility
            of the M1000 PM Committee (as defined in the 1000s Audit Rule).{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Aggregated Net Income (“ANI’) -</HighlightText>
            Total of annual audited net income before income
            taxes for each of the Masters 1000 tournaments as calculated by M1000 PM 
            Committee Auditor and approved by the M1000 PM Committee. Level 1 data revenues
            and any fines assessed under the Tournament Financial Information Rule for Masters
            1000 Tournaments will be excluded from each tournament’s audited net income. For
            combined men/women tournaments, ANI will be determined with a direct allocation
            method where revenues and expenses/costs directly attributable to men or women
            will be allocated 100% to men or women. Remaining revenues and expenses will
            be allocated equally. The resulting men’s net income before income taxes will be
            included in ANI.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>VBP -</HighlightText>
            50% of the excess of current year ANI over current year BPM.{'\n\n'}

           

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule43', next: 'Rule190', nav: navigation }} />
    </>
  );
}


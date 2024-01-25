import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule30({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.05 Fees/Other Payments</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A. </HighlightText>
            All fees and monies due to ATP are to be sent by wire in USD or EUR.{'\n\n'}
            {'\t'}1) U.S. Dollar payment by wire{'\n\n'}
            {'\t\t'}Bank: Wells Fargo Bank, NA{'\n\n'}
            {'\t\t'}420 Montgomery Street{'\n\n'}
            {'\t\t'}San Francisco, CA 94163{'\n\n'}
            {'\t\t'}United States of America{'\n\n'}
            {'\t\t'}Swift/BIC Code: WFBIUS6S{'\n\n'}
            {'\t\t'}Account Number: 2130600027348{'\n\n'}
            {'\t\t'}Routing Number (Domestic Banks): 121000248{'\n\n'}
            {'\t\t'}Beneficiary: ATP TOUR INC.{'\n\n'}
            {'\t\t'}Reference: Tournament Name & Invoice Number{'\n\n'}
            
            {'\t'}2) Euro payment by wire{'\n\n'}
            {'\t\t'}Bank: Wells Fargo Bank, NA - London{'\n\n'}
            {'\t\t'}One Plantation Place{'\n\n'}
            {'\t\t'}30 Fenchurch Street{'\n\n'}
            {'\t\t'}London, EC3M 3BD{'\n\n'}
            {'\t\t'}Swift/BIC Code: PNBPGB2L{'\n\n'}
            {'\t\t'}IBAN: GB31 PNBP 1656 7121 4741 66{'\n\n'}
            {'\t\t'}Account: 21474166{'\n\n'}
            {'\t\t'}Beneficiary: ATP TOUR INC.{'\n\n'}
            {'\t\t'}Intermediary Bank: ING BELGIUM SA{'\n\n'}
            {'\t\t'}BBRUBEBB010{'\n\n'}
            {'\t\t'}Reference: Tournament Name & Invoice Number{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B. </HighlightText>
            Any amounts (e.g. player fines, non-member service fees, air-tickets) collected or
            owed by the tournament to ATP must be remitted to ATP.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule29', next: 'Rule31', nav: navigation }} />
    </>
  );
}


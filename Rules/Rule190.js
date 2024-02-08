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
            <HighlightText style={RuleStyles.SubHeading1}>3.21 ATP 500 Prize Money Formula Rule</HighlightText>{'\n\n'}

            The formula within this rule will be used to determine increases in on-site prize money
            for the 500 category tournaments (as this category is currently composed) for the
            years 2023 through 2037. In the event Net Income before taxes equals aggregated
            on-site prize money then this formula and the related reporting rule will be replaced
            with a 50/50 prize money formula similar to the Masters 1000’s Prize Money Formula Rule.
            In the event this category is materially changed during this period, the 500 PM
            Committee will determine what effect such material changes have on applying this
            rule for the remainder of the term. The formula will be based on a 2 year Average
            Growth Percentage (“AGP”) in Defined Revenues (“DR”) for all tournaments in the
            category. The 500 PM Committee Auditor will calculate AGP and submit such calculations
            to the 500 PM Committee for review and approval. Such AGP will be applied to current
            year category total on-site prize money as follows:{'\n\n'}

            AGP up to 2.5% {'\t'}On-site prize money increases by 2.5%{'\n\n'}
            AGP over 2.5% to 6% {'\t'}On-site prize money increases by AGP{'\n\n'}
            AGP over 6% {'\t'}On-site prize money increases by AGP times 1.167{'\n\n'}

            The resulting overall on-site prize money increase will be allocated equally to each of
            the thirteen 500 tournaments, regardless of their current on-site prize money level.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}> Definitions:</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Tournament Financial Information Rule for 500 Tournaments (“500 Audit
            Rule”) - </HighlightText>
            The ATP rule which, among other provisions, specifies the required annual
            independently audited reporting by each 500 tournament of its revenues, costs and 
            expenses, net income, net income before taxes and other financial information, and
            specifies the audit procedures to be applied to submitted information. Definitions
            within the 500s Audit Rule are incorporated herein by reference. Implementation of
            this 500 Prize Money Formula Rule will be the responsibility of the 500 PM 
            Committee (as defined in the 500 Audit Rule).{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Average Growth Percentage (“AGP”) - </HighlightText>
            AGP is the 2 year average growth in the
            most recent actual years DR as reported to and calculated by the 500 PM Committee
            Auditor. The annual period for purposes of AGP will be the 12 month periods ending
            in April each year immediately following the Barcelona tournament.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Defined Revenues (“DR”) - </HighlightText>
            Defined revenues are the basis for the AGP calculations
            and include the following four broad revenue categories as long as the 2 year average 
            of these revenues exceed 92% of average gross revenues as reported to the 500 PM
            Committee Auditor:{'\n\n'}
           {'\t'}1. Sponsorships{'\n\n'}
           {'\t'}2. Ticketing and on-site hospitality{'\n\n'}
           {'\t'}3. Media and television revenues{'\n\n'}
           {'\t'}4. Government funding and/or government subsidies{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Other Revenues (“OR”) - </HighlightText>
            OR includes all tournament revenues not otherwise included in DR.{'\n\n'}

            Revenues within each of these categories must include all amounts earned in connection 
            with each category. For example, if a sponsor agreement, in addition to sponsor signage 
            and benefits, provides for on-site parking or event merchandise, total
            sponsor payments must be included within this category and not allocated to another
            revenue category. Similarly, if food and beverage and/or parking are included in a
            ticketing/hospitality package, the total package proceeds will be included in the 
            ticketing/hospitality category as DR and not allocated to another revenue category.
            {'\n\n'}
            Consistent with the 500 Audit Rule, where applicable, Gross Revenues and DR include
            tournament revenues received by related parties. A person/company is considered to
            be a Related Party to the tournament if that person/company has control, joint control
            or significant influence over the tournament or a tournament entity, either via ownership,
             via agreement, or via power to manage/govern/influence the tournament’s
            finances and/or operations. Also, a person/company is considered to be a Related
            Party to the tournament if the tournament has control, joint control or significant influence 
            over the person/company, either via ownership, via agreement, or via power to
            manage/govern/influence the person/company’s finances and/or operations.
            {'\n\n'}
            If two year average DR are less than 92% of average gross revenues, the next largest revenue
             category as determined by the 500 Committee Auditor and approved by the 500
            Committee will be added to DR so that the 92% minimum is achieved.
            {'\n\n'}
            For purposes of DR, barter transactions for each category are required to be included.
            {'\n\n'}
            ATP payments to tournaments for rebates and prize money subsidy are not included
            in DR or OR. Data distribution revenues shall be included in OR and subject to reclassification
             within DR as provided above.
             {'\n\n'}
            For purposes of DR, the following will also apply:{'\n\n'}
            ● For men’s and women’s combined tournaments, direct men only revenues
            will be included in DR at 100%. Direct women only revenues will be excluded.{'\n\n'}
            ● A 70% factor will be applied to combined tournaments revenues which are
            not directly men or women tournament revenues.{'\n\n'}
            ● Exchange rates to USD for formula calculation purposes and for equal
            prize money allocation among tournaments will be based on a 2 year average exchange rate.{'\n\n'}
            ● Complimentary tickets where no value is received will not be included in
            revenues. Complimentary tickets provided to Related Parties will be valued and included in DR.{'\n\n'}
            ● Taxes and fees required to be paid on tickets sales will be excluded from
            revenues.{'\n\n'}

            Insurance proceeds which replace lost revenues will be included as revenues in the
            category for which the proceeds relate.{'\n\n'}

            Agreed Upon Procedures as defined in the 500 Audit Rule will only be applied to DR of
            the 500s tournaments. Remaining OR as reported under the 500 Audit Rule will be subject only 
            to overall fluctuation reviews and resulting inquiries by the PM Committee
            and 500 Player Auditor necessary to understand significant changes.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule44', next: 'Rule45', nav: navigation }} />
    </>
  );
}


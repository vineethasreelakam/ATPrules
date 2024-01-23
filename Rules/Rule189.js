import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule189({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.21 Benefits (Effective January 1, 2024)</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.Standard Benefits.</Text>
            All Members in good standing shall be entitled to receive certain
            standard benefits. These benefits are stated in detail on the Player Zone (“Standard
            Benefits”).{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B.Platinum Benefits.</Text>
            ATP recognizes and values the significance of offering its loyal
            and dedicated Members various additional benefits. These advantages are meant
            to recognize their contributions to serving ATP's fans and stakeholders and to the
            overall well-being, goodwill and success of the ATP Tour.{'\n\n'}

            These benefits, defined as ”Platinum Benefits," encompass a range of offerings,
            which include retirement programs, bonus programs, financial security plans (includ-
            ing, Baseline), the privilege to actively participate, including voting, in ATP gover-
            nance, and such other benefits as may be determined by ATP from time to time and
            are discussed in detail on the Player Zone.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>C.Eligibility for Platinum Benefits.</Text>
            In addition to the Standard Benefits, a Member shall
            be entitled to receive Platinum Benefits if such player is 1) in good standing and 2) he
            does not have any relationship or affiliation with any business, corporation, company,
            partnership, association, organization, person, or entity that is not in the best inter-
            ests of ATP or the sport of tennis and 3) does not participate in 1 or more Qualified
            Non-Covered Events (as defined below).{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>D.Criteria for Reinstating Eligibility.</Text>
            In the event a player fails to meet the criteria set
            forth above, while being in the ranking range eligible for Group 1 membership pur-
            suant ATP By-Laws, for any of the Platinum Benefits provided by ATP due to Rule
            1.21.C.2 or Rule 1.21.C.3, he must successfully satisfy each of the elements for the
            2 calendar years following such failure in order to reestablish his eligibility.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>E.Amendments to Benefits.</Text>
            ATP reserves the authority to continuously evaluate and
            tailor the Standard Benefits and Platinum Benefits to better serve its Members. As
            such, ATP retains the right to amend/introduce new benefits, modify or withdraw ex-
            isting benefits, and/or change the eligibility criteria.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>F.Definitions.</Text>{'\n\n'}
            For purposes of this Section 1.21, the following definitions shall apply:{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>1).</Text>
            “Qualified Non-Covered Event” is an event that includes a Top 100 Pepperstone
            ATP Singles Ranked player and meets one of the following criteria:{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>a.</Text>
            Its duration is 3 or more consecutive days within a 7-day period.{'\n\n'} 

            <Text style={RuleStyles.SubHeading3}>b.</Text>
            Events operated by a single person or group of affiliated persons that contain
            in the aggregate 11 or more days within a calendar year. Solely with respect
            to 1.21.F.1.b, the events that occur before the 11th day shall not be deemed
            a Qualified Non-Covered Event.{'\n\n'}   

            <Text style={RuleStyles.SubHeading3}>c.</Text>
            Individual events when announced are part of a schedule or series of sched-
            ules of events that the overall number of days exceeds 11 days or more within
            a calendar year.{'\n\n'} 

            <Text style={RuleStyles.SubHeading3}>d.</Text>
            It includes 2 or more events that are connected through player qualification,
            entry, ranking system, or any other similar means.{'\n\n'} 

            Notwithstanding the foregoing, a Non-Covered Event shall not be deemed a Qual-
            ified Non-Covered Event. In addition, events that took place in 2023 shall not be
            deemed a Qualified Non-Covered Event until December 31, 2026 provided that such
            events remain at or below their existing 2023 format (factors for determining format
            include but not limited to event duration, number of participating players, and compe-
            tition structure).{'\n\n'} 

            <Text style={RuleStyles.SubHeading2}>2).</Text>
            “Non-Covered Events” are those events other than Grand Slams, ATP Tour tour-
            naments, ATP Challenger Tour tournaments, Laver Cup, Davis Cup, Olympic
            Games, ITF World Tennis Tour and existing regional league events at or below
            their existing format (factors for determining format include but not limited to event
            duration, number of participating players, and competition structure).
            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule21', next: 'Rule22', nav: navigation }} />
    </>
  );
}


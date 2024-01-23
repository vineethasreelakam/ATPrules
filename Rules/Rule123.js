import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule123({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>VIII. THE CODE</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>8.07 Final Dispute Resolution</Text>{'\n\n'}
            {'\n\n'}
            A.Any dispute between or among ATP, its Tournaments or its players (with the exception of any dispute relating to or arising out of a change in tournament class membership status) arising out of the application of any provision of this Rulebook which
            is not finally resolved by applicable provisions of the Rulebook shall be submitted
            exclusively to the Court of Arbitration for Sport (“CAS”) for final and binding arbitration
            in accordance with CAS’s Code of Sports-Related Arbitration. The decision of CAS in
            that arbitration shall be final, non-reviewable, non-appealable and enforceable. No
            claim, arbitration, lawsuit or litigation concerning the dispute shall be brought in any
            other court or tribunal. Any request for CAS arbitration shall be filed with CAS within
            21 days of any action by ATP which is the subject of the dispute.
            {'\n\n'}
            B.In the event any provision of this rule is determined invalid or unenforceable, the
            remaining provisions shall not be affected. This rule shall not fail because any part of
            the rule is held invalid.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule122', next: 'Rule124', nav: navigation }} />
    </>
  );
}


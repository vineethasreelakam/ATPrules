import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule6({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule6.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.05 Change of Tournament Site</Text>{'\n\n'}

            There shall be no change of a tournament site unless approved by ATP. A request
            to change a tournament site must be submitted in writing by the tournament and
            received by the appropriate ATP regional office no later than six (6) months prior
            to the first Monday of the event. Requests submitted after the deadline will only be
            considered if ATP determines there are extenuating circumstances out of the control
            of the tournament member. Any and all actual costs incurred by ATP during the site
            approval process shall be the responsibility of the tournament.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule5', next: 'Rule7', nav: navigation }} />
    </>
  );
}


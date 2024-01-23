import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule32({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.07 Letter of Credit - New/Conditional Tournaments</Text>{'\n\n'}

            Unless otherwise determined by ATP, each ATP Tour tournament with conditional
            membership status must submit to ATP within the time period required, an approved
            irrevocable Letter of Credit, in form and substance, satisfactory to ATP, from an ATP
            approved bank in the amount of the on-site prize money. Such Letter of Credit must
            have an expiration date no earlier than one (1) month after the last scheduled day of
            ATP event.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule31', next: 'Rule33', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule37({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.13 Taxes-Notice of Withholdings</Text>{'\n\n'}

            Each ATP Tour and ATP Challenger Tour tournament is required to give at least ninety
            (90) days notice to ATP of the percentage of the applicable player income tax deduction. No other tax deduction(s) will be permitted from the on-site prize money paid
            to a player. Tournaments are responsible for any additional taxes imposed. Each
            tournament is responsible for withholding required income taxes from each player’s
            prize money payment and remitting such amounts to the applicable taxing authorities
            on a timely basis.{'\n\n'}

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule36', next: 'Rule38', nav: navigation }} />
    </>
  );
}


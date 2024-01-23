import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule40({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.16 Release from Financial Commitment</Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>A.</Text>
            Each ATP Tour tournament is required to pay its financial commitment for each calendar
            year tournament.{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.</Text>
            No refund shall be made for any sums paid whether or not the event is actually held,
            unless ATP in its sole discretion determines that extraordinary circumstances exist
            justifying such action.{'\n\n'}

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule39', next: 'Rule41', nav: navigation }} />
    </>
  );
}


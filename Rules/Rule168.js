import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule168({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT M - Special Exempts - ATP 250 to ATP 500 Events</Text>{'\n\n'}
          Special Exempt from ATP Tour 250 – list of events.
          {'\n\n'}
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule168.png'}}/>
          <Text>{'\n\n'}</Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule167', next: 'Rule169', nav: navigation }} />
    </>
  );
}


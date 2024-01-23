import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule19({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.18 Quality/Broadcast </Text>{'\n\n'}

            Each ATP Tour tournament shall comply with the Broadcast Quality Standards and
            regulation regarding Same Day Exclusivity, as per “Exhibit C”.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule18', next: 'Rule20', nav: navigation }} />
    </>
  );
}


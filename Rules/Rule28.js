import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule28({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
             <Text style={RuleStyles.SubHeading1}>3.03 Default of Prize Money Payments </Text>
            {'\n\n'}
            Any ATP Tour or ATP Challenger Tour tournament that defaults in payment of prize
            money, tournament fee or any other payments due to ATP may have its membership
            status (sanction status if ATP Challenger Tour tournament) changed subject to ATP
            Bylaws
            {'\n\n'}
          </Text>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule27', next: 'Rule29', nav: navigation }} />
    </>
  );
}


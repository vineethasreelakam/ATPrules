import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule142({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.06.6 - Acceptable & Unacceptable Uses -
           Combined</Text>
          </Text>

          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            place the ATP Tour Official
            Tournament Stamp alongside sponsor
            logos or add it to sponsor logo strips.
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            make the WTA Logo visually larger
            than the ATP Tour Official Tournament
            Stamp. DO NOT place sponsor logos
            closer to the tournament logo or
            tournament title.
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            break the exclusion area for sponsor logos.
            {'\n\n'}
          </Text>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule142_4.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            make the size of the ATP Tour Official
            Tournament Stamp smaller than 30% of
            the surface area of the tournament logo
            tournament title.
            {'\n\n'}
          </Text>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule141', next: 'Rule143', nav: navigation }} />
    </>
  );
}


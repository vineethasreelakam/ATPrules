import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule140({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.06.4 Acceptable & Unacceptable Uses - 
          Combined</Text>
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule140_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Green}>DO </Text>{'\n\n'}
            place the ATP Tour Official
            Tournament Stamp closest to
            the tournament logo. The ATP
            Tour Official tournament stamp
            must be at a minimum, equal
            size to the WTA logo or 30% of
            the surface area of the
            tournament logo, ehichever is
            greater. Position away from
            sponsor logos, federation names
            or any other brand mark.

            {'\n\n'}
          </Text>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule140_2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Green}>DO </Text>{'\n\n'}
            place the ATP Tour Official
            Tournament Stamp closest to
            the tournament title when it is
            used larger than, or in place of,
            the tournament logo. The ATP
            Tour Official Tournament Stmp
            must be at a minimum egual
            size to the WTA logo or 30% of
            the surface area of the
            tournament title, whichever is
            greater. Position away from
            sponsor logos, federation names
            or any other brand mark.

            {'\n\n'}
          </Text>


        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule139', next: 'Rule141', nav: navigation }} />
    </>
  );
}


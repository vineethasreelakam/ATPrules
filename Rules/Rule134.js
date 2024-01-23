import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule134({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.03 - Size Relationship - Combined Events</Text>
          </Text>
          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3}>Size Relationship: </Text>
            WTA Logo{'\n\n'}
            MUST be the same visual size (cover the same surface area)
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3}>Size Relationship: </Text>
            Tournament Logo{'\n\n'}
            MUST be at a minimum, equal size to the WTA Logo or 30% of the surface area
            of the tournament logo, whichever is greater.
            {'\n\n'}
          </Text>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule134_3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3}>Size Relationship: </Text>
            Tournament Title{'\n\n'}
            MUST be at a minimum, equal size to the WTA Logo or 30% of the surface area
            of the tournament title, whichever is greater.
            {'\n\n'}
          </Text>


        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule133', next: 'Rule135', nav: navigation }} />
    </>
  );
}


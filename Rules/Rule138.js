import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule138({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>EXHIBIT A.06.2 - Acceptable & Unacceptable Uses - Men Only
          </Text>
          </Text>
          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_1.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            apply rules to the smallest tournament logo
            or tournament title on this page.
            {'\n\n'}
          </Text>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            make the ATP Tour Official Tournament
            Stamp smaller than 60% of the
            tournament logo or tournament title.
            {'\n\n'}
          </Text>



          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            omit the ATP Tour official Tournament
            Stamp when using a tournament title in
            place of a tournament logo.
            {'\n\n'}
          </Text>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_4.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading3Red}>DO NOT </Text>{'\n\n'}
            Apply rules to the smallest tournament
            logo or tournament title when both are
            used on a page. The 60% applies to the
            greater of the two.
            {'\n\n'}
          </Text>


        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule137', next: 'Rule139', nav: navigation }} />
    </>
  );
}


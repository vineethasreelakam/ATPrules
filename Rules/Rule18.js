import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule18({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.17 Non-Exclusive Media Highlight Rights.</Text>{'\n\n'}
            Each ATP Tour tournament shall each year promptly (within two business days) provide
            to ATP without charge existing footage of the tournament as ATP may request.
            Each ATP tournament hereby grants to ATP the non-exclusive right to broadcast, or
            permit to be broadcast, by any means, whether presently existing or hereafter creat-
            ed, in perpetuity worldwide, a total each year of (i) fifteen (15) minutes of footage for
            ATP Highlight Show or any other programs, produced by or for ATP, which are primarily intended
            to promote the ATP tennis circuit and/or ATP; and (ii) three (3) minutes
            daily of footage for any local, regional, national or international news or sports news
            programming.


            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule17', next: 'Rule19', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule10({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.09 Mandatory Player Meeting</Text>{'\n\n'}

            Mandatory player meetings may be scheduled throughout the year as determined
            and announced in advance by ATP. These meetings are limited to and mandatory for
            all main draw singles and doubles players. Player members not entered will be sent
            the minutes. {'\n\n'}
            The penalty for non-attendance is the following:{'\n\n'}

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule9', next: 'Rule11', nav: navigation }} />
    </>
  );
}


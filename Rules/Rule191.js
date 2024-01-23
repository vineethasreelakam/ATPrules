import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';

export default function Rule45({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.SubHeading1}>3.23 Challenger Tournament Prize Money</Text>{'\n\n'}

            On site prize money for the Challenger Tour tournaments will increase annually by
            2.5% per each tournament category.{'\n\n'}

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule45', next: 'Rule46', nav: navigation }} />
    </>
  );
}


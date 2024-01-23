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
            <Text style={RuleStyles.SubHeading1}>3.22 ATP 250 Tournament Prize Money</Text>{'\n\n'}

            On-site prize money for 2023 was the amount approved by the ATP Board for each
            tournament.{'\n\n'}
            On site prize money for the 250 category tournaments increases annually by 2.5%
            for the period 2023 through 2030. Such 2.5% annual increases in on site prize money
            will be calculated using the total of on-site prize money for all 250 tournaments and
            then divided equally among the tournaments.{'\n\n'}

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule190', next: 'Rule191', nav: navigation }} />
    </>
  );
}


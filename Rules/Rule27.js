import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule27({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.02 Currency</HighlightText>
            {'\n\n'}
            All references to money are expressed in United States Dollars (USD) and Euros
            (EUR), unless otherwise designated. Tournament fees, fines and other amounts pay
            - able to ATP are payable in USD or EUR.{'\n\n'}

            
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule26', next: 'Rule28', nav: navigation }} />
    </>
  );
}


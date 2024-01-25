import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule141({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.06.5 Acceptable & Unacceptable Uses - Combined
          </HighlightText>
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule141_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            apply rules to the smallest tournament
            logo or tournament title on the page.
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule141_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            make the ATP Tour Official Tournament
            Stamp smaller than 30% of the surface
            area of the tournament logo.

            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule141_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            omit the ATP Tour Official Tournament
            Stamp when using a tournament title in
            place of a tournament logo.
            {'\n\n'}
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule141_4.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n'}
            apply rules to smallest tournament
            logo or rournament title when both are
            used on the page. 30% rule applies to
            the greater of the two.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule140', next: 'Rule142', nav: navigation }} />
    </>
  );
}


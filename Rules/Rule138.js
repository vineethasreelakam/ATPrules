import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule138({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
          <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT A.06.2 - Acceptable & Unacceptable Uses - Men Only
          </HighlightText>
          </HighlightText>
          
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_1.png'}}/>
          
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            apply rules to the smallest tournament logo
            or tournament title on this page.
            {'\n\n'}
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            make the ATP Tour Official Tournament
            Stamp smaller than 60% of the
            tournament logo or tournament title.
            {'\n\n'}
          </HighlightText>



          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            omit the ATP Tour official Tournament
            Stamp when using a tournament title in
            place of a tournament logo.
            {'\n\n'}
          </HighlightText>


          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule138_4.png'}}/>
          <HighlightText style={RuleStyles.Description}>
          {'\t'}<HighlightText style={RuleStyles.SubHeading3Red}>DO NOT </HighlightText>{'\n\n\t'}
            Apply rules to the smallest tournament
            logo or tournament title when both are
            used on a page. The 60% applies to the
            greater of the two.
            {'\n\n'}
          </HighlightText>
          </ZoomText>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule137', next: 'Rule139', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule185({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT Z - Clothing Logos</HighlightText>{'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule185_1.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule185_2.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule185_3.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule184', next: 'Rule186', nav: navigation }} />
    </>
  );
}


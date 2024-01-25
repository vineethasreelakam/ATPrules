import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule160({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT E - Virtual Insertion</HighlightText>{'\n\n'}

            Each ATP Tournament must comply with the following in order to use virtual insertion
            technology in telecasts:{'\n\n'}

            1) Each telecast of an ATP Tour tournament using virtually inserted signage must
            receive the prior approval of ATP.{'\n\n'}

            2) The company and methodology used to produce virtually inserted signage must
            meet quality and technical standards and be pre-approved by ATP.{'\n\n'}

            3) Virtually inserted signage may be inserted only in existing signage positions.{'\n\n'}

            4) Virtually inserted signage may be altered between points if synchronized with the
            change of Electronically Inserted Signage if in use.{'\n\n'}

            5) Only static logos may be inserted. No moving logos or videos may be inserted.{'\n\n'}

            6) Virtually inserted signage must be consistent in color, graphical look and size with
            the Tournament’s other permanent signage.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule159', next: 'Rule161', nav: navigation }} />
    </>
  );
}


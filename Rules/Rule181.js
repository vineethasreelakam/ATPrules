import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule181({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT W - Writing Table For Umpire Chairs</HighlightText>{'\n\n'}
            {'\n\n'}
            {'\t'}In an effort to provide a comfortable platform for the Chair Umpires to place their
            hardware such as tablet, walkie-talkie, net device handset, it is requested that all
            tournaments attach a writing table according to the instructions below to the Chair
            Umpire’s chairs on all match courts.
            {'\n\n'}
            {'\t'}This simple and low cost upgrade will contribute tremendously to reduce scoring errors caused by data being accidentally entered as a result of the umpire holding the
            tablet in their hand and ease the process of entering data in the tablet.
            {'\n\n'}
            {'\t'}When setting up the writing tables, please make a note of the following:
            {'\n\n'}
            {'\t\t'}• Attach the writing table to the right side armrest. If there is a microphone attached
            to the chair, the microphone must be installed on the left side of the chair so as
            not to interfere with the writing platform on the right side armrest.
            {'\n\n'}
            {'\t\t'}• Ensure that the writing table is installed with the slender end at the back of the
            armrest. The design is made considering most armrests are 20 inches (50.8 cm)
            long and 3 inches (7.62 cm) wide. This design calls for the overall dimension of
            32 inches (81.28 cm) which leaves a full 12 inches (30.48 cm) of space in front of
            the umpire for the various equipment.
            {'\n\n'}
            {'\t\t'}• A standard wood product could be used. For example, in the USA a 1 x 12 could
            be used and just cut to length and ripped for the 9 x 20 piece that is taken out. The
            actual dimension of a 1 x 12 is 11 ½ inches wide by ¾ inches thick. A comparable
            product could also be used in countries using the metric standard.
            {'\n\n'}
          </HighlightText>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule181_1.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule181_2.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule181_3.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule180', next: 'Rule182', nav: navigation }} />
    </>
  );
}


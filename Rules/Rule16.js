import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule16({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.15 Promotional Fees</HighlightText>{'\n\n'}
            A.Except as expressly permitted in subsection B below, a player shall not accept money
            or anything of value that is given from any source, directly or indirectly, to influence
            or assure his competing in any ATP Tour tournament, or ATP Challenger Tour tournaments, other than
            prize money unless authorized by ATP.{'\n\n'}
            
            B.ATP Tour 500 and ATP Tour 250 tournaments have the option to offer fees for promotional services.
            No other ATP Tour or ATP Challenger Tour tournament owner,
            operator, sponsor or agent is permitted to offer, give or pay money or anything of
            value, nor shall the tournament permit any other person or entity to offer, give or pay
            money or anything of value to a player, directly or indirectly, to influence or assure a
            player’s competing in a tournament, other than prize money, unless authorized to do
            so by ATP.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule15', next: 'Rule17', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule39({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>III. FINANCIAL</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>3.15 Prizes and Non-Cash Awards</HighlightText>{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.</HighlightText>
            In addition to on-site prize money, each ATP Tour tournament may give to each singles and doubles winner during the on-site awards presentation one (1) non cash
            award or prize plus a trophy. Non cash awards or prizes valued over $5,000 must be
            approved by the ATP CEO no later than forty two (42) days prior to the tournament
            and can be offered for results in that tournament only.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.</HighlightText>
            All non cash awards or prizes must be the product of, or service provided by, a principal 
            tournament sponsor.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.</HighlightText>
            Pre-existing tournament sponsorship agreements made before 1993 for non cash
            awards or prizes are exempt until the expiration of such agreements. The tournament
            must notify the appropriate ATP Regional Office of such non cash awards or prizes
            forty two (42) days prior to the tournament.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>D.</HighlightText>
            Tournaments may not pay travel expenses without special written permission from
            ATP.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule38', next: 'Rule40', nav: navigation }} />
    </>
  );
}


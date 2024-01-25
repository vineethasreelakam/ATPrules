import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule175({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT S - Electronic Line Calling Facilities Guidelines</HighlightText>{'\n\n'}
            {'\n\n'}
            A The ELC booth must be located in direct line of sight to the court, in order to provide
            an unobstructed view of the court. It should preferably be at the back (North or South
            end) of the court when possible.
            {'\n\n'}
            B.The Review Official must have a full view of the whole court and Line Umpires.
            {'\n\n'}
            C.The booth must have direct audio from the Chair Umpire’s microphone (not from the
            Television feed).
            {'\n\n'}
            D.The Review Official should be able to hear the Line Umpire calls from the court. If the
            CU microphone does not provide sufficient volume of court sounds, then a separate
            microphone and speaker must be installed to allow the Review Official to clearly hear
            all court sounds, including Line Umpire calls.
            {'\n\n'}
            E. The booth must have room for five (5) persons plus equipment (minimum of 25 sq.
            meters (82 sq. feet) with a minimum court frontage of 5 meters (16.5 feet) as required
            by ELC vendor.
            {'\n\t'}1) 1 person running the system.
            {'\n\t'}2) 1 person dedicated to the Official Review process.
            {'\n\t'}3) 1 person dedicated to the television send.
            {'\n\t'}4) 1 additional staff of the vendor.
            {'\n\t'}5) 1 Review Official for each match - designated by ATP.
            {'\n\n'}
            F. The booth should have full air conditioning for equipment and personnel, unless technically unable to do so, and approved by ATP/WTA and the vendor.
            {'\n\n'}
            G. Access to the booth must be reasonably easy and safe.
            {'\n\n'}
            H. Tables, chairs and high stools must be provided as requested by the ELC team.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule174', next: 'Rule176', nav: navigation }} />
    </>
  );
}


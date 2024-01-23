import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule180({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT V - Retractable Roof Policy</Text>{'\n\n'}

            Whenever practical, playing conditions on the center court will remain the same
            as on all other courts.
            {'\n\n'}
            In the event rain is falling prior to the scheduled starting time of the match, the roof
            will remain closed for the duration of that match.
            {'\n\n'}
            If the rain stops and the forecast is good, the roof may be opened after the match
            in progress is completed. Decisions on re-opening the roof will be made on a
            match-by-match basis depending upon current conditions and the forecast.
            {'\n\n'}
            If play commences with the roof open, a decision to close the roof will normally be
            made after play has stopped because of rain, although if other factors warrant the
            roof to be closed prior to this, the Supervisor will make that decision.
            {'\n\n'}
            The roof will not normally be closed because of the threat of rain.
            {'\n\n'}
            In the event high winds, sufficient to harm the retractable roof, are forecast with
            reasonable certainty, the roof may be closed prior to the start of the match. The
            reverse is applicable when the roof is closed and high winds or other conditions
            necessitate, for safety reasons, that the roof be opened.
            {'\n\n'}
            In the event that the temperature is below 50F / 10C prior to the start of a match,
            in order to enhance the fan experience, the roof may be closed as directed by
            the Supervisor. Decisions on whether to close the roof for cold will be made on a
            match-by-match basis.
            {'\n\n'}
            In some instances, the roof must be partially closed for the lights to function properly. In this case, the roof must be partially closed prior to the start of the match.
            {'\n\n'}
            The ATP Supervisor shall be the final authority on all decisions regarding the


            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule179', next: 'Rule181', nav: navigation }} />
    </>
  );
}


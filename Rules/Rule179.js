import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule179({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT U - Anti-Doping Testing Facilities Guidelines</Text>{'\n\n'}
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Doping Control Station
            </Text>
            The Doping Control Station must be a dedicated facility for the exclusive use of
            the Doping Control team for the duration of the event.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Location:
            </Text>
            near the locker room (but not with direct access).

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Accommodation:
            </Text>
            a minimum of two (and preferably three) connected areas or

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>rooms:
            </Text>
            a Sample Collection Room and a Waiting Room at a minimum, plus an
            Administration Room if possible, all of which should be air-conditioned or well
            ventilated. The Sample Collection Room should be directly connected to a toilet
            (for the sole use of Doping Control).

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Security:
            </Text>
            If free-standing, a security guard should be posted to restrict admission
            to those with appropriate credentials. It must be lockable, with access restricted
            to the Doping Control team. The Doping Control Officer must be given charge of
            all keys to all rooms for the duration of testing.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Hygiene:
            </Text>
            The Doping Control Station should be cleaned every day at a time
            agreed with the Doping Control Officer.
            Items to be supplied in the Doping Control Station (for all draw sizes):
            {'\n\n'}
          </Text>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule179_1.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            A suggested layout for a doping control station is shown in the following diagram:
            {'\n\n'}
          </Text>
          </ZoomText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule179_2.png'}}/>
          <Text>{'\n\n'}</Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule178', next: 'Rule180', nav: navigation }} />
    </>
  );
}


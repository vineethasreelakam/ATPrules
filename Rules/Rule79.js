import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule79({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.15 Laundry Service</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.ATP Masters 1000 and ATP 500 Tournaments.</HighlightText>A complimentary laundry service of
                        a high standard must be made available to the players, coaches and ATP/tournament
                        personnel starting two (2) days prior to the start of qualifying throughout the length of the event, while still competing or working at the
                        event.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.ATP 250 Tournaments.</HighlightText> A complementary laundry service must be made available to
                        the players throughout the length of the event, while still competing or working at the
                        event.
                        {'\n\n'}
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule78', next: 'Rule80', nav: navigation }} />
        </>
    );
}
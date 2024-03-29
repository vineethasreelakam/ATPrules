import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule85({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.21 Automated External Defibrillator (“AED”)</HighlightText>
                        {'\n\n'}
                        An Automated External Defibrillator (“AED”) must be provided in the Physiotherapist/
                        treatment room. In addition, AEDs must be located around the site so that an AED is
                        within 2-3 minutes from all areas of play.
                        For ATP Challenger Tour events it is mandatory for an AED to be located in the Physiotherapist/treatment room and it is highly recommended that a sufficient number of
                        AEDs are located around the site so that an AED is 2-3 minutes from all areas of play.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule84', next: 'Rule86', nav: navigation }} />
        </>
    );
}
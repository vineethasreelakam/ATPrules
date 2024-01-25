import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule86({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.23 Emergency Action Plan</HighlightText>
                        {'\n\n'}
                         Each ATP Tour Tournament shall submit an emergency action plan to the ATP Medical Services for review at least sixty (60) days prior to the start of the tournament.
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule86', next: 'Rule87', nav: navigation }} />
        </>
    );
}
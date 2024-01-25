import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule80({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.16 Stringing Service</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A. General.</HighlightText> A stringing service of a high professional standard must be made available
                        to the players throughout the length of the event. The machine used for stringing
                        must be an electronic model.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B. Days / Hours of Service.</HighlightText>
                        {'\n\n'}
                        1) At a minimum, stringing service must be available beginning the day prior to the
                        start of the qualifying competition and continue through the last day of the competition, including any carry-over days due to weather or other unavoidable circumstances.
                        {'\n\n'}
                        2) At a minimum, must be on-site two (2) hours prior to the starting time for the first
                        scheduled match of the day. Must be available continually throughout the day and
                        until the completion of play for that day. For combined events, and recommended
                        for non-combined events, stringing service must be available until thirty (30) minutes after the conclusion of the last match.
                        {'\n\n'}
                        3) If play is scheduled at an approved alternate site, then access to the stringing
                        service must be provided at such alternate site from the start of play until play has
                        been completed at that site.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>C. Fees.</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour Events. </HighlightText>The recommended maximum fee per racquet is $20 USD /
                        €20 and is the responsibility of the stringing service to collect from the player.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Events.</HighlightText> The recommended maximum fee per racquet is
                        $12 USD / €12 and is the responsibility of the stringing service to collect from the
                        player.
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule79', next: 'Rule81', nav: navigation }} />
        </>
    );
}
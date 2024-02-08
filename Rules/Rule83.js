import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule83({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.19 Transportation </HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>General.</HighlightText> Each tournament must provide scheduled transportation for players (main
                        draw and qualifying), credentialed Player Support Team (“PST”) members, officials
                        and ATP staff that ensures players arrive on-site at least “on the hour”. Transportation vehicles shall be clean, safe, and of a good quality. Child seats shall be available upon request.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading1}>ATP Tour Tournaments. </HighlightText>The scheduled transportation must meet ATP quality standards and be available from 7AM local time (with advanced booking required for
                        the 7AM local time) through to one hour after the last match/practice session. As a
                        guideline, airport transportation should be available, at a minimum, between 7AM
                        and 10PM local time. PST airport transportation will depend on availability if arriving
                        separately from the player. Airport and hotel-site-hotel transportation shall begin two
                        (2) days prior to the start of the qualifying competition through the morning following
                        the final day of the tournament.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading1}>Combined Events and Challenger 175. </HighlightText>Each Tournament shall provide airport
                        transportation beginning two (2) days before the Qualifying Sign In Deadline (provided
                        that 24-hour notice is given to the Tournament) until the morning following the final
                        day of the Tournament to:
                        {'\n\n'}
                        • All Qualifying and Main Draw players;
                        {'\n\n'}
                        • PST members when traveling with a player; and
                        {'\n\n'}
                        • ATP and WTA staff working at the Tournament
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule82', next: 'Rule84', nav: navigation }} />
        </>
    );
}
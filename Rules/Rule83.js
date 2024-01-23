import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule83({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.19 Transportation </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>General.</Text> Each tournament must provide scheduled transportation for players (main
                        draw and qualifying), credentialed Player Support Team (“PST”) members, officials
                        and ATP staff that ensures players arrive on-site at least “on the hour”.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading1}>ATP Tour Tournaments. </Text>The scheduled transportation must meet ATP quality standards and be available from 7AM local time (with advanced booking required for
                        the 7AM local time) through to one hour after the last match/practice session. As a
                        guideline, airport transportation should be available, at a minimum, between 7AM
                        and 10PM local time. PST airport transportation will depend on availability if arriving
                        separately from the player.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading1}>Combined Events and Challenger 175. </Text>Each Tournament shall provide airport
                        transportation beginning the day before the Qualifying Sign-In Deadline (provided
                        that 24-hour notice is given to the Tournament) until the morning following the final
                        day of the Tournament to:
                        {'\n\n'}
                        • All Qualifying and Main Draw players;
                        {'\n\n'}
                        • PST members when traveling with a player; and
                        {'\n\n'}
                        • ATP and WTA staff working at the Tournament
                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule82', next: 'Rule84', nav: navigation }} />
        </>
    );
}
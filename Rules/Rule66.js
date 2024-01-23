import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule66({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.02 Match and Practice Courts</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.</Text>
                        Each tournament must provide match and practice courts as follows:
                        {'\n\n'}
                        ATP Tour Masters 1000
                        96-draw (Combined)
                        9 match courts
                        8 practice courts (on-site)
                        {'\n\n'}
                        ATP Tour Masters 1000
                        96-draw (Outdoors)
                        6 match courts
                        4 practice courts (on-site)
                        {'\n\n'}
                        ATP Tour Masters 1000
                        56-draw
                        (Outdoors and Combined)
                        8 match courts
                        8 practice courts (on-site)
                        {'\n\n'}
                        (Outdoors and Combined)
                        {'\n\n'}
                        ATP Tour Masters 1000
                        56-draw (Indoors)
                        3 match courts
                        4 practice courts (minimum 1 on-site)
                        {'\n\n'}
                        ATP Tour 500
                        (Outdoors and Combined)
                        5 match courts
                        4 practice courts (minimum 3 on-site)
                        {'\n\n'}
                        ATP Tour 500 (Outdoors) 3 match courts
                        4 practice courts (minimum 3 on-site)
                        {'\n\n'}
                        ATP Tour 500 (Indoors) 2 match courts
                        4 practice courts (minimum 1 on-site)
                        {'\n\n'}
                        ATP Tour 250 (Outdoors) 3 match courts
                        1 practice court for every 16 players in
                        singles draw (minimum 2)
                        {'\n\n'}
                        ATP Tour 250 (Indoors) 2 match courts
                        1 practice court for every 16 players in
                        singles draw (minimum 2)
                        {'\n\n'}
                        ATP Challenger Tour
                        (Outdoors)*
                        3 match courts
                        1 practice court for every 16 players in
                        singles draw (minimum 2)
                        {'\n\n'}
                        ATP Challenger Tour (Indoors) 2 match courts
                        1 practice court for every 16 players in
                        singles draw (minimum 2**)
                        {'\n\n'}

                        All courts must be the same surface, color, speed and conditions.
                        {'\n\n'}
                        For combined events, the minimum number of match/practice courts must be
                        available exclusively to ATP.
                        {'\n\n'}
                        * Minimum number of match/practice courts will be reviewed and approved on a
                        case by case basis. Factors considered when determining minimum number of
                        courts include, but are not limited to, daylight hours, night sessions, number of
                        lighted courts meeting or exceeding minimum requirement.
                        {'\n\n'}
                        ** Existing indoor events where meeting the minimum requirement is not possible
                        may appeal for a waiver.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.</Text>All match and practice courts must be the same surface, speed and conditions as the
                        main draw and must be available for practice from 9:00 A.M. on Friday prior to the
                        start of the tournament until the conclusion of the tournament.
                        {'\n\n'}
                        For ATP Challenger Tour tournaments, practice courts to be available from 12:00
                        Noon on the Saturday preceding the start of the tournament (Friday, in case of Sunday to Saturday schedule).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.</Text>Courts must be set up to provide normal support, including drinks (bottled water),
                        sawdust and towels.

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View>
            <RuleNavigationButtons props={{ prev: 'Rule65', next: 'Rule67', nav: navigation }} />
        </>
    );
}


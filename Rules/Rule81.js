import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule81({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.17 Food</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>General.</Text> Each tournament must provide a variety of suitable and of high-quality food
                        for the competitors on-site or, as approved by ATP, within reasonable distance of
                        the tournament venue. Food service for ATP 250 and Challenger Tour tournaments
                        should begin no later than the day before the start of the qualifying and continue until
                        the completion of the tournament.
                        {'\n\n'}
                        Type of food offered shall be subject to local health and safety regulations.
                        {'\n\n'}
                        After a player permanently leaves the event, guest passes/credentials and associated benefits shall be automatically revoked for PST members, unless otherwise
                        decided by the tournament.
                        {'\n\n'}
                        Please refer to "Exhibit Q" and to the Standards and Best Practices section on ATP
                        Tournament Centre for minimum Player Food Service Guidelines.

                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000 and ATP 500 Tournaments*. </Text>Each tournament shall provide complimentary food service available for each player and two (2) PST members
                        for the same number of days as the player’s hospitality through direct allocation on
                        the individual credential or allowance on the player credential. Tournaments are encouraged to provide complimentary food for additional PST members.
                        {'\n\n'}
                        The complimentary food service shall offer fresh, high-quality hot and cold food options with a combination of made to order and buffet food, variety of proteins including
                        vegan protein (tofu or tempeh), carbs, salads, fruit and smoothies.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP 250 Tournaments*. </Text>Each tournament shall provide complimentary food service
                        available for each player and two (2) PST members.
                        {'\n\n'}
                        *ATP Tour events are required to provide complimentary adequate breakfast for the
                        occupants of the players’ room at the hotel.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Challenger 125 and 175 Tournaments. </Text>Challenger 125 and 175 events shall provide a minimum of one (1) complimentary meal per day (lunch or dinner in addition
                        to breakfast at the hotel) to each player from the starting day of the draw in which
                        he is accepted until the day of the player’s last match in the tournament (singles or
                        doubles).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Hours of Service.</Text>
                        {'\n\n'}
                        At a minimum, from one (1) hour prior to the start of play through a period after the
                        completion of the last match.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B. Safety</Text>
                        {'\n\n'}
                        1) All bottled water and electrolyte drinks must be served in unopened sealed containers.
                        {'\n\n'}
                        2) All food and beverages must be properly stored and maintained at an appropriate
                        temperature, which complies with local health regulations.

                        <Text style={RuleStyles.SubHeading2}>C. Combined Events</Text>
                        {'\n\n'}
                        1) Working Staff. Food is to be provided free of charge to all working staff. Visiting
                        staff are not included.
                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule80', next: 'Rule82', nav: navigation }} />
        </>
    );
}
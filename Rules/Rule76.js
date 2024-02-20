import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule76({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.12 ATP Family Lounge and ATP Player Lounge</HighlightText>
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>General.</HighlightText> The ATP Family Lounge and ATP Player Lounge (each as defined below)
                        should be secure with only persons with proper access allowed to enter.
                        {'\n\n'}
                        {'\t'}Tournaments are recommended to use web filtering technology to restrict access to
                        internet gambling sites in all areas where tournament provided access is provided.
                        {'\n\n'}
                        {'\t'}Receipt by any person of guest passes/credentials or any other benefits or special
                        accommodations are expressly subject to the “Limits to On-Site Access” set forth in
                        the Rulebook.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>ATP Family Lounge.</HighlightText> ATP Tour and ATP Challenger Tour tournaments shall provide
                        a suitable space appropriately equipped for the players, their PST members and their
                        properly credentialed guests (“ATP Family Lounge”). Tier 1 Player agents will not
                        count towards the number of PST members allowed and will be granted access to
                        the ATP Family Lounge.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>ATP Masters 1000 Family Lounge.</HighlightText> ATP Masters 1000 tournaments shall provide (i)
                        complimentary snacks and drinks for players and two (2) PST members per player,
                        and (ii) offer high speed internet, high quality coffee, snacks, drinks, juice, smoothie
                        stations, TVs, and games.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>ATP 500 Family Lounge.</HighlightText> ATP 500 tournaments shall provide complimentary highspeed internet, high-quality coffee, snacks, drinks, juice, and smoothie stations.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>ATP 250 Family Lounge.</HighlightText> ATP 250 tournaments shall provide for players and two (2)
                        PST members per player complimentary internet, coffee, snacks, and smoothies.{'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading3}>ATP Masters 1000 Tournaments Player Lounge.</HighlightText> In addition to the ATP Family
                        Lounge, ATP Masters 1000 tournaments shall also provide a separate quiet room
                        (“ATP Tour Player Lounge”) with access for the players and one (1) PST member per
                        player.
                        {'\n\n'}

                        {'\n\n'}

                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule75', next: 'Rule77', nav: navigation }} />
        </>
    );
}
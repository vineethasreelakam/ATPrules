import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule75({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.11 Player Benefits - Guest Passes/Credentials/Tickets</Text>
                        {'\n\n'}
                        A player entered in ATP Tour and ATP Challenger Tour tournaments shall be issued
                        a reasonable number (a minimum of two) guest passes/credentials for his use while
                        competing in the event. Guest passes / credentials shall be issued only after the player guest has provided proof of identity (photo I.D.) and has completed and signed the
                        player guest form. These guest passes/credentials include access to the site, seating
                        in designated areas and other benefits as determined by individual tournaments and
                        shall be valid as long as the player remains at the tournament. Player guest passes/
                        credentials shall not allow access to the player locker room or the Physiotherapist
                        room. All other access is at the sole discretion of the tournament. Passes/credentials
                        can be revoked at any time based on recommendation of the Supervisor to the Tournament Director.
                        {'\n\n'}
                        Credentials provided to the player may not be exchanged, directly or indirectly, for
                        money, benefit or anything of value. Violation of this section shall subject the player
                        to the penalties set forth under the Player Major Offense – Aggravated Behavior.
                        {'\n\n'}
                        Receipt by any person of guest passes/credentials or any other benefits or special
                        accommodations are expressly subject to the “Limits to On-Site Access” set forth in
                        the Rulebook.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Combined Events.</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>A.Players.</Text> Players shall receive two (2) tickets per day while they are still competing.
                        For ticketed matches, a player box with a minimum of six (6) seats shall be provided
                        for that players’ match only. The boxes should be equally located at opposite ends of
                        the court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>B.Staff.</Text> Each Tournament must provide the ATP and WTA each three (3) seats close to
                        the entrance of and with easy access to the court during all matches for the following
                        ATP/WTA staff members: (i) Supervisor; (ii) Physiotherapist / PHCP; and (iii) Tour
                        Manager / PR representative.
                        {'\n\n'}

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule74', next: 'Rule76', nav: navigation }} />
        </>
    );
}
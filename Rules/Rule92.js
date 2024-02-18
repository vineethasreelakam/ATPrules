import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule92({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.02 Entries</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Gender / Age Limitation</HighlightText>
                        {'\n\n\t'}
                        ATP will use the age of a player on the first (1st) day of the qualifying competition.
                        Male players age sixteen (16) or older are not limited in the number of tournaments
                        they may enter. Players under the age of sixteen (16) are subject to the following
                        entry restrictions in ATP Tour or ATP Challenger Tour tournaments (includes entry as
                        a wildcard):
                        {'\n\n\t\t'}
                        1) Male players under the age of fourteen (14) shall not be eligible for entry into any
                        ATP Tour or ATP Challenger Tour tournament.
                        {'\n\n\t\t'}
                        2) Male players aged fourteen (14) shall be eligible for entry into a maximum of
                        eight (8) ATP Tour or ATP Challenger Tour tournaments.
                        {'\n\n\t\t'}
                        3) Male players aged fifteen (15) shall be eligible for entry into a maximum of twelve
                        (12) ATP Tour and ATP Challenger Tour tournaments.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) Transgender Athlete Participation. </HighlightText>A trans male (FTM) athlete who has received a medical exception for treatment with testosterone* for diagnosed Gender Identity Disorder or gender dysphoria and/or Transsexualism, for purposes
                        of competition may compete on the ATP Tour or ATP Challenger Tour. A trans
                        male (FTM) athlete who is not taking testosterone related to gender transition
                        may also participate in ATP Tour or ATP Challenger Tour events.
                        *Must have a valid TUE from the Tennis Anti-Doping Program.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule91', next: 'Rule93', nav: navigation }} />
        </>
    );
}
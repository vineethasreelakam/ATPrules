import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule105({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.15 Number of Seeds</HighlightText>
                        {'\n\n\t'}
                        The number of seeds shall be as follows:
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Singles </HighlightText>
                        {'\n\n\t\t'}
                        4 competitors - 2 seeds (singles Q)*
                        {'\n\n\t\t'}
                        16 competitors - 8 seeds (singles Q)
                        {'\n\n\t\t'}
                        24 competitors - 12 seeds (singles Q)
                        {'\n\n\t\t'}
                        28 competitors - 14 seeds (singles (Q)
                        {'\n\n\t\t'}
                        48 competitors - 24 seeds (singles Q)
                        {'\n\n\t\t'}
                        32 compeitiors - 8 Seeds
                        {'\n\n\t\t'}
                        28 competitors - 8 seeds
                        {'\n\n\t\t'}
                        48 competitors - 16 seeds
                        {'\n\n\t\t'}
                        56 competitors - 16 seeds
                        {'\n\n\t\t'}
                        96 competitors - 32 seeds
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Doubles</HighlightText>
                        {'\n\n\t\t'}
                        4 teams - 2 seeds (Qualifying)
                        {'\n\n\t\t'}
                        16 teams - 4 seeds
                        {'\n\n\t\t'}
                        24 teams - 8 seeds
                        {'\n\n\t\t'}
                        32 teams - 8 seeds
                        {'\n\n\t\t'}
                        *ATP Challenger Tour Qualifying only

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule104', next: 'Rule106', nav: navigation }} />
        </>
    );
}  
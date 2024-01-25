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
                        {'\n\n'}
                        The number of seeds shall be as follows:
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Singles </HighlightText>
                        {'\n\n'}
                        4 competitors - 2 seeds (singles Q)*
                        {'\n\n'}
                        16 competitors - 8 seeds (singles Q)
                        {'\n\n'}
                        24 competitors - 12 seeds (singles Q)
                        {'\n\n'}
                        28 competitors - 14 seeds (singles (Q)
                        {'\n\n'}
                        48 competitors - 24 seeds (singles Q)
                        {'\n\n'}
                        32 compeitiors - 8 Seeds
                        {'\n\n'}
                        28 competitors - 8 seeds
                        {'\n\n'}
                        48 competitors - 16 seeds
                        {'\n\n'}
                        56 competitors - 16 seeds
                        {'\n\n'}
                        96 competitors - 32 seeds
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Doubles</HighlightText>
                        {'\n\n'}
                        4 teams - 2 seeds (Qualifying)
                        {'\n\n'}
                        16 teams - 4 seeds
                        {'\n\n'}
                        24 teams - 8 seeds
                        {'\n\n'}
                        32 teams - 8 seeds
                        {'\n\n'}
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
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule106({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.16 Placement of Seeds - Main Draw
                        </Text>
                        {'\n\n'}
                        The procedures for placing seeds in the main draw are as follows:
                        {'\n\n'}
                        A.Place seed 1 on line 1 and seed 2 on line 32 (32 draw), line 64 (64 draw) or line 128
                        (96 draw); and
                        {'\n\n'}
                        B.To determine the location of the remaining seeds, draw in groups according to the
                        following chart:
                        {'\n\n'}
                    </Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule106_1.png'}}/>
                    <Text>  {'\n\n'}</Text>
                </ScrollView>
            </View>
            <RuleNavigationButtons props={{ prev: 'Rule105', next: 'Rule107', nav: navigation }} />
        </>
    );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule82({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.18 On-Site Access / Limits to On-Site Access</Text>
                        {'\n\n'}
                        The ATP CEO, or his designee, may, in his sole discretion, instruct any ATP Tour or
                        ATP Challenger Tour tournament to prohibit any person from obtaining access to any
                        areas at a tournament site that are not generally open or available to all members of
                        the public or from utilizing tournament transportation. The ATP CEO, or his designee
                        may so act for any reason, including without limitation, any concern that the ATP
                        CEO, or his designee may have, in his sole discretion, that such person may pose
                        any issue with respect to security, reputation, integrity, misconduct, or competition.
                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule81', next: 'Rule83', nav: navigation }} />
        </>
    );
}
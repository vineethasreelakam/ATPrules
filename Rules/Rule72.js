import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule72({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.08 Offices</Text>
                        {'\n\n'}
                        Each tournament shall provide suitable workspace/office for ATP staff and officials.

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule71 ', next: 'Rule73', nav: navigation }} />
        </>
    );
}


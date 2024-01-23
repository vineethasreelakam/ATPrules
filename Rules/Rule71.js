import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule71({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.07 Temperature and Ventilation For Indoor Facilities</Text>
                        {'\n\n'}
                        Indoor facilities must provide normal and standard heating, cooling and ventilation.
                        The Supervisor may suspend play if, in his judgment, the conditions of play are unacceptable for professional tennis.

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule70', next: 'Rule72', nav: navigation }} />
        </>
    );
}


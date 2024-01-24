import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule89({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.26 Electronic Line Calling Facilities Guidelines</Text>
                        {'\n\n'}
                        The use of an approved electronic system for reviewing line calls and/or overrules is
                        authorized for use at ATP events.
                        {'\n\n'}
                        See “Exhibit T - Electronic Line Calling Facilities Guidelines” and “Exhibit T1 - ELC
                        Review Official Protocol” for full Electronic Line Calling Facilities Guidelines and Protocol.
                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule88', next: 'Rule90', nav: navigation }} />
        </>
    );
}
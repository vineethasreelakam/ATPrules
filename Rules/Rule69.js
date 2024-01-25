import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";



export default function Rule69({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.05 Security at Tournaments</HighlightText>
                        {'\n\n'}
                        A.Each tournament has the responsibility to provide adequate security at the tournament site. Players have the responsibility to report any threat or unusual occurrence
                        to the Tournament Director, Supervisor or Senior Vice President - Rules & Competition when at a tournament.
                        {'\n\n'}
                        B.The continual use of laptop computers or other handheld electronic devices within the confines (spectator area) of the tournament match courts shall be prohibited
                        and each tournament shall take reasonable steps to enforce such prohibition. The
                        exception to this provision is properly credentialed media, tournament vendors and
                        tournament staff when used in the performance of their duties
                        {'\n\n'}

                        {'\n\n'}

                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule68', next: 'Rule70', nav: navigation }} />
        </>
    );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule91({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.01 ATP Fees</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Entry Fees</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour Tournaments.</HighlightText> There are no entry fees.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading4}>2) ATP Challenger Tour Tournaments.</HighlightText> There are no entry fees.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> B.Service Fee</HighlightText>
                        {'\n\n'}
                        1) Players who are included in the main draw or qualifying (singles or doubles) of
                        any ATP Tour tournament and who are not members in good standing with ATP
                        must pay the following service fee to ATP:
                        {'\n\n'}
                        ATP Tour Masters 1000 Main Draw $400/€400 event Qualifying $100/€100
                        {'\n\n'}
                        United Cup $350
                        {'\n\n'}
                        ATP Tour 500 Main Draw $300/€300 event Qualifying $100/€100
                        {'\n\n'}
                        ATP Tour 250 Main Draw $200/€200 event Qualifying $100/€100
                        {'\n\n'}
                        2) The Tour Manager will identify players who must pay a service fee that will be
                        withheld from on-site prize money. Players who by virtue of their ranking position
                        are not eligible for an ATP player membership may use these payments as a
                        credit toward future membership fees. Service fees paid to ATP may only be
                        applied against membership dues in the calendar year in which they were paid.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>C.Membership Fees </HighlightText>
                        {'\n\n'}
                        Membership fees are defined in the ATP By-Laws
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule90', next: 'Rule92', nav: navigation }} />
        </>
    );
}
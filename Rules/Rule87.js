import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule87({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.24 Anti-Doping Facilities and On-Site Personnel Assistance</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.On-Site Testing Facility</HighlightText>
                        {'\n\n'}
                        1) Each ATP Tour and ATP Challenger Tour tournament, when requested, is obligated to provide at its own cost the following facilities:
                        {'\n\n'}
                        a) A lockable private room with bathroom and an adjacent waiting room; or, at
                        the discretion of the Anti-Doping Personnel,
                        {'\n\n'}
                        b) An alternative on-site location with a suitable trailer.
                        {'\n\n'}
                        2) In addition, the tournament is required to provide at its own cost appropriate furniture, bottled water, fruit and television or court monitoring systems for the testing
                        facility as well as staff assistance for site set-up and facility maintenance during
                        the tournament.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.Volunteer Observers Provided by Tournament. </HighlightText>
                        {'\n\n'}
                        Each tournament must provide at its own cost male staff members and/or volunteers
                        who can assist the Official Anti-Doping Personnel and Supervisor with the observation of players selected for testing. The Official Anti-Doping Personnel shall notify a
                        tournament of the number of personnel required no later than three (3) weeks prior to
                        the start of an event.
                        {'\n\n'}
                        See “Exhibit U” for full Anti-Doping Facilities Guidelines.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule211', next: 'Rule88', nav: navigation }} />
        </>
    );
}
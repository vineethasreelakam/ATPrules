import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';


export default function Rule108({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.18 Byes - Assignment and Placement </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Singles Main Draw</Text>
                        {'\n\n'}
                        1) If there is a 32 main draw, no byes shall be awarded unless there are an insufficient number of direct acceptances.
                        {'\n\n'}
                        2) If there is a 28 main draw, the top four (4) seeds shall be awarded a bye.
                        {'\n\n'}
                        3) If there is a 48 or 96 main draw, each seed shall be awarded a bye.
                        {'\n\n'}
                        4) If there is a 56 main draw, the top eight (8) seeds shall be awarded a bye. Any
                        player who received a “bye” and loses in the second round shall receive second
                        round loser’s prize money but only first round loser’s points for the Pepperstone
                        ATP Rankings, if applicable.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Doubles Main Draw</Text>
                        {'\n\n'}
                        1) If there is a 16 or 32 main draw, no byes shall be awarded.
                        {'\n\n'}
                        2) If there is a 24 main draw, each seeded team shall be awarded a bye.
                        {'\n\n'}
                        3) Any team that received a “bye” and loses in the second round shall receive second round loser’s prize money but only first round loser’s points for the Pepperstone ATP Doubles Rankings, if applicable
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Qualifying Draw</Text>
                        {'\n\n'}
                        If there are not enough competitors to fill the qualifying draw, then after the seeds are
                        placed in the draw, the required number of byes shall be awarded as follows:
                        {'\n\n'}
                        1) Priority shall be to the highest seeds.
                        {'\n\n'}
                        2) Remaining byes shall be drawn by groups of two (2) going into one (1) section
                        (e.g., if there are 10 byes, eight go to seeds and the remaining two are drawn
                        into one section; if there are 11 byes, nine and 10 are drawn into one section and
                        the 11th is randomly drawn into one of the other three (for a 32 draw qualifying
                        competition) remaining qualifying sections)

                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule107', next: 'Rule109', nav: navigation }} />
        </>
    );
}
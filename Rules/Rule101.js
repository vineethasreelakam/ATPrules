import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule101({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.11 Time of Draw</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Main Draw </HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}></HighlightText>1) Singles. The tournament shall publicly make the singles draw no earlier than 10
                        AM Eastern Time, USA, on Friday prior to the Monday of the tournament week
                        and no later than 10 p.m. local time two (2) days before the first day’s play, unless
                        the tournament receives prior written permission from ATP. The time and place of the draw shall be determined by the tournament. For events approved for a
                        Sunday start, the draw shall be made no earlier than 10 AM Friday, Eastern time
                        USA and no later than 12 noon local time the day prior to the start of the event.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}></HighlightText>2) Doubles. The draw for doubles is to be made as soon as possible after the onsite entry deadline unless otherwise approved by the Supervisor. If the draw for
                        a tournament is played over eight (8) or more days, then the draw is to be made
                        by midnight of the second day. Once the draw is finalized there can be no change
                        except for substitution. Doubles main draw matches shall not begin until all doubles qualifying matches are completed unless approapproved by the Supervisor.
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>B.Qualifying</HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Singles – ATP Tour.</HighlightText> The qualifying competition draw shall be made and the order
                        of play announced as soon as possible but no earlier than 6:00 pm local time on
                        the day prior to the start of the qualifying.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Singles – ATP Challenger Tour.</HighlightText> The qualifying competition draw shall be made
                        and the order of play announced as soon as possible but no earlier than 6:00 pm
                        local time on the day prior to the start of the qualifying competition.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) Doubles - ATP Tour 500. </HighlightText>The qualifying competition draw shall be made and the
                        order of play announced as soon as possible following the sign-in deadline unless
                        otherwise determined by ATP

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule100', next: 'Rule102', nav: navigation }} />
        </>
    );
}
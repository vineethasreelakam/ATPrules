import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule96({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.06 One Tournament Per Week and Exception</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}> A.Regulation:</Text>
                        {'\n\n'}
                        A player may only enter and compete in one Grand Slam, ATP Tour, ATP Challenger
                        Tour or special event during that tournament week. Once a player enters and is
                        accepted into the main draw of singles, doubles, or the qualifying competition, he is
                        committed to that tournament for the week, unless released by the Senior Vice President - Rules & Competition or Supervisor. A player who loses in the singles qualifying
                        competition may enter the doubles event of any tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>May a team who enters and loses doubles qualifying at an
                        ATP 500 event on Saturday enter doubles in a Challenger for the
                        same week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. This would violate the provisions of the One Tournament Per Week rule.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Exception: </Text>
                        {'\n\n'}
                        A player who has lost in a tournament may enter the qualifying for a tournament
                        scheduled for the next week*. The Supervisor may authorize a player who is still
                        competing in the main draw of a tournament in singles and/or doubles to enter the
                        qualifying for the next week’s ATP Tour and ATP Challenger Tour tournaments provided that no special scheduling by either tournament shall be required. In the event of
                        a conflict, he shall be withdrawn from such qualifying so as to compete in the singles
                        and/or doubles of the main draw tournament in which he is competing. In addition, if
                        the player does not appear for play as scheduled, there shall be an automatic fine.
                        {'\n\n'}
                        *This does not apply to events in the same week as a Grand Slam qualifying event.
                        Players accepted into the qualifying of a Grand Slam event will not be allowed to
                        compete in any ATP Tour or ATP Challenger event (qualifying or main draw) held in
                        the same week.

                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule95', next: 'Rule97', nav: navigation }} />
        </>
    );
}
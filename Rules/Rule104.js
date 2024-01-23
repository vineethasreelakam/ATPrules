import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';


export default function Rule104({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>             
                   <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.14 Seeds Definition</Text>
                        {'\n\n'}
                        Seeds are players who are given preferential positions in the draw based on the
                        Pepperstone ATP Rankings. The selection and arrangement of seeds shall be based
                        upon the most recent Pepperstone ATP Rankings list (the protected ranking is not
                        considered). Each tournament shall have a seeded draw and there shall be only one
                        seeding list. Seeding shall not be official until the final draw is made. For doubles,
                        seeded teams will be determined by using the combined Pepperstone ATP Doubles
                        Rankings of the two players (entry protection not included).
                        {'\n\n'}
                        Any vacancy created by the withdrawal of a seed, after the draw has been made but
                        prior to the release of the order of play for the first day of main draw, shall be filled
                        according to the procedures described under vacancies.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>Protected Ranking is for Entry, Not Seeding</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>May a player’s protected ranking be used for seeding purposes?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. The protected ranking position can be used for: 1)
                        entry into the qualifying competition and main draw, or 2) special
                        exempt position. It may not be used for: 1) seeding, or 2) lucky loser
                        order

                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule103', next: 'Rule105', nav: navigation }} />
        </>
    );
}
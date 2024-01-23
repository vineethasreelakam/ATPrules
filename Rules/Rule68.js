import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule68({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.04 Crowd Movement / Spectator Seating</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Regulation </Text>
                        {'\n\n'}
                        Each ATP Tour tournament shall allow spectators seated above the lowest tier of
                        seats that surround the playing area of the courts to move to and from their seats at
                        any time during play.
                        {'\n\n'}

                        1) The Tournament Director and the Supervisor will make the designation of the
                        lowest tier at each tournament.
                        {'\n\n'}
                        2) In cases where there is no clear break in the seating configuration, the Tournament Director and the Supervisor shall determine the most logical designation.
                        {'\n\n'}

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule67', next: 'Rule69', nav: navigation }} />
        </>
    );
}



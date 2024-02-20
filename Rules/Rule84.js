import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule84({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.20 Physiotherapist/Treatment Room</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>ATP Tour & ATP Challenger Tour</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>A. General.</HighlightText>  Each tournament must provide a Physiotherapist/treatment room for players and physiotherapists centrally located to the courts and the locker room. If the
                        Physiotherapist/treatment room is located in an area separate from the locker room,
                        proper security at the entry point must be provided. Only those persons with approved access and properly credentialed tournament staff, who in the performance
                        of their duties justify access to the locker room, shall be authorized to enter the Physiotherapist/treatment room. The room must be private and equipped with ice and ice
                        chests/coolers, towels and electricity. This room must be fully functional by 8:00 am
                        the day prior to the start of qualifying.  (For ATP Masters 1000 events three (3) days
                        before qualifying starts). Please refer to the Standards and Best Practices section on
                        ATP Tournament Centre for full medical facility guidelines.
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>B.High/Low Treatment/Massage Table.</HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Tour.</HighlightText> Two (2) high/low tables for a 28 or 32 draw event and additional high/
                        low tables for larger draws, as determined by ATP Medical Services.

                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) ATP Challenger Tour.</HighlightText> Challenger 125 and 175 events are required to have two
                        (2) electric or hydraulic high/low treatment tables in the physiotherapist’s room,
                        whereas Challenger 100 events are required to have one (1) electric or hydraulic
                        high/low table in the physiotherapist room with a recommendation to have two (2)
                        electric or hydraulic high/low tables. A minimum of one (1), but preferably two (2)
                        high/low table(s) is recommended for all other Challenger levels.

                        {'\n\n\t'}

                        <HighlightText style={RuleStyles.SubHeading3}>C.Recovery Equipment and Facilities.</HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Masters 1000 Tournaments. </HighlightText>Each tournament shall provide: (i) high quality
                        (selected in consultation with ATP Medical Services) recovery modalities (e.g.,
                        compression devices and ice bath).
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) ATP 500 Tournaments.</HighlightText> Each tournament shall provide: (i) high quality dedicated ice bath and recovery modalities (selected in consultation with ATP Medical Services).
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) ATP 250 Tournaments.</HighlightText> Each tournament shall provide: (i) high quality ice bath, selected in consultation with ATP Medical Services.
                        {'\n\n\t\t'}
                        Please refer to the Standards and Best Practices section on ATP Tournament Centre for full recovery and equipment facilities guidelines.
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>D. Private Physiotheraplist Facilities.</HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) ATP Masters 1000 Tournaments. </HighlightText>Each tournament shall provide separate area with treatment tables (recommendation – 4 for 48-draw; 5 for 56-draw; 6 for 64-draw; and 9 for 96-draw). 
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) ATP 500 Tournaments.</HighlightText> Each tournament shall provide separate area with treatment tables (recommendation – 3 for 32-draw and 4 for 48-draw).
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) ATP 250 Tournaments.</HighlightText>  Each tournament shall provide separate private physiotherapist area with appropriate number of treatment tables.
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule83', next: 'Rule85', nav: navigation }} />
        </>
    );
}
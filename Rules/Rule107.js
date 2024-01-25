import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule107({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.17 Qualifying Placement </HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Singles</HighlightText>
                        {'\n\n'}
                        1) There will be one section, having two (2) seeds, for each qualifying position in the
                        main draw. The first seed shall be placed at the top of the first section. The second
                        seed shall be placed at the top of the second section and so on until all sections have one (1) seed on the top line of each section. The remaining seeds shall be
                        placed together and drawn with the first drawn placed on the last line of the first
                        section, second drawn placed on the last line of the second section and continued
                        in this manner until each of the sections have two seeds.
                        {'\n\n'}
                        2) The names of the remaining players shall be drawn and placed in the vacant
                        spaces not occupied by the seeds or byes beginning at the top of the draw.

                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> B.Doubles</HighlightText>
                        Two teams shall be seeded in a four-draw event with the seeds being placed on
                        lines 1 and 4.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule106', next: 'Rule108', nav: navigation }} />
        </>
    );
}
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule78({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.14 The Gymnasium (“Gym”)</Text>
                        {'\n\n'}
                        All ATP Tour events are required to provide a gym as follows:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.All ATP Tour events.</Text> A fully equipped gym of adequate size
                        must be provided, free of charge, on-site as specified in the Standards and Best Practices section on ATP Tournament Centre.
                        In addition to the on-site required gym, ATP Tour Masters 1000 tournaments shall
                        provide: (i) an additional professional quality level gym (off-site location acceptable
                        in order to provide the requested quality) and (ii) a separate on-site area for player
                        warm-up, light sprints, and movement drills.
                        In addition to the on-site required gym, all ATP Tour tournaments shall provide a separate
                        on-site area for player warm-up, light sprints, and movement drills.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.ATP Challenger Tour events.</Text> A fully equipped gym (as specified in the Standards and Best Practices section on ATP Tournament Centre), of
                        adequate size must be provided free of charge on-site, off-site at a reasonable distance from the tournament site/official hotel or at the official tournament hotel with the
                        following exception:
                        {'\n\n'}
                        Challenger 50 events may petition ATP to waive the fully equipped gym requirement
                        if they are not reasonably able to provide it.
                        {'\n\n'}
                        Each Challenger tournament regardless of category must provide an area on-site
                        to be used for warm up/cool down, with equipment for this purpose as specified in
                        the Standards and Best Practices section on ATP Tournament Centre if fully equipped gym is not available on-site.

                        {'\n\n'}

                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule77', next: 'Rule79', nav: navigation }} />
        </>
    );
}
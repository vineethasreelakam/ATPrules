import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule77({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.13 Locker Room </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>A.General.</Text> Each tournament shall provide players with a suitably equipped and secure
                        locker room. The entrance to the locker room shall be monitored and only properly
                        credentialed persons shall be allowed to enter. Only those persons with access approval and properly credentialed tournament staff, who in the performance of duties justify access to the locker room, shall be authorized to enter the locker room.
                         ATP Tour Tournaments are required to provide shower gel and shampoo in the player locker rooms free of charge.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Masters 1000, 500 and 250 Tournaments.</Text> Each tournament shall provide a small
                        seating area for players inside the locker room with a minimum size requirement as
                        determined by ATP dependent on the size of the facility.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}> B.</Text> It is recommended that tournaments located where extreme weather conditions exist provide a submersion bath (ice bath) in or near the shower area. For combined
                        events, if a submersion bath is provided, it must be provided in both male and female locker/shower
                        areas.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>C.Lockers</Text>
                        {'\n\n'}
                        a) A lockable locker must be available for use by each player.
                        {'\n\n'}
                        b) If the locker requires a separate lock, then this must be provided to each
                        player upon arrival.
                        {'\n\n'}
                        c) If the lockers do not have the ability to be locked; or cannot be locked in a
                        manner that provides reasonable safety, then:
                        {'\n\n'}
                        i) The tournament must provide separate lock boxes where a player may
                        secure his valuables; or
                        {'\n\n'}
                        ii) Another method whereas a player may secure his valuables with reasonable expectations of safety must be provided.
                        {'\n\n'}
                        d) For ATP Masters 1000 and 500 tournaments, personal lockers should be able
                        to fit a racket bag inside

                        {'\n\n'}

                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule76', next: 'Rule78', nav: navigation }} />
        </>
    );
}
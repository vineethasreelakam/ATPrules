import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule88({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.25 Media Facilities Guidelines</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>A. General</HighlightText>
                        {'\n\n'}
                        All ATP Tour tournaments and the Nitto ATP Finals should provide adequate media
                        facilities. All media areas shall be gambling free zones and any and all persons credentialed for this area, if found to be gambling on tennis or passing insider information to third parties for use in connection with gambling, shall have their credentials
                        revoked. Media credentials must contain a provision whereby the media member
                        acknowledges and agrees that, except as allowed pursuant to Rule 6.09 E, he/she
                        will not disseminate, transmit, publish or release from the grounds of the Tournament
                        any live match score or related live statistical data until :30 seconds after the actual
                        occurrence of the incident of match play or action that leads to such live score update
                        (e.g., a point being scored), and that such use shall be solely for news reporting and
                        editorial use.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>B. Media Work Room</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>1) Location. </HighlightText>The media work room should be located as near as possible to the
                        player locker room (and for ATP Masters 1000 and ATP 500 tournaments near
                        the ATP Family Lounge).
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>2) Security. </HighlightText>Media work room must be secured with access provided only to properly
                        credentialed media, players and other tournament and ATP Staff when in the
                        performance of their duties.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>3) Specifications.</HighlightText> Requirements / recommendations for the media work room can
                        be found in “Exhibit R - Media Facilities Guidelines”.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}> C. Player Interview Rooms</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Location. </HighlightText>Should be located near both the player locker room and the media
                        work room.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Specifications.</HighlightText>
                        a) Must be “smoke free”.
                        {'\n\n'}
                        b) Sound proof
                        {'\n\n'}
                        c) Interview room must be secured with access provided only to properly credentialed media, players and other tournament and ATP Staff when in the
                        performance of their duties.
                        {'\n\n'}
                        d) Interview backdrop shall comply with all branding requirements of ATP.
                        {'\n\n'}
                        e) Space to be provided for journalists, photographers and television personnel
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>3) Small Interview Rooms.</HighlightText> ATP Masters 1000 and ATP 500 tournaments shall provide the following number of small private interview rooms: (i) 96-draw: 3, and (ii)
                        56-draw and 48-draw: 2.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) Transcripts.</HighlightText> ATP Masters 1000 and ATP 500 tournaments shall provide transcripts for all interviews.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>D. Mixed Zone</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>1) Location.</HighlightText> The Mixed Zone shall be in a suitable location, as determined by ATP,
                        on the player route as close as possible to the player locker room and media work
                        room.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>2) Branding.</HighlightText> The Mixed Zone shall be branded as stated under the rules for Media
                        Backdrop (“Exhibit A.11”).
                        {'\n\n'}
                        Tournaments are recommended to use web filtering technology to restrict access to
                        internet gambling sites in all areas where tournament provided access is provided.
                        {'\n\n'}
                        See “EXHIBIT R” for full Media Facilities Guidelines.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>E. TV Studios. </HighlightText>ATP Tour Masters 1000 tournament shall provide the following number
                        of TV studios: (i) 96-draw – 3, and (ii) 56-draw and 48-draw: 2.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>F. Stars Program. </HighlightText>ATP Tour Masters 1000 tournaments must provide a dedicated person to help implement the Stars Program.
                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule87', next: 'Rule89', nav: navigation }} />
        </>
    );
}
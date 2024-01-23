import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule73({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.09 Communication Devices</Text>
                        {'\n\n'}
                        Each tournament must provide communication devices to the Referee, Chief of Umpires, and Physiotherapist(s) except if otherwise approved by ATP. In addition, the
                        following equipment is required to be on-site:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Copy machine</Text>
                        {'\n\n'}
                        A copy machine should be provided in, or near, the Supervisor’s office. Copy machine should be available on the morning prior to the start of the qualifying competition.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B. Printer</Text>
                        {'\n\n'}
                        A printer shall be provided in the office of the Supervisor. Printer should be available
                        on the morning prior to the start of the qualifying competition and be available through
                        the last match of the tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Internet</Text>
                        {'\n\n'}
                        Always-on high speed Internet connection is to be provided in the offices of the ATP
                        Supervisor, ATP Tour Manager, ATP Physiotherapist, ATP scoring system specialist
                        and ATP PR unless otherwise approved by ATP. The required minimum upload and
                        download speeds allocated to ATP staff are 0.6 megabits per second (Mbs) for uploads and 5 Mbs for downloads.
                        Tournaments are recommended to use web filtering technology to restrict access to
                        internet gambling sites in all areas where tournament provided access is provided.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D. Live Scoring</Text>
                        {'\n\n'}
                        Each Tournament shall be responsible for the set up and maintenance of a network
                        based on specifications provided by ATP, to support live scoring services for each
                        match* of the event and subject to 6.09 E, will assist ATP in its efforts to produce
                        and host the live score data generated from each match. Each tournament hereby
                        consents to ATP’s non-exclusive use of such live score data and each Tournament
                        shall not allow or authorize the dissemination, transmission, publication or release
                        from the grounds of the Tournament of any live match score or related statistical
                        data, including without limitation the live score data from the network, by a third party
                        until :30 seconds after the actual occurrence of the incident of match play or action
                        that leads to such live score update (e.g., a point being scored), such delay shall not
                        be applicable to the live audio and/ or visual broadcast or streaming by any method
                        or means (i.e., moving pictures and/or sound/audio reporting of the actual on-court
                        action) and purposes related to such broadcast, of any match (subject to “Exhibit C”
                        – Broadcast Standards set forth herein). Further, each Tournament shall notify ATP
                        in advance of any third party to whom the Tournament has granted access for the
                        purpose of accessing the live score data.
                        *Tournaments using an alternate venue for main draw matches due to weather or
                        other unforeseen circumstances are encouraged but not required to provide services
                        to support live scoring. Tournaments are not required to provide live scoring support
                        for qualifying matches played at an alternate venue.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>E. Live Streaming</Text>
                        {'\n\n'}
                        Each Challenger tournament shall be responsible for providing and bearing the cost
                        of a secure adequate office space within reasonable distance of the streamed competition courts. In addition, power, including but not limited to an uninterruptible power
                        supply (UPS), shall be made available at no cost to the streaming production partner
                        both in the office space and by the camera positions.

                        {'\n\n'}

                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule72', next: 'Rule74', nav: navigation }} />
        </>
    );
}


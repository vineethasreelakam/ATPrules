import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule74({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>6.10 Tournament Credentialing and Ticketing</Text>
                        {'\n\n'}

                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A. ATP Membership Card.</Text> A 2024 ATP Membership Card shall be honored at all ATP
                        Tour and ATP Challenger Tour events and will permit the holder entry to the tournament office (or such other location as directed by a Tournament or ATP) in order to
                        receive the appropriate credential.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B. General.</Text> The following general rules apply with respect to credentialing:
                        {'\n\n'}
                        1) Players must be accepted into the event to be eligible for a credential.
                        {'\n\n'}
                        2) Issued player credential badges shall not distinguish between qualifying players
                        and main draw players (for example: qualifying players should not be issued a “Q”
                        badge while main draw players are issued a “P” badge; all players must be issued
                        the same category/type of badge).
                        {'\n\n'}
                        3) Policies regarding access to practice facilities and locker room for players after
                        they have been eliminated from the event shall be applied equally to both qualifying and main draw players.
                        {'\n\n'}
                        4) Policies regarding access to amenities (food, transportation, etc.) for players after
                        they have been eliminated from the event shall be applied equally to both qualifying and main draw players.
                        {'\n\n'}
                        5) In all cases, priority shall be given to players still competing in the event with respect to access to facilities and amenities.
                        {'\n\n'}
                        6) Player Support Team members must be in the company of a player who is accepted into the event.
                        {'\n\n'}
                        7) ATP staff members and ATP Media staff members working on-site at an event
                        shall be provided with a credential with appropriate access upon proper application.
                        {'\n\n'}
                        8) All others must have applied in advance and been approved for a credential by
                        the tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>9) Special provisions for Combined Events.</Text>
                        {'\n\n'}
                        a) Tour Guests. One credential for each “official” guest of ATP, provided that
                        such requests are reasonable, and access is limited as appropriate for security.
                        {'\n\n'}
                        b) Tour Sponsor. One (1) credential for a “Tour” sponsor.
                        {'\n\n'}
                        c) Alumni. Tournaments may provide alumni players credentials at their discretion.
                        {'\n\n'}
                        d) Tournament Members. Each tournament shall provide ATP Tournament Directors with on-site access
                        {'\n\n'}

                        <Text style={RuleStyles.SubHeading2}>C. Applicability.</Text> Tournaments must ensure that they have one single accreditation system and policy in place to cover all third party credentials (including, without limitation, credentials for players, player support team members, ATP staff members, suppliers, contractors, media representatives (e.g. photographers, TV crew members,
                        journalists and commentators), Tournament employees and spectators provided with
                        accreditation).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D. Accreditation Policy.</Text> Tournaments must base their accreditation policy on the standard “ATP Accreditation Policy” as specified in “Exhibit AC” to create their “Tournament Accreditation Policy”.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>E. Application.</Text> All persons applying for credentials must have applied in advance and
                        been approved by the Tournament for a credential for the relevant Tournament. Once
                        approved, all persons must sign an “Accreditation Acceptance Form” as provided by
                        the tournament. Tournaments must ensure that the Accreditation Acceptance Form
                        is available in hard copy at the Tournament site, as well as online for those persons
                        applying for credentials through an online system.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>F. Proof of Identity.</Text> As part of the accreditation process, Tournaments must require
                        proof of identity for all persons prior to issuing credentials; this must be through photo
                        identification such as passport, national ID card or driving license and may be provided in hard copy at the Tournament site or via upload when completing the Accreditation Acceptance Form online.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>G. Tournament Credentials.</Text> All persons who have successfully applied for accreditation and have signed the Accreditation Acceptance Form shall be issued with a
                        physical credential pass by the Tournament. Tournaments must ensure that such
                        pass must include, without limitation: (i) photo identification (as per Section F above);
                        (ii) the name of the accreditee; (iii) a summary of the material points contained in
                        the Tournament Accreditation Policy (including, as a minimum and without limitation,
                        that, unless approved in advance in writing by the ATP, the accreditee may not: (a)
                        continually collect, disseminate, transmit, publish or release from the grounds of the
                        Tournament any match scores or related statistical data during match play (from
                        the commencement of a match through its conclusion) for any commercial, betting
                        or gambling purpose; and (b) film, photograph, broadcast, stream, publish, transmit
                        and/or otherwise offer to the public (or assist any third party in offering to the public),
                        on a live or on a delayed basis, in whole or in part, and whether on a free basis or
                        subject to payment, any sound recording, photograph, video footage, motion picture,
                        film and/or other audio-visual content captured by any means whatsoever inside the
                        Tournament site (except as is allowed in the Tournament Accreditation Policy)); (iv) a
                        web address where the Tournament Accreditation Policy can be found; (v) an Standardized Accreditation Policy Proposal acknowledgement agreeing to abide by the
                        rules of the Tennis Anti-Corruption Program and for players, the Tennis Anti-Doping Program (as amended from time to time); and (vi) an acknowledgement that the accreditation may be revoked at any time.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>H. Ticketing.</Text> Tournaments must take reasonable steps to enforce the material points
                        of the ATP Accreditation Policy as would apply to ticket holders. Tournaments must
                        ensure that appropriate wording is contained on all tickets provided to ticket holders
                        including, without limitation: (i) a summary, or clear notice directing to a webpage,
                        with the material points contained in the Tournament Accreditation Policy as they
                        apply to ticket holders (including, as a minimum and without limitation, that, unless
                        approved in advance in writing by the ATP, the ticket holder may not: (a) continually
                        collect, disseminate, transmit, publish or release from the grounds of the Tournament
                        any match scores or related statistical data during match play (from the commencement of a match through its conclusion) for any commercial, betting or gambling purpose; and (b) film, photograph, broadcast, stream, publish, transmit and/or otherwise
                        offer to the public (or assist any third party in offering to the public), on a live or on a
                        delayed basis, in whole or in part, and whether on a free basis or subject to payment,
                        any sound recording, photograph, video footage, motion picture, film and/or other
                        audio-visual content captured by any means whatsoever inside the Tournament site
                        (except as is allowed in the Tournament Accreditation Policy)); (ii) a web address
                        where the Tournament Accreditation Policy can be found; and (iii) a notice that the
                        continual use of laptop computers or other handheld electronic devices within the
                        spectator area of the Tournament match courts shall be prohibited.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>I. Laptops and Communication Devices.</Text>The continual use of laptop computers or
                        other handheld electronic devices within the confines (spectator area) of the tournament match courts shall be prohibited and each tournament shall take reasonable
                        steps to enforce such prohibition. The exception to this provision is properly credentialed media, tournament vendors and tournament staff when used in the performance of their duties.

                        {'\n\n'}

                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule73', next: 'Rule75', nav: navigation }} />
        </>
    );
}

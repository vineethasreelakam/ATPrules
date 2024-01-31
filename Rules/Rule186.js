import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule186({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT AA - Sample Basic Accreditation Policy Wording</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>1. SCOPE AND TERM OF ACCREDITATION
            </HighlightText>{'\n\n'}
            1.1.This accreditation policy (the Policy) shall be binding on any person (the Accreditee) who has applied for or been issued with a temporary or permanent
            accreditation(the Accreditation) by or on behalf of [insert name of Tournament
            owner] (the Accreditor) in respect of the [insert year] [insert Tournament name]
            (the Tournament) whether on his/his own account, on behalf of an employer, or
            on behalf of any person or company he/she is working with (in whatever form) in
            respect of the Tournament.
            {'\n\n'}
            1.2.With effect from the date of signature or online acceptance of this Policy, this
            Policy shall supersede and replace any prior agreement, understanding, arrangement, representation or document, whether written or oral, entered into between
            the Accreditor and the Accreditee with respect to the subject matter of this Policy.



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2. TERM
            </HighlightText>{'\n\n'}
            2.1.This Policy shall come into effect and be binding as between the Accreditor and
            Accreditee from the date of signature or online acceptance of this Policy by the
            Accreditee and shall terminate upon the conclusion of the Tournament in the relevant year (save that the Accreditee and the Accreditor agree that paragraphs
            3.1.3, 3.1.5, 3.1.11, 3.1.13, 3.1.21 (inclusive) and paragraphs 4, 5 and 6.4 shall
            survive expiry or termination of this Policy).
            {'\n\n'}
            2.2.The Accreditation provided to the Accreditee shall at all times remain the property
            of the Accreditor and be subject to the Accreditee complying with the terms of this
            Policy. The Accreditor may, at any time and in its sole discretion: (i) terminate this
            Policy; (ii) rescind any Accreditation provided to the Accreditee for the current
            year; (iii) reject any applications for future Accreditation; and/or (iv) eject the Accreditee from the Tournament site, and/or take legal action against the Accreditee
            for breach of this Policy.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>3. TERMS AND CONDITIONS
            </HighlightText>{'\n\n'}
            3.1.In consideration for the grant to the Accreditee of his/her Accreditation, the Accreditee hereby agrees, undertakes and/or acknowledges (as applicable) that:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>General
            </HighlightText>
            {'\n\n'}
            3.1.1.the Accreditation is strictly non-transferable and in particular the Accreditation
            may not be used as a prize or give-away or as part of any competition or promotion or other similar activity;
            {'\n\n'}
            3.1.2. the Accreditation must be worn correctly at all times (with any photo clearly
            visible – if applicable) and be visible and accessible to be scanned or otherwise
            checked prior to entry and exit from the Tournament site, and at relevant areas
            within the Tournament site, at all times;

            {'\n\n'}
            3.1.3. he/she shall not alter, edit or otherwise amend the Accreditation or make or
            take any copy of the Accreditation or provide any third party with the Accreditation, any photograph or copy of the Accreditation (whether directly or indirectly by
            way of social media for example);

            {'\n\n'}
            3.1.4. he/she shall abide by all instructions, orders and directions given to the Accreditee by the Accreditor or any Tournament official, employee or agent and if the
            Accreditee is at any time unsure whether to comply with such instruction, order or
            direction he/she must contact

            {'\n\n'}
            3.1.5. to the extent permitted by law, the Accreditee grants (free of charge) to the
            Accreditor and ATP Tour, Inc. (the ATP) the perpetual right to make and use,
            exhibit and reproduce worldwide at their discretion, the Accreditee’s name, voice,
            biographical material, likeness, image and/or any visual description of the Accreditee made during the Tournament for: (i) promotion and publicity of the Tournament; (ii) information and news in relation to the Tournament; i) audio visual
            coverage and broadcast of the Tournament; and (iv) archive purposes. The Accreditee acknowledges and agrees that such use of his/her name, voice, biographical material, image and/or any visual depiction by the Accreditor or the
            ATP may be affected by way of any technologies, distribution techniques or media
            and without compensation;

            {'\n\n'}
            3.1.6.he/she shall conduct himself/herself and act generally in a manner that will not:
            (i) bring the Tournament, the ATP (or any of its subsidiaries), the Accreditor or the
            game of tennis into disrepute; or (ii) otherwise inhibit the enjoyment of any other
            party in attendance at the Tournament.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Ground Regulations/Access
            </HighlightText>


            {'\n\n'}
            3.1.7. he/she shall comply with the Tournament Ground Regulations which can be
            found at [insert web address] and as attached as Appendix 1 to this Policy;

            {'\n\n'}
            3.1.8. he/she shall directly or indirectly access only those areas of the Tournament
            site specifically allowed by the Accreditation and necessary for the Accreditee to
            perform activities directly related to the purpose for which the Accreditation as
            granted;

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Players
            </HighlightText>


            {'\n\n'}
            3.1.9. he/she shall not film any player anywhere within the Tournament site without
            having obtained the player’s prior written permission, unless the filming is being
            done for noncommercial purposes and is not for more than :60 seconds;

            {'\n\n'}
            3.1.10. players and their registered coaches may film a players’ practice session
            within the Tournament site provided that such film may only be used for their own
            personal use and shall not be used for any commercial purposes.

            {'\n\n'}
            3.1.11. he/she shall not expressly or impliedly associate any player with any products,
            services or brands (including, but not limited to, the products, services or brands
            of the Accreditee’s employer);

            {'\n\n'}
            3.1.12. players’ press conferences shall be held in press conference rooms or other
            designated areas, and only authorized accredited media representatives may access the press conference;

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Photographs/Filming (General)
            </HighlightText>


            {'\n\n'}
            3.1.13. other than where approved in advance in writing by the Accreditor or as set
            out in paragraphs 3.1.14.8, 3.1.15 and 3.1.16 below, the Accreditee is strictly forbidden to film, broadcast, stream, publish, transmit and/or otherwise offer to the
            public (or assist any third party in offering to the public), on a live or on a delayed
            basis, in whole or in part, and whether on a free basis or subject to payment,
            any sound recording, video footage, motion picture, film and/or other audio-visual
            content captured by any means whatsoever inside the Tournament site (including, without limitation, the competition courts, the practice courts and inside any
            restricted areas including locker rooms and areas reserved for players) regardless 
            of the means of transmission or media whether now known or in the future
            (all of such rights, being Broadcast Rights), other than to the extent expressly
            permitted under this Policy;

            {'\n\n'}
            3.1.14. subject to paragraphs 3.1.15 and 3.1.16 below, the Accreditee is in particular
            prohibited from:
            {'\n\n'}
            3.1.14.1.filming Tournament matches, regardless of the category (e.g. singles, doubles, junior, wheelchair tournament, legends trophy) or courts (including competition courts and practice courts);
            {'\n\n'}
            3.1.14.2.undertaking or facilitating live or delayed broadcast coverage (including, by
            way of example only, live broadcasting/streaming through platforms such as Periscope or Meerkat) from any location within the Tournament site whatsoever;
            {'\n\n'}
            3.1.14.3.filming or producing studio or stand up footage within the Tournament site,
            whether by way of live or delayed broadcast;
            {'\n\n'}
            3.1.14.4.soliciting and/or filming personal interviews of players;
            {'\n\n'}
            3.1.14.5.selling footage filmed within the Tournament site;
            {'\n\n'}
            3.1.14.6.producing a magazine or specific program relating to the Tournament and
            containing footage filmed at the Tournament;
            {'\n\n'}
            3.1.14.7.associating himself/herself with any footage filmed within the Tournament
            site or with the trademarks, logos or distinctive signs of the Tournament and/or
            the Accreditor;
            {'\n\n'}
            3.1.14.8.publishing any photographs or footage captured anywhere on the Tournament site during the Tournament for any purpose, except that this shall not prevent the Accreditee from publishing still photographs or video that is less than :60
            seconds from the Tournament on his/her personal social media account(s) for
            solely non-commercial purposes; and/or
            {'\n\n'}
            3.1.14.9. associating, directly or indirectly, all or part of photographs, footage or other
            audio-visual content captured within the Tournament site with any brand and/or
            name, whether commercial or not, especially as a part of a sponsorship;


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Official Broadcast Partners
            </HighlightText>

            {'\n\n'}
            3.1.15. if the Accreditee is working on behalf of a radio, TV or other media channel,
            network or platform which has acquired or is otherwise in bona fide possession
            of legally enforceable Broadcasting Rights to the Tournament (an Official Broadcast Partner), such Accreditee (an Official Broadcast Accreditee) shall be entitled
            to exercise the Broadcast Rights only to the extent permitted by, and strictly in
            accordance with, the terms of: (i) the relevant agreement between the owner/
            licensor of the relevant Broadcast Rights and the Official Broadcast Partner on
            whose behalf the Accreditee is working; and (ii) any other applicable documentation issued to the Accreditee by the Accreditor from time to time in relation to the
            exercise of those Broadcast Rights. In the event of any conflict or inconsistency
            between a term in the documentation referred to in (i) and a term of this Policy
            or the documentation referred to in (ii), the term in the documentation referred to
            n (i) shall prevail. Further, any such Accreditee agrees (x) not to onward supply,
            sublicense or otherwise make any scores or related statistical data from the Tournament available to any third party for use not related to the broadcast, and (y)
            to restrict their use of such scores and data to use on a contemporaneous basis
            within the live broadcast of any match, any other uses shall be subject to a delay
            of at least :30 seconds;

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>News Agencies
            </HighlightText>

            {'\n\n'}
            3.1.16. if the Accreditee is not an Official Broadcast Accreditee but has been granted
            Accreditation by the Accreditor to in order to provide news, information, data and/
            or reporting in relation to the Tournament, (any such Accreditee, an Official News
            Access Accreditee), he/she shall be entitled to exercise the Broadcast Rights
            only to the extent permitted by, and strictly in accordance with, the terms of: (i)
            the relevant mandatory news access regulations (or similar), if any, prescribed
            under applicable law in the territory in which the Tournament takes place; and ii)
            any other applicable documentation issued to the Accreditee by the Accreditor
            from time to time in relation to any such news access or reporting. In the event of
            any conflict or inconsistency between a term in the regulations referred to in (i)
            and a term of this Policy or the documentation referred to in (ii), the term in the
            regulations referred to in (i) shall prevail. Further, such Accreditee agrees that
            he/she will not disseminate, transmit, publish or release from the grounds of the
            Tournament any live match score or related live statistical data until :30 seconds
            after the actual occurrence of the incident of match play or action that leads to
            such live score update (e.g., a point be scored), and that such use shall be solely
            for news reporting and editorial use;

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Assignment of copyright
            </HighlightText>

            {'\n\n'}
            3.1.17. if and to the extent that the Accreditee obtains, acquires or exercises any
            Broadcast Rights other than as expressly permitted pursuant to paragraphs
            3.1.15 or 3.1.16 above, the Accreditee hereby assigns all such Broadcasting ights (including all intellectual property rights therein), by way of a present assignment of past, present and future rights, to the Accreditor (or its nominee). The Accreditee shall do and execute all such further acts and things as are reasonably
            required to give full effect to the assignment referred to in this paragraph 3.1.17.
            All goodwill arising from the Accreditee’s use or exploitation of any such Broadcast Rights shall accrue to the Accreditor (or its nominee);


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Tournament Website
            </HighlightText>

            {'\n\n'}
            3.1.18. no text, photo and/or audio or video content whatsoever from the Tournament
            official website ([insert website]) or from the Accreditor’s or the ATP’s official websites shall be reproduced and/or represented, in any manner whatsoever, on any
            other media without the prior written consent of the Accreditor and/or the ATP;

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Data
            </HighlightText>

            {'\n\n'}
            3.1.19. unless approved in advance in writing by the Accreditor or ATP, the Accreditee may not continually collect, disseminate, transmit, publish or release from
            the rounds of the Tournament any match scores or related statistical data (the
            Statistical Data), during match play (from the commencement of a match through
            its conclusion) for any commercial, betting or gambling purpose. In particular he/
            she shall not use any communication device (including without limitation a mobile
            telephone, tablet or laptop) to transmit Statistical Data to a third party in connection with the placing of a bet or for any improper, corrupt, fraudulent or otherwise
            unlawful purpose whatsoever. As between the parties, the Accreditor remains the
            sole and exclusive owner of the Statistical Data;


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Gambling
            </HighlightText>

            {'\n\n'}
            3.1.20. he/she shall not engage, whether directly or through an intermediary and
            regardless of the method (including, without limitation, by way of using online
            communication techniques) in any form of gambling or betting activity whatsoever
            including private gambling or between physical persons in connection with the
            Tournament. Further, the Accreditee shall not communicate to any third party any
            privileged information within the scope of his or her function and unknown to the
            public in connection with the Tournament, nor shall the Accreditee communicate
            to any third party any privileged information acquired within the scope of his or her
            Accreditation and unknown to the public in connection with the Tournament; and
            {'\n\n'}
            3.1.21. without prejudice to paragraph 3.1.20 above, he/she shall comply with the
            terms of the Tennis Anti-Corruption Program (available for download at 
              <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itia.tennis/tacp/rules');
            }}>
            https://www.itia.tennis/tacp/rules.
          </HighlightText>


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>4. DATA PROTECTION
            </HighlightText>{'\n\n'}
            4.1.The Accreditor may use the Accreditee’s personal details (including his/her photograph) for the purposes of: assessing a request for Accreditation, administration,
            marketing and/or vetting/security checking. The Accreditor may also disclose the
            Accreditee’s personal details to its service providers and agents for these purposes and to the ATP/other tournament owners where the Accreditor reasonably
            believes that the Accreditee poses a risk in relation to the security, staging or
            commercial rights of other tournaments.
            {'\n\n'}
            4.2.The Accreditor shall comply with applicable laws when processing the Accreditee’s personal details as described in paragraph 4.1 above.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>5. INDEMNITY AND LIMITATION OF LIABILITY
            </HighlightText>{'\n\n'}
            5.1.The Accreditee hereby indemnifies and holds harmless the Accreditor and ATP
            against any direct loss or damage to the Accreditor or ATP or their employees,
            officers or agents or arising out of any dispute, proceedings, claim suit or other action brought against the Accreditor or ATP or their employees, officers or agents
            by any third party resulting from or in any way connected with (i) negligence or
            misconduct of the Accreditee at the Tournament site; or (ii) a breach of this Policy
            by the Accreditee.
            {'\n\n'}
            5.2. PROVIDED THAT NOTHING IN THIS POLICY SHALL EXCLUDE OR LIMIT EITHER PARTY’S LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY
            THE NEGLIGENCE OF THAT PARTY OR THEIR AGENTS OR EMPLOYEES,
            OR IN RESPECT OF ANY OTHER LIABILITY THAT CANNOT BE LIMITED OR
            EXCLUDED BY APPLICABLE LAW, NEITHER THE ACCREDITOR NOR ATP
            SHALL HAVE ANY LIABILITY TO THE ACCREDITEE EITHER IN CONTRACT,
            TORT (INCLUDING NEGLIGENCE OR BREACH OF DUTY) OR OTHERWISE
            FOR ANY LOSS, DAMAGE OR EXPENSE SUFFERED BY THE ACCREDITEE,
            HOWSOEVER CAUSED.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>6. MISCELLANEOUS
            </HighlightText>{'\n\n'}
            6.1. The Accreditor nominates [insert job title] as the representative (the Tournament
            Representative) to whom the Accreditee should direct any queries or complaints
            in connection with his/her Accreditation or the terms of this Policy.
            {'\n\n'}
            6.2. The Accreditor may alter this Policy at any time in its sole discretion if it reasonably believes that such changes are necessary to protect the legitimate interests
            of the Accreditor and/or the Tournament, and the Accreditee must comply with the
            Policy as amended.
            {'\n\n'}
            6.3. If any paragraph in this Policy is rendered void or unenforceable by any court
            or authority of competent jurisdiction then all other provisions of this Policy will
            remain in full force and effect and will not in any way be impaired provided the
            parties agree a replacement provision which is as close as is legally permissible
            to the provision found invalid or unenforceable.
            {'\n\n'}
            6.4. The Accreditation and this Policy shall be governed by the laws of [insert jurisdiction] and the Accreditor and Accreditee agree that the courts of [insert jurisdiction] shall have exclusive jurisdiction over any dispute (whether contractual or
            non-contractual) in relation to this Accreditation Policy.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule185', next: 'Rule187', nav: navigation }} />
    </>
  );
}


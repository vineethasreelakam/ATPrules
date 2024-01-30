import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule170({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT O - Consent and Agreement Form
            </HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>
            PLAYER’S CONSENT AND AGREEMENT TO THE ATP OFFICIAL RULEBOOK,
            INCLUDING THE TENNIS ANTI-CORRUPTION PROGRAM & TENNIS ANTI-DOPING PROGRAMME
            </HighlightText>{'\n\n'}

            I, the undersigned player, acknowledge, consent and agree as follows:
            {'\n\n'}1. I will comply with and be bound by all of the provisions of the 2023 ATP OFFICIAL
            RULEBOOK, ATP Tour, Inc.’s (“ATP”) By-Lawss, resolutions and regulations  (the “ATP Rules”), including,
            but not limited to, all amendments to the ATP Rules. I have received and had an opportunity to review the ATP Rules and any and all Covid-19 policies and protocols, as
            amended from time to time.
            {'\n\n'}
            2. I am bound by and will comply with the Tennis Anti-Corruption Program (the “TACP”),
            a copy of which can be found at the following website: 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itia.tennis/tacp/');
            }}>
            https://www.itia.tennis/tacp/
          </HighlightText>
            rules. I acknowledge that I have had the opportunity to review the TACP and that I
            understand, accept and agree not to violate any of the provisions therein. I acknowledge that I have a duty to inform my Related Persons (as defined in the TACP) of the
            provisions of the TACP and to instruct them to comply with the TACP. I accept that I
            must complete any Tennis Integrity education programs mandated by the ATP Tour.
            The TACP prohibits certain conduct by me and my Related Persons, including, but
            not limited to, (i) wagering on the outcome or any other aspect of any tennis match,
            (ii) contriving or attempting to contrive the outcome or any other aspect of any tennis
            match, (iii) receiving or providing consideration in exchange for Inside Information
            (as defined in the TACP), (iv) facilitating, encouraging or promoting any other person
            to wager on the outcome or any other aspect of a tennis match, (v) associating with
            any Related Person who is serving any period of ineligibility under the TACP or has
            been convicted or found in criminal, disciplinary or professional proceedings to have
            engaged in conduct which would have constituted a Corruption Offense if the TACP
            had applied to them and (vi) failing to report any knowledge I may have regarding
            potential violations of the TACP. I acknowledge that I have an obligation to report any
            approaches that I may receive and any known or suspected offenses by others as
            soon as possible. I accept that I must cooperate fully with investigations and shall
            not tamper with or destroy any evidence. I hereby submit to the jurisdiction and authority of the International Tennis Integrity Agency (the “ITIA”) to manage, administer
            and enforce the TACP and to the jurisdiction and authority of the ITIA, Anti-Corruption Hearing Officer (“AHO”) and the Court of Arbitration for Sport (“CAS”), as applicable, to determine any charges brought under the TACP. I acknowledge that the
            TACP contains an agreement to arbitrate disputes in accordance with the process
            described in the TACP and I am bound by the TACP until the earlier of (i) the date of
            my valid retirement in accordance with the requirements of the Tennis Anti-Doping Programme
            (the “TADP”), a copy of which is available online at 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itia.tennis/tadp/rules/');
            }}>
            https://www.itia.tennis/tadp/rules/
          </HighlightText>, or (ii) two years
            after the last Event (as defined in the TACP) in which I enter or participate, unless,
            at either such time, (a) I am subject to a period of ineligibility under either the TACP
            or TADP (in which case I will cease to be bound by the TADP upon the conclusion of
            my period of ineligibility), or (b) I am aware that I am the subject of an investigation
            by the ITIA or law enforcement (in which case I will cease to be bound by the TACP
            when such investigation is closed, or after 10 years, whichever is earlier). Nothing in
            this paragraph 2 shall modify or limit the full text of the TACP.
            {'\n\n'}
            3. The ITIA may conduct anti-doping testing at ATP sanctioned events under the “TADP”. 
            ATP will honor and enforce any penalties or sanctions
            against me resulting from the TADP. The TADP shall apply to and be binding upon me
            and shall govern participation in the events specified at Article B of the TADP, which
            includes all ATP-sanctioned events (including Challenger events). I hereby submit to
            the jurisdiction and authority of the ITIA to manage, administer and enforce the TADP
            on behalf of the ITF and to the jurisdiction and authority of the Anti-Doping Tribunal
            and the CAS to determine any charges brought under the TADP. I also hereby give
            my explicit consent to (i) ATP receiving and processing my Anti-Doping results from
            the ITIA at ATP events as well as other Covered Events (as defined in the TADP),
            including information relating to any alleged Whereabouts Failures (i.e. Missed Tests
            and/or Filing Failures) on my part, as well as notice of any charges brought against
            me under the TADP and (ii) keeping ATP informed thereafter of the progress of such
            alleged Whereabouts Failures/charges in accordance with the TADP.
            {'\n\n'}
            4. Any dispute arising out of any decision made by the Anti-Doping Tribunal, or any dispute arising under or in connection with the TADP, after exhaustion of the TADP’s Anti-Doping Tribunal process and any other proceedings expressly provided for in the
            TADP, shall be submitted exclusively to the Appeals Arbitration Division of the CAS
            for final and binding arbitration in accordance with Article O of the TADP and CAS’s
            Code of Sports-Related Arbitration. The decisions of CAS shall be final, non-reviewable, non-appealable and enforceable. I agree that I will not bring any claim, arbitration, lawsuit or litigation in any other court or tribunal. The time limit for any submission to CAS shall be 21 days after the decision of the Anti-Doping Tribunal has been
            communicated to me.
            {'\n\n'}
            5. Any dispute between or among the ATP and me arising out of the application of any
            provision of the 2024 ATP Official Rulebook which is not finally resolved by applicable provisions of such Rulebook shall be submitted exclusively to CAS for final and
            binding arbitration in accordance with CAS’s Code of Sports-Related Arbitration. The
            decision of CAS in that arbitration shall be final, non-reviewable and enforceable. No
            claim, arbitration, lawsuit or litigation concerning the dispute shall be brought in any
            other court or tribunal. Any request for CAS arbitration shall be filed with CAS within
            21 days of any action by the ATP which is the subject of the dispute. In the event any
            provision of this clause is determined invalid or unenforceable, the remaining provisions shall not be affected. This clause shall not fail because any part of the rule is
            held invalid.
            {'\n\n'}
            6. I acknowledge the Notices of Privacy Practices and Consent is set forth in the ATP Rulebook and
            is available online at 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.atppz.com');
            }}>
            https://www.atppz.com.
          </HighlightText> I understand that the GDPR (General
            Data Protection Regulation) Privacy Notice is available at this same site under PlayerZone Terms & Conditions. I also acknowledge that I have reviewed these notices
            and agree to the terms and conditions contained therein.
            {'\n\n'}
            7. For ATP Division I and Division II player members: I acknowledge that at least every
            two years a completed Competition Clearance form signed by a physician licensed to
            practice medicine in the jurisdiction where such physician practices medicine, must
            be submitted before players are permitted to participate in ATP activities. I also acknowledge that should my physician not deem me fit to participate, and I choose to
            do so regardless, I will not be permitted to compete without signing the Release and
            Hold Harmless form. Finally, I explicitly consent to the release of my medical information included on the Competition Clearance form to authorized medical personnel
            at any ATP tournament that I participate in, which may be required for treatment
            purposes.
            {'\n\n'}
            8. I have read and understand the foregoing Player’s Consent and Agreement.
            {'\n\n\n'}
            _____{'\n\n'}
            Date 
            {'\n\n\n'}
            ___________________________________________{'\n\n'}
            Print Player’s Name (Last Name, First Name)
            {'\n\n\n'}
            ______________________________________{'\n\n'}
            Player’s Date of Birth(Day/Month/year)
            {'\n\n\n'}
            ______________________{'\n\n'}
            Player’s Signature and
            {'\n\n\n'}
            ______________{'\n\n'}
            Place of Birth 
            {'\n\n\n'}
            ________________________________________________________{'\n\n'}
            If player is a minor, signature of player’s parent or guardian
            {'\n\n\n'}
            ____________________{'\n\n'}
            Player’s Nationality


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule169', next: 'Rule171', nav: navigation }} />
    </>
  );
}


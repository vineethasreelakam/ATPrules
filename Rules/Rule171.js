import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule171({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT P - Privacy Notice (“HIPAA”)</HighlightText>{'\n\n'}

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>NOTICE OF PRIVACY PRACTICES AND CONSENT
            </HighlightText>{'\n\n'}
            This notice is being provided in connection with the Health Insurance Portability and
            Accountability Act of 1996 (“HIPAA”). Although ATP is not bound to comply with all
            aspects of HIPAA, ATP is committed to making sure that players are aware of the
            manner in which personal health information will be used, maintained and released.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>THIS NOTICE DESCRIBES HOW THE ATP TOUR (the “ATP”; FOR THE PURPOSES OF THIS EXHIBIT, INCLUDED IN THE DEFINITION OF “ATP” SHALL BE
              NON-ATP EMPLOYED STAFF AT CHALLENGER TOURNAMENTS WHO PROVIDE MEDICAL ASSISTANCE) MAY USE AND DISCLOSE YOUR MEDICAL INFORMATION, AND HOW YOU CAN GAIN ACCESS TO YOUR PERSONAL AND
              PROTECTED HEALTH INFORMATION (“PHI”); PLEASE REVIEW CAREFULLY.
            </HighlightText>
            {'\n\n'}
            ATP is committed to maintaining the confidentiality of your PHI, in accordance with
            applicable federal and applicable state privacy laws, as well as our own company
            privacy policies. This notice describes how we may use and disclose your PHI and
            explains your legal rights regarding PHI. This notice also describes certain risks associated with Players and others utilizing a Physiotherapist Treatment Room or other
            facility.
            {'\n\n'}
            When we use the term “PHI”, we mean information about you, including any health
            care payment, medical or demographic information that can reasonably be used to
            identify you and relates to your medical history. This includes, but is not limited to,
            injuries, illnesses, sickness, diseases, health care providers and laboratory and other
            test results.
            {'\n\n'}
            This notice is effective on January 1, 2010. The terms of this notice apply to all
            records containing your PHI that are created or retained by ATP. We reserve the
            right to revise or amend this notice. Any revision or amendment to this notice will be
            effective for all of your records that ATP has created or maintained in the past, and for
            any of your records that ATP may create or maintain in the future. You will find this
            and any revised or amended notices posted at ATP’s offices in Ponte Vedra Beach,
            Florida in a visible location, as well as on the PlayerZone website located at: 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://atp-playerzone.com');
            }}>
            https://atp-playerzone.com.
          </HighlightText>.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>HOW ATP MAY USE AND DISCLOSE YOUR PHI
            </HighlightText>{'\n\n'}
            In order to provide you with certain health and other services, we may create or
            receive PHI relating to you. In coordinating and administering services, we may use
            and disclose your PHI in various ways, including:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Treatment.
            </HighlightText>
            ATP may use your PHI to assist in your treatment by providers. For
            example, a Physiotherapist or the medical director of a tournament may access
            your PHI to understand and better treat your condition.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) Health Care Operations.
            </HighlightText>
            We may use and disclose PHI during the course of
            managing our business. For example, we may use your PHI to internally evaluate the quality of care that you received, to conduct internal company audits, for
            data information systems management, to conduct company cost management
            assessments, for evaluations and for general business planning purposes.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3) Payment.
            </HighlightText>
            Your PHI may be requested by a third party for billing purposes, with
            regard to services provided to you, to conduct utilization and medical necessity
            reviews, to coordinate care with your health care insurance company or carrier, to
            calculate cost sharing amounts, and to respond to audits or reviews by federal or
            state government agencies, insurance companies or carriers.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>4) Qualified Service Organizations and Business Associates.
            </HighlightText>
            We may share
            your PHI with qualified service organizations, national federations or business
            associates who provide services to ATP. In each case, these entities will have
            agreements with us to safeguard and keep confidential your PHI. We will only
            share the minimum PHI necessary for these entities to carry out their duties to
            ATP.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>5) Patient Information Purposes.
            </HighlightText>
            We may use your PHI to inform you about potential treatment alternatives or options, and to notify you of other health related
            benefits and services that may be of interest to you.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>6) Disclosures in Accordance with Florida Law, Required by Law and Governing Law.
            </HighlightText> {'\n\n'}
            By signing the Player’s Consent and Agreement to the ATP Official Rulebook, you
            are agreeing that, for purposes of medical consent and release of records, the
            laws of the State of Florida shall govern. Certain disclosures of your PHI may
            be required by laws. These include, but are not limited to: (A) reports to federal, state or local law enforcement in connection with crime or threats to commit
            crime; (B) reports to appropriate state agencies in connection with reporting
            child abuse or neglect; (C) reports in connection with medical emergencies, for
            the purpose of treating conditions which pose an immediate threat to the health
            of any individual or which require immediate medical attention; (D) reports in
            response to court orders, if you are involved in a lawsuit or similar proceeding,
            or in response to a subpoena if you give us written authorization to release your
            PHI; (E) reports in connection with public health risk management (e.g., reporting
            of adverse drug reactions, notifications for recalled products or devices, required
            reports for certain diseases).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>7) Serious Threats to Health or Safety.
            </HighlightText>
            We may disclose your PHI as necessary
            to reduce or prevent a serious threat to your health and safety, or the health and
            safety of another individual or the public. Under these circumstances, we will
            only make disclosures to such persons or organizations able to help prevent such
            threat.
            {'\n\n'}
            In all other situations, we will ask for your written authorization before disclosing
            your PHI. If you have given us an authorization, you may revoke it at any time, if
            we have not already acted on it. Revocation of consent is effective upon receipt
            of written notice, mailed via certified mail, return receipt requested and addressed
            to Chief Player Officer, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida
            32082, with a copy (sent certified mail, return receipt requested) to Jeffrey T. Reel,
            201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082. Revocation of this
            consent does not affect the validity of any prior use or disclosure of your PHI. You
            further understand that your right to revoke this authorization shall not serve to
            excuse any failure by you to comply with the provisions of the ATP Tour Official
            Rule Book covering your affiliation with ATP Tour, or any other rule or agreement
            that may govern the terms and condition of your participation in tournaments.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>YOUR LEGAL RIGHTS REGARDING PHI
            </HighlightText>{'\n\n'}
            HIPAA gives you certain rights with respect to your PHI. You have the right to:
            {'\n\n'}• Ask us to communicate with you in a certain way or at a certain location. We
            will accommodate reasonable requests.
            {'\n\n'}• Request that we restrict the way we use or disclose your PHI in connection
            with health care operations, payment and treatment. We will consider, but
            may not agree to, such requests. You also have the right to ask us to restrict
            disclosures to persons involved in your health care.
            {'\n\n'}• Obtain a copy of certain portions of your PHI, subject to applicable federal,
            state and local laws, rules and regulations. We may ask you to make your
            request in writing, may charge a reasonable fee for producing and mailing the
            copies, and in certain cases may deny the request.
            {'\n\n'}• Amend PHI that you believe to be incorrect. Your request must be in writing
            and must include the reason for the request. If we deny the request, you may
            file a written statement of disagreement.
            {'\n\n'}• Have us provide you with a list of certain disclosures of PHI we have made
            about you. Your request must be in writing. If you request such an accounting more than once in a twelve month period, we may charge a reasonable
            fee.
            {'\n\n'}• File a complaint if you think your privacy rights have been violated. You will
            not be penalized or retaliated against for filing a complaint. To file a complaint, you must contact the United States Department of Health and Human
            Services, Office of Civil Rights. For more information about how to file a
            complaint, please visit www.hhs.gov/ocr/hipaa.
            {'\n\n'}
            By signing the Player’s Consent and Agreement to the ATP Official Rulebook, you
            acknowledge that any health information that is disclosed in accordance with this
            authorization form might be redisclosed by the recipient of that information and
            may no longer be protected by federal health care privacy laws and rules.
            {'\n\n'}
            If you have questions regarding your PHI, confidentiality of your PHI, or this Notice, please contact:
            {'\n\n'}
            {'\n\n'}ATP Tour, Inc.
            {'\n\n'}Attn: <HighlightText style={RuleStyles.SubHeading3}>Player Relations Department</HighlightText>
            {'\n\n'}201 ATP Tour Blvd
            {'\n\n'}Ponte Vedra Beach, Florida 32082


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>GENERAL PRIVACY CONSIDERATIONS RELATING TO PHYSIOTHERAPIST
              ROOMS AND TREATMENT ROOMS
            </HighlightText>
            {'\n\n'}
            This notice also is intended to remind you that the ATP Physiotherapist and/or
            Treatment Rooms provided at the Tournaments are not designated as a private
            area. Should you choose to receive treatment there, or discuss confidential information (health or otherwise), it is possible that this information may be overheard
            by individuals that have no obligation to refrain from further disclosure of such
            information. Access to these areas is not limited to ATP personnel. Players are
            reminded of their duties and obligations arising from the ATP Rules and Anti-Coercion
            Policy. The information discussed, as well as photographic images also
            may be intercepted by electronic surveillance devices including but not limited to
            digital and other cameras, video cameras, cellular telephones and personal data
            devices. Neither the Tournament nor ATP is responsible for the unauthorized
            capturing of any PHI or other personal/confidential information or the subsequent
            disclosure of the same.
            {'\n\n'}
            Should you wish to ensure the confidential nature of health or other information,
            we encourage you to receive treatment in a secure environment of your choosing.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule170', next: 'Rule172', nav: navigation }} />
    </>
  );
}


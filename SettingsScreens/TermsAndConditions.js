import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from '../Rules/Styles';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function TermsAndConditions({ navigation }) {
   return (
      <View style={RuleStyles.Layout}>
         <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'termsAndConditions.jpg'}}/>
            <Text style={RuleStyles.MainHeading}>Terms & Conditions</Text>

            <Text style={RuleStyles.Description}>
               1. WELCOME:
               {'\n\n'}
               Welcome to ATPTour.com and its affiliated sites and mobile products and services, an official Web site of the ATP. Please read this Terms of Use Agreement (the "Agreement") carefully before using ATPTour.com, its affiliated sites and mobile products and services (the "Web site"). By visiting or using the Web site or any mobile product or service in any way, or linking to the Web site, you are entering into an agreement with ATP Tour, Inc. ("ATP"), owners of ATPTour.com its affiliated sites and mobile products and services. At all times, you are bound by the then-current version of this Agreement and all applicable laws. ATP highly recommends that you review this Agreement from time to time to ensure that you are familiar with the most recent version as ATP reserves the right to change these terms and conditions at any time without notice.
               {'\n\n'}
               2. ENTIRE AGREEMENT
               {'\n\n'}
               This Agreement constitutes the entire agreement between you and ATP concerning their subject matter. If any portion of this Agreement is deemed unlawful, invalid, or unenforceable, then such portion of this Agreement shall be deemed severed herefrom and shall not affect the validity or enforceability of the remainder of this Agreement
               {'\n\n'}
               ATP may, from time to time, offer you the opportunity to use interactive services on the Website, such as the ability to vote in connection with certain events, enter into contests or sweepstakes (the "Contest(s)"), and/or participate in Fantasy Tennis or ATP Tour Draw Challenge or sign up for official newsletters. By participating in any such Contests, events, or programs, you agree to any and all special terms set forth in connection with any such Contest, event, or program, as well as the terms in this Agreement.
               {'\n\n'}
               3. COPYRIGHTS AND TRADEMARKS
               {'\n\n'}
               A. Ownership
               {'\n\n'}
               ATP owns or has the right to use all of the data, information, text, images, streaming media, video, sounds, icons, scores, rankings, statistics, and other content contained on this Website (the "Content"), and the copyrights and other intellectual property rights therein, unless otherwise noted. You may print one copy of the Content of this Website for your own personal, non-commercial use, but you may not make more than one copy of such Content, modify it in any way, distribute or transmit it to any other person or company, frame or otherwise display any of the Content of this Website on your own or any other Website, or make any other use of it. Such copying, modification, distribution, transmission, display, or use is a breach of this Agreement and infringes ATP's copyrights, copyrights licensed to ATP, rights of privacy and publicity of ATP members and others, trademark rights, and/or other rights owned or licensed by ATP.
               {'\n\n'}
               Trademarks and service marks owned by ATP include but are not limited to: ATP, the Tennis Player Design, ATP TOUR, ATPTour.com, Nitto ATP Finals, Next Gen ATP Finals, ATP Tour Masters 1000, ATP Tour 500, ATP Tour 250, ATP Challenger Tour, and Challenger Tour Shield Designs.
               B. Notice and Procedure for Making Claims of Copyright Infringement
               {'\n\n'}
               It is ATP's policy to respect the intellectual property rights of others. In connection with this policy, ATP will not knowingly post content of any kind that infringes the copyright rights of others. As such, and pursuant to the Digital Millennium Copyright Act (17 U.S.C.512(c)(2)), ATP has designated an agent to receive notifications of alleged copyright infringement on the Website. If you believe that your work has been used in a way that constitutes copyright infringement, please send (a) a description of the work; (b) a description of the location of the work on the Website, including the URL; (c) your name, address, and telephone number, (d) a signed statement by you that you have a good faith belief that the disputed use is unauthorized under current law; and (e) a signed statement by you that you believe, under penalty of perjury, that your allegations are true and that you are the copyright owner or acting on behalf of the copyright owner. Please submit these materials to Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               4. LINKS
               {'\n\n'}
               A. Links to the Website
               {'\n\n'}
               You may create a link from your website to the home page of the Website, without prior written permission, through a plain-text link, namely www.ATPTour.com. ATP asks that you notify us in advance of your intention to do so by contacting Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082. You may not use any trademarks or service marks as links to the Website from other websites, or as machine-readable search terms such as metatags. ATP reserves the right to revoke your permission to link to the Website at its absolute and sole discretion. Any third-party website that links to the Website: (a) shall not create a frame around content of the Website; (b) shall not replicate the content of the Website; (c) shall not state or imply that ATP sponsors or endorses the third-party website; (d) shall not libel or present false or misleading information of any kind, including information about ATP or its members or players; and (e) shall not contain any content that may be construed as illegal, immoral, offensive, controversial, or inappropriate to ATP. Deep linking to internal pages of the Website is expressly prohibited. The posting or creation of any link to the Website signifies that you have read and agree to abide by this Agreement. If you believe that any website that links to the Website contains illegal, offensive, or inappropriate content, please contact Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               B. Links from the Website
               {'\n\n'}
               Links to other websites or Internet locations from the Website have been provided for your convenience only. ATP does not endorse, sponsor, or approve of any content of such websites or locations. ATP has no control over any of the websites or Internet locations that you may access through the Website, and is not responsible for the content or accuracy of the content of any such website or location. If you access any other website or Internet location through the Website, you do so at your own risk. If you believe that any link on the Website leads to an illegal, offensive, or inappropriate website, please contact Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               5. MESSAGE FEATURES
               {'\n\n'}
               For your convenience, information, and entertainment, the Website may offer you the opportunity to send messages or postings in connection with various features of the Website, including electronic mail, chats with special guests, Facebook comments, and forums to communicate with other users ("Message Feature(s)"). The Message Features are for your own person, non-commercial use only. In order to participate in any Message Feature, you may be required to provide accurate and complete Personal Information, which shall be collected pursuant to the [Privacy Policy] of the Website. If you are under the age of 16, please see our Children's Privacy section found in the [Privacy Policy].
               {'\n\n'}
               You must use Message Features in a responsible manner. You must not transmit any message ("Message") in connection with any Message Feature that, in ATP's sole discretion: (a) restricts or inhibits any other user from using and enjoying the Website; (b) is unlawful, threatening, abusive, bigoted, hateful, libelous, defamatory, obscene, vulgar, offensive, pornographic, profane, sexually explicit, or indecent; (c) constitutes, advocates, or encourages conduct that would constitute or give rise to a criminal offense, civil liability, or other violation of any local, state, national, or international law; (d) violates, plagiarizes, or infringes the rights of third parties including, without limitation, copyright, trademark, patent, rights of privacy or publicity, or any other proprietary right; (e) contains a virus or other harmful component; (f) contains any information, software, or other material of a commercial nature; (g) contains advertising, promotions, or commercial solicitations of any kind; (h) constitutes or contains false or misleading indications of origin or statements of fact; (i) constitutes or contains spam; or (j) contains material irrelevant to the subject matter of the Message Feature.
               {'\n\n'}
               ATP shall have the right, but not the obligation, in its sole discretion to review, edit, or delete any Message transmitted in any Message Feature that: (a) violates any term of this Agreement; or (b) is otherwise illegal, offensive, or inappropriate. Upon such violation, ATP shall have the sole discretion to terminate your access to the Website. ATP will fully cooperate with any law enforcement authorities or court orders requesting or directing ATP to disclose Personal Information of anyone who submits a Message that violates the foregoing terms in accordance with the [Privacy Policy] of the Website.
               {'\n\n'}
               Although ATP may from time to time monitor or review Messages submitted in discussions, chats, postings, transmissions, bulletin boards, and the like on the Website, ATP is under no obligation to do so and assumes no responsibility or liability arising from the content of any Message nor for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, danger, or inaccuracy contained therein. Display of any Message in any Message Feature does not constitute approval or endorsement by ATP. If you believe that any posting to the Website is illegal, offensive, or inappropriate, please contact Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               Messages submitted to the Website by electronic mail or otherwise, including any data, questions, comments, suggestions, information, images, or the like are, and will be treated as, non-confidential and nonproprietary. By submitting a Message to the Website and/or using a Message Feature, you acknowledge that any information disclosed by you therein (a) may be used by any third party, including ATP; (b) is not confidential and may be read or intercepted by others; (c) creates no confidential, fiduciary, contractually implied or other relationship between you and ATP other than pursuant to this Agreement; and (d) may be used or reposted by ATP on any and all ATP official social media channels (including but not limited to Facebook, Twitter, Instagram, YouTube, Snapchat, etc.)".
               {'\n\n'}
               6. UNSOLICITED SUBMISSIONS
               {'\n\n'}
               While we are always pleased to hear from tennis fans and welcome your suggestions and comments, we cannot consider unsolicited submissions. PLEASE DO NOT SUBMIT UNSOLICITED MATERIALS OF ANY KIND TO ATP.
               {'\n\n'}
               If you choose to submit any information of any kind to the Website (including creative ideas, inventions, concepts, or materials, such text, photographs, or drawings) you represent, warrant, and agree that you have the unhindered right to do so, that such information does not infringe the copyright, trademark, patent, trade secret, right of privacy or publicity, or other intellectual property or proprietary rights of any other person or entity, that such information is not confidential or proprietary to you or any other person or entity, that such information does not injure any other person or entity, and that ATP may use, copy, distribute, modify, display, disclose, obtain intellectual property protection in its own name for, or otherwise use such invention or information (and any ideas embodied therein), and may manufacture, use, and sell products, methods, and processes made therefrom, without restriction, in any way it chooses anywhere in the world, free of charge to ATP and with or without acknowledgment of authorship or source, at ATP's sole discretion. ATP shall not be liable for any compensation, royalties, license fees, claims, or damages resulting from any use of any such information, and you agree to defend and hold ATP harmless with respect to any such compensation, royalties, license fees, claims, or damages, including attorneys' fees.
               {'\n\n'}
               7. PROHIBITED USES
               {'\n\n'}
               You may use the Website and/or Content solely for your own individual non-commercial, entertainment and informational purposes. Any other use, including for any commercial, gambling or wagering purposes, is strictly prohibited without ATP's express prior written permission. Systematic retrieval of data or other Content from the Website, including but not limited to scores, statistics, and/or rankings, whether to create or compile, directly or indirectly, a collection, compilation, database, or directory, is prohibited absent prior express written permission from ATP.
               {'\n\n'}
               You also agree not to access and/or use the Website for any purpose not expressly authorized by the Agreement and/or to transmit, post, or distribute to the Website content that:
               {'\n\n'}
               (a) constitutes an advertisement or solicitation of business of any kind, including but not limited to spam, chain letters, or pyramid schemes;
               {'\n\n'}
               (b) contains or constitutes software, computer programs, or routines of any kind, including but not limited to viruses, bots, worms, or spiders;
               {'\n\n'}
               (c) collects information about others, including but not limited to users' e-mail addresses;
               {'\n\n'}
               (d) imposes an unreasonable load on the Website's infrastructure; and/or
               {'\n\n'}
               (e) reverse engineers or decompiles the software comprising the Website.
               {'\n\n'}
               8. ATP SHOP
               {'\n\n'}
               The ATP Shop and other links on the Website allow you to order merchandise from independent merchandise vendors, (the "Vendor(s)"). By placing an order from any Vendor, you acknowledge that the Vendor is exclusively responsible for the fulfillment and shipment of all merchandise ordered. You further agree that all orders you place with such Vendor are subject to the terms and conditions that may be posted on the Vendors' websites. You further agree that by placing an order with any Vendor through the Website, you agree to pay all amounts payable for such an order, including taxes and shipping and handling expenses. Questions regarding any Vendor should be directed to the contact information provided on the Vendor's website.
               {'\n\n'}
               9. GAMING
               {'\n\n'}
               For your entertainment, the website may offer you the opportunity to participate in interactive games. Your participation in any game is subject to the rules posted on the website, [e.g., http://example.atptour.com]. Games on the website may use cookies to authenticate users on the website. If you are blocking cookies with your browser's privacy settings, then you will not be able to access the site and play the game. Please see our Cookies section found in the Privacy Policy for further information. Questions regarding gaming on the website should be directed to Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               10. REGISTRATION
               {'\n\n'}
               For your entertainment, the Website offers you the opportunity to register to receive newsletters and other communications from the ATP.
               {'\n\n'}
               You can change your preferences or unsubscribe to ATP communications at any time by using the instructions included at the bottom of every email.
               {'\n\n'}
               ATP is not responsible for information not transmitted due to ISP blocks and other internet-related deliverability reasons.
               {'\n\n'}
               11. CONTESTS AND GIVE-AWAYS
               {'\n\n'}
               The following terms apply to all ATP contests and give-aways on ATP official channels, including official ATP pages on social networks, unless noted otherwise.
               {'\n\n'}
               11.1 To win any prize or give-away, you must be 21 years of age or older, meet all of the eligibility requirements, and agree to these Terms and Conditions that applies to any contest or give-away and acknowledge our Privacy Policy.
               {'\n\n'}
               11.2 Eligibility to win any prizes is subject to paragraphs 11.4, 11.5 and 11.6 below. For games of skill, such as the ATP Trivia Challenge, residents of all countries are eligible to win prizes, provided any winner is otherwise eligible pursuant to these Terms and Conditions. For random drawings, eligibility is open only to those currently residing in the following countries: Germany, the United States (except the states of Florida and New York), the United Kingdom, France, Italy, Spain, Canada (except the province of Quebec), South Africa, Australia (except the states of New South Wales, South Australia and Victoria), Brazil, Japan, India, Switzerland, Netherlands, Croatia, Austria, Chile, China, Czech Republic, Portugal, Thailand, and Mexico.
               {'\n\n'}
               11.3 No purchase is necessary to participate. Contest and give-ways are void where prohibited.
               {'\n\n'}
               11.4 Only one entry per person will be counted for any Contest or give-away. ATP reserves the right to change, modify, or end a Contest or give-away if it appears someone is attempting to send multiple and/or automated entries or otherwise interfere with a Contest or give-away. The submission of more than one entry automatically disqualifies the person submitting multiple entries from a Contest or give-away.
               {'\n\n'}
               11.5 Players can only qualify for swing prizes once per season, In the event that a player wins more than one swing during the season, the prize will go to the next highest ranked player in a swing. Players can only qualify for weekly prizes once per swing. In the event that a player wins more than one week during a particular swing, the prize will go to the next highest ranked player in a week.
               {'\n\n'}
               11.6 Employees of ATP Tour, Inc., and ATP tournaments (including any of their respective affiliates or subsidiaries), their family members, and those living in the same household as any such employees are not eligible to submit an entry or win any prize. In addition, all ATP players, their family members and coaches and agents are not eligible to submit an entry or win any prize.
               {'\n\n'}
               11.7 Entries become property of ATP Tour, Inc. and will not be returned. The submission of any entry into a Contest or give-away shall constitute the express agreement of the person submitting such entry to the terms and conditions of the Contest or give-away and any determinations made by ATP Tour, Inc. or other company connected to a Contest or give-away. In addition, any eligible Contestant who may be eligible to win a prize must comply with the affidavit as described below, non-compliance with the terms and conditions of such paragraph will constitute a forfeiture of any prize without compensation and without recourse.
               {'\n\n'}
               11.8 A representative of ATP will contact the winners by e-mail within 30 business days of the conclusion of a Contest or give-away. Before sending any prize, ATP will send each winner an affidavit and release of liability and publicity, which the winner must sign and return within 5 days of receipt. If the winner fails to return the signed affidavit within 5 days of receipt, ATP will disqualify him or her and select an alternate winner, if applicable.
               {'\n\n'}
               11.9 ATP Tour, Inc. shall have no liability in connection with the awarding or use of any prizes or give-aways other than upon receipt within the specified time frame of the winners' affidavits of eligibility and release, to send the prizes to the winners at the address listed in the winner's registration.
               {'\n\n'}
               11.10 Each winner must execute an affidavit of eligibility and release, including the grant to ATP Tour, Inc., and its designees, of the right to use the winner's name and likeness in advertising and otherwise, except where prohibited by law.
               {'\n\n'}
               11.11 Each winner is responsible for any taxes that may be due as a result of winning a prize.
               {'\n\n'}
               11.12 Should there be a dispute over the identity of a Contestant, it shall be resolved in favor of the holder of the e-mail account used to enter the Contest or give-away. If any winner provides incorrect information that precludes delivery of the prizes, such winner forfeits any prize that he or she may have been eligible to win.
               {'\n\n'}
               11.13 Any decisions of ATP Tour, Inc. regarding winners shall be final and binding.
               {'\n\n'}
               11.14 ATP reserves the right to cancel any Contest or giveaways for any reason ATP deems necessary. ATP may change any terms and conditions applicable to any Contest or give-away in its sole discretion at any time.
               {'\n\n'}
               ATP Tour, Inc. shall not be responsible and shall have no liability for lost, misdirected, or late entries; or for (i) electronic transmission errors, (ii) theft, destruction, alteration, or unauthorized access of or to entries, (iii) technical problems, malfunctions, or errors in the operation of any hardware or software required to transmit entries or operate any contest or giveaways as planned (including computer viruses or bugs, tampering, unauthorized intervention, fraud, traffic congestion on the Internet or at any website, any combination of the foregoing, or any other causes beyond the control of ATP Tour, Inc). If any of the foregoing occurs, ATP Tour, Inc. reserves the right in its sole discretion to take any one or more of these steps: disqualify any individual who tampers with the entry or voting process; cancel, modify, delay, or suspend a contest or give-away. CAUTION: any attempt by anyone to deliberately damage any website or undermine the legitimate operation of a contest or give-away is a violation of criminal and civil laws for which ATP Tour, Inc. reserves the right to seek damages from such person to the fullest extent of the law.
               {'\n\n'}
               12. DISCLAIMER OF WARRANTIES
               {'\n\n'}
               ALL CONTENT OF THIS WEBSITE, INCLUDING ANY SOFTWARE, IS PROVIDED "AS IS" AND WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, EITHER EXPRESSED OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, ATP DISCLAIMS ALL WARRANTIES AND REPRESENTATIONS, EXPRESSED OR IMPLIED, RELATING TO SUCH CONTENT, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES AND REPRESENTATIONS OF NONINFRINGEMENT OF THIRD-PARTY INTELLECTUAL-PROPERTY RIGHTS, TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND QUIET ENJOYMENT. ALTHOUGH ATP WISHES THE CONTENT OF THIS WEBSITE TO BE ACCURATE, COMPLETE, AND CURRENT, ATP DOES NOT WARRANT OR REPRESENT THAT ANY CONTENT OF THIS WEBSITE (INCLUDING ANY SOFTWARE) OR ANY DATA ON THIS WEBSITE IS ACCURATE, ERROR-FREE, COMPLETE, OR CURRENT, THAT USE OF SUCH CONTENT OR DATA WILL BE UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS WEBSITE, ITS CONTENT OR DATA, AND/OR THE SERVERS ON WHICH THE WEBSITE AND CONTENT ARE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MOREOVER, ATP DISCLAIMS ANY OBLIGATION TO MAINTAIN THIS WEBSITE OR KEEP IT OPERATIONAL. APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO THESE EXCLUSIONS MAY NOT APPLY TO YOU IN WHOLE OR IN PART.
               {'\n\n'}
               13. LIMITATION OF LIABILITY
               {'\n\n'}
               UNDER NO CIRCUMSTANCES WILL ATP BE LIABLE TO ANY PERSON, BUSINESS, OR ENTITY FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR OTHER DAMAGES OR LOSSES BASED ON OR CAUSED BY ANY USE OF THIS WEBSITE OR ANY OTHER WEBSITE TO WHICH THIS SITE IS LINKED, THE CONTENT OF THIS OR OTHER WEBSITES, OR ANY VIRUSES OR OTHER HARMFUL COMPONENTS DERIVED FROM ANY SUCH WEBSITE, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, REVENUE, OR USE, BUSINESS INTERRUPTION, OR LOSS OF COMPUTER PROGRAMS, DATA, OR INFORMATION, EVEN IF ATP HAS BEEN SPECIFICALLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF CERTAIN LIABILITIES, SO THESE EXCLUSIONS MAY NOT APPLY TO YOU IN WHOLE OR IN PART.
               {'\n\n'}
               14. TERMINATION OF SERVICE
               {'\n\n'}
               ATP reserves the right to change or discontinue at any time, without notice, any Message Features, contests, content, materials, equipment, specifications, models, products, programs, or services described on the Website, or the availability thereof. Products, methods, and processes described on the Website may be covered by U.S. or foreign patents and/or other intellectual property rights. ATP also reserves the right, in its sole discretion, to terminate this Agreement and your access to all or part of the Website, with or without notice to you.
               {'\n\n'}
               Your obligations under these Terms and Conditions shall continue for as long as you access or use this Website or use or maintain any of the content of the Website or copies thereof. You may terminate your obligations at any time by discontinuing your use of the Website and by destroying all content obtained from it, and all copies thereof.
               {'\n\n'}
               15. EXPORT CONTROL
               {'\n\n'}
               Software and other content made available on this Website may be subject to United States export control laws. No software or other content from this site may be downloaded or otherwise exported (i) into (or to a national or resident of) Cuba, Iraq, Libya, North Korea, Iran, Syria, or any other country to which the U.S. has embargoed goods; or (ii) to anyone on the U.S. Treasury Department's list of Specially Designated Nationals or the U.S. Commerce Department's Table of Deny Orders. By downloading or using any software made available on this Website, you represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list.
               {'\n\n'}
               16. JURISDICTION AND CHOICE OF LAW
               {'\n\n'}
               This Website is hosted on servers located in the State of Florida, United States of America. All disputes arising out of or relating to this Agreement or this Website shall be resolved in the state or federal courts seated in Jacksonville, Florida, United States of America. All such disputes shall be governed by the laws of the State of Florida and applicable federal laws, without giving effect to conflicts of laws principles. You agree that the state and federal courts seated in Jacksonville, Florida have personal and subject matter jurisdiction over any dispute arising from your use of the Website.
               {'\n\n'}
               ATP controls and operates this Website from the State of Florida, United States of America and makes no representation or warranty that the content of this Website is appropriate, lawful, or available for use in other geographic locations. If you use the Website from other locations, you are responsible for compliance with all applicable local laws.
               {'\n\n'}
               17. INDEMNIFICATION
               {'\n\n'}
               You agree to indemnify and hold harmless ATP and its parents, subsidiaries, affiliates, directors, officers, employees, agents, licensors, partners, co-branders, members, representatives, successors, and/or assigns, from and against all liabilities, claims, expenses, or demands, including reasonable attorneys' fees and amounts paid to settle claims, made by any third-party due to or arising from the content you submit, post, or transmit to or through the Website, your use of the Website, your violation of this Agreement, or your violation of any rights of another.
               {'\n\n'}
               18. NO WAIVER
               {'\n\n'}
               The failure of ATP to enforce any provision of this Agreement or to respond to a breach of this Agreement by you or other parties shall not in any way constitute a waiver of ATP's rights to subsequently enforce any provision of this Agreement against you or any other party.
               {'\n\n'}
               19. NOTICES
               {'\n\n'}
               ATP may give notices to users of the Website, at ATP's option, by posting a message on the Website, by e-mail, or by regular mail. Notices to ATP should be sent to Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               20. PRIVACY POLICY
               {'\n\n'}
               Personal Information about you is subject to our [Privacy Policy].
               {'\n\n'}
               21. VIOLATIONS
               {'\n\n'}
               Please report any violations of this Agreement to Jeffrey T. Reel, Vice President and General Counsel, 201 ATP Tour Boulevard, Ponte Vedra Beach, Florida 32082.
               {'\n\n'}
               These terms apply to the following websites:
               {'\n\n'}
               www.atptour.com
               www.nittoatpfinals.com
               www.nextgenatpfinals.com
               {'\n\n'}
               ©2021 ATP Tour, Inc. All Rights Reserved.
            </Text>


         </ScrollView>
      </View>
   );
}


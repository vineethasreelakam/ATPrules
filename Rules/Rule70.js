import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule70({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>6.06 Equipment & Supplies</HighlightText>
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A.Placement /Approval</HighlightText>
                        {'\n\n'}
                        {'\t\t'}The Supervisor must approve the placement of items or equipment on any court. The
                        Supervisor may remove or have removed any item (including advertising) that may
                        affect the safety of a player, official or ballperson.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}> B.Chairs</HighlightText>
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) Chair Umpire</HighlightText>
                        {'\n\n'}
                        {'\t\t\t'}a) The sitting platform of the chair for the Chair Umpire must be between six (6)
                        feet (1.83 m.) and eight (8) feet (2.44 m.) high. The seating area should be
                        approximately two (2) feet (.61 m.) wide. The chair shall be centered along
                        the extension of the net approximately three (3) feet (.914 m.) from the net
                        post if the court configuration will accommodate such placement.
                        {'\n\n'}
                        {'\t\t\t'}b) The Chair Umpire’s and on-court announcer’s, if any, microphone must have
                        an “on-off” switch.
                        {'\n\n'}
                        {'\t\t\t'}c) Umbrellas are required if the sun is a factor.
                        {'\n\n'}
                        {'\t\t\t'}d) Each chair must have a writing platform as specified in “Exhibit X” or as otherwise approved by ATP.
                        {'\n\n'}
                        {'\t\t\t'}e) At all outdoor events, the positioning of the umpire’s chair shall be on the
                        West side of the court on all courts except for competition court that had the
                        umpire’s chair on the East side of the court in 2000 due to infrastructure or
                        other agreed unusual requirements.
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>2) Line Umpire</HighlightText>
                        {'\n\n'}
                        {'\t\t\t'}a) Each tournament shall provide chairs for service and base Line Umpires located on an extension of their respective lines along the side fence not closer
                        than twelve (12) feet (3.66 m.) from the doubles sideline. Chairs for sideline
                        and center service Line Umpires should be located next to the back of the
                        court at least twenty-one (21) feet (6.40 m.) behind the baseline. Service and
                        baseline umpire chairs should not be elevated above the surface of the court.
                        The seating area must be a minimum of two (2) feet (.61 m.)
                        {'\n\n'}
                        {'\t\t\t'}b) In outdoor events whenever the sun is a factor, Line Umpire chairs shall be
                        positioned so that Line Umpires are not facing the sun unless otherwise approved by ATP. When the sun is not a factor, the chairs should be positioned
                        on the opposite side of the court from the Chair Umpire.
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>3) Net Judge</HighlightText>
                        {'\t\t\t'}a) A sponsorship box, which surrounds the net judge chair, may not extend past
                        the net post into the court.
                        {'\n\n'}
                        {'\t\t\t'}b) An approved electronic net device can replace the net judge.
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>4) Player</HighlightText>
                        {'\n\n'}
                        {'\t\t\t'}a) Each tournament shall provide chairs for the players located on each side
                        of the Chair Umpire. As a guide, the front portion of the player chair/bench
                        should be no closer to the court than the back support/leg of the umpire’s
                        chair.
                        {'\n\n'}
                        {'\t\t\t'}b) Umbrellas are required if the sun is a factor.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C.Measuring Devices </HighlightText>
                        {'\n\n'}
                        {'\t\t'}Each tournament shall provide a measuring stick, tape measure or other measuring
                        device for the measuring of the net height and location of the singles sticks.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>D.Net</HighlightText>
                        {'\n\n'}
                        {'\t\t'}1) The net band shall be cloth, canvas or vinyl, and the net shall extend to the
                        ground, unless otherwise approved by the on-site Supervisor.
                        {'\n\n'}
                        {'\t\t'}2) Each tournament shall have spare nets available.
                        {'\n\n'}
                        {'\t\t'}3) There can be no commercial or manufacturer identification on the net except as
                        approved by ATP.
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>Each ATP Tour tournament will be provided with Oficial ATP Tour nets for a minimum of four (4) years (number of nets provided will vary depending on tournament category). These nets should be used for the tournament matches and practice during the tournament week only. Each tournament is responsible for properly storing the Oficial ATP Tour nets. Should damage caused by misuse, poor maintenance or modification lead to the need to replace the net, the costs for the new net will be tournament responsibility.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>E. Net Posts and Net Post Signage.</HighlightText> The net posts shall conform to the specifications
                        in the
                        <HighlightText
                            style={RuleStyles.hyperlinkStyle}
                            onPress={() => {
                                Linking.openURL('https://www.itftennis.com/en/about-us/governance/rules-and-regulations/');
                            }}>
                            Rules of Tennis,
                        </HighlightText>
                        Rules of Tennis, unless otherwise approved by ATP. No signage of any type
                        may be placed on the net posts or net except as determined solely by ATP.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>F. Sawdust.</HighlightText> Each tournament shall provide sawdust for players on match and practice
                        courts.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>G.Scoreboards.</HighlightText> Each tournament must provide scoreboards for all courts to be placed
                        at the corner or side of the courts. Placement and color of scoreboards shall not
                        interfere with a player’s vision.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>H.Towels.</HighlightText> Each tournament shall provide towels for players on match and practice
                        courts and in the player’s locker room. Towels should be pre-washed and of sufficient
                        size for the intended use.
                        {'\n\n'}
                        {'\t\t'}Each court shall be equipped with bins/baskets for the players to leave their towels
                        during the match. This area should be located at the closest point for the player to be
                        able to use their towel without delay. The two designated areas are near the baseline umpire position or the corner of the courts. Each player/team should have their own
                        bin/basket where they can place their towels. There should be identification to clearly
                        show each player’s allocated bin/basket. There should be four (4) of these at each
                        end and each side of the court for a total of eight (8) on the court. This would be applicale for singles and doubles.
                        {'\n\n'}
                        {'\t'}<HighlightText style={RuleStyles.SubHeading2}>I. Beverages.</HighlightText>
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>1) Players.</HighlightText> Each tournament shall provide, in sealed containers, electrolyte replacement drinks, non-carbonated bottled water and other beverages for players
                        on-court, in the player’s lounges and on the practice courts.
                        {'\n\n'}
                        {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>2) Officials.</HighlightText> Each tournament shall provide bottled water and other beverages for
                        Officials on match courts and in the official’s off-court area.
                        {'\n\n'}

                        {'\n\n'}

                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule69', next: 'Rule71', nav: navigation }} />
        </>
    );
}


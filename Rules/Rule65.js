import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule65({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>VI. FACILITIES & ON-SITE CONDITIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>6.01 Courts</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>A.Court Surface</HighlightText>
            1) Outdoor court surfaces shall be classified as either a) hard; b) clay; or c) grass.
            {'\n\n'}
            2) Indoor surfaces shall be Indoor Hard and shall be constructed using an acrylic or
            similar surface paint applied on a hard or semi-hard base.
            {'\n\n'}
            3) Any court surface or change in a tournament’s court surface must be approved by
            ATP.
            {'\n\n'}
            4) A change in a tournament’s court surface will not be considered for approval
            without a written petition by the tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>B.Size, Position and Color of Courts</HighlightText>
            {'\n\n'}
            1) The Court shall conform to the specifications of the
            {/* <HighlightText
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.itftennis.com/media/2510/2020-rules-of-tennis-english.pdf');
              }}>
              Rules of Tennis.
            </HighlightText> */}
            ATP reserves
            the right to restrict the color of an indoor synthetic court as well as outdoor surfac-
            es. The lines of the court shall be white.
            {'\n\n'}
            2) Courts shall be laid out with the long axis north and south; however, geographic
            considerations may modify this orientation in order to minimize the adverse effect
            of serving into the sun.
            {'\n\n'}
            3) Courts shall not be less than 60 feet (18.29 m.) wide and 120 feet (36.58 m.) long.
            Center courts should be 66 feet (20.11 m.) x 132 feet (40.23 m.).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>C.Preparation of Surface</HighlightText>
            {'\n\n'}
            Clay, composition and loose surface courts shall be swept and lines cleaned before
            the start of all matches and properly maintained.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>D.Lighting</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>1) Minimum Number of Lighted Courts</HighlightText> – Outdoor events
            {'\n\n'}
            a) ATP Tour Masters 1000. Center Court, two (2) other show courts plus one (1)
            practice court.
            {'\n\n'}
            b) ATP Tour 500. Center Court plus one (1) other show court plus one (1) prac -
            tice court based on match schedule plan.
            {'\n\n'}
            c) ATP Tour 250. No minimum requirement.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2) Intensity</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) ATP Tour Tournaments.</HighlightText> Lighting must be evenly distributed on the court
            with a minimum recommended intensity of 100 foot-candles (1076 LUX), av -
            eraged over 15 readings on court.
            {'\n\n'}
            The recommended minimum lighting for televised events broadcasting in
            high definition is an average of 185 foot candles (approximately 2,000 lux).
            The light should be distributed across the court evenly with a consistent color
            temperature.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b) ATP Challenger Tour Tournaments. </HighlightText>Lighting must be evenly distributed on
            the court with a minimum recommended intensity of 70 foot-candles (750
            LUX), averaged over 15 readings on court
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>3) High/low ratio.</HighlightText> A ratio of the highest to lowest readings should be no greater than
            1x2.0 but the recommended ratio is 1x1.5.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>4) Light poles.</HighlightText> Light poles should be positioned so that they are evenly distributed
            around the court and it is recommended that light pole heights for other than show
            courts be no lower than forty (40) feet (12.19 m.) or no lower than other non-show
            court lights at the facility, e.g., if others are sixty (60) feet (18.29 m.), then new
            lights should be sixty (60) feet (18.29 m.) high.
            {'\n\n'}
            5) The Supervisor has the authority to suspend play on any court if the intensity of
            illumination, in his judgment, is insufficient for professional tennis.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>E. Back Fences, Back Walls, Banners, Signs and Seats</HighlightText>
            {'\n\n'}
            1) The back fences, back walls, net, net posts, Line Umpire boxes and other fixtures
            on a court shall not have any white, gray, yellow or other light colors that can
            interfere with the vision of the players as determined by the Supervisor.
            {'\n\n'}
            2) Background and lettering on rotating / LED banners should be consistent with the
            color of the back walls. If placed in front of back walls, rotating / LED banners can
            change between games. The ATP may approve the use of entertainment images
            / changes after every point if not disturbing play. If placed in front of side walls,
            rotating / LED banners can change only after the completion of any point in progress. ATP Tour Masters 1000 and ATP Tour 500 tournaments are recommended to install LED banners around their center court (both backwall and sidewall
            boards).
            {'\n\n'}
            Each ATP Tournament must comply with the following in order to use electronic
            perimeter boards (LEDs):
            {'\n\n'}
            a) The company and methodology used to produce electronically inserted signage must meet quality and technical standards and be pre-approved by ATP.
            {'\n\n'}
            b) Electronically inserted signage may be used across the whole court perimeter.
            {'\n\n'}
            c) Electronically inserted signage may be altered only between points and operator must insure through synchronisation with the umpire’s tablet and a view
            of the court, that such changes do not happen during play.
            d) Only static logos may be inserted during play. Animations or videos may be
            inserted between points so long as static logos are featured as soon as players are ready to serve/receive.
            {'\n\n'}
            e) Electronically inserted signage must be compliant with colour restrictions and
            brightness of the LED boards at the supervisor’s discretion.
            {'\n\n'}
            3) Spectator seating shall not have any white, gray, yellow or other light colors that
            can interfere with the vision of the players. Light colored seats shall be covered to
            comply with this rule
            <HighlightText style={RuleStyles.SubHeading2}>F. Ceiling Height.</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) ATP Events.</HighlightText> Indoor or covered show courts shall have a minimum top height of
            forty (40) feet (12.19 m.) except as otherwise approved by ATP.
            {'\n\n'}
            2) Challenger Events. Indoor or covered show courts shall have a minimum top
            height of thirty (30) feet (9.14 m. except as otherwise approved by ATP.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>G.On-Court Timing Devices</HighlightText>
            {'\n\n'}
            It is mandatory for all ATP Tour events (250-500-1000-United Cup-Nitto ATP Finals)
            to provide electronic timing devices (“shot clocks”) on each match court from the first
            day of qualifying through the finals.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Size.</HighlightText> Each shot clock panel’s minimum recommended size is 2 x 2 feet (0.6 x 0.6
            meters). The recommended maximum size is 3 x 2 feet (0.91 x 0.6 meters).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2) Number and Placement.</HighlightText> Each court shall have, as a minimum, two (2) timing
            panels. The placement of the shot clock panels shall be on the back wall or corner
            of the court and located one (1) each on the left far and right far side from the
            umpire chair. The placement shall ensure that the shot clock is in clear view of the
            players and the Chair Umpire.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3) Additional Positions.</HighlightText> Beyond the two (2) clock placements specified in 2)
            above, at the tournament’s option they may show the shot clock timing in other
            locations on or around the court and spectator areas.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>H. Electronic Review.</HighlightText>
            {'\n\n'}
            1) With the exception of clay court events, all ATP Tour tournaments are required to
            provide an ATP approved electronic review system.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>ATP approved electronic review systems is permitted for use at clay court
            events in 2023 on a voluntary basis.
            {'\n\n'}
            2) The system must, at a minimum, be available for use on the Stadium/Centre
            Court.
            {'\n\n'}
            3) Masters 1000 and ATP 500. The system must be available from the first day of
            qualifying* through the end of the event on all show courts.
            {'\n\n'}
            4) ATP 250 Events. If qualifying and main draw matches are scheduled on the same
            day and on the same court(s), then the electronic review must be used for all
            matches on that court(s).
            {'\n\n'}
            5) The tournament must comply with all of the provisions specified in “Exhibits T -
            and U”.
            {'\n\n'}
            *If qualifying matches are played on courts where an electronic review system is
            installed, then the electronic review system must be used from the first day of qualifying
            {'\n\n'}

          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule64', next: 'Rule66', nav: navigation }} />
    </>

  );
}


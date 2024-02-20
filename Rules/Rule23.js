import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule23({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>II. BRANDING</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>2.01 Identification - ATP Tour Tournaments</HighlightText>
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>A. </HighlightText>
            Each ATP Tour tournament shall identify itself clearly to the public as being part of
            the ATP Tour and shall cooperate fully with ATP in furthering public awareness of the
            ATP Tour. Participation in the ATP Tour shall not restrict the right of the tournament to
            obtain individual sponsorship or to retain its usual title.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>B.Trademark and Logo Identification. </HighlightText>
           Each ATP Tour tournament and ATP Challenger Tour
            tournament shall comply with the terms and conditions for the use of the ATP
            Tour and the ATP Challenger Tour trademark and logo outlined in “Exhibit B and G”.
            {'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>C. </HighlightText>
            Except as otherwise approved by ATP, each ATP Tour tournament shall comply with
            the ATP Tour Branding Application Requirements and shall assume all costs associated
            with such compliance. Branded nets and microphone flags will be provided,
            without cost, to all tournaments by ATP. ATP Tour and ATP Challenger Tour Application
            Requirements will be provided to each tournament by ATP.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>{'\t\t'}1) ATP Tour Official Tournament Stamps: Application
              Rules (“Exhibit A.01”)</HighlightText>{'\n\n'}

            {'\t\t\t\t'}All ATP Tour tournaments must display the appropriate ATP Tour Official Tournament Stamp
            (Masters 1000, 500, or 250) on all compulsory materials containing
            the tournament logo, as identified in the rules below. The tournament logo is the
            official identity of the tournament that includes the tournament name. When a text
            alternative to the tournament logo is used, it will be regarded as the tournament
            logo and the rules below will continue to apply. When a tournament logo is used
            repeatedly, or if both tournament logo and tournament title are used, application
            rules will apply to the largest tournament logo or title. For multiple page external
            documents, the ATP Tour Official Tournament Stamp must be applied on the front
            page in accordance with the rules below.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}a) Size Relationship</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Men only events (“Exhibit A.02”){'\n\n'}</HighlightText>
            The ATP Tour Official Tournament Stamp must be a minimum of 60% of
            the surface area of the tournament logo or tournament title, whichever is
            larger. This is subject to the minimum size rules for the ATP Tour Official
            Tournament Stamps below.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}ii) Combined events (“Exhibit A.03”){'\n\n'}</HighlightText>
            The ATP Tour Official Tournament Stamp should be presented with the
            WTA logo to communicate to audiences that the tournament is part of
            both tours.{'\n\n'}

            {'\t\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> • Size relationship: WTA logo</HighlightText>
            The ATP Tour Official Tournament Stamp must be the same visual
            size (cover the same surface area) as the WTA logo.{'\n\n'}

            {'\t\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> • Size Relationship: Tournament Logo</HighlightText>
            When the ATP Tour Official Tournament Stamp is used in conjunction
            with the WTA logo, the Official Stamp must be at a minimum equal
            size to the WTA logo or 30% of the surface area of the tournament
            logo, whichever is greater. This is subject to the minimum size rules
            for Official Stamps below.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}iii) Minimum Size</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}To ensure the ATP Tour Official Tournament Stamps are reproduced to
            best effect, the tournaments must adhere to the application rules stated
            in i) and ii) above or the following minimum sizes, whichever is greater:{'\n\n'}

            {'\t\t\t\t\t'}In quality print {'\t\t'} 9mm wide{'\n\n'}
            {'\t\t\t\t\t'}In newsprint  {'\t\t'}13mm wide{'\n\n'}
            {'\t\t\t\t\t'}On screen {'\t\t'}45 pixels wide{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}Size Requirements</HighlightText>{'\n\n'}
            Below are the minimum size requirements for using the ATP Tour Official
            Tournament Stamps on printed materials.{'\n\n'}

            {'\t\t\t\t\t\t'}A7 {'\t\t'} 9mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A6 {'\t\t'} 11mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A5 {'\t\t'} 14mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A4 {'\t\t'} 18mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A3 {'\t\t'} 26mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A2 {'\t\t'} 36mm wide{'\n\n'}
            {'\t\t\t\t\t\t'}A1 {'\t\t'} 51mm wide{'\n\n'}
            {'\n\n'}
            {'\t\t\t\t\t'}In non ‘A’ format communications the width of the ATP Tour Official Tournament Stamps
            should be no smaller than 6% of the longest side of the layout.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t'}b) Positioning (“Exhibit A.04”)</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Proximity to the tournament logo</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be placed closest to the
            tournament logo. No sponsor (with exception of the presenting sponsor),
            federation, series logo or any other logo may be closer to the tournament
            logo than the ATP Tour Official Tournament Stamp. Tournament logos
            cannot include any series name, federation name or any other name or
            brand mark.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}ii) Proximity to Sponsor logos</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamps are used as an endorsement
            of the quality and authenticity of a tournament and its inclusion within
            the ATP Tour. The ATP Tour Official Tournament Stamps should never be
            placed alongside sponsor logos or added to sponsor logo strips.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t'}c) Exclusion Area (“Exhibit A.05”)</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Exclusion Area 1: For graphics, images, text, WTA Tour and tournament logos
            (including ‘presented by’ sponsor)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}A minimum exclusion area equal to the height of the ATP type has been
            established around the ATP Tour Official Tournament Stamps. No graphics, images,
            text, WTA Tour or tournament logos must appear in this area.
            This exclusion area must be maintained.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}ii) Exclusion Area 2: For sponsor, federation and series logos</HighlightText>{'\n\n'}
            {'\t\t\t\t\t'}A minimum exclusion area equal to the width of two ATP Tour Official
            Tournament Stamps has been established around the ATP Tour Official
            Tournament Stamps. No sponsor, federation or series logos must appear
            in this area. This exclusion area must be maintained.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t'}d) Acceptable and unacceptable applications (“Exhibit A.06.1 to A.06.6”)</HighlightText>
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>{'\t\t'}2) ATP Tour Official Tournament Stamps : Compulsory Applications</HighlightText>{'\n\n'}
            {'\t\t\t\t'}An ATP Tour tournament must identify itself as an ATP Tour event by applying the
            appropriate ATP Tour Official Tournament Stamp, in accordance with the rules
            listed in section 1) above, in the following compulsory applications:{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t'}a) Promotion</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}i) Advertising</HighlightText>{'\n\n'}
            The ATP Tour Official Tournament Stamp must be applied to all tournament advertising
            communications{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}ii) Communication / Administration / Presentations</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be applied to all external tournament
            communications. To include but not limited to: stationery,
            memos, powerpoint presentations, documents and press releases. For
            multiple page documents, the ATP Tour Official Tournament Stamp needs
            only to be applied on the front page that contains tournament logo or
            tournament name.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}iii) Website / Other Digital Products (“Exhibit A.07”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be displayed on all pages
            of the official tournament website intended for large format display (tablet
            and desktop). The official stamp must be located within the upper 20% of
            the pages within the masthead area as the closest logo to the tournament
            logo. The ATP Tour Official Tournament Stamp should be no smaller than
            45 pixels wide for websites and other digital products intended for large
            format display. For mobile website display the official stamp must be used
            in a way that clearly identifies the particular tournament category.
            The official stamp must also be prominently displayed on all other digital
            products, including social media landing pages and apps for both mobile
            and tablet devices. Given the huge differences and ever evolving nature
            of these devices and applications, the official stamp must be used in a
            way that clearly identifies the tournament as an ATP Tour event and its
            respective category. See exhibit for examples.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}iv) Promotional Materials</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp needs only to be applied to the
            front page of all promotional communications. To include but not limited to: tournament
            programs, daily programs, leaflets, draw sheets, announcements and notices. For multiple
            page documents, the ATP Tour
            Official Tournament Stamp need only be applied on the front page that
            contains tournament logo or tournament name.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}v) ATP Advertisement.{'\n\n'}</HighlightText>
            {'\t\t\t\t\t\t'}Three (3) full pages of ATP Tour advertisements must be included in the
            tournament program with two (2) of the three (3) pages within the first
            third (1/3) of the tournament program to be used to promote and advertise the ATP Tour.
            (The three (3) pages are separate from any other
            page requirements specified in an ATP Sponsorship Agreement between
            a tournament and ATP).
            ATP will supply the advertisement and it shall be printed without expense
            to ATP. One (1) of the three (3) pages must be the doubles program ad as
            furnished by ATP.{'\n\n'}

            {'\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> Violations.</HighlightText>{'\n\n'}
            Violation of this section shall subject a tournament to a fine under the
            Tournament Standards Violations Fines Table (as defined in Section
            8.02).{'\n\n'}

            {'\t\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> Note:</HighlightText> 
            When possible, tournaments will be given notice of and the opportunity to correct
            any issues that would put them in a violation of the above
            rules.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}b) Compulsory Application: On-site</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Entrance</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be displayed at all entrances to the
            tournament that include the tournament logo or the tourna
            ment title, unless otherwise approved by ATP. To include but not limited
            to: car parks, main stadium, press, player and VIP entrances.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}ii) Scoreboards / Drawboards (“Exhibit A.08”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}If a scoreboard / drawboard includes the tournament logo or tournament
            title then the ATP Tour Official Tournament Stamp must be displayed.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} iii) Singles / Doubles Leader Boards (See ATP Tournament Guidelines)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The current standings of the 2024 Pepperstone ATP Rankings and 2024
            Pepperstone ATP Doubles Team Rankings must be placed prominently in
            the tournament stadium grounds. Artwork will be provided by ATP. Preferred position
            is in the main welcome area.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} iv) Vehicles</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be applied to any vehicle
            that displays the tournament logo or the tournament title.{'\n\n'}


            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t'} c) Compulsory Application: On-court</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} i) The Court</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}No commercial branding (sponsor, series or federation), court manufacturer branding
            or any other mark may be placed on the surface of the
            court, with the exception of “Host Locality” (See 3.b.) and the provisions
            outlined below unless otherwise approved by ATP.{'\n\n'}

            {'\t\t\t\t\t\t'}Provisions for commercial branding placement:{'\n\n'}
            {'\t\t\t\t\t\t'}1. ATP approval required for printing or insertion on the court surface of
            any sponsor logo at any tournament (ATP Tour Masters 1000, 500,
            250 and Challenger Tour).{'\n\n'}
            {'\t\t\t\t\t\t'}2. The sponsor logo can be inserted virtually (technology to be approved
            by ATP) or printed on the surface.{'\n\n'}
            {'\t\t\t\t\t\t'}3. Only 1 sponsor logo per court/tournament.{'\n\n'}
            {'\t\t\t\t\t\t'}4. Logo can be placed on all courts for all matches.{'\n\n'}
            {'\t\t\t\t\t\t'}5. On hard courts and grass courts, sponsor logo must be on the side of
            the double alley opposite to the chair umpire at the extension of the
            service line.{'\n\n'}
            {'\t\t\t\t\t\t'}6. On clay the sponsor logo will replace one of the host locality signs
            centered between the net and service line. Only in exceptional cases
            ATP may approve the sponsor logo to be placed below and in addition
            to the second host locality at the extension of the service line opposite
            to the Chair Umpire (in case by contract the tournament must display
            2 host locality logos).{'\n\n'}
            {'\t\t\t\t\t\t'}7. The sponsor logo area must not exceed 15,000 sq. cm (100cm high
            maximum, 300cm wide maximum and placed 40cm from the doubles
            line). It is recommended that the spnsor logo should be elongated for
            improved television visibility..{'\n\n'}
            {'\t\t\t\t\t\t'}8. The sponsor logo must be white.{'\n\n'}

            {'\t\t\t\t'}Host locality rules to remain status quo, except in case a host locality logo/
            emblem is used. In those cases, the same rules for the sponsor logo would
            apply.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}ii) Net (“Exhibit A.10”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}All ATP Tour tournaments must use the ATP Tour branded net on all
            courts, as determined and provided by ATP. Branded nets will be provided, without cost,
            to all tournaments by ATP. No commercial or other
            branding is allowed on the net or net posts other than that specified or
            otherwise approved solely by ATP.{'\n\n'}
            {'\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> 
            Violation of this requirement (c. ii.) shall subject a tournament to a
            fine under the Tournament Standards Violations Fines Table.</HighlightText>{'\n\n'}

            {'\t\t\t\t\t'}<HighlightText style={RuleStyles.SubHeading3}> 
            Note:</HighlightText> When possible, tournaments will be given notice of and the opportunity to correct
            any issues that would put them in a violation of the above
            rules.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t\t'}• Net Example 1: Net without sponsor branding</HighlightText>
            At tournaments where the ATP Tour premier partner branding is not
            used, ATP net signage shall be displayed on the left and right sides of
            the net on all match courts.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t\t'} • Net Example 2: Net with sponsor branding</HighlightText>
            At tournaments where the ATP Tour premier partner branding is used,
            net signage will be displayed on the left and right sides of the net on
            all match courts.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>  {'\t\t\t\t\t'}• Positioning of net signage (ATP or ATP Tour premier partner)</HighlightText>
            {'\t\t\t\t\t\t\t'}o For singles matches using a doubles net, net signage must be
            centered between the singles stick and the net post.{'\n\n'}
            {'\t\t\t\t\t\t\t'}o For singles nets, net signage must be centered between the singles sideline and the
            net post.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>  {'\t\t\t\t'}iii) ATP Supervisors / ATP Designated Chair Umpires</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The officiating uniform provided by ATP must be worn. No other commercial branding may
            be applied to the uniform without prior approval from
            ATP.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}iv) ATP Physiotherapists</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The uniform provided by ATP must be worn.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'} v) Chair Umpire Microphones</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}An ATP Tour microphone cover must be used on the Chair Umpire’s microphone. The appropriate
            ATP Tour Official Tournament Stamp must appear on all four sides. Microphone covers will
            be provided by ATP.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t\t'} Violations.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t\t'}Violation of this section (with the exception of c. ii) shall subject a tournament to a
            fine under the Tournament Standards Violations Fines Table.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t\t'}Note:</HighlightText>
             When possible, tournaments will be given notice of and the opportunity to correct
            any issues that would put them in a violation of the above
            rules.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}d) Compulsory Application: Media & Broadcast</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Media Backdrop (“Exhibit A.11”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be displayed on the official
            tournament media backdrop in such a way that it is clearly visible during
            the actual interview, in accordance with size, positioning and exclusion
            area rules.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} ii) Interview Room Microphone</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}An ATP Tour microphone cover must be used on all player interview microphones. The appropriate
            ATP Tour Official Tournament Stamp must
            appear on all four sides. Microphone covers will be provided by ATP.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}iii) Broadcast</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp must be displayed on all tournament broadcasts on any
            screen where the tournament logo is featured,
            unless otherwise approved by ATP.{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t\t'}Violations.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t\t'}Violation of this section shall subject a tournament to a fine under the
            Tournament Standards Violations Fines Table.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t\t'}Note: </HighlightText>
            When possible, tournaments will be given notice of and the opportunity to correct any
            issues that would put them in a violation of the above
            rules.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>{'\t\t'} 3) ATP Tour Branding: Optional Applications</HighlightText> {'\n\n'}
            {'\t\t\t\t'}An ATP Tour tournament may wish to further identify itself as an ATP Tour event
            by applying the appropriate ATP Tour Official Tournament Stamp in the following
            optional applications:{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}a) Court Surface Color (“Exhibit A.12”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t'}The preferred hard court surface color for all ATP Tour events is a match to
            PMS 281, to be used inside the court lines and a match to PMS Cyan, used
            outside the court lines.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}b) Court Host Locality (“Exhibit A.13.1 to A.13.2 ”)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t'}Tournaments may feature only the name of the country, city or region (example: Germany,
            Munich or Bavaria) on the court surface, subject to the placement and size restrictions
            set forth below. The preferred font is FS Industrie
            CD-Bold, however, tournaments may use the official logo or font of the host
            country, city or region; all versions other than the preferred font must receive
            the prior approval of ATP. The on court logo must be consistent with the texture and feel
            of the court surface so as not to affect play or be a safety hazard,
            as further described below.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} i) Host Locality Option 1</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t\t'}a) Clay Courts/Hard Courts:</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}Host country/city/region must be written in upper case if using the
            preferred font and all versions must be in white on one or both sides of
            the court and is to be centered between the net post and the service
            line for clay courts or at the extension of the service line for hard/grass
            courts.{'\n\n'}
            {'\t\t\t\t\t\t\t'}Host country/city/region can be displayed on one or two lines, facing
            the main camera.{'\n\n'}
            {'\t\t\t\t\t\t\t'}Maximum text height is 40cms (16”).{'\n\n'}
            {'\t\t\t\t\t\t\t'}Text should be placed 40cms (16”) from the doubles line.{'\n\n'}
            {'\t\t\t\t\t\t\t'}When text is displayed on two lines, they should together be centered
            between the net post and the service line.{'\n\n'}
            {'\t\t\t\t\t\t\t'}Line spacing should be 20cms (8”).{'\n\n'}
            {'\t\t\t\t\t\t\t'}Host country/city text should be elongated by 27% for improved television visibility.
            On a clay surface, the text must not protrude above the surface of the
            court.{'\n\n'}
            {'\t\t\t\t\t\t\t'}The material used for the name, on a hard court, must be of the same
            material and texture as the court surface to ensure safe footing for the
            players.{'\n\n'}
            {'\t\t\t\t\t\t\t'}If a host locality emblem/logo is used, the size and placement 
            restrictions applicable to the on court surface commercial branding will
            apply{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}ii) Host Locality Option 2 (Not for use on clay)</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}Host country/city/region must be written in upper case, if using the
            preferred font, in white on both sides of the court, centered between
            the singles sidelines.{'\n\n'}
            {'\t\t\t\t\t\t'}Host country/city/region must be displayed on one line, facing the
            main camera.{'\n\n'}
            {'\t\t\t\t\t\t'}Maximum text height is 50cms (20”).{'\n\n'}
            {'\t\t\t\t\t\t'}The closest distance permitted from the baseline is 300cms (9’ 10”).{'\n\n'}
            {'\t\t\t\t\t\t'}The material used for the name, on a hard court, must be of the same
            material and texture as the court surface to ensure safe footing for the
            players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}c) Court Backdrops – Color (“Exhibit A.14)</HighlightText>
            {'\n\n'}
            {'\t\t\t\t\t'}The preferred backdrop color for all ATP Tour tournaments is the closest
            match to PMS 281.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) Lettering.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}PMS Cool Grey 5 is the preferred color used for lettering. If the tournament selects
            color combinations other than those outlined in the previous
            sentence, then such color combinations may not include shades of white,
            yellow or other light colors and must be approved in advance by ATP{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'} ii) Rotating / LED Banners.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}Background and lettering on Rotating / LED Banners should be consistent with the color
            of the back walls.{'\n\n'}


            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}d) Court Backdrops</HighlightText> – ATP Tour Official Tournament Stamps (“Exhibit A.14”){'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t\t'}i) ATP Tour Men Only Events.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}The ATP Tour Official Tournament Stamp may be used in the left and right
            corners of the backdrop, facing the main camera. If a tournament decides
            to do so, the ATP Tour Official Tournament Stamp must be placed in a
            non obstructed position, away from ball persons, scoreboards or corner
            camera positions. The ATP Tour Official Tournament Stamp must be 40%
            of the height of the board, and placed in the top 60% of the board.{'\n\n'}
           
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t\t\t'}  ii) Combined Events.</HighlightText>{'\n\n'}
            {'\t\t\t\t\t\t'}If the WTA logo is placed on the back wall of the court then the ATP Tour
            Official Tournament Stamp must also be placed on the back wall in equal
            size and with equal television visibility.{'\n\n'}
            
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}e) On-court Ball Persons / Linesmen</HighlightText>{'\n\n'}
            {'\t\t\t\t\t'}If a tournament wishes to use the appropriate ATP Tour Official Tournament
            Stamp on the uniforms of ball persons or linesmen, the application of the ATP
            Tour Official Tournament Stamp must be approved in advance by ATP.{'\n\n'}
            
            <HighlightText style={RuleStyles.SubHeading3}> {'\t\t\t'}f) Merchandise</HighlightText>{'\n\n'}
            {'\t\t\t\t\t'}The ATP Tour Official Tournament Stamp may be used on tournament merchandise only
            in conjunction with the official Tournament logo, provided that
            such a use complies with the terms and conditions set forth in the ATP Rulebook.
            Specific application requirements will be provided to tournaments separately. Any and all applications must be approved by ATP’s retail merchandise consultant, at a minimum three (3) months in advance. No approval is
            required if merchandise is obtained from an approved ATP licensee.{'\n\n'}

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule22', next: 'Rule24', nav: navigation }} />
    </>
  );
}



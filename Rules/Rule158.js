import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule158({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT C - Broadcast Standards</HighlightText>{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>Broadcast Quality Standards</HighlightText>{'\n\n'}
            {'\t'}<HighlightText style={RuleStyles.SubHeading3}>1) Tape Delay/Repeats</HighlightText>{'\n\n'}
            {'\t\t'}Tournaments may not license to domestic or international broadcasters the right
            to telecast any portion of any match more than 48 hours after the termination of
            that match, and not more than (3) times within that 48-hour period, unless written
            authorization is obtained in advance from ATP. Each repeated telecast during the
            same day must be scheduled in a different part of the day in the same time zone.
            In the case of any telecast that is not live, tournaments must ensure that broadcasters
            provide a continuously visible on-screen legend stating “Tape Delay”.
            {'\n\n'}
            {'\t\t'}The requirement in the above paragraph shall not apply to telecasts under the
            following situations.
            {'\t\t'}a) Less than five (5) minutes of continuous action (including time between
            points) or less than three (3) minutes of match highlights on any news or
            highlights program.{'\n\n'}
            {'\t\t'}b) If because of rain delay or other unavoidable cessation in play, the scheduled
            broadcast match is canceled, the 48-hour tape delay restriction will be lifted.
            Any previously recorded match from the current year’s competition or last
            year’s competition can be repeated as “filler” programming.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading3}>2) Broadcaster’s Responsibilities</HighlightText>{'\n\n'}
            {'\t\t'}Each tournament must incorporate the following terms within their Broadcaster
            contracts.{'\n\n'}
            {'\t\t\t'}a) Host Broadcaster and all International Broadcasters must graphically identify
            the broadcast with the ATP’s logo at the commencement of each broadcast
            and during the broadcast no less than once an hour, each occurrence lasting
            no less than five (5) seconds, so as to make clear that the tournament being
            played is an official ATP event.{'\n\n'}
            {'\t\t\t'}b) Host Broadcaster must supply ATP, or ATP designee with one international
            dirty HDCam or DigiBeta of the final match or on a Portable Hard Drive with
            a USB 3.0 or FireWire 800 port (or a Beta SP if no other option). Recordings
            must be available to the ATP Senior Vice President - Rules & Competition
            on-site immediately after signing off the air or sent to an ATP office promptly
            after the tournament.{'\n\n'}
            {'\t\t\t'}c) With respect to any live match scores or related statistical data provided to
            broadcaster by ATP, or its designee, or collected by broadcaster, such broadcasters
            shall agree (i) not to onward supply, sublicense or otherwise make
            such scores and data available to any third party for use not related to the
            broadcast, and (ii) to restrict their use of such scores and data to use on a
            contemporaneous basis within their live broadcast of any match; any other
            use shall be subject to a delay of at least :30 seconds.{'\n\n'}
            {'\t\t\t'}d) All tournament agreements with Host Broadcasters must comply with, and
            shall be subject to, all ATP rules as amended from time to time.{'\n\n'}

            {'\t'}<HighlightText style={RuleStyles.SubHeading3}>3) Technical Requirements</HighlightText>{'\n\n'}
            {'\t\t'}Each tournament must incorporate the following technical terms within their Host
            Broadcaster contract. These conditions represent the minimum technical standards
            necessary to produce a quality broadcast.{'\n\n'}


            {'\t'}<HighlightText style={RuleStyles.SubHeading2}>Cameras</HighlightText>{'\n\n'}
            {'\t'}No less than five (5) cameras must be used on Center court (and no less than
            three (3) cameras on other courts)) for an acceptable tennis broadcast.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Camera 1: </HighlightText>{'\n\n'}
            {'\t\t'}Tripod camera high up in the stands (Center Court line).{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Camera 2: </HighlightText>{'\n\n'}
            {'\t\t'}Tripod camera approximately three (3) rows lower than Camera 1
            (Center Court line). (Example 1){'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Cameras 3 and 4: </HighlightText>{'\n\n'}
            {'\t\t'}Camera objective lens height approximately 1.00m
            (see attached charts for camera positions). Used for player close-ups for
            cutting into coverage and isos.{'\n\n'}
            {'\t\t'}These cameras may be positioned on the same or opposite side from
            where the players sit down.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Camera 5: </HighlightText>{'\n\n'}
            {'\t\t'}Low angle camera on court behind the baseline usually
            aligned with sideline (see attached chart, Camera Example 2){'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>{'\n\n'}
            {'\t\t'}Cameras 1, 2, 3,and 4 need to be on secure tripods with fully rotating
            camera mounts, and remotely controlled irises.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Lenses</HighlightText>{'\n\n'}
            {'\t\t'}Lenses for Camera 1 should be 18:1. Lenses for Cameras 2, 3, and 4
            should be 50:1.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Microphones</HighlightText>{'\n\n'}
            {'\t\t'}1) Four (4) corner court microphones must be positioned in the corners
            of the court and adjacent to Cameras 3 and 4.{'\n\n'}
            {'\t\t'}2) At least one (1) microphone must be placed for purposes of picking
            up sound from the crowd.{'\n\n'}
            {'\t\t'}3) One (1) microphone must be placed on the umpire’s chair.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Center Court Masters 1000 Tournaments: </HighlightText>{'\n\n'}
            {'\t\t'}ATP Masters 1000 tournament shall provide
            a fully cabled site and infrastructure for aerial camera
            system on center court.{'\n\n'}

            {'\t\t'}<HighlightText style={RuleStyles.SubHeading3}>Television Regulation Regarding Same Day
              Exclusivity</HighlightText>{'\n\n'}
              {'\t\t'}No tournament Class member shall be permitted to telecast or grant any
            telecaster the right to telecast, in any country in the territory of Europe,
            all or any portion of any tennis match on the same day as a tennis match
            from any ATP event that is being telecast in such country by a telecaster to which
            ATP has granted telecast rights, unless (x) such tournament
            Class member (i) is obligated to grant such rights pursuant to a binding
            agreement entered into prior to September 4, 1994, and furnished to the
            General Counsel of ATP pursuant to the ATP Board’s resolution of September 4, 1994,
            or (ii) has received the written permission of the ATP
            CEO, or (y) the telecast right granted by the tournament Class member is
            to a host broadcaster whose television signal is carried only in the country
            in which that member’s tournament is conducted, subject to such reasonable “spillage”
            into other countries as may be approved by the ATP CEO;
            provided, however, that the foregoing shall not limit the right of any tournament
            Class member to permit the telecast of up to three (3) minutes in
            the aggregate of any match in respect of any local, regional, national or
            international news or sports news programming.
            {'\n\n'}
          </HighlightText>

          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule158_1.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule158_2.png'}}/>
          <HighlightText>{'\n\n'}</HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule157', next: 'Rule159', nav: navigation }} />
    </>
  );
}


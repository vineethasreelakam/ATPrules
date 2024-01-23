import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule13({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.12 Waiver/Player Publicity and Promotion</Text>{'\n\n'}

            All players agree to the following:{'\n\n'}
            A.I grant and assign to ATP and ATP Tour tournaments and ATP Challenger Tour tour
            naments in which I am or have been entered the right in perpetuity to record in
            tangible form and use my name, performance, likeness, voice, and biography, in any
            and all media (including the right to produce, display and otherwise use motion pictures,
            still pictures and live, taped or filmed television and other reproductions of me),
            solely for purposes of advertising and promoting ATP Tour, ATP Tour tournaments,
            ATP Challenger Tour tournaments and other events held as part of ATP. Any such
            use of my name, performance, likeness, voice or biography shall be without separate
            compensation to me or to my heirs, devisees, executors, administrators, lega
            representatives or assignees. Nothing in this section shall permit ATP, or ATP Tour
            tournaments and ATP Challenger Tour tournaments to use my name, performance,
            likeness, voice or biography on any product, service or clothing, or in any manner that
            constitutes an endorsement of any product, service or company.{'\n\n'}

            B.I agree to cooperate with the news media and to participate upon request in reasonable
            promotional activities of ATP and ATP Tour tournaments and events in which I
            am entered, subject to my reasonable availability to participate therein. My participation
            in any such promotional activities or other events shall not be represented to third
            parties as an endorsement by me of any product or company.{'\n\n'}
            
            C.Any use of my name, likeness, signature, photograph, depiction or video (my “Likeness”)
            on official ATP or ATP Tour branded merchandise (the “ATP Merchandise”)
            shall be subject to my prior written approval. I agree that my response to any request
            for my approval will not be unreasonably delayed. With my prior written approval
            as to the items of ATP Merchandise, the use of my Likeness and the compensation
            for this use, I grant and assign to ATP the right to use my Likeness on ATP or ATP
            Tour Merchandise, provided that use of my Likeness on any such merchandise shall
            not conflict with or cause me to be in breach of any current endorsement contract to
            which I am bound. In the event ATP desires to use my Likeness on ATP or ATP Tour
            Merchandise, I acknowledge that I will receive a commission amount agreed upon in
            writing on any proceeds or revenue generated from such use.


            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule12', next: 'Rule14', nav: navigation }} />
    </>
  );
}


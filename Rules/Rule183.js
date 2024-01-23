import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule183({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT Z - Player Gym</Text>{'\n\n'}
            The minimum requirements for the on-site player gymnasium are as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>
              ATP Tour Masters 1000 / 500 events
            </Text>
          </Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule183_1.png'}}/>
          <Text>{'\n\n'}</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule183_2.png'}}/>
          <Text style={RuleStyles.Description}>
            Additional Equipment / Supplies:
            {'\n\n'}a) Adequate supply of bottled water for hydration.
            {'\n\n'}b) Anti-bacterial wipes for hygiene.
            {'\n\n'}c) Mirrors on walls (to check form).
            {'\n\n'}d) TV monitor(s) for live scores and live action.
            {'\n\n'}e) In addition to floor space for cardio equipment and weight machine(s), there
            must be ample space for functional exercises and utilization of the medicine
            balls, Swiss balls, and free weights and tubing. Area for stretching and work
            with coach, physio or strength and conditioning specialist is as important as
            the footprint for the cardio and weight machines.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>
              ATP Tour 250 / Challenger events
            </Text>
            {'\n\n'}a) All ATP Tour 250 events shall provide on-site and free of charge a fully
            equipped gym of adequate size with the proper equipment as shown above
            under requirements for a 1000 / 500 event. If the Official Tournament Hotel
            has a fully equipped gym, which is available to all players free of charge, then
            the tournament must provide at a minimum an area designated for warm-up /
            cool-down with the minimum amenities hereinafter set forth in Section c):
            {'\n\n'}
            b) All Challenger Tour 175, 125 and 100 must provide on-site, off-site within
            a reasonable distance from the tournament site/official hotel or at the official tournament hotel and free of charge a fully equipped gym of adequate
            size with the proper equipment as shown above under requirements for a
            1000 / 500 event. If the tournament gym is off-site, then the tournament must
            provide at a minimum an area designated for warm-up / cool-down with the
            minimum amenities hereinafter set forth in Section c).
            {'\n\n'}
            c) The on-site warm-up/cool-down area should be large enough to allow for
            stretching, functional exercise, as well as to use the cardio equipment (treadmill and bike). In addition, the following amenities shall be provided at a minimum:
            {'\n\n'}
            a) 1 treadmill
            {'\n\n'}b) 2 upright stationary bikes
            {'\n\n'}c) Stretching area with exercise mats
            {'\n\n'}d) 2 sets of elastic bands
            {'\n\n'}e) 1 set of medicine/weighted balls (see recommended weights in 1000/500
            section hereinbefore set forth
            {'\n\n'}f) 2 foam rolls
            {'\n\n'}g) 1 set dumb-bells (see recommended weights above in 1000/500 section
            hereinbefore set forth
            {'\n\n'}h) 1 Swiss Ball
            {'\n\n'}i) 1 wobble board/foam balance platform
            {'\n\n'}
          </Text>

        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule182', next: 'Rule184', nav: navigation }} />
    </>
  );
}


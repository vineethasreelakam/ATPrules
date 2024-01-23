import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule59({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.08 Line Umpire</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> A.Assignment and Designation Process</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Masters 1000 Tournaments </Text>
            {'\n\n'}
            Officials required to support the tournament are as follows:
            {'\n\n'}
            Unless otherwise approved by ATP, the following are required: a minimum of seven (7) Line Umpires must be provided per main draw match and qualifying match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>2) ATP 500 and 250 Tournaments</Text>
            {'\n\n'}
            Officials required to support the tournament are as follows:
            {'\n\n'}
            Unless otherwise approved by ATP, the following are required: A minimum of seven (7) Line Umpires must be provided per main draw match. A minimum of five
            (5) Line Umpires per qualifying match must be provided.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) ATP Challenger Tour Tournaments </Text>
            {'\n\n'}
            Tournaments must hire officials as specified below:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>For Challenger 50 and 75</Text> events on clay court, a minimum of three (3) Line
            Umpires shall be provided for every qualifying match and also every main draw
            match up until the quarterfinal. From the quarterfinals on, a minimum of five (5)
            Line Umpires shall be provided.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>For Challenger 50 and 75</Text> events on hard, grass or indoor synthetic court, a
            minimum of five (5) line umpires shall be provided for every qualifying and main
            draw match.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>For Challenger 100 and 125</Text> events, regardless of court surface, a minimum of
            five (5) Line Umpires shall be provided for every qualifying and every main draw
            match up until the quarter-finals. From the quarter-finals on, a minimum of seven
            (7) Line Umpires shall be provided.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>For Challenger 175 </Text>events, a minimum of five (5) Line Umpires shall be provided
            for every qualifying match. A minimum of seven (7) line umpires shall be provided
            for every main draw match.
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B.General</Text>
            {'\n\n'}
            Line umpires are assigned by the Chief of Umpires and are responsible for calling
            their assigned lines according to ATP rules under the direct on-court supervision of
            the Chair Umpire
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>C.Clothing</Text>
            Clothing provided by the tournament for Line Umpires shall not be solid white, yellow
            or other colors that may interfere with the vision of the players, unless otherwise approved by ATP. It is recommended that dark-colored clothing be avoided for outdoor
            tournaments played in high temperatures. Clothing should not be identical to clothing
            provided to the ball persons.

            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>D.Responsibilities</Text>
            {'\n\n'}
            1) Carry out all duties in accordance with the approved procedures of ATP.
            {'\n\n'}
            2) Not catch balls or hold towels for a player.
            {'\n\n'}
            3) Not leave the court without permission of the Chair Umpire.
            {'\n\n'}
            4) Dress uniformly with other Line Umpires as prescribed by the tournament and/or
            ATP.
            {'\n\n'}
            5) Sit erect with both feet on the ground with arms resting on his or her legs.
            {'\n\n'}
            6) Concentrate on the assigned line; conversation with spectators or others is to be
            avoided.
            {'\n\n'}
            7) Be accountable to the Chair Umpire only and have no discussions with the players. A player’s questions must always be referred to the Chair Umpire. However,
            a Line Umpire may answer a reasonably precise question if it relates to a call,
            especially foot faults, unless that call has been overruled.
            {'\n\n'}
            8) Move away from the on-court chair if necessary to get the best view possible of
            the assigned line.
            {'\n\n'}
            9) Make all calls as quickly as possible, maintaining consistency and accuracy. On
            very close calls a fraction of a second’s hesitation is recommended to make sure
            that the call is correct.
            {'\n\n'}
            10) Never call a ball “Out” until it actually hits out or it hits a permanent fixture.
            {'\n\n'}
            11) Make “Out,” “Fault,” “Net” and “Foot Fault” calls loudly and crisply followed by the
            appropriate hand signal. Foot faults are never called until the serve is struck.
            {'\n\n'}
            12) Do not make a call for a “good” ball. However, whenever there is a close call on a
            good ball, the “good” ball hand signals should be given quickly to confirm the call.
            {'\n\n'}
            13) When there is an erroneous call, immediately call “Correction” so that the Chair
            Umpire and the players are aware of the error. Then, make the corrected call.
            {'\n\n'}
            14) Do not give an opinion on a call that is not his or her responsibility.
            {'\n\n'}
            15) Remain silent if the Chair Umpire overrules a call. Direct player inquiries to the
            Chair Umpire.
            {'\n\n'}
            16) If directed by the Chair Umpire to identify a mark, and the Line Umpire is sure
            of the location of the mark, the Line Umpire should walk directly to the mark and
            point to it in a manner that is clear to the Chair Umpire. The Line Umpire should
            then return to his position without comment.
            {'\n\n'}
            17) Promptly yield to the Chair Umpire when unsighted on a call.
            {'\n\n'}
            18) If the Line Umpire sees that he or she may hinder a player’s stroke, make a reasonable effort to get out of the way, but in so doing, make as little movement as
            possible.
            {'\n\n'}
            19) When there are Code Violations by players not witnessed by the Chair Umpire,
            inform the Chair Umpire immediately or as soon as is reasonable prior to the start
            of the next point, without disrupting a point or the match. The Line Umpire should
            quickly approach the Chair Umpire and report the facts of the violation.
            {'\n\n'}

            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule58', next: 'Rule60', nav: navigation }} />
    </>
  );
}


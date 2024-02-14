import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule15({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.14 Special Events - Exhibitions</HighlightText>{'\n\n'}

            A.This rule shall not apply to players outside the top thirty (30) as of November 13, 2023
            (Commitment Players).{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.Restrictions</HighlightText>{'\n\n'}
            {'\t'}1) Special events are those other than Grand Slams, ATP Tour tournaments or ATP
            Challenger Tour tournaments. A player may not compete in a special event if it is
            scheduled as follows:{'\n\n'}

            {'\t\t'}a) Within the tournament weeks of any ATP Tour Masters 1000 tournament, ATP
            Tour 500 tournament and the Nitto ATP Finals (singles or doubles). A player
            who has qualified for and chooses not to play in the ATP Tour Doubles Championship
            shall not be eligible for an exemption to play in any special event
            during that week.{'\n\n'}

            {'\t\t'}b) Within thirty (30) days before or after the tournament weeks of any ATP Tour
            Masters 1000 tournament, ATP Tour 500 tournament, the Nitto ATP Finals
            (singles or doubles), if the special event is located within:{'\n\n'}

            {'\t\t\t'}i) One hundred (100) miles or one hundred sixty (160) kilometers of the
            same; or{'\n\n'}

            {'\t\t\t'}ii) The same market area of the city where the tournament is located as
            determined by the ATP CEO.{'\n\n'}

            {'\t\t'}c) Within the period of any ATP Tour 250 tournament (qualifying competition and
            main draw) if the special event is located within:{'\n\n'}

            {'\t\t\t'}i) One hundred (100) miles or one hundred sixty (160) kilometers of the
            same; or{'\n\n'}

            {'\t\t\t'}ii) The same market area of the city where the tournament is located as
            determined by the ATP CEO.{'\n\n'}

            {'\t'}2) Within the tournament week of any ATP Tour or ATP Challenger Tour tournament
            in which he is entered including the Sunday night after such tournament final,
            except as otherwise expressly permitted in the following subsection C.{'\n\n'}

            C.A player who is entered into an ATP Tour 250 tournament may participate in a special
            event on the Monday of such tournament, provided:{'\n\n'}

            {'\t'}1) He has the permission of the Tournament Director of the ATP Tour 250 tournament
            he is entered in that week; and{'\n\n'}

            {'\t'}2) If he competes in a tournament during the preceding week, he agrees to complete
            the same if rain or other unavoidable circumstances delay the finals until Monday;
            and{'\n\n'}

            {'\t'}3) Such special event is not located within:{'\n\n'}

            {'\t\t'}a) One hundred (100) miles or one hundred sixty (160) kilometers of the same;
            or{'\n\n'}

            {'\t\t'}b) The same market area of the city where the tournament is located as determined
            by the ATP CEO; or{'\n\n'}

            {'\t\t'}c) Such special event does not violate any of the other restrictions of this rule.{'\n\n'}

            D.A player has the right to petition the ATP CEO or his designee for an exemption to
            these requirements unless otherwise specified above.{'\n\n'}

            {'\t\t\t'}<HighlightText style={{ fontStyle: 'italic' }}> <HighlightText style={{fontWeight: 'bold' }}>Case:</HighlightText> May a player, who is not a Commitment Player after losing,
            retiring or withdrawing from the qualifying, play in a special event
            held the following week end?{'\n\n'}

            {'\t\t\t'}<HighlightText style={{fontWeight: 'bold' }}>Decision:</HighlightText> Yes. However, the player must still ask for and receive
            a release from the Supervisor prior to participating in such special
            event. (Also see provisions listed in section 7.06 One Tournament
            Per Week and Exception){'\n\n'}</HighlightText>

            E. Violations of this section are subject to penalties described under the player Major
            Offense Conduct Contrary to the Integrity of the Game.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule14', next: 'Rule16', nav: navigation }} />
    </>
  );
}


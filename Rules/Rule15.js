import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule15({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.14 Special Events - Exhibitions</Text>{'\n\n'}

            A.This rule shall not apply to players outside the top thirty (30) as of November 13, 2023
            (Commitment Players).{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B.Restrictions</Text>{'\n\n'}
            1) Special events are those other than Grand Slams, ATP Tour tournaments or ATP
            Challenger Tour tournaments. A player may not compete in a special event if it is
            scheduled as follows:{'\n\n'}

            a) Within the tournament weeks of any ATP Tour Masters 1000 tournament, ATP
            Tour 500 tournament and the Nitto ATP Finals (singles or doubles). A player
            who has qualified for and chooses not to play in the ATP Tour Doubles Championship
            shall not be eligible for an exemption to play in any special event
            during that week.{'\n\n'}

            b) Within thirty (30) days before or after the tournament weeks of any ATP Tour
            Masters 1000 tournament, ATP Tour 500 tournament, the Nitto ATP Finals
            (singles or doubles), if the special event is located within:{'\n\n'}

            i) One hundred (100) miles or one hundred sixty (160) kilometers of the
            same; or{'\n\n'}

            ii) The same market area of the city where the tournament is located as
            determined by the ATP CEO.{'\n\n'}

            c) Within the period of any ATP Tour 250 tournament (qualifying competition and
            main draw) if the special event is located within:{'\n\n'}

            i) One hundred (100) miles or one hundred sixty (160) kilometers of the
            same; or{'\n\n'}

            ii) The same market area of the city where the tournament is located as
            determined by the ATP CEO.{'\n\n'}

            2) Within the tournament week of any ATP Tour or ATP Challenger Tour tournament
            in which he is entered including the Sunday night after such tournament final,
            except as otherwise expressly permitted in the following subsection C.{'\n\n'}

            C.A player who is entered into an ATP Tour 250 tournament may participate in a special
            event on the Monday of such tournament, provided:{'\n\n'}

            1) He has the permission of the Tournament Director of the ATP Tour 250 tournament
            he is entered in that week; and{'\n\n'}

            2) If he competes in a tournament during the preceding week, he agrees to complete
            the same if rain or other unavoidable circumstances delay the finals until Monday;
            and{'\n\n'}

            3) Such special event is not located within:{'\n\n'}

            a) One hundred (100) miles or one hundred sixty (160) kilometers of the same;
            or{'\n\n'}

            b) The same market area of the city where the tournament is located as determined
            by the ATP CEO; or{'\n\n'}

            c) Such special event does not violate any of the other restrictions of this rule.{'\n\n'}

            D.A player has the right to petition the ATP CEO or his designee for an exemption to
            these requirements unless otherwise specified above.{'\n\n'}

            Case: May a player, who is not a Commitment Player after losing,
            retiring or withdrawing from the qualifying, play in a special event
            held the following week-end?{'\n\n'}

            Decision: Yes. However, the player must still ask for and receive
            a release from the Supervisor prior to participating in such special
            event. (Also see provisions listed in section 7.06 One Tournament
            Per Week and Exception){'\n\n'}

            E. Violations of this section are subject to penalties described under the player Major
            Offense Conduct Contrary to the Integrity of the Game.


            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule14', next: 'Rule16', nav: navigation }} />
    </>
  );
}


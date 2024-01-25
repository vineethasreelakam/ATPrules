import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule14({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.13 Stars Program</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>Responsibilities</HighlightText>{'\n\n'}

            A.All players competing in the main draw of any ATP Tour tournament will be required,
            if asked, to participate in ATP sponsored activities.{'\n\n'}

            B.Each player is obligated to provide up to two (2) hours each week as arranged by ATP
            staff, for a maximum of up to four (4) separate activities.{'\n\n'}

            C.Each player, if requested, is obligated to conduct visits to private sponsor lounges.
            Tournaments shall instruct sponsors that no video or photos shall be taken if the
            player has a conflicting sponsor contract (i.e., is within the same product or service
            category), however, personal photos that do not include any corporate or product
            signage/identification and will not be used for a commercial purpose are allowed.
            Tournaments must ensure that no images or footage of any player visit shall be used
            by the sponsor for a commercial purpose (i.e., giving the appearance the player endorses a
            product or service) without the prior written consent of the player. No players
            are permitted to visit the sponsor lounge (or other location) of a company that offers
            betting on tennis.{'\n\n'}

            D. Each player, if requested, is obligated to conduct visits to sponsor public booths except
            if the player has a conflicting sponsor contract (i.e., is within the same product or
            service category). Tournaments must ensure that no images or footage of such visits
            shall be used by the sponsor for a commercial purpose (i.e., giving the appearance
            the player endorses a product or service) without the prior written consent of the player.
            No players are permitted to visit the public booth (or other location) of a company
            that offers betting on tennis.{'\n\n'}

            E. Each player, if requested, is obligated to participate in official tournament activities.
            However, Tournaments must ensure, pursuant to rule 1.13 B, that any player’s participation in
            an official tournament activity shall not be conducted or promoted in a manner that would give
            the appearance that such player endorses a particular product,
            service or company without the prior written consent of the player. In addition, Tournaments
            must ensure that no images or footage of an official tournament activity shall
            be used by a sponsor for a commercial purpose (i.e., giving the appearance that a
            player endorses a product or service) without the prior written consent of each player.{'\n\n'}
            
            F. Each player, if requested, is obligated to participate in up to two (2) sets of activities/ days
            for promotional purposes as arranged by ATP. Such activities/days may
            take place outside of an ATP Tour tournament week and/or location. Players and
            their agents will be consulted in advance to ensure that any such activities will not
            substantially intrude upon the player’s schedule. Players and their agents will also
            be consulted with respect to the scope and substance of the activities to ensure that
            the player is comfortable with the proposed activities. ATP will cover all expenses
            incurred by a player while participating in any such activities.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule13', next: 'Rule15', nav: navigation }} />
    </>
  );
}


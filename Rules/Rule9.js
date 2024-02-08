import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule9({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.08 Unsatisfied Player Commitment Penalties</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A.Failure To Participate in the Nitto ATP Finals</HighlightText>
            {'\n\n'}
            1) If a player qualified for the Nitto ATP Finals as a direct acceptance or was designated as
             the alternate, fails or refuses to participate in this event, except for bona
            fide injury or other reason which constitutes good cause, the player shall not be in
            good standing.{'\n\n'}
            2) All direct acceptances and the alternate must appear at the site of the event(s)
            as determined by ATP and participate in the pre tournament media conference.
            Failure to appear shall result in a penalty of five percent (5%) of total ATP prize
            money earned during the ATP Tour circuit year.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.Review of Penalties for Breach of Commitment</HighlightText>{'\n\n'}
            Any player found to have committed a player commitment offense may petition the
            Appeals Tribunal for discretionary review. This written petition shall detail the basis
            for the appeal. The tribunal shall review the petition within twenty one (21) days and,
            if necessary, designate a date, time and place for a hearing. At the hearing, the player
            shall present to the tribunal his respective positions on the facts. The tribunal may
            affirm, reverse or modify the penalty initially imposed by ATP

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule8', next: 'Rule10', nav: navigation }} />
    </>
  );
}


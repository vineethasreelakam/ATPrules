import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule11({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.10 Player Eligibility/Player University/Physical 
            Exam</HighlightText>{'\n\n'}

            A.Pursuant to ATP Bylaws, a player shall be entitled to become an active ATP player
            member as follows:{'\n\n'}
            {'\t'}1) Group 1 player membership in ATP shall be open to any individual who:(i) as of
            the 2023 oficial year end Pepperstone ATP Rankings or at any point during 2024
            (in each case, including pursuant to protected ranking) shall be positioned among
            the top 250 players in the Pepperstone ATP Singles Rankings or among the top
            50 players in the Pepperstone ATP Doubles Rankings,(ii) pays ATP dues  and (iii)
            satisfies criteria established from ATP from time to time.{'\n\n'}

            {'\t'}2) Group 2 player membership in ATP shall be open to any individual who does
            not qualify for Group 1 membership and who, shall had at least one (1) ranking point
            as of the 2023 oficial year end. Pepperstone ATP Rankings or at any point during
            2024, (ii) pays ATP dues and (iii) satisfies criteria established from ATP from time
            to time.{'\n\n'}

            B.All Group 1 ATP player members must attend an ATP player university within one (1)
            year after becoming a member.{'\n\n'}

            C.All Group 1 and 2 ATP player members must submit an authorized physical examination
            as specified in section 1.07.A.7).{'\n\n'}

            D.Any ATP player who is eligible for Group 1 membership and does not fulfill the obligations 
            in subsection B and C above shall not be entitled
            to the privilege of membership.{'\n\n'}
            
            E. All Group 1 ATP player members must complete an ATP University refresher course
            two years after completing the ATP University as prescribed and designed by ATP.
            Any player Group 1 member who fails to complete the refresher course within the
            stated time period shall not receive the benefits of membership.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule10', next: 'Rule12', nav: navigation }} />
    </>
  );
}


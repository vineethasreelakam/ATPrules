import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule182({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT X - Premier Player Protocol</Text>{'\n\n'}
            
            <Text style={RuleStyles.SubHeading2}>
            Premier Player Group. 
            </Text>
            Players ranked as a year-end top 30 player (commitment players) or have a current protected ranking within the top 10 are eligible to be selected in
            the premier player group for purposes of fulfilling the restriction on who is eligible to be
            named as an additional Wild Card at an ATP Tour 500 event. The size of the premier
            player group shall be ten (10) players plus two (2) alternates selected as follows:
            {'\n\n'}
            Ten (10) players shall be selected as “tournament” premier players (A+) by each of
            the ATP 500 tournaments. Each tournament shall also designate two (2) alternates
            as A1 and A2. The regional EVP’S shall solicit input from the respective events to
            determine the ten (10) tournament selections, plus alternates. These ten (10) players
            and the two (2) alternates shall be presented to the Board at the final Board meeting
            of the previous year for approval.
            In the event that an A+ player becomes injured or otherwise is not able to compete for
            an extended period of time, as specified below, he will be replaced by the A1 player
            designated by the tournament.
            {'\n\n'}
            The same procedure will be followed in the event that a second player needs to be
            replaced as determined below.
            {'\n\n'}
            If additional A+ players are required and the designated A1 and A2 players have already been promoted or are otherwise not available, then the A+ replacement player
            will be the next highest ranked player on the most current Pepperstone ATP Rankings.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>
            Replacement protocol. 
            </Text>
            The replacement of a Premier Player will automatically occur when any of the following apply:
            {'\n\n'}
            1) A Premier Player has withdrawn / retired from an event due to illness or injury and
            has been out of competition for sixty (60) days; or
            {'\n\n'}
            2) A Premier Player has announced that due to illness / injury or other reasons he
            will be out of competition for a period of at least sixty (60) days; or
            {'\n\n'}
            3) A Premier Player announces his retirement; in this case he is replaced immediately following his last event.
            <Text style={RuleStyles.SubHeading3}>Note: </Text>
            The count shall begin on the withdrawal deadline date; the date of the retirement; the date of the late withdrawal; or the date of the on-site withdrawal, whichever
            was chronologically first.
            {'\n\n'}
            A player must not compete in any other tennis event during those periods.
            {'\n\n'}
            If the replaced player returns to competition during the season, he shall be reinstated
            as a premier A+ player upon the start of his first match (singles or doubles) in his first
            ATP Tour event.


            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule181', next: 'Rule184', nav: navigation }} />
    </>
  );
}


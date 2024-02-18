import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule3({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3_1.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.02 Tournament Week{'\n\n'} </HighlightText>
            <HighlightText style={RuleStyles.SubHeading2}>A.Main Draw {'\n\n'}</HighlightText>
            Each ATP Tour and ATP Challenger Tour tournament is assigned a specific tournament week on the calendar for scheduling of the main draws in singles and
            doubles commencing on a Monday and concluding on a Sunday, except as approved
            by ATP. ATP Challenger Tour 75 to 125 tournaments scheduled in the weeks prior to the qualifying or first week of a Grand Slam tournament shall schedule their singles and doubles
            final on a date no later than the Saturday in the assigned week, unless otherwise
            approved by ATP.Requests from other Challengers for Saturday final shall be considered on a case by case basis. The deadline for applying for a Saturday final is four (4) months prior to the first Monday of the event or prior to the tournament being added to the calendar, whichever is first.
            {'\n\n'}

            ATP reserves the right to require diferent schedule for Challengers scheduled prior to Grand Slam tournaments and ATP Masters 1000.
            {'\n\n'}
            
            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>
            A tournament, scheduled and announced for a Saturday final,
            during the week requests to move the final to Sunday (no weather
            issues), is this allowed?{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Unless weather or other unavoidable circumstances
            cause the tournament to be extended to Sunday then no change to
            the original approved schedule may be made.{'\n\n'}
            

            <HighlightText style={RuleStyles.SubHeading2}>B.Matches – Number of Sets.{'\n\n'} </HighlightText>
          
            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}1. Singles. </HighlightText>
             All matches, including finals, shall be the best of three (3) tie-break sets.{'\n\n'}
             <HighlightText style={RuleStyles.SubHeading3}>{'\t'}2. Doubles. </HighlightText>
            All matches, including finals, shall be two (2) tie-break sets with a deciding Match Tie-break (10 point) at one (1) set all. Games shall be decided using
            the No Ad scoring method.{'\n\n'}
           
            <HighlightText style={RuleStyles.SubHeading2}>C.Monday Finals. </HighlightText>{'\n\n'}
            No ATP Tour or ATP Challenger Tour tournament shall extend its
            tournament week for a Monday final without prior approval from ATP.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>D.Qualifying. {'\n\n'}</HighlightText>
            A tournament may petition, forty-two (42) days prior to the event, for expansion of
            draw size as long as there is no change in the number of direct acceptances. {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}1) ATP Tour. </HighlightText>
             One (1) round per day except when weather or other
            unavoidable circumstances require two (2) rounds to be played on the same
            day.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}2) ATP Challenger Tour. </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>{'\t\t'}a) ATP Challenger 50-125. </HighlightText>
            One (1) round per day except when weather or other unavoidable circumstances 
            require two (2) rounds to be played on the same day. {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}3) General. </HighlightText>
            All tournaments must have a singles qualifying competition (unless
            there are sufficient places available in the main draw). The singles qualifying
            competition shall be a single elimination tournament.{'\n\n'}

            {'\t\t\t'}a) All ATP Tour 250 events shall have a 16 draw qualifying.{'\n\n'}
            {'\t\t\t'}b) ATP Tour Masters 1000 and ATP Tour 500 qualifying will be one half (1/2) the
            size of the main draw; i.e. a 56 main draw would have a 28 qualifying draw for
            the 7 qualifying positions.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}4) Location. </HighlightText>
            If the qualifying competition is not held at the same site as the main
            draw, the alternate site must have similar facilities, courts, staff, service and
            equipment. The qualifying competition may not be held at a site outside the metropolitan
             area of the main draw without prior written approval of ATP.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>{'\t'}5) Surface. </HighlightText>
            The qualifying competition shall be played on the same surface as the
            main draw. In situations beyond the control of the tournament, the Supervisor
            may approve the use of courts with a different surface.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>

      </View>
      <RuleNavigationButtons props={{ prev: 'Rule2', next: 'Rule4', nav: navigation }} />
    </>
  );
}


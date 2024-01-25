import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule167({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT L - Chief of Umpires</HighlightText>{'\n\n'}
            The Chief of Umpires shall:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>1) Be prepared to brief the Supervisor and Referee on:
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a)
            </HighlightText>
            The plan for implementing the officials.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2) Discharge the following responsibilities:
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a) </HighlightText>
            Pre-tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) </HighlightText>
            Recruit a sufficient number of competent officials who are qualified to officiate at this level of event.
            The most qualified officials must be assigned
            through the finals. Prepare a list of officials (Line Umpires with ratings,
            Chair Umpires with ratings) for the full-time ATP official coordinating the
            officials for the event.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>ii) </HighlightText>
            If applicable, negotiate a contract or agreement for officials with the tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>iii) </HighlightText>
            If a Challenger event, submit to ATP a list of proposed Designated Chair
            Umpires no less than 90 days prior to the start of the tournament.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>iv) </HighlightText>
            If requested by the tournament, provide a list of officials to the Chairperson responsible for the program.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>v) </HighlightText>
            Compile an officials’ clothing sizes list, in case the tournament furnishes
            clothing for uniforms.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>vi) </HighlightText>
            Conduct the necessary pre-tournament training of officials including review of the Rules of Tennis, ATP tournament Rules and Code.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>vii) </HighlightText>
            Check with the tournament about arrangements for:
            {'\n\t'}o umpire chairs o cushions//sunshades
            {'\n\t'}o singles sticks o chairs for use on--court by Line Umpires
            {'\n\t'}o scorecards o scoreboards//personnel
            {'\n\t'}o new and used balls
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>viii) </HighlightText>
            Check supplies for the tournament:
            {'\n\t'}o scorecards o clipboards (if needed)
            {'\n\t'}o point penalty forms o first aid kit
            {'\n\t'}o pencils o office supplies
            {'\n\t'}o crew rotation forms o on-court Line Umpire evaluation forms
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            Rotation information is available upon request from ATP.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>ix) </HighlightText>
            Check all applicable arrangements for officials:
            {'\n\t'}o on--site office and lounge
            {'\n\t'}o transportation (long-distance or local)
            {'\n\t'}o food and beverages o parking
            {'\n\t'}o telephones o housing
            {'\n\t'}o security o toilets
            {'\n\t'}o photocopier o walkie--talkies
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>x) </HighlightText>
            Prepare a check-in form if the number of officials requires it.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>xi) </HighlightText>
            Organize a method of notification or a mailing that informs all of the officials about the tournament dates, officials report times (no less than 30
            minutes before start of play), uniform requirements and arrangements
            for transportation, parking and housing. An umpire information sheet is
            recommended for an event larger than a 32 draw.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>xii) </HighlightText>
            Present to the ATP Supervisor at least 2 weeks prior to the qualifying
            sign-in:
            {'\n\t'}o an availability list of the Chair Umpires for each day including both
            the designated and additional Chair Umpires. Categorize according
            to rating, experience and ability.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b) </HighlightText>
            During the Tournament:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) </HighlightText>
            Provide assistance to the ATP Supervisor as needed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>ii) </HighlightText>
            Be on-site at all times during play. The Chief of Umpires may not be a
            Chair Umpire or Line Umpire unless authorized by the ATP Supervisor.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>iii) </HighlightText>
            Instruct the officials on the tournament procedure for handling new and
            used balls.
            Note that it is inappropriate for the Chair Umpires to supply the court with
            the balls for their matches.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>iv) </HighlightText>
            Instruct the officials on the procedure for reporting and turning in point
            penalty forms.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>v) </HighlightText>
            Schedule the on-court assignment of the Line Umpires, subject to the approval of the ATP Supervisor, Line Umpires for the quarterfinals, semi-finals and finals must have worked a minimum of two (2) days prior to
            the quarterfinal and must have demonstrated that their skills merit the
            assignment.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>c) </HighlightText>
            Observe the performance of all officials during the matches.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>d) </HighlightText>
            Remove, rotate or replace a Line Umpire whenever it is necessary to improve
            the officiating of a match.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>e) </HighlightText>
            Maintain the ATP Line Umpire evaluation process, and make ongoing assignments based upon evaluations.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) </HighlightText>
            Be prepared for other contingencies (such as rain) that may change the
            number of courts being used.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>ii) </HighlightText>
            Prepare a day in advance, recording Chair Umpire assignments on the
            order of play and preparing rotations for the line teams.
            Complete information must be posted before the arrival of the officials the
            next day, no less than 30 minutes before the start of play.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>iii) </HighlightText>
            Conduct a daily meeting with all officials.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>f) </HighlightText>
            Post-Tournament.
            Prepare a written report for the Supervisor. Include recommendations for improvements and the prevention of problems.

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule166', next: 'Rule168', nav: navigation }} />
    </>
  );
}


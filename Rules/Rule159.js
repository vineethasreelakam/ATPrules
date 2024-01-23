import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule159({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT D - Attendance Standards</Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>ATP Tour Tournament Attendance Quality 
            Standards</Text>{'\n\n'}
            
            Set forth below for each of the tournament classes are two attendance standard
            recommendations. In each year of operation, each ATP Tour tournament class member 
            is expected to meet both of these recommendations. A member not meeting the
            recommended attendance standard three (3) years in a row (excluding extenuating
            circumstances) must present to the ATP Standards Committee a strategic plan on
            how they will meet the recommended standard in future years.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>1) Recommended Attendance Standards</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) ATP Tour Masters 1000 & ATP Tour 500
             tournaments</Text>{'\n\n'}
            The recommended total attendance is calculated as follows:{'\n\n'}
            • Start of main draw through Thursday.{'\n\n'}
            {'\t'}o 50% of the actual seating capacity* for match courts, as specified in
            section 1.20, multiplied by the number of sessions.{'\n\n'}
            • Friday through Sunday{'\n\n'}
            {'\t'}o 75% of the Center Court capacity* multiplied by the number of sessions.{'\n\n'}
            • The sum of these totals determine the recommended total attendance for
            the week.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) ATP Tour 250</Text>{'\n\n'}
            
            The recommended total attendance is calculated as follows:{'\n\n'}
            • Start of main draw through Tuesday.{'\n\n'}
            {'\t'}o 25% of the Center Court seating capacity multiplied by the number of
            sessions.{'\n\n'}

            • Wednesday and Thursday{'\n\n'}
            {'\t'}o 50% of the Center Court seating capacity multiplied by the number of
            sessions.{'\n\n'}

            • Friday through Sunday{'\n\n'}
            {'\t'}o 75% of the Center Court capacity multiplied by the number of sessions.{'\n\n'}
            • The sum of these totals determine the recommended total attendance for
            the week.{'\n\n'}
            * For events that cover Center Court seats, available seats on that day will be
            used to determine percentages, however, this number may not be less than
            the minimum requirement.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>2) Minimum Weekend Attendance</Text>{'\n\n'}
            
            The average minimum attendance per session during the final weekend of play is
            recommended to be in excess of 75% of capacity for the Center Court.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>3) Measurement</Text>{'\n\n'}
            
            a) On a daily basis during the operation of each tournament, each tournament
            class member shall provide the ATP Supervisor with attendance figures in
            writing on a per session basis for each session held during the prior day.
            Such report shall set forth both total spectator attendance and the percentage
            of capacity. Each tournament class member shall promptly provide the ATP
            Supervisor or other member of the ATP staff with any backup necessary to
            verify its spectator attendance figures if such information is requested.
            {'\n\n'}
            b) If the ATP Supervisor has any questions concerning the accuracy of such
            spectator attendance figures based upon his observation of the event, the
            ATP Supervisor shall promptly so notify the tournament class member and
            shall inform the member of what he believes is a more accurate spectator attendance 
            count. In such circumstance, the burden will be on the tournament
            class member to persuade the ATP Supervisor of the accuracy of its figures.
            The final report of the ATP Supervisor shall be conclusive.



            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule158', next: 'Rule160', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule176({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT T - Review Officials Duties and Procedures for the ELC Systems</Text>{'\n\n'}

            {'\n\n'}• The ELC Review Official (RO) shall be designated by the governing body responsible for the Tournament
            {'\n\n'}• Attend all mandatory official’s meetings and requested training
            {'\n\n'}• RO team leader (Lead RO) should be appointed at the beginning of the event.
            {'\n\n'}• RO’s will work on a rotation basis, the schedule will be made by the Lead RO.
            {'\n\n'}• In the case of a temporary RO in the booth the designated RO is responsible to
            make sure that the temporary RO is aware of all the local set up and booth procedures specific to that event.
            {'\n\n'}• Prior to the start of the ELC system on any court, during the Chair Umpire (CU)
            meeting, be responsible to inform the CU’s about:
            {'\n\t'}o On site booth set up
            {'\n\t'}o Location
            {'\n\t'}o Conditions
            {'\n\t'}o Type of communication with ELC Staff and TV.
            {'\n\n'}• Organize ahead of time walkie-talkies with a dedicated channel for each court that
            is in use for each day. This can be done through the tournament supervisor or
            referee and the channels must be clear and not used by anyone else.
            {'\n\n'}• If there are any issues during the match, the CU should speak directly with the RO
            who was in the booth at the time and that RO should inform the Lead RO about the
            situation.
            {'\n\n'}• Any general ELC issues, or personal) matters should be discussed with Lead RO.
            {'\n\n'}• RO to record any issues with the system, scoreboards, radios etc. and provide all
            the information to the final event wrap up.
            {'\n\n'}• Any issues that arise should be communicated immediately to the Supervisor by
            the RO Team Leader.
            {'\n\n'}• On the final day of the tournament, the Lead RO should send a report to the Supervisor detailing any major issues and areas for improvement.
            {'\n\n'}• Be ready in the ELC Booth 20 minutes prior to the start of the 1st match
            {'\n\n'}• Wear appropriate uniform as per tournament regulations.
            {'\n\n'}• The RO should not leave their position until they have been replaced by the next
            RO. All necessary information and situations should be reported in full to the replacing RO. This change should only occur during a changeover or at a set break.
            {'\n\n'}• Any issues should be reported immediately after the shift or between matches
            using the designated online form.
            {'\n\n'}• RO assigned on first match of the day is responsible to bring all the needed equipment (walkie talkie, report paperwork if needed etc.), and the one assigned to the
            last match is responsible to return and charge walkie talkie and any other equipment.
            {'\n\n'}• The RO is prohibited from using the internet while matches are in progress.
            {'\n\n'}• No electronic devices shall be used by the RO in the booth unless approved by
            the tournament during matches in progress. This includes personal smartphones,
            smartwatches and personal tablets/laptops. The RO is prohibited from emailing,
            messaging or texting in any form while they are on duty in the booth and the match
            is in progress.
            {'\n\n'}• Officials are prohibited from talking to media unless the interview has been approved by the Supervisor.
            {'\n\n'}• The RO has to abide by all the Rules and procedure of the Body Government and
            follow the code of Conduct, the TUI rules and procedure for officials
            {'\n\n'}• Any violation of this policy could be considered a breach of the code of conduct for
            Officials.

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule175', next: 'Rule177', nav: navigation }} />
    </>
  );
}


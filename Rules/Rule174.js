import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";

export default function Rule174({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT R - Media Facilities Guidelines</Text>{'\n\n'}

            {'\n\n'}A.Media working area
            {'\n\t'}1) Adequate workspace for all credentialed media
            {'\n\t'}2) High speed internet access *
            {'\n\t'}3) Telephone line
            {'\n\t'}4) Power supply
            {'\n\t'}5) High capacity copier
            {'\n\t'}6) Access to a fax machine
            {'\n\t'}7) Smoke free
            {'\n\t'}8) Lock boxes or lockers that can be used to store valuables
            {'\n\t'}9) Security
            {'\n\n'}
            B.Photographer workstation with internet and telephone access
            {'\n\n'}
            C Separate, sound proof interview room
            {'\n\n'}
            D. Separate media lounge, where appropriate
            {'\n\n'}
            E. Credentials
            {'\n\n'}1) All media must be credentialed.
            {'\n\t'}i) Proof of identity must be presented prior to receiving credential.
            {'\n\t'}ii) Credentials must include photo.
            {'\n\t'}iii) Credential must include the provisions set forth in Rule 6.21.
            {'\n\n'}2) Credentials limited to members of the working press only.
            {'\n\t'}i) Journalists known to be working for online gambling companies shall not
            be issued credentials. If found to be working for an online gambling company after issue of the credential, the credential shall be revoked.
            {'\n\t'}ii) Persons who are known to work for data re-sellers shall not be issued
            credentials. If found to be working for a data re-seller after issue of the
            credential, the credential shall be revoked.
            {'\n\n'}3) Working area, lounge and interview room must be secured with access provided
            only to properly credentialed media, players (interview room) and other tournament and ATP Staff when in the performance of their duties.
            {'\n\n'}4) Members of the International Tennis Writers Association (ITWA) shall be given
            preferred status for workspace and court side seating.
            {'\n\n'}* Tournaments are recommended to use web filtering technology to restrict
            access to internet gambling sites in all areas where tournament provided internet access is provided.

            {'\n\n'}
          </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule172', next: 'Rule175', nav: navigation }} />
    </>
  );
}


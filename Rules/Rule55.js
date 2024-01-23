import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule55({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>V. PERSONNEL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>5.04 Doctor, Physiotherapist and Massage Therapis</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.ATP Tour Tournaments</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) Tournament Doctor</Text>
            {'\n\n'}
            Beginning with the qualifying competition, it is the responsibility of each ATP Tour
            tournament to provide on-site during the entire tournament an English-speaking
            Doctor who specializes in sports medicine, unless otherwise approved by ATP’s
            Medical Services Committee. Each tournament shall send the name and address
            of the tournament Doctor to the appropriate ATP regional coordinator forty-two
            (42) days in advance of the tournament. The tournament doctor shall be responsible for the medical care and treatment of the players at all times during the event
            and shall have no other official duties while at the tournament site. ATP Masters
            1000 and ATP 500 tournaments shall provide for the Tournament Doctor, a private
            space in the vicinity of the ATP Physiotherapist area.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>2) Physiotherapist.</Text>
            {'\n\n'}
            ATP shall provide a Physiotherapist for all tournaments except that ATP may require assistance from a tournament to provide a Physiotherapist for the qualifying
            competition.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Combined Events. </Text>Each combined tournament must provide one (1) ATP Physiotherapist with single room hotel accommodations. Complimentary room shall
            be in the player hotel or another hotel approved by ATP Medical Services.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>3) Massage Therapist.</Text>
            It is the responsibility of each ATP Tour tournament to provide a Massage Therapist. in the following amounts: (i) 96-draw: 5, (ii) 56-draw: 4, (iii) 48-draw: 3, and
            (iv) 32-draw: 2.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>B.ATP Challenger Tour Tournaments</Text>
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> 1) Tournament Doctor.</Text> Each ATP Challenger Tour tournament is required to have
            an English-speaking tournament Doctor at the site from one (1) hour prior to the
            start of play through its conclusion on each day. If the ATP Challenger Tour tournament cannot provide a doctor on-site during all hours of play, a doctor shall be
            available during all hours of play on each day
            {'\n\n'}
            a) On call and able to respond immediately for consultation from the tournament
            medical team by telephone on each day for urgent medical situations that
            arise; and
            {'\n\n'}
            b) Through a schedule of daily on-site visits (minimum 1 hour during normal
            business hours or as required by the ATP Supervisor) by the tournament
            doctor established at the start of the tournament and posted in the player
            treatment room to allow for in-person consultations with player as needed
            throughout the tournament and within the allocated time frame for each day;
            and
            {'\n\n'}
            c) To see a player in-practice (physician’s office) if a player, for reasons outside
            his own control, requires a doctor’s consultation outside the daily allocated
            time frame for the doctor’s on-site visit.
            {'\n\n'}
            Each tournament shall send the name and address of the tournament Doctor to
            ATP’s Medical Services Committee forty-two (42) days in advance of the tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Case:</Text> A player requests to see the doctor for an in-practice consultation outside the doctor’s scheduled on-site visit time slot for that
            day. He claims that he has an early match that day (non-urgent reason) and will likely not be on-site later in the day during the doctor’s
            on-site visit.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision:</Text> The request is denied. The player can organize transportation to the site and consult with the doctor during the doctor’s
            on-site visit
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> 2) Physiotherapist.</Text> Each ATP Challenger Tour tournament must provide an English-speaking Physiotherapist(s) as shown below. All Physiotherapy treatments
            are provided to players free of charge.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> a) Challenger 125 and 175 events</Text>
            {'\n\n'}
            i) Two (2) Physiotherapists designated and paid for by ATP.
            {'\n\n'}
            ii) The tournament may apply to have a local physiotherapist in lieu of the
            2nd ATP Physiotherapist. If approved, the local physiotherapist would
            work Saturday through Thursday. All fees and expenses for the local
            Physiotherapist will be paid by the tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}> b) Challenger 100 events</Text>
            i) One (1) Physiotherapist designated and all fees/expenses paid by ATP.
            {'\n\n'}
            ii) One (1) Physiotherapist nominated by the tournament and approved by
            ATP. This Physiotherapist is to be scheduled to work Saturday through
            Thursday with all fees/expenses paid by the tournament.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> c) Challenger 50 and 75 events</Text>
            {'\n\n'}
            i) Two (2) Physiotherapists designated by the tournament and approved by
            ATP.
            {'\n\n'}
            ii) The tournament is responsible for all fees and expenses.
            {'\n\n'}
            iii) One Physiotherapist to work Saturday through Thursday and one physiotherapist to work Sunday through Sunday.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> d) Education module.</Text> All non-ATP Physiotherapists must have successfully
            completed the ATP Medical Services education online program prior to working at ATP Challengers.
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}> 3) Massage Therapist.</Text> One (1) Massage Therapist must be provided at each Challenger.
            {'\n\n'}
            ● At Challenger 50 and 75 events, the second Physiotheraplist may work as
            the Massage Therapist.
            {'\n\n'}
            a) For Challenger 125 and 175 events, the service shall be provided to the players, while remaining in the event, free of charge.
            {'\n\n'}
            b) For all other Challenger Tour events, a fee may be charged with a recommended maximum fee of $25/€25 for a 30-minute massage.

            {'\n\n'}
            {'\n\n'}

          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule54', next: 'Rule56', nav: navigation }} />
    </>

  );
}


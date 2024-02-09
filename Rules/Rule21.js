import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule21({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>1.20 Hotel Accommodations (Rooms)</HighlightText>{'\n\n'}

            All ATP Tour and ATP Challenger Tour tournaments shall provide hotel accommodations,
            subject to player obligations, as follows:{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>A.Tournament Obligations - ATP Tour Tournaments.</HighlightText>{'\n\n'}

            1) Each tournament shall provide one (1) complimentary double room (2 beds) for
            the use of each singles player including one (1) guest, at a hotel approved by
            ATP. The room must be occupied by the registered player who is responsible for
            charges resulting from any third or more person(s) staying in the room as well as
            all incidental costs charged to the room. At a minimum, ATP Masters 1000 and
            ATP 500 tournaments shall provide hotel accommodations in 4 Star hotels (5 Star
            hotels recommended) within thirty (30) minutes from the tournament site. ATP
            Standards Committee (as defined in Exhibit K) approval is required for ATP 250
            tournament hotel accommodations with ratings below 4 Stars and/or greater than
            thirty (30) minutes from the tournament site. ATP tournaments are required to
            provide a dedicated tournament concierge and transportation desk at official
            tournament hotels. At a minimum, hotel accommodations shall include complimentary
            breakfast with adequate breakfast options for the occupants of the player’s room
            (as determined by ATP). ATP Tournaments are also required to provide a
            complimentary gym and internet service for the players at the official hotels.{'\n\n'}

            2) Tournaments using more than one (1) hotel as the official hotel may not make
            player hotel assignments based on a player’s entry into the event as a singles or
            doubles player.{'\n\n'}

            3) Complimentary use of rooms for the tournament week is to be available for players as
            follows (accommodations begin no later than Monday).{'\n\n'}

            4) Main draw players who are no longer eligible for tournament provided hotel
            rooms shall receive the published tournament room rate if they extend their stay.{'\n\n'}

            5) Main draw and qualifying players who have withdrawn on-site for medical reasons and
            who are examined by the on-site tournament Doctor, shall receive tournament provided hotel
            rooms through the night of the examination.{'\n\n'}

            Case: A player plays and wins his first match. He then becomes ill
            and withdraws from the tournament. When does his hospitality end?{'\n\n'}
            Decision: The player who retired from a match or withdrew after
            completing a match is entitled to the complete set minimum number
            of nights per the tournament category or through the night of the
            examination, whichever is later.{'\n\n'}

            6) Players who travel to the event to complete their promotional activity requirement
            shall receive full hospitality from the day of arrival through the night following the
            completion of their promotional obligation.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>a) ATP Tour Masters 1000 Tournaments- 96  Main Draw.</HighlightText>
           {'\n\n'}

           <HighlightText style={RuleStyles.SubHeading3}>i) Singles: </HighlightText>
            Rooms for singles players should be available beginning two
            days prior to the start of the qualifying competition for a minimum of ten
            (10) nights. Accommodations continue through the night that he plays his
            last match or until his ten (10) night minimum has been provided, whichever
            is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>ii) Lucky Loser: </HighlightText>
            The top four (4) lucky losers to sign in the Lucky Loser list
            each day shall receive accommodation through each night he is eligible
            to be inserted into the draw. If any of the top four (4) lucky losers move
            in, then the next player receives hospitality for that night and each night
            thereafter when he is among the top four (4) lucky losers{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iii) Doubles: </HighlightText>
            Rooms for doubles players shall be available beginning three
            (3) days prior to the start of the doubles competition. For doubles players
            who stay in individual rooms, hospitality shall be for a minimum of five (5)
            nights or through the night that the player plays his last match, whichever
            is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iv) Doubles Alternates: </HighlightText>
            Rooms for the top two (2) doubles alternate
            teams shall be available from the night prior to the start of the doubles
            competition through each night they are eligible to be inserted into the
            draw.{'\n\n'}
{/* 
            <HighlightText style={RuleStyles.SubHeading3}>iv) Sunday Start. </HighlightText>
            Where the main draw has been approved for a Sunday
            start, Hospitality shall begin one (1) day earlier than specified. This is
            applicable to both the singles and doubles main draw players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>NOTE: </HighlightText>
            Singles Hospitality for 96-draw tournaments begin three days
            prior to the main draw. Doubles Hospitality for 96-draw tournaments
            begin two days prior to the start of doubles play.{'\n\n'}
 */}
            <HighlightText style={RuleStyles.SubHeading3}>b) ATP Tour Masters 1000 Tournaments - 56 Main Draw.</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) Singles: </HighlightText>
            Rooms for singles players should be available beginning two
            days prior to the start of the qualifying competition for a minimum of
            seven (7) nights. Accommodations continue through the night that he plays
            his last match or until his seven (7) night minimum has been provided,
            whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>ii) Lucky Loser: </HighlightText>
            The top two (2) lucky losers to sign in the Lucky Loser list
            each day shall receive accommodation through each night he is eligible
            to be inserted into the draw. If any of the top two (2) lucky losers move
            in, then the next player receives hospitality for that night and each night
            thereafter when he is among the top two (2) lucky losers.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iii) Doubles: </HighlightText>
            Rooms for doubles players shall be available beginning two
            (2) days prior to the start of the doubles competition. For doubles players
            who stay in individual rooms, hospitality shall be for a minimum of four (4)
            nights or through the night that the player plays his last match, whichever
            is later. A doubles player who shares a room with another main draw doubles
            player shall have a minimum of six (6) nights or through the night of
            that player’s last match, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iv) Doubles Alternates: </HighlightText>
            Rooms for the top doubles alternate team shall
            be available from the night prior to the start of the doubles competition
            through each night they are eligible to be inserted into the draw.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>v) Sunday Start: </HighlightText>
            Where the main draw has been approved for a Sunday
            start, Hospitality shall begin one (1) day earlier than specified. This is
            applicable to both the singles and doubles main draw players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>c) ATP Tour 500 Tournaments Main Draw.</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) Singles: </HighlightText>
            Rooms for singles players should be available beginning on
            Friday and continuing for a minimum of six (6) nights. Accommodations
            continue through the night that he plays his last match or until his six (6)
            night minimum has been provided, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>ii) Lucky Loser: </HighlightText>
            The number one (1) lucky loser to sign in the Lucky Loser
            list each day shall receive accommodation through each night he is eligible
            to be inserted into the draw. If the number one (1) lucky loser moves
            in, then the next player receives hospitality for that night and each night
            thereafter when he is the number one (1) lucky loser.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iii) Doubles: </HighlightText>
            Rooms for doubles players shall be available beginning Saturday.
            For doubles players who stay in individual rooms, hospitality shall be
            for a minimum of two (2) nights or through the night that the player plays
            his last match, whichever is later. A doubles player who shares a room
            with another main draw doubles player shall have a minimum of five (5)
            nights or through the night of that player’s last match, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iv) Doubles 500 Lucky Loser: </HighlightText>
            The top lucky loser team to sign in the Lucky
            Loser list each day shall receive accommodation through each night they
            are eligible to be inserted into the draw. If the top lucky loser team moves
            in, then the next team receives hospitality for that night and each night
            thereafter when they are the top lucky loser.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>v) Sunday Start: </HighlightText>
            Where the main draw has been approved for a Sunday
            start, Hospitality shall begin one (1) day earlier than specified. This is
            applicable to both the singles and doubles main draw players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>d) ATP Tour 250 Tournaments Main Draw.</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>i) Singles: </HighlightText>
            Rooms for singles players should be available beginning on
            Saturday and be available to each singles player for a minimum of five
            (5) nights, regardless of when the player is finally accepted into the main
            draw (singles qualifiers). Accommodations continue through the night that
            he plays his last match or until his five (5) night minimum has been provided, whichever
            is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>ii) Lucky Loser: </HighlightText>
            The number one (1) lucky loser to sign the Lucky Loser list
            each day shall receive accommodation through each night he is eligible
            to be inserted into the draw. If the number one (1) lucky loser moves
            in, then the next player receives hospitality for that night and each night
            thereafter when he is the number one (1) lucky loser.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iii) Doubles: </HighlightText>
            Rooms for doubles players shall be available beginning Saturday.
            For doubles players who stay in individual rooms, hospitality shall be for
            a minimum of two (2) nights or through the night that the player plays his
            last match, whichever is later. A doubles player who shares a room with
            another main draw doubles player shall have a minimum of five (5) nights
            or through the night of that player’s last match, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iv) Doubles 250 Alternates: </HighlightText>
            Rooms for the top doubles alternate team shall
            be available from the night prior to the start of the doubles competition
            through each night they are eligible to be inserted into the draw.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>v) Sunday Start: </HighlightText>
            Where the main draw has been approved for a Sunday
            start, Hospitality shall begin one (1) day earlier than specified. This is
            applicable to both the singles and doubles main draw players.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>e) ATP Tour Masters 1000, ATP Tour 500 and ATP 
            Tour 250 Qualifying:</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>i) </HighlightText>
            Hotel accomodations for players in the ATP Tour Masters 1000 qualifying
            shall be available two (2) days prior to the start of the qualifying
            competition for a minimum of five (5) nights (96 draw tournament) or for
            a minimum of three (3) nights (56 draw tournament). Accommodations
            continue through the night a player plays his last match or until his five/
            three night minimum have been provided, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>ii) </HighlightText>
            Hotel accommodations for players in the ATP Tour 500 and ATP Tour 250
            singles qualifying shall be available to begin on the night before the start
            of qualifying competition and be available to each player through the night
            of the player’s last qualifying match.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iii) Doubles 500 Qualifying. </HighlightText>
            Rooms for doubles qualifying players shall be
            available from the day prior to the start of the doubles qualifying competition 
            and continue through the night of their last match.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>iv) </HighlightText>
            Successful qualifiers shall be afforded the same hotel accommodations
            as those offered to main draw singles players, however, the nights used
            under qualifying hotel accommodations shall count toward the tournament’s minimum number
            of nights required.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>B.Player Obligations - ATP Tour Tournaments</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) Singles.</HighlightText>
            Each main draw player must make a hotel reservation no later than two
            (2) weeks prior to the first Monday of the tournament with either the hotel or the
            tournament, as specified on the tournament detail sheet. Reservation changes
            can be made up to two (2) days prior to the first day of the reservation except
            that a player still competing in either singles or doubles in the prior week’s tournament
            must also confirm his reservations when travel plans are finalized. Failure to
            make or modify the reservation by the deadlines stated above shall result in the
            automatic loss of hospitality for that tournament week.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>2) Alternates.</HighlightText>
            Players that move into the main draw between the entry deadline and
            all day Thursday before the event, must notify the tournament two (2) days in advance if
            their arrival is later than Saturday, unless provisions specified above for
            players still competing apply. Players moving into the main draw after Thursday
            must notify the tournament of their arrival by by 2:00 PM Eastern Time, USA on
            the Friday prior to the event. Players moving into the main draw after this deadline
            must confirm arrival day/date with the tournament as soon as possible.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>3) Doubles Only Players.</HighlightText>
            Tournaments shall provide hospitality from Sunday. Players that
            wish to start their hospitality later than Sunday must make such change
            by 3:00 PM local time on the Saturday before the tournament starts. Players that
            fail to make their change by the deadline will be charged at the published rate for
            each night they are a no show. A refusal to pay shall result in automatic loss of
            hospitality for the remainder of the tournament week.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> 4) Penalties for breaching obligation:</HighlightText>
            a) Failure to make a reservation two (2) weeks prior to a tournament shall result
            in a player losing his hotel accommodation privileges for that tournament.{'\n\n'}
            b) Player forfeits hotel accommodations for nights reserved but not used.{'\n\n'}
            c) Player forfeits hotel accommodation privileges for four (4) consecutive tournaments
            when he either:{'\n\n'}
            i) Does not pay all incidental costs charged to a room; or{'\n\n'}
            ii) Does not personally stay in the room as required; or{'\n\n'}
            iii) Does not cancel reservation(s) previously made at tournament hotel(s);
            or{'\n\n'}
            iv) Damages a room or hotel facilities;{'\n\n'}
            v) Exhibits unprofessional or abusive behavior towards any hotel employee
            or guest;{'\n\n'}
            vi) Exhibits severe unprofessional behavior in or on the hotel premises and
            not specifically covered above.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>5) Other Reservations. </HighlightText>
            Players can request additional room reservations at the
            player rate if they contact the tournament no later than two (2) weeks prior to the
            start of the tournament.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>6) Qualifier Reservations.</HighlightText>
            Players participating in the qualifying competition who
            wish to receive a player rate at a tournament hotel must make a hotel reservation
            no later than five (5) days prior to the start of qualifying with either the hotel or the
            tournament, as specified on the tournament detail sheet. Reservation changes
            can be made up to forty eight (48) hours prior to the start of the reservation except
            that a player still competing in either singles or doubles in the prior week’s
            tournament must confirm reservations when his travel plans are finalized.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>C.Tournament Obligations - ATP Challenger Tour
              Tournaments</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1) </HighlightText>
            Complimentary hotel accommodations are mandatory at all ATP Challenger Tour
            tournaments as described in this section. Accommodations are defined as one (1)
            complimentary double room (2 beds) for the use of each player. The hotel, to be
            approved by ATP, shall be of a suitable international standard. At a minimum, hotel
            accommodations shall include complimentary breakfast with adequate breakfast options
            for the players (as determined by ATP). The room must be occupied
            by the registered player who is responsible for all incidental costs charged to the
            room and any charges resulting from any third or more person(s) staying in the
            room.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>2) Singles Main Draw. </HighlightText>
            Complimentary hotel accommodations shall be available
            for Main Draw Singles players from the first Saturday and for a minimum of five
            (5) nights, Saturday through Wednesday, or through the night of the player’s last
            singles or doubles match, whichever is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>3) Qualifying and Lucky Losers. </HighlightText>
            Complimentary hotel accommodations shall be
            available for Qualifying and Lucky Losers singles players from Saturday through
            the night of the player’s last match. Qualifiers and Lucky Losers accepted into the
            main draw shall be entitled to the same complimentary hotel accommodations as
            offered to main draw singles players; however, the nights used under qualifying
            hotel accommodations shall count toward the tournament’s minimum nights entitlement.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>4) Doubles Main Draw. </HighlightText>
            For doubles only players who stay in individual rooms,
            complimentary hotel accommodations shall be available from Sunday through
            the night of the player’s last match. A doubles only player who shares a room with
            another main draw doubles only player shall have a minimum of six (6) nights,
            Sunday through Friday, or through the night of that player’s last match, whichever
            is later.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>5) </HighlightText>
            Main draw and qualifying players who are no longer eligible for accommodations
            shall receive the published tournament room rate if they extend their stay within
            the date range of the tournament.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>6) </HighlightText>
            Main draw players (singles and doubles players, includes partner) who have withdrawn
            on-site for medical reasons and who are examined by the tournament
            Doctor shall receive complimentary hotel accommodations through the night of
            the examination.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>7) </HighlightText>
            Tournaments using more than one (1) hotel as the official hotel may not make
            player hotel assignments based on a player’s entry into the event as a singles or
            doubles player.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>8) </HighlightText>
            Any ATP Challenger Tour tournament which has been approved for a Saturday
            start shall make complimentary hotel accommodations available one (1) day earlier than
            specified. At a minimum, any ATP Challenger Tour tournament which has
            been approved for a Tuesday start shall make complimentary hotel accommodations available
            one (1) day later than specified.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>9) Confirmation of Reservation. </HighlightText>
            ATP Challenger Tour Tournaments shall oversee requests for
            complimentary hotel accommodations and confirm reservati
            through a platform designated by ATP, as specified on the ATP Challenger Tour
            tournament’s detail sheet, to players stating the hotel name, address, telephone
            number, the check in date and a notice that cancellations or changes can be
            made up to two (2) days prior to the reservation’s start date.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>10) </HighlightText>
            The official hotel(s) shall be instructed to take a reasonable credit card guarantee
            from players and/or support team members at the time of check in for any incidentals or
            room nights not covered under the ATP Challenger Tour tournament’s
            obligation. ATP shall not be responsible for managing and/or covering any unpaid
            charges.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>D.Player Obligations - ATP Challenger
             Tour Tournaments</HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}> 1) Singles Players Who Gain Acceptance In The Main Draw Through Advance
              Entry.</HighlightText>
            Each player must make their hotel room request no later than 11:59 p.m.
            (23:59) local time at the tournament ten (10) days prior to the tournament’s start
            through the platform designated by ATP, as specified on the tournament’s detail
            sheet.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>2) Doubles Only Players Who Gain Acceptance In The Main Draw Through Advance Entry. </HighlightText>
            Each player must make their hotel room request no later than 11:59
            p.m. (23:59) local time at the tournament on five (5) days prior to the tournament’s
            start, through the platform designated by ATP, as specified on the tournament’s
            detail sheet.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>3) Alternates.</HighlightText>
            Players moving into the qualifying or main draw between the deadlines
            outlined in sections D.1) and D.2) hereinbefore set forth and four (4) days
            prior to the Tournament Monday shall make their room request no later than 11:59
            p.m. (23:59) local time at the tournament four (4) days before the Tournament
            Monday through the platform designated by ATP, as specified on the tournament’s
            detail sheet, unless provisions for players still competing hereinafter set forth apply.
            Players moving into the qualifying or main draw after this deadline shall make
            their room request and notify the tournament of their arrival date without delay,
            through the platform designated by ATP, as specified on the tournament’s detail
            sheet, unless provisions for players still competing hereinafter set forth apply.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>4) Doubles Only Players Who Gain Acceptance In The Draw Through On-Site
              Entry.</HighlightText>
            Players must make their hotel room request and notify the tournament by
            3:00 p.m. (15:00) local time on Saturday at the tournament, through the platform
            designated by ATP, as specified on the tournament’s detail sheet.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>5) Singles and Doubles.</HighlightText>
            Players accepted both in the singles and doubles event
            shall comply with the room request deadline of whichever (singles or doubles)
            they gain acceptance in first.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>6) Players Still Competing In The Previous Week’s Tournament.</HighlightText>
            A player still competing in either singles or doubles in the prior week’s tournament must keep
            the tournament informed if his reservation(s) may change and confirm the final
            arrival date with the tournament when his travel plans are finalized.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>7) Cancellation Or Change of Reservation.</HighlightText>
            Any player who needs to cancel or
            amend his reservation to a later date must do so by 6:00 p.m. (18:00) tournament
            local time four (4) days prior to the tournament’s start through the platform designated
            by ATP, as specified on the tournament detail sheet. Players withdrawing
            after the preceding sentences deadline, must cancel their reservation as soon as
            possible after the withdrawal.{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>8) </HighlightText>
            Notwithstanding the provisions above, any cancellation or change of reservation
            less than two (2) days before the start of the reservation, is subject to ATP approval.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>E. Penalties for Breaching Obligation:</HighlightText>{'\n\n'}

            1) For the avoidance of doubt, forfeiture of hotel accommodations privileges covers
            the player, his support team member and/or doubles partner. ATP, in its sole discretion,
            shall determine if a player forfeits any hotel accommodations privileges.{'\n\n'}

            2) Failure to make a reservation by any of the deadlines hereinbefore set forth shall
            result in that player’s forfeiture of hotel accommodations for the tournament’s
            week.{'\n\n'}

            Case: A player accepted into the Singles Main Draw of a Challenger
            Tour event did not make his hotel reservation by the deadline and
            the tournament decided to withdraw his hotel accommodation privileges. Player signs
            in on-site for Doubles on Saturday. Is he entitled
            to hotel accommodations as a Doubles player?{'\n\n'}

            Decision: No, the player forfeits hotel accommodation privileges for
            the tournament week (singles and doubles).{'\n\n'}

            a) Failure to make a reservation change by the deadline shall result in that player’s
            forfeiture of hotel accommodations for nights reserved but not used. In
            addition, ATP, on behalf of the tournament, shall have the right to charge the
            player at the official tournament hotel’s published rate for each night he did
            not use the room. Any refusal to pay shall result in that player’s forfeiture of
            hotel accommodations for the tournament’s week and may be subject to provisions under
            the Code of Conduct.{'\n\n'}

            b) Failure to cancel a reservation by the set deadline, including for players who
            have withdrawn on-site at a tournament in the previous week, shall result in
            that player being charged at the published hotel room rate for each night he
            did not use the room. Any refusal to pay shall be subject to provisions under
            the Code of Conduct in addition to settling the hotel charge.{'\n\n'}

            c) A player may be subject to the provisions under the Code of Conduct if:{'\n\n'}

            i) Does not pay ‘no show’ charges, including any applicable taxes; or{'\n\n'}

            ii) Does not pay all incidental costs charged to a room; or{'\n\n'}

            iii) Does not personally stay in the room as required; or{'\n\n'}

            iv) Damages a room or hotel facilities; or{'\n\n'}

            v) Exhibits unprofessional or abusive behavior towards any hotel employee
            or guest; or{'\n\n'}

            vi) Exhibits severe unprofessional behavior in or on the hotel premises and
            not specifically covered above.
            The payment of any monetary fines under the provisions of the Code of
            Conduct shall apply in addition to settling any outstanding charges and/or
            damages.{'\n\n'}

            d) Players shall have the right to appeal any of the above fines and charges
            which must be submitted in writing to the ATP Fines Committee.


            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule20', next: 'Rule189', nav: navigation }} />
    </>
  );
}


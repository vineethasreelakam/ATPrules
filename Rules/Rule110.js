import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';


export default function Rule110({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.20 Lucky Losers, Substitutions and Vacancies</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Lucky Loser Selection</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>32/16Q Draw </Text>events shall use the same protocol as secified for ATP Tour events in
                        section 7.20 A. 1) below.
                        {'\n\n'}
                        A player may be entered in the main draw of a tournament if he meets the criteria
                        outlined for a lucky loser.
                        {'\n\n'}
                        1) Lucky losers are players who have lost in the final round of the qualifying event
                        or, if more lucky losers are required, those players who have lost in the previous
                        qualifying round(s). Lucky Losers shall be selected based on the computer rankings as follows: If there are no vacancies when the qualifying event has been
                        completed, then the order of the Lucky Loser list shall be selected on the basis of
                        their position on the Pepperstone ATP Rankings (singles or doubles) list used for
                        determination of qualifying seeding (protected ranking is not considered). If there
                        is a vacancy in the main draw when qualifying is completed then the order of the
                        two (2) highest ranked players shall be randomly drawn, thereafter the order shall
                        follow the players’ rankings, unless there are two (2) or more withdrawals at the
                        time the Qualifying competition is finished in which case the size of the random
                        draw will be the number of withdrawals plus one (1). In the case where players
                        from the previous round are included in the draw they will be placed behind all
                        players who have lost in the final round of qualifying. Only those accepted into the
                        qualifying competition may sign in as lucky losers.
                        {'\n\n'}
                        2) The lucky loser list shall be posted each day at least one (1) hour before the signin deadline, which shall be one-half (1/2) hour before the first scheduled match
                        of the day. If rain or other disruptions occur, then the Supervisor can change the
                        deadline as appropriate. Such list shall not be available for sign-in on the preceding day. All lucky loser sign-in deadlines must be placed on each day’s schedule
                        of play.
                        {'\n\n'}
                        3) The sign-in for doubles lucky losers or alternates shall follow the same procedures as the sign-in for singles lucky losers or alternates. One member of a lucky
                        loser team may sign in for the team. If there is no qualifying competition, substitutions shall come from the alternate list of teams not accepted directly into the
                        main draw through the on-site sign-in procedure. In either case, only substitutions
                        of the originally paired teams are permitted. If two (2) or more positions become
                        available at the same time during the preceding period, the positions to be occupied shall be determined by drawing.
                        {'\n\n'}
                        a) There shall be one Lucky Loser / alternate sign-in sheet that will have all
                        eligible Lucky Loser / alternate* teams listed.
                        {'\n\n'}
                        b) The system of merit for alternates is based on the same method as used in
                        the system of merit for entry.
                        {'\n\n'}
                        c) The system of merit for Lucky Losers is based on the same method as used
                        to determine seeding.
                        {'\n\n'}
                        4) Vacancies in ATP Tour 500 Doubles main draw will be filled by the following method:
                        {'\n\n'}
                        a) Team losing in the final round of qualifying shall be the number 1 lucky loser;
                        and
                        {'\n\n'}
                        b) The two teams losing in the first round of the doubles qualifying shall be
                        numbers two (2) and three (3) based upon their ranking as used in the determination of seeds; and then
                        {'\n\n'}
                        c) All teams who signed in for the on-site alternate entry list and were not accepted or could not participate in the qualifying and shall be ordered based
                        upon their rank on the acceptance list.
                        {'\n\n'}
                        d) Teams who did not enter through the online on-site alternate sign-in are eligible* to sign the daily alternate sign-in and are placed below those teams on
                        the alternate list as defined in a), b) and c) above.
                        {'\n\n'}
                        e) One player from each team must sign the daily lucky loser / alternate sign-in
                        sheet to be eligible to fill a vacancy.
                        {'\n\n'}
                        * To be eligible, alternate teams who did not enter through the online protocol
                        must sign-in on the first day of the doubles competition.
                        {'\n\n'}
                        5) Vacancies in ATP Masters 1000 and ATP Tour 250 Doubles main draws occurring
                        after the withdrawal deadline but prior to the draw being made will be filled by the
                        next team on the on-site alternate list.
                        {'\n\n'}
                        6) Vacancies in ATP Masters 1000 and ATP Tour 250 Doubles main draws occurring
                        after the draw has been made will be filled by the first of the following methods:
                        {'\n\n'}
                        a) Teams who were not accepted into the main draw through the on-site alternate sign-in list; then
                        {'\n\n'}
                        b) Teams who did not enter through the online on-site alternate sign-in and
                        teams where one member of the team is eligible to re-pair following the withdrawal of his partner are eligible* to sign the daily alternate sign-in and are
                        placed below those teams on the alternate list who did enter through online
                        on-site alternate sign-in method.
                        {'\n\n'}
                        * To be eligible, alternate teams who did not enter through the online protocol
                        must sign-in on the first day of the doubles competition.
                        {'\n\n'}
                        7) Teams may remain on the alternate list for multiple events in the same week,
                        however, they may only sign-in at one of those events on any given day.
                        {'\n\n'}
                        8) Vacancies in Challenger Doubles main draw will be filled from the on-site alternate list using the same protocol as used for entries. Teams who did not enter
                        through the on-site sign-in and teams where one member of the team is eligible
                        to re-pair following the withdrawal of his partner are eligible* to sign the daily
                        alternate sign-in and are placed below those teams on the alternate list who did
                        enter through the on-site sign-in method.
                        {'\n\n'}
                        * To be eligible, alternate teams who did not enter through the on-site protocol
                        must sign-in on the first day of the doubles competition.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A team submits an advance entry for a 250 tournament with
                        one of the players using a protected ranking. They are among 6
                        teams not ranked high enough to be selected. The other 5 teams
                        are using their best of rankings. Where is the team using the protected ranking placed on the alternate list if they are the next team
                        in based on that ranking or the 4th highest team using their best of
                        ranking?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The team using the protected ranking is placed at the
                        top of the alternate list. Protected ranking is used for entry into a
                        tournament either directly or as an alternate (either an advanced
                        entry or as an on-site entry).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Who is inserted as the doubles alternate?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case 1:</Text> After the sign-in deadline for doubles alternate has closed,
                        there are 7 teams signed-in. At 16:55 a team scheduled to play at
                        17:00 withdraws due to injury of one of the players. The #1 team
                        on the alternate list is inserted into the draw. The match is called at
                        17:00. It is discovered that the inserted team is at the hotel and at
                        17:15 the alternate is defaulted for punctuality. What should be done
                        now?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> If an eligible alternate team cannot be found who is ready
                        to go on court by 17:20, then a walkover is awarded. 7.20 B 2) b)
                        states that to be eligible for substitution, a lucky loser (alternate)
                        must “be ready to play within five (5) minutes after the announcement of a default for punctuality”.
                        <Text style={RuleStyles.SubHeading3}>ATP POLICY:</Text> While every effort must be made to locate an eligible,
                        signed-in alternate team, the 15 minute punctuality rule must be enforced to protect the opponent who is ready to play. It is incumbent
                        upon the teams signed-in as alternates to be available, reachable
                        and ready to go when the match is called or within 5 minutes of the
                        announcement of a punctuality default. In the instance of one player
                        on court in singles, his partner must be available, reachable and
                        ready to go, the team would be inserted and the match rescheduled.
                        This policy extends to Lucky Losers also.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case 2:</Text> A doubles match is called at 11:00 AM and one of the
                        teams cannot be found. At 11:15 AM a punctuality default is awarded. How is the vacancy filled?
                        Decision: The highest ranked doubles team from the alternate list
                        who are eligible to be inserted in the draw and are ready to play
                        within the five (5) minute allotted time period will replace the defaulted team. 7.20 B 2) b) states that to be eligible for substitution, a
                        lucky loser (alternate) must “be ready to play within five (5) minutes
                        after the announcement of a default for punctuality”.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP POLICY:</Text> Alternates (Lucky Losers) are to be ready when
                        called upon to fill a vacancy. By signing the daily alternate (Lucky
                        Loser) list they are declaring that they are on-site and ready to play,
                        if needed. While every effort will be made by ATP staff to locate
                        the alternate/LL teams it is the alternate/lucky loser teams/players
                        responsibility to keep ATP staff informed of their whereabouts and
                        to remove their names if they leave the site or otherwise become
                        unavailable for substitution.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Advance Entry Qualifying</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> How are vacancies handled for ATP Tour qualifying events if
                        there are no eligible players remaining on the Advanced Entry list
                        and there are not enough players who signed the Friday On Site
                        Alternate list to fill the draw?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>If there are no eligible players remaining on the Advanced Entry list and there are not enough players who signed the
                        Friday On Site Alternate list to fill the draw then Byes should be
                        awarded to the seeded players by ranking order. Any additional
                        vacancies occurring after the draw will be filled from the “day of”
                        Alternate sign-in list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> If there are not enough teams who signed the Qualifying
                        Alternate list to fill the draw then Byes should be awarded to the
                        seeded teams by ranking order. Any additional doubles Qualifying
                        vacancies occurring after the draw will be filled from the “day of”
                        Alternate sign-in list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Lucky Loser/Alternate Substitution</Text>
                        {'\n\n'}
                        1) A lucky loser/alternate shall be inserted in the appropriate position as a substitution for any player who withdraws or is withdrawn before the first ball of his first
                        match is struck.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>NOTE:</Text> A player winning a match by walkover is considered to have played a
                        match.
                        {'\n\n'}
                        2) In order to be eligible for substitution, a lucky loser/alternate must:
                        {'\n\n'}
                        a) Sign the lucky loser/alternate sign-in record at least one-half (1/2) hour prior
                        to the first scheduled match of each day; and
                        {'\n\n'}
                        b) Be ready to play within five (5) minutes after the announcement of a default
                        for punctuality.
                        {'\n\n'}
                        c) If the eligible lucky loser/alternate is not available to play, he shall be placed
                        at the bottom of the lucky loser/alternate priority list for that day corresponding to the qualifying round in which he lost. If the eligible player is playing in
                        the doubles event at the time he is called as a lucky loser/alternate in singles,
                        the singles match may be rescheduled so he can fill the lucky loser/alternate
                        position, provided the Supervisor determines that the rescheduling does not
                        cause an unreasonable disruption of the schedule or does not cause the winner to play a second match that day; otherwise the next available lucky loser/
                        alternate shall be selected to fill such vacancy.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Alternate Sign-In Procedures</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>The two (2) players ahead on an alternate list do not sign in
                        1/2 hour before the singles qualifying matches are to begin. One (1)
                        of the players arrives on-site just before it is known that an alternate
                        is going to be needed. Who gets in?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Neither of the two (2) players. In order to be eligible for
                        substitution, an alternate must sign in before the deadline and must
                        be ready to play within five (5) minutes of being called.
                        Doubles Alternate at two tournaments?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A team signs in for doubles at two tournaments the same
                        week. They do not get into the main draw, but are the #1 alternate
                        at both events. The team signs the Alternate list at tournament A
                        on Monday and Tuesday and then wants to sign the Alternate list at
                        tournament B on Wednesday. Are they permitted to do this?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes, however, a team is only eligible to be signed in on
                        one “live” list per day.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Eligible for Lucky Loser - ATP Tour</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> May a player or team sign the lucky loser sign-in sheet if they
                        are not accepted into the qualifying competition?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. To be eligible as a lucky loser, a player or team must
                        have played and lost in the qualifying event.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Extending Closing Times</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> The first-round singles matches are scheduled to start at 10
                        a.m. A steady rain is falling at 9 a.m. and it is decided to postpone
                        the start of play until 11 a.m. should the lucky loser sign-in be
                        extended?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. Extend the deadline to 10:30 a.m.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> The lucky loser Sign-in closed at 10:30. A player arrives at
                        10:45 to sign in saying that:
                        {'\n\n'}
                        1. The Referee told me that the deadline would be at 11:00; or
                        {'\n\n'}
                        2. Somebody on the phone said the deadline was 11:00; or
                        {'\n\n'}
                        3. Tournament transportation was 45 minutes late.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text>
                        {'\n\n'}
                        1. Allow the player to sign in. Information given by the Referee (if
                        verified) must be honored.
                        {'\n\n'}
                        2. Sign-in not allowed. Players receiving information over the phone
                        do so at their own risk unless they speak directly to the Supervisor
                        or Referee.
                        {'\n\n'}
                        3. Sign-in not allowed. The player is responsible for arriving on time.
                        Which Lucky Loser to Insert?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> On Monday before the last singles match has gone on court,
                        a player whose first-round singles match is scheduled for Tuesday is
                        forced to withdraw because of injury. No one signed the lucky loser
                        list on Monday. How is the vacancy resolved?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>The vacancy should be filled from Monday’s lucky loser
                        list. However, since no one signed the lucky loser list on Monday,
                        the vacancy shall be filled from the Tuesday lucky loser list, if any
                        eligible players sign in. If no one signs on Tuesday, then a walkover
                        shall be awarded.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Who Goes In?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player withdraws from the singles event on Tuesday. His
                        singles match was not scheduled until Wednesday. There was
                        a singles lucky loser sign-in on Tuesday. The last singles match
                        scheduled for Tuesday has not gone on court. Is the vacancy filled
                        from Tuesday or Wednesday’s lucky loser sign-in?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Tuesday’s sign-in.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C. Vacancies - Doubles</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>ATP Tour</Text>
                        {'\n\n'}
                        1) A team shall constitute a doubles entry. If either of the players of a team cannot
                        play, that doubles entry is subject to withdrawal and substitution.
                        tion position (the re-pairing team must have a combined
                        entry ranking better than the first alternate team to remain as a Direct Acceptance).
                        {'\n\n'}
                        ● If the new combined entry ranking is worse than the first alternate team,
                        the new team will lose their Direct Acceptance position and be placed on
                        the Alternate List as per their new combined entry ranking.
                        {'\n\n'}
                        ● If a team is re-pairing on the Alternate List, and the new combined entry
                        ranking is BETTER than the alternates above them, they will keep their
                        original position on the list and NOT move up on the Alternate list.
                        {'\n\n'}
                        ● If a team is re-pairing on the Alternate List, and the new combined entry
                        ranking is WORSE than the alternates below them, they WILL move down
                        on the Alternate List.
                        {'\n\n'}
                        The re-pairing team entry must be received prior to the withdrawal deadline by a
                        player relations staff member or the ATP Supervisor. If the entry is not received
                        by the deadline, the team will be withdrawn and the list will drop to the next active
                        team, which will be considered committed at that point.
                        Players are allowed to use the re-pair option up to 4 times per a calendar year.
                        {'\n\n'}
                        3) If the withdrawal is from the advance acceptance list and occurs after the 10 AM
                        (EST) deadline on the Friday before the event then an additional on-site entry
                        position is created for each withdrawal.
                        {'\n\n'}
                        a) For both 2 and 3 above, the partner of the withdrawing player may enter doubles or sign in for the singles qualifying of the same or another event through
                        the on-site entry method; or
                        {'\n\n'}
                        b) If the withdrawal was due to one or both players being accepted into the main
                        draw singles of another ATP Tour or ATP Challenger Tour event, then both
                        players may enter the doubles of that event through the appropriate on-site
                        entry procedure.
                        {'\n\n'}
                        4) If a player from a team that is a direct acceptance withdraws based on a medical
                        reason or other unavoidable circumstances after the on-site sign-in deadline, his
                        partner may enter as an on-site alternate with another player who has not already
                        been accepted into the main draw doubles event. This new team may be considered for acceptance based on its position in the on-site entry list including any
                        entry protection position, as specified in 7.20 A. 6) b).
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Can I Sign In For Q’s after Withdrawing from Doubles?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player is withdrawing from a Doubles Advanced Entry list
                        where he is a direct acceptance. Can he sign in for the singles
                        qualifying of another ATP or Challenger tournament that same week
                        or play doubles somewhere else?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. However, his partner, who was not the reason for the
                        withdrawal, can sign in for singles qualifying or find another partner
                        and sign-in on-site for doubles at the same or another tournament.
                        Can I Withdraw from Doubles to Accept a Singles Wild Card?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player, who is main draw in doubles, is offered a singles
                        wild card into an ATP Tour or ATP Challenger Tour event. Can he
                        withdraw from main draw doubles to accept this singles wild card at
                        another event?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. The player can withdraw from the doubles before
                        the doubles on-site entry deadline to accept a wild card into the
                        singles. This would be considered the same as the player being
                        accepted into the main draw singles of another ATP Tour or ATP
                        Challenger Tour tournament which is allowed.
                        Partner Injured: Who May Replace Him?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player’s doubles partner withdraws after the on-site sign-in
                        deadline but before the draw is made. In looking for a new partner,
                        is the withdrawing player’s partner allowed to choose another partner from the qualifying draw?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. The player seeking a new partner may not team
                        with any player who is accepted into the qualifying or main doubles
                        draws. He may re-enter with any player that he chooses as long as
                        their combined position in the Pepperstone ATP Rankings qualifies
                        them by virtue of the system of merit for doubles entries. He may
                        not select from players who will be or who are in the qualifying draw
                        based on the sign-in sheet.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Challenger Tour</Text>
                        {'\n\n'}
                        1) A team shall constitute a doubles entry. If either of the players of a team cannot
                        play, that doubles entry is subject to withdrawal and substitution.
                        {'\n\n'}
                        2) If a player from a team that is a direct acceptance in the main draw withdraws
                        based on a medical reason or other unavoidable circumstances after the on-site
                        sign-in deadline but before the draw, his partner may enter again with another
                        player who has not already been accepted into the main draw doubles event. This
                        new team may be considered for acceptance based on its position in the entry list
                        including any entry protection position.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Remake of the Draw</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> On Monday morning, two (2) of the four (4) seeded teams
                        withdraw from a 16-draw doubles event. The doubles competition
                        has not yet begun. May the draw be remade?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. However, it is the option of the tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D.Prior to Qualifying Competition </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) ATP Tour Singles.</Text> After the main draw is made and prior to the commencement
                        of the qualifying competition, all vacancies created by the withdrawal of unseeded
                        players including wild card withdrawals, shall be filled by the next highest positioned player(s) on the original acceptance list. If the vacancy was created by the
                        withdrawal of a seed, then the procedures for replacing seeds are followed and
                        the vacancy created by replacing the seed is filled by the next highest positioned
                        player(s) on the original acceptance list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Tour Doubles.</Text> After the main draw is made and prior to the commencement of the qualifying competition, all vacancies created by the withdrawal of unseeded teams including wild card withdrawals, shall be filled by the next highest
                        positioned player(s) on the on-site entry list. If the vacancy was created by the
                        withdrawal of a seed, then the procedures for replacing seeds are followed and
                        the vacancy created by replacing the seed is filled by the next highest positioned
                        player(s) on the on-site entry list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) ATP Challenger Tour.</Text> After the withdrawal deadline and prior to the start of
                        Qualifying, vacancies will be filled in ranking order from the original main draw
                        acceptance list by players who have preserved their position on the list. Players
                        from the main draw alternate list who are directly accepted into qualifying are considered to have preserved their eligibility. A player can only preserve his eligibility
                        on one list. If there are no Alternates from the original main draw acceptance list
                        who have preserved eligibility, the vacancy will be filled by the highest ranked
                        player from the qualifying or alternate list using the Pepperstone ATP Rankings,
                        and then the Pepperstone ATP Doubles Rankings, used for seeding.
                        {'\n\n'}
                        If the vacancy was created by the withdrawal of a seed, then the procedures for
                        replacing seeds are followed and the vacancy created by replacing the seed is
                        filled by the next highest positioned player(s) from that event’s alternate sign-in
                        list, following the protocol specified above.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour Main Draw Vacancy Before Qualifying Starts</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> After making the qualifying draw, a vacancy occurs in the
                        main draw. How is the vacancy filled?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>If the qualifying competition has begun, the vacancy is
                        filled by the eligible lucky loser. If the qualifying competition has
                        not begun, the vacancy is filled by the next player on the original
                        acceptance list.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>E. Qualifying started or finished</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) During Qualifying Competition.</Text> If a lucky loser position should become available during the qualifying competition, it shall be treated the same as the qualifying places for placement in the main draw. If a seeded player or team withdraws
                        after the main draw has been made but prior to the release of the order of play for
                        the first day of main draw in that event, the vacancy created by the withdrawal of
                        a seed shall be filled by the following method:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) 32/48/64/96 Singles </Text>Draw and 16/24/32 Doubles Draws. The vacancy shall
                        be filled by the next highest positioned player or team in the main draw eligible to be seeded. The appropriate lucky loser shall fill the remaining vacancy.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>b) 28 Draw. </Text>If the vacancy involves a seed #1-4, then seed #5 moves to the
                        vacated seed position and the next highest positioned player in the main draw
                        eligible to be seeded shall be placed in the position vacated by the #5 seed.
                        The appropriate lucky loser shall fill the remaining vacancy. If the vacancy
                        involves a seed #5-8, then the next highest positioned player in the main
                        draw eligible to be seeded shall be placed in the vacated seed position. The
                        appropriate lucky loser shall fill the remaining vacancy.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>c) 56 Draw. </Text>If the vacancy involves a seed #1-8, then seed #9 moves to the
                        vacated seed position and the next highest positioned player or team in the
                        main draw eligible to be seeded shall be placed in the position vacated by
                        the #9 seed. The appropriate lucky loser shall fill the remaining vacancy. If the vacancy involves a seed #9-16, then the next highest positioned player
                        or team in the main draw eligible to be seeded shall be placed in the vacated
                        seed position. The appropriate lucky loser shall fill the remaining vacancy.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Seeds Withdraw or Are Withdrawn</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> The team seeded 4th withdraws after the draw but prior to
                        the order of play being released for the first day of main draw. How
                        is the vacancy filled?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> For a 16 team draw, the vacancy created by the removal
                        of a seeded team is filled by the next highest positioned team eligible to be seeded. The appropriate alternate or lucky loser team shall
                        fill the remaining vacancy.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Qualifier Eligible To Be Seeded</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A qualifier’s ranking was high enough for him to be seeded in
                        the main draw. The main draw was completed prior to the end of the
                        qualifying event. After the player had qualified but prior to the order
                        of play being released for the first day of main draw a seeded player
                        withdraws. Is the qualifier eligible to be seeded?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. The successful qualifier shall be accorded the same
                        right to be seeded as the other players who have gained entry as
                        Direct Acceptances, Wild Cards, Special Exempt etc. As per ATP
                        rules a player may not use his Protected Ranking for seed purposes
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Other Vacancy Procedures After Qualifying Starts.</Text>
                        {'\n\n'}
                        a) After the qualifying commences (when the first ball of the first match is struck),
                        main draw vacancies may only be filled by eligible lucky losers (and eligible
                        alternates in the case of a Challenger event).
                        {'\n\n'}
                        b) If a lucky loser position becomes available after the places for qualifiers are
                        drawn for the main draw but before the first day of the main draw event, the
                        highest positioned lucky loser shall be inserted into the draw provided he can
                        be notified.
                        {'\n\n'}
                        c) If a position becomes available during the day, the highest positioned player
                        who has signed that day’s lucky loser sign-in record shall be inserted at the
                        time the withdrawal is confirmed.
                        {'\n\n'}
                        d) Positions becoming available after the start of play for the last match of each
                        day in that event (singles or doubles) shall be filled by the highest positioned
                        player who signs the lucky loser sign-in record on the successive day of play.
                        {'\n\n'}
                        e) When two or more positions become available at the same time, the positions
                        to be occupied by each lucky loser shall be determined by drawing.
                        {'\n\n'}
                        f) In all such cases, the Supervisor is responsible to notify a player(s) that he is
                        in the draw.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>When is the withdrawn player replaced?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player withdraws from the main draw 2 hours prior to the
                        close of the lucky loser sign-in deadline. A few minutes later, the
                        highest ranked lucky loser signs in. There is still one hour left before
                        the lucky loser sign-in deadline closes. As the player who signed-in
                        is the highest ranked LL, is he inserted at that moment, or is the
                        vacancy filled after the sign-in deadline passes?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The player is not inserted in the draw until after the signin deadline as others may withdraw necessitating drawing for the
                        available spots. Multiple withdrawals occurring after the last match of that event began on the previous day, and the time that the signin deadline closes on the next day, are considered to have occurred
                        at the same time and the positions to be occupied by each lucky
                        loser shall be determined by drawing.
                        {'\n\n'}
                    </Text>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule109', next: 'Rule111', nav: navigation }} />
        </>
    );
}
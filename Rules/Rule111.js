import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule111({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.21 Match Scheduling</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>A.Scheduling Committee </Text>
                        {'\n\n'}
                        The scheduling of matches and daily order of play in all tournaments shall be prepared by the Referee and/or Tour Manager and approved by a committee composed
                        of the Tournament Director, Supervisor, Referee and the Tour Manager. In cases
                        where the scheduling committee cannot agree, the Supervisor shall make the final
                        decision.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>B.Tournament Week Plan </Text>
                        <Text style={RuleStyles.SubHeading3}>1) Main Draw.</Text>a The main draw should be scheduled so that the first round in singles
                        begins on Monday and the finals in singles and doubles are completed by Sunday, unless the tournament has special permission from ATP forty-two (42) days
                        in advance of the event to complete the tournament on Saturday or on Monday.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>) Considerations and Priorities. The following priorities in the order listed
                            should be followed:</Text>a
                        {'\n\n'}
                        i) Schedule the halves of the draw together particularly from Wednesday
                        onward. At indoor tournaments, second rounds can be split within sections if necessary to avoid Monday/Thursday (singles).
                        {'\n\n'}
                        ii) Schedule quarters together as an alternative.
                        {'\n\n'}
                        iii) Avoid Monday/Thursday (singles) or Tuesday/Friday (doubles). Schedule
                        some doubles on Monday.
                        {'\n\n'}
                        iv) The singles quarterfinal matches on Friday should be scheduled by
                        halves and as close together as possible.
                        {'\n\n'}
                        v) Schedule one doubles semi-final on Friday (cannot be done if there are
                        two Saturday sessions).
                        {'\n\n'}
                        vi) When weather or other unavoidable circumstances cause a disruption
                        in the schedule, a player may not be scheduled for more than three (3)
                        matches in a day without his consent.
                        {'\n\n'}
                        1. The matches may not all be singles without the consent of the player.
                        {'\n\n'}
                        2. Completion of a match in progress shall count as one (1) match.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) ATP Tour Qualifying.</Text> One (1) round per day except when weather or other unavoidable circumstances require two (2) rounds to be played on the same day.
                        {'\n\n'}
                        a) In ATP Tour events, one round shall be played on Saturday and the final
                        round shall be played on Sunday except when weather or other unavoidable
                        circumstances forces two rounds to be played on Sunday.
                        {'\n\n'}
                        b) In ATP Tour 250 events, one round shall be played on Sunday and the final
                        round shall be played on Monday except when weather or other unavoidable
                        circumstances forces two rounds to be played on Monday.
                        {'\n\n'}
                        ATP Tour 250 events may elect and will be approved for qualifying to be held
                        on Saturday and Sunday. A notification for Saturday – Sunday qualifying must
                        be submitted in writing by the tournament and received by the appropriate
                        ATP regional office no later than six (6) months prior to the first Monday of the
                        event.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) ATP Challenger Tour Qualifying.</Text> One (1) round per day except when weather
                        or other unavoidable circumstances require two (2) rounds to be played on the
                        same day.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Daily Scheduling Overview </Text>
                        {'\n\n'}
                        1) Feature singles matches should be scheduled after the scheduling committee
                        considers the needs of players, television, tournament and the public. It is recommended that a tournament schedule no more than two (2) evening matches to
                        begin no later than 8 p.m. local time.
                        {'\n\n'}
                        2) The scheduling committee must schedule a doubles match on all show courts
                        (including Center Court) as follows:
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour 250 (16 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour 250 (24 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        o Four (4) doubles matches must be scheduled on the Grandstand or
                        second court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour 500 (16 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour 500 (24 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        o Four (4) doubles matches must be scheduled on the Grandstand or
                        second court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000 (24 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the next two (2)
                        best courts with at least four (4) out of the seven (7) scheduled on the
                        second overall best court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>ATP Tour Masters 1000 (32 draw doubles)</Text>
                        {'\n\n'}
                        o Seven (7) doubles matches must be scheduled on the Center Court
                        during the tournament week.
                        {'\n\n'}
                        o Nine (9) doubles matches must be scheduled on the next two (2)
                        best courts with at least four (4) out of the nine (9) scheduled on the
                        second overall best court.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Final. </Text>The doubles final is to be scheduled prior to the singles final. It is recommended that the time of the final is no earlier than two (2) hours before the
                        singles final, unless otherwise approved by ATP.
                        {'\n\n'}
                        It is further recommended that the tournament begin each session (day and
                        night) with a doubles match as an “opening act”.
                        {'\n\n'}
                        If exceptional circumstances do not allow for a doubles match to be scheduled on the Center Court or a designated show court, then best efforts shall
                        be made by the scheduling committee to schedule an additional doubles
                        match on one of the other show courts, if any.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>a) Exceptional Circumstances may include, but are not limited to, the following:</Text>
                        {'\n\n'}
                        i) Contractual television obligations.
                        {'\n\n'}
                        ii) Security issues.
                        {'\n\n'}
                        iii) Weather or other scheduling interruptions.
                        {'\n\n'}
                        iv) Combined with WTA Tour event.
                        {'\n\n'}
                        v) Unforeseen circumstances as determined by the scheduling committee.
                        Definition of show court(s): Center Court and all other courts that are used to
                        televise matches; or, if only Center Court is televised, then the next court with the
                        greatest number of spectator seating.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Violation of this section may subject the Tournament to the penalties set
                            forth in VIII. The Code - section 8.02 Tournament Violations.</Text>
                        {'\n\n'}
                        3) Normally, matches are scheduled using “to follow on assigned court.” However,
                        assigning feature matches a time or “not before” basis is permissible. The Tournament Director should understand that scheduling “not before” in a Center or show
                        courts may result in a court not having a match until the announced time.
                        {'\n\n'}
                        4) First round doubles matches can be scheduled on a “not before” basis which will
                        then allow for the fixing of the lucky loser or alternate sign-in deadline.
                        {'\n\n'}
                        5) Starting matches after Midnight is not recommended (after 1:00 a.m. should be
                        avoided). The ATP Supervisor may postpone a match after examining the impact
                        on the tournament and the players. If postponing the match is not possible, then
                        consideration must be given to moving a match to another court, if available.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D. Order of Play </Text>
                        {'\n\n'}
                        The daily order of play is the published summary of all matches scheduled for a particular day.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Release Deadline. </Text>Once the scheduling committee determines the order of play,
                        it should be released no later than 10 p.m. local time at the tournament.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Change. Once released,</Text> the order of play may not be changed except upon the
                        approval of the Supervisor.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Notification. </Text>
                        {'\n\n'}
                        a) It is the responsibility of all players to ascertain their schedules from the Supervisor/Referee for each day’s play.
                        {'\n\n'}
                        b) The Supervisor/Referee should also use all available means to notify each
                        player of his schedule.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) Notes / Reminders. Daily order of play must have footnotes reflecting the following:</Text>
                        {'\n\n'}
                        a) The singles (and doubles) lucky loser sign-in deadline is______________(on
                        appropriate days).
                        {'\n\n'}
                        b) The alternate sign-in deadline is __________(on appropriate days).
                        {'\n\n'}
                        c) Any match on any court or session may be moved.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>E. Calling of Matches </Text>
                        {'\n\n'}
                        The Supervisor determines when a match is to be called. Players must be ready to
                        play when their matches are called. The Supervisor shall determine when a match is
                        to be called or when a match was in fact called. Schedules and match updates may
                        only be reliably obtained from the Supervisor, Tour Manager or the Referee.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeadin2}>F. Rain </Text>
                        {'\n\n'}
                        If because of rain, etc., a tournament cannot be completed within the tournament
                        week, then, at the option of the tournament, one (1) extra day shall be allowed. The
                        Supervisor shall approve the commencement times for matches on the extra day,
                        which shall then be scheduled during the morning or early afternoon. No further extension of the tournament shall be permitted without the approval of ATP.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A tournament with an approved and announced Saturday
                        final is interrupted by weather so that the final is scheduled for Sunday. If adverse weather on Sunday prevents the match from being
                        played, may the tournament be extended to Monday at the option of
                        the tournament?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. For a tournament with a Saturday final the tournament week would end on Saturday and the one (1) extra day
                        allowed at the option of the tournament would be Sunday. It must
                        be noted however that if play cannot be completed on Sunday then
                        ATP would consider approving Monday play only in the case where
                        all parties (tournament & all players) request to finish on Monday.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>G.Rest Periods - Minimums and Guidelines</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Between Main Draw and Prior Week’s Tournament(s).</Text> Before scheduling
                        matches for the first day of play, the Supervisor must contact the Supervisor(s),
                        Referee(s) or Tour Manager(s) of the preceding week’s tournament(s) to determine to what extent players still competing may have difficulties in arriving for
                        play. To the extent possible, and providing it does not jeopardize the fairness
                        of scheduling and the completion of his tournament, matches should be scheduled so that each player with reasonable difficulties can be accommodated. The
                        Supervisor shall whenever possible give the player one full day’s rest between
                        his last match played in a previous week’s tournament or event and the player’s first match in the succeeding tournament, unless weather or unavoidable
                        circumstances have caused a schedule disruption or the player was a finalist in
                        a Monday or other delayed final. There shall be no first-round singles matches
                        scheduled to start on Wednesday in 32 draw outdoor tournaments without the
                        approval of ATP or on-site Supervisor. The on-site Supervisor shall consider approving Wednesday starts only in the following circumstances:
                        {'\n\n'}
                        a) If a player is competing on the Sunday in a Grand Slam, ATP Tour, ATP Challenger Tour, Davis Cup or ITF M 25 tournament, and the following week’s
                        tournament is on a different continent; or in a Monday Final on the same continent. Davis Cup Ties on the same continent which are delayed until Monday
                        may also be considered. For the purposes of this rule the world is divided
                        into 7 distinct continents. They are Europe, Asia, Antarctica, Australia, Africa,
                        North America (including Central America) and South America.
                        In such cases, the match must be scheduled early Wednesday and if the
                        player enters doubles, then he shall be required to play as determined by the
                        Supervisor.
                        {'\n\n'}
                        The criteria listed in a) above shall not apply in the case where a tournament
                        has been approved for a Saturday final.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player competes in a Grand Slam Junior match on the final
                        Sunday. Is he eligible for a Wednesday start if his next tournament
                        is the following week and on a different continent?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. The Wednesday start provisions indicated in the ATP
                        Rulebook only apply to Main Draw Singles, Main Draw Doubles and
                        Mixed Doubles.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Main Draw and Qualifying. </Text>Other than in exceptional circumstances, no player
                        shall be required to play his first-round match in the singles main draw until at
                        least twelve (12) hours after the completion of his final qualifying match. The
                        following should also be considered:
                        {'\n\n'}
                        a) If a player plays two (2) rounds of singles qualifying on the first day of qualifying, then the scheduled start time of his final round of qualifying shall be no
                        earlier than eighteen (18) hours from the start time of his second qualifying
                        match.
                        {'\n\n'}
                        b) If a player plays in two (2) singles qualifying matches on Sunday, then he
                        shall not be scheduled to play in a singles main draw match on Monday.
                        However, the player may be scheduled to play, if necessary, a doubles match
                        on Monday.
                        {'\n\n'}
                        c) If a player plays in two (2) doubles qualifying matches on Sunday, then he can
                        be scheduled to play in either one (1) singles or one (1) doubles main draw
                        match on Monday.
                        {'\n\n'}
                        d) If a player plays in one (1) singles qualifying and two (2) doubles qualifying
                        matches on Sunday, then he shall not be scheduled to play on Monday.
                        {'\n\n'}
                        e) If a player plays in one (1) singles qualifying and one (1) doubles qualifying
                        match on Sunday, then he can be scheduled to play in one (1) singles main
                        draw match on Monday. The singles match is to be scheduled early if that
                        player is also playing in a doubles qualifying match (final) on that Monday.
                        {'\n\n'}
                        f) If the final doubles qualifying match is scheduled for Monday, the main draw
                        doubles matches shall be scheduled no earlier than three (3) hours after the
                        final qualifying match. If the main draw doubles match should be scheduled
                        earlier, then it is understood that if a doubles lucky loser is required, the match
                        shall be re-scheduled with that lucky loser inserted.
                        {'\n\n'}
                        g) Any player who becomes a lucky loser may be scheduled to play on Monday
                        regardless of the number of matches that he has competed in on Sunday. Except, however, a player who played in three (3) matches on Sunday may only
                        play one (1) match (singles) on Monday. If the player is to be required to be
                        a doubles lucky loser or is scheduled to play a main draw doubles match, the
                        doubles match would be rescheduled when his team is inserted into the draw
                        unless the Supervisor determines the schedule shall be adversely affected.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> Due to weather or other unforeseen circumstances, a player
                        played two singles qualifying matches on Monday in an outdoor
                        tournament. May he be scheduled for a main draw singles match on
                        Tuesday?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Yes. The provision of not playing on Monday after playing
                        two qualifying matches on Sunday does not apply as there are no
                        Wednesday starts permitted.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Between Main Draw Matches.</Text>
                        {'\n\n'}
                        a) Players shall not be scheduled to play in a match within twelve (12) hours
                        after completing his last match the preceding day.
                        {'\n\n'}
                        b) Players shall not be scheduled for more than one (1) singles and one (1)
                        doubles match per day, unless weather or other unavoidable circumstances
                        have caused schedule disruptions. Completion of a match in progress shall
                        count as one (1) match.
                        {'\n\n'}
                        c) A player’s singles match on any particular day shall be scheduled before his
                        doubles match(es) unless otherwise directed by the Supervisor. Even without
                        a schedule disruption, a player may be scheduled for two (2) doubles matches if he is not scheduled to play in singles that day.
                        {'\n\n'}
                        d) Whenever it is necessary to schedule a player to compete in more than one
                        match in the same day, a player shall be given the following minimum rest
                        periods (other factors may result in more time being authorized) unless he is
                        in a singles and doubles finals to be played consecutively:
                        {'\n\n'}
                        Outdoor Indoor
                        i) If he has played less than 1 hour 30 min. rest 30 min. rest
                        {'\n\n'}
                        ii) If he has played between 1 and 1/2 hours 1 hr. rest 45 min. rest
                        {'\n\n'}
                        iii) If he has played for more than 1 1/2 hours 1 1/2 hr. rest 1 hr. rest
                        {'\n\n'}
                        iv) If play has been interrupted for thirty (30) minutes or more because of rain
                        or other warranted delay, the length of match time would be assessed
                        from the moment play resumes after the delay.
                        {'\n\n'}
                        v) If play is interrupted for less than thirty (30) minutes, match time would be
                        considered continuous from the moment the first ball of the match was
                        put into play.
                        {'\n\n'}
                        e) Whenever it is necessary for a player to compete in two (2) singles matches
                        in the same day, other than in exceptional circumstances a player shall be
                        scheduled the following day no earlier than eighteen (18) hours from the start
                        of his last match of the previous day, singles or doubles.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) Between Singles Semi-final and Singles Final</Text>
                        {'\n\n'}
                        a) When the two (2) semi-final matches are not to be played consecutively, then
                        the scheduled start time of the final shall be no earlier than eighteen (18)
                        hours from the scheduled start time of the second semi-final match. In the
                        case where the two (2) semi-final matches are to be played consecutively
                        (i.e. “followed-by”), then the scheduled start time of the final shall be no earlier than twenty (20) hours from the scheduled start time of the first semi-final
                        match.
                        {'\n\n'}
                        b) Tournaments are encouraged to plan the schedule so that it exceeds the
                        minimum requirement.
                        {'\n\n'}
                        c) If rain or other unavoidable circumstances have caused a disruption in the
                        schedule, then after considering the interests of the tournament, the players,
                        the television and the public, the Supervisor shall determine the revised time
                        of the semi-final and/or the final.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Player Entitled to Minimum Rest</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Because of rain delays, the singles semi-final and final
                        matches are scheduled for Sunday. The two (2) semi-final singles
                        matches are played on two (2) courts starting at 10 a.m. The final,
                        because of television commitments, is scheduled to begin at 2 p.m.
                        with live television coverage. One of the semi-final matches does
                        not finish until 1:15 p.m. The tournament and the television staff still
                        insist that the final match begin at 2 p.m. What is the solution?
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The player is entitled to a minimum rest of 1 1/2 hours.
                        The final cannot start before 2:45 p.m.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Note:</Text> In circumstances where television is a factor, the Supervisor
                        should try to give as much flexibility as possible by starting the
                        semi-final matches as early as possible. Also, it is important to know
                        the latest start time acceptable for television. The goal is to give the
                        players more than their minimum rest time between a semi-final and
                        final.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Rain: </Text>How Many Matches Per Player?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Rain has put the tournament behind schedule. Player A’s
                        singles match was suspended at one set all. Player A is also behind
                        in the doubles. How many matches may player A be scheduled to
                        play the next day?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Three (3). Completion of a match shall count as one (1)
                        match. If the player wins the singles match in progress then he may
                        be scheduled for one (1) more singles plus one (1) doubles. If he
                        loses the first singles match, then he may be scheduled for two (2)
                        doubles matches.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Scheduling Priorities</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> In preparing the schedule of play for Wednesday in a 32-
                        draw outdoor event, the upper half of the draw is the half the tournament would like to play. Several players will have played singles on
                        Monday and not again until Thursday if that half is played. Sections
                        of the draw would have to be split to accommodate players not having two (2) days off between singles matches. What is the correct
                        priority in scheduling?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Scheduling in outdoor events must keep sections of
                        the draw together. Preferably, halves of the draw are scheduled
                        together, if that is not possible then quarters are scheduled together.
                        Players playing singles on Monday and Thursday should be avoided; however, halves of the draw should be kept together. Inclement
                        weather can adversely affect the schedule as well as the fair treatment of the players unless these priorities are followed.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Rain Delayed Semi-final, When to Play Final?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> Rain on Saturday prevents both semi-final singles from being
                        played. The second semi-final is played on Sunday morning, with
                        the winner due to play the final that afternoon. Can the winner of the
                        second semi-final insist on a Monday final?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. Every effort must be made to finish the tournament
                        on Sunday. The winner of the second semi-final should be given
                        the maximum amount of rest possible before playing the final. (ATP
                        Policy)
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Moving Indoors at an Outdoor event</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Rain has disrupted play to the point where the event is in
                        danger of not being completed. There are indoor courts available for
                        use. May the Supervisor move the matches indoors to complete this
                        event?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Yes. Under the responsibilities of the Supervisor it states
                        that “the Supervisor may, if necessary to eliminate the possibility of
                        a player having to play two singles matches in one day, or if necessary to complete the event, move a match to another court, indoors
                        or outdoors, regardless of surface”. The exception to this is if the
                        Tournament Director demonstrates to the Supervisor that there will
                        be a detrimental impact on the success of the tournament if singles
                        or doubles matches are played indoors. In this case, the Supervisor
                        may elect to keep all matches for outdoor play. (ATP Policy)

                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule110', next: 'Rule112', nav: navigation }} />
        </>
    );
}
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';


export default function Rule103({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <Text style={RuleStyles.MainHeading}>VII. THE COMPETITION</Text>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <Text style={RuleStyles.Description}>
                        <Text style={RuleStyles.SubHeading1}>7.13 Selection of Entries</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}> A.Singles Main Draw</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Direct Acceptances. </Text>Direct acceptances are players accepted directly in the
                        draw by virtue of their position in the Pepperstone ATP Rankings or by their protected ranking position (singles). The list to be used for ATP Tour tournaments
                        shall be dated approximately forty-two (42) days prior to the Monday of the (first)
                        tournament week and twenty-one (21) days prior to the Monday of the tournament week for ATP Challenger Tour tournaments.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Qualifiers.</Text> Qualifiers are players who are included in the main draw as a result
                        of their success in a qualifying competition. If the main draw is made prior to the
                        completion of a qualifying competition, it shall include as many qualifying places
                        as there are sections in the qualifying draw. Each of these qualifying places shall
                        be positioned in the main draw in accordance with standard drawing procedures.
                        Determination as to which qualifier goes into which qualifying place shall be by
                        drawing after the qualifying competition ends.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>3) Special Exempts (SE). </Text>Players may receive a special exempt into the main draw
                        of the following week’s tournament if they meet the criteria and apply for it in a
                        timely manner. If the main draw is to be made before a potential special exempt
                        player plays on Friday, then such place(s) shall be drawn in the same manner
                        as qualifier, i.e., four qualifiers (“Q”) and one or two “SE” depending on whether
                        there are one or two possibilities. Each of the five or six slots are marked “Q/SE.”
                        As soon as the “SE” match results are known, either the “SE” or the next direct
                        acceptance (if the SE lost) is randomly drawn and inserted into the draw.
                        NOTE: Once a player has become eligible for Special Exempt consideration, he
                        must confirm to the Supervisor or Player Relations staff no later than one (1) hour
                        following the completion of the match that qualified him for a Special Exempt, that
                        he is applying for the Special Exempt position.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>4) Wild Cards.</Text> Wild cards are players included in the main draw at the sole discretion of the tournament.* Wild cards must be named at the time the draw is
                        made. Wild cards may be seeded. Tournaments may not receive compensation
                        and Players may not offer compensation in exchange for the awarding of a wild
                        card.
                        {'\n\n'}
                        * See 7.12 A. 2) for restrictions pertaining to ATP Tour 500 additional Wild Card.
                        <Text style={RuleStyles.SubHeading3}>May I Accept a Challenger Wild Card after Losing in an ATP
                            Tour Qualifying?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Can a Tournament Director at a Challenger, which is held in
                        the same week as an ATP event, request permission to offer a main
                        draw wild card to a player who has lost in the qualifying of the ATP
                        Tour event?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No. A player may only compete in one tournament per
                        week.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>May I Play Grand Slam Qualifying After Losing in an ATP Tour
                            tournament?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>Can a player lose in the main draw of an ATP event, which is
                        held the week before a Grand Slam tournament, and be eligible to
                        compete in the qualifying for the Grand Slam event that is held that
                        same week?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Yes, as long as he meets the entry deadline set by the
                        Grand Slam event. The player is not violating the one tournament
                        per week rule because the main draws for the two events are in
                        different weeks.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>May I Accept a Wild Card after Withdrawing from an ATP Tour
                            Qualifying?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player was still competing in a Challenger on the day
                        before Qs started at an ATP Tour event. He wanted to withdraw
                        from the Qs due to “still competing” and then take a wild card into a
                        Challenger event. Is this allowed?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. The rule states that he may withdraw without
                        penalty from the qualifying if he is still competing on the day prior
                        to the commencement of the qualifying. By withdrawing due to“still
                        competing”, he is allowed to accept a wild card.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>May I Sign In for Doubles after Withdrawing from an ATP Tour
                            Qualifying?</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player was still competing on the day before Qs started at
                        an ATP Tour event. He wanted to withdraw from the Qs due to “still
                        competing” and then sign in for doubles at the same or other event.
                        Is this allowed?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>Yes. The rule states that he may withdraw without
                        penalty from the qualifying if he is still competing on the day prior to
                        the commencement of the qualifying. The “without penalty” would
                        relieve him from the “No Play After Withdrawal” provisions of the
                        rules.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>B.Singles Qualifying </Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>1) Direct acceptances – ATP Tour.</Text> Direct acceptances are players accepted directly in the draw by virtue of their position in the Pepperstone ATP Rankings or
                        by their protected ranking position (singles). The list to be used for ATP Tour tournaments shall be dated approximately twenty-one (21) days prior to the Monday
                        of the tournament week.
                        {'\n\n'}
                        a) If there are still places available for direct acceptances in the qualifying draw,
                        the next players selected shall be those with the highest position on the most
                        recent Pepperstone ATP Doubles Rankings list.
                        {'\n\n'}
                        b) There shall be an alternate sign-in list comprised of players that sign in who
                        are not selected as direct acceptances. In the event that direct acceptance
                        players are not present for first-round qualifying matches or if players are
                        moved into the main draw from the qualifying (before the first ball is hit), players shall be selected from the alternate sign-in list in the order described in
                        sections 1), and 2) above. Alternate sign-in deadline is 6:00 pm local time the
                        day before the start of the qualifying. Thereafter, the deadline is one half (1/2)
                        hour before the first scheduled match each day an Alternate may be required.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>2) Direct acceptances – ATP Challenger Tour (50-125). </Text>
                        {'\n\n'}
                        a) Qualifying Sign-In. Players who personally sign-in for the qualifying event
                        shall be accepted based upon their position on the most recent Pepperstone
                        ATP Ranking followed by the most recent Pepperstone ATP Doubles Ranking.
                        The sign-in shall also include those players coming from other events who
                        are eligible to be signed-in by the ATP Supervisor or Tournament Referee.
                        Case: A player enters an event using his current ranking. After the
                        deadline, he realizes he did not get in with his current ranking and
                        informs the Supervisor that he wants to use his protected ranking.
                        May he do this?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No, the intent to use a protected ranking must be declared at the time of entry and cannot be declared after the deadline
                        for the event.
                        {'\n\n'}
                        b) On-Site Alternate Sign-In. There shall be an on-site alternate sign-in on the
                        day of the start of qualifying. The sign-in deadline is one half (1/2) hour before
                        the first scheduled qualifying match.
                        {'\n\n'}
                        Priority for the on-site alternate sign-in is based upon the most recent Pepperstone ATP Ranking and then players using their most recent Pepperstone
                        ATP Doubles Ranking.
                        {'\n\n'}
                        3) Any vacancy created by the withdrawal of a seed (for any reason), after the qualifying draw has been made but prior to the release of the order of play for the first
                        day of the qualifying event, shall be filled by the next highest positioned player
                        or team in the qualifying draw eligible to be seeded. The position vacated by that
                        next highest positioned player or team shall then be filled by the next eligible
                        player or team on the qualifying draw alternate list.
                        Can I Sign In
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>An ATP Tour tournament with an advanced entry qualifying
                        holds an Alternate Sign In on Friday night. If a player does not signin on Friday night, may he sign-in on the Saturday morning Alternate
                        sign-in sheet?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Yes. Following the sign-in occurring prior to the qualifying
                        draw being made, the Alternate sign-in on the day of first round play
                        is a new list and any player who is on-site and with a Pepperstone
                        ATP Ranking (singles or doubles) is eligible to sign-in.
                        Unranked Players as Alternates
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>The tournament has used their wild card allocation. Are players without a ranking eligible to sign in as alternates?
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. Unranked players are only allowed into the draw as a
                        wild card selection.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Fill by Random or Alternative Method</Text>
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>After concluding the qualifying sign-in, there are not a sufficient number of players listed in the Pepperstone ATP Rankings
                        (singles/doubles) to fill the draw. If there are still additional vacancies, may the Tournament Director fill the remaining spots with
                        players according to the local system?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> No. Unranked players are only allowed into the draw as a
                        wild card selection.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player asks to be signed-in to the doubles qualifying which
                        begins on Saturday. He is in another tournament and is playing the
                        doubles final scheduled for Saturday. He asks that he be signed-in
                        if he gets a bye for Saturday, as he would not be able to play the
                        qualifying on Saturday.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>The entry for doubles qualifying cannot be accepted. The
                        player could sign-in for main draw doubles, but not for qualifying.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>C.Doubles Main Draw - ATP Tour. </Text>Direct acceptances for ATP Tour events shall be in
                        the following order:
                        {'\n\n'}
                        1) Teams composed of players in either the Pepperstone ATP Rankings or the Pepperstone ATP Doubles Rankings. The combined positions of the two players using best Pepperstone ATP Rankings (singles or doubles) shall be added together
                        and the total used to determine the direct acceptances. The most recent Pepperstone ATP Rankings and/or Pepperstone ATP Doubles Rankings list, including a
                        protected ranking, shall be used.
                        {'\n\n'}
                        Ties are broken as follows (including protected rankings):
                        {'\n\n'}
                        a) Team using two (2) doubles rankings.
                        {'\n\n'}
                        b) Team using one (1) doubles ranking.
                        {'\n\n'}
                        c) Team using two (2) singles rankings.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Note: </Text>For ties between teams with the same composition:
                        {'\n\n'}
                        i) For teams using two (2) Pepperstone ATP Doubles Rankings, the fewest
                        number of doubles tournaments played and then the team with the highest number of points.
                        {'\n\n'}
                        aa) If one (1) team is using a protected ranking, then they are placed
                        below the team using two (2) actual rankings;
                        {'\n\n'}
                        bb) If both teams have one (1) or two (2) members using a protected
                        ranking, then the team with the strongest individual Pepperstone ATP
                        Doubles Ranking, including protected ranking, will receive priority;
                        {'\n\n'}
                        ii) For teams using one (1) singles & one (1) doubles - the team with the
                        strongest individual Pepperstone ATP Doubles Ranking will receive priority;
                        {'\n\n'}
                        iii) For teams using two (2) Pepperstone ATP Rankings, the team with the
                        strongest individual Pepperstone ATP ranking.
                        {'\n\n'}
                        iv) If none of the above break the tie, then the order shall be determined by
                        a draw.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case:</Text> A player enters an event using his current ranking. After the
                        deadline, he realizes he did not get in with his current ranking and
                        informs the Supervisor that he wants to use his protected ranking.
                        May he do this?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision: </Text>No, the intent to use a protected ranking must be declared at the time of entry and cannot be declared after the deadline
                        for the event.
                        {'\n\n'}
                        2) If the doubles draw cannot be filled by teams where both members are listed
                        in the Pepperstone ATP Rankings or Pepperstone ATP Doubles Rankings, the
                        remaining places shall be filled with byes.
                        {'\n\n'}
                        Only One Doubles Player Has Ranking
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A doubles team has one player who is listed in the Pepperstone ATP Rankings or Pepperstone ATP Doubles Ranking and one
                        player who is not. Can the team be in the doubles draw?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> Since one player does not have a ranking, the only way
                        into the draw is via a wild card.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>NOTE: </Text>The rationale for this is that all players, except Wild Cards,
                        must be an ATP member or a registered player. Since one player of
                        the team does not have a ranking, he is not eligible to register and
                        therefore the only way into the draw is via Wild Card.
                        Use of Both Rankings
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Case: </Text>A player has a protected singles ranking of 201, true singles
                        ranking of 458, protected doubles ranking of 320 and true doubles
                        ranking of 408. Can the player use his protected singles ranking to
                        enter doubles when he has already used it to enter the singles of
                        that tournament or does he have to use his ‘true’ singles ranking or
                        his protected doubles ranking?
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Decision:</Text> The protected singles ranking CAN be used for entry into
                        the doubles. It would not count against his allowed total for singles
                        events but would count against his doubles allotment.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>D. Doubles Main Draw – ATP Challenger Tour</Text>
                        {'\n\n'}
                        Challenger 50-125
                        {'\n\n'}
                        Direct acceptances for ATP Challenger events shall be in the following order:
                        {'\n\n'}
                        1) Teams composed of players in either the Pepperstone ATP Rankings or the Pepperstone ATP Doubles Rankings. The combined positions of the two players (using best Pepperstone ATP Rankings - singles or doubles) shall be added together
                        and the total used to determine the direct acceptances. The most recent Pepperstone ATP Rankings and/or Pepperstone ATP Doubles Rankings list, including a
                        protected ranking, shall be used.
                        {'\n\n'}
                        Ties are broken as follows (including protected rankings):
                        {'\n\n'}
                        a) Team using two (2) doubles rankings.
                        {'\n\n'}
                        b) Team using one (1) doubles ranking.
                        {'\n\n'}
                        c) Team using two (2) singles rankings.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading3}>Note: </Text>For ties between teams with the same composition:
                        {'\n\n'}
                        i) For teams using two (2) Pepperstone ATP Doubles Rankings, the fewest
                        number of doubles tournaments played and then the team with the highest number of points.
                        {'\n\n'}
                        ii) If one (1) team is using a protected ranking, then they are placed below
                        the team using two (2) actual rankings;
                        {'\n\n'}
                        iii) If both teams have one (1) or two (2) members using a protected, then the
                        team with the strongest individual Pepperstone ATP Doubles Ranking,
                        including protected ranking, will receive priority;
                        {'\n\n'}
                        iv) For teams using two (2) Pepperstone ATP Rankings, the team with the
                        strongest individual Pepperstone ATP Doubles Ranking will receive priority.
                        {'\n\n'}
                        v) For teams using two (2) Pepperstone ATP Rankings, the team with the
                        strongest individual Pepperstone ATP Ranking will receive priority.
                        {'\n\n'}
                        vi) If none of the above break the tie, then the order shall be determined by
                        a draw.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>E. Seeds - ATP Tour and ATP Challenger Tour</Text>
                        {'\n\n'}
                        Seeded teams will be determined by using the combined Pepperstone ATP Doubles
                        Rankings of the two players (protected ranking not included). Ties shall be broken as
                        follows:
                        {'\n\n'}
                        1) The team with the fewest events played is positioned higher.
                        {'\n\n'}
                        2) The team with the highest number of points is positioned higher.
                        {'\n\n'}
                        3) A coin flip or draw if a tie remains.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>F. Qualifiers </Text>
                        {'\n\n'}
                        Qualifiers are teams who are included in the main draw as a result of their success in
                        a qualifying competition. If the main draw is made prior to the completion of a qualifying competition, it shall include as many qualifying places as there are sections in the
                        qualifying draw. Each of these qualifying places shall be positioned in the main draw
                        in accordance with standard drawing procedures. Determination as to which qualifier
                        goes into which qualifying place shall be by drawing after the qualifying competition
                        ends.
                        {'\n\n'}
                        <Text style={RuleStyles.SubHeading2}>G.Wild Cards.</Text> Wild cards are players included in the main draw at the sole discretion of
                        the tournament. Wild cards must be named at the time the draw is made. Wild cards
                        may be seeded. Tournaments may not receive compensation and players may not
                        offer compensation in exchange for the awarding of a wild card.
                        {'\n\n'}
                    </Text>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule102', next: 'Rule104', nav: navigation }} />
        </>
    );
}
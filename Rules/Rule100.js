import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule100({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule3.png' }} />
                    <ZoomText>
                        <HighlightText style={RuleStyles.Description}>
                            <HighlightText style={RuleStyles.SubHeading1}>7.10 Special Exempts (SE)</HighlightText>
                            {'\n\n\t'}
                            <HighlightText style={RuleStyles.SubHeading2}>A.Eligibility</HighlightText>
                            {'\n\n\t'}
                            Players may receive a special exempt into the main draw of the following week’s
                            tournament if they meet the criteria and apply for it in a timely manner.
                            {'\n\n\t\t'}
                            1) A player is eligible to receive a special exempt into the singles main draw of the
                            following week’s tournament, subject to the provisions of this section, if he is unable to compete in that qualifying competition because he is still competing on the
                            date the qualifying competition begins in another qualified event, and his current
                            ranking as of the date of the entry deadline would not have otherwise qualified
                            him as a direct acceptance on the original acceptance list if he had entered. In
                            addition, a player who is still playing a match at 9 p.m. local time at the qualifying
                            site, is eligible to receive a special exempt only if he wins that match.
                            {'\n\n\t\t\t'}
                            a) A Qualified event for special exempt to an ATP Tour Masters 1000 tournament is the singles event of another ATP Tour Masters 1000, ATP Tour 500 or
                            Grand Slam tournament.
                            {'\n\n\t\t\t'}
                            b) A Qualified event for special exempt to an ATP Tour 500 tournament is the
                            singles event of another ATP Tour 500, ATP Tour Masters 1000, ATP Tour
                            250* or Grand Slam tournament.
                            {'\n\n\t\t\t'}
                            *The 250 event must be located in the same region as the 500 event, as
                            determined by ATP and specified in “Exhibit M”.
                            {'\n\n\t\t\t'}
                            c) A Qualified event for special exempt to an ATP Tour 250 tournament is the
                            singles event of any ATP Tour 250, ATP Tour 500, ATP Tour Masters 1000 or
                            Grand Slam tournament.
                            {'\n\n\t\t\t'}
                            d) A Qualified event for special exempt to an ATP Challenger Tour tournament
                            is the singles event of an ATP Tour or ATP Challenger Tour tournament within
                            the same geographic region, unless there are no Challengers in the same
                            region the following week. If there are no Challengers in the same region the
                            following week, then a qualified event would include all ATP Challenger Tour
                            events scheduled in the following week, regardless of region. (Definition of
                            Regions can be found in “Exhibit M”).
                            {'\n\n\t\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>EXCEPTION 1:</HighlightText> A player who has entered and been accepted into the qualifying draw of an ATP Tour tournament and has been withdrawn because he is
                            still competing in a Challenger or Tour event in the same region, will be added to the last position on the special exempt list of an ATP Challenger Tour
                            tournament scheduled for the next week, even though he would have been a
                            direct acceptance, had he entered the Challenger.
                            {'\n\n\t\t\t'}
                            Note: EXCEPTION does not apply if player was Top 50 twenty one (21) days
                            prior to the first Monday of the Challenger.
                            {'\n\n\t\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>EXCEPTION 2: </HighlightText>A player who has entered and been accepted into the qualifying draw of an ATP Tour 500 tournament and has been withdrawn because he
                            is still competing in an ATP Tour event, will be added to the last position on the
                            special exempt list of an ATP Tour 250 tournament located in the same region
                            (as determined by ATP) if specific conditions are met. These conditions are:
                            {'\n\n\t\t\t\t'}
                            i) He is qualified for a Special Exempt spot in the ATP Tour 500 event.
                            {'\n\n\t\t\t\t'}
                            ii) Due to other qualified player(s) for the Special Exempt into the ATP Tour
                            500 event there is no Special Exempt available.
                            {'\n\n\t\t\t\t'}
                            iii) The player’s ranking would have qualified him for the main draw of the
                            250 event, had he entered there instead of the 500 qualifying.

                            {'\n\n\t'}
                            <HighlightText style={RuleStyles.SubHeading2}>B. Number of Special Exempts</HighlightText>
                            {'\n\n\t'}
                            ATP Tour Masters 1000 and ATP Tour 500 tournaments shall have one (1) special
                            exempt. ATP Tour 250 and ATP Challenger Tour tournaments shall have two (2).
                            {'\n\n\t'}
                            <HighlightText style={RuleStyles.SubHeading2}></HighlightText>C.Selection of Special Exempt
                            {'\n\n\t\t'}
                            1) If there are not sufficient special exempt places in the draw for applicants, the
                            players shall be selected according to their position on the most recent Pepperstone ATP Rankings list issued prior to the tournament or by their protected
                            ranking, except:
                            {'\n\n\t\t\t'}
                            a) If he is a direct acceptance using his protected ranking, then he is not eligible
                            for a special exempt place, or
                            {'\n\n\t\t\t'}
                            b) If he would have been a direct acceptance had he entered using his protected
                            ranking, then the protected ranking cannot be used to determine his position
                            on the special exempt list.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading2}></HighlightText>2) ATP Tour. If the special exempt places are not needed before the beginning of
                            the qualifying competition, the special exempt places shall be filled by additional
                            direct acceptances selected from the original acceptance list. Thus a player may
                            be pulled out of the qualifying before the first ball is hit and replaced by an alternate list player.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading2}></HighlightText>3) ATP Challenger Tour. If the special exempt place is not needed prior to the 10
                            AM withdrawal deadline, the special exempt place shall be filled by an additional
                            direct acceptance selected from the original acceptance list. If the special exempt
                            place has not been determined at the deadline, and then following the 10 AMwithdrawal deadline it is determined that the Special Exempt is not needed, the
                            additional direct acceptance shall be filled from the next player who has properly
                            preserved his eligibility on the original acceptance list for that event.
                            {'\n\n\t'}
                            <HighlightText style={RuleStyles.SubHeading2}></HighlightText>D.Special Exempt Process
                            {'\n\n\t\t'}
                            1) A list of possible eligible players is compiled by the player relations department by
                            Wednesday/Thursday of the current week for the next week’s tournaments.
                            {'\n\n\t\t'}
                            2) The list of eligible players is supplied to the supervisors where the players are
                            competing. The supervisors need to contact each player to inquire if the player
                            is interested in the special exempt position and then contact player relations immediately following the player’s decision to remove himself from consideration for
                            any tournament for which he is eligible.
                            {'\n\n\t\t'}
                            3) If the player is interested in an event, player relations coordinates with the supervisors at both events until the SE positions are filled.
                            {'\n\n\t\t'}
                            4) If the main draw is to be made before a potential special exempt player plays on
                            Friday, then such place(s) shall be drawn in the same manner as qualifier, i.e.,
                            four qualifiers (“Q”) and one or two “SE” depending on whether there are one or
                            two possibilities. Each of the five or six slots are marked “Q/SE.” As soon as the
                            “SE” match results are known, either the “SE” or the next direct acceptance (if the
                            SE lost) is randomly drawn and inserted into the draw.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}></HighlightText>NOTE: The deadline for a player to declare his intent to accept a Special Exempt,
                            if eligible, is no later than one hour following the completion of the match that
                            qualified him for a Special Exempt. Once he has declared his intent to the Supervisor or Player Relations staff, he must accept the Special exempt, if eligible, or
                            be subject to the applicable withdrawal/late withdrawal penalties.
                            {'\n\n\t\t'}
                            5) If, on the day prior to the start of qualifying, a player does not finish his match by
                            nine (9) p.m. local time at the qualifying site and subsequently loses his match,
                            then he is not eligible to be signed in for qualifying or for a special exempt; however, he may receive a wild card from the tournament if it is known before the
                            qualifying draw that he has lost and that no special scheduling shall be required.
                            {'\n\n\t\t'}
                            6) A player who does not appear after accepting a special exempt shall be treated
                            as an entered player and shall receive appropriate penalties.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Potential Special Exempt Playing at 9 p.m. Friday</HighlightText>
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player is competing in the singles event of a “qualified
                            event” on the night before the next week’s qualifying. If the player
                            wins, he will be eligible for a special exempt. His singles match,
                            however, will not be completed by 9 p.m. local time at the qualifying
                            site for the next week’s tournament. How does this affect the “composition of draws” at the next week’s tournament?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The special exempt slot in the main draw shall be left
                            available pending the result of the player’s match. The qualifying
                            draw should be made as required at 9 p.m. unless it is prudent to
                            wait up to an hour for the match result. If the player vying for the
                            special exempt loses, then the unused special exempt place shall
                            be filled by the next player on the original acceptance list*. If the
                            next player on the original acceptance list is in the qualifying draw,
                            then he shall be withdrawn and moves into the main draw. The
                            vacancy created in the qualifying draw shall be filled from the qualifying alternate list.
                            {'\n\n\t\t'}
                            *For ATP Challenger Tour events, the vacancy is filled from the next
                            player on the Acceptance List who properly preserved his eligibility
                            at that event.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading2}>Potential Special Exempt Loses: After 9 p.m.</HighlightText>
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A potential special exempt player loses his match at 9:15
                            p.m. on the night prior to the start of the qualifying competition and
                            he calls the qualifying sign-in site requesting that he be given a wild card into the singles qualifying competition. May a wild card be
                            given to him for the next week’s tournament if the qualifying draw
                            has not been made?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes. The wild card belongs to the tournament, which may
                            give it to this player as long as the draw has not been made and
                            no special scheduling is required because of the travel plans of the
                            player.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Potential Special Exempt Playing at Midnight On the Night Prior
                                to the Start of Qualifying</HighlightText>
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>Same situation as above, except that the player’s match is
                            still in progress after midnight. Does this make the player eligible
                            for a special exempt based on the fact that he was still competing
                            on the date the qualifying competition begins in another qualified
                            event?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. For the purpose of the rule, competing on the date
                            the qualifying competition begins shall be defined as: “Starting or resuming a match as part of that day’s (normally Saturday) scheduled
                            program”. If the player wins the match, he is eligible to be considered for a special exempt position.
                            Special Exempt Awarded if Player Is in Semis?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A tournament has a Saturday final and a player asks for a
                            special exempt after he wins his quarterfinal match on Thursday. Is
                            he eligible?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. The player must be scheduled to play on Saturday
                            when the “qualifying begins”.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player is a potential special exempt for one or more
                            Challenger tournaments. Can he also preserve his eligibility on an
                            original acceptance list?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes. A player who is a possible special exempt may also
                            preserve his eligibility on an original acceptance list, however the
                            player may only preserve his eligibility on one list.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>NOTE:</HighlightText> If he preserves his eligibility on an original acceptance list
                            and gets in that main draw before he has completed his match for
                            the special exempt spot, he would be removed as a possible special
                            exempt. Conversely, if he wins his match and thus becomes the
                            special exempt before he is accepted in the main draw from the
                            original acceptance list, his name would be removed from eligibility on the original acceptance list. He is obligated to compete at
                            whichever tournament he gets in the main draw first. Before he is
                            accepted in the main draw from the original acceptance list, his
                            name would be removed from eligibility on the original acceptance
                            list. He is obligated to compete at whichever tournament he gets in
                            the main draw first.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player has won a position as a Special Exempt but he is
                            also next on the Acceptance List. After the draw is made, but prior
                            to the start of the qualifying competition, there is a late withdrawal and the player gets in due to the withdrawal. Does his status
                            change from SE to Direct Acceptance, thus allowing the Special Exempt to go to the next player who earned the Special Exempt spot?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes, since the player ultimately got in because he was
                            next on the list, this frees up the Special Exempt for the next player
                            who earned it. If there are no Special Exempts, the list drops by the
                            applicable number of spots.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}></HighlightText>Am I kept on the Special Exempt List?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player expresses an interest in a Special Exempt spot prior
                            to the match that will qualify him for the position and becomes a
                            possible Special Exempt. He does not contact the Supervisor or
                            Player Relations staff member to accept the Special Exempt within
                            one hour after the completion of the match that qualifies him. Is he
                            kept on the list of possible Special Exempts?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. If the player does not contact the Supervisor or
                            Player Relations staff member no later than one hour following the
                            completion of the match that qualified him, to accept the Special Exempt spot, he will be taken off the list of possible Special Exempts.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Must I Appear for Play After Accepting a Special Exempt?</HighlightText>
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player is listed as a possible Special Exempt and the
                            Supervisor confirms with him that he is interested in the spot. There
                            are other Special Exempt players ahead of him on the list of possible Special Exempts whose matches are scheduled after his. No
                            later than one hour after the match that qualifies him as a Special
                            Exempt, he informs the Supervisor or Player Relations staff member
                            that he accepts the Special Exempt spot. If the remaining possible
                            Special Exempt players ahead of him on the list lose their matches, thus earning him the Special Exempt spot, must he accept the
                            Special Exempt?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes. Because he had accepted the Special Exempt spot
                            within one hour after the match that qualified him, he is obligated to
                            accept the position and shall be treated as an entered player and be
                            subject to the appropriate penalties if he does not appear for play.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Can a player with no ranking receive a Special Exempt if
                            otherwise eligible?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. A player must have a singles ranking or a singles
                            protected ranking in order to be considered for a Special Exempt.
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> May a player who has entered and been accepted into an
                            ATP Tour Qualifying draw starting on Sunday be considered for a
                            possible Challenger Special Exempt position for the following week?
                            {'\n\n\t\t'}
                            <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes, however the player must decide on Friday within an
                            hour after winning his match whether he will accept the Challenger
                            SE or stay on the ATP Qualifying list. Should the player decide to
                            accept an available Challenger SE position, he will be withdrawn
                            from the ATP Qualifying with “still competing”.

                            {'\n\n'}
                        </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule99', next: 'Rule101', nav: navigation }} />
        </>
    );
}
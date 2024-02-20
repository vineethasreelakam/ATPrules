import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule102({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.12 Wild Cards</HighlightText>
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>A.Regulations</HighlightText>
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>1) Singles.</HighlightText>
                        {'\n\n\t\t\t'}
                        a) Wild cards are players included in the main draw at the sole discretion of the
                        tournament. Wild cards must be named at the time the draw is made. Wild
                        cards may be seeded. Tournaments may not receive compensation and players may not offer compensation in exchange for the awarding of a wild card.
                        {'\n\n\t\t\t'}
                        b) A wild card is no longer eligible as an alternate at that event.
                        {'\n\n\t\t\t\t'}
                        i) A main draw wild card may not be re classified as a direct acceptance,
                        due to withdrawals, once the acceptance list is finalized (when the first
                        chip of the main draw has been drawn).
                        {'\n\n\t\t\t\t'}
                        ii) A qualifying wild card is eligible to be moved into the main draw as a direct
                        acceptance, due to withdrawals, up to the start of the qualifying event.
                        {'\n\n\t\t\t'}
                        c) Once a qualifying competition has commenced (first ball of the first qualifying
                        match is struck), an entered player may not be offered nor the player accept
                        a wild card into any tournament that week.
                        {'\n\n\t\t\t'}
                        d) A tournament may not offer a wild card or accept the entry from any player
                        who has either accepted a wild card or been committed by an entry method
                        to another tournament in the same week.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading2}>2) Singles – ATP Tour 500</HighlightText>
                        {'\n\n\t\t'}
                        An additional Wild Card is awarded to the tournament with the following restrictions.
                        {'\n\n\t\t\t'}
                        a) The Wild Card must be named no later than 10 AM, Eastern Time, USA on
                        the Friday before the event week; and
                        {'\n\n\t\t\t'}
                        b) The player must be an A+ player as designated by that event’s region.
                        {'\n\n\t\t\t'}
                        c) If the tournament does not use the additional Wild Card by the deadline then
                        the position in the main draw goes to the next eligible player on the entry list.
                        {'\n\n\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}> 3) Doubles.</HighlightText>
                        {'\n\n\t\t'}
                        A tournament may not enter players as a wild card team without the consent of
                        both players. A wild card may be offered to any team that is not a direct acceptance on the original acceptance list after entries have closed. A wild card may
                        be offered to one player on an entered team if it is conditioned on his playing with
                        a specific player. Wild cards must be named at the time the draw is made. Wild
                        cards may be seeded. Tournaments may not receive compensation and players
                        may not offer compensation in exchange for the awarding of a wild card.
                        {'\n\n\t'}
                        <HighlightText style={RuleStyles.SubHeading2}></HighlightText>B.Limitation
                        {'\n\n\t\t'}
                        1) Singles. Players may accept up to five (5) main draw singles wild cards into ATP
                        Tour tournaments during any ATP Circuit Year. Wild cards shall only count toward
                        the annual limit if the player would have been a direct acceptance on the original
                        acceptance list. Additional exceptions are outlined below.
                        {'\n\n\t\t\t'}
                        a) Players who cannot participate in ATP Tour tournaments and ATP Challenger
                        Tour tournaments for six (6) months because of a physical injury may petition
                        ATP for one additional wild card.
                        {'\n\n\t\t\t'}
                        b) In the event that a player’s position in the Pepperstone ATP Rankings is insufficient to make him a direct acceptance on the forty two (42) day acceptance
                        list, then he shall be released from his commitment to that tournament, unless
                        offered a wild card to the contract tournament within twenty four (24) hours of
                        the entry deadline. Such wild card accepted by a player shall not count in the
                        player’s annual limitation of five (5) wild cards in singles.
                        {'\n\n\t\t\t'}
                        c) Any player who becomes thirty five (35) years of age by December 31 of an
                        ATP circuit year shall be exempt from the wild card limitation if he is:
                        {'\n\n\t\t\t\t'}
                        i) A former singles Champion of a Grand Slam; or
                        {'\n\n\t\t\t\t'}
                        ii) A former singles Champion of the ATP World Championships, Tennis
                        Masters Cup or Nitto ATP Finals; or
                        {'\n\n\t\t\t\t'}
                        iii) A former No. 1 ranked player in the ATP Rankings prior to January 2000;
                        or
                        {'\n\n\t\t\t\t'}
                        iv) A former No. 1 player in the year end ATP Rankings.
                        {'\n\n\t\t\t'}
                        d) Players may petition ATP for exceptions to these limitations.
                        {'\n\n\t\t'}
                        2) Doubles. There shall be no limitations of doubles wild cards for players.
                        Two Chances
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Can a player who loses in the qualifying receive a wild card
                        into the main draw?
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No.
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Wild Card After ATP Tour Qualifying Withdrawal</HighlightText>
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player withdraws from the qualifying of an ATP Tour tournament on Friday at any time because he is still competing in an
                        ATP Challenger Tour tournament. The player is offered a wild card
                        in another ATP Challenger Tour event to be held the following week.
                        May the player accept the wild card or do the provisions of “No Play
                        After Late Withdrawal” apply?
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The player is allowed to accept the wild card. Because
                        the player was competing in a qualified event on the Friday, he is
                        allowed to withdraw from the ATP Tour qualifying event without penalty and therefore it is not considered as a “Late Withdrawal”.
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}> Wild Card Pulled from Challenger Qualifying</HighlightText>
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> After a Challenger qualifying draw has been made but before
                        that challenger qualifying competition has officially begun, may a
                        player who is included in that qualifying draw be offered and accept
                        a wild card into that or another tournament’s main draw?
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>Yes. As long as the qualifying competition has not begun
                        (first ball is struck), a player may accept a wild card into the main
                        draw of any ATP Tour or ATP Challenger Tour tournament and be
                        withdrawn from that qualifying event. The vacancy created in the
                        qualifying shall be filled by an eligible alternate.
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Unused Wild Cards</HighlightText>
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A tournament elects not to use all of its main draw singles
                        wild cards. How are these spots filled?
                        {'\n\n\t\t\t'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText> If the qualifying has not begun, the next player on the
                        acceptance list is moved into the main draw. If qualifying has begun,
                        a lucky loser is to be inserted into the main draw.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule101', next: 'Rule103', nav: navigation }} />
        </>
    );
}
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";


export default function Rule95({ navigation }) {
    return (
        <>
            <View style={RuleStyles.Layout}>
                <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
                    <HighlightText style={RuleStyles.MainHeading}>VII. THE COMPETITION</HighlightText>
                    <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule3.png'}}/>
                    <ZoomText>
                    <HighlightText style={RuleStyles.Description}>
                        <HighlightText style={RuleStyles.SubHeading1}>7.05 Withdrawal/Late Withdrawal Penalties</HighlightText>
                        {'\n\n'}
                        The following shall result when a player withdraws after the deadline from the singles
                        {'\n\n'}
                        main draw of an ATP Tour or ATP Challenger Tour tournament:
                        {'\n\n'}
                        A.A player shall be subject to the sanctions provided in the Player Code of Conduct.
                        {'\n\n'}
                        B.If the withdrawal is from the singles main draw of an ATP Tour tournament, the player
                        shall be required to fulfill his obligations under the ATP Stars Program.
                        {'\n\n'}
                        C.If the withdrawal occurs after 10 AM, Eastern Time, USA, on Friday before the tournament week or, in the case of doubles, after the on-site entry deadline, then the withdrawal shall be considered a late withdrawal and shall also result in a late withdrawal
                        fine, unless the injury on-site examination provisions or player promotional activity
                        provisions apply as stated under repeal of penalties. In addition, in the case of a 96-
                        draw tournament, if the withdrawal occurs after the qualifying or main draw is made,
                        whichever comes first, the player shall receive a late withdrawal fine, unless the injury
                        on-site examination or player promotional activity provisions apply. Players included
                        in the draw that fail to appear on-site shall be classified as a late withdrawal.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>Whom To Fine?</HighlightText>
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>Player A and player B agree to play doubles together in a
                        tournament, so player B signs the team in to play. On Monday,
                        player A withdraws from singles and consequently from doubles.
                        As player A does not come on-site for promotional activities, he is
                        aware that he will get a withdrawal penalty for singles. What penalties apply to the doubles team?
                        Decision: Player A gets a fine for doubles while player B does not
                        as he is on-site.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading2}>D.No Play After Withdrawal</HighlightText>
                        {'\n\n'}
                        1) If a player withdraws after the entry/withdrawal deadline from the singles or doubles event of a Grand Slam, ATP Tour, ATP Challenger Tour or the qualifying
                        competition of an ATP Tour/Challenger Tour tournament for any reason, he may
                        not play in any other tournament or special event during that tournament week.
                        {'\n\n'}
                        2) If the withdrawal was for medical reasons then the player may enter and compete
                        in the doubles event of the same tournament provided he is determined by the
                        Supervisor, upon written medical advice, to be physically capable to compete on
                        a professional level of play.
                        {'\n\n'}
                        3) No player may continue playing in an ATP Tour or ATP Challenger Tour tournament in singles or doubles after giving notice of withdrawal from a tournament
                        scheduled in a future week on account of injury, illness or other medical reason.
                        Players, however, may continue playing in that event if the withdrawal from the
                        future event was for non medical reasons.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>4) ATP TOUR:</HighlightText> The exception to No Play after Withdrawal is the withdrawal of a
                        team accepted into the main draw of an ATP Tour tournament through the advance entry method due to one or both team members being accepted into the
                        main draw singles of another ATP Tour, ATP Tour Qualifying or ATP Challenger
                        Tour tournament. In this case, both players may enter a doubles competition,
                        together or separately, through the on-site entry method.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>ATP CHALLENGER TOUR: </HighlightText>The exception to No Play after Withdrawal is
                        the withdrawal of a team accepted into the main draw of an ATP Challenger
                        Tour tournament through the advance entry method due to one or both team rnament and withdraws. Can he play an ATP
                        Challenger during the 2nd week of that tournament.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes as long as the withdrawal was prior to the start of
                        qualifying.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player is an alternate on an ATP Tour Qualifying list and
                        gets in and is inserted in the draw which is done before the official
                        withdrawal deadline due to the difference in time zones. Is he allowed to withdraw once he is in the draw and play somewhere else?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> When the player gets in the draw, he is automatically
                        withdrawn from any other qualifying event where he was an alternate. He will be allowed to withdraw (up until the Thursday, 10 AM
                        commitment deadline) from the event where he got in and not be
                        penalized. However, he will only be allowed to play doubles at the
                        same event.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> May a player withdraw from a tournament where he is a Direct Acceptance in singles or doubles (with his regular or protected
                        ranking) and then accept a wild card into the same tournament?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes, provided the withdrawal is prior to the withdrawal
                        deadline, a player may withdraw from a tournament and then accept
                        a wild card into the same tournament. For doubles, the wild card
                        must be with his original partner. He cannot accept a wild card
                        nor play in any other tournament or event in the same week as the
                        tournament he withdrew from. (Tour Policy)
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player accepted in an ATP Tour, ATP Challenger Tour main
                        draw or ATP Tour Qualifying list using a PR withdraws prior to the
                        withdrawal deadline and accepts a WC into the same event. Does
                        this tournament count towards the total tournaments at which the
                        player can use his PR?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No, this tournament will not count towards the player’s
                        total of tournaments.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player withdraws from an ATP Tour tournament prior to the
                        Friday, 10 AM deadline with injury. He is allowed to play doubles in
                        the same event provided he is determined to be physically capable
                        to compete. Since he is coming on-site to play doubles, does he
                        have to do promotional activity?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No, however, he is required to complete his Stars requirements if requested by ATP staff.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> May a player withdraw BDA from the main draw alternate list
                        of an ATP Tour or Challenger event and play the Qualifying of the
                        same event?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> Yes, unless he would have moved into the main draw of
                        that event, had he not withdrawn. A player may not turn down this
                        main draw position to play the qualifying of that event. He may,
                        however, play the Qualifying of a different event.
                        Challenger Cancels, Where can I Play?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A player enters and is main draw of a Challenger on the
                        original Acceptance List. The Challenger cancels. The deadline
                        has now passed for entering another Challenger or 250 tournament
                        during the same week. What are the player’s options for competing
                        that week?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>The player may sign in as an Alternate at any ATP Tour
                        or ATP Challenger Tour qualifying event the same week. Or he may
                        accept, if offered, a Wild Card at any Challenger or ATP Tour event.
                        He may not be inserted directly into the draw or placed on another
                        Acceptance List.
                        {'\n\n'}
                        Options if Tournament Changes Surface after the Entry Deadline
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> Can a player withdraw from the main draw and play elsewhere during the same week if a tournament changes its surface
                        after the Acceptance List has come out?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> The player may sign in for Qualifying at any event that
                        week or he may accept, if offered, a Wild Card at any Challenger or
                        ATP Tour event. He may not be inserted directly into the draw or
                        placed on another Acceptance List.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case:</HighlightText> A doubles team enters 4 Challenger tournaments in the same
                        week through phone or email. The team is accepted and appears
                        on two draws at the same time as well as the alternate lists of the
                        other 2 tournaments. Is the team allowed to withdraw from one of
                        the events it is accepted into and play at the other one?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision:</HighlightText> No. The team is in violation of the One Tournament Per
                        Week and No Play After Withdrawal rules and will be withdrawn
                        from all tournaments that week.
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Case: </HighlightText>A player moves from the Alternate list into a Challenger Singles Main Draw at the 10 AM deadline on Friday before the event
                        and later appears in the draw. Not knowing that he is in the main
                        draw of a tournament already, the player requests and receives a
                        Main Draw wild card at another Challenger tournament the same
                        week and appears in the draw. Is the player allowed to withdraw
                        from one of the events and compete at the other one?
                        {'\n\n'}
                        <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>No. The player is in violation of the One Tournament
                        Per Week and No Play After Withdrawal rules and will be withdrawn
                        from both tournaments that week.
                        {'\n\n'}
                        E. Withdrawals from the qualifying competition at ATP Tour/Challenger Tour tournaments will be without penalty if one of the following occurs:
                        {'\n\n'}
                        1) Player is accepted into the main draw of ATP Tour Masters 1000, ATP Tour 500
                        or ATP Tour 250 tournament, or in the case of an ATP Challenger Tour qualifying
                        withdrawal, the main draw of another ATP Challenger Tour singles event.
                        {'\n\n'}
                        2) Player is still competing in an ATP Tour, ATP Challenger Tour, or ITF Men’s WTT
                        tournament at any time on the day prior to the commencement of qualifying.
                        {'\n\n'}
                        3) The first two (2) withdrawals are excused, thereafter, each withdrawal is subject
                        to a fine in accordance with article 8.03 B., Fines.

                        {'\n\n'}
                    </HighlightText>
                    </ZoomText>
                </ScrollView>
            </View >
            <RuleNavigationButtons props={{ prev: 'Rule94', next: 'Rule96', nav: navigation }} />
        </>
    );
}
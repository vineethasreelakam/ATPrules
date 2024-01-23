import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule33({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>III. FINANCIAL</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>3.08 Prize Money</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>A.</Text>
            All prize money due to ATP is to be sent by wire in USD or EUR.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>1) </Text>U.S. Dollar payment by wire{'\n\n'}
            {'\t'}Bank: BNP PARIBAS{'\n\n'}
            {'\t'}1 boulevard des Moulins{'\n\n'}
            {'\t'}98000 Monaco{'\n\n'}
            {'\t'}Swift/BIC Code: BNPAMCM1XXX{'\n\n'}
            {'\t'}IBAN Number: MC58 3000 4091 7000 0140 0573 253{'\n\n'}
            {'\t'}Account Number: 00014005732{'\n\n'}
            {'\t'}Beneficiary: ATP TOUR PRIZE MONEY{'\n\n'}
            {'\t\t\t'}201 ATP Tour Boulevard{'\n\n'}
            {'\t\t\t'}Ponte Vedra Beach, FL 32082{'\n\n'}

            {'\t'}Intermediary Bank: BNP PARIBAS USA – NEW YORK{'\n\n'}
            {'\t'}787 Seventh Avenue{'\n\n'}
            {'\t'}New York, NY 10109{'\n\n'}
            {'\t'}Swift/BIC Code: BNPAUS3N{'\n\n'}
            {'\t'}Reference: Tournament Name & Invoice Number{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>2) </Text>Euro payment by wire{'\n\n'}
            {'\t'}Bank: BNP PARIBAS{'\n\n'}
            {'\t'}1 boulevard des Moulins{'\n\n'}
            {'\t'}98000 Monaco{'\n\n'}
            {'\t'}Swift/BIC Code: BNPAMCM1XXX{'\n\n'}
            {'\t'}IBAN Number: MC58 3000 4091 7000 0101 1541 076{'\n\n'}
            {'\t'}Account Number: 00010115410{'\n\n'}
            {'\t'}Beneficiary: ATP TOUR PRIZE MONEY{'\n\n'}
            {'\t\t\t'}201 ATP Tour Boulevard{'\n\n'}
            {'\t\t\t'}Ponte Vedra Beach, FL 32082{'\n\n'}
            {'\t'}Reference: Tournament Name & Invoice Number{'\n\n'}

            <Text style={RuleStyles.SubHeading2}>B. General</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>1) ATP Tour</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) </Text>
            Prize money at all ATP Tour events shall be paid through ATP or its designated agent
            at the conclusion of the tournament, unless otherwise approved by
            ATP. Prize money shall be distributed based on breakdowns established by
            ATP. ATP must approve any changes in prize money, including from year to
            year.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) </Text>
            ATP must receive the electronically completed ATP prize money excel
            spreadsheet no later than the end of the business day on the Monday following the
            conclusion of the tournament. The spreadsheet must be emailed to
            accounting@atptour.com.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>c) </Text>
            Tournaments are required to wire net prize money to the designated bank
            trust account to ensure receipt by the Wednesday following the conclusion of
            their respective events.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) </Text>
            Prize money at all ATP Challenger Tour events shall be paid through ATP or
            its designated agent at the conclusion of the tournament, unless otherwise
            approved by ATP.{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>b) </Text>
            ATP must receive 100% of the prize money as follows:{'\n\n'}
            • New applicants – prize money must be deposited in ATP account six (6)
            weeks prior to the first day of the tournament.{'\n\n'}
            • Existing Events – prize money must be deposited in ATP account four (4)
            weeks prior to the first day of the tournament.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>c) </Text>
            ATP must receive the electronically completed ATP prize money excel spreadsheet no
            later than the end of the business day on the Monday following the
            conclusion of the tournament. Spreadsheet must be emailed to accounting@
            atptour.com.{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>d) </Text>
            ATP reserves the right to seek assurances of a tournament’s financial viability
            in the form of a letter of credit, advance payment of prize money or any other
            means ATP deems necessary.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>3) </Text>
            Prize money shall be paid only for matches played. If a final cannot be played,
            then each finalist shall be paid runner-up prize money. For purposes of this section, a
            match is played when it is won as a result of a retirement, default, walkover
            or no show. (See “Exhibit K - Glossary” )
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}>Singles:</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) </Text>
            A player who withdraws prior to his first match from the singles qualifying
            (after the Friday 10AM freeze deadline) or from the main draw singles competition
            at an ATP Tour or ATP Challenger Tour event (after the start of the
            qualifying and prior to his first match) shall receive first round prize money
            (second round in the case of a Bye) if the following conditions are met:{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>i) </Text>
            The player must be on-site at the time of the withdrawal and must be
            declared unfit to compete by the tournament doctor.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>ii) </Text>
            Each player is limited to two (2) tournaments*, non-consecutive, in a calendar year
            where he may receive prize money for the on-site withdrawal.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>* </Text>
            There are no limits to the number of events a player may receive prize
            money for the on-site withdrawal due to Covid-19 reasons as long as the
            events are not in back to back weeks.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>iii) </Text>
            Players who have been out of competition due to long term injuries (30
            days or more) and withdraw on-site become eligible for the provision to
            receive prize money only after they have returned to competition and
            competed in their first event.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>iv) </Text>
            Players who have been out of competition, for any reason, 60 days or
            more and withdraw on-site become eligible for the provision to receive
            prize money only after they have returned to competition and competed
            in their first event.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) </Text>
            The Lucky Loser replacing a player who has withdrawn on-site shall receive
            qualifying prize money earned plus money earned in the main draw minus the
            prize money paid to the withdrawing player.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player withdraws on-site from singles before his first singles match
            but is still in doubles. Is he eligible for first round prize money compensation
            if all other conditions are met?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: Yes. </Text>
            The player may collect the on-site prize money if
            he is still competing in the doubles of that tournament as long as he
            receives medical clearance prior to the doubles match. The doubles
            match cannot be on the same day as his withdrawal or on the day of
            his scheduled singles match.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player withdraws from singles before his first singles match
            and collects on site prize money. Can he play a special event or
            another tennis event that week?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: No. </Text>
            Once a player withdraws he cannot continue or participate in any other
            event that week; whether he collects the on-site
            prize money compensation or not.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player withdraws on site and collects prize money. Is he
            allowed to do the same at the next tournament he’s entered in.{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: No. </Text>
            A player is not allowed to collect prize money when
            withdrawing on-site at two consecutive tournaments. A player must
            compete in a tournament where ATP points are awarded or Davis
            Cup or Olympics before being allowed to collect prize money at
            another event.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player withdraws on site and receives prize money at an
            ATP Challenger Tour tournament. Subsequently, he withdraws
            on site and receives prize money at an ATP Tour tournament. Is
            the player allowed to withdraw on site and receive prize money at
            another ATP Challenger Tour or ATP Tour tournament?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            No. Once the player has withdrawn on site and received
            prize money at any two, non-consecutive ATP Tour or ATP Challenger Tour tournaments,
            he has used his 2 tournament limit for the
            year and is not eligible to receive prize money for any future on-site
            withdrawal at an ATP Tour or ATP Challenger Tour tournament in
            that calendar year.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player is out of competition for 30 days after retiring or
            withdrawing due to injury. Is he eligible to receive prize money if he
            withdraws on-site after being out the 30 consecutive days since his
            retirement/withdrawal?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: No: </Text>
            The player is only eligible for the provision to receive
            prize money for an on-site withdrawal after he has returned to competition
            and competed in his first event.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player using a protected ranking for entry withdraws on site
            and collects prize money. Does this tournament count towards the
            total number of tournaments the player has used with his protected
            ranking?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: Yes.</Text>{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            If a player qualifies, accepts a special exempt or accepts a
            wild card and becomes a main draw player, can he receive on-site
            prize money if otherwise eligible?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: Yes. </Text>
            Once he is accepted into the main draw as a qualifier,
            special exempt or wild card, he can receive on-site prize money
            compensation if otherwise eligible.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player who is not on-site withdraws after the 10 AM, Friday
            deadline and comes on-site to do promotional activity or to be
            medically examined (Challengers) in order to avoid the applicable
            penalties. Is he eligible for first round prize money compensation?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: No. </Text>
            The player must be on-site at the time of the withdrawal in
            order to be eligible for first round prize money compensation under the rule.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            May a player who withdraws on-site and otherwise qualifies,
            decline the first round prize money?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: Yes, </Text>
            the player may decline to accept the money and
            then it becomes a normal on-site withdrawal.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A player is an on-site withdrawal and wants to wait to decide
            whether or not to accept the first round prize money if otherwise
            eligible. Is the player allowed to wait?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: No. </Text>
            The player must declare his intent at the time of the
            on-site withdrawal.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A main draw player that would have been seeded with a bye
            withdraws on-site after the Qualifying started but before the main
            draw was done. He is eligible for compensation. Does he get 1st or
            2nd round PM compensation?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The player receives 1st round PM compensation. Seeding is
            not official until the draw is made.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A main draw player withdraws late after the Qualifying has
            started and travels to the tournament site to perform Promotional
            Activities to avoid the LW fine. Is he eligible for prize money compensation?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The player is not eligible for compensation as he was not
            on-site when the withdrawal was done.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            During Qualifying, two players withdraw from the main draw
            list. One player was on-site and eligible for compensation while the
            other player was not on-site or otherwise ineligible to receive prize
            money. Neither player was seeded with a Bye. How is it decided
            what PM will the LL’s be receiving?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision:</Text>{'\n\n'}
            1. The lucky loser who was drawn as the number 1 LL is eligible to
            receive first round prize money or whatever money he earns in the
            main draw. He does not keep qualifying prize money.{'\n\n'}
            2. The lucky loser who was drawn as number 2 LL receives qualifying money
            earned plus money earned in main draw, less the
            amount paid to the withdrawing player.{'\n\n'}
            3. The same principle applies if there were more than two withdrawing players prior
            to the completion of the qualifying or the qualifiers
            being placed in the draw.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            A seeded main draw player with a Bye withdraws on-site after
            the Qualifying started, the main draw has been made and the player
            is eligible to collect 2nd round prize money compensation. The order
            of play for the first day has not been released and the next seeded
            player who did not receive a Bye moves into that position. How is
            the prize money distributed?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The seeded player moving to the bye position will receive
            first round prize money if he loses and first round prize money plus
            the difference between 2nd round and the round reached if he wins.
            The LL inserted in the draw receives qualifying prize money earned
            plus prize money earned in main draw less the 1st round prize
            money.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            Same situation as above, however the order of play for the
            first day has been released.{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            If a qualifier is drawn into the bye position he will receive
            first round prize money if he loses and first round prize money plus
            the difference between 2nd round and the round reached if he wins.
            The lucky loser who was drawn into the 1st round position receives
            qualifying prize money earned plus money earned in main draw,
            less the 1st round money paid to the qualifier drawn into the bye
            position.{'\n\n'}


            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            Two main draw players withdraw overnight after the Qualifying has finished.
            The Qualifiers were drawn into their respective
            positions in the draw. The Order of Play for the first day of main
            draw is released. One of the withdrawing players was seeded with
            a bye. The LL’s are drawn into the vacant position in the draw. The
            second LL is drawn to replace the seeded player with the bye. How
            is the prize money decided if the withdrawing players have received
            compensation?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision: </Text>
            The LL’s receive PM dependent on which player they
            were drawn to replace in the draw. This is a different procedure than
            the cases when the WD’s happen before the Q is finished and the
            Q/LL’s inserted into the draw.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Case: </Text>
            After the withdrawal deadline on Friday, two players/ teams
            withdraw from the Qualifying/Main Draw Doubles list. One player/
            team was on-site and eligible for compensation while the other
            player/team was ineligible to receive prize money. How is it decided
            what PM the Alternates will be receiving?{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Decision:</Text>{'\n\n'}
            1. The highest ranked Alternate player/team who was accepted in
            the drawn is eligible to receive first round prize money or whatever
            money he/they earn in the tournament.{'\n\n'}
            2. The second ranked Alternate player/team who was accepted in
            the draw will receive the prize money earned in the tournament,
            less the amount paid to the withdrawing player/team. 3. The same
            principle applies if there were more than two withdrawing players/
            teams eligible for substitution by Alternates in the singles qualifying/
            main draw doubles.{'\n\n'}


            <Text style={RuleStyles.SubHeading2}>Doubles - Prior to First Match:</Text>{'\n\n'}
            A player/team accepted into the doubles main draw of an ATP Tour or ATP Challenger
            Tour event that withdraws prior to their first match from the main draw
            doubles after the doubles online on-site alternate deadline (Tour events) or the
            doubles on-site entry deadline (Challengers) for medical reasons shall receive
            first round prize money (second round in the case of a Bye) if the following conditions
            are met:{'\n\n'}
            <Text style={RuleStyles.SubHeading3}>a) </Text>
            The withdrawal was after the withdrawal deadline{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) </Text>
            The withdrawing player (and his partner) must be on-site at the time of the
            withdrawal and the withdrawing player must be declared unfit to compete by
            the tournament doctor{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>c) </Text>
            Both players used or could have used their doubles ranking for acceptance
            into the doubles draw.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>d) </Text>
            Players who have been out of competition due to long term injuries (30 days
            or more) and withdraw on-site become eligible for the provision to receive
            prize money only after they have returned to competition and competed in
            their first event.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>e) </Text>
            Players who have been out of competition, for any reason, 60 days or more
            and withdraw on-site become eligible for the provision to receive prize money
            only after they have returned to competition and competed in their first event.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>f) </Text>
            Each player is limited to two (2) tournaments*, non-consecutive, in a calendar
            year where he may receive prize money for doubles on-site withdrawal.{'\n\n'}
            *There are no limits to the number of events a player may receive prize money for the
            on-site withdrawal due to Covid-19 reasons as long as the events
            are not in back to back weeks.{'\n\n'}
            The alternate team replacing a team withdrawn on-site shall receive money
            earned in the main draw minus the prize money paid to the withdrawing player/team.{'\n\n'}



            <Text style={RuleStyles.SubHeading2}>Doubles - After First Round:</Text>{'\n\n'}
            Should a doubles match in an ATP Tour or ATP Challenger Tour event be uncontested
            * or fail to be completed, the losing team shall only receive points and prize
            money from the previous round unless one of the following exceptions is applicable:{'\n\n'}

            * A team withdrawing from the first round will not receive prize money whether
            there is or is not an alternate/lucky loser team, except if the team qualifies for
            compensation as defined above.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>a) </Text>
            Neither player was in the singles main draw;{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) </Text>
            Both players used, or could have used**, their doubles ranking for entry into
            the doubles draw (does not apply to wild card teams).{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>c) </Text>
            The retiring/withdrawing player is still in the singles competition and at the
            time of the medical examination is declared unfit to play in the singles of
            that event or, if no longer involved in the singles competition of that event, is
            forced to withdraw from the singles or doubles*** of the next tournament in
            which he is entered.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>i) </Text>
            For ATP Tour events if the retiring/withdrawing player was not in the singles draw
            of that event and is forced to withdraw from the next event in
            which he is accepted in the main draw (singles or doubles).{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>ii) </Text>
            For ATP Challenger events if the retiring/withdrawing player was not in
            the singles draw of that event and is forced to withdraw from the following
            week’s event (single or doubles) after the withdrawal deadline.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>d) </Text>
            The retiring/withdrawing player was not involved in the singles draw of that
            event and:{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>i) </Text>
            For ATP Tour events is forced to withdraw from the next event in which he
            is entered (singles or doubles).{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>ii) </Text>
            For ATP Challenger events is forced to withdraw from the following week’s
            event (singles or doubles***).{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>e) </Text>
            The retiring/withdrawing player had withdrawn/retired from his singles match,
            which was scheduled the same day; or, if the doubles match is scheduled
            for a following day the player is examined by the tournament Doctor and is
            declared unfit for competition in the doubles event.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>** </Text>
            Example: Player A is not in the singles draw and his doubles ranking is 20;
            his partner, Player B, is in the singles draw with a ranking of 15. Player B’s
            doubles ranking is 30. The cutoff for their method of entry is 60. Using player
            B’s doubles ranking would have kept them as a direct acceptance so they
            qualify for exception b) above.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>*** </Text>
            For ATP Challenger events the withdrawal for doubles must be after the withdrawal
            deadline.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>4) </Text>
            A player who receives a “bye” and loses in the second round shall receive second
            round loser’s prize money.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>5) </Text>
            Players affected by the entries or seedings not in accordance with ATP Rules and
            Regulations shall not be entitled to compensation. Such entry or seeding variances
            shall be resolved at the sole discretion of the Senior Vice President - Rules &
            Competition.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>6) </Text>
            A tournament must send to ATP any prize money not paid to a player who is defaulted
            for improper conduct.{'\n\n'}

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule32', next: 'Rule34', nav: navigation }} />
    </>
  );
}


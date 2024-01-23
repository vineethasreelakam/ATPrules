import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';

export default function Rule127({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>IX. Pepperstone ATP RANKINGS</Text>
          <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule2.png' }} />

          <ZoomText>
            <Text style={RuleStyles.Description}>
              <Text style={RuleStyles.SubHeading1}>9.03 Pepperstone ATP Rankings</Text>{'\n\n'}

              <Text style={RuleStyles.SubHeading2}>A. Commitment Players. </Text>
              The year-end Pepperstone ATP Rankings is based on calculating, for each player, his total points from the four (4) Grand Slams, the eight
              (8) mandatory ATP Tour Masters 1000 tournaments and the Nitto ATP Finals of the
              ranking period, the United Cup and his best seven (7) results from the United Cup, all
              ATP Tour 500, ATP Tour 250, ATP Challenger Tour and ITF Men’s WTT tournaments.
              For every Grand Slam, mandatory ATP Tour Masters 1000 tournament or United Cup
              for which a player is not in the main draw, and was not (and, in the case of a Grand
              Slam, would not have been, had he and all other players entered) a main draw direct
              acceptance on the original acceptance list, and never became a main draw direct acceptance, the number of his results from all other eligible tournaments in the ranking
              period, that count for his ranking, is increased by one (1). In weeks where there are
              not four (4) Grand Slams and eight (8) ATP Tour Masters 1000 tournaments in the
              ranking period, the number of a player’s best results from all eligible tournaments in
              the ranking period will be adjusted accordingly. Once a player is accepted in the main
              draw of one of these twelve (12) tournaments, as a direct acceptance, a qualifier, a
              special exempt or a lucky loser, or having accepted a wild card, his result in this tournament shall count for his ranking, whether or not he participates.* In a 52-week period, players shall be permitted to replace up to 3 mandatory ATP Tour Masters 1000
              singles main draw results with a better score from an ATP Tour 500 or ATP Tour 250
              event, when the replacing score is achieved after the ATP Tour Masters 1000 score
              that is being replaced. Notwithstanding the foregoing sentence, the player must have
              competed and not received a ranking penalty at the ATP Tour Masters 1000 tournament to replace the score.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>B. Non-commitment Players. </Text>
              The Pepperstone ATP Rankings is based on calculating,
              for each player, his total points from the four (4) Grand Slams, the eight (8) mandatory ATP Tour Masters 1000 tournaments and the Nitto ATP Finals of the ranking
              period, and his best seven (7) results from the United Cup, all ATP Tour 500, ATP
              Tour 250, ATP Challenger Tour and ITF Men’s WTT tournaments. For every Grand
              Slam or mandatory ATP Tour Masters 1000 tournament for which a player is not in
              the main draw, and was not (and, in the case of a Grand Slam, would not have been,
              had he and all other players entered) a main draw direct acceptance on the original
              acceptance list, and never became a main draw direct acceptance, the number of
              his results from all other eligible tournaments in the ranking period, that count for his
              ranking, is increased by one (1). In weeks where there are not four (4) Grand Slams
              and eight (8) ATP Tour Masters 1000 tournaments in the ranking period, the number
              of a player’s best results from all eligible tournaments in the ranking period will be
              adjusted accordingly. Once a player is accepted in the main draw of one of these
              twelve (12) tournaments, as a direct acceptance, a qualifier, a special exempt or a
              lucky loser, or having accepted a wild card, his result in this tournament shall count
              for his ranking, whether or not he participates. In a 52-week period, players shall be
              permitted to replace up to 3 mandatory ATP Tour Masters 1000 singles main draw
              results with a better score from an ATP Tour 500 or ATP Tour 250 event, when the
              replacing score is achieved after the ATP Tour Masters 1000 score that is being replaced. Notwithstanding the foregoing sentence, the player must have competed and
              not received a ranking penalty at the ATP Tour Masters 1000 tournament to replace
              the score.*

              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>C. ATP Tour 500 – Ranking Penalty. </Text>
              A player’s (Commitment and Non-Commitment
              players) withdrawal from an ATP Tour 500 event whether on time or after the 10 AM
              deadline, shall result in a zero (0) point ranking penalty. Further non-consecutive
              withdrawals shall result in a zero (0) point ranking penalty assessed for each additional withdrawal. Players with multiple consecutive withdrawals who are out of
              competition for 30 days or longer due to injury will not be subject to a ranking penalty as long as verified and approved medical forms are provided; or, a player shall
              not have the ranking penalty imposed if he completes the Promotional Activities requirement as specified under “Repeal of Withdrawal Fines and/or Penalties” or if the
              on-site withdrawal procedures apply. Players may also appeal withdrawal penalties
              to a Tribunal who will determine whether the penalties are affirmed or set aside.* A
              commitment player who has received a zero (0) point ranking penalty for withdrawing
              from an ATP Tour 500 event may replace the zero (0) point by playing an additional
              ATP Tour 500 event in that same calendar year for a total of four (4) played. The replacement tournament must be after the 500 withdrawal that has resulted in a ranking
              penalty. Only one (1) additional ATP Tour 500 event per year may be used to replace
              an ATP Tour 500 ranking penalty.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>* Note 1: </Text>
              Commitment players who are unable to fulfill their commitment, are not eligible to appeal the ranking penalty.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Note 2: </Text>
              (Applicable for 9.03 A. B. C.). Players returning to competition with an Entry
              Protection Ranking may replace ranking penalties assessed during the period of injury with results obtained at tournaments following their return to competition.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Note 3: </Text>
              (Applicable for 9.03 A. and B.) Players who are out of competition for three or
              more consecutive months (13-weeks minimum) can replace zero-pointers as follows:
              {'\n\n'}
              <ImageViewerComponent props={{ ImageStyle: RuleStyles.ImageStyle, ImageName: 'rule127_1.png' }} />
              {'\n\n'}
              Player can drop zero-point ranking penalties (only from mandatory Masters 1000
              events) when he competes in his next ATP 250/500 event played. When he drops the
              first received zero-point ranking penalty, his next best ‘non-countable’ will count in his
              breakdown.
              {'\n\n'}
              *Missed mandatory events include Grand Slams. However, players can only replace 0-pointers from Masters 1000.
              {'\n\n'}
              *Players must submit application to Medical Committee to be eligible to replace zero-pointers.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>D. </Text>
              Loser points for the rounds achieved are awarded to players in any tournament not
              completed.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>E. Ties. </Text>
              When two or more players have the same total number of points, ties shall be
              broken as follows:
              {'\n\n'}
              1) the most total points from the Grand Slams, ATP Tour Masters 1000 mandatory
              tournaments and Nitto ATP Finals main draws, and if still tied, then,
              {'\n\n'}
              2) the fewest events played, counting all missed Grand Slams, ATP Tour Masters
              1000 tournaments they could have played (as described under A. above) as if
              played, and if still tied, then,
              {'\n\n'}
              3) the highest number of points from one single tournament, then, if needed, the
              second highest, and so on.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>F. Entry Protection</Text>
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>1) Petition. </Text>
              A player may petition the ATP CEO, or his designee, for an entry protection when he is physically injured or has a documented medical illness and
              does not compete in any tennis event, including Special Events – Exhibitions, for
              a minimum period of six (6) months. The written petition must be received within
              six (6) months after his last tournament and must provide medical documentation
              including a letter from a treating licensed physician confirming the injury or illness.
              Each petition shall be evaluated on a case by case basis by the ATP Medical
              Services Committee.
              {'\n\n'}


              <Text style={RuleStyles.SubHeading3}>2) Calculation and Use. </Text>
              The entry protection shall be a position in the Pepperstone
              ATP Rankings, as determined by the player’s average Pepperstone ATP Rankings position during the first three (3) months* after his last event played. The entry protection shall be for entry into the main draw or qualifying competition or for
              special exempt consideration. The entry protection shall not be used for seeding
              purposes or lucky loser consideration.
              {'\n\n'}
              *The player must be ranked (have at least one singles ranking point for a singles
              protected ranking and/or one doubles ranking point for a doubles protected ranking) during each week of this three (3) month period.
              {'\n\n'}
              A player who has been out of competition and is applying for Entry Protection may
              not include any period of (Doping, Corruption and/or Conduct) suspension in the
              player’s weeks away from competition in order to qualify for Entry Protection.
              {'\n\n'}

              <Text style={RuleStyles.SubHeading3}>3) Limit of Use.</Text>
              {'\n\n'}
              a) If a player is physically injured and does not compete in any tennis event for
              a period of at least six (6) months but less than twelve (12) months, the entry
              protection shall be in effect for the first nine (9) singles and the first nine (9)
              doubles tournaments that the player competes* in using the entry protection
              (excluding wild cards and entries as a direct acceptance with his current position in the Pepperstone ATP Rankings) or for the period up to nine (9) months
              beginning with the first tennis event, including Special Events – Exhibitions,
              that the player competes in, whichever occurs first.
              {'\n\n'}
              b) If a player is physically injured and does not compete in any tennis event for
              a period of twelve (12) months or longer, the entry protection shall be in effect
              for the first twelve (12) singles tournaments and the first twelve (12) doubles
              tournaments that the player competes* in using the entry protection (excluding wild cards and entries as a direct acceptance with his current position in
              the Pepperstone ATP Rankings) or for the period up to twelve (12) months
              beginning with the first tennis event, including Special Events – Exhibitions,
              that the player competes in, whichever occurs first.
              {'\n\n'}
              *Note: For purposes of this rule, once the player is included in the draw or
              accepts prize money as an on-site withdrawal, the event shall count against
              the players’ total as specified under a) and b) above. The United Cup shall
              not count against a player’s total protected ranking allowance.
              {'\n\n'}
              c) The use of a protected ranking to enter the singles and/or doubles of a Grand
              Slam event is limited to once per Grand Slam event.
              {'\n\n'}
              d) The use of a protected ranking to enter the singles and/or doubles of the
              United Cup is limited to one (1) per the duration of the player’s Protected
              Ranking.


              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>4) Expiration Date. </Text>
              A player has three (3) years from his original last event played
              to activate his protected ranking and will not be eligible to use his entry protected
              ranking beyond this date. A player who does not compete in any tennis event, including Special Events – Exhibitions, for a period of three (3) years from the date
              of his original last event played will have his entry protection revoked.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>5) Re-injury Protection. </Text>
              A player who has returned to competition and re-injures
              himself may petition for a “freeze” of the nine (9) or twelve (12) month limit for
              competing using his protected ranking. To be eligible for the “freeze” the player
              must be out of competition for a minimum of three (3) months, the written petition
              for the “freeze” must be received within this period. Upon the player’s return to
              competition he shall have the same number of events and weeks remaining as
              were available when the “freeze” went into effect. A maximum of two (2) “freezes”
              are allowed during the nine (9) or twelve (12) month period.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Note: </Text>
              For purposes of this rule, three (3) months is calculated at thirteen (13)
              weeks; six (6) months is calculated at twenty-six (26) weeks; nine (9) months
              is calculated at thirty-nine (39) weeks; and twelve (12) months is calculated at
              fifty-two (52) weeks.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Case: </Text>
              A player requests an entry protection freeze after the three
              (3) year expiration has passed; however, his last event played is
              before the three (3) year expiration date. Can the player “freeze” his
              protected ranking?
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Decision: </Text>
              A player cannot request a “freeze” after the three (3) year
              expiration has passed.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Case: </Text>
              A player returns to competition following a “freeze”, the number of weeks remaining from the freeze extend beyond the three (3)
              year expiration date. Can the player use all remaining weeks past
              the three (3) year expiration date?
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Decision: </Text>
              A player cannot extend the use of his entry protected
              ranking beyond the three (3) year expiration date.
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Case: </Text>
              A player accepted in an ATP Tour, ATP Challenger Tour main
              draw or ATP Tour/Challenger Qualifying list using a PR, withdraws
              prior to the withdrawal deadline and accepts a WC into the same
              event. Does this tournament count towards the total tournaments at
              which a player may use his PR?
              {'\n\n'}
              <Text style={RuleStyles.SubHeading3}>Decision: </Text>
              No, this tournament will not count towards the player’s
              total of tournaments.

              {'\n\n'}
              <Text style={RuleStyles.SubHeading2}>G. Points.</Text> {'\n\n'}
              {'\n\n'}
              1) Points shall be allocated based on tournament category (Grand Slam, Nitto ATP
              Finals, ATP Tour Masters 1000, ATP Tour 500, ATP Tour 250, ATP Challenger
              Tour and ITF Men’s WTT events).
              {'\n\n'}
              2) Points are assigned to the losers of the round indicated. Any player who reaches
              the second round by drawing a bye and then loses shall be considered to have
              lost in the first round and shall receive first round loser’s points. Wild cards at
              Grand Slams and ATP Tour Masters 1000 events receive points only from the 2nd
              round. No points are awarded for a first round loss at ATP Tour 500 & 250 events,
              ATP Challenger Tour or ITF Men’s WTT events.
              {'\n\n'}
              3) Players qualifying for the main draw through the qualifying competition shall receive qualifying points in addition to any points earned, as per the following table,
              with the exception of ITF Men’s WTT events.
              {'\n\n'}
              4) In addition to the points allocated as per the following table, points shall be allocated to losers at Grand Slam, ATP Tour Masters 1000, ATP Tour 500 and ATP
              Tour 250 tournaments qualifying events, as follows:
              {'\n\n'}

              {'\n\n'}Grand Slams {'\t'} 16 points for a last round loss
              {'\n\t\t\t\t'} 8 points for a second round loss
              {'\n\n'}ATP Tour Masters 1000 {'\t'} 16 points for a last round loss (*)
              {'\n\t\t\t\t'}0 points for a first round loss
              {'\n\n'}ATP Tour 500 {'\t'} 10 points for a last round loss (**)
              {'\n\t\t\t\t'}0 points for a first round loss
              {'\n\n'}ATP Tour 250 {'\t'} 6 points for a last round loss (***)
              {'\n\t\t\t\t'}0 points for a first round loss
              {'\n\n\t'}* 8 points only if the main draw is larger than 56
              {'\n\n\t'}** 4 points only if the main draw is larger than 32
              {'\n\n\t'}*** 3 Points only if the main draw is larger than 32
              {'\n\n'}

            </Text>
          </ZoomText>
          <ImageViewerComponent props={{ ImageStyle: RuleStyles.VerticalImageStyle, ImageName: 'rule127.png' }} />
          <ZoomText>
            <Text style={RuleStyles.Description}>
              * Nitto ATP Finals 1,500 for undefeated Champion (200 for each round robin match
              win, plus 400 for a semi-final win, plus 500 for the final win)
              {'\n\n'}
              ** For details, see Section 4.03 G.
              {'\n\n'}
              <ImageViewerComponent props={{ ImageStyle: RuleStyles.VerticalImageStyle, ImageName: 'rule127_2.png' }} />
              {'\n\n'}
              * Nitto ATP Finals 1,500 for undefeated Champion (200 for each round robin match
              win, plus 400 for a semi-final win, plus 500 for the final win)
              {'\n\n'}
              ** For details, see Section 4.03 G.
              {'\n\n'}
              *** The doubles qualifying team shall receive 45 ranking points. The team losing in
              the final round of qualifying shall receive 25 ranking points.
              {'\n\n'}
              Teams receiving a first round Bye and subsequently losing in the final round receive no points.
              {'\n\n'}
            </Text>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule126', next: 'Rule128', nav: navigation }} />
    </>
  );
}


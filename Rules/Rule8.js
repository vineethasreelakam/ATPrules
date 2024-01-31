import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { RuleStyles } from "./Styles.js";
import RuleNavigationButtons from "../screens/RuleNavigationButtons.js";
import ImageViewerComponent from "../screens/ImageViewerComponent.js";
import ZoomText from "../Component/ZoomText.js";
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule8({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView
          style={RuleStyles.ScrollViewStyle}
          minimumZoomScale={1}
          maximumZoomScale={10}
        >
          <HighlightText style={RuleStyles.MainHeading}>
            I. ATP CIRCUIT REGULATIONS
          </HighlightText>
          <ImageViewerComponent
            props={{
              ImageStyle: RuleStyles.ImageStyle,
              ImageName: "rule2.png",
            }}
          />
          <ZoomText>
            <HighlightText style={RuleStyles.Description}>
              <HighlightText style={RuleStyles.SubHeading1}>
                1.07 Commitment, Membership Obligations and Bonus Pool
              </HighlightText>
              {"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                A.Player Entry and Commitment to Rules{" "}
              </HighlightText>
              {"\n\n"}
              Any player who is included in the Pepperstone ATP Rankings for
              singles (hereafter referred to as “Pepperstone ATP Rankings”) or
              the Pepperstone ATP Doubles Rankings and/or commits to enter or
              participates in any ATP Tour or ATP Challenger Tour tournament
              consents and agrees with the following:{"\n\n"}
              1) To comply with and be bound by all of the provisions of the
              2024 ATP Official Rulebook and ATP By-Laws (the “ATP Rules”),
              including, but not limited to, all amendments to ATP Rules.
              {"\n\n"}
              2) The International Tennis Integrity Agency (“ITIA”) may conduct
              anti-doping testing at ATP sanctioned events under the Tennis
              Anti-Doping Programme (the “TADP”), the full text of which can be
              found at 
              <HighlightText
              style={RuleStyles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.itia.tennis/');
              }}>
              https://www.itia.tennis/.
              </HighlightText> ATP Tour, Inc. (“ATP”) will
              honor and enforce any penalties or sanctions against players
              resulting from the TADP. The TADP shall apply to and be binding
              upon all players and shall govern all ATP-sanctioned events
              including ATP Challenger Tour events. Players shall submit to the
              jurisdiction and authority of the ITIA to manage, administer and
              enforce the TADP and to the jurisdiction and authority of the
              Anti-Doping Tribunal and the Court of Arbitration for Sport to
              determine any charges brought under the TADP. Players also consent
              to the release to ATP of their Anti-Doping results obtained by the
              ITIA at ATP events, including missed tests and/or filing failures.
              {"\n\n"}
              3) To comply with and be bound by all of the provisions of the
              2024 Tennis Anti-Corruption Program Rules, the full text of which
              can be found at: 
              <HighlightText
              style={RuleStyles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.itia.tennis/tacp/rules/');
              }}>
              https://www.itia.tennis/tacp/rules/
              </HighlightText> and Tennis
              Anti-Doping Programme (the "TADP"), a copy of which is available
              online at 
              <HighlightText
              style={RuleStyles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL('https://www.itia.tennis/tadp/rules/');
              }}>
              https://www.itia.tennis/tadp/rules/. 
              </HighlightText>{"\n\n"}
              4) To review and agree to the terms and conditions contained in
              the Notice of Privacy Practices set forth in “Exhibit P - Privacy
              Notice (“HIPAA”).{"\n\n"}
              5) Each calendar year all players shall, as a condition of
              entering or participating in any event organized or sanctioned by
              ATP, deliver to ATP a signed Consent and Agreement in the form set
              out in “Exhibit O - Consent and Agreement Form”.{"\n\n"}
              6) For entry into an ATP Tour or ATP Challenger Tour tournament,
              all players must be an ATP Player Member (”Member”) or an ATP
              Registered Player. Wild cards are exempt from this provision.
              {"\n\n"}
              7) All Members must, every two (2) years, submit an authorized
              physical examination form as shown in “Exhibit Y - Mandatory
              Physical” to be eligible to enter and compete on the ATP Tour or
              ATP Challenger Tour.{"\n\n"}
              a) A pre-competition medical examination is mandatory and must be
              submitted prior to a player participating in his first event of
              2024.{"\n\n"}
              b) Members competing in their first ATP Tour or ATP Challenger
              Tour event after 1 January 2024 shall have thirty (30) days after
              the Member’s first match to complete and submit the medical
              examination forms. After the thirty (30) day period has ended the
              member will not be allowed to enter or compete in any ATP Tour or
              ATP Challenger Tour event until such time that the medical
              examination form has been submitted and accepted.{"\n\n"}
              c) Members submitting a medical examination form which indicates
              they are “unfit to play” will be required to sign a release/waiver
              form before they will be allowed to compete in any ATP Tour or ATP
              Challenger Tour event. This form will be provided by ATP upon
              request.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                B.Official Means of Communication{" "}
              </HighlightText>
              {"\n\n"}
              The PlayerZone and Tour Weekly are ATP’s official means of
              communicating with its player members. All players must stay
              informed of all information published by ATP through these
              official means of communication. Notification of any
              modifications, deletions or additions to the rules set forth in
              this Rulebook shall be through such means of communication and
              shall become effective upon their publication.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                C.Commitment Player
              </HighlightText>
              {"\n\n"}A 2024 ATP commitment player is any player positioned in
              the Top 30 in the ATP 2023 Rankings (singles) as of November 13,
              2023.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                D.Commitment
              </HighlightText>
              {"\n\n"}
              The commitment for the commitment player is, the singles event of
              all ATP Tour Masters 1000 tournaments for which he is accepted,
              the Nitto ATP Finals (if qualified as a direct acceptance or
              designated as the alternate) and four (4) ATP Tour 500
              tournaments, one (1) of which must be held following the US Open.
              For commitment and ranking purposes, the Monte Carlo Masters 1000
              will be included in the minimum requirements for the 500 category.
              {"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                E. Commitment Player Entry Exception – Top 30{" "}
              </HighlightText>
              {"\n\n"}
              Except as otherwise set forth herein, commitment players are
              automatically accepted into the main draw of all ATP Tour 500
              events in which they have entered in a proper manner.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                F. Good Standing
              </HighlightText>
              {"\n\n"}A player is in good standing with ATP if he is in full
              compliance with all ATP Rules (including the Tennis
              Anti-Corruption Program Rules and Tennis Anti-Doping Programme),
              is not suspended and has paid/complied with any debts and/or
              obligations to ATP(e.g., complete all Stars Program
              responsibilities, if applicable) or is otherwise confirmed to be
              in good standing by the ATP Chief Executive Officer (CEO).{"\n\n"}
              Penalties for not being in good standing with ATP result in a
              player:{"\n\n"}
              1) Not being eligible to participate in the bonus program;{"\n\n"}
              2) Not being eligible to participate as a main draw entry in the
              following ATP Year;{"\n\n"}
              3) Not being eligible to earn a year of credit toward ATP
              retirement program.{"\n\n"}
              4) Not being eligible for the Platinum Benefits (as defined
              below).{"\n\n"}
              For the avoidance of doubt, accrued benefits that have not been
              paid prior to the determination of a breach of the ATP Rules
              (including the Tennis Anti-Corruption Program Rules and Tennis
              Anti-Doping Programme) shall remain payable unless otherwise
              determined by ATP.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                G. ATP Tour 500 Bonus Pool
              </HighlightText>
              {"\n\n"}
              Only members who are in good standing meet the Platinum Benefit
              eligibility criteria (as defined in Section 1 .21) and fulfill the
              ATP Tour 500 commitment requirements, shall be eligible for the
              ATP Tour 500 bonus pool. The order of standings will be based on
              total Pepperstone ATP Rankings points earned at the ATP Tour 500
              events in 2024. The 2024 ATP Tour 500 bonus pool will be a total
              of USD $1,340,000, with distribution to the top 5 players as
              follow:{"\n\n"}
            </HighlightText>
          </ZoomText>
          <ImageViewerComponent
            props={{
              ImageStyle: RuleStyles.ImageStyle,
              ImageName: "rule8_1.png",
            }}
          />
          <ImageViewerComponent
            props={{
              ImageStyle: RuleStyles.ImageStyle,
              ImageName: "rule8_2.png",
            }}
          />
          <ZoomText>
            <HighlightText>
              *For the avoidance of doubt, points from the Monte Carlo Masters
              1000 tournament will not be included in the ATP Tour 500 bonus
              pool point calculation.{"\n\n"}
              The order of standings for the ATP 500 Bonus Pool will be based on
              total Pepperstone ATP Rankings points earned at the 500 events.
              {"\n\n"}
              Ties shall be broken as follows:{"\n\n"}
              1. Most ATP Tour 500 events played; followed by 2. Highest number
              of points earned from a single event, followed by 2nd highest and
              so on.{"\n\n"}
              If players have the same points breakdowns: 3. The higher ranked
              player as per the Year-End Pepperstone ATP Singles Rankings wins
              the tie.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading2}>
                H. ATP Tour Masters 1000 & Nitto ATP Finals (“Finals”) Bonus
                Pool{" "}
              </HighlightText>
              {"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                General.{" "}
              </HighlightText>
              {"\n\n"}
              The ATP Tour Masters 1000 and Nitto ATP Finals 2024 Bonus Pool
              will be USD $20,000,000. The order of standings will be based on
              total Pepperstone ATP Ranking points earned across the ATP Tour
              Masters 1000 and Nitto ATP Finals in 2024. The bonus pool
              financial distribution is to be confirmed.{"\n\n"}
              The bonus pool distribution payment to players will be made by the
              end of January 2025.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                1) Conditions of Eligibility for ATP Tour Masters 1000 and Nitto
                ATP Finals 2024 Bonus Pool.
              </HighlightText>
              {"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                a) Platinum Benefit Eligibility Criteria.{" "}
              </HighlightText>
              Only members who are in good standing and meet the Platinum
              Benefit eligibility criteria (as defined in Section 1 .21 below)
              shall be eligible for the ATP Tour Masters 1000 and Nitto ATP
              Finals Bonus Pool.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                b) Nitto ATP Finals.{" "}
              </HighlightText>
              All players must play, if they qualify, in the Nitto ATP
              Finals.Alternates must appear and fulfill the requirements of the
              alternate, as determined by ATP. A player who is otherwise
              qualified but does not play in the Nitto ATP Finals for a bona
              fide injury or other reason which constitutes good cause in ATP's
              determination may receive 80% of the bonus he earned (subject to
              Section 1.07.H.2) by appearing at the finals event to do promotional
              activities, as determined by ATP.For the avoidance of
              doubt, if a player misses the Nitto ATP Finals and does not engage
              in promotional activities as described above, such player will not
              be eligible to receive any bonus, unless approved by ATP.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                c) Suspended player.{" "}
              </HighlightText>
              A player who is suspended from an event shall have the suspension
              count as a missed event for the bonus year in which the event is
              held.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                d) Not direct acceptance.{" "}
              </HighlightText>
              Any player who is not a direct acceptance to a mandatory ATP Tour
              Masters 1000 event shall not have that event count as a missed
              event.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>
                e) Promotional work.
              </HighlightText>
              i) On-site promotional activities for withdrawn players are
              applicable for relief of fines, bonus pool reduction recoupment
              pursuant to Section 1.07.H.2, and/or suspensions but shall not
              provide relief for the ranking penalty and shall count as a missed
              event.{"\n\n"}
              ii) On-site promotional activities are not applicable to players
              missing the event due to being suspended.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>2) </HighlightText>
              {"\n\n"}
              Subject to the limitations and eligibility criteria herein,
              players shall be eligible for the bonus pool in this section based
              upon the total Pepperstone ATP Rankings points earned at the ATP
              Tour Masters 1000 and Nitto ATP Finals events in 2024. To be paid
              the full bonus pool amount set forth in this section a player must
              play all mandatory ATP Tour Masters 1000 events and the Nitto ATP
              Finals in which such player is a main draw direct acceptance.{" "}
              {"\n\n"}
              ATP Tour Masters 1000 main draw direct acceptance players who fail
              to compete (for any reason) in an ATP Tour Masters 1000 event
              shall have their bonus pool amount reduced as follows:{"\n"}
            </HighlightText>
          </ZoomText>
          <ImageViewerComponent
            props={{
              ImageStyle: RuleStyles.ImageStyle,
              ImageName: "rule8_3.png",
            }}
          />
          <ZoomText>
            <HighlightText>
              {"\n"}
              In no event shall a player be able to recoup an amount greater
              than USD $200,000 by fulfilling on-site promotional activities
              requirements.{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>3) </HighlightText>
              {"\n\n"}A player who, as of December 31, 2022, earned commitment
              and elected to maintain his earned commitment reductions
              pursuant to the 2022 ATP Tour Official Rule Book shall continue to
              hold such commitment reductions and be bound by the applicable
              provisions of the 2022 ATP Tour Official Rule Book relating to bonus
              pool and commitment penalties (for the avoidance of doubt,
              such player will not be able to replace zero (0) point ranking
              penalties for missing ATP Tour Masters 1000 tournaments for any
              reason except as permitted in Section 9.03).{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>4) </HighlightText>
              {"\n\n"}
              The order of standings for the ATP Masters 1000 Bonus Pool will be
              based on the total Pepperstone ATP Rankings points earned across
              the ATP Tour Masters 1000 category and Nitto ATP Finals. {"\n\n"}
              Ties shall be broken as follows:{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>1. </HighlightText>
              Most ATP Tour 1000 events played; followed by{"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>1. </HighlightText>
              The highest number of points earned from a single event, followed
              by the 2nd highest and so on.{"\n\n"}
              If players have the same points breakdowns: {"\n\n"}
              <HighlightText style={RuleStyles.SubHeading3}>3. </HighlightText>
              The higher-ranked player, as per the Year-End Pepperstone ATP
              Singles Rankings, wins the tie
              {"\n\n"}
            </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons
        props={{ prev: "Rule7", next: "Rule9", nav: navigation }}
      />
    </>
  );
}

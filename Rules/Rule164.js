import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule164({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT I - Rules of Tennis</HighlightText>{'\n\n'}

            {'\n\t\t\t\t\t\t'} FOREWORD
            {'\n\t'}Rule 1 {'\t\t'} THE COURT
            {'\n\t'}Rule 2 {'\t\t'} PERMANENT FIXTURES
            {'\n\t'}Rule 3 {'\t\t'} THE BALL
            {'\n\t'}Rule 4 {'\t\t'} THE RACKET
            {'\n\t'}Rule 5 {'\t\t'} SCORE IN A GAME
            {'\n\t'}Rule 6 {'\t\t'} SCORE IN A SET
            {'\n\t'}Rule 7 {'\t\t'} SCORE IN A MATCH
            {'\n\t'}Rule 8 {'\t\t'} SERVER & RECEIVER
            {'\n\t'}Rule 9 {'\t\t'} CHOICE OF ENDS & SERVICE
            {'\n\t'}Rule 10 {'\t'} CHANGE OF ENDS
            {'\n\t'}Rule 11 {'\t'} BALL IN PLAY
            {'\n\t'}Rule 12 {'\t'} BALL TOUCHES A LINE
            {'\n\t'}Rule 13 {'\t'} BALL TOUCHES A PERMANENT FIXTURE
            {'\n\t'}Rule 14 {'\t'} ORDER OF SERVICE
            {'\n\t'}Rule 15 {'\t'} ORDER OF RECEIVING IN DOUBLES
            {'\n\t'}Rule 16 {'\t'} THE SERVICE
            {'\n\t'}Rule 17 {'\t'} SERVING
            {'\n\t'}Rule 18 {'\t'} FOOTFAULT
            {'\n\t'}Rule 19 {'\t'} SERVICE FAULT
            {'\n\t'}Rule 20 {'\t'} SECOND SERVICE
            {'\n\t'}Rule 21 {'\t'} WHEN TO SERVE & RECEIVE
            {'\n\t'}Rule 22 {'\t'} THE LET DURING A SERVICE
            {'\n\t'}Rule 23 {'\t'} THE LET
            {'\n\t'}Rule 24 {'\t'} PLAYER LOSES POINT
            {'\n\t'}Rule 25 {'\t'} A GOOD RETURN
            {'\n\t'}Rule 26 {'\t'} HINDRANCE
            {'\n\t'}Rule 27 {'\t'} CORRECTING ERRORS
            {'\n\t'}Rule 28 {'\t'} ROLE OF COURT OFFICIALS
            {'\n\t'}Rule 29 {'\t'} CONTINUOUS PLAY
            {'\n\t'}Rule 30 {'\t'} COACHING
            {'\n\t'}Rule 31 {'\t'} PLAYER ANALYSIS TECHNOLOGY
            {'\n\t\t\t\t\t\t\t'}RULES OF WHEELCHAIR TENNIS
            {'\n\t\t\t\t\t\t\t'}AMENDMENT TO THE RULES OF TENNIS
            {'\n\t'}
            {'\n\t'}Appendix I {'\t\t'} THE BALL
            {'\n\t\t\t\t\t\t\t\t'} CLASSIFICATION OF COURT SURFACE PACE
            {'\n\t'}Appendix II {'\t'} THE RACKET
            {'\n\t'}Appendix III {'\t'} PLAYER ANALYSIS TECHNOLOGY
            {'\n\t'}Appendix IV {'\t'} ADVERTISING
            {'\n\t'}Appendix V {'\t'} ALTERNATIVE PROCEDURES AND SCORING {'\t\t\t\t\t\t\t\t'} METHODS
            {'\n\t'}Appendix VI {'\t'} ROLE OF COURT OFFICIALS
            {'\n\t'}Appendix VII  10 AND UNDER TENNIS COMPETITION
            {'\n\t'}Appendix VIII PLAN OF THE COURT
            {'\n\t'}Appendix IX {'\t'} SUGGESTIONS ON HOW TO MARK A COURT
            {'\n\t'}Appendix X {'\t'} RULES OF BEACH TENNIS
            {'\n\t'}Appendix XI {'\t'} PROCEDURES FOR REVIEW AND HEARINGS ON
            {'\n\t\t\t\t\t\t\t\t'}THE RULES OF TENNIS

            {'\n\n'}

            References to the International Tennis Federation or ITF shall hereafter mean ITF
            Limited.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>FOREWORD</HighlightText>{'\n\n'}
            The International Tennis Federation (ITF) is the governing body of the game of tennis
            and its duties and responsibilities include PROTECTING THE INTEGRITY OF THE
            GAME THROUGH determination of the Rules of Tennis.
            {'\n\n'}
            To assist the ITF in carrying out this responsibility, the ITF has appointed a Rules of
            Tennis Committee which continually monitors the game and its rules, and when considered
            necessary makes recommendations for changes to the Board of Directors of
            the ITF who in turn make recommendations to the Annual General Meeting of the ITF
            which is the ultimate authority for making any changes to the Rules of Tennis.
            {'\n\n'}
            Appendix V lists approved alternative procedures and scoring methods. In addition,
            on its own behalf or on application by interested parties, certain variations to the rules
            may be approved by the ITF for trial purposes only at a limited number of tournaments
            or events and/or for a limited time period. Such variations are not included in
            the published rules and require a report to the ITF on the conclusion of the approved
            trial.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            If there are any inconsistencies between the English version and Rules of
            Tennis translated into other languages, the English version shall prevail.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>1. THE COURT</HighlightText>{'\n\n'}
            The court shall be a rectangle, 78 feet (23.77 m) long and, for singles matches, 27
            feet (8.23 m) wide. For doubles matches, the court shall be 36 feet (10.97 m) wide.
            {'\n\n'}
            The court shall be divided across the middle by a net suspended by a cord or metal
            cable which shall pass over or be attached to two net posts at a height of 3 ½ feet
            (1.07 m). The net shall be fully extended so that it completely fills the space between
            the two net posts and it must be of sufficiently small mesh to ensure that a ball cannot
            pass through it. The height of the net shall be 3 feet (0.914 m) at the Center, where it
            shall be held down tightly by a strap. A band shall cover the cord or metal cable and
            the top of the net. The strap and band shall be completely white.
            {'\n\n'}
            {'\n\t'}• The maximum diameter of the cord or metal cable shall be 1/3 inch (0.8 cm).
            {'\n\t'}• The maximum width of the strap shall be 2 inches (5 cm).
            {'\n\t'}• The band shall be between 2 inches (5 cm) and 2 ½ inches (6.35 cm) deep
            on each side.

            {'\n\n'}For doubles matches, the centers of the net posts shall be 3 feet (0.914 m) outside
            the doubles court on each side.

            {'\n\n'}For singles matches, if a singles net is used, the centers of the net posts shall be 3
            feet (0.914 m) outside the singles court on each side. If a doubles net is used, then
            the net shall be supported, at a height of 3 ½ feet (1.07 m), by two singles sticks, the
            centers of which shall be 3 feet (0.914 m) outside the singles court on each side.
            {'\n\t'}• The net posts shall not be more than 6 inches (15 cm) square or 6 inches (15
            cm) in diameter.
            {'\n\t'}• The singles sticks shall not be more than 3 inches (7.5 cm) square or 3 inches
            (7.5 cm) in diameter.
            {'\n\t'}• The net posts and singles sticks shall not be more than 1 inch (2.5 cm) above
            the top of the net cord.
            {'\n\n'}
            The lines at the ends of the court are called baselines and the lines at the sides of the
            court are called sidelines.
            {'\n\n'}
            Two lines shall be drawn between the singles sidelines, 21 feet (6.40 m) from each
            side of the net, parallel with the net. These lines are called the service lines. On each
            side of the net, the area between the service line and the net shall be divided into two
            equal parts, the service courts, by the center service line. The center service line shall
            be drawn parallel with the singles sidelines and half way between them.
            {'\n\n'}
            Each baseline shall be divided in half by a center mark, 4 inches (10 cm) in length,
            which shall be drawn inside the court and parallel with the singles sidelines.
            {'\n\t'}• The center service line and center mark shall be 2 inches (5 cm) wide.
            {'\n\t'}• The other lines of the court shall be between 1 inch (2.5 cm) and 2 inches (5
            cm) wide, except that the baselines may be up to 4 inches (10 cm) wide.
            {'\n\n'}
            All court measurements shall be made to the outside of the lines and all lines of the
            court shall be of the same color clearly contrasting with the color of the surface.
            {'\n\n'}
            No advertising is allowed on the court, net, strap, band, net posts or singles sticks
            except as provided in Appendix IV.
            {'\n\n'}
            In addition to the court described above, the court designated as “Red” and the court
            designated as “Orange” in Appendix VII can be used for 10 and under tennis competition.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            Guidelines for minimum distances between the baseline and backstops and
            between the sidelines and sidestops can be found in Appendix IX.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>2. PERMANENT FIXTURES</HighlightText>{'\n\n'}
            The permanent fixtures of the court include the backstops and sidestops, the spectators,
            the stands and seats for spectators, all other fixtures around and above the
            court, the Chair Umpire, Line Umpires, net umpire and ball persons when in their
            recognized positions.
            {'\n\n'}
            In a singles match played with a doubles net and singles sticks, the net posts and the
            part of the net outside the singles sticks are permanent fixtures and are not considered
            as net posts or part of the net.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>3. THE BALL</HighlightText>{'\n\n'}
            Balls, which are approved for play under the Rules of Tennis, must comply with the
            specifications in Appendix I.
            {'\n\n'}
            The International Tennis Federation shall rule on the question of whether any ball
            or prototype complies with Appendix I or is otherwise approved, or not approved,
            for play. Such ruling may be taken on its own initiative or upon application by any
            party with a bona fide interest therein, including any player, equipment manufacturer
            or National Association or members thereof. Such rulings and applications shall be
            made in accordance with the applicable Review and Hearing Procedures of the
            International Tennis Federation (see Appendix X)
            {'\n\n'}

            The event organizers must announce in advance of the event:
            {'\n\t'}a. The number of balls for play (2, 3, 4 or 6).
            {'\n\t'}b. The ball change policy, if any.
            {'\n\n'}
            Ball changes, if any, can be made either:
            {'\n\n'}
            {'\n\t'}i) After an agreed odd number of games, in which case, the first ball change
            in the match shall take place two games earlier than for the rest of the
            match, to make allowance for the warm-up. A tie-break game counts as
            one game for the ball change. A ball change shall not take place at the
            beginning of a tie-break game. In this case, the ball change shall be delayed
            until the beginning of the second game of the next set; or
            {'\n\t'}ii. At the beginning of a set
            {'\n\n'}
            If a ball gets broken during play, the point shall be replayed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            If a ball is soft at the end of a point, should the point be
            replayed?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            If the ball is soft, not broken, the point shall not be
            replayed.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            Any ball to be used in a tournament which is played under the Rules of Tennis,
            must be named on the official ITF list of approved balls issued by the International
            Tennis Federation.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>4. THE RACKET</HighlightText>{'\n\n'}
            Rackets, which are approved for play under the Rules of Tennis, must comply with
            the specifications in Appendix II.
            {'\n\n'}
            The International Tennis Federation shall rule on the question of whether any racket
            or prototype complies with Appendix II or is otherwise approved, or not approved, for
            play. Such ruling may be undertaken on its own initiative, or upon application by any
            party with a bona fide interest therein, including any player, equipment manufacturer
            or National Association or members thereof. Such rulings and applications shall be
            made in accordance with the applicable Review and Hearing Procedures of the International
            Tennis Federation (see Appendix X).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            Is more than one set of strings allowed on the hitting surface of a racket?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No. The rule mentions a pattern (not patterns) of crossed
            strings. (See Appendix II)


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>
            Is the stringing pattern of a racket considered to be generally uniform and
            flat if the strings are on more than one plane?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 3: </HighlightText>
            Can vibration damping devices be placed on the strings of
            a racket? If so, where can they be placed?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Yes, but these devices may only be placed outside the
            pattern of the crossed strings.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 4: </HighlightText>
            During a point, a player accidentally breaks the strings. Can
            the player continue to play another point with this racket?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Yes, except where specifically prohibited by event organizers



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 5: </HighlightText>
            Is a player allowed to use more than one racket at any time
            during play?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 6: </HighlightText>
            Can a battery that affects playing characteristics be incorporated into a racket?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No. A battery is prohibited because it is an energy
            source, as are solar cells and other similar devices.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>5. SCORE IN A GAME</HighlightText>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a. Standard game</HighlightText>
            {'\n\n'}
            A standard game is scored as follows with the server’s score being called first:
            {'\n\t'}No point - “Love”
            {'\n\t'}First point - “15”
            {'\n\t'}Second point - “30”
            {'\n\t'}Third point - “40”
            {'\n\t'}Fourth point - “Game”
            {'\n\n'}
            except that if each player/team has won three points, the score is “Deuce”. After
            “Deuce”, the score is “Advantage” for the player/team who wins the next point. If that
            same player/team also wins the next point, that player/team wins the “Game”; if the
            opposing player/team wins the next point, the score is again “Deuce”. A player/team
            needs to win two consecutive points immediately after “Deuce” to win the “Game”.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b. Tie-break game</HighlightText>
            {'\n\n'}
            During a tie-break game, points are scored “Zero”,“1”, “2”, “3”, etc. The first player/
            team to win seven points wins the “Game” and “Set”, provided there is a margin of
            two points over the opponent(s). If necessary, the tie-break game shall continue until
            this margin is achieved.
            {'\n\n'}
            The player whose turn it is to serve shall serve the first point of the tie-break game.
            The following two points shall be served by the opponent(s) (in doubles, the player of
            the opposing team due to serve next). After this, each player/team shall serve
            alternately for two consecutive points until the end of the tie-break game (in doubles, the
            rotation of service within each team shall continue in the same order as during that
            set).
            {'\n\n'}
            The player/team whose turn it was to serve first in the tie-break game shall be the
            receiver in the first game of the following set.
            {'\n\n'}
            Additional approved alternative scoring methods can be found in Appendix V.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>6. SCORE IN A SET</HighlightText>{'\n\n'}
            There are different methods of scoring in a set. The two main methods are the
            “Advantage Set” and the “Tie-break Set”. Either method may be used provided that the
            one to be used is announced in advance of the event. If the “Tie-break Set” method is
            to be used, it must also be announced whether the final set will be played as a
            “Tiebreak Set” or an “Advantage Set”.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a. “Advantage Set”</HighlightText>{'\n\n'}
            The first player/team to win six games wins that “Set”, provided there is a margin
            of two games over the opponent(s). If necessary, the set shall continue until this
            margin is achieved.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b. “Tie-break Set”</HighlightText>{'\n\n'}
            The first player/team to win six games wins that “Set”, provided there is a margin
            of two games over the opponent(s). If the score reaches six games all, a tie-break
            game shall be played.
            {'\n\n'}
            Additional approved alternative scoring methods can be found in Appendix V.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>7. SCORE IN A MATCH</HighlightText>{'\n\n'}
            A match can be played to the best of 3 sets (a player/team needs to win 2 sets to
            win the match) or to the best of 5 sets (a player/team needs to win 3 sets to win the
            match).
            {'\n\n'}
            Additional approved alternative scoring methods can be found in Appendix V.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>8. SERVER & RECEIVER</HighlightText>{'\n\n'}
            The players/teams shall stand on opposite sides of the net. The server is the player
            who puts the ball into play for the first point. The receiver is the player who is ready
            to return the ball served by the server.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            Is the receiver allowed to stand outside the lines of the
            court?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            Yes. The receiver may take any position inside or outside
            the lines on the receiver’s side of the net.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>9. CHOICE OF ENDS & SERVICE</HighlightText>{'\n\n'}
            The choice of ends and the choice to be server or receiver in the first game shall be
            decided by toss before the warm-up starts. The player/team who wins the toss may
            choose:
            {'\n\n'}
            a. To be server or receiver in the first game of the match, in which case the opponent(s)
            shall choose the end of the court for the first game of the match; or
            {'\n\n'}
            b. The end of the court for the first game of the match, in which case the opponent(s)
            shall choose to be server or receiver for the first game of the match; or
            {'\n\n'}
            c. To require the opponent(s) to make one of the above choices.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            Do both players/teams have the right to new choices if the
            warm-up is stopped and the players leave the court?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            Yes. The result of the original toss stands, but new choices may be made
            by both players/teams
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>10. CHANGE OF ENDS</HighlightText>{'\n\n'}
            The players shall change ends at the end of the first, third and every subsequent odd
            game of each set. The players shall also change ends at the end of each set unless
            the total number of games in that set is even, in which case the players change ends
            at the end of the first game of the next set.
            {'\n\n'}
            During a tie-break game, players shall change ends after every six points.
            {'\n\n'}
            Additional approved alternative procedures can be found in Appendix V.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>11 BALL IN PLAY</HighlightText>{'\n\n'}
            Unless a fault or a let is called, the ball is in play from the moment the server hits the
            ball, and remains in play until the point is decided.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>12. BALL TOUCHES A LINE</HighlightText>{'\n\n'}
            If a ball touches a line, it is regarded as touching the court bounded by that line.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>13. BALL TOUCHES A PERMANENT FIXTURE</HighlightText>{'\n\n'}
            If the ball in play touches a permanent fixture after it has hit the correct court, the
            player who hit the ball wins the point. If the ball in play touches a permanent fixture
            before it hits the ground, the player who hit the ball loses the point.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>14. ORDER OF SERVICE</HighlightText>{'\n\n'}
            At the end of each standard game, the receiver shall become the server and the
            server shall become the receiver for the next game.
            {'\n\n'}
            In doubles, the team due to serve in the first game of each set shall decide which
            player shall serve for that game. Similarly, before the second game starts, their
            opponents shall decide which player shall serve for that game. The partner of the player
            who served in the first game shall serve in the third game and the partner of the
            player who served in the second game shall serve in the fourth game. This rotation
            shall continue until the end of the set.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>15. ORDER OF RECEIVING IN DOUBLES</HighlightText>{'\n\n'}
            The team which is due to receive in the first game of a set shall decide which player
            shall receive the first point in the game. Similarly, before the second game starts, their
            opponents shall decide which player shall receive the first point of that game. The
            player who was the receiver’s partner for the first point of the game shall receive the
            second point and this rotation shall continue until the end of the game and the set.
            {'\n\n'}
            After the receiver has returned the ball, either player in a team can hit the ball.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            Is one member of a doubles team allowed to play alone
            against the opponents?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            No.



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}> 16. THE SERVICE</HighlightText>{'\n\n'}
            Immediately before starting the service motion, the server shall stand at rest with
            both feet behind (i.e. further from the net than) the baseline and within the imaginary
            extensions of the center mark and the sideline.
            {'\n\n'}
            The server shall then release the ball by hand in any direction and hit the ball with the
            racket before the ball hits the ground. The service motion is completed at the moment
            that the player’s racket hits or misses the ball. A player who is able to use only one
            arm may use the racket for the release of the ball.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>17 SERVING</HighlightText>{'\n\n'}
            When serving in a standard game, the server shall stand behind alternate halves of
            the court, starting from the right half of the court in every game.
            {'\n\n'}
            In a tie-break game, the service shall be served from behind alternate halves of the
            court, with the first served from the right half of the court.
            {'\n\n'}
            The service shall pass over the net and hit the service court diagonally opposite,
            before the receiver returns it.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>18. FOOT FAULT</HighlightText>{'\n\n'}
            During the service motion, the server shall not:
            {'\n\n'}
            a. Change position by walking or running, although slight movements of the feet
            are permitted; or
            {'\n\n'}
            b. Touch the baseline or the court with either foot; or
            {'\n\n'}
            c. Touch the area outside the imaginary extension of the sideline with either
            foot; or
            {'\n\n'}
            d. Touch the imaginary extension of the center mark with either foot.
            {'\n\n'}
            If the server breaks this rule it is a “Foot Fault”.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            In a singles match, is the server allowed to serve standing
            behind the part of the baseline between the singles sideline and the
            doubles sideline?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            No.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>{'\n\n'}
            Is the server allowed to have one or both feet off the
            ground?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            Yes.



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>19. SERVICE FAULT</HighlightText>{'\n\n'}
            The service is a fault if:
            {'\n\n'}a. The server breaks rules 16, 17 or 18; or
            {'\n\n'}b. The server misses the ball when trying to hit it; or
            {'\n\n'}c. The ball served touches a permanent fixture, singles stick or net post before it hits
            the ground; or
            {'\n\n'}d. The ball served touches the server or server’s partner, or anything the server or
            server’s partner is wearing or carrying.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            After tossing a ball to serve, the server decides not to hit it
            and catches it instead. Is this a fault?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            No. A player, who tosses the ball and then decides not to
            hit it, is allowed to catch the ball with the hand or the racket, or to let
            the ball bounce.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>{'\n\n'}
            During a singles match played on a court with net posts
            and singles sticks, the ball served hits a singles stick and then hits
            the correct service court. Is this a fault?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            Yes.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>20. SECOND SERVICE</HighlightText>{'\n\n'}
            If the first service is a fault, the server shall serve again without delay from behind the
            same half of the court from which that fault was served, unless the service was from
            the wrong half.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>21. WHEN TO SERVE & RECEIVE</HighlightText>{'\n\n'}
            The server shall not serve until the receiver is ready. However, the receiver shall play
            to the reasonable pace of the server and shall be ready to receive within a reasonable
            time of the server being ready.
            {'\n\n'}
            A receiver who attempts to return the service shall be considered as being ready. If it
            is demonstrated that the receiver is not ready, the service cannot be called a fault.

            </HighlightText>
            <HighlightText style={RuleStyles.Description}>
              
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>22. THE LET DURING A SERVICE</HighlightText>{'\n\n'}
            The service is a let if:
            {'\n\n'}
            a. The ball served touches the net, strap or band, and is otherwise good; or,
            after touching the net, strap or band, touches the receiver or the receiver’s
            partner or anything they wear or carry before hitting the ground; or
            {'\n\n'}
            b. The ball is served when the receiver is not ready.
            {'\n\n'}
            In the case of a service let, that particular service shall not count, and the server
            shall serve again, but a service let does not cancel a previous fault.
            {'\n\n'}
            Additional approved alternative procedures can be found in Appendix V.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>23. THE LET</HighlightText>{'\n\n'}
            In all cases when a let is called, except when a service let is called on a second
            service, the whole point shall be replayed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>{'\n\n'}
            When the ball is in play, another ball rolls onto court. A let
            is called. The server had previously served a fault. Is the server now
            entitled to a first service or second service?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>{'\n\n'}
            First service. The whole point must be replayed.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>24. PLAYER LOSES POINT</HighlightText>{'\n\n'}
            The point is lost if:
            {'\n\n'}
            a. The player serves two consecutive faults; or
            {'\n\n'}
            {'\n\n'}b. The player does not return the ball in play before it bounces twice consecutively; or
            {'\n\n'}c. The player returns the ball in play so that it hits the ground, or before it bounces,
            an object, outside the correct court; or
            {'\n\n'}d. The player returns the ball in play so that, before it bounces, it hits a permanent
            fixture; or
            {'\n\n'}e. The receiver returns the service before it bounces; or
            {'\n\n'}f. The player deliberately carries or catches the ball in play on the racket or
            deliberately touches it with the racket more than once; or
            {'\n\n'}g. The player or the racket, whether in the player’s hand or not, or anything
            which the player is wearing or carrying touches the net, net posts/singles
            sticks, cord or metal cable, strap or band, or the opponent’s court at any time
            while the ball is in play; or
            {'\n\n'}h. The player hits the ball before it has passed the net; or
            {'\n\n'}i. The ball in play touches the player or anything that the player is wearing or
            carrying, except the racket; or
            {'\n\n'}j. The ball in play touches the racket when the player is not holding it; or
            {'\n\n'}k. The player deliberately and materially changes the shape of the racket when
            the ball is in play; or
            {'\n\n'}l. In doubles, both players touch the ball when returning it.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            After the server has served a first service, the racket falls
            out of the server’s hand and touches the net before the ball has
            bounced. Is this a service fault, or does the server lose the point?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The server loses the point because the racket touches
            the net while the ball is in play.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>
            After the server has served a first service, the racket falls
            out of the server’s hand and touches the net after the ball has
            bounced outside the correct service court. Is this a service fault, or
            does the server lose the point?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            This is a service fault because when the racket touched
            the net the ball was no longer in play.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 3: </HighlightText>
            In a doubles match, the receiver’s partner touches the net
            before the ball that has been served touches the ground outside the
            correct service court. What is the correct decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The receiving team loses the point because the receiver’s partner touched
            the net while the ball was in play.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 4: </HighlightText>
            Does a player lose the point if an imaginary line in the
            extension of the net is crossed before or after hitting the ball?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The player does not lose the point in either case provided
            the player does not touch the opponent’s court.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 5: </HighlightText>
            Is a player allowed to jump over the net into the opponent’s
            court while the ball is in play?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No. The player loses the point.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 6: </HighlightText>
            A player throws the racket at the ball in play. Both the
            racket and the ball land in the court on the opponent’s side of the
            net and the opponent(s) is unable to reach the ball. Which player
            wins the point?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The player who threw the racket at the ball loses the
            point.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 7: </HighlightText>
            A ball that has just been served hits the receiver or in
            doubles the receiver’s partner before it touches the ground. Which
            player wins the point?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The server wins the point, unless it is a service let.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 8: </HighlightText>
            A player standing outside the court hits the ball or catches
            it before it bounces and claims the point because the ball was definitely going out
            of the correct court.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The player loses the point, unless it is a good return, in
            which case the point continues.



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>25. A GOOD RETURN</HighlightText>{'\n\n'}
            It is a good return if:
            {'\n\n'}a. The ball touches the net, net posts/singles sticks, cord or metal cable, strap
            or band, provided that it passes over any of them and hits the ground within
            the correct court; except as provided in Rule 2 and 24 (d); or
            {'\n\n'}b. After the ball in play has hit the ground within the correct court and has spun
            or been blown back over the net, the player reaches over the net and plays
            the ball into the correct court, provided that the player does not break Rule
            24; or
            {'\n\n'}c. The ball is returned outside the net posts, either above or below the level of
            the top of the net, even though it touches the net posts, provided that it hits
            the ground in the correct court; except as provided in Rules 2 and 24 (d); or
            {'\n\n'}d. The ball passes under the net cord between the singles stick and the adjacent
            net post without touching either net, net cord or net post and hits the ground
            in the correct court, or
            {'\n\n'}e. The player’s racket passes over the net after hitting the ball on the player’s
            own side of the net and the ball hits the ground in the correct court; or
            {'\n\n'}f. The player hits the ball in play, which hits another ball lying in the correct
            court.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            A player returns a ball which then hits a singles stick and
            hits the ground in the correct court. Is this is a good return?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Yes. However, if the ball is served and hits the singles
            stick, it is a service fault.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>
            A ball in play hits another ball which is lying in the correct
            court. What is the correct decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Play continues. However, if it is not clear that the actual
            ball in play has been returned, a let should be called.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>26. HINDRANCE</HighlightText>{'\n\n'}
            If a player is hindered in playing the point by a deliberate act of the opponent(s), the
            player shall win the point.
            {'\n\n'}
            However, the point shall be replayed if a player is hindered in playing the point by
            either an unintentional act of the opponent(s), or something outside the player’s own
            control (not including a permanent fixture).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            Is an unintentional double hit a hindrance?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No. See also Rule 24 (f).
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>
            A player claims to have stopped play because the player
            thought that the opponent(s) was being hindered. Is this a hindrance?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No, the player loses the point.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 3: </HighlightText>
            A ball in play hits a bird flying over the court. Is this a
            hindrance?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Yes, the point shall be replayed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 4: </HighlightText>
            During a point, a ball or other object that was lying on the
            player’s side of the net when the point started hinders the player. Is
            this a hindrance?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 5: </HighlightText>
            In doubles, where are the server’s partner and receiver’s
            partner allowed to stand?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            The server’s partner and the receiver’s partner may take
            any position on their own side of the net, inside or outside the court.
            However, if a player is creating a hindrance to the opponent(s), the
            hindrance rule should be used.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>27. CORRECTING ERRORS</HighlightText>{'\n\n'}
            As a principle, when an error in respect of the Rules of Tennis is discovered, all points
            previously played shall stand. Errors so discovered shall be corrected as follows:
            {'\n\n'}a. During a standard game or a tie-break game, if a player serves from the
            wrong half of the court, this should be corrected as soon as the error is discovered
            and the server shall serve from the correct half of the court according
            to the score. A fault that was served before the error was discovered shall
            stand.
            {'\n\n'}b. During a standard game or a tie-break game, if the players are at the wrong
            ends of the court, the error should be corrected as soon as it is discovered
            and the server shall serve from the correct end of the court according to the
            score.
            {'\n\n'}c. If a player serves out of turn during a standard game, the player who was
            originally due to serve shall serve as soon as the error is discovered. However,
            if a game is completed before the error is discovered the order of service
            shall remain as altered. In this case, any ball change to be made after an
            agreed number of games should be made one game later than originally
            scheduled.
            {'\n\n'}A fault that was served by the opponents(s) before the error was discovered
            shall not stand.
            {'\n\n'}In doubles, if the partners of one team serve out of turn, a fault that was
            served before the error was discovered shall stand.
            {'\n\n'}d. If a player serves out of turn during a tie-break game and the error is discovered
            after an even number of points have been played, the error is corrected
            immediately. If the error is discovered after an odd number of points have
            been played, the order of service shall remain as altered.
            {'\n\n'}A fault that was served by the opponent(s) before the error was discovered
            shall not stand.
            {'\n\n'}In doubles, if the partners of one team serve out of turn, a fault that was
            served before the error was discovered shall stand.
            {'\n\n'}e. During a standard game or a tie-break game in doubles, if there is an error in
            the order of receiving, this shall remain as altered until the end of the game in
            which the error is discovered. For the next game in which they are the receivers in
            that set, the partners shall then resume the original order of receiving.
            {'\n\n'}f. If in error a tie-break game is started at 6 games all, when it was previously
            agreed that the set would be an “Advantage set”, the error shall be corrected
            immediately if only one point has been played. If the error is discovered after
            the second point is in play, the set will continue as a “Tie-break set”.
            {'\n\n'}g. If in error a standard game is started at 6 games all, when it was previously
            agreed that the set would be a “Tie-break set”, the error shall be corrected
            immediately if only one point has been played. If the error is discovered after
            the second point is in play, the set will continue as an “Advantage set” until
            the score reaches 8 games all (or a higher even number), when a tie-break
            game shall be played.
            {'\n\n'}h. If in error an “Advantage set” or “Tie-break set” is started, when it was previously
            agreed that the final set would be a match tie-break, the error shall
            be corrected immediately if only one point has been played. If the error is
            discovered after the second point is in play, the set will continue either until
            a player or team wins three games (and therefore the set) or until the score
            reaches 2 games all, when a match tie-break shall be played. However, if the
            error is discovered after the second point of the fifth game has started, the set
            will continue as a “Tie-break set”. (See Appendix V)
            {'\n\n'}i. If the balls are not changed in the correct sequence, the error shall be corrected
            when the player/team who should have served with new balls is next
            due to serve a new game. Thereafter the balls shall be changed so that the
            number of games between ball changes shall be that originally agreed. Balls
            should not be changed during a game.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>28. ROLE OF COURT OFFICIALS</HighlightText>{'\n\n'}
            For matches where officials are appointed, their roles and responsibilities can be
            found in Appendix VI.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>29. CONTINUOUS PLAY</HighlightText>{'\n\n'}
            As a principle, play should be continuous, from the time the match starts (when the
            first service of the match is put in play) until the match finishes.
            {'\n\n'}a. Between points, a maximum of twenty-five (25) seconds is allowed. When the
            players change ends at the end of a game, a maximum of ninety (90) seconds
            are allowed. However, after the first game of each set and during a tie-break
            game, play shall be continuous and the players shall change ends without a
            rest.
            {'\n\n'}At the end of each set there shall be a set break of a maximum of one hundred and
            twenty (120) seconds.
            {'\n\n'}The maximum time starts from the moment that one point finishes until the
            first service is struck for the next point.
            {'\n\n'}Event organizers may apply for ITF approval to extend the ninety (90) seconds
            allowed when the players change ends at the end of a game and the
            one hundred and twenty (120) seconds allowed at a set break.
            {'\n\n'}b. If, for reasons outside the player’s control, clothing, footwear or necessary
            equipment (excluding the racket) is broken or needs to be replaced, the player may
            be allowed reasonable extra time to rectify the problem.
            {'\n\n'}c. No extra time shall be given to allow a player to recover condition. However,
            a player suffering from a treatable medical condition may be allowed one
            medical time-out of three minutes for the treatment of that medical condition.
            {'\n\n'}A limited number of toilet/change of attire breaks may also be allowed, if this
            is announced in advance of the event.
            {'\n\n'}d. Event organizers may allow a rest period of a maximum of ten (10) minutes if
            this is announced in advance of the event. This rest period can be taken after
            the 3rd set in a best of 5 sets match, or after the 2nd set in a best of 3 sets
            match.
            {'\n\n'}e. The warm-up time shall be a maximum of five (5) minutes, unless otherwise
            decided by the event organizers.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>30. COACHING</HighlightText>{'\n\n'}
            Coaching is considered to be communication, advice or instruction of any kind and by
            any means to a player.
            {'\n\n'}
            In team events where there is a team captain sitting on-court, the team captain may
            coach the player(s) during a set break and when the players change ends at the end
            of a game, but not when the players change ends after the first game of each set and
            not during a tie-break game.
            {'\n\n'}
            In all other matches, coaching is not allowed.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            Is a player allowed to be coached, if the coaching is given
            by signals in a discreet way?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            No.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2: </HighlightText>
            Is a player allowed to receive coaching when play is suspended?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Yes.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 3: </HighlightText>
            Is a player allowed to receive on-court coaching during a
            match?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            Sanctioning bodies may apply to the ITF to have on-court
            coaching allowed. In events where on-court coaching is allowed,
            designated coaches may enter the court and coach their players
            under procedures decided by the sanctioning body.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>31. PLAYER ANALYSIS TECHNOLOGY</HighlightText>{'\n\n'}
            Player analysis technology, that is approved for play under the Rules of Tennis, must
            comply with the specifications in Appendix III.
            {'\n\n'}
            The International Tennis Federation shall rule on the question of whether any such
            equipment is approved, or not approved. Such ruling may be taken on its own initiative,
            or upon application by any party with a bona fide interest therein, including any
            player, equipment manufacturer or National Association or members thereof. Such
            rulings and applications shall be made in accordance with the applicable Review and
            Hearing Procedures of the International Tennis Federation (see Appendix X).


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>RULES OF WHEELCHAIR TENNIS</HighlightText>{'\n\n'}
            The game of wheelchair tennis follows the ITF Rules of Tennis with the following
            exceptions.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>a. The Two Bounce Rule</HighlightText>{'\n\n'}
            The wheelchair tennis player is allowed two bounces of the ball. The player
            must return the ball before it hits the ground a third time. The second bounce
            can be either in or out of the court boundaries.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>b. The Wheelchair</HighlightText>{'\n\n'}
            The wheelchair is considered part of the body and all applicable rules, which
            apply to a player’s body, shall apply to the wheelchair.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>c. The Service</HighlightText>{'\n\n'}
            The service shall be delivered in the following manner.
            {'\n\n'}I. Immediately before commencing the service, the server shall be in a stationary
            position. The server shall then be allowed one push before striking
            the ball.
            {'\n\n'}ii. The server shall throughout the delivery of the service not touch with any
            wheel, any area other than that behind the baseline within the imaginary
            extension of the center mark and sideline.
            {'\n\n'}iii. If conventional methods for the service are physically impossible for a
            quadriplegic player, then the player or an individual may drop the ball for
            such a player. However, the same method of serving must be used each
            time.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>d. Player Loses Point</HighlightText>{'\n\n'}
            A player loses a point if:
            {'\n\n'}i. The player fails to return the ball before it has touched the ground three
            times; or
            {'\n\n'}ii. Subject to rule f) below the player uses any part of their feet or lower
            extremities as brakes or as stabilizers while delivering service, stroking a
            ball, turning or stopping against the ground or against any wheel while the
            ball is in play; or
            {'\n\n'}iii. The player fails to keep one buttock in contact with their wheelchair seat
            when contacting the ball.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>e. The Wheelchair</HighlightText>{'\n\n'}
            Wheelchairs used in all competitions played under the Rules of Wheelchair
            Tennis must comply with the following specifications:
            {'\n\n'}i. The wheelchair may be constructed of any material provided that such
            material is non-reflective and does not constitute a hindrance to the opponent.
            {'\n\n'}ii. Wheels may have a single pushrim only. No changes to the wheelchair
            that afford the player a mechanical advantage are permitted, such as
            levers or gears. During normal play, wheels shall not leave permanent
            marks on, or otherwise damage, the court surface.
            {'\n\n'}iii. Subject to Rule e(v), players shall use only the wheels (including
            pushrims) to propel the wheelchair. No steering, braking or gearing or
            other device that may assist operation of the wheelchair, including energy
            storage systems, is permitted.
            {'\n\n'}iv. The height of the seat (including cushion) shall be fixed and players’ buttocks
            shall remain in contact with the seat during the playing of a point.
            Strapping may be used to secure the player to the wheelchair.
            {'\n\n'}v. Players who meet the requirements of Article 10 of the ITF Wheelchair
            Tennis Classification Rules may use a wheelchair powered by electric
            motor(s) (a “powered wheelchair”). Powered wheelchairs must not be
            able to exceed 15 km/h in any direction and shall be controlled by the
            player only.
            {'\n\n'}vi. Applications may be made for modifications to the wheelchair for legitimate
            medical reasons. All such applications shall be submitted to the
            ITF Sport Science & Medicine Commission for approval a minimum of 60
            days prior to intended use in an ITF-sanctioned event.
            {'\n\n'}A decision to reject a proposed modification may be appealed under Appendix III
            of the ITF Wheelchair Tennis Regulations.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>f. Propelling the Chair with the Foot</HighlightText>{'\n\n'}
            {'\n\n'}i. If due to lack of capacity a player is unable to propel the wheelchair via
            the wheel then they may propel the wheelchair using one foot.
            {'\n\n'}ii. Even if in accordance with rule e) i. above a player is permitted to propel
            the chair using one foot, no part of the player’s foot may be in contact with
            the ground:
            {'\n\n'}a) during the forward motion of the swing, including when the racket
            strikes the ball;
            {'\n\n'}b) from the initiation of the service motion until the racket strikes the ball.
            {'\n\n'}iii. A player in breach of this rule shall lose the point.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>f. Wheelchair/Able-bodied Tennis</HighlightText>{'\n\n'}
            Where a wheelchair tennis player is playing with or against an able-bodied person
            in singles or doubles, the Rules of Wheelchair Tennis shall apply for the wheelchair
            player while the Rules of Tennis for able-bodied tennis shall apply for the able-bodied
            player. In this instance, the wheelchair player is allowed two bounces while the
            able-bodied player is allowed only one bounce.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>{'\n\n'}
            The definition of lower extremities is: the lower limbs, including the buttocks,
            hips, thighs, legs, ankles and feet.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>AMENDMENT TO THE RULES OF TENNIS</HighlightText>{'\n\n'}
            (Article 28 of the Constitution of ITF Ltd)
            {'\n\n'}
            The official and decisive text to the Rules of Tennis shall be for ever in the English
            language and no alteration or interpretation of such Rules shall be made except at an
            Annual General Meeting of the Council, nor unless notice of the Resolution embodying
            such alterations shall have been received by the ITF in accordance with Article
            17 and such Resolution or one having the like effect shall be carried by a majority of
            two-thirds of the votes recorded in respect of the same.
            {'\n\n'}
            Any alteration so made shall take effect as from the first day of January following
            unless the Meeting shall by the like majority decide otherwise.
            {'\n\n'}
            The Board of Directors shall have power, however, to settle all urgent questions of
            interpretation subject to confirmation at the General Meeting next following.
            {'\n\n'}
            This text shall not be altered at any time without the unanimous consent of a General
            Meeting of the Council.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX I</HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>THE BALL</HighlightText>{'\n\n'}
            For all measurements in Appendix I, SI units shall take precedence
            {'\n\n'}a. The ball shall have a uniform outer surface consisting of a fabric cover except for the
            Stage 3 (Red) foam ball. If there are any seams they shall be stitchless.
            {'\n\n'}b. The ball shall conform to one of types specified in the table immediately below or in
            the table under paragraph (d).
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule164_1.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Notes: </HighlightText>{'\n\n'}
            {'\n\t'}1 This ball type may be pressurised or pressureless. The pressureless ball shall
            have an internal pressure that is no greater than 7 kPa (1 psi) and may be used
            for high altitude play above 1,219 m (4,000 feet) above sea level and shall have
            been acclimatized for 60 days or more at the altitude of the specific tournament.
            {'\n\n\t'}2 This ball type is also recommended for high altitude play on any court surface
            type above 1,219 m (4,000 feet) above sea level.
            {'\n\n\t'}3 This ball type is pressurised and is specified for high altitude play above 1,219 m
            (4,000 feet) above sea level only.
            {'\n\n\t'}4 The deformation shall be the average of a single reading along each of three
            perpendicular axes. No two individual readings shall differ by more than 0.08 cm
            (0.031 inches).


            {'\n\n'}c. In addition, all ball types specified under paragraph (b) shall conform to the
            requirements for durability as shown in the following table:
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule164_2.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Notes: </HighlightText>{'\n\n'}
            {'\n\t'}1 The largest permissible change in the specified properties resulting from the
            durability test described in the current edition of ITF Approved Tennis Balls &
            Classified Court Surfaces. The durability test uses laboratory equipment to simulate the
            effects of nine games of play.

            {'\n\n'}
            d. Only the ball types specified in the table below can be used in 10 and under tennis
            competition:
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule164_3.png'}}/>
          <HighlightText style={RuleStyles.Description}>
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Notes: </HighlightText>{'\n\n'}
            {'\n\t'}
            1 The deformation shall be the average of a single reading along each of three
            perpendicular axes. There is no limit on the difference between individual forward
            deformation readings. There is no specification for return deformation.
            {'\n\t'}2 All coloured dots shall be reasonable in size and placement.

            {'\n\n'}
            e. All tests for rebound, mass, size, deformation and durability shall be made in
            accordance with the Regulations described in the current edition of ITF Approved Tennis
            Balls & Classified Court Surfaces.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>CLASSIFICATION OF COURT PACE</HighlightText>{'\n\n'}
            The ITF test method used for determining the pace of a court surface is ITF CS 01/02
            (ITF Court Pace Rating) as described in the ITF publication entitled “ITF guide to test
            methods for tennis court surfaces”.
            {'\n\n'}
            Court surfaces which have an ITF Court Pace Rating of 0 to 29 shall be classified
            as being Category 1 (slow pace). Examples of court surface types which conform to
            this classification will include most clay courts and other types of unbound mineral
            surface.
            {'\n\n'}
            Court surfaces which have an ITF Court Pace Rating of 30 to 34 shall be classified as
            being Category 2 (medium-slow pace), while court surfaces with an ITF Court Pace
            Rating of 35 to 39 shall be classified as being Category 3 (medium pace). Examples
            of court surface types which conform to this classification will include most acrylic
            coated surfaces plus some carpet surfaces.
            {'\n\n'}
            Court surfaces with an ITF Court Pace Rating of 40 to 44 shall be classified as being
            Category 4 (medium-fast pace), while court surfaces which have an ITF Court Pace
            Rating of 45 or more shall be classified as being Category 5 (fast pace). Examples
            of court surface types which conform to this classification will include most natural
            grass, artificial grass and some carpet surfaces.
            {'\n\n'}

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1: </HighlightText>
            Which ball type should be used on which court surface?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision: </HighlightText>
            3 different types of balls are approved for play under the
            Rules of Tennis, however:
            {'\n\n'}a. Ball Type 1 (fast speed) is intended for play on slow pace court surfaces
            {'\n\n'}b. Ball Type 2 (medium speed) is intended for play on medium-slow,
            medium and medium-fast pace court surfaces
            {'\n\n'}c. Ball Type 3 (slow speed) is intended for play on fast pace court surfaces

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Note: </HighlightText>
            In addition to the ball types specified under paragraph (b) above, the Stage 1
            (Green) ball may be used for all levels of competitive play except for world ranking
            professional tennis events, Davis Cup and Billie Jean King Cup, the Olympic and
            Paralympic Tennis Events, World Tennis Tour Men’s, Women’s and Junior Tournaments and
            Team events sanctioned by the ITF and affiliated Regional Associations,
            ITF Senior Circuit and Team events and ITF Wheelchair Tennis Tour Circuit and Team
            events.
            {'\n\n'}
            Each National Association shall have the right to decide which national competitive
            events should use the stage 1 (green) ball.



            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX II
              {'\n\n'}THE RACKET
            </HighlightText>{'\n\n'}
            For all measurements in Appendix II, SI units shall take precedence
            {'\n\n'}a. The racket shall consist of a frame and string(s). The frame shall consist of a
            handle and head, and may also include a throat. The head is defined as that part
            of the racket to which the string(s) connect. The handle is defined as that part of
            the racket connected to the head which is held by the player in normal use. The
            throat, where present, is that part of the racket that joins the handle to the head.

            {'\n\n'}b. The hitting surface, defined as the main area of the stringing pattern bordered by
            the points of entry of the strings into the head or points of contact of the strings
            with the head, whichever is the smaller, shall be flat and consist of a pattern of
            crossed strings, which shall be alternately interlaced or bonded where they cross.
            The stringing pattern must be generally uniform and, in particular, not less dense
            in the center than in any other area. The racket shall be designed and strung such
            that the playing characteristics are identical on both faces.

            {'\n\n'}c. The racket shall not exceed 73.7 cm (29.0 inches) in overall length, and 31.7 cm
            (12.5 inches) in overall width. The hitting surface shall not exceed 39.4 cm (15.5
            inches) in overall length, when measured parallel to the longitudinal axis of the
            handle, and 29.2 cm (11.5 inches) in overall width, when measured perpendicular
            to the longitudinal axis of the handle.

            {'\n\n'}d. The racket shall be free of any attached object, protrusion or device which makes
            it possible to change materially the shape of the racket, or its moment of inertia
            about any principal axis, or to change any physical property which may affect
            the performance of the racket during the playing of a point. Attached objects,
            protrusions and devices that are approved as Player Analysis Technology, or that
            are utilised to limit or prevent wear and tear or vibration or, for the frame only, to
            distribute weight, are permitted. All permissible objects, protrusions and devices
            must be reasonable in size and placement for their respective purpose(s).

            {'\n\n'}No energy source that in any way could change or affect the playing characteristics
            of a racket may be built into or attached to a racket.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX III
              {'\n\n'}PLAYER ANALYSIS TECHNOLOGY
            </HighlightText>{'\n\n'}
            Player Analysis Technology is equipment that may perform any of the following functions
            with respect to player performace information:
            {'\n\n'}A. Recording
            {'\n\n'}B. Storing
            {'\n\n'}C. Transmission
            {'\n\n'}D. Analysis
            {'\n\n'}E. Communication to a player of any kind and by any means
            {'\n\n'}Player Analysis Technology may record and/or store information during a match.
            Such information may only be accessed by a player in accordance with Rule 30.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX IV
              {'\n\n'}ADVERTISING
            </HighlightText>
            {'\n\n'}1. Advertising is permitted on the net as long as it is placed on the part of the net
            that is within 3 feet (0.914 m) from the center of the net posts and is produced in
            such a way that it does not interfere with the vision of the players or the playing
            conditions.
            {'\n\n'}A mark (non-commercial) of the sanctioning body is permitted on the lower part
            of the net, minimum 20 inches (0.51 m) from the top of the net, as long as it is
            produced in such a way that it does not interfere with the vision of the players or
            the playing conditions.

            {'\n\n'}2. Advertising and other marks or material placed at the back and sides of the court
            shall be permitted unless it interferes with the vision of the players or the playing
            conditions.

            {'\n\n'}3. Advertising and other marks or material placed on the court surface outside the
            lines is permitted unless it interferes with the vision of the players or the playing
            conditions.

            {'\n\n'}4. Notwithstanding paragraphs (1), (2) and (3) above, any advertising, marks or
            material placed on the net or placed at the back and sides of the court, or on the
            court surface outside the lines may not contain white or yellow or other light colors
            that may interfere with the vision of the players or the playing conditions.

            {'\n\n'}5. Advertising and other marks or material are not permitted on the court surface
            inside the lines of the court.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX V
              {'\n\n'}ALTERNATIVE PROCEDURES AND SCORING METHODS
            </HighlightText>
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>SCORE IN A GAME (Rule 5):
            </HighlightText>
            {'\n\n'}This alternatives listed in this Appendix V may be used.
            {'\n\n'}“No-Ad” SCORING METHOD
            {'\n\n'}A “No-Ad” game is scored as follows with the server’s score being called first:
            {'\n\t'}No point - “Love”
            {'\n\t'}First point - “15”
            {'\n\t'}Second point - “30”
            {'\n\t'}Third point - “40”
            {'\n\t'}Fourth point - “Game”
            {'\n\n'}
            If both players/teams have won three points each, the score is “Deuce” and a deciding
            point shall be played. The receiver(s) shall choose whether to receive the service
            from the right half or the left half of the court. In doubles, the players of the receiving
            team cannot change positions to receive this deciding point. The player/team who
            wins the deciding point wins the “Game”.
            {'\n\n'}In mixed doubles, the player of the same gender as the server shall receive the
            deciding point. The players of the receiving team cannot change positions to receive the
            deciding point.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>SCORE IN A SET (Rules 6 and 7):
            </HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>1. SHORT SETS
            </HighlightText>{'\n\n'}
            The first player/team who wins four games wins that set, provided there is a
            margin of two games over the opponent(s). If the score reaches four games all, a
            tie-break game shall be played. Alternatively (at the discretion of the sanctioning
            body), if the score reaches three games all, a tie-break game shall be played.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>2. SHORT SET TIE-BREAK
            </HighlightText>{'\n\n'}
            When playing Short Sets only, a Short Set tie-break may be used. The first player/
            team to win five points wins the “Game” and “Set”, with a deciding point if the
            score reaches four all. The order and number of serves shall be determined by
            the sanctioning body. Players/Teams will only change ends after the first four
            points have been played.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>3. MATCH TIE-BREAK (7 POINTS)
            </HighlightText>{'\n\n'}
            When the score in a match is one set all, or two sets all in best of five sets matches,
            one tie-break game shall be played to decide the match. This tie-break game
            replaces the deciding final set.
            {'\n\n'}
            The player/team who first wins seven points shall win this match tie-break and the
            match provided there is a margin of two points over the opponent(s).
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>4. MATCH TIE-BREAK (10 POINTS)
            </HighlightText>{'\n\n'}
            When the score in a match is one set all, or two sets all in best of five sets matches,
            one tie-break game shall be played to decide the match. This tie-break game replaces
            the deciding final set.
            {'\n\n'}The player/team who first wins ten points shall win this match tie-break and the match
            provided there is a margin of two points over the opponent(s).
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Note:
            </HighlightText>
            When using the match tie-break to replace the final set:
            {'\n\t'}• the original order of service continues. (Rules 5 and 14)
            {'\n\t'}• in doubles, the order of serving and receiving within the team may be altered,
            as in the beginning of each set. (Rules 14 and 15)
            {'\n\t'}• before the start of the match tie-break there shall be a 120 seconds set break.
            {'\n\t'}• balls should not be changed before the start of the match tie-break even if a
            ball change is due.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>CHANGE OF ENDS (Rule 10):
            </HighlightText>
            {'\n\n'}
            During a tie-break game, players shall change ends after the first point and thereafter
            after every four points.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>THE LET DURING A SERVICE (Rule 22):
              {'\n\n'}
              “NO LET” RULE
            </HighlightText>
            {'\n\n'}This alternative is play without the service let in Rule 22.
            {'\n\n'}Wherby a serve that touches the net, strap or band is in play.
            {'\n\n'}At the discretion of the sanctioning body, when playing doubles using Short Sets in
            combination with No-Ad scoring and the No-Let rule, either player on the receiving
            team is permitted to return a serve that touches the net, strap or band and lands
            within the correct service box.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX VI
              {'\n\n'}ROLE OF COURT OFFICIALS
            </HighlightText>
            {'\n\n'}
            The Referee is the final authority on all questions of tennis law and the Referee’s
            decision is final.
            {'\n\n'}In matches where a Chair Umpire is assigned, the Chair Umpire is the final authority
            on all questions of fact during the match.
            {'\n\n'}The players have the right to call the Referee to court if they disagree with a Chair
            Umpire’s interpretation of tennis law.
            {'\n\n'}In matches where Line Umpires and net umpires are assigned, they make all calls
            (including foot-fault calls) relating to that line or net. The Chair Umpire has the right to
            overrule a Line Umpire or a net umpire if the Chair Umpire is sure that a clear mistake
            has been made. The Chair Umpire is responsible for calling any line (including footfaults)
            or net where no Line Umpire or net umpire is assigned.
            {'\n\n'}A Line Umpire who cannot make a call shall signal this immediately to the Chair Umpire
            who shall make a decision. If the Line Umpire can not make a call, or if there is
            no Line Umpire, and the Chair Umpire can not make a decision on a question of fact,
            the point shall be replayed.
            {'\n\n'}In team events where the Referee is sitting on-court, the Referee is also the final
            authority on questions of fact.
            {'\n\n'}Play may be stopped or suspended at any time the Chair Umpire decides it is necessary
            or appropriate.
            {'\n\n'}The Referee may also stop or suspend play in the case of darkness, weather or adverse
            court conditions. When play is suspended for darkness, this should be done
            at the end of a set, or after an even number of games have been played in the set in
            progress. After a suspension in play, the score and position of players on-court in the
            match shall stand when the match resumes.
            {'\n\n'}The Chair Umpire or Referee shall make decisions regarding continuous play and
            coaching in respect of any Code of Conduct that is approved and in operation.
            {'\n\n'}
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 1:
            </HighlightText>
            The Chair Umpire awards the server a first service after an
            overrule, but the receiver argues that it should be a second service,
            since the server had already served a fault. Should the Referee be
            called to court to give a decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText>Yes. The Chair Umpire makes the first decision about
            questions of tennis law (issues relating to the application of specific
            facts). However, if a player appeals the Chair Umpire’s decision,
            then the Referee shall be called to make the final decision.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 2:
            </HighlightText> A ball is called out, but a player claims that the ball was
            good. May the Referee be called to court to make a decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> No. The Chair Umpire makes the final decision on
            questions of fact (issues relating to what actually happened during a
            specific incident).


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 3:
            </HighlightText> Is a Chair Umpire allowed to overrule a Line Umpire at the
            end of a point if, in the Chair Umpire’s opinion, a clear mistake was
            made earlier in the point?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> No. A Chair Umpire may only overrule a Line Umpire
            immediately after the clear mistake has been made.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 4:
            </HighlightText> A Line Umpire calls a ball “Out” and then the player argues
            that the ball was good. Is the Chair Umpire allowed to overrule the
            Line Umpire?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> No. A Chair Umpire must never overrule as the result of
            the protest or appeal by a player


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 5:
            </HighlightText> A Line Umpire calls a ball “Out”. The Chair Umpire was
            unable to see clearly, but thought the ball was in. May the Chair
            Umpire overrule the Line Umpire?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> No. The Chair Umpire may only overrule when sure that
            the Line Umpire made a clear mistake.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 6:
            </HighlightText> Is a Line Umpire allowed to change the call after the Chair
            Umpire has announced the score?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> Yes. If a Line Umpire realizes a mistake, a correction
            should be made as soon as possible provided it is not as the result
            of a protest or appeal of a player.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 7:
            </HighlightText> If a Chair Umpire or Line Umpire calls “out” and then corrects the call to
            good, what is the correct decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> The Chair Umpire must decide if the original “out” call
            was a hindrance to either player. If it was a hindrance, the point
            shall be replayed. If it was not a hindrance, the player who hit the
            ball wins the point.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Case 8:
            </HighlightText> A ball is blown back over the net and the player correctly
            reaches over the net to try to play the ball. The opponent(s) hinders
            the player from doing this. What is the correct decision?
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Decision:
            </HighlightText> The Chair Umpire must decide if the hindrance was deliberate or unintentional
            and either awards the point to the hindered
            player or order the point to be replayed.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>BALL MARK INSPECTION PROCEDURES
            </HighlightText>
            {'\n\n'}1. Ball mark inspections can only be made on clay courts.
            {'\n\n'}2. A ball mark inspection requested by a player (team) shall be allowed only if the
            Chair Umpire cannot determine the call with certainty from their chair on either a
            point-ending shot or when a player (team) stops playing the point during a rally
            (returns are permitted but then the player must immediately stop).
            {'\n\n'}3. When the Chair Umpire has decided to make a ball mark inspection, they should
            go down from the chair and make the inspection themselves. If they do not know
            where the mark is, they can ask the Line Umpire for help in locating the mark, but
            then the Chair Umpire shall inspect it.
            {'\n\n'}4. The original call or overrule will always stand if the Line Umpire and Chair Umpire
            cannot determine the location of the mark or if the mark is unreadable.
            {'\n\n'}5. Once the Chair Umpire has identified and ruled on a ball mark, this decision is
            final and not appealable.
            {'\n\n'}6. In clay court tennis the Chair Umpire should not be too quick to announce the
            score unless absolutely certain of the call. If in doubt, wait before calling the score
            to determine whether a ball mark inspection is necessary.
            {'\n\n'}7. In doubles the appealing player must make their appeal in such a way that either
            play stops or the Chair Umpire stops play. If an appeal is made to the Chair
            Umpire then they must first determine that the correct appeal procedure was followed.
            If it was not correct or if it was late, then the Chair Umpire may determine
            that the opposing team was deliberately hindered.
            {'\n\n'}8. If a player erases the ball mark before the Chair Umpire has made a final decision,
            they concedes the call.
            {'\n\n'}9. A player may not cross the net to check a ball mark without being subject to the
            Unsportsmanlike provision of the Code of Conduct.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>ELECTRONIC REVIEW PROCEDURES
            </HighlightText> {'\n\n'}
            At tournaments where an Electronic Review System is used, the following procedures
            should be followed for matches on courts where it is used.
            {'\n\n'}1. A request for an Electronic Review of a line call or overrule by a player (team)
            shall be allowed only on either a point-ending shot or when a player (team) stops
            playing the point during a rally (returns are permitted but then the player must
            immediately stop).
            {'\n\n'}2. The Chair Umpire should decide to use the Electronic Review when there is doubt
            about the accuracy of the line call or overrule. However, the Chair Umpire may
            refuse the Electronic Review if they believe that the player is making an unreasonable
            request or that it was not made in a timely manner.
            {'\n\n'}3. In doubles the appealing player must make their appeal in such a way that either play
            stops or the Chair Umpire stops play. If an appeal is made to the Chair
            Umpire then they must first determine that the correct appeal procedure was followed.
            If it was not correct or if it was late, then the Chair Umpire may determine
            that the opposing team was deliberately hindered, in which case the appealing
            team loses the point.
            {'\n\n'}4. The original call or overrule will always stand if the Electronic Review is unable,
            for whatever reason, to make a decision on that line call or overrule.
            {'\n\n'}5. The Chair Umpire’s final decision will be the outcome of the Electronic Review
            and is not appealable. If a manual choice is required for the system to review
            a particular ball impact, a Review Official approved by the Referee shall decide
            which ball impact is reviewed.
            {'\n\n'}6. Each player (team) is allowed three (3) unsuccessful appeals per set, plus one
            (1) additional appeal in the tie-break. For matches with advantage sets, players
            (teams) will start again with a maximum of three (3) unsuccessful appeals at 6
            games all and every 12 games thereafter. For matches with match tie-break, the
            match tie-break counts as a new set and each player (team) starts with three (3)
            appeals. Players (teams) will have an unlimited number of successful appeals.
            {'\n\n'}


            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX VII
              {'\n\n'}10 AND UNDER TENNIS COMPETITION
            </HighlightText>
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Courts:
            </HighlightText>{'\n\n'}
            In addition to the (full sized) court described in Rule 1, the following court dimensions
            may be used for 10 and under tennis competition:
            {'\n\t'}• A court, designated “Red” for the purposes of 10 and under tennis competition,
            shall be a rectangle, between 36 feet (10.97 m) and 42 feet (12.80 m) long, and
            between 14 feet (4.27 m) and 20 feet (6.10 m) wide. The net shall be between
            31.5 inches (0.800 m) and 33.0 inches (0.838m) high at the center.
            {'\n\t'}• A court, designated “Orange”, shall be a rectangle, between 58 feet (17.68 m) and
            60 feet (18.29 m) long, and between 20 feet (6.10 m) and 27 feet (8.23 m) wide.
            The net shall be between 31.5 inches (0.800 m) and 36.0 inches (0.914m) high at
            the center.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Balls:
            </HighlightText>{'\n\n'}
            Only the following ball types, which are specified in Appendix I, can be used in 10 and
            under tennis competition:
            {'\n\t'}• A Stage 3 (Red) ball, which is recommended for play on a “red” court, by players
            aged up to 8 years, using a racket up to 23 inches (58.4 cm) long.
            {'\n\t'}• A Stage 2 (Orange) ball, which is recommended for play on an “orange” court, by
            players aged 8 to 10 years, using a racket between 23 inches (58.4 cm) and 25
            inches (63.5) cm long.
            {'\n\t'}• A Stage 1 (Green) ball, which is recommended for play on a full sized court, by
            advanced players aged 9 to 10 years, using a racket between 25 inches (63.5 cm)
            and 26 inches (66.0 cm) long.
            {'\n\n'}Note: Other ball types described in Appendix I cannot be used in 10 and under tennis
            competition.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Scoring methods:
            </HighlightText>{'\n\n'}
            For 10 and under tennis competition using Stage 3 (Red), Stage 2 (Orange) or Stage
            1 (Green) balls, scoring methods specified in the Rules of Tennis (including those
            specified in Appendix V) can be utilised, in addition to short duration scoring methods
            involving matches of one match tie-break, best of 3 tie-breaks/match tie-breaks, one
            short set or one regular set.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Timed matches:
            </HighlightText>{'\n\n'}
            For 10 and under tennis competition the tournament committee may set a specific
            time period for matches in the event.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX VIII
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>PLAN OF THE COURTS
            </HighlightText>{'\n\n'}
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule164_4.png'}}/>
          <HighlightText style={RuleStyles.Description}>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>NOTE:
            </HighlightText>
            All court measurements shall be made to the outside of the lines.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX IX
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>SUGGESTIONS ON HOW TO MARK OUT A COURT
            </HighlightText>{'\n\n'}
          </HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.VerticalImageStyle, ImageName: 'rule164_5.png'}}/>
          <HighlightText style={RuleStyles.Description}>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>NOTE:
            </HighlightText>
            All court measurements shall be made to the outside of the lines.
            {'\n\n'}
            The following procedure is for the usual combined doubles and singles court. (See
            note at foot for a court for one purpose only.)
            {'\n\n'}
            First select the position of the net; a straight line 42 feet (12.80 m) long. Mark the
            center (X on the diagram above) and, measuring from there in each direction, mark:
            {'\n\n'} at 13’6” (4.11 m) the points a, b, where the net crosses the inner sidelines,
            {'\n\n'} at 16’6” (5.03 m) the positions of the singles sticks (n, n),
            {'\n\n'} at 18’0” (5.48 m) the points A, B, where the net crosses the outer sidelines,
            {'\n\n'} at 21’0” (6.40 m) the positions of the net posts (N, N), being the ends of the original
            42’0” (12.80 m) line.
            {'\n\n'} Insert pegs at A and B and attach to them the respective ends of two measuring
            tapes. On one, which will measure the diagonal of the half-court, take a length 53’1”
            (16.18 m) and on the other (to measure the sideline) a length of 39’0” (11.89 m). Pull
            both taut so that at these distances they meet at a point C, which is one corner of
            the court. Reverse the measurements to find the other corner D. As a check on this
            operation it is advisable at this stage to verify the length of the line CD which, being
            the baseline, should be found to be 36’0” (10.97 m); and at the same time its center
            J can be marked, and also the ends of the inner sidelines (c, d), 4’6” (1.37 m) from
            C and D.
            {'\n\n'}The center line and service line are now marked by means of the points F, H, G,
            which are measured 21’0” (6.40 m) from the net down the lines bc, XJ, ad, respectively.
            {'\n\n'} Identical procedure the other side of the net completes the court.
            {'\n\n'} If a singles court only is required, no lines are necessary outside the points a, b,
            c, d, but the court can be measured out as above. Alternatively, the corners of the
            baseline (c, d) can be found if preferred by pegging the two tapes at a and b instead
            of at A and B, and by then using lengths of 47’5” (14.46 m) and 39’0” (11.89
            m). The net posts will be at n, n, and a 33’0” (10 m) singles net should be used.
            {'\n\n'} When a combined doubles and singles court with a doubles net is used for singles,
            the net must be supported at the points n, n, to a height of 3 feet 6 inches (1.07
            m) by means of two singles sticks, which shall be not more than 3 inches (7.5 cm)
            square or 3 inches (7.5 cm) in diameter. The centers of the singles sticks shall be
            3 feet (.914 m) outside the singles court on each side.
            {'\n\n'} To assist in the placing of these singles sticks it is desirable that the points n, n,
            should each be shown with a white dot when the court is marked.
            {'\n\n'}When sanctioning bodies approve so called “Blended Lines” on courts the following
            guidelines must be followed:
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Colour:
            </HighlightText>
            {'\n\t'}• Within the same colour family as the background playing surface.
            {'\n\t'}• Lighter than the background playing surface.
            {'\n\t'}• Limit on colour variation of +22 points on the L* scale
            {'\n\t'}(Add &gt;25% by volume of white paint to the background colour)
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Pace:
            </HighlightText>
            {'\n\t'}• Within 5 CPR of the playing surface.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Dimensions:
            </HighlightText>
            {'\n\t'}• 1.0-1.5 cm narrower than the standard lines.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Marking:
            </HighlightText>
            {'\n\t'}• Terminate 8 cm from intersection with white playing lines.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Note:
            </HighlightText>{'\n\n'}
            As a guide for international competitions, the recommended minimum distance
            between the baselines and the backstops should be 21 feet (6.40 m) and between
            the sidelines and the sidestops the recommended minimum distance should be 12
            feet (3.66 m).
            {'\n\n'}
            As a guide for recreational and Club play, the recommended minimum distance
            between the baselines and the backstops should be 18 feet (5.48 m) and between
            the sidelines and the sidestops the recommended minimum distance should be 10
            feet (3.05 m).
            {'\n\n'}
            As a guide, the recommended minimum height measured at the net from the court
            surface to the ceiling should be 30 feet (9.14 m)..
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX X
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>RULES OF BEACH TENNIS
            </HighlightText>{'\n\n'}
            The Rules of Beach Tennis are approved by the Rules of Tennis Committee and
            the Board of Directors and can be found on 
            <HighlightText
            style={RuleStyles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://www.itftennis.com/en/itf-tours/beach-tennis-tour/');
            }}>
            https://www.itftennis.com/en/itf-tours/beach-tennis-tour/.
          </HighlightText> 
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading2}>APPENDIX XI
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>PROCEDURES FOR REVIEW AND HEARINGS ON THE RULES OF TENNIS
            </HighlightText>{'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>1. INTRODUCTION
            </HighlightText>

            {'\n\n'} 1.1 These procedures were approved by the Board of Directors of the International
            Tennis Federation (“Board of Directors”) on 17 May 1998.
            {'\n\n'} 1.2 The Board of Directors may from time to time supplement, amend, or vary these
            procedures.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>2. OBJECTIVES
            </HighlightText>
            {'\n\n'}2.1 The International Tennis Federation is the custodian of the Rules of Tennis and
            is committed to:
            {'\n\t'}a. Preserving the traditional character and integrity of the game of tennis.
            {'\n\t'}b. Actively preserving the skills traditionally required to play the game.
            {'\n\t'}c. Encouraging improvements, which maintain the challenge of the game.
            {'\n\t'}d. Ensuring fair competition.
            {'\n\n'}2.2 To ensure fair, consistent and expeditious review and hearings in relation to the
            Rules of Tennis the procedures set out below shall apply.
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>3. SCOPE
            </HighlightText>

            {'\n\n'}3.1 These Procedures shall apply to Rulings under:
            {'\n\t'}a. Rule 1 – The Court.
            {'\n\t'}b. Rule 3 – The Ball.
            {'\n\t'}c. Rule 4 – The Racket.
            {'\n\t'}d. Appendix I and II of the Rules of Tennis.
            {'\n\t'}e. Any other Rules of Tennis which the International Tennis Federation may
            decide.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>4. STRUCTURE
            </HighlightText>
            {'\n\n'}4.1 Under these procedures Rulings shall be issued by a Ruling Board.
            {'\n\n'}4.2 Such Rulings shall be final save, for an entitlement to appeal to an Appeal
            Tribunal pursuant to these procedures.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>5. APPLICATION
            </HighlightText>
            {'\n\n'}5.1 Rulings shall be taken either:
            {'\n\t'}a. Following a motion of the Board of Directors; or
            {'\n\t'}b. Upon the receipt of an application in accordance with the procedures set out
            below.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>6. APPOINTMENT AND COMPOSITION OF RULING BOARDS
            </HighlightText>
            {'\n\n'} 6.1 Ruling Boards shall be appointed by the President of the International Tennis
            Federation (“President”) or their designee and shall comprise of such a number,
            as the President or their designee shall determine.
            {'\n\n'} 6.2 If more than one person is appointed to the Ruling Board the Ruling Board shall
            nominate one person from amongst themselves to act as Chairperson.
            {'\n\n'}6.3 The Chairperson shall be entitled to regulate the procedures prior to and at any
            review and/or hearing of a Ruling Board.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>7. PROPOSED RULINGS BY THE RULING BOARD
            </HighlightText>
            {'\n\n'}7.1 The details of any proposed Ruling issued upon the motion of the Board of Directors
            may be provided to any bona fide person or any players, equipment manufacturer or national
            association or members thereof with an interest in the proposed Ruling.
            {'\n\n'}7.2 Any person so notified shall be given a reasonable period within which to forward
            comments, objections, or requests for information to the President or his designee in
            connection with the proposed Ruling.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>8. APPLICATION FOR RULINGS
            </HighlightText>
            {'\n\n'}8.1 An application for a Ruling may be made by any party with a bona fide interest in
            the Ruling including any player, equipment manufacturer or national association
            or member thereof.
            {'\n\n'}8.2 Any application for a Ruling must be submitted in writing to the President.
            {'\n\n'}8.3 To be valid an application for a Ruling must include the following minimum information:
            {'\n\t'}a. The full name and address of the Applicant.
            {'\n\t'}b. The date of the application.
            {'\n\t'}c. A statement clearly identifying the interest of the Applicant in the question
            upon which a Ruling is requested.
            {'\n\t'}d. All relevant documentary evidence upon which the Applicant intends to rely at
            any hearing.
            {'\n\t'}e. If, in the opinion of the Applicant, expert evidence is necessary they shall
            include a request for such expert evidence to be heard. Such request must
            identify the name of any expert proposed and their relevant expertise.
            {'\n\t'}f. When an application for a Ruling on a racket or other piece of equipment is
            made, a prototype or, exact, copy of the equipment in question must be submitted with
            the application for a Ruling.
            {'\n\t'}g. If, in the opinion of the Applicant, there are extraordinary or unusual circumstances,
            which require a Ruling to be made within a specified time or before
            a specified date they shall include a statement describing the extraordinary
            or unusual circumstances.
            {'\n\n'}8.4 If an application for a Ruling does not contain the information and/or equipment
            referred to at Clause 8. 3 (a)-(g) above the President or their designee shall notify
            the Applicant giving the Applicant a specified reasonable time within which to remedy
            the defect. If the Applicant fails to remedy the defect within the specified time the
            application shall be dismissed.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>9. CONVENING THE RULING BOARD
            </HighlightText>
            {'\n\n'}9.1 On receipt of a valid application or on the motion of the Board of Directors the
            President or their designee may convene a Ruling Board to deal with the application or motion.
            {'\n\n'}9.2 The Ruling Board need not hold a hearing to deal with an application or motion
            where the application or motion, in the opinion of the Chairperson can be resolved
            in a fair manner without a hearing.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>10. PROCEDURE OF THE RULING BOARD
            </HighlightText>
            {'\n\n'}10.1 The Chairperson of a Ruling Board shall determine the appropriate form, procedure
            and date of any review and/or hearing.
            {'\n\n'}10.2 The Chairperson shall provide written notice of those matters set out at 10.1
            above to any Applicant or any person or association who has expressed an interest in the
            proposed Ruling.
            {'\n\n'}10.3 The Chairperson shall determine all matters relating to evidence and shall not be
            bound by judicial rules governing procedure and admissibility of evidence provided that
            the review and/or hearing is conducted in a fair manner with a reasonable
            opportunity for the relevant parties to present their case.
            {'\n\n'}10.4 Under these procedures any review and/or hearings:
            {'\n\t'}a. Shall take place in private.
            {'\n\t'}b. May be adjourned and/or postponed by the Ruling Board.
            {'\n\n'}10.5 The Chairperson shall have the discretion to co-opt from time to time additional
            members onto the Ruling Board with special skill or experience to deal with specific
            issues, which require such special skill or experience.
            {'\n\n'}10.6 The Ruling Board shall take its decision by a simple majority. No member of the
            Ruling Board may abstain.
            {'\n\n'}10.7 The Chairperson shall have the complete discretion to make such order against
            the Applicant [and/or other individuals or organizations commenting objecting or
            requesting information at any review and/or hearing] in relation to the costs of
            the application and/or the reasonable expenses incurred by the Ruling Board in
            holding tests or obtaining reports relating to equipment subject to a Ruling as he
            shall deem appropriate.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>11. NOTIFICATION
            </HighlightText>
            {'\n\n'}11.1 Once a Ruling Board has reached a decision it shall provide written notice to the
            Applicant, or, any person or association who has expressed an interest in the
            proposed Ruling as soon as reasonably practicable.
            {'\n\n'}11.2 Such written notice shall include a summary of the reasoning behind the decision
            of the Ruling Board.
            {'\n\n'}11.3 Upon notification to the Applicant or upon such other date specified by the Ruling
            Board the Ruling of the Ruling Board shall be immediately binding under the
            Rules of Tennis.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>12. APPLICATION OF CURRENT RULES OF TENNIS
            </HighlightText>
            {'\n\n'}12.1 Subject to the power of the Ruling Board to issue interim Rulings the current
            Rules of Tennis shall continue to apply until any review and/or hearing of the
            Ruling Board is concluded and a Ruling issued by the Ruling Board.
            {'\n\n'}12.2 Prior to and during any review and/or hearing the Chairperson of the Ruling Board
            may issue such directions as are deemed reasonably necessary in the implementation
            of the Rules of Tennis and of these procedures including the issue of interim
            Rulings.
            {'\n\n'}12.3 Such interim Rulings may include restraining orders on the use of any equipment
            under the Rules of Tennis pending a Ruling by the Ruling Board as to whether or
            not the equipment meets the specification of the Rules of Tennis.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>13. APPOINTMENT AND COMPOSITION OF APPEAL TRIBUNALS
            </HighlightText>
            {'\n\n'}13.1 Appeal Tribunals shall be appointed by the President or their designee from
            [members of the Board of Directors/Technical Commission].
            {'\n\n'}13.2 No member of the Ruling Board who made the original Ruling shall be a member
            of the Appeal Tribunal.
            {'\n\n'}13.3 The Appeal Tribunal shall comprise of such number as the President or his designee
            shall determine but shall be no less than three.
            {'\n\n'}13.4 The Appeal Tribunal shall nominate one person from amongst themselves to act
            as Chairperson.
            {'\n\n'} 13.5 The Chairperson shall be entitled to regulate the procedures prior to and at any
            appeal hearing.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>14. APPLICATION TO APPEAL
            </HighlightText>
            {'\n\n'}14.1 An Applicant [or a person or association who has expressed an interest and
            forwarded any comments, objections, or requests to a proposed Ruling] may appeal
            any Ruling of the Ruling Board.
            {'\n\n'}14.2 To be valid an application for an appeal must be:
            {'\n\t'}a. Made in writing to the Chairperson of the Ruling Board who made the Ruling
            appealed not later than 45 days following notification of the Ruling;
            {'\n\t'}b. Must set out details of the Ruling appealed against; and
            {'\n\t'}c. Must contain the full grounds of the appeal.
            {'\n\n'}14.3 Upon receipt of a valid application to appeal the Chairperson of the Ruling Board
            making the original Ruling may require a reasonable appeal fee to be paid by the
            Appellant as a condition of appeal. Such appeal fee shall be repaid to the Appellant
            if the appeal is successful.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>15. CONVENING THE APPEAL TRIBUNAL
            </HighlightText>{'\n\n'}15.1 The President or their designee shall convene the Appeal Tribunal following payment
            by the Appellant of any appeal fee.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>16. PROCEDURES OF APPEAL TRIBUNAL
            </HighlightText>

            {'\n\n'}16.1 The Appeal Tribunal and their Chairperson shall conduct procedures and hearings in
            accordance with those matters set out in sections 10, 11 and 12 above.
            {'\n\n'}16.2 Upon notification to the Appellant or upon such other date specified by the Appeal
            Tribunal the Ruling of the Appeal Tribunal shall be immediately binding and final
            under the Rules of Tennis.
            {'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>17. GENERAL
            </HighlightText>
            {'\n\n'}17.1 If a Ruling Board consists of only one member that single member shall be responsible
            for regulating the hearing as Chairperson and shall determine the procedures to be followed
            prior to and during any review and/or hearing.
            {'\n\n'}17.2 All review and/or hearings shall be conducted in English. In any hearing where
            an Applicant, and/or other individuals or organizations commenting, objecting
            or requesting information do not speak English an interpreter must be present.
            Wherever practicable the interpreter shall be independent.
            {'\n\n'}17.3 The Ruling Board or Appeal Tribunal may publish extracts from its own Rulings.
            {'\n\n'}17.4 All notifications to be made pursuant to these procedures shall be in writing.
            {'\n\n'}17.5 Any notifications made pursuant to these procedures shall be deemed notified
            upon the date that they were communicated, sent or transmitted to the Applicant
            or other relevant party.
            {'\n\n'}17.6 A Ruling Board shall have the discretion to dismiss an application if in its
            reasonable opinion the application is substantially similar to an application or motion
            upon which a Ruling Board has made a decision and/or Ruling within the 36
            months prior to the date of the application.
            {'\n\n'}

            © ITF Limited t/a International Tennis Federation
            All rights reserved
            2020

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule163', next: 'Rule165', nav: navigation }} />
    </>
  );
}


import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule157({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT B - ATP Tour Logo</Text>{'\n\n'}
            <Text style={RuleStyles.SubHeading2}>ATP Tour Trademark and Logo (Terms and Conditions)</Text>
            {'\n\n'}
            In addition to Exhibit A, the following are the terms and conditions for the use of any
            ATP Tour trademark or logo (collectively referred to herein as the “ATP Logo”). Only
            ATP Tour tournaments referred to in CIRCUIT REGULATIONS shall be permitted to
            use the ATP Logo. ATP Challenger Tour tournaments are authorized to use only the
            ATP Challenger Tour Brand Mark (collectively referred to herein as the “Challenger
            Tour Brand Mark”) (see “EXHIBIT A.15”).
            {'\n\n'}
            1) Each tournament acknowledges that ATP has created the ATP Logo and has
            used the ATP Logo on and in connection with the promotion of the sport of tennis, recreational
             facilities, tennis videos, sporting goods, clothing, various printed
            matter, and other officially licensed products and merchandise, and have sought
            worldwide trademark registration for same and, through the use of the ATP Logo,
            ATP has developed goodwill associated with the ATP Logo.
            {'\n\n'}
            2) Subject to the terms and conditions set forth herein, ATP hereby authorizes each
            tournament, by this license, to use the ATP Logo (and the applicable 1,000, 500
            or 250 Tournament Stamp) or Challenger Tour Brand Mark, as applicable, in
            connection with the advertising and promotion of such tournament. This authorization and
             license shall (i) in the case of each ATP Tour tournament, be subject
            to such ATP Tour tournament remaining a member in good standing of ATP as
            well as compliance with the other terms and conditions set forth herein, and (ii) in
            the case of each ATP sanctioned tournament or event, including ATP Challenger
            Tour events, be subject to such tournament maintaining its sanction with ATP
            in good standing as well as compliance with the other terms and conditions set
            forth herein. Such license will be limited to written advertising and publicity, such
            use being for the sole purpose of identifying a tournament as an ATP Tour or
            Challenger Tour tournament and will not extend to any use that exploits the ATP
            Logo or Challenger Tour Brand Mark in any other fashion or to the use of the ATP
            Logo or Challenger Logo on merchandising or products of any kind without the
            express written approval of ATP.
            {'\n\n'}
            3) Use of the ATP Logo or Challenger Logo by a tournament shall be restricted
            to the advertising and promotion of such tournament. The use of the ATP Logo
            must be approved in advance by ATP.
            {'\n\n'}
            4) The use of the ATP Logo or Challenger Tour Brand Mark by a tournament does
            not extend to use on merchandise or resold products without the express written
            approval of ATP, unless obtained through an official ATP licensee.
            {'\n\n'}
            5) However, the ATP Logo or Challenger Tour Brand Mark may be used by a tournament to 
            produce and sell tournament T-shirts and sweatshirts (not collared
            shirts) with the ATP Logo or Challenger Tour Brand Mark not to exceed four (4)
            square inches (26 sq. cm.). Express written approval is required from ATP if a
            tournament wants to produce these items itself. No approval is required if the
            T-shirts and sweatshirts are obtained from an approved ATP licensee.
            {'\n\n'}
            6) Each tournament hereby acknowledges that ATP owns all rights, title and interest in 
            and to the ATP Logo (and the applicable 1,000, 500 or 250 Tournament
            Stamp) and Challenger Logo and each tournament agrees it will do nothing inconsistent 
            with such ownership nor attack ATP’s title or interest in and to the ATP
            Logo or Challenger Tour Brand Mark other than the right to use the ATP Logo or
            Challenger Tour Brand Mark in accordance with this agreement.
            {'\n\n'}
            7) Each tournament agrees that it will not file a trademark application or otherwise
            attempt to register the ATP Logo (and the applicable 1,000, 500 or 250 Tournament Stamp) 
            or Challenger Tour Brand Mark, or any trademark or logo that may
            incorporate the ATP Logo or Challenger Tour Brand Mark, for any goods or services whatsoever.
             Each tournament shall promptly notify ATP of any infringement
            of the ATP Logo or Challenger Tour Brand Mark or any act of unfair competition by
            third parties relating to the ATP Logo or Challenger Tour Brand Mark, whenever
            such infringement or act shall come to the attention of a tournament.
            {'\n\n'}
            8) Each tournament agrees that all goodwill that is or shall become associated with
            the ATP Logo or Challenger Tour Brand Mark shall be the sole property of ATP.
            {'\n\n'}
            9) Each tournament agrees to use the ATP Logo or Challenger Tour Brand Mark
            strictly in compliance with and in observance of any and all applicable laws and
            strictly in accordance with ATP rules and regulations and guidelines and will take
            whatever steps are reasonably necessary to fully protect ATP’s ownership of the
            ATP Logo and Challenger Tour Brand Mark, including, without limitation, such
            legends, markings and notices in connection therewith as may be required by
            ATP.
            {'\n\n'}
            10) Each tournament agrees that such tennis tournament and related services identified 
            in connection with the ATP Logo and Challenger Tour Brand Mark shall be of
            the highest quality and shall conform to the high standards and reputation of ATP.
            Each tournament acknowledges that the provisions of this paragraph are of the
            essence of this authorization and license.
            {'\n\n'}
            11) If a tournament shall fail to perform or observe any term, condition, agreement, or
            covenant in this “EXHIBIT B - ATP Tour Logo”, ATP shall have the right to automatically
             terminate this authorization and license forthwith.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule156', next: 'Rule158', nav: navigation }} />
    </>
  );
}


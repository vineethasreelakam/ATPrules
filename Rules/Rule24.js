import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule24({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>II. BRANDING</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>2.02 Identification - ATP Challenger Tour Tournaments</Text>
            {'\n\n'}

            <Text style={RuleStyles.SubHeading2}> A.Challenger Tournaments. (“Exhibit A.15”)</Text>{'\n\n'}
            Each Challenger tournament shall identify itself as an ATP Challenger Tour tournament
            and shall use the ATP Challenger Tour Brand Mark as presented in “Exhibit
            A.15” (the “Brand Mark”). Tournaments are prohibited from using “ATP” as part of the
            tournament name. The Challenger Brand Mark is mandatory.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>1) Size Relationship.</Text>{'\n\n'}
            The ATP Challenger Brand Mark must be a minimum of 60% of the surface area
            of the tournament logo or tournament title, whichever is larger.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>2) ATP Challenger Tour Brand Mark: Compulsory Applications</Text>{'\n\n'}
            An ATP Challenger Tour tournament must identify itself as an ATP Challenger
            Tour tournament by applying the Brand Mark in the following compulsory applications:{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>a) Website / Other Digital Products (“Exhibit A.16”)</Text>{'\n\n'}
            The Brand Mark must be displayed on all pages of the tournament website
            and other digital products intended for large format display, e.g., desktop,
            laptop, tablet computers, and be located within the upper 20% of the pages within the
            masthead area as the closest logo to the tournament logo.It
            must not be smaller than 112 pixels wide for websites and other digital products intended
            for large format display. For mobile websites and other digita
            products intended for small format display, e.g., mobile handsets, follow the
            2.01.C. 1) a) Size Relationship rule.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Note:</Text>
            “ATP” is prohibited from use in any web address or URL.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>b) Program</Text>{'\n\n'}
            The Brand Mark must be displayed on the cover in the top 40%. It must not
            be smaller than 28mm (1.1”) wide.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>c) Drawsheets</Text>{'\n\n'}
            The Brand Mark must be displayed in the top 40%. It must not be smaller than
            28mm (1.1”) wide.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>d) Entrance</Text>{'\n\n'}
            The Brand Mark must be displayed prominently at the main entrance to the
            tournament.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>e) Court Backdrops (“Exhibit A.17”)</Text>{'\n\n'}
            The Brand Mark must be displayed in the left and right corners of the court
            backdrops (back fences or back walls), it must not be used smaller than 60cm
            (23.625”) wide. Brand Marks must be placed in a non-obstructed position.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>f) Advertising</Text>{'\n\n'}
            The Brand Mark must be applied to any advertising where the tournament
            logo is featured.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>g) On-Site</Text>{'\n\n'}
            The Brand Mark must be applied to any on-site drawboards, scoreboards,
            vehicles, banners, flags or signage featuring the tournament logo.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>h) Media Center</Text>{'\n\n'}
            The Brand Mark must be displayed on tournament media backdrops.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>i) Broadcast</Text>{'\n\n'}
            The Brand Mark must be displayed on any tournament broadcasts.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Violations.</Text>{'\n\n'}
            Violation of this section shall subject a tournament to a fine up to $10,000 for each
            violation. In cases that are flagrant and particularly injurious to the success of the
            ATP Tour, the Senior Vice-President Rules & Competition may refer the matter to
            the ATP Challenger Committee for further action which could include additional
            fines and/or loss of sanction.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>
              3) ATP Challenger Tour Brand Mark: Optional Applications</Text>{'\n\n'}
            An ATP Challenger Tour tournament may wish to identify itself as an ATP Challenger Tour
            event by applying the Brand Mark in the following optional applications:{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>a) Merchandise</Text>{'\n\n'}
            The Brand Mark may be used on tournament t-shirts and sweatshirts (not collared shirts).
            The Brand Mark must not exceed 100mm (3.937”) wide. Written
            approval is required from ATP if producing these items yourself. No approval
            is required if merchandise is obtained from an approved ATP licensee.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}> b) On-court Ball Persons / Linesmen</Text>{'\n\n'}
            If a tournament wishes to use the appropriate ATP Challenger Tour Brand
            Mark on the uniforms of ball persons or linesmen, the application of the ATP
            Challenger Tour Brand Mark must be approved in advance by the ATP.{'\n\n'}

            <Text style={RuleStyles.SubHeading2}> B. ATP Challenger Tour Tournaments - The Court</Text>{'\n\n'}
            No commercial branding (sponsor, series or federation) or any other mark may be
            placed on the surface of the court, except as follows:{'\n\n'}

            1) “Host Locality” (See 2.01 C. 3.b. and “Exhibit A.13.1 to A.13.2 “).{'\n\n'}
            2) On-Court Surface Commercial Branding. ATP Challenger Tour tournaments are
            allowed* to place a commercial branding on the court surface. The size and
            placement must be approved three (3) months in advance by ATP. (See “Exhibit
            A.13.1 to A. 13.2 “){'\n\n'}

            *ATP reserves the right to use this Commercial branding position for an ATP Challenger
            Tour sponsor (at Regional level, i.e., multiple tournaments in the same
            region and Global level, i.e., all tournaments globally). Tournaments may be
            approved to use this commercial location in the absence of an ATP Challenger
            Tour sponsor.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule23', next: 'Rule25', nav: navigation }} />
    </>
  );
}


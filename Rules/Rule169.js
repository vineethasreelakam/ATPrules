import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';
import ZoomText from '../Component/ZoomText.js';
import { HighlightText } from "../Component/HighlightText.js";

export default function Rule169({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <HighlightText style={RuleStyles.MainHeading}>X. EXHIBITS</HighlightText>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <ZoomText>
          <HighlightText style={RuleStyles.Description}>
            <HighlightText style={RuleStyles.SubHeading1}>EXHIBIT N - Special Exempts - ATP Challenger Tour
            </HighlightText>{'\n\n'}

            For the purpose of the ATP Challenger Tour special exempt rule, a geographic region
            is defined as follows:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>Region I -
            </HighlightText>{'\n\n'}

            <HighlightText style={RuleStyles.SubHeading3}>Americas.
            </HighlightText>{'\n\n'}
            This region includes the following countries:
            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>North America -
            </HighlightText>{'\n\n'}
            Canada, United States (including Hawaii) and Mexico

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Central America and the Caribbean -
            </HighlightText>{'\n\n'}
            Anguilla (UK), Antigua and Barbuda, Aruba (Neth.), Bahamas, Barbados, Belize,
            Bermuda (UK), British Virgin Islands (UK), Cayman Islands (UK), Costa Rica,
            Cuba, Dominica, Dominican Republic, El Salvador, Greenland (Den.), Grenada,
            Guadeloupe (Fr.), Guatemala, Guyana, Haiti, Honduras, Jamaica, Martinique
            (Fr.), Montserrat (UK), Netherlands Antilles (Neth.), Nicaragua, Panama, Puerto
            Rico (U.S.), St. Kitts and Nevis, St. Lucia, St.-Pierre and Miquelon (Fr.), St. Vincent and the Grenadines, Trinidad and Tobago, Turks and Caicos Islands (UK),
            Virgin Islands (U.S.).

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>South America -
            </HighlightText>{'\n\n'}
            Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Falkland Islands (UK),
            French Guiana (Fr.), Paraguay, Peru, Suriname, Uruguay, Venezuela.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>Region II -
            </HighlightText>{'\n\n'}

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>
              Europe, Africa, Middle East, Western part of Russia and some Western Asia
              countries.
            </HighlightText>{'\n\n'}
            This region includes the following countries:


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Europe -
            </HighlightText>{'\n\n'}

            Albania, Andorra, Austria, Belarus, Belgium, Bosnia-Herzegovina, Bulgaria,
            Channel Islands (UK), Croatia, Czech Republic, Denmark, Estonia, Finland,
            France, Germany, Gibraltar (UK), Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, F.Y.R. of Macedonia, Norway, Poland, Portugal, Romania, San
            Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, United
            Kingdom, Vatican City.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Africa -
            </HighlightText>{'\n\n'}

            Algeria, Angola, Azores (Port.), Benin, Botswana, Burkina Faso, Burundi, Cameroon, Canary Islands (Sp.), Cape Verde, Central African Republic, Chad, Comoros, Congo, Côte d ‘Ivoire, Democratic Republic of the Congo, Djibouti, Egypt,
            Equatorial Guinea, Eritrea, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guin
            ea-Bissau, Kenya, Lesotho, Liberia, Libya, Madagascar, Madeira (Port.), Malawi,
            Mali, Mauritania, Mauritius, Mayotte (Fr.), Morocco, Mozambique, Namibia, Niger,
            Nigeria, Reunion (Fr.), Rwanda, Sao Tome and Principe, Senegal, Seychelles,
            Sierra Leone, Somalia, South Africa, Sudan, Swaziland, Tanzania, Togo, Tunisia,
            Uganda, Western Sahara, Zambia, Zimbabwe.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Middle East -
            </HighlightText>{'\n\n'}

            Armenia, Azerbaijan, Bahrain, Cyprus, Gaza Strip (Israeli-occupied terr.), Georgia, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, Syria,
            Turkiye, United Arab Emirates, West Bank (Israeli-occupied terr.),Yemen.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Western Asia -
            </HighlightText>{'\n\n'}

            Afghanistan, Kazakhstan, Kyrgyzstan, Pakistan, Tajikistan, Turkmenistan and
            Uzbekistan.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Western Russia -
            </HighlightText>{'\n\n'}

            Includes Moscow, St. Petersburg and Togliatti.


            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading2}>Region III -
            </HighlightText>{'\n\n'}

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Eastern part of Asia and Oceania -
            </HighlightText>{'\n\n'}

            This region includes the following countries:

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Eastern Asia -
            </HighlightText>{'\n\n'}

            Bangladesh, Bhutan, Brunei, Cambodia, China, Chinese Taipei, Guam (U.S.),
            India, Indonesia, Japan, Republic of Korea, Democratic People’s Republic of Korea, Laos, Malaysia, Maldives, Mongolia, Myanmar, Nepal, Northern Mariana Islands (U.S.), Palau, Philippines, Eastern Russia, Singapore, Sri Lanka, Thailand,
            Vietnam.

            {'\n\n'}
            <HighlightText style={RuleStyles.SubHeading3}>Oceania -
            </HighlightText>{'\n\n'}

            American Samoa (U.S.), Australia, Cook Islands (N.Z.), Fiji, French Polynesia
            (Fr.), Kiribati, Marshall Islands, Micronesia, Nauru, New Caledonia (Fr.), New
            Zealand, Niue (N.Z.), Papua New Guinea, Pitcairn Islands (UK),Samoa, Solomon
            Islands, Tokelau (N.Z.), Tonga, Tuvalu, Vanuatu, Wallis and Futuna (Fr.).

            {'\n\n'}
          </HighlightText>
          </ZoomText>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule168', next: 'Rule170', nav: navigation }} />
    </>
  );
}


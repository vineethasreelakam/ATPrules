import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule169({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>X. EXHIBITS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>EXHIBIT N - Special Exempts - ATP Challenger Tour
            </Text>{'\n\n'}

            For the purpose of the ATP Challenger Tour special exempt rule, a geographic region
            is defined as follows:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Region I -
            </Text>{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>Americas.
            </Text>{'\n\n'}
            This region includes the following countries:
            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>North America -
            </Text>{'\n\n'}
            Canada, United States (including Hawaii) and Mexico

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Central America and the Caribbean -
            </Text>{'\n\n'}
            Anguilla (UK), Antigua and Barbuda, Aruba (Neth.), Bahamas, Barbados, Belize,
            Bermuda (UK), British Virgin Islands (UK), Cayman Islands (UK), Costa Rica,
            Cuba, Dominica, Dominican Republic, El Salvador, Greenland (Den.), Grenada,
            Guadeloupe (Fr.), Guatemala, Guyana, Haiti, Honduras, Jamaica, Martinique
            (Fr.), Montserrat (UK), Netherlands Antilles (Neth.), Nicaragua, Panama, Puerto
            Rico (U.S.), St. Kitts and Nevis, St. Lucia, St.-Pierre and Miquelon (Fr.), St. Vincent and the Grenadines, Trinidad and Tobago, Turks and Caicos Islands (UK),
            Virgin Islands (U.S.).

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>South America -
            </Text>{'\n\n'}
            Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Falkland Islands (UK),
            French Guiana (Fr.), Paraguay, Peru, Suriname, Uruguay, Venezuela.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Region II -
            </Text>{'\n\n'}

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>
              Europe, Africa, Middle East, Western part of Russia and some Western Asia
              countries.
            </Text>{'\n\n'}
            This region includes the following countries:


            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Europe -
            </Text>{'\n\n'}

            Albania, Andorra, Austria, Belarus, Belgium, Bosnia-Herzegovina, Bulgaria,
            Channel Islands (UK), Croatia, Czech Republic, Denmark, Estonia, Finland,
            France, Germany, Gibraltar (UK), Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, F.Y.R. of Macedonia, Norway, Poland, Portugal, Romania, San
            Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, United
            Kingdom, Vatican City.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Africa -
            </Text>{'\n\n'}

            Algeria, Angola, Azores (Port.), Benin, Botswana, Burkina Faso, Burundi, Cameroon, Canary Islands (Sp.), Cape Verde, Central African Republic, Chad, Comoros, Congo, Côte d ‘Ivoire, Democratic Republic of the Congo, Djibouti, Egypt,
            Equatorial Guinea, Eritrea, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guin
            ea-Bissau, Kenya, Lesotho, Liberia, Libya, Madagascar, Madeira (Port.), Malawi,
            Mali, Mauritania, Mauritius, Mayotte (Fr.), Morocco, Mozambique, Namibia, Niger,
            Nigeria, Reunion (Fr.), Rwanda, Sao Tome and Principe, Senegal, Seychelles,
            Sierra Leone, Somalia, South Africa, Sudan, Swaziland, Tanzania, Togo, Tunisia,
            Uganda, Western Sahara, Zambia, Zimbabwe.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Middle East -
            </Text>{'\n\n'}

            Armenia, Azerbaijan, Bahrain, Cyprus, Gaza Strip (Israeli-occupied terr.), Georgia, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, Syria,
            Turkiye, United Arab Emirates, West Bank (Israeli-occupied terr.),Yemen.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Western Asia -
            </Text>{'\n\n'}

            Afghanistan, Kazakhstan, Kyrgyzstan, Pakistan, Tajikistan, Turkmenistan and
            Uzbekistan.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Western Russia -
            </Text>{'\n\n'}

            Includes Moscow, St. Petersburg and Togliatti.


            {'\n\n'}
            <Text style={RuleStyles.SubHeading2}>Region III -
            </Text>{'\n\n'}

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Eastern part of Asia and Oceania -
            </Text>{'\n\n'}

            This region includes the following countries:

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Eastern Asia -
            </Text>{'\n\n'}

            Bangladesh, Bhutan, Brunei, Cambodia, China, Chinese Taipei, Guam (U.S.),
            India, Indonesia, Japan, Republic of Korea, Democratic People’s Republic of Korea, Laos, Malaysia, Maldives, Mongolia, Myanmar, Nepal, Northern Mariana Islands (U.S.), Palau, Philippines, Eastern Russia, Singapore, Sri Lanka, Thailand,
            Vietnam.

            {'\n\n'}
            <Text style={RuleStyles.SubHeading3}>Oceania -
            </Text>{'\n\n'}

            American Samoa (U.S.), Australia, Cook Islands (N.Z.), Fiji, French Polynesia
            (Fr.), Kiribati, Marshall Islands, Micronesia, Nauru, New Caledonia (Fr.), New
            Zealand, Niue (N.Z.), Papua New Guinea, Pitcairn Islands (UK),Samoa, Solomon
            Islands, Tokelau (N.Z.), Tonga, Tuvalu, Vanuatu, Wallis and Futuna (Fr.).

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule168', next: 'Rule170', nav: navigation }} />
    </>
  );
}


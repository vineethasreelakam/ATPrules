import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RuleStyles } from './Styles.js';
import RuleNavigationButtons from '../screens/RuleNavigationButtons.js';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Rule20({ navigation }) {
  return (
    <>
      <View style={RuleStyles.Layout}>
        <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
          <Text style={RuleStyles.MainHeading}>I. ATP CIRCUIT REGULATIONS</Text>
          <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'rule2.png'}}/>
          <Text style={RuleStyles.Description}>
            <Text style={RuleStyles.SubHeading1}>1.19 Seating and Attendance</Text>{'\n\n'}
            A.ATP Tour tournaments shall have the following minimum Center court seating capacities,
            except as approved by ATP.{'\n\n'}

            <Text style={RuleStyles.SubHeading3}>
                       {'\t\t\t\t\t'}Center {'\t'}Show    {'\t'}Show    {'\t'}Show   {'\n\n'}
            Tournament Category {'\t'}Court {'\t'}Court 1 {'\t'}Court 2 {'\t'}Court 3{'\n\n'}
            </Text>
            <Text style={RuleStyles.DescriptionSize10}>
            ATP Tour Masters 1000 (Combined){'\t'} 12,000{'\t'} 5,000{'\t'} 2,000{'\t'} 1,000{'\n\n'}
            ATP Tour Masters 1000 (Outdoors){'\t'} 10,000{'\t'} 3,000{'\t'} 1,000{'\n\n'}
            ATP Tour Masters 1000 (Indoors){'\t\t'} 10,000{'\t'} 1,000{'\t'} 400{'\n\n'}
            ATP Tour 500 (Outdoors){'\t\t\t'} 7,000{'\t'} 1,000{'\n\n'}
            ATP Tour 500 (Indoors){'\t\t\t\t'} 6,000{'\t'} 500{'\n\n'}
            ATP Tour 250 (Outdoors){'\t\t\t'} 3,500{'\n\n'}
            ATP Tour 250 (Indoors){'\t\t\t\t'} 2,500{'\n\n'}
            </Text>



            B.The recommended attendance criteria for each ATP Tour tournament is as follows:{'\n\n'}
            1) Minimum attendance for the week.{'\n\n'}
            2) Average minimum attendance per session during the final weekend (Friday
            through Sunday) of play in excess of 75% capacity for the Center court.
            Specific recommendations and methods are specified in “Exhibit D”.

            {'\n\n'}
          </Text>
        </ScrollView>
      </View>
      <RuleNavigationButtons props={{ prev: 'Rule19', next: 'Rule21', nav: navigation }} />
    </>
  );
}


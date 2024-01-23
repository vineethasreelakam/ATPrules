import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from '../Rules/Styles';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function AboutATP({ navigation }) {
  return (
    <View style={RuleStyles.Layout}>
      <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
        <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'aboutUs.jpg'}}/>
        <Text style={RuleStyles.Description}>
          <Text style={RuleStyles.MainHeading}>About ATP</Text>
          {'\n\n'}
          As a global governing body of men’s professional tennis, the ATP’s mission is to serve tennis. We entertain a billion global fans, showcase the world’s greatest players at the most prestigious tournaments, and inspire the next generation of fans and players. From the ATP Cup in Australia, to Europe, the Americas and Asia, the stars of the game battle for titles and Pepperstone ATP Rankings points at ATP Masters 1000, 500 and 250 events, and Grand Slams. All roads lead towards the Nitto ATP Finals, the prestigious season finale held in Turin, Italy. Featuring only the world’s top 8 qualified singles players and doubles teams, the tournament also sees the official crowning of the year-end ATP World No. 1, the ultimate achievement in tennis.
          {'\n\n'}
          <Text style={RuleStyles.SubHeading1}>Follow Us on:</Text>
          <Text style={RuleStyles.hyperlinkStyle} onPress={() => { Linking.openURL('https://www.atptour.com/en/'); }}>
          {'\t'}www.atptour.com
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}


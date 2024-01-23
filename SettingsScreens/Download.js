import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { RuleStyles } from '../Rules/Styles';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

export default function Download({ navigation }) {
  return (
    <View style={RuleStyles.Layout}>
      <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
        <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'downloadPdf.jpg'}}/>
        <Text style={RuleStyles.MainHeading}>Download PDF Rule Book</Text>

        <Text style={RuleStyles.Description}>
          Download the ATP tennis rules as pdf document to make it easy to print or view.
          {'\n\n'}

          <Text style={RuleStyles.hyperlinkStyle} onPress={() => { Linking.openURL('https://www.atptour.com/en/corporate/rulebook'); }}>
            Click here to download PDF Rule book
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}


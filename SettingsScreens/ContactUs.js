import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, TouchableHighlight, Linking } from 'react-native';
import { RuleStyles } from '../Rules/Styles';
import ImageViewerComponent from '../screens/ImageViewerComponent.js';

const initialState = { fullname: '', subject: '', comments: '' };

export default function ContactUs({ navigation }) {
   const [email, setemail] = React.useState(initialState);

   function handleFullnameChange(val) {
      setemail({
         ...email,
         fullname: val
      });
   }
   function handleSubjectChange(val) {
      setemail({
         ...email,
         subject: val
      });
   }
   function handleCommentsChange(val) {
      setemail({
         ...email,
         comments: val
      });
   }

   function SendMail() {
      Linking.openURL('mailto:rekha@cigroupusa.com?subject=' + email.subject
         + '&body= Hi, \n' + email.comments
         + '\n\nRegards, \n' + email.fullname);     
   }

   return (
      <View style={RuleStyles.Layout}>
         <ScrollView style={RuleStyles.ScrollViewStyle} minimumZoomScale={1} maximumZoomScale={10}>
            <ImageViewerComponent props={{ImageStyle:RuleStyles.ImageStyle, ImageName: 'contactUs.jpg'}}/>
            <Text style={RuleStyles.MainHeading}>Contact Us</Text>

            <Text style={RuleStyles.Description}>
               Please fill out the form below for further information regarding sponsorship with the ATP World Tour, Next Gen ATP Finals, or Nitto ATP Finals.
               {'\n\n'}
               Please direct any other non-sponsorship inquiries to our general feedback page.
            </Text>
            <View style={RuleStyles.Description}>

               <Text style={RuleStyles.SubHeading2}>Full Name:</Text>
               <TextInput placeholder=" Enter full name"
                  style={RuleStyles.TextInputStyle} editable multiline numberOfLines={1}
                  maxLength={50} onChangeText={handleFullnameChange}
                  value={email.fullname} />

               <Text style={RuleStyles.SubHeading2}>Subject:</Text>
               <TextInput placeholder=" Enter subject"
                  style={RuleStyles.TextInputStyle} editable multiline numberOfLines={1}
                  maxLength={50} onChangeText={handleSubjectChange}
                  value={email.subject} />

               <Text style={RuleStyles.SubHeading2}>Comments:</Text>
               <TextInput placeholder=" Enter comments"
                  style={RuleStyles.TextInputStyle} editable multiline numberOfLines={4}
                  maxLength={200} onChangeText={handleCommentsChange}
                  value={email.comments} />
               <Text>{'\n\n'}
               </Text>

               <Button title="SUBMIT" onPress={() => SendMail()}/>

            </View>
         </ScrollView>
      </View>
   );
}


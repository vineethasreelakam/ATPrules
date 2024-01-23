import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { NavigationStyles, RuleStyles } from '../Rules/Styles';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import { PageIndexList, AllPageIndexList } from './IndexList.js';


export default function ATPRulesList({ navigation }) {
   const [text, onChangeText] = React.useState('');

   let filteredList = FilteredRulesList(AllPageIndexList, text);


   return (
      <View style={RuleStyles.Layout}>

         <View style={searchControlStyles.container}>
            <View style={searchControlStyles.sectionStyle}>
               <Fontisto name="search" size={15} style={searchControlStyles.imageStyle} />
               <TextInput
                  style={{ flex: 1 }}
                  placeholder=" Search here"
                  underlineColorAndroid="transparent"
                  onChangeText={onChangeText}
                  value={text}
               />
            </View>
         </View>


         <ScrollView  minimumZoomScale={1} maximumZoomScale={10}>

            {filteredList.map((item) => {
               return (
                     <TouchableOpacity key={item.id} style={NavigationStyles.container}
                        onPress={() => navigation.navigate(item.pageName)}>
                        <Text style={NavigationStyles.text}>  {item.name} </Text>
                        <MaterialIcons style={NavigationStyles.IconStyle} name="navigate-next" />
                     </TouchableOpacity>
               );
            })}

            <Text>{'\n\n'}</Text>
            <Text style={{
              fontSize: 10,
              color: 'grey',
              textAlign: 'center',
            }}>Version: 05-2023</Text>
         </ScrollView>
      </View>
   );

}




export function FilteredRulesList(fullList, searchText) {
   let filList = fullList;

   if (searchText !== '') {
      filList = fullList.filter(obj => { return obj.name.toLowerCase().includes(searchText.toLowerCase()) || 
         obj.searchindex.toLowerCase().includes(searchText.toLowerCase()); });
   } else {
      filList = PageIndexList;
   }
   return filList;
}





const searchControlStyles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
   },
   sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
      height: 40,
      borderRadius: 20,
      margin: 0,
   },
   imageStyle: {
      margin: 10,
   },
});
import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Fontisto } from '@expo/vector-icons';

export default class SearchContextTest extends React.Component {
  state = { search: '', };

  updateSearch = (search) => {
    this.setState({ search });
    //create list based on search criteria and render 
    filtered = pagesList.filter(obj => {
      return obj.name === search ;
    });
  };

 

  render() {
    const { search } = this.state;

    return (
      <View style={searchControlStyles.container}>
        <View style={searchControlStyles.sectionStyle}>
          <Fontisto  name="search" size={15} style={searchControlStyles.imageStyle} />
          <TextInput
            style={{ flex: 1 }}
            placeholder=" Search here"
            underlineColorAndroid="transparent"
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
      </View>
    );
  }
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
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    borderRadius: 20,
    margin: 0,
  },
  imageStyle: {
    margin:10,
  },
});
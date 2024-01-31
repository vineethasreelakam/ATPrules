import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { NavigationStyles, RuleStyles } from "../Rules/Styles";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import { PageIndexList, AllPageIndexList } from "./IndexList.js";
import { useSearch } from "../Component/SearchProvider.js";

export default function ATPRulesList({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const { updateSearch } = useSearch();

  let filteredList = FilteredRulesList(AllPageIndexList, text);

  return (
    <View style={RuleStyles.Layout}>
      <View style={searchControlStyles.container}>
        <View style={searchControlStyles.sectionStyle}>
          <Fontisto
            name="search"
            size={15}
            style={searchControlStyles.imageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder=" Search here"
            underlineColorAndroid="transparent"
            onChangeText={(e) => {
              updateSearch(e);
              onChangeText(e);
            }}
            value={text}
          />
        </View>
      </View>

      <ScrollView minimumZoomScale={1} maximumZoomScale={10}>
        {filteredList.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={NavigationStyles.container}
              onPress={() => navigation.navigate(item.pageName)}
            >
              <Text style={NavigationStyles.text}>
                {highlightSearchTerm(item.name, text)}
              </Text>
              <MaterialIcons
                style={NavigationStyles.IconStyle}
                name="navigate-next"
              />
            </TouchableOpacity>
          );
        })}

        {/* <Text>{"\n"}</Text> */}
        <Text
          style={{
            marginTop: 10,
            marginBottom: 20,
            fontSize: 12,
            color: "grey",
            textAlign: "center",
          }}
        >
          Version: January 2024
        </Text>

        <Text>{"\n"}</Text>
      </ScrollView>
    </View>
  );
}

const highlightSearchTerm = (text, searchTerm) => {
  if (!searchTerm) {
    return <Text>{text}</Text>;
  }

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <Text key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </Text>
    ) : (
      part
    )
  );
};

export function FilteredRulesList(fullList, searchText) {
  let filList = fullList;

  if (searchText !== "") {
    filList = fullList.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(searchText.toLowerCase()) ||
        obj.searchindex.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  } else {
    filList = PageIndexList;
  }
  return filList;
}

const searchControlStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: -4,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    margin: 0,
  },
  imageStyle: {
    margin: 10,
  },
});

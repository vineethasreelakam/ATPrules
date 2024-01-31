import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { NavigationStyles } from "../Rules/Styles";

export default function Header({ screen }) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={headerStyles.container}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        {/* <View>
        <Text style={color="#fffff"}>{screen}</Text>
      </View> */}
        <Image
          style={headerStyles.LogoImage}
          source={require("../assets/iconImageTransparent.png")}
        />
      </View>
      <View style={{height:7}}/>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    left: 0,
    width: "100%",
    backgroundColor: "#00004D",
    elevation: 5,
    height: 50,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  LogoImage: {
    width: 110,
    height: "100%",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: -24,
    left: 2,
  },
});

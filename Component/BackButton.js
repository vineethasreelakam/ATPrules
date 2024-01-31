import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    // <Pressable  onPress={() => navigation.goBack()}>
      <View style={{  position: "absolute", top: 75 }}>
        
        <Pressable style={{flexDirection: "row",}}  onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={26} color="black" />
        <Text style={{ color: "#000", paddingLeft: 5, fontSize: 18 }}>
          Back
        </Text>
        </Pressable>
      </View>
    // </Pressable>
  );
};

export default BackButton;

import React from "react";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

//we ususally use withnavigation in child component

const NavLink = ({ text, routeName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        //we dont need to () => {clearErrorMessage()} because it is a function
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        text='Already have an account? Sign in instead'
        routeName='Signin'
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    //hide header
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 70,
  },
});

export default SignupScreen;

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        //we dont need to () => {clearErrorMessage()} because it is a function
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage={state.errorMessage}
        submitButtonText='Sign In'
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account? Go back to sign up"
        routeName='Signup'
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;

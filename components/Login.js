import React, { Component } from "react";
import {
  TextInput,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Button
} from "react-native";
import me from "../assets/localimages/bg.jpg";

class Login extends Component {
  state = {};
  render() {
    return (
      <ImageBackground source={me} style={styles.backGround}>
        <View style={styles.formField}>
          <Text
            style={{
              fontFamily: "Julius",
              textAlign: "center",
              marginBottom: 30
            }}
          >
            Login
          </Text>
          <TextInput placeholder="Enter Username" style={styles.inputField} />
          <TextInput placeholder="Enter Password" style={styles.inputField} />
          <Button title="login" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGround: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  formField: {
    width: "60%"
  },
  inputField: {
    borderColor: "#f6f6f6",
    borderBottomWidth: 1,
    marginBottom: 25,
    fontFamily: "Julius",
    padding: 10
  }
});

export default Login;

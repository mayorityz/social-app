import React, { Component } from "react";
import {
  TextInput,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Button
} from "react-native";
import me from "../assets/localimages/young-woman-laughing.jpg";

class Register extends Component {
  state = {};
  render() {
    return (
      <ImageBackground source={me} style={styles.backGround}>
        <View style={styles.formField}>
          <Text
            style={{
              fontFamily: "Julius",
              textAlign: "center",
              marginBottom: 30,
              color: "white"
            }}
          >
            New Account
          </Text>
          <TextInput placeholder="Enter Username" style={styles.inputField} />
          <TextInput placeholder="Enter Email" style={styles.inputField} />
          <TextInput placeholder="Enter Password" style={styles.inputField} />
          <Button title="Create Account" color="#e83" />
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
    width: "70%",
    backgroundColor: "#20232a96",
    padding: 20
  },
  inputField: {
    borderColor: "#f6f6f6",
    borderBottomWidth: 1,
    marginBottom: 15,
    fontFamily: "Julius",
    padding: 10,
    color: "#f6f6f6"
  }
});

export default Register;

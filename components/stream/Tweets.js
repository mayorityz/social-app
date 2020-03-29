import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

class Tweets extends Component {
  state = {};
  render() {
    return (
      <View style={styles.Tweets}>
        <Text style={{ fontFamily: "Elite", color: "#fff" }}>
          Let's talk about bargaining power. So today my mum wanted to buy
          banana and the seller said #120 in my own mind I was thinking my mum
          would say #100. Lo and behold ,my mum said #60, I was shocked like WT!
          The woman sha insisted on #80. Guess what my mum said ?
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontFamily: "Elite",
            color: "#f6f6f6",
            fontSize: 9
          }}
        >
          -- 3 days Ago
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontFamily: "Titan",
            color: "#f6f6f6",
            fontSize: 8
          }}
        >
          @mayority
        </Text>
        <Text
          style={{
            fontFamily: "Elite",
            color: "#1da1f2",
            padding: 12
          }}
        >
          <MaterialCommunityIcons name="reply" size={23} color="#fff" />
          Let's talk about bargaining power. So today my mum wanted to buy
          banana and the seller said #120 in my own mind ...
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Elite",
              color: "#f6f6f6",
              fontSize: 9
            }}
          >
            -- 3 days Ago / @mayority
          </Text>
        </Text>
        <Entypo
          name="twitter-with-circle"
          size={18}
          color="#1da1f2"
          style={{ position: "absolute", top: -10, left: -5 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Tweets: {
    backgroundColor: "#282828",
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});

export default Tweets;

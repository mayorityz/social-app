import React, { Component } from "react";
import { ScrollView } from "react-native";
import Tweets from "./stream/Tweets";

class Stream extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
        <Tweets />
      </ScrollView>
    );
  }
}
export default Stream;

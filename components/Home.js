import React, { Component } from "react";
import Posts from "./index/posts";
import { ScrollView } from "react-native";

/**
 * @params Home - the initially loaded images
 */

class Home extends Component {
  state = {
    fontLoading: false
  };
  render() {
    return (
      <>
        <ScrollView>
          <Posts />
          <Posts />
          <Posts />
        </ScrollView>
      </>
    );
  }
}

export default Home;

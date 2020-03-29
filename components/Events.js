import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Event from "./Events/Event";
class Events extends Component {
  state = {};
  render() {
    return (
      <>
        <View style={styles.banner}>
          <Text style={{ color: "#fff", fontSize: 12, fontFamily: "Julius" }}>
            Today, 01 April
          </Text>
          <Text style={{ color: "#fff", fontSize: 25, fontFamily: "Fredoka" }}>
            Abuja Events
          </Text>
        </View>
        <ScrollView style={styles.eContainer}>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#800080",
    height: 200,
    borderRadius: 20,
    padding: 30,
    margin: 5,
    borderColor: "#f6f6f6",
    borderWidth: 3
  },
  eContainer: {
    position: "absolute",
    top: 80
  }
});

export default Events;
/**
 * Features.
 * Show num of attending
 * Show if you have clicked attending
 * The date of the event
 * Name of the event
 * Free or Fee.
 * Different Types of Fees
 * Posted By Who
 * Featured Events
 * Show How Many Days To Go...
 *
 * Featured Events
 * Think Abt Ads.
 *
 * Future : Accept Payments
 *
 * other.
 *  --- a screen that shows the user's profile
 *  --- settings; that shows/sets profile Img, desc, n stuff
 * ---- polling
 *  ---- music
 * ---- resturant
 */

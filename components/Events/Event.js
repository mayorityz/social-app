import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/localimages/catstack.jpg";
const Event = () => {
  return (
    <>
      <View style={styles.eventPost}>
        <View>
          {/* <Image source={img} width={"5%"} height={5} /> */}
          <Text style={{ fontFamily: "Fredoka", marginBottom: 15 }}>
            GetWetAbuja Coming Soon.
          </Text>
        </View>
        <Text style={{ fontFamily: "Elite" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore ...
        </Text>
        <View style={styles.eventDets}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Foundation
              name="heart"
              size={30}
              color={"#f77"}
              style={{ padding: 2 }}
            />
            <View>
              <Text>Time</Text>
              <Text
                style={{
                  fontFamily: "Julius",
                  fontSize: 12,
                  fontWeight: "bold"
                }}
              >
                12:00
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Foundation
              name="heart"
              size={30}
              color={"#f77"}
              style={{ padding: 2 }}
            />
            <View>
              <Text>Date</Text>
              <Text
                style={{
                  fontFamily: "Julius",
                  fontSize: 12,
                  fontWeight: "bold"
                }}
              >
                12/03
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Foundation
              name="heart"
              size={30}
              color={"#262b27"}
              style={{ padding: 2 }}
            />
            <View>
              <Text>Price</Text>
              <Text
                style={{
                  fontFamily: "Julius",
                  fontSize: 12,
                  fontWeight: "bold"
                }}
              >
                Free
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eventDets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  eventPost: {
    margin: 30,
    marginBottom: 0,
    borderRadius: 5,
    borderColor: "#f6f6f6",
    borderWidth: 2,
    padding: 15,
    backgroundColor: "#f6f6f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65
  },
  banner: {
    backgroundColor: "#800080",
    height: 200,
    borderRadius: 20,
    padding: 30,
    margin: 5,
    borderColor: "#f6f6f6",
    borderWidth: 3
  }
});

export default Event;

import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import defaultImg from "../../assets/localimages/catstack.jpg";
import me from "../../assets/localimages/me.jpg";

class Posts extends Component {
  state = {
    iSize: 20,
    iColor: "#fff"
  };

  render() {
    const { iSize, iColor } = this.state;
    return (
      <>
        <View style={styles.posts}>
          <View style={styles.postOwner}>
            <Image source={me} style={styles.profileImg} />
            <Text style={styles.profileName}>Mayorityz</Text>
          </View>
          <View>
            <Image source={defaultImg} style={styles.postImg} />
            <View style={styles.postActions}>
              <View>
                <Text style={styles.postCounts}>12</Text>
                <Foundation name="heart" size={iSize} color={iColor} />
              </View>
              <View>
                <Text style={styles.postCounts}>12</Text>
                <MaterialCommunityIcons
                  name="comment-text-multiple-outline"
                  size={iSize}
                  color={iColor}
                />
              </View>
            </View>
          </View>

          <Text style={styles.postText}>
            <Text style={{ fontWeight: "bold" }}>Mayorityz</Text> - Today, I
            bought me a lovely cat
          </Text>
          <View>
            <TextInput
              placeholder="Leave A Comment ..."
              style={styles.textInput}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <View>
              <Image source={me} style={styles.profileImg} />
            </View>
            <View>
              <Text
                style={{
                  padding: 2,
                  color: "#f6f6f6",
                  fontFamily: "Julius",
                  fontSize: 8,
                  marginTop: 10
                }}
              >
                Mayorityz {<br />}I Like What I see ... 2 days ago
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <View>
              <Image source={me} style={styles.profileImg} />
            </View>
            <View>
              <Text
                style={{
                  padding: 2,
                  color: "#f6f6f6",
                  fontFamily: "Julius",
                  fontSize: 8,
                  marginTop: 10
                }}
              >
                Mayorityz {<br />}I Like What I see ... 2 days ago
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f6f6f6"
  },
  posts: {
    backgroundColor: "#282828",
    margin: 3,
    marginBottom: 10,
    padding: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  postImg: {
    borderColor: "#c822",
    borderWidth: 2,
    width: "100%",
    height: 250,
    borderRadius: 3
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 6,
    borderColor: "red",
    borderWidth: 2,
    padding: 2
  },
  bottomProfileImg: {
    marginTop: 12
  },
  postText: {
    color: "#f6f6f6",
    margin: 10,
    marginLeft: 0,
    fontFamily: "Julius",
    fontSize: 10
  },
  postActions: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 5
  },
  profileName: {
    position: "absolute",
    color: "#f6f6f6",
    right: 30,
    top: 16,
    fontSize: 10,
    fontFamily: "Julius"
  },
  postCounts: {
    fontFamily: "Righteous",
    marginLeft: 3,
    color: "#f6f6f6",
    fontSize: 12
  },
  textInput: {
    height: 30,
    borderColor: "#c822",
    borderWidth: 1,
    padding: 3,
    fontFamily: "Julius",
    fontSize: 10,
    borderRadius: 3
  }
});

export default Posts;

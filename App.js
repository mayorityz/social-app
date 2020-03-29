import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Stream from "./components/Stream";
import Events from "./components/Events";

export default function App() {
  const [fontLoaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      Fredoka: require("./assets/fonts/FredokaOne-Regular.ttf"),
      Julius: require("./assets/fonts/JuliusSansOne-Regular.ttf"),
      Righteous: require("./assets/fonts/Righteous-Regular.ttf"),
      Elite: require("./assets/fonts/SpecialElite-Regular.ttf"),
      Titan: require("./assets/fonts/TitanOne-Regular.ttf"),
      Ultra: require("./assets/fonts/Ultra-Regular.ttf")
    })
      .then(() => setLoaded(true))
      .catch(err => alert(err));
  });
  return fontLoaded ? (
    <View style={styles.container}>
      <Events />
    </View>
  ) : (
    <ActivityIndicator size="small" color="#00ff00" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22222a",
    paddingTop: 20,
    overflow: "scroll"
  }
});

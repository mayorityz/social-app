import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { StyleSheet, View } from "react-native";

import Home from "./components/Home";
import Login from "./components/Login";

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
    });

    setLoaded(true);
  });
  return fontLoaded ? (
    <View style={styles.container}>
      <Login />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22222a",
    paddingTop: 20
  }
});

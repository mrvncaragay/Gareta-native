import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "SourceSerifPro-Bold" }}>Open up App.js to start working on your app! 4</Text>
    </View>
  );
}

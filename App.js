import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chart from "./components/Chart";
import ProvinceChart from "./components/ProvinceChart";

export default function App() {
  return (
    <View style={styles.container}>
      <Chart/>
      <ProvinceChart/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

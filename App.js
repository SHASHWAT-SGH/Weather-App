import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WeatherLogo from "./components/WeatherLogo";
import Details from "./components/Details";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherLogo />
      <Details />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#000000",
    overflow: "scroll",
  },
});

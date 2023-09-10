import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Details = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>City</Text>
        <Text style={styles.textGrp2}>Varanasi</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Region</Text>
        <Text style={styles.textGrp2}>Uttar Pradesh</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Country</Text>
        <Text style={styles.textGrp2}>India</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Date</Text>
        <Text style={styles.textGrp2}>10-09-23</Text>
      </View>
      {/* weather details start */}
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Weather</Text>
        <Text style={styles.textGrp2}>Sunny</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Wind</Text>
        <Text style={styles.textGrp2}>6.1 kph</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Wind Direction</Text>
        <Text style={styles.textGrp2}>ESE</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Humidity</Text>
        <Text style={styles.textGrp2}>59%</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Cloud</Text>
        <Text style={styles.textGrp2}>23</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textGrp1}>Feels Like</Text>
        <Text style={styles.textGrp2}>39.2 deg C</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
    left: 15,
  },
  textGrp1: {
    color: "#5b5b5b",
    fontSize: 17,
  },
  textGrp2: {
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: 5,
    marginTop: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#1d1d1d",
    padding: 10,
    width: 100,
    minHeight: 100,
    borderRadius: 7,
  },
});

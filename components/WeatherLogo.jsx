import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WeatherLogo = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Image source={require("../assets/2600.png")} style={styles.img} />
      </View>
    </>
  );
};

export default WeatherLogo;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },

  img: {
    width: 170,
    height: 170,
  },
});

// {
//   "location": {
//       "name": "Varanasi",
//       "region": "Uttar Pradesh",
//       "country": "India",
//       "lat": 25.33,
//       "lon": 83.0,
//       "tz_id": "Asia/Kolkata",
//       "localtime_epoch": 1694344261,
//       "localtime": "2023-09-10 16:41"
//   },
//   "current": {
//       "last_updated_epoch": 1694343600,
//       "last_updated": "2023-09-10 16:30",
//       "temp_c": 32.8,
//       "temp_f": 91.0,
//       "is_day": 1,
//       "condition": {
//           "text": "Sunny",
//           "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//           "code": 1000
//       },
//       "wind_mph": 3.8,
//       "wind_kph": 6.1,
//       "wind_degree": 114,
//       "wind_dir": "ESE",
//       "pressure_mb": 999.0,
//       "pressure_in": 29.5,
//       "precip_mm": 0.0,
//       "precip_in": 0.0,
//       "humidity": 59,
//       "cloud": 23,
//       "feelslike_c": 38.9,
//       "feelslike_f": 102.0,
//       "vis_km": 10.0,
//       "vis_miles": 6.0,
//       "uv": 8.0,
//       "gust_mph": 5.1,
//       "gust_kph": 8.3
//   }
// }

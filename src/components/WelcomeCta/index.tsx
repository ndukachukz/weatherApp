import { ReactElement } from "react";
import { Platform, Text, View } from "react-native";
import { useAppSelector } from "../../store/hooks";
import WeatherImage from "../WeatherImage";
import styles from "./style";

const WelcomeCta = (): ReactElement => {
  const weather = useAppSelector((state) => state.weather);
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Today</Text>
      <Text
        style={[styles.deg, Platform.OS === "ios" && { paddingVertical: 5 }]}
      >
        {Number(weather?.current?.temp).toFixed(0)}°C
      </Text>

      {/* row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* column */}
        <View>
          <Text style={styles.main}>{weather?.current?.weather[0].main}</Text>
          <Text style={styles.desc}>
            {weather?.current?.weather[0].description}
          </Text>
        </View>
        {/* cloud image */}
        <WeatherImage
          icon={weather?.current?.weather[0].icon}
          style={{ width: 109, height: 173, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

export default WelcomeCta;

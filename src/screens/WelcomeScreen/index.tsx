import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import * as Location from "expo-location";
import { Header, WelcomeCta, WelcomeInfoItem } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setWeather,
  getWeather,
} from "../../store/weatherFeature/weatherSlice";
import styles from "./style";

const WelcomeScreen = () => {
  // const [weather, setWeather] = useState(null);
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);
  const [status, setStatus] = useState<{
    isLoading?: boolean;
    isError?: boolean;
    errorMsg?: null | string | any;
    isSuccess?: boolean;
  }>();

  useEffect(() => {
    setStatus({ isLoading: true });
    (async () => {
      try {
        let { status: geoStatus } =
          await Location.requestForegroundPermissionsAsync();
        if (geoStatus !== "granted") {
          setStatus({
            errorMsg: "Permission to access location was denied",
            isError: true,
          });
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        console.warn(Platform.OS, location);

        const res = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=d32768fdc43818c2def3970619a1d02c`
          /* HIDE API KEY */
        );

        dispatch(setWeather(await res.json()));
        setStatus({ isLoading: false, isSuccess: true });
        console.warn(Platform.OS, { status, weather });
      } catch (error: any) {
        setStatus({ isLoading: false, errorMsg: error.message });
        console.warn(Platform.OS, { error, status });
      }
    })();
  }, []);
  function time(params: any) {
    return params >= 12 ? params + "pm" : params + "am";
  }

  return (
    <SafeAreaView>
      {status?.isLoading ? (
        <ActivityIndicator size="large" style={{ alignSelf: "center" }} />
      ) : (
        status?.isSuccess && (
          <>
            <Header />
            <View style={{}}>
              <WelcomeCta />

              {/* Welcome info FlatList */}

              <FlatList
                data={weather?.hourly}
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  marginVertical: 25,
                }}
                renderItem={({ index, item }) => (
                  <WelcomeInfoItem
                    image={item.weather[0].icon}
                    time={time(new Date(item.dt * 1000).getHours())}
                    deg={`${Number(item.temp).toFixed(0)}°c`}
                    index={index}
                    arr={weather?.hourly}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={[styles.stats]}>
              <View style={styles.statsTextContainer}>
                <Text style={styles.statsText}>
                  Pressure |
                  <Text style={{ fontWeight: "700", marginHorizontal: 15 }}>
                    {weather?.current?.pressure}
                  </Text>
                  hPa
                </Text>
              </View>
              <View style={styles.statsDevider} />
              <View style={styles.statsTextContainer}>
                <Text style={styles.statsText}>
                  Humidity |
                  <Text style={{ fontWeight: "700", marginHorizontal: 15 }}>
                    {weather?.current?.humidity}
                  </Text>
                  %
                </Text>
              </View>
            </View>
          </>
        )
      )}
    </SafeAreaView>
  );
};

export default WelcomeScreen;

import { ReactElement } from "react";
import { Text, View } from "react-native";
import WeatherImage from "../WeatherImage";
import styles from "./styles";

interface Props {
  time: string | Date | number;
  deg: string;
  image: string;
  index?: number;
  arr: Array<any>;
}

const WelcomeInfoItem = ({
  time,
  deg,
  image,
  index,
  arr,
}: Props): ReactElement => {
  return (
    <View
      style={[
        {
          ...(index === arr?.length - 1 && {
            marginLeft: 5,
          }),
        },
        styles.container,
      ]}
    >
      <View style={styles.itemImageContainer}>
        <WeatherImage style={styles.itemImage} icon={image} />
      </View>
      {/* Image */}
      <Text style={styles.time}>{String(time)}</Text>
      <Text style={styles.deg}>{deg}</Text>
    </View>
  );
};

export default WelcomeInfoItem;

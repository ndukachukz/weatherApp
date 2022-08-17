import { ReactElement } from "react";
import { Image, ImageStyle } from "react-native";

interface Props {
  icon: string;
  style: ImageStyle;
}

const WeatherImage = ({ icon, ...rest }: Props): ReactElement => (
  <Image
    source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
    {...rest}
  />
);
export default WeatherImage;

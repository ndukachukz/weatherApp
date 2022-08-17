import { Text, TextProps } from "react-native";
import styles from "./styles";

interface Props extends TextProps {}
export default ({ children }: Props) => {
  return (
    <Text style={typeof children === "string" && styles.text}>{children}</Text>
  );
};

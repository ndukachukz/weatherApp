import React, { FC } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const Header: FC = () => {
  const SIZE: number = 24;
  return (
    <View style={styles.container}>
      {/* LEFT ICON */}
      <Icon name="angle-left" size={SIZE} />

      {/* HAMBURGER */}
      <Icon name="navicon" size={SIZE} />
    </View>
  );
};

export default Header;

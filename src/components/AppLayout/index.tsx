import { StatusBar } from "expo-status-bar";
import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import styles from "./style";

interface Props extends PropsWithChildren {}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar style="auto" />
      </View>
      <View style={styles.layout}>{children}</View>
    </View>
  );
};

export default AppLayout;

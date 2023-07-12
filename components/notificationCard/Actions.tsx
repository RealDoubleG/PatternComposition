import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type ActionProps = {
  children: ReactNode;
};

export const ActionsRoot = ({ children }: ActionProps) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

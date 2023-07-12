import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type RootProps = {
  children: ReactNode;
};

export const RootContainer = ({ children }: RootProps) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: "#202020",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
});

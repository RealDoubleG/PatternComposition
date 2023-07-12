import { ReactNode } from "react";
import { StyleSheet ,View } from "react-native";

type IconProps = {
  children: ReactNode
}

export const IconRoot = ({ children } : IconProps) => {
  return (
    <View style={styles.iconContainer}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: "flex-start",
    marginBottom: 16,
  }
})
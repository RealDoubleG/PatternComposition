import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export type ActionProps = {
  text: string,
  bg: string
}

export const ActionRoot = ({text, bg}: ActionProps) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: bg}]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: '500'
  }
});

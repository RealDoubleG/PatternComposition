import {
  StyleSheet,
  Text,
  View,
} from "react-native";

type ContentProps = {
  title: string,
  description: string,
  recievedTime: string
}

export const ContentRoot = ({ title, description, recievedTime }: ContentProps) => {
  return(
    <View style={styles.contentContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>
      {description}
    </Text>
    <Text style={styles.recievedTime}>
      {recievedTime}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 8
  },
  recievedTime: {
    color: "#fff"
  }
})
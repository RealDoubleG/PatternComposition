import React from "react";
import { StyleSheet, View } from "react-native";
import { NotificationCard } from "./components/notificationCard";
import { FontAwesome } from "@expo/vector-icons";
import { ActionRoot } from "./components/notificationCard/Action";

export default function App() {
  return (
    <View style={styles.container}>

      <NotificationCard.Root>
        <NotificationCard.Icon>
          <FontAwesome name="tasks" size={24} color="#FFF" />
        </NotificationCard.Icon>
        <NotificationCard.Content
          title="Esse é o titulo"
          description="Essa e a descrição"
          recievedTime="Foi recebido a 3 horas"
        />
        <NotificationCard.Actions>
          <ActionRoot bg="#717" text="Aprovar" />
          <ActionRoot bg="#717" text="Recusar" />
        </NotificationCard.Actions>
      </NotificationCard.Root>

      <NotificationCard.Root>
        <NotificationCard.Icon>
          <FontAwesome name="tasks" size={24} color="#FFF" />
        </NotificationCard.Icon>
        <NotificationCard.Content
          title="Esse é o titulo"
          description="Essa e a descrição"
          recievedTime="Foi recebido a 3 horas"
        />
      </NotificationCard.Root>

      <NotificationCard.Root>
        <NotificationCard.Content
          title="Esse é o titulo"
          description="Essa e a descrição"
          recievedTime="Foi recebido a 3 horas"
        />
      </NotificationCard.Root>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  }
});

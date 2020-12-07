import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabOneScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animations</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Basics" onPress={() => navigation.navigate("Basics")} />
      <Button
        title="Transitions"
        onPress={() => navigation.navigate("Transitions")}
      />
      <Button
        title="Progress Bars"
        onPress={() => navigation.navigate("ProgressBars")}
      />
      <Button
        title="Countdown"
        onPress={() => navigation.navigate("Countdown")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

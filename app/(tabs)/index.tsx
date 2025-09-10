import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen. 123</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // auto column direction
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  content: {
    fontSize: 36,
    textAlign: "center",
    textShadowColor: "#2525",
    textShadowRadius: 3,
    textShadowOffset: {
      height: 2,
      width: 2
    },
  }
});

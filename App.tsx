import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "lightgreen", padding: 40 }}>
        <StatusBar style="auto"></StatusBar>
        <View>
          <Text>Dá Hora Filmes</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

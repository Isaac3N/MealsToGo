import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

// const isAndroid = Platform.OS == "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1}}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});

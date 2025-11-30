import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";

const initialData = [
  { id: 1, title: "Sample  Title 1", description: "Sample Description 1" },
  { id: 2, title: "Sample  Title 2", description: "Sample Description 2" },
  { id: 3, title: "Sample  Title 3", description: "Sample Description 3" },
  { id: 4, title: "Sample  Title 4", description: "Sample Description 4" },
  { id: 5, title: "Sample  Title 5", description: "Sample Description 5" },
  { id: 6, title: "Sample  Title 6", description: "Sample Description 6" },
  { id: 7, title: "Sample  Title 7", description: "Sample Description 7" },
  { id: 8, title: "Sample  Title 8", description: "Sample Description 8" },
  { id: 9, title: "Sample  Title 9", description: "Sample Description 9" },
  { id: 10, title: "Sample  Title 10", description: "Sample Description 10" },
  { id: 11, title: "Sample  Title 11", description: "Sample Description 11" },
];

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

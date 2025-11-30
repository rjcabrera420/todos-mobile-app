import { StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import CreateModal from "./CreateModal";

export default function Header({ setTodos }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handlePress() {
    setIsModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>
      <ButtonPrimary onPress={handlePress}>
        <Text style={styles.buttonText}>New To-Do</Text>
      </ButtonPrimary>
      <CreateModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setTodos={setTodos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
  },
  buttonText: {
    color: "#fff",
  },
});

import { Alert, StyleSheet, Text, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import EditModal from "./EditModal";

export default function Item({ item, setTodos }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleEdit() {
    setIsModalVisible(true);
  }

  function handleDelete() {
    Alert.alert("Warning!", "Are you sure you want to permanently delete this to-do? This action cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => setTodos((todos) => todos.filter((todo) => todo.id !== item.id)),
        style: "destructive",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <View style={styles.buttonGroup}>
        <ButtonPrimary color="#5e55dfff" onPress={handleEdit}>
          <Feather name="edit" size={15} color="white" />
        </ButtonPrimary>

        <ButtonPrimary color="#df5555ff" onPress={handleDelete}>
          <FontAwesome5 name="trash" size={15} color="white" />
        </ButtonPrimary>

        <EditModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setTodos={setTodos} item={item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingBlock: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },

  buttonText: {
    color: "#fff",
  },
});

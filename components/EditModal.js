import { Keyboard, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditModal({ isModalVisible, setIsModalVisible, setTodos, item }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  function handleChangeTitle(text) {
    setTitle(text);
  }

  function handleChangeDescription(text) {
    setDescription(text);
  }

  function handleUpdate() {
    if (!title || !description) return;
    setTodos((todos) => todos.map((todo) => (todo.id === item.id ? { ...todo, title, description } : todo)));
    setIsModalVisible(false);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Edit To-Do</Text>
        </View>
        <TextInput style={styles.textInput} placeholder="Title" value={title} onChangeText={handleChangeTitle} />
        <TextInput style={[styles.textInput, styles.textArea]} editable placeholder="Description" multiline={true} numberOfLines={4} maxLength={40} value={description} onChangeText={handleChangeDescription} textAlignVertical="top" />
        <View style={styles.buttonGroup}>
          <ButtonSecondary onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonSecondaryText}>Cancel</Text>
          </ButtonSecondary>
          <ButtonPrimary onPress={handleUpdate}>
            <Text style={styles.buttonPrimaryText}>Update</Text>
          </ButtonPrimary>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
    marginBottom: 20,
  },

  text: {
    fontSize: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  textArea: {
    minHeight: 100,
  },

  buttonGroup: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
  },

  buttonPrimaryText: {
    color: "#fff",
  },

  buttonSecondaryText: {
    color: "#000",
  },
});

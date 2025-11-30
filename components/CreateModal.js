import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateModal({ isModalVisible, setIsModalVisible, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeTitle(text) {
    setTitle(text);
  }

  function handleChangeDescription(text) {
    setDescription(text);
  }

  function handleCreate() {
    if (!title || !description) return;

    const id = Math.random().toString(36).substring(2, 9);
    const todo = { id: id, title, description };
    setTodos((todos) => [...todos, todo]);
    setTitle("");
    setDescription("");
    setIsModalVisible(false);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Create To-Do</Text>
        </View>
        <TextInput style={styles.textInput} placeholder="Title" value={title} onChangeText={handleChangeTitle} />
        <TextInput style={[styles.textInput, styles.textArea]} editable placeholder="Description" multiline={true} numberOfLines={4} maxLength={40} value={description} onChangeText={handleChangeDescription} textAlignVertical="top" />
        <View style={styles.buttonGroup}>
          <ButtonSecondary onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonSecondaryText}>Cancel</Text>
          </ButtonSecondary>
          <ButtonPrimary onPress={handleCreate}>
            <Text style={styles.buttonPrimaryText}>Create</Text>
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

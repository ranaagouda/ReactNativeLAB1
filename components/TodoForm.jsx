// A Form Component for adding and updating todos.

import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "../HomeStyles";

const TodoForm = ({
  title,
  setTitle,
  description,
  setDescription,
  addTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
      <TouchableOpacity style={styles.submitButton} onPress={addTask}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
import React, { useState } from "react";
import { styles } from "./styles";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "First Item", status: "All" },
    { id: 2, title: "Second Item", status: "Done" },
    { id: 3, title: "Third Item", status: "In progress" },
    { id: 4, title: "Fourth Item", status: "All" },
  ]);

  const addTask = () => {
    if (title.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: title.trim(), description, status: "All" },
      ]);
      setTitle("");
      setDescription("");
    }
  };

  const filterTasks = (status) => {
    if (status === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.status === status);
    }
  };

  const [selectedStatus, setSelectedStatus] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TODO APP</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>

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
          multiline={true} // Allow multiple lines for description
        />
        <TouchableOpacity style={styles.submitButton} onPress={addTask}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStatus === "All" && styles.selectedFilterButton,
          ]}
          onPress={() => setSelectedStatus("All")}
        >
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStatus === "In progress" && styles.selectedFilterButton,
          ]}
          onPress={() => setSelectedStatus("In progress")}
        >
          <Text style={styles.filterButtonText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStatus === "Done" && styles.selectedFilterButton,
          ]}
          onPress={() => setSelectedStatus("Done")}
        >
          <Text style={styles.filterButtonText}>Done</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterTasks(selectedStatus)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;

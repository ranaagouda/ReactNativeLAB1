import React, { useState, useEffect } from "react";
import { styles } from "../HomeStyles";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native"; // Import the hook
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import FilterBtns from "../components/FilterBtns";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([
    // { id: 1, title: "First Item", status: "In progress" },
    // { id: 2, title: "Second Item", status: "Done" },
    // { id: 3, title: "Third Item", status: "In progress" },
    // { id: 4, title: "Fourth Item", status: "Done" },
  ]);
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to AsyncStorage", error);
    }
  };

  const loadTasks = async () => {
    try {
      const tasksString = await AsyncStorage.getItem("tasks");
      if (tasksString) {
        setTasks(JSON.parse(tasksString));
      }
    } catch (error) {
      console.error("Failed to load tasks from AsyncStorage", error);
    }
  };

  const addTask = () => {
    if (title.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: title.trim(),
          description,
          status: "In progress",
        },
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

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "Done" ? "In progress" : "Done" }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const getIconName = () => {
    if (Platform.OS === "ios") {
      return "checkcircle"; // Name of the iOS icon
    } else if (Platform.OS === "android") {
      return "checksquare"; // Name of the Android icon
    } else {
      return "checkcircle"; // Default icon name
    }
  };

  const iconName = getIconName();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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

        <TodoForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          addTask={addTask}
        />

        {tasks.length > 0 && (
          <FilterBtns
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        )}

        <TodoList
          tasks={filterTasks(selectedStatus)}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

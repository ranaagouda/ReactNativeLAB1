// A Todo Item Component to handle individual tasks.

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../HomeStyles";

const TodoItem = ({ item, toggleTaskCompletion, deleteTask, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TodoDetails", { todo: item })}
    >
      <View style={styles.taskItem}>
        <Text
          style={[
            styles.taskTitle,
            item.status === "Done" && styles.taskTitleDone,
          ]}
        >
          {item.title}
        </Text>
        <View style={styles.taskItemIcons}>
          <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
            {item.status === "Done" ? (
              <AntDesign name="checkcircle" size={20} color="teal" />
            ) : (
              <MaterialCommunityIcons
                name="progress-close"
                size={20}
                color="black"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <AntDesign name="delete" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
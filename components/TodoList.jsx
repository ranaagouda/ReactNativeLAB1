// A Todo List Component to display the list of tasks.

import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask, navigation }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          navigation={navigation}
        />
      )}
    />
  );
};

export default TodoList;
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const TodoDetailsPage = ({ route }) => {
  const { todo } = route.params; // Get the todo item from route params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TODO Details</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Title:</Text>
        <Text style={styles.detailText}>{todo.title}</Text>

        <Text style={styles.detailLabel}>Id:</Text>
        <Text style={styles.detailText}>{todo.id}</Text>

        {todo.description && ( // Conditionally render description if it exists
          <View>
            <Text style={styles.detailLabel}>Description:</Text>
            <Text style={styles.detailText}>{todo.description}</Text>
          </View>
        )}

        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detailText}>{todo.status}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailsContainer: {},
  detailLabel: {
    fontWeight: "bold",
    marginTop: 10, // Add some spacing between labels
  },
  detailText: {
    marginTop: 5, // Add some spacing between text and label
  },
});

export default TodoDetailsPage;

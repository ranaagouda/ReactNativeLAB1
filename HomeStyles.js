import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: "teal",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  selectedFilterButton: {
    backgroundColor: "lightgray",
  },
  filterButtonText: {
    fontWeight: "bold",
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  taskItemIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  logo: {
    width: 66,
    height: 58,
    alignSelf: "center",
    marginVertical: 10,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskTitleDone: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

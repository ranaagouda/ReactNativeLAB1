import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../HomeStyles";

const FilterBtns = ({ selectedStatus, setSelectedStatus }) => {
  return (
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
  );
};

export default FilterBtns;

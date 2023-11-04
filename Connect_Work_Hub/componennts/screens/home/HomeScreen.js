import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HomeScreen = () => {
  const works = [
    {
      id: "1",
      title: "AC Repair",
      description: "Experienced in repairing various AC models.",
      visitingCharge: "$50",
      workerName: "John Smith",
    },
    {
      id: "2",
      title: "Fan Repair",
      description: "Specializes in fixing all types of fans.",
      visitingCharge: "$30",
      workerName: "Jane Doe",
    },
    {
      id: "3",
      title: "Cooler Repair",
      description: "Expert in cooler maintenance and repairs.",
      visitingCharge: "$40",
      workerName: "Mike Johnson",
    },
    {
      id: "4",
      title: "Plumbing Services",
      description: "Skilled plumber available for all plumbing needs.",
      visitingCharge: "$45",
      workerName: "Alice Brown",
    },
    {
      id: "5",
      title: "Electrical Repairs",
      description:
        "Licensed electrician for electrical repairs and installations.",
      visitingCharge: "$55",
      workerName: "David Wilson",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Services For You</Text>
      </View>
      <FlatList
        data={works}
        keyExtractor={(work) => work.id}
        renderItem={({ item }) => (
          <View style={styles.workItem}>
            <Text style={styles.workTitle}>{item.title}</Text>
            <Text style={styles.workDescription}>{item.description}</Text>
            <Text style={styles.visitingCharge}>
              Visiting Charge: {item.visitingCharge}
            </Text>
            <Text style={styles.workerName}>Worker: {item.workerName}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  workItem: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  workTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  workDescription: {
    fontSize: 16,
    color: "gray",
  },
  visitingCharge: {
    fontSize: 14,
    color: "#333",
  },
  workerName: {
    fontSize: 14,
    color: "#333",
  },
});

export default HomeScreen;

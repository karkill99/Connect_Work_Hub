import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchScreen = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search for a service..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button title="Search" onPress={handleSearch} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;

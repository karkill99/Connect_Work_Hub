import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const customer = {
    name: "Faizan Sayed",
    imageSource: require("../profile/images.jpg"),
    description: "A loyal customer looking for quality service.",
    contactDetails: {
      email: "faizan@example.com",
      phone: "+91 9672932853",
      location: "New York, USA",
    },
    skills: ["Customer Relations", "Quality Service", "Loyal Client"],
  };

  return (
    <View style={styles.profileContainer}>
      <Image source={customer.imageSource} style={styles.profileImage} />
      <Text style={styles.profileName}>{customer.name}</Text>
      <Text style={styles.profileDescription}>{customer.description}</Text>
      <View style={styles.contactDetails}>
        <Text style={styles.detailLabel}>Contact Details:</Text>
        <Text style={styles.detailText}>{customer.contactDetails.email}</Text>
        <Text style={styles.detailText}>{customer.contactDetails.phone}</Text>
        <Text style={styles.detailText}>
          {customer.contactDetails.location}
        </Text>
      </View>
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsLabel}>Skills and Interests:</Text>
        {customer.skills.map((skill, index) => (
          <Text key={index} style={styles.skillItem}>
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    margin: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileDescription: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  contactDetails: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#333", // Custom color
    marginBottom: 5,
  },
  skillsContainer: {
    marginBottom: 10,
  },
  skillsLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  skillItem: {
    fontSize: 14,
    color: "#333", // Custom color
    marginLeft: 10,
  },
});

export default ProfileScreen;

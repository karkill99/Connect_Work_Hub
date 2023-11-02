// import { View, Text } from "react-native";

// export default function Notify() {
//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   );
// }

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NotificationScreen = () => {
  // Sample data for the first notification
  const workerName1 = "John Smith";
  const mobileNumber1 = "+123-456-7890";
  const description1 = "Request for AC repair service";

  const handleAccept1 = () => {
    // Handle accept request logic for the first notification
  };

  const handleReject1 = () => {
    // Handle reject request logic for the first notification
  };

  // Sample data for the second notification
  const workerName2 = "Jane Doe";
  const mobileNumber2 = "+987-654-3210";
  const description2 = "Request for plumbing services";

  const handleAccept2 = () => {
    // Handle accept request logic for the second notification
  };

  const handleReject2 = () => {
    // Handle reject request logic for the second notification
  };

  return (
    <View style={styles.notificationContainer}>
      {/* First Notification */}
      <Text style={styles.workerName}>{workerName1}</Text>
      <Text style={styles.mobileNumber}>{mobileNumber1}</Text>
      <Text style={styles.description}>{description1}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Accept" onPress={handleAccept1} color="#007AFF" />
        <Button title="Reject" onPress={handleReject1} color="red" />
      </View>

      {/* Second Notification */}
      <Text style={styles.workerName}>{workerName2}</Text>
      <Text style={styles.mobileNumber}>{mobileNumber2}</Text>
      <Text style={styles.description}>{description2}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Accept" onPress={handleAccept2} color="#007AFF" />
        <Button title="Reject" onPress={handleReject2} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#fff",
  },
  workerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mobileNumber: {
    fontSize: 14,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default NotificationScreen;

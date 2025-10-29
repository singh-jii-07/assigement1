import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
   
      <View style={styles.leftSection}>
        <Image
          source={{ uri: "https://imgs.search.brave.com/E-_CWJDNa_zNQYzwwP3ZKdqcf97c-LVtohYWQJTtZ2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MzI3OTA5MS9waG90/by90d28teW91bmct/Y29sbGVhZ3Vlcy13/b3JraW5nLXRvZ2V0/aGVyLWF0LW1vZGVy/bi1vZmZpY2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTZH/cEtQbWZQQkExRHl4/ZnRoRzI4R1VNaDZh/MHpSQnhndVBzTDhp/bnNZdWM9" }}
          style={styles.profileImage}
        />

        <View>
          <Text style={styles.greetingText}>Hello, Nilesh Singh </Text>
          <Text style={styles.dateText}>Today 29 oct.</Text>
        </View>
      </View>


      <TouchableOpacity style={styles.searchButton}>
        <Ionicons name="search" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  dateText: {
    fontSize: 14,
    color: "#777",
  },
  searchButton: {
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

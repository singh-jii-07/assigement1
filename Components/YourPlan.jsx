import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function YourPlan() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.heading}>Your Plan</Text>

     
      <View style={styles.cardsContainer}>
       
        <View style={[styles.card, { backgroundColor: "#FFC873" }]}>
          <Text style={styles.levelTag}>Medium</Text>
          <Text style={styles.title}>Yoga Group</Text>
          <Text style={styles.date}>25 Nov.</Text>
          <Text style={styles.time}>14:00–15:00</Text>
          <Text style={styles.room}>A5 room</Text>

          <View style={styles.trainerContainer}>
            <Image
              source={{ uri: "https://imgs.search.brave.com/Ipzin0hGlAG94CyJZ5O8vvvlUkl2NvfO1NnjyL8_I_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/NTE1NDQwNy9waG90/by90d28tcHJvZmVz/c2lvbmFsLXdvbWVu/LWNvbGxhYm9yYXRp/bmctb24tYS1wcm9q/ZWN0LWluLW9mZmlj/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9X2VqZXdIdHZm/cjRrdTlmWFc4VHRo/SjU5NTYzQWVXWW5M/WXp2ZFl4aWtKST0" }}
              style={styles.trainerImage}
            />
            <Text style={styles.trainerName}>Tiffany Way</Text>
          </View>
        </View>

      
        <View style={[styles.card, { backgroundColor: "#BFD8FF" }]}>
          <Text style={styles.levelTag}>Light</Text>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.date}>28 Nov.</Text>
          <Text style={styles.time}>18:00-19:30</Text>
          <Text style={styles.room}>A2 room</Text>

          <View style={styles.socialContainer}>
            <Ionicons name="logo-instagram" size={18} color="#fff" style={styles.icon} />
            <Ionicons name="logo-youtube" size={18} color="#fff" style={styles.icon} />
            <Ionicons name="logo-twitter" size={18} color="#fff" style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  levelTag: {
    backgroundColor: "rgba(255,255,255,0.6)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    color: "#000",
  },
  date: {
    fontSize: 14,
    color: "#333",
    marginTop: 3,
  },
  time: {
    fontSize: 14,
    color: "#333",
  },
  room: {
    fontSize: 13,
    color: "#555",
  },
  trainerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  trainerImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  trainerName: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E4B8FA",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginTop: 12,
  },
  icon: {
    marginHorizontal: 6,
  },
});

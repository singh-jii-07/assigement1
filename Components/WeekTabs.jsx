import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function WeekTabs() {
  const [selectedDay, setSelectedDay] = useState("Wed");

  const weekData = [
    { id: "1", day: "Sun", date: "22" },
    { id: "2", day: "Mon", date: "23" },
    { id: "3", day: "Tue", date: "24" },
    { id: "4", day: "Wed", date: "25" },
    { id: "5", day: "Thu", date: "26" },
    { id: "6", day: "Fri", date: "27" },
    { id: "7", day: "Sat", date: "28" },
  ];

  const renderItem = ({ item }) => {
    const isSelected = item.day === selectedDay;

    return (
      <TouchableOpacity
        onPress={() => setSelectedDay(item.day)}
        style={[
          styles.tab,
          {
            backgroundColor: isSelected ? "#000" : "#F1F1F1", 
          },
        ]}
      >
        <Text style={[styles.dayText, { color: isSelected ? "#fff" : "#333" }]}>
          {item.day}
        </Text>
        <Text style={[styles.dateText, { color: isSelected ? "#fff" : "#777" }]}>
          {item.date}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={weekData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  tab: {
    width: 60,
    height: 80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "600",
  },
  dateText: {
    fontSize: 15,
    marginTop: 3,
  },
});

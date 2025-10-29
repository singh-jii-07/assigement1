import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../../Components/Header";
import DailyChallengeCard from "../../Components/DailyChallengeCard";
import WeekTabs from "../../Components/WeekTabs";
import YourPlan from "../../Components/YourPlan";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <DailyChallengeCard />
      <WeekTabs />
      <YourPlan />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(226, 223, 226, 0.67)",
  },
});

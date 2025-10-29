import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DailyChallengeCard() {
  return (
    <View style={styles.card}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Daily Challenge</Text>
        <Text style={styles.subtitle}>Do your plan before 09:00 AM</Text>

        <View style={styles.avatarsContainer}>
          <Image
            source={{
              uri: "https://imgs.search.brave.com/XFfKtWeuGNXZ66XOoJjD06HZpgt1K54nAP8tj7e1218/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NjA3MDc4Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtYnVzaW5l/c3N3b21hbi1zbWls/aW5nLWxvb2tpbmct/YXQtcGhvbmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVhE/STlhZ2lhOExNMjRl/SW5UX2VFSzMtTjJY/QTdNTWdtSmd6R2k2/UUpnelU9",
            }}
            style={[styles.avatar, { zIndex: 3 }]}
          />
          <Image
            source={{
              uri: "https://imgs.search.brave.com/XFfKtWeuGNXZ66XOoJjD06HZpgt1K54nAP8tj7e1218/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NjA3MDc4Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtYnVzaW5l/c3N3b21hbi1zbWls/aW5nLWxvb2tpbmct/YXQtcGhvbmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVhE/STlhZ2lhOExNMjRl/SW5UX2VFSzMtTjJY/QTdNTWdtSmd6R2k2/UUpnelU9",
            }}
            style={[styles.avatar, { marginLeft: -10, zIndex: 2 }]}
          />
          <Image
            source={{
              uri: "https://imgs.search.brave.com/XFfKtWeuGNXZ66XOoJjD06HZpgt1K54nAP8tj7e1218/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NjA3MDc4Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtYnVzaW5l/c3N3b21hbi1zbWls/aW5nLWxvb2tpbmct/YXQtcGhvbmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVhE/STlhZ2lhOExNMjRl/SW5UX2VFSzMtTjJY/QTdNTWdtSmd6R2k2/UUpnelU9",
            }}
            style={[styles.avatar, { marginLeft: -10, zIndex: 1 }]}
          />
          <View style={[styles.avatar, styles.extraAvatar]}>
            <Text style={styles.extraText}>+4</Text>
          </View>
        </View>
      </View>

      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/2056014/screenshots/17380450/media/dde661d9b4e2f57a15e3bcd9b9a8f79e.png",
        }}
        style={styles.rightImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#D6C9FF",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D2D2D",
  },
  subtitle: {
    fontSize: 14,
    color: "#4A4A4A",
    marginTop: 4,
  },
  avatarsContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  extraAvatar: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  extraText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  rightImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});

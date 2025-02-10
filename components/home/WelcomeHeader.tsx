import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { theme } from "../../theme";

interface WelcomeHeaderProps {
  username: string;
  datetime: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  username,
  datetime,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Avatar.Icon size={40} icon="clock" style={styles.clockIcon} />
        <Text style={styles.datetime}>{datetime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: "#fff",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  dateContainer: {
    alignItems: "center",
  },
  clockIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  datetime: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
});

export default WelcomeHeader;

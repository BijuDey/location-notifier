import React from "react";
import { View, StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

interface NotificationCardProps {
  count: number;
  lastUpdate: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  count,
  lastUpdate,
}) => {
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="bell-ring-outline"
          size={24}
          color={theme.colors.primary}
        />
        {count > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{count}</Text>
          </View>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Last updated {lastUpdate}</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    marginRight: 16,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: theme.colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
  },
});

export default NotificationCard;

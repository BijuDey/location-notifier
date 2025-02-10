import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { theme } from "../../theme";

/**
 * MapLoadingView Component
 *
 * Displays a loading view while the map is initializing
 * Shows a centered loading spinner with text
 */
const MapLoadingView: React.FC = () => {
  return (
    <View style={styles.mapLoadingContainer}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={styles.loadingText}>Loading map...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mapLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loadingText: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MapLoadingView;

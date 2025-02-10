import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

interface CoordinateBoxProps {
  label: string;
  value: number;
  icon: any;
}

/**
 * CoordinateBox Component
 *
 * Displays a coordinate value with label and icon
 */
const CoordinateBox: React.FC<CoordinateBoxProps> = ({
  label,
  value,
  icon,
}) => {
  return (
    <View style={styles.coordinateBox}>
      <View style={styles.coordinateHeader}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.primary}
        />
        <Text style={styles.coordinateLabel}>{label}</Text>
      </View>
      <Text style={styles.coordinateValue}>{value.toFixed(6)}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coordinateBox: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  coordinateHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  coordinateLabel: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  coordinateValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default CoordinateBox;

import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

interface LocationDisplayProps {
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coordinatesContainer}>
        <View style={styles.coordinateItem}>
          <MaterialCommunityIcons
            name="latitude"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.coordinateLabel}>Latitude</Text>
          <Text style={styles.coordinateValue}>
            {location.latitude.toFixed(6)}°
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.coordinateItem}>
          <MaterialCommunityIcons
            name="longitude"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.coordinateLabel}>Longitude</Text>
          <Text style={styles.coordinateValue}>
            {location.longitude.toFixed(6)}°
          </Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={20}
          color={theme.colors.primary}
        />
        <Text style={styles.address} numberOfLines={2}>
          {location.address}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f8f9fa",
  },
  coordinatesContainer: {
    flexDirection: "row",
    padding: 16,
  },
  coordinateItem: {
    flex: 1,
    alignItems: "center",
  },
  divider: {
    width: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 16,
  },
  coordinateLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  coordinateValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginTop: 4,
  },
  addressContainer: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "flex-start",
  },
  address: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});

export default LocationDisplay;

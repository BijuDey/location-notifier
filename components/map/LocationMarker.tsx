import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { LocationType } from "../../types/location";

interface LocationMarkerProps {
  location: LocationType;
  isLoading: boolean;
}

/**
 * LocationMarker Component
 *
 * Displays a custom marker on the map with loading state
 */
const LocationMarker: React.FC<LocationMarkerProps> = ({
  location,
  isLoading,
}) => {
  return (
    <Marker
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
    >
      <View style={styles.markerContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={40}
          color={theme.colors.primary}
        />
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={theme.colors.primary}
            style={styles.markerLoading}
          />
        )}
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: "center",
  },
  markerLoading: {
    position: "absolute",
    bottom: -10,
  },
});

export default LocationMarker;

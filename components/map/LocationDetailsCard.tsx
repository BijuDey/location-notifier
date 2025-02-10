import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { LocationType } from "../../types/location";
import CoordinateBox from "./CoordinateBox";

interface LocationDetailsCardProps {
  location: LocationType;
  address: string;
  loading: boolean;
  addressLoading: boolean;
  locationLoading: boolean;
  onConfirm: () => void;
}

/**
 * LocationDetailsCard Component
 *
 * Displays location details in a card format including coordinates and address
 */
const LocationDetailsCard: React.FC<LocationDetailsCardProps> = ({
  location,
  address,
  loading,
  addressLoading,
  locationLoading,
  onConfirm,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.handleContainer}>
        <View style={styles.handle} />
      </View>

      <Text style={styles.formTitle}>Location Details</Text>

      <View style={styles.coordinatesContainer}>
        <CoordinateBox
          label="Latitude"
          value={location.latitude}
          icon="latitude"
        />
        <CoordinateBox
          label="Longitude"
          value={location.longitude}
          icon="longitude"
        />
      </View>

      <View style={styles.addressContainer}>
        {/* Address Section */}
        <View style={styles.addressHeader}>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.addressLabel}>Address</Text>
          {addressLoading && (
            <ActivityIndicator
              size="small"
              color={theme.colors.primary}
              style={styles.addressLoading}
            />
          )}
        </View>
        <TextInput
          value={address}
          disabled
          multiline
          numberOfLines={2}
          style={[
            styles.addressInput,
            addressLoading && styles.addressInputLoading,
          ]}
          mode="outlined"
          outlineColor={theme.colors.primary}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={onConfirm}
          style={[styles.button, styles.confirmButton]}
          loading={loading}
          icon="check-circle"
          disabled={locationLoading || addressLoading}
        >
          Confirm Location
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  handleContainer: {
    alignItems: "center",
    paddingVertical: 12,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: theme.colors.primary,
  },
  coordinatesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  addressContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  addressHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  addressLabel: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  addressInput: {
    backgroundColor: "#F5F5F5",
    fontSize: 14,
  },
  addressLoading: {
    marginLeft: 8,
  },
  addressInputLoading: {
    opacity: 0.7,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  button: {
    flex: 1,
    borderRadius: 12,
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
  },
});

export default LocationDetailsCard;

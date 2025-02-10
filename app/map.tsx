import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

import {
  LocationLoadingOverlay,
  LocationMarker,
  LocationDetailsCard,
  MapLoadingView,
} from "../components/map";

import { LocationType } from "../types/location";
import { getAddressFromCoords } from "../utils/location";
import { useLocationStore } from "@/store/locationStore";

/**
 * MapScreen Component
 *
 * Main screen component that handles the map view and location selection functionality.
 * Integrates Google Maps with location selection and address retrieval features.
 */
export default function MapScreen() {
  const router = useRouter();
  const { setSelectedLocation } = useLocationStore();

  // State management for location, address and loading states
  const [location, setLocation] = useState<LocationType>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(true);
  const [addressLoading, setAddressLoading] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  /**
   * Fetches the current device location
   * Requests permission and updates the location state
   */
  const getCurrentLocation = async () => {
    setLocationLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        setLocation({
          ...location,
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        });
        // Get address for initial location
        await fetchAddress(
          currentLocation.coords.latitude,
          currentLocation.coords.longitude
        );
      }
    } catch (error) {
      console.error("Error getting location:", error);
    } finally {
      setLocationLoading(false);
    }
  };

  /**
   * Fetches the address for given coordinates
   * Updates the address state and manages loading state
   */
  const fetchAddress = async (latitude: number, longitude: number) => {
    setAddressLoading(true);
    try {
      const address = await getAddressFromCoords(latitude, longitude);
      setAddress(address);
    } catch (error) {
      console.error("Error getting address:", error);
    } finally {
      setAddressLoading(false);
    }
  };

  /**
   * Handles map press events
   * Updates location and fetches new address
   */
  const handleMapPress = async (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLocation({ ...location, latitude, longitude });
    await fetchAddress(latitude, longitude);
  };

  /**
   *
   */

  const handleConfirm = () => {
    setSelectedLocation({
      latitude: location?.latitude,
      longitude: location?.longitude,
      address: address,
    });
    router.back();
  };

  return (
    <View style={styles.container}>
      {locationLoading ? (
        <MapLoadingView />
      ) : (
        <MapView
          style={styles.map}
          region={location}
          provider={PROVIDER_GOOGLE}
          onPress={handleMapPress}
          showsMyLocationButton
          showsUserLocation
        >
          <LocationMarker location={location} isLoading={addressLoading} />
        </MapView>
      )}

      <LocationDetailsCard
        location={location}
        address={address}
        loading={loading}
        addressLoading={addressLoading}
        locationLoading={locationLoading}
        onConfirm={handleConfirm}
      />

      <LocationLoadingOverlay isVisible={locationLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

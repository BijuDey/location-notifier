import React from "react";
import { StyleSheet } from "react-native";
import { Portal, Modal, Text, ActivityIndicator } from "react-native-paper";
import { theme } from "../../theme";

interface LoadingOverlayProps {
  isVisible: boolean;
}

/**
 * LocationLoadingOverlay Component
 *
 * Displays a loading overlay when fetching location
 */
const LocationLoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
}) => (
  <Portal>
    <Modal
      visible={isVisible}
      dismissable={false}
      contentContainerStyle={styles.loadingModal}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={styles.loadingText}>Getting your location...</Text>
    </Modal>
  </Portal>
);

const styles = StyleSheet.create({
  loadingModal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: theme.colors.primary,
    fontSize: 16,
  },
});

export default LocationLoadingOverlay;

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Platform, Alert, Dimensions } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Device from "expo-device";
import * as Clipboard from "expo-clipboard";
import { theme } from "../theme";
import { useLocationStore } from "../store/locationStore";
import { LocationDisplay, TokenDisplay } from "../components/home";
import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotification";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function Home() {
  const selectedLocation = useLocationStore((state) => state.selectedLocation);
  const [notificationToken, setNotificationToken] = useState<string | null>(
    null
  );
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  useEffect(() => {
    async function registerToken() {
      try {
        const result = await registerForPushNotificationsAsync();
        if (result.denied) {
          setPermissionDenied(true);
          return;
        }
        setPermissionDenied(false);
        if (result.success && result.token) {
          setNotificationToken(result.token);
        } else {
          console.warn("Failed to get notification token:", result.error);
          Alert.alert("Notification Setup Failed", result.error);
        }
      } catch (error) {
        console.error("Error in notification setup:", error);
      }
    }

    if (Device.isDevice) {
      registerToken();
    }
  }, []);

  const handleCopyToClipboard = async () => {
    if (notificationToken) {
      await Clipboard.setStringAsync(notificationToken);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={32}
                color={theme.colors.primary}
              />
            </View>
            <Text style={styles.headerText}>Location Notifier</Text>
          </View>

          {selectedLocation ? (
            <LocationDisplay location={selectedLocation} />
          ) : (
            <View style={styles.emptyStateContainer}>
              <MaterialCommunityIcons
                name="map-search"
                size={64}
                color={theme.colors.primary}
                style={styles.emptyStateIcon}
              />
              <Text style={styles.emptyStateText}>No location selected</Text>
            </View>
          )}

          <Button
            mode="contained"
            style={styles.button}
            icon={selectedLocation ? "map-check-outline" : "map-marker-plus"}
            contentStyle={styles.buttonContent}
            onPress={() => router.navigate("/map")}
          >
            {selectedLocation ? "Change Location" : "Select Location"}
          </Button>

          <TokenDisplay
            notificationToken={notificationToken}
            permissionDenied={permissionDenied}
            copySuccess={copySuccess}
            onCopy={handleCopyToClipboard}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  mainCard: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#f0f7ff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  headerText: {
    fontSize: 28,
    fontWeight: "800",
    marginLeft: 16,
    color: theme.colors.primary,
    letterSpacing: -0.5,
  },
  emptyStateContainer: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 32,
    borderRadius: 20,
    marginVertical: 20,
  },
  emptyStateIcon: {
    marginBottom: 16,
    opacity: 0.8,
  },
  emptyStateText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 24,
    fontWeight: "500",
  },
  button: {
    marginTop: 24,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonContent: {
    height: 52,
    paddingHorizontal: 8,
  },
});

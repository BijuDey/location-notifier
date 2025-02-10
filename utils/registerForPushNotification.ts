import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

interface NotificationSetupResult {
  success: boolean;
  token?: string;
  error?: string;
  denied?: boolean;
}

/**
 * Sets up the notification channel for Android devices
 */
const setupAndroidNotificationChannel = async (): Promise<void> => {
  if (!Constants.platform?.android) return;

  await Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: "#FF231F7C",
  });
};

/**
 * Checks and requests notification permissions
 * @returns Promise<boolean> - Whether permissions were granted
 */
const checkAndRequestPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  if (existingStatus === "granted") return true;

  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
};

/**
 * Registers the device for push notifications
 * @returns Promise<NotificationSetupResult> - Result of the registration process
 */
export const registerForPushNotificationsAsync =
  async (): Promise<NotificationSetupResult> => {
    try {
      // Check if running on physical device
      if (!Device.isDevice) {
        return {
          success: false,
          error: "Push notifications require a physical device",
        };
      }

      // Setup Android notification channel
      await setupAndroidNotificationChannel();

      // Check and request permissions
      const hasPermission = await checkAndRequestPermissions();
      if (!hasPermission) {
        return {
          success: false,
          denied: true,
          error: "Notification permissions were denied",
        };
      }

      // Get device push token
      const tokenData = await Notifications.getDevicePushTokenAsync();

      if (!tokenData?.data) {
        return {
          success: false,
          error: "Failed to get push token",
        };
      }

      return {
        success: true,
        token: tokenData.data,
      };
    } catch (error) {
      console.error("Push notification registration error:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  };

// Optional: Add notification handler setup
export const setupNotificationHandlers = (): void => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

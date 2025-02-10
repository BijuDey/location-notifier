import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Surface, Text, IconButton } from "react-native-paper";
import * as Device from "expo-device";
import { theme } from "../../theme";

export interface TokenDisplayProps {
  notificationToken: string | null;
  permissionDenied: boolean;
  copySuccess: boolean;
  onCopy: () => void;
}

const TokenDisplay: React.FC<TokenDisplayProps> = ({
  notificationToken,
  permissionDenied,
  copySuccess,
  onCopy,
}) => {
  let tokenText = "Loading token...";
  if (permissionDenied) {
    tokenText = "Notification Permission Denied";
  } else if (!Device.isDevice) {
    tokenText = "Notification Only Works on Real Device";
  } else if (notificationToken) {
    tokenText = notificationToken;
  }

  return (
    <Surface style={styles.tokenContainer}>
      <Text style={styles.tokenLabel}>Notification Token</Text>
      <View style={styles.tokenWrapper}>
        <Text style={styles.tokenText} numberOfLines={2}>
          {tokenText}
        </Text>
        {notificationToken && !permissionDenied && Device.isDevice && (
          <IconButton
            icon={copySuccess ? "check-circle" : "content-copy"}
            size={24}
            onPress={onCopy}
            mode="contained"
            style={styles.copyButton}
            iconColor={
              copySuccess ? theme.colors.success : theme.colors.primary
            }
          />
        )}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  tokenContainer: {
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  tokenLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: 12,
  },
  tokenWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  tokenText: {
    flex: 1,
    fontSize: 14,
    color: "#2d3748",
    marginRight: 12,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  copyButton: {
    margin: 0,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

export default TokenDisplay;

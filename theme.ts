import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#242424", // Pure black for primary actions
    secondary: "#666666", // Mid-gray for secondary elements
    success: "#333333", // Dark gray for success states
    accent: "#999999", // Light gray for accent elements
    background: "#FFFFFF", // Pure white background
    surface: "#F5F5F5", // Light gray surface
    text: "#000000", // Black text
    placeholder: "#CCCCCC", // Light gray for placeholders
    error: "#4A4A4A", // Dark gray for errors
  },
};

import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyA-od9hrzVEANJg7S5c8P6qTYfh6FoMrko");

export const getAddressFromCoords = async (
  latitude: number,
  longitude: number
) => {
  try {
    const response = await Geocoder.from(latitude, longitude);
    return response.results[0].formatted_address;
  } catch (error) {
    console.error("Error geocoding:", error);
    return "";
  }
};

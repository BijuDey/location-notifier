import { create } from "zustand";

interface LocationState {
  selectedLocation: {
    latitude: number;
    longitude: number;
    address: string;
  } | null;
  setSelectedLocation: (
    location: { latitude: number; longitude: number; address: string } | null
  ) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  selectedLocation: null,
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));

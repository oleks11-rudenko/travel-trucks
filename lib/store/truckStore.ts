import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';

interface CampersStore {
  campers: Camper[];
  setCampers: (camper: Camper[]) => void;
  clearCampers: () => void;
}

export const useCampersStore = create<CampersStore>()(
  persist(
    (set) => ({
      campers: [],
      setCampers: (campers) => set({ campers }),
      clearCampers: () => set({ campers: [] }),
    }),
    { name: 'campers-list', partialize: (state) => ({ campers: state.campers }) }
  )
);

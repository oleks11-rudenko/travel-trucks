import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';

interface FavouriteTruckStore {
  favourites: Camper[];
  toggleFavourite: (camper: Camper) => void;
}

export const useFavouriteTruckStore = create<FavouriteTruckStore>()(
  persist(
    (set) => ({
      favourites: [],
      toggleFavourite: (camper) =>
        set((state) => {
          const exists = state.favourites.some((item) => item.id === camper.id);
          return exists
            ? { favourites: state.favourites.filter((item) => item.id !== camper.id) }
            : { favourites: [...state.favourites, camper] };
        }),
    }),
    { name: 'favourite-campers-storage' }
  )
);

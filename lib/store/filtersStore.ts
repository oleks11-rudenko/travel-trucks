import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Filters } from '@/types/filter';

interface FiltersDraftStore {
  draftFilters: Filters;
  setDraftFilters: (filters: Filters) => void;
  clearDraftFilters: () => void;
}

const initialDraft: Filters = {
  location: '',
  form: '',
  transmission: '',
  engine: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
};

export const useFilterDraftStore = create<FiltersDraftStore>()(
  persist(
    (set) => ({
      draftFilters: initialDraft,
      setDraftFilters: (filters) => set(() => ({ draftFilters: filters })),
      clearDraftFilters: () => set(() => ({ draftFilters: initialDraft })),
    }),
    { name: 'filters-draft', partialize: (state) => ({ draftFilters: state.draftFilters }) }
  )
);

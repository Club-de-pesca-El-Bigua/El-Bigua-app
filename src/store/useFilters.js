import { create } from "zustand";

export const useFilterState = create((set) => ({
  filters: [],
  setFilters: (filters) => set((state) => ({ ...state, filters })),
}));

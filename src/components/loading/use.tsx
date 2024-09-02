import { create } from 'zustand';

interface StateLoading {
  IsLoading: boolean;
}
interface Action {
  setIsLoading: (IsLoading: StateLoading['IsLoading']) => void;
}
export const UseLoading = create<StateLoading & Action>((set) => ({
  IsLoading: false,
  setIsLoading: (IsLoading) => {
    set(() => ({ IsLoading }));
  },
}));

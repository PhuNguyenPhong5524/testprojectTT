import { create } from 'zustand';

interface StateLoading {
  IsLoadingButton: boolean;
  IsStatus: string;
}
interface Action {
  setIsStatus: (IsStatus: StateLoading['IsStatus']) => void;
  setIsLoadingButton: (IsLoadingButton: StateLoading['IsLoadingButton']) => void;
}
export const UseLoadingButton = create<StateLoading & Action>((set) => ({
  IsLoadingButton: true,
  IsStatus: '',
  setIsLoadingButton: (IsLoadingButton) => {
    set(() => ({ IsLoadingButton }));
  },
  setIsStatus: (IsStatus) => {
    set(() => ({ IsStatus }));
  },
}));

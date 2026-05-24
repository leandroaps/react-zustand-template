import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useStore = create<Store>()(
  persist<Store>(
    (set, get) => ({
      count: 1,
      increase: () => set(() => ({ count: get().count + 1 })),
      decrease: () => set(() => ({ count: get().count - 1 })),
    }),
    {
      name: "react-zustand-template",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

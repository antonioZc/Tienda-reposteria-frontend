import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: async () => {
        try {
          await fetch("http://localhost:3000/api/users/logout", {
            method: "POST",
            credentials: "include",
          });
          set({ user: null });
        } catch (error) {
          console.log(error);
          alert("No se pudo cerrar su sesion");
        }
      },
    }),
    { name: "auth-storage" } // lo guarda en localStorage
  )
);

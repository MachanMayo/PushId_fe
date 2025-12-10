import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Kita pakai 'persist' supaya kalau di-refresh datanya gak hilang
export const useAuthStore = create(
  persist(
    (set) => ({
      // State Awal
      user: null,       // Belum login
      token: null,      // Belum ada token
      isLoggedIn: false,

      // Aksi (Actions)
      login: (userData, token) => set({ 
        user: userData, 
        token: token, 
        isLoggedIn: true 
      }),

      logout: () => set({ 
        user: null, 
        token: null, 
        isLoggedIn: false 
      }),
    }),
    {
      name: 'squadup-storage', // Nama key di LocalStorage browser
    }
  )
);
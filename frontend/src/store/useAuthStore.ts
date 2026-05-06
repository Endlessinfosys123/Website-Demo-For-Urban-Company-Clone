import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Role = 'guest' | 'customer' | 'partner' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
}

interface AuthState {
  user: User | null;
  role: Role;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: 'guest',
      isAuthenticated: false,
      login: (userData) => set({ user: userData, role: userData.role, isAuthenticated: true }),
      logout: () => set({ user: null, role: 'guest', isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

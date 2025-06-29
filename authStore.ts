import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  skills?: string[];
  resumeAnalyzed?: boolean;
}

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (email: string, password: string) => {
        // Mock authentication - in real app, this would call an API
        if (email === 'admin@skillpulse.com' && password === 'admin123') {
          set({
            user: {
              id: '1',
              name: 'Administrator',
              email: 'admin@skillpulse.com',
              role: 'admin',
            }
          });
          return true;
        } else if (email && password) {
          set({
            user: {
              id: '2',
              name: email.split('@')[0],
              email,
              role: 'user',
              skills: [],
              resumeAnalyzed: false,
            }
          });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null }),
      register: async (name: string, email: string, password: string) => {
        // Mock registration
        set({
          user: {
            id: Date.now().toString(),
            name,
            email,
            role: 'user',
            skills: [],
            resumeAnalyzed: false,
          }
        });
        return true;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
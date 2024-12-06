import { create } from 'zustand';
import { AuthState } from '../types';

// Mock user data
const mockUser = {
  id: '1',
  email: 'demo@example.com',
  name: 'Demo User',
  balance: 5000,
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email: string, password: string) => {
    // In a real app, this would make an API call
    if (email === 'demo@example.com' && password === 'demo123') {
      set({ user: mockUser, isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
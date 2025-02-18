// stores/authStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import authService from '@/services/authService';

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null);
  const accessToken = ref(localStorage.getItem('token') || null);
  const refreshToken = ref(localStorage.getItem('refreshToken') || null);

  // Getters
  const isAuthenticated = computed(() => !!accessToken.value);

  // Actions
  const login = async (credentials) => {
    try {
      const token = await authService.login(credentials);
      accessToken.value = token.accessToken;
      refreshToken.value = token.refreshToken;
      localStorage.setItem('accessToken', token.accessToken);
      localStorage.setItem('refreshToken', token.refreshToken);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { token: newToken, user: userData } = await authService.register(userData);
      token.value = newToken;
      user.value = userData;
      localStorage.setItem('token', newToken);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      accessToken.value = null;
      refreshToken.value = null;
      user.value = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const refresh = async () => {
    try {
      const token = await  authService.refreshToken();
      accessToken.value = token.accessToken;
      refreshToken.value = token.refreshToken;
      localStorage.setItem('accessToken', token.accessToken);
      localStorage.setItem('refreshToken', token.refreshToken);
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  };

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    login,
    register,
    logout,
    refresh,
  };
});

import type { User } from "../types/types";

const TOKEN_KEY = "cineteca-token";
const USER_KEY = "cineteca-user";

export const getToken = (): string | null => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const getStoredUser = (): User | null => {
  const token = getToken();
  const storedUser = window.localStorage.getItem(USER_KEY);

  if (!token || !storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as User;
  } catch {
    return null;
  }
};

export const saveSession = (token: string, user: User) => {
  window.localStorage.setItem(TOKEN_KEY, token);
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearSession = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
};

import { useState, type PropsWithChildren } from "react";

import type { User } from "../types/types";
import { clearSession, getStoredUser, saveSession } from "../utils/storage";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(getStoredUser);

  const login = (token: string, nextUser: User) => {
    saveSession(token, nextUser);
    setUser(nextUser);
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

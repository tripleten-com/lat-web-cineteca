import type { User } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

const authRequest = async (path: string, body: unknown) => {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error de autenticación");
  }

  return res.json();
};

export const registerUser = (name: string, email: string, password: string): Promise<User> =>
  authRequest("/signup", { name, email, password });

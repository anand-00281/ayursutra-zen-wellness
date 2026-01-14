import React, { createContext, useContext, useState } from "react";

type UserRole = "patient" | "therapist" | null;

type AuthRoleContextValue = {
  role: UserRole;
  userName: string | null;
  setRole: (role: UserRole, name?: string) => void;
  logout: () => void;
};

const AuthRoleContext = createContext<AuthRoleContextValue | undefined>(
  undefined
);

// Simple in-memory auth state (no persistence) so that fresh page load
// always starts as logged out with Login / Sign Up visible in navbar.
export const AuthRoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRoleState] = useState<UserRole>(null);
  const [userName, setUserNameState] = useState<string | null>(null);

  const setRole = (newRole: UserRole, name?: string) => {
    setRoleState(newRole);
    if (name) {
      setUserNameState(name);
    } else if (!newRole) {
      setUserNameState(null);
    }
  };

  const logout = () => {
    setRoleState(null);
    setUserNameState(null);
  };

  return (
    <AuthRoleContext.Provider value={{ role, userName, setRole, logout }}>
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => {
  const ctx = useContext(AuthRoleContext);
  if (!ctx) {
    throw new Error("useAuthRole must be used within an AuthRoleProvider");
  }
  return ctx;
};


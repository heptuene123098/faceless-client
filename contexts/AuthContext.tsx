"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  registeringAs: "attendee" | "speaker";
  setRegisteringAs: Dispatch<SetStateAction<"attendee" | "speaker">>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [registeringAs, setRegisteringAs] = useState<"attendee" | "speaker">(
    "attendee"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        registeringAs,
        setRegisteringAs,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

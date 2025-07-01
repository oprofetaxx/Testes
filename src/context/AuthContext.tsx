import React, { createContext, useState, useContext } from 'react';


// 1️⃣ Cria a guardiã (contexto)
export const AuthContext = createContext({
  isSignedIn: false,
  setIsSignedIn: (value: boolean) => {},
});

// 2️⃣ Provider que vai em volta do app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false); // começa não logado

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3️⃣ Hook para perguntar para a guardiã
export function useIsSignedIn() {
  const { isSignedIn } = useContext(AuthContext);
  return isSignedIn;
}
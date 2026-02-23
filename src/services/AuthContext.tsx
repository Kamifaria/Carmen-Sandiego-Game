import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo o tipo do usuário
interface User {
  username: string;
}

// Definindo o tipo do contexto de autenticação
interface AuthContextType {
  user: User | null; // Usuário ou null se não estiver autenticado
  setUser: (user: User | null) => void; // Função para atualizar o usuário
}

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente provedor do contexto de autenticação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Estado inicial do usuário

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para utilizar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

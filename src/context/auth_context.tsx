import { PropsWithChildren, createContext, useContext, useState } from 'react';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

interface AuthProps {
  authState: { authenticated: boolean | null; username: string | null; role: Role | null };
  onLogin: (userName: string, password: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    username: string | null;
    role: Role | null;
  }>({
    authenticated: null,
    username: null,
    role: null,
  });

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setAuthState({
        authenticated: true,
        username,
        role: Role.ADMIN,
      });
      console.log('logged in as admin');
    } else if (username === 'user' && password === 'password') {
      setAuthState({
        authenticated: true,
        username,
        role: Role.USER,
      });
      console.log('logged in as user');
    } else {
      console.log(`Invalid username: ${username} or password: ${password}`);
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setAuthState({
      authenticated: false,
      username: null,
      role: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        onLogin: login,
        onLogout: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

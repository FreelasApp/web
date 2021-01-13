import React, { useContext, createContext, useState } from 'react';
import clientApi from '../service/clientApi';

interface LoginRequest {
  email: string;
  password: string;
}

interface UserProps {
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthContextProps {
  user: UserProps;
  token: string;
  login: (data: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const ContextAuth = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(() => {
    const response = localStorage.getItem('FreelasApp@user');
    if (response) {
      return JSON.parse(response);
    }
    return {} as UserProps;
  });

  const [token, setToken] = useState(() => {
    const response = localStorage.getItem('FreelasApp@token');
    if (response) {
      return JSON.parse(response);
    }
    return {} as UserProps;
  });

  const login = async ({ email, password }: LoginRequest) => {
    const response = await clientApi.post('/login', {
      email,
      password,
    });

    setUser(response.data.user);
    setToken(response.data.token);

    localStorage.setItem('FreelasApp@user', JSON.stringify(response.data.user));
    localStorage.setItem(
      'FreelasApp@token',
      JSON.stringify(response.data.token),
    );
  };

  const logout = async () => {
    localStorage.removeItem('FreelasApp@user');

    setUser({} as UserProps);
  };

  return (
    <ContextAuth.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

function useAuthContext(): AuthContextProps {
  return useContext(ContextAuth);
}

export { useAuthContext, AuthProvider };

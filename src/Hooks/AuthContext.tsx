import React, { useContext, createContext, useState, useCallback } from 'react';
import clientApi from '../service/clientApi';

interface LoginRequest {
  email: string;
  password: string;
}

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface AuthContextProps {
  user: UserProps;
  token: string | undefined;
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
    return undefined;
  });

  const [token, setToken] = useState(() => {
    const response = localStorage.getItem('FreelasApp@token');
    if (response) {
      clientApi.defaults.headers = {
        authorization: `Bearer ${JSON.parse(response)}`,
      };
      return JSON.parse(response);
    }
    return null;
  });

  const handleConvertInTitleWord = useCallback((word: string) => {
    const charactries = word.split('');

    return charactries.reduce((acumulator, char, index) => {
      if (index === 0) {
        return acumulator + char.toUpperCase();
      }
      return acumulator + char;
    }, '');
  }, []);

  const login = async ({ email, password }: LoginRequest) => {
    const response = await clientApi.post<{
      user: UserProps;
      token: string;
    }>('/login', {
      email,
      password,
    });

    const userFomated = {
      firstName: handleConvertInTitleWord(response.data.user.firstName),
      lastName: handleConvertInTitleWord(response.data.user.lastName),
      email: response.data.user.email,
      avatar: response.data.user.avatar
        ? `http://localhost:3333/files/${response.data.user.avatar}`
        : 'https://image.freepik.com/vetores-gratis/ilustracao-de-personagem-cavalheiro-bonito_24877-60133.jpg',
    };

    setUser(userFomated);
    setToken(response.data.token);

    clientApi.defaults.headers = {
      authorization: `Bearer ${response.data.token}`,
    };

    localStorage.setItem('FreelasApp@user', JSON.stringify(response.data.user));
    localStorage.setItem(
      'FreelasApp@token',
      JSON.stringify(response.data.token),
    );
  };

  const logout = async () => {
    localStorage.removeItem('FreelasApp@user');

    setUser(undefined);
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

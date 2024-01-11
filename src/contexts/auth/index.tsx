import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { ReactNode, createContext, useState, useEffect, useContext } from 'react';
import { User } from '../../globalTypes';
import Api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginParams {
  token: string;
  user: User;
  isChecked: boolean;
}

interface AuthProviderData {
  logged: boolean;
  tokenCheck: () => void;
  login: (param: LoginParams) => void;
  logout: () => void;
  user: User;
  getUserByToken: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { navigate, reset } = useNavigation<NavigationProp<ParamListBase>>();
  const [logged, setLogged] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    cartId: '',
  });

  const getUserByToken = () => {
    Api.get('/auth')
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  };

  const checkTokenExpiration = () => {
    Api.get('/auth')
      .then((res) => {
        setUser(res.data);
        setLogged(true);
        reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((err) => {
        reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      });
  };


    const tokenCheck = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(token)
      if (token) {
        checkTokenExpiration()
      }else{
        reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      };
    };
 

  const login = ({ token, user, isChecked }: LoginParams) => {
    if (isChecked) {
      AsyncStorage.setItem('token', token);
    }
    setLogged(true);
    setUser(user);
    reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const logout = () => {
    AsyncStorage.clear();
    setLogged(false);
    navigate('Login');
  };

  return (
    <AuthContext.Provider
      value={{ logged, login, logout, user, getUserByToken, tokenCheck }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

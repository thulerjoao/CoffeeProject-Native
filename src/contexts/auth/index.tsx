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
        navigate('Home');
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const tokenfunction = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) checkTokenExpiration();
    };
    tokenfunction();
  }, []);

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
    navigate('Loading');
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout, user, getUserByToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

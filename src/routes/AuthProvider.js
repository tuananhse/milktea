/**
 * Library
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTokenFailedAction,
  getTokenSuccessAction,
} from '../redux/actions/Auth';
/**
 * Import lib
 */

const AuthContext = createContext();

/**
 *  Render
 */
function AuthProvider({children}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  React.useEffect(() => {
    const getMyToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('@token');
        if (userToken) {
          dispatch(getTokenSuccessAction(userToken));
        } else {
          dispatch(getTokenFailedAction());
        }
      } catch (error) {
        dispatch(getTokenFailedAction());
      }
      /**
       * If have token , create action update update token
       */
    };
    getMyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state: user,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth, AuthContext};

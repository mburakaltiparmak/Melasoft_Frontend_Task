export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (user, jwt) => ({
  type: LOGIN,
  payload: { user, jwt }
});

export const logout = () => ({
  type: LOGOUT
});
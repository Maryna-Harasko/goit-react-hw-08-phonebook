const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

export const authSelector = {
  getIsLoggedIn,
  getUserName,
}
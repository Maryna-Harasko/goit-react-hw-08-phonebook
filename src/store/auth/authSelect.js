const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const isRefreshing = state => state.auth.isFetchingCurrent;

export const authSelector = {
  getIsLoggedIn,
  getUserName,
  isRefreshing,
}
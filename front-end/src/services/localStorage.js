export const saveUserInLocalStorage = (user) => {
  const localStorageUser = JSON.stringify(user);
  localStorage.setItem('user', localStorageUser);
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user[0].role) return user[0].role;
  return 'nothing here';
};

export const getUserToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user[0].token) return user[0].token;
  return '';
};

export const getUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.name) return user.name;
  return 'nothing here';
};

export const clearUserInLocalStorage = () => {
  JSON.parse(localStorage.clear('user'));
  return 'everything clean';
};

export const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email) return user.email;
  return '';
};

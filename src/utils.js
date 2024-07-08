import { USERS } from './whiteList.js';

export const checkOutPermission = (userId) => {
  const usersId = USERS.map((user) => user.id);

  return usersId.includes(userId);
};

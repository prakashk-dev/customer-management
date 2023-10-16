import { User } from "./App.types";

export const groupUsersByRole = (users: User[]) => {
  const userRoleToUsers: Record<string, User[]> = {};
  users?.forEach((user: User) => {
    if (userRoleToUsers[user.role]) {
      userRoleToUsers[user.role].push(user);
    } else {
      userRoleToUsers[user.role] = [user];
    }
  });
  return userRoleToUsers;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getInitial = (name: string) => {
  return name.charAt(0).toUpperCase();
};

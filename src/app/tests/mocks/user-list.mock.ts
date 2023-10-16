import { ListZellerCustomersResponse, User } from "../../utils/App.types";

export const userListMock: User[] = [
  {
    email: "prakashk@outlook.com.au",
    id: "1",
    name: "Prakash Kandel",
    role: "ADMIN",
  },
  {
    email: "prakashk+1@outlook.com.au",
    id: "2",
    name: "Prakash Kandel 1",
    role: "ADMIN",
  },
  {
    email: "prakashk+3@outlook.com.au",
    id: "3",
    name: "Prakash Kandel 3",
    role: "MANAGER",
  },
];

export const userListResponseMock: ListZellerCustomersResponse = {
  listZellerCustomers: {
    items: userListMock,
  },
};

export interface User {
  email: string;
  id: string;
  name: string;
  role: string;
  __typename?: string;
}

export interface ListZellerCustomersResponse {
  listZellerCustomers: {
    items: User[];
  };
}

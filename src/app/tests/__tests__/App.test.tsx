import { InMemoryCache } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { act, render, screen } from "@testing-library/react";
import App from "../../App";
import { LIST_ZELLER_CUSTOMERS } from "../../queries";
import { userListResponseMock } from "../mocks/user-list.mock";

const cache = new InMemoryCache();
const userListMock = {
  request: {
    query: LIST_ZELLER_CUSTOMERS,
  },
  result: { data: userListResponseMock },
};
const errorMock = {
  request: {
    query: LIST_ZELLER_CUSTOMERS,
  },
  error: new Error("Something went wrong"),
};

test("should render list of roles", async () => {
  render(
    <MockedProvider mocks={[userListMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByTestId("loadingState")).toBeInTheDocument();
  expect(await screen.findByTestId("role-ADMIN")).toBeInTheDocument();
  expect(await screen.findByTestId("role-MANAGER")).toBeInTheDocument();
  expect(await screen.findByTestId("role-ADMIN")).toHaveTextContent("ADMIN");
  expect(await screen.findByTestId("role-MANAGER")).toHaveTextContent(
    "MANAGER"
  );
});

test("should render error state", async () => {
  render(
    <MockedProvider addTypename={true} mocks={[errorMock]} cache={cache}>
      <App />
    </MockedProvider>
  );

  expect(await screen.findByTestId("errorState")).toHaveTextContent(
    "Something went wrong"
  );
});

test("should render loading state", async () => {
  render(
    <MockedProvider addTypename={true} mocks={[]}>
      <App />
    </MockedProvider>
  );

  expect(await screen.findByTestId("loadingState")).toBeInTheDocument();
});

test("should update user list when role is selected", async () => {
  render(
    <MockedProvider mocks={[userListMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByTestId("loadingState")).toBeInTheDocument();
  expect(await screen.findByTestId("role-ADMIN")).toBeInTheDocument();
  await act(async () => {
    await screen.getByTestId("role-ADMIN").click();
  });

  expect(await screen.findByText("Prakash Kandel")).toBeInTheDocument();
  expect(await screen.findByText("Prakash Kandel 1")).toBeInTheDocument();
});

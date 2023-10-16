import {
  capitalizeFirstLetter,
  getInitial,
  groupUsersByRole,
} from "../../../utils/App.utils";
import { userListMock } from "../../mocks/user-list.mock";

test("should group users by role", () => {
  const mockUsers = userListMock;

  const expectedResult = {
    ADMIN: [
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
    ],
    MANAGER: [
      {
        email: "prakashk+3@outlook.com.au",
        id: "3",
        name: "Prakash Kandel 3",
        role: "MANAGER",
      },
    ],
  };
  const result = groupUsersByRole(mockUsers);
  expect(result).toEqual(expectedResult);
});

test("should capitalise first letter", () => {
  const expectedResult = "Prakash";
  const result = capitalizeFirstLetter("prakash");
  expect(result).toEqual(expectedResult);
});

test("should get initial", () => {
  const expectedResult = "P";
  const result = getInitial("prakash");
  expect(result).toEqual(expectedResult);
});

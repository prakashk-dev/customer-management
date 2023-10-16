import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { User } from "../utils/App.types";
import { capitalizeFirstLetter, getInitial } from "../utils/App.utils";

type UserListProps = {
  selectedRole: string;
  users: User[];
};

function UserList({ selectedRole, users }: UserListProps) {
  return (
    <>
      <h1 data-testid="userList-title">
        {capitalizeFirstLetter(selectedRole)} Users
      </h1>
      <List>
        {users?.map((user: User) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar data-testid="userList-avatar" variant="rounded">
                {getInitial(user.name)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              data-testid="userList-userInfo"
              primary={user.name}
              secondary={capitalizeFirstLetter(user.role)}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default UserList;

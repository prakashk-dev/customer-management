import { useQuery } from "@apollo/client";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useMemo, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { LIST_ZELLER_CUSTOMERS } from "./queries";
import { ListZellerCustomersResponse } from "./utils/App.types";
import { groupUsersByRole } from "./utils/App.utils";

function App() {
  const { loading, error, data } = useQuery<ListZellerCustomersResponse>(
    LIST_ZELLER_CUSTOMERS
  );
  const [selectedRole, setSelectedRole] = useState<string>("");

  const userRoleToUsers = useMemo(() => {
    if (!data) return {};
    return groupUsersByRole(data.listZellerCustomers.items);
  }, [data]);

  const userRoles = useMemo(
    () => Object.keys(userRoleToUsers),
    [userRoleToUsers]
  );

  const selectedUsers = useMemo(
    () => userRoleToUsers[selectedRole],
    [userRoleToUsers, selectedRole]
  );

  if (loading) return <div data-testid="loadingState">Loading...</div>;
  if (error) return <div data-testid="errorState">{error.message}</div>;
  return (
    <div className="Container" data-testid="successState">
      <h1>User Types</h1>
      <FormControl>
        <RadioGroup>
          {userRoles?.map((role: string) => (
            <FormControlLabel
              data-testid={`role-${role}`}
              key={role}
              value={role}
              control={<Radio onChange={() => setSelectedRole(role)} />}
              label={role}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {selectedRole && (
        <UserList selectedRole={selectedRole} users={selectedUsers}></UserList>
      )}
    </div>
  );
}

export default App;

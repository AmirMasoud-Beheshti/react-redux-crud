import { Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/Users";
const UsersList = (): JSX.Element => {
  const userList = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();
  const renderedUser = userList.map((user) => {
    return (
      <Paper
        style={{ margin: "16px", padding: "16px" }}
        key={user.id}
        elevation={3}
      >
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.id}</p>
        <button
          onClick={() => {
            dispatch(removeUser({ id: user.id }));
          }}
        >
          Delete user
        </button>
      </Paper>
    );
  });
  return <div style={{ width: "250px" }}>{renderedUser}</div>;
};

export default UsersList;

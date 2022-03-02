import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/Users";
const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.users.value);

  const handleAddClick = useCallback(() => {
    dispatch(
      addUser({ id: userList[userList.length - 1].id + 1, name, username })
    );
    setName("");
    setUsername("");
  }, [username, name]);
  return (
    <div>
      <input
        type="text"
        name=""
        placeholder="Name ..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name=""
        placeholder="Username ..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleAddClick}>Add User</button>
    </div>
  );
};

export default AddUser;

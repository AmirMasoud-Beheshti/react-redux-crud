import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AddUser from "../components/Form/AddUser";
import UsersList from "../components/View/UsersList";
import usersReducer from "../features/Users";
const store = configureStore({
  reducer: {
    users:usersReducer,
  },
});
const IndexPage = () => (
  <Provider store={store}>
    <AddUser />
    <UsersList/>
  </Provider>
);

export default IndexPage;

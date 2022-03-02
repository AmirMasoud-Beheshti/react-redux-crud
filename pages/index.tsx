import Link from "next/link";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {},
});
const IndexPage = () => (
  <Provider store={store}>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
  </Provider>
);

export default IndexPage;

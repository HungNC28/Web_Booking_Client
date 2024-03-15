import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filterSearch";

const store = configureStore({
  reducer: { filter: filterReducer },
});

export default store;

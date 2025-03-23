import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import taskSliceReducer from "./features/taskSlice";
// import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    task: taskSliceReducer,
  },
  //   middleware: [reduxThunk],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // 添加 thunk 中间件
});

export default store;

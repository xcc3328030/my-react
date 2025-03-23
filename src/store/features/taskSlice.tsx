import { createSlice } from "@reduxjs/toolkit";
import { requestDemo } from "@/api/demo";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    supNum: 10,
    oppNum: 51,
  },
  reducers: {
    getSupNum(state, action) {
      state.supNum = action.payload;
    },
    getOppNum(state, action) {
      state.oppNum = action.payload;
    },
    // addSupNum(state, { payload }) {
    addSupNum(state) {
      state.supNum += 1;
    },
    // addOppNum(state, { payload }) {
    addOppNum(state) {
      state.oppNum += 1;
    },
  },
});

export const { addSupNum, addOppNum, getSupNum } = taskSlice.actions;

export const getAllTaskAsync = () => {
  return async (dispatch) => {
    let num = 1;
    try {
      //请求
      const result = await requestDemo();
      num = result.data.num;
    } catch (error) {
      console.log(error);
    }
    dispatch(getSupNum(num));
  };
};

export default taskSlice.reducer;

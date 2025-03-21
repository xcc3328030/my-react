import { createSlice } from '@reduxjs/toolkit';


const taskSlice = createSlice({
    name: 'task',
    initialState: {
        supNum: 10,
        oppNum: 5,
    },
    reducers: {
        getSupNum(state, action) {
            state.supNum = action.payload
        },
        getOppNum(state, action) {
            state.oppNum = action.payload
        },
        addSupNum(state, { payload }) {
            state.supNum =  payload++
        },
        addOppNum(state, { payload }) {
            state.oppNum =  payload++
        },
    }
})

export const { getSupNum } = taskSlice.actions

export const getAllTaskAsync = () => {
    return async dispatch => {
        let list = '1';
        try {
           //请求
           list = '2'
        } catch (error) {
            console.log(error)
        }
        dispatch(getSupNum(list))
    }
}

export default taskSlice.reducer
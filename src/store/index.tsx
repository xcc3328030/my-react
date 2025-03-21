import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
// import reduxThunk from 'redux-thunk';
import taskSliceReducer from './features/taskSlice'

const store = configureStore({
    reducer: {
        task: taskSliceReducer
    },
     // middleware: [reduxThunk, reduxLogger]
})

export default store;
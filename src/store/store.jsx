import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../store/reducers/movieSlice"
import tvReducer from "../store/reducers/tvSlice"
import peopleReducer from "../store/reducers/peopleSlice"
export default configureStore({
  reducer: {
    movie:movieReducer,
    tv:tvReducer,
    people:peopleReducer
  }
})
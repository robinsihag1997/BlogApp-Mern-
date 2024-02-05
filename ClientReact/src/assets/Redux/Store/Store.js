import mainReducer from "../Reducer/Reducer";

const store = configureStore({
  reducer: mainReducer,
  middleware: [],
  devTools: false,
});

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const reducers = combineReducers({
  user: userSlice.reducer,
});
const persistConfig = {
  key: "authType",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
  whitelist: ["user"], // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persistedReducer,
    // user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});
const persistor = persistStore(store);

export { store, persistor };

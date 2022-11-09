import { configureStore, combineReducers } from '@reduxjs/toolkit';
import localforage from 'localforage';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

import adminReducer from './admin/adminSlice';
import cartReducer from './cart/cartSlice';
import retailerReducer from './retailer/retailerSlice';
import userReducer from './user/userSlice';

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  admin: adminReducer,
  retailer: retailerReducer,
});

const config = {
  blacklist: ['persist/PERSIST', 'persist/REHYDRATE']
};

const isServer = typeof window === 'undefined';

// eslint-disable-next-line import/no-mutable-exports
let store: any;

if (isServer) {
  store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  });
} else {
  const persistConfig = {
    key: 'drewmart',
    version: 1,
    storage: localforage,
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(createStateSyncMiddleware(config)).concat(logger),
  });
  initMessageListener(store);
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export Store
export { store };

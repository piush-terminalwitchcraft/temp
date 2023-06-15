import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './documentSlice';

export const store = configureStore({
    reducer: {
        document: documentReducer,
        // user: userReducer, 
        // auth: authReducer,
        // ui: uiReducer,
        // ui: uiSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
})
export type RootState = ReturnType<typeof store.getState>;


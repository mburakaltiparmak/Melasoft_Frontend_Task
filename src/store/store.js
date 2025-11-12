import authReducer from './reducers/authReducer';
import invoiceReducer from './reducers/invoiceReducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';


export const store = configureStore({
  reducer : {
    auth: authReducer,
    invoices: invoiceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)  
  });
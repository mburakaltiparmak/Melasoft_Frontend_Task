import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import invoicesData from '../mocks/invoices.json';

export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(invoicesData);
      }, 500);
    });
  }
);

const initialState = {
  invoices: [],
  selectedInvoice: null,
  loading: false,
  error: null
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setSelectedInvoice: (state, action) => {
      state.selectedInvoice = action.payload;
    },
    clearSelectedInvoice: (state) => {
      state.selectedInvoice = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setSelectedInvoice, clearSelectedInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;

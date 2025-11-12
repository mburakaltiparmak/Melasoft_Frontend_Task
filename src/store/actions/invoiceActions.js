import { invoicesData } from "../../mocks/invoices";
export const FETCH_INVOICES_REQUEST = 'FETCH_INVOICES_REQUEST';
export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';
export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE';
export const SET_SELECTED_INVOICE = 'SET_SELECTED_INVOICE';
export const CLEAR_SELECTED_INVOICE = 'CLEAR_SELECTED_INVOICE';

export const setSelectedInvoice = (invoice) => ({
  type: SET_SELECTED_INVOICE,
  payload: invoice
});

export const clearSelectedInvoice = () => ({
  type: CLEAR_SELECTED_INVOICE
});

export const fetchInvoices = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_INVOICES_REQUEST });
    try {
      // simulate an API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(invoicesData);
        }, 500);
      });
      dispatch({ type: FETCH_INVOICES_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: FETCH_INVOICES_FAILURE, payload: error.message });
    }
  };
};
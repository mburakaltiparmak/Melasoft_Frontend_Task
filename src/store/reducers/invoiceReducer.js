import {
  FETCH_INVOICES_REQUEST,
  FETCH_INVOICES_SUCCESS,
  FETCH_INVOICES_FAILURE,
  SET_SELECTED_INVOICE,
  CLEAR_SELECTED_INVOICE
} from '../actions/invoiceActions';

const initialState = {
  invoices: [],
  selectedInvoice: null,
  loading: false,
  error: null
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVOICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: action.payload
      };
    case FETCH_INVOICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_SELECTED_INVOICE:
      return {
        ...state,
        selectedInvoice: action.payload
      };
    case CLEAR_SELECTED_INVOICE:
      return {
        ...state,
        selectedInvoice: null
      };
    default:
      return state;
  }
};

export default invoiceReducer;
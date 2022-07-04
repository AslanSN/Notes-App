import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/reducers/itemSlice';
import modalReducer from '../features/reducers/modalSlice';
import undoable from 'redux-undo';
/**
 * ! STORE - Configuration
 * * AslanSN - 22-07-01
 * ? Contents all the undoable and normal reducers
 */
export const store = configureStore({
  reducer: {
    items: undoable(itemReducer),
    modal: modalReducer,
  },
});

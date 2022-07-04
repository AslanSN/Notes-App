import { createSlice } from "@reduxjs/toolkit";
/**
 * ! REDUCERS - Modal Slice
 * * AslanSN - 22-07-02
 */
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    /**
     * ! Toggler
     * * AslanSN - 22-07-02
     */
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleIsOpen } = modalSlice.actions;

export default modalSlice.reducer;

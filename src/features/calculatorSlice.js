import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipOptions: [
    { id: 1, tip: 5, isActive: false },
    { id: 2, tip: 10, isActive: false },
    { id: 3, tip: 15, isActive: false },
    { id: 4, tip: 25, isActive: false },
    { id: 5, tip: 50, isActive: false },
  ],
  bill: "",

  numOfPeople: "",
  isLoading: true,
  tipAmountPerson: 0,
  totalAmount: 0,
  isActive: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    billInputChange: (state, action) => {
      //   if (state.bill === "0") {
      //     state.bill === "0";
      //   }
      state.bill = action.payload;
    },
    numOfPeopleInputChange: (state, action) => {
      //   let numOfPeopleState = Number(state.numOfPeople);
      //   console.log(typeof numOfPeopleState);
      //   if (state.numOfPeople === "0") {
      //     state.numOfPeople === "0";
      //   }
      state.numOfPeople = action.payload;
    },
    calculateTip: (state, action) => {
      const selectedTip = state.tipOptions.find((item) => {
        // console.log(item, action.payload.id);
        // console.log(action.payload);
        return item.tip === action.payload;
      });
    },
  },
});

export const { billInputChange, numOfPeopleInputChange, calculateTip } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;

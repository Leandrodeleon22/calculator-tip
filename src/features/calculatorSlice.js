import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipOptions: [
    { id: 1, tip: 5 },
    { id: 2, tip: 10 },
    { id: 3, tip: 15 },
    { id: 4, tip: 25 },
    { id: 5, tip: 50 },
  ],
  bill: "",

  tipPercentage: "",
  numOfPeople: "",
  isLoading: true,
  tipAmountPerson: 0,
  totalAmount: 0,
  isActive: true,
  customizeTip: "",
  activeButtonId: null,
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

    customizeTipInputChange: (state, action) => {
      state.tipPercentage = action.payload;
    },

    calculateTip: (state, action) => {
      state.tipOptions.find((item) => {
        // console.log(item, action.payload.id);
        // console.log(action.payload);
        return item.tip === action.payload;
      });

      state.tipPercentage = action.payload;
    },
    calculateTotal: (state, action) => {
      let percentage = state.tipPercentage / 100;
      let tip = percentage * +state.bill;
      state.totalAmount =
        state.numOfPeople > 0 ? (+state.bill + tip) / state.numOfPeople : 0;
      state.tipAmountPerson =
        state.numOfPeople > 0 ? tip / state.numOfPeople : 0;
    },
    reset: (state) => {
      state.bill = "";
      state.tipPercentage = "";
      state.numOfPeople = "";
      state.tipAmountPerson = 0;
      state.totalAmount = 0;
    },
    setActiveButtonId: (state, action) => {
      state.activeButtonId = action.payload;
    },
  },
});

export const {
  billInputChange,
  numOfPeopleInputChange,
  calculateTip,
  customizeTipInputChange,
  calculateTotal,
  reset,
  setActiveButtonId,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;

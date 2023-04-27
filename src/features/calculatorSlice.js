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

    calculateTip: (state, action) => {
      // state.tipOptions.find((item) => {
      //   // console.log(item, action.payload.id);
      //   // console.log(action.payload);
      //   return item.tip === action.payload;
      // });

      state.tipPercentage = action.payload;
      state.customizeTip = "";
    },
    calculateTotal: (state, action) => {
      let percentage = state.tipPercentage / 100;
      let tip = percentage * +state.bill;

      let customizeTip2 = (+state.customizeTip / 100) * state.bill;

      let customizeTipPerson = tip + customizeTip2;

      console.log(state.numOfPeople, customizeTipPerson / state.numOfPeople);
      state.totalAmount =
        state.numOfPeople > 0
          ? (+state.bill + tip + customizeTip2) / state.numOfPeople
          : 0;
      state.tipAmountPerson =
        state.numOfPeople > 0 ? customizeTipPerson / state.numOfPeople : 0;
    },

    calculateCustomizeTip: (state, action) => {
      state.customizeTip = action.payload;
    },

    // customizeTipInputChange: (state, action) => {
    //   state.customizeTip = +action.payload;
    //   let percentage = state.customizeTip / 100;
    //   let tip = percentage * +state.bill;

    //   state.totalAmount =
    //     state.numOfPeople > 0 ? (+state.bill + tip) / state.numOfPeople : 0;
    //   state.tipAmountPerson =
    //     state.numOfPeople > 0 ? tip / state.numOfPeople : 0;

    //   console.log(state.totalAmount, state.tipAmountPerson);
    // },
    reset: (state) => {
      state.bill = "";
      state.tipPercentage = "";
      state.numOfPeople = "";
      state.tipAmountPerson = 0;
      state.totalAmount = 0;
      state.customizeTip = "";
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
  calculateCustomizeTip,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;

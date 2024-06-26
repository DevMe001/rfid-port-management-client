import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

export type NumberOfPassenger = {
	totalCount: number;
	senior: number;
	student: number;
	regular: number;
	child: number;
	infant: number;
	pwd:number;
	passengerClass?: PassengerClass;
	
};

export type PassengerClass = 'economic' | 'tourist' | string;



const initialState: NumberOfPassenger = {
	totalCount: 0,
	senior: 0,
	student: 0,
	regular: 0,
	child: 0,
	infant: 0,
	pwd:0,
};


const passengerSlice = createSlice({
	name: 'passenger',
	initialState,
	reducers: {
		storePassengerNumber: (_state, action: PayloadAction<NumberOfPassenger>) => {
			return action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(PURGE, () => {
			return initialState; // Reset the slice state to its initial state
		});
	},
});


export const { storePassengerNumber } = passengerSlice.actions;

export default passengerSlice.reducer;
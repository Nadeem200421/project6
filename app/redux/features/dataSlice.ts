import { createSlice } from "@reduxjs/toolkit";
import { events } from "../../data/events";
import { shops } from "../../data/shops";
import { items } from "../../data/marketplace";

export interface DataState {
  events: typeof events;
  shops: typeof shops;
  items: typeof items;
}

const initialState: DataState = {
  events,
  shops,
  items,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;

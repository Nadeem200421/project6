import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ItemType } from "../../data/marketplace";
import type { ShopType } from "../../data/shops";

interface FavouritesState {
  items: ItemType[];
  shops: ShopType[];
}

const initialState: FavouritesState = {
  items: [],
  shops: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (
      state,
      action: PayloadAction<ItemType | ShopType>
    ) => {
      const exists =
        state.items.some((i) => i.id === action.payload.id) ||
        state.shops.some((s) => s.id === action.payload.id);

      if (!exists) {
        if ("price" in action.payload) {
          state.items.push(action.payload as ItemType);
        } else {
          state.shops.push(action.payload as ShopType);
        }
      }
    },

    removeFavourite: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.shops = state.shops.filter(
        (shop) => shop.id !== action.payload
      );
    },
  },
});

export const { addFavourite, removeFavourite } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;

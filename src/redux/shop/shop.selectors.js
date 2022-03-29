import { createSelector } from "reselect";

const selectShop = state => state.shop


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectioUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectioUrlParam]
)

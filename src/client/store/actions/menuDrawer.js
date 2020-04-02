import { TOGGLE_MENU_DRAWER, EXPAND_MENU, SET_SELECTED_MENU } from '../actionTypes';
export const toggleMenuDrawer = () => ({
    type: TOGGLE_MENU_DRAWER,
})

export const expandMenu = (index) => ({
    type: EXPAND_MENU,
    index: index
})

export const setSelectedMenu = (subItemIndex, index) => ({
    type: SET_SELECTED_MENU,
    payload: {
        subItemIndex: subItemIndex,
        index: index
    }
})
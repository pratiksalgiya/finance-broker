import { TOGGLE_MENU_DRAWER, EXPAND_MENU, SET_SELECTED_MENU } from '../actionTypes';
const initialState = {
  isDrawerVisible: false,
  selectedMenu: { subItemIndex: null, index: null },
  sideBarItems: [
    {
      title: 'Group Master',
      subItem: [{ title: 'Add Party Registration' }, { title: 'Edit Party' }],
      isExpand: false
    },
    {
      title: 'Lewal Dewal Master',
      subItem: [{ title: 'New Lewal Dewal Entry' }, { title: 'Edit' }],
      isExpand: false
    },
    {
      title: 'Account Master',
      subItem: [{ title: 'Month Master' }, { title: 'Year Master' }],
      isExpand: false
    }]
}
const menuDrawer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_DRAWER:

      return {
        ...state,
        isDrawerVisible: !state.isDrawerVisible,
        sideBarItems: state.isDrawerVisible === false ? initialState.sideBarItems : state.sideBarItems
      }
    case EXPAND_MENU:
      const sideBarItems = JSON.parse(JSON.stringify(state.sideBarItems));
      sideBarItems[action.index].isExpand = !sideBarItems[action.index].isExpand
      return {
        ...state,
        sideBarItems: sideBarItems
      }
    case SET_SELECTED_MENU:
      console.log(action);
      return {
        ...state,
        selectedMenu: action.payload
      }
    default:
      return state
  }
}

export default menuDrawer
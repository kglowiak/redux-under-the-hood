export const ADD_DATA = 'ADD_DATA';
export const addData = (data) => ({ type: ADD_DATA, payload: data });

export const REMOVE_LAST_ITEM = 'REMOVE_LAST_ITEM';
export const removeLastItem = () => ({ type: REMOVE_LAST_ITEM });

export const REMOVE_BY_NAME = 'REMOVE_BY_NAME';
export const removeByName = (name) => ({ type: ADD_DATA, payload: name });

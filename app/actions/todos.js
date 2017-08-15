export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TEXTCHANGE = 'TEXTCHANGE';
export const AUTHORCHANGE = 'AUTHORCHANGE';
export const CLEARINPUTS = 'CLEARINPUTS';

export const addTodo = (item) =>({
  type: ADD,
  payload: item
})
export const removeTodo = index =>({
    type: REMOVE,
    payload: index,
})

export const textChange = text =>({
  type: TEXTCHANGE,
  payload: text
})
export const authorChange = author =>({
    type: AUTHORCHANGE,
    payload: author,
})

export const clearInputs = () =>({
  type: CLEARINPUTS,
})

import uuid from "uuid/v4";
import {
  CREATE_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  DELETE_ALL_COMPLETE_TODO
} from "../actions/todos";

const nameInitialState = [];
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case DELETE_ALL_COMPLETE_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

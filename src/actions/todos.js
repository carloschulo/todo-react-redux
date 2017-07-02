/*
  Create TODO
  List all TODO
  Click for Completed TODO
  Delete a TODO
  Delete all Completed TODO

*/

export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text
  }
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  }
}
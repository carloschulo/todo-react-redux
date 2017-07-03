/*
  Create TODO --
  List all TODO
  Click for Completed TODO ---
  Delete a TODO ---
  Delete all Completed TODO

*/

export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_COMPLETE_TODO = 'DELETE_ALL_COMPLETE_TODO';
export const SHOW_COMPLETED_TODO = 'SHOW_COMPLETED_TODO';

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

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function deleteAllCompleteTodo() {
  return {
    type: DELETE_ALL_COMPLETE_TODO,
  }
}

export function showAllCompleteTodo() {
  return {
    type: SHOW_COMPLETED_TODO,
  }
}
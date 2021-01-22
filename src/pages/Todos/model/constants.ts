/**
 * Description: Todos module model constants
 */

export const TODOS = {
  NAMESPACE: 'todos',

  EFFECTS: {
    FETCH_TODOS: 'fetchTodos',
  },

  ACTIONS: {
    SAVE_TODOS: 'saveTodos',
    CLEAR_TODOS: 'clearTodos',
    PUT_ERRORS: 'putErrors',
    CLEAR_ERRORS: 'clearErrors',
  },

  getNamespace(action: string) {
    return `todos/${action}`;
  },
} as const;

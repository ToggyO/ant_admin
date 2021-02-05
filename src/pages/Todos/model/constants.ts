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
    PUT_VALIDATION_ERRORS: 'putValidationErrors',
    CLEAR_VALIDATION_ERRORS: 'clearValidationErrors',
  },

  getNamespace(action: string) {
    return `todos/${action}`;
  },
} as const;

export const toggleTodo = id => {
  console.log(id);
  return {
    type: "TOGGLE_TODO",
    id
  };
};

let nextTodoId = 4;

export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

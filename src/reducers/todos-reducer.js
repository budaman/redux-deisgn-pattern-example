const initialTodos = [
  {
    id: "1",
    text: "lorem ipsum",
    completed: false
  },
  {
    id: "2",
    text: "todotodotodotodo",
    completed: false
  },
  {
    id: "3",
    text: "yes, this one is done already",
    completed: true
  }
];

const todos = (state = [...initialTodos], action) => {
  console.log("veikia reduceris");
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );
    default:
      return state;
  }
};

export default todos;

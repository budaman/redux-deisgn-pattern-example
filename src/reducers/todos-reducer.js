//default reducers

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

//all of the reducers has state, and action, state is basicaly state or data
//and action is madden for changing that data or state

const todos = (state = [...initialTodos], action) => {
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

export default todos;  //exporting only state

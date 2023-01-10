export const todoItemLogic = {
  markCompleteTodo: (key, state, stateFunc) => {
    const tasks = state.map(item => {
      if(item.task === key) {
        item.completed = !item.completed;
      }
      return item;
    });
    stateFunc(tasks);
  },
  
  deleteTask: (key, state, stateFunc) => {
    const tasks = state.splice(state.findIndex(item => item.task === key), 1);
    stateFunc(tasks);
  }
}
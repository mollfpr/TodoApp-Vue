export default {
  addTodo({ commit }, title) {
    commit("addTodo", {
      title,
      done: false
    });
  },
  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
  editTodo({ commit }, todo) {
    commit('editTodo', todo);
  }
};

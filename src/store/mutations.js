export const mutations = {
    addTodo (state, todo) {
        // console.log(todo);
        state.todos.push(todo)
    },
    removeTodo (state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },
    editTodo (state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1, {
            title: todo.title,
            done: !todo.done
        });
    },
}
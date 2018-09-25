<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="box-container">
        <h2>Vue Todo</h2>
        <img alt="Vue logo" src="./assets/logo.png">
        <Input :onSubmit="onSubmit"/>

        <div class="row">
          <Todo v-for="(todo, index) in todos" :todo="todo" :onDelete="onDelete" :onCheck="onCheck" :done="todo.done"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import Input from './components/Input';
import Todo from './components/Todo';

export default {
  name: 'app',
  components: {
    Input,
    Todo
  },
  computed: mapState([
    'todos'
  ]),
  methods: {
    ...mapActions([
      'addTodo',
      'removeTodo',
      'editTodo'
    ]),
    onSubmit(todo) {
      this.addTodo(todo)
    },

    onDelete(todo) {
      this.removeTodo(todo);
    },

    onCheck(todo) {
      this.editTodo(todo);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  img {
    width: 150px;
  }

  .box-container {
    width: 400px;
    min-height: 100px;
  }
}

.row {
  margin: 5px;
}
</style>

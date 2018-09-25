<template>
    <div class="col-md-12 d-flex justify-content-between align-items-center todo-container">
        <!-- <input type="checkbox" name="" id="" :checked="todo.done ? 'checked' : null"> -->
        <span :class="todo.done ? `todo todo-complete` : `todo`" @click="onCheck(todo)">{{ todo.title }}</span>
        <button :class="`btn btn-warning`" @click="onDelete(todo)">-</button>
    </div>
</template>

<script>
    import Button from './Button'

    export default {
        components: {
            Button
        },
        props: {
            todo: Object,
            done: Boolean,
            onDelete: Function,
            onCheck: Function
        }
    }
</script>


<style lang="scss" scoped>
.todo-container {
  margin: 5px 0;
  height: 50px;
  background-color: #4fb87d;
  -webkit-box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.76);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.76);

  .todo {
    cursor: pointer;
  }

  .todo-complete {
    text-decoration: line-through;
  }
}
</style>

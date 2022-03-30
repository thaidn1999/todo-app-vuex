<template>
  <div id="app" class="container">
    <todo-header />
    <todo-input />
    <todo-list />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: { TodoHeader, TodoInput, TodoList },
};
</script>

<style>
#app {
  margin-top: 30px;
  background-color: #f1f2f6;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
}
.container {
  max-width: 800px !important;
}
input {
  border: 2px solid;
  border-radius: 5px;
  border-color: #86b7fe !important;
}

input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(13 110 253 / 25%);
}
</style>

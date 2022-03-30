<template>
  <div class="container">
    <div
      :class="
        todo.completed ? 'row todo-item active my-2' : 'row todo-item  my-2'
      "
    >
      <div v-if="!editing" class="col-lg-9 overflow-hidden px-3 py-2 inp-title">
        {{ todo.title }}
      </div>
      <div v-else class="row">
        <input
          type="text"
          :value="todoText"
          @change="onChangeText"
          class="col-lg-9"
        />
      </div>
      <div class="col-lg-3 d-flex justify-content-between align-item-center">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="MARK_COMPLETED(todo.id)"
          class="check-todo mt-3"
        />
        <button @click="updateTodo(todo)" class="btn btn-primary my-2">
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger my-2">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      todoText: "",
      completed: false,
      editing: false,
    };
  },
  computed: mapGetters(["todos"]),
  methods: {
    ...mapMutations(["MARK_COMPLETED"]),
    ...mapActions(["deleteTodo", "editTodo", "getTodo"]),
    onChangeText(e) {
      this.todoText = e.target.value;
    },
    updateTodo(todo) {
      this.editing = !this.editing;
      if (this.editing) {
        this.todoText = todo.title;
        this.editTodo(todo);
      } else {
        todo.title = this.todoText;
      }
    },
  },
};
</script>

<style>
.todo-item {
  font-size: 20px;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
}

.inp-title {
  text-overflow: ellipsis;
  white-space: nowrap;
}

.check-todo {
  width: 24px;
  height: 24px;
}

.active {
  background-color: rgb(169, 250, 169);
  color: #2d2d2d;
}
</style>

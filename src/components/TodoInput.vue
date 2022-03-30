<template>
  <div class="pb-3 todo-header container">
    <div class="row">
      <input
        type="text"
        :value="todoText"
        @change="onChangeText"
        class="col-lg-10"
        placeholder="Enter your todo..."
      />
      <input
        type="button"
        @click="addNewTodo"
        class="col-lg-2 btn btn-primary"
        value="Add"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onChangeText(e) {
      this.todoText = e.target.value;
    },
    addNewTodo() {
      if (this.todoText.trim().length <= 0) {
        alert("Please enter your todo...");
      } else {
        this.addTodo({
          id: v1(),
          title: this.todoText.trim(),
          completed: false,
        });
        this.todoText = "";
      }
    },
  },
};
</script>

<style></style>

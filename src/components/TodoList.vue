<template>
  <div class="todo-list py-3">
    <div v-for="(todo, index) in todos" :key="index">
      <todo-item :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { TodoItem },
  computed: {
    ...mapGetters(["todos"]),
  },
  async created() {
    await this.getTodo();
  },
  methods: {
    ...mapActions(["getTodo"]),
  },
};
</script>

<style></style>

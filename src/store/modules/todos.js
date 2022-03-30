import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: [],
};

const getters = {
  todos: (state) => state.todos,
};

const mutations = {
  MARK_COMPLETED(state, todoID) {
    state.todos.map((todo) => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  },

  SET_TODO(state, todos) {
    state.todos = todos;
  },

  ADD_TODO(state, newTodo) {
    state.todos.unshift(newTodo);
  },

  DELETE_TODO(state, todoID) {
    state.todos = state.todos.filter((todo) => todo.id !== todoID);
  },

  EDIT_TODO(state, updateTodo) {
    let index = state.todos.findIndex((todo) => todo.id === updateTodo.id);
    if (index !== -1) {
      state.todos[index] = updateTodo;
    }
  },

};

const actions = {
  async getTodo({ commit }) {
    try {
      const response = await axios.get(`${url}?_limit=5`);
      commit("SET_TODO", response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async addTodo({ commit }, newTodo) {
    try {
      await axios.post(`${url}`, newTodo);
      commit("ADD_TODO", newTodo);

    } catch (error) {
      console.log(error);
    }
  },

  async editTodo({ commit }, updateTodo) {
    try {
      await axios.put(`${url}/${updateTodo.id}`)
      commit("EDIT_TODO", updateTodo);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTodo({ commit }, todoID) {
    try {
      await axios.delete(`${url}/${todoID}`);
      commit("DELETE_TODO", todoID);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
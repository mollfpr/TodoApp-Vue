import Vue from "vue";
import Vuex from "vuex";

import { mutations } from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Todo 1',
        done: false
      },
      {
        title: 'Todo 2',
        done: true
      }
    ]
  },
  actions,
  mutations
});

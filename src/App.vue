<template>
  <login-page
    v-if="routeName === 'signin'"
    :signUp="true"
    @changeRoute="changeRoute"
  ></login-page>
  <login-page
    v-if="routeName === 'login'"
    :signUp="false"
    @changeRoute="changeRoute"
  ></login-page>
  <task-page v-if="routeName === 'task'" @changeRoute="changeRoute"></task-page>
  <kanban-page
    v-if="routeName === 'kanban'"
    @changeRoute="changeRoute"
  ></kanban-page>
  <pomodoro-page
    v-if="routeName === 'pomodoro'"
    @changeRoute="changeRoute"
  ></pomodoro-page>
  <aux-page v-if="routeName === 'aux'" @changeRoute="changeRoute"></aux-page>
</template>

<script>
import LoginPage from "./pages/login.vue";
import TaskPage from "./pages/task.vue";
import KanbanPage from "./pages/kanban.vue";
import PomodoroPage from "./pages/pomodoro.vue";
import AuxPage from "./pages/aux.vue";

export default {
  name: "App",
  data() {
    return {
      routeName: "signin",
    };
  },
  methods: {
    changeRoute(v) {
      this.routeName = v;
    },
  },
  components: {
    LoginPage,
    TaskPage,
    KanbanPage,
    PomodoroPage,
    AuxPage,
  },
};
</script>

<style>
#app {
  font-family: "Inter" Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6d6b6b;
}

* {
  box-sizing: border-box;
}

input {
  border: 0px;
  width: 100%;
  height: 70px;
  border-radius: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;

  color: #6d6b6b;
  text-align: left;
  text-indent: 12px;
}

input[type="button"] {
  width: 128px;
  height: 82px;
  background: #91d1ff;
  color: white;
  text-align: center;
  text-indent: 0;
  cursor: pointer;
}

div.route-active {
  background-color: #538fbb !important;
}
</style>

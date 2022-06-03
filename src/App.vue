<template>
  <div class="w-container">
    <login-page
      v-show="routeName === 'signin'"
      :signUp="true"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></login-page>
    <login-page
      v-show="routeName === 'login'"
      :signUp="false"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></login-page>
    <task-page
      v-show="routeName === 'task'"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></task-page>
    <kanban-page
      v-show="routeName === 'kanban'"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></kanban-page>
    <pomodoro-page
      v-show="routeName === 'pomodoro'"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></pomodoro-page>
    <aux-page
      v-show="routeName === 'aux'"
      :ifMobile="ifMobile"
      @changeRoute="changeRoute"
    ></aux-page>
  </div>
</template>

<script>
import LoginPage from "./pages/login.vue";
import TaskPage from "./pages/task.vue";
import KanbanPage from "./pages/kanban.vue";
import PomodoroPage from "./pages/pomodoro.vue";
import AuxPage from "./pages/aux.vue";

// to know which device is using
function _isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return !!flag;
}

export default {
  name: "App",
  data() {
    return {
      routeName: "signin",
      containerWidth: this.ifMobile ? "100%" : "1440px",
    };
  },
  methods: {
    // use this to control routes
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
  setup() {
    const ifMobile = _isMobile();
    console.log(ifMobile);

    return {
      ifMobile,
    };
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

body {
  margin: 0;
}

.w-container {
  /* width: 100px; */
  width: v-bind(containerWidth);
  margin: 0 auto;
  background-color: white;
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

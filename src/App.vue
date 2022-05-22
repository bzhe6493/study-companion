<template>
  <!-- <login-page></login-page> -->
  <task-page></task-page>
</template>

<script>
// import LoginPage from "./pages/login.vue";
import TaskPage from "./pages/task.vue";

export default {
  name: "App",
  components: {
    // LoginPage,
    TaskPage,
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
</style>

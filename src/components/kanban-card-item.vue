<template>
  <div class="container-3">
    <h2>{{ title }}</h2>
    <div class="text2">{{ subject }}</div>

    <footer>
      <div class="clock-wrapper">
        <img class="clock" src="../assets/clock.png" alt="clock" />
      </div>
      <!-- draw dealline  -->
      <div class="text">{{ deadline || "task deadline" }}</div>
    </footer>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    subject: String,
    deadline: String,
  },
});
</script>
<style lang="css" scoped>
.container-3 {
  float: left;
  position: relative;
  width: 100%;
  background-color: white;
  min-height: 166px;
  border-radius: 15px;
  margin-bottom: 30px;
}
.container-3 h2 {
  margin: 0;
  padding: 4px 8px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #6d6b6b;
}
.container-3 footer {
  width: 100%;
  height: 42px;
  position: absolute;
  bottom: 0;
  display: flex;

  border-radius: 0 0 15px 15px;
  background-color: #90d1ff;
}

.container-3 footer .clock-wrapper {
  overflow: hidden;
  margin-left: 8px;
}

.container-3 footer .clock-wrapper .clock {
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin-top: 7px;
}

.container-3 .text2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin-left: 8px;

  color: #6d6b6b;
}

.container-3 footer .text {
  margin-left: 8px;
  line-height: 42px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  color: #e5e5e5;
}
</style>

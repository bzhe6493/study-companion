<template>
  <div class="container-2">
    <div class="title-bar">
      <h2 class="title">Music</h2>
    </div>
    <div class="main-body"></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      cards: [],
    };
  },
  computed: {},
  methods: {},
});
</script>
<style lang="css" scoped>
.container-2 {
  margin-bottom: 20px;
}
.title-bar {
  height: 60px;
  font-size: 28px;
  line-height: 60px;
  text-align: left;
  padding: 0 12px;

  color: white;
  background-color: #2091e3;
  border-radius: 26px 26px 0 0;

  display: flex;
}
.title-bar h2.title {
  margin: 0;
  padding: 0;
  display: inline-block;
  text-indent: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;

  color: #ffffff;
}
.title-bar .pencil-wrapper {
  overflow: hidden;
  margin-left: 12px;
  cursor: pointer;
}
.title-bar .pencil {
  width: 30px;
  height: 40px;
  font-size: 40px;
  margin-top: 10px;
}
.title-bar .add-wrapper {
  overflow: hidden;
  margin-left: 12px;
  cursor: pointer;
}
.title-bar .plus {
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin-top: 14px;
}

.main-body {
  width: 100%;
  min-height: 660px;
  max-height: 860px;
  padding: 25px 15px;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

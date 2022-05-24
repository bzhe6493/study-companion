<template>
  <div class="container">
    <div class="loginbar">
      <div class="study-icon"></div>

      <div class="sign-buttons">
        <div class="sign-button">Sign up</div>
        <div class="sign-button">Log in</div>
      </div>

      <div class="tabs-container">
        <div class="tab-button">Task List</div>
        <div class="tab-button">Kanban Board</div>
        <div class="tab-button">Pomodoro</div>
        <div class="tab-button">Auxiliary</div>
      </div>
    </div>

    <div class="main">
      <h2>Kanban Board</h2>

      <!-- <div class="add-area flex" @click="addTask">
        <img class="plus" src="../assets/plus-mini.png" alt="plus" />
        <span class="new">NEW</span>
      </div> -->
      <!-- @addCard="addCard.bind(null, name)" -->

      <div class="card-container">
        <music-card></music-card>
        <dic-card></dic-card>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import MusicCard from "../components/music-card.vue";
import DicCard from "../components/dic-card.vue";

export default defineComponent({
  name: "auxPage",
  components: {
    MusicCard,
    DicCard,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});
</script>
<style lang="css" scoped>
.container {
  width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* top loginbar */
.loginbar {
  width: 100%;
  height: 80px;
  padding: 0px 8px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  position: relative;
  color: white;
}
.loginbar .study-icon {
  width: 60px;
  height: 60px;
  display: inline-block;
  background-color: aquamarine;
  margin-right: 60px;
}
.loginbar .sign-buttons {
  width: 180px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.loginbar .sign-buttons .sign-button {
  width: 70px;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  text-align: center;
  background-color: rgb(120, 186, 244);
  padding: 2px 4px;
  border-radius: 6px;
  cursor: pointer;
}
.loginbar .tabs-container {
  width: 680px;
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
}
.loginbar .tabs-container .tab-button {
  width: 90px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  background-color: rgb(120, 186, 244);
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
  text-align: center;
}
.loginbar .tabs-container .tab-button:nth-child(2) {
  line-height: 25px;
}

/* main area */
.main {
  width: 100%;
  padding: 0 38px;
  position: relative;
}
.main h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: #538fbb;
  text-align: left;
  margin: 18px 0;
}

.main .card-container {
  display: flex;
  justify-content: space-between;
}
.main .card-container div.container-2 {
  width: 45%;
}
</style>

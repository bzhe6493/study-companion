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
      <h2>Pomodoro</h2>

      <div class="container-wrapper">
        <div class="clock-container">
          <div class="countdown-container">
            <div class="text">countdown</div>
            <div class="time">
              {{ minutes }}
              <div
                style="
                   {
                    font-size: 118px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateY(-56%) translateX(-50%);
                  }
                "
              >
                :
              </div>
              {{ seconds }}
            </div>
          </div>
          <div class="pic-container">
            <img
              class="big-clock"
              src="../assets/big-clock.png"
              alt="big-clock"
            />
          </div>
        </div>

        <div class="setter-container">
          <pomodoro-card> </pomodoro-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import PomodoroCard from "../components/pomodoro-card.vue";

export default defineComponent({
  name: "pomorodoPage",
  components: { PomodoroCard },
  props: {},
  data() {
    return {
      minutes: "00",
      seconds: "00",
    };
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
.main .container-wrapper {
  display: flex;
  justify-content: space-between;
}

.main .container-wrapper .clock-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 50px;
}

.main .container-wrapper .clock-container .countdown-container {
  text-align: center;
}
.main .container-wrapper .clock-container .countdown-container .text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #6d6b6b;
}
.main .container-wrapper .clock-container .countdown-container .time {
  width: 390px;
  height: 172px;
  position: relative;
  background-color: #eeebeb;
  border-radius: 26px;

  font-family: "Exo 2";
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  line-height: 172px;

  color: #3c3a3a;
}

.main .container-wrapper .clock-container .pic-container {
  width: 468px;
  height: 336px;
  margin-top: 50px;
  text-align: center;
}

.main .container-wrapper .clock-container .pic-container .big-clock {
}

.main .container-wrapper .setter-container {
  flex: 1;
}
</style>

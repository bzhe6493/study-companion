<template>
  <div
    :class="{
      'container-2': true,
      ifMobile: ifMobile,
    }"
  >
    <div class="title-bar">
      <h2 class="title">Set time</h2>
    </div>
    <div class="main-body">
      <div class="block work-block">
        <div class="text">work</div>

        <div class="time-container">
          <div class="minutes-setter-wrapper">
            <div class="oper left-oper">
              <div class="plus" @click="changeTime('minutes', '+', 'work')">
                <img
                  class="icon plus-icon"
                  src="../assets/plus.png"
                  alt="plus"
                />
              </div>
              <div class="minus" @click="changeTime('minutes', '-', 'work')">
                <img
                  class="icon minus-icon"
                  src="../assets/minus.png"
                  alt="minus"
                />
              </div>
            </div>
            <div class="number left-number">
              {{ workMinutes }}
            </div>
          </div>

          <div class="middle">
            <img src="../assets/dot3.png" alt="dot" />
          </div>

          <div class="seconds-setter-wrapper">
            <div class="number right-number">
              {{ workSeconds }}
            </div>
            <div class="oper right-oper">
              <div class="plus" @click="changeTime('seconds', '+', 'work')">
                <img
                  class="icon plus-icon"
                  src="../assets/plus.png"
                  alt="plus"
                />
              </div>
              <div class="minus" @click="changeTime('seconds', '-', 'work')">
                <img
                  class="icon minus-icon"
                  src="../assets/minus.png"
                  alt="minus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block break-block">
        <div class="text">break</div>

        <div class="time-container">
          <div class="minutes-setter-wrapper">
            <div class="oper left-oper">
              <div class="plus" @click="changeTime('minutes', '+', 'break')">
                <img
                  class="icon plus-icon"
                  src="../assets/plus.png"
                  alt="plus"
                />
              </div>
              <div class="minus" @click="changeTime('minutes', '-', 'break')">
                <img
                  class="icon minus-icon"
                  src="../assets/minus.png"
                  alt="minus"
                />
              </div>
            </div>
            <div class="number left-number">
              {{ breakMinutes }}
            </div>
          </div>

          <div class="middle">
            <img src="../assets/dot3.png" alt="dot" />
          </div>

          <div class="seconds-setter-wrapper">
            <div class="number right-number">
              {{ breakSeconds }}
            </div>
            <div class="oper right-oper">
              <div class="plus" @click="changeTime('seconds', '+', 'break')">
                <img
                  class="icon plus-icon"
                  src="../assets/plus.png"
                  alt="plus"
                />
              </div>
              <div class="minus" @click="changeTime('seconds', '-', 'break')">
                <img
                  class="icon minus-icon"
                  src="../assets/minus.png"
                  alt="minus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <input type="button" value="start" @click="start" />
        <input type="button" value="stop" @click="stop" />
      </footer>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    index: Number,
    title: {
      type: String,
      required: true,
    },
    ifMobile: Boolean,
  },
  components: {},
  data() {
    return {
      workMinutes: "00",
      workSeconds: "00",
      breakMinutes: "00",
      breakSeconds: "00",
    };
  },
  computed: {},
  methods: {
    changeTime(name, type, block) {
      if (name === "minutes" && block === "work") {
        type === "+" &&
          parseInt(this.workMinutes, 10) < 60 &&
          (this.workMinutes = (
            parseInt(this.workMinutes, 10) +
            1 +
            ""
          ).padStart(2, "0"));
        type === "-" &&
          parseInt(this.workMinutes, 10) > 0 &&
          (this.workMinutes = (
            parseInt(this.workMinutes, 10) -
            1 +
            ""
          ).padStart(2, "0"));
      } else if (name === "minutes" && block === "break") {
        type === "+" &&
          parseInt(this.breakMinutes, 10) < 60 &&
          (this.breakMinutes = (
            parseInt(this.breakMinutes, 10) +
            1 +
            ""
          ).padStart(2, "0"));
        type === "-" &&
          parseInt(this.breakMinutes, 10) > 0 &&
          (this.breakMinutes = (
            parseInt(this.breakMinutes, 10) -
            1 +
            ""
          ).padStart(2, "0"));
      } else if (name === "seconds" && block === "work") {
        type === "+" &&
          parseInt(this.workSeconds, 10) < 60 &&
          (this.workSeconds = (
            parseInt(this.workSeconds, 10) +
            1 +
            ""
          ).padStart(2, "0"));
        type === "-" &&
          parseInt(this.workSeconds, 10) > 0 &&
          (this.workSeconds = (
            parseInt(this.workSeconds, 10) -
            1 +
            ""
          ).padStart(2, "0"));
      } else if (name === "seconds" && block === "break") {
        type === "+" &&
          parseInt(this.breakSeconds, 10) < 60 &&
          (this.breakSeconds = (
            parseInt(this.breakSeconds, 10) +
            1 +
            ""
          ).padStart(2, "0"));
        type === "-" &&
          parseInt(this.breakSeconds, 10) > 0 &&
          (this.breakSeconds = (
            parseInt(this.breakSeconds, 10) -
            1 +
            ""
          ).padStart(2, "0"));
      }
    },
    start() {
      this.$emit("start", this.workMinutes, this.workSeconds);
    },
    stop() {
      this.$emit("stop");
    },
  },
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

.container-2.ifMobile .title-bar {
  height: 40px;
  font-size: 22px;
  line-height: 40px;
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
.container-2.ifMobile .title-bar h2.title {
  height: 40px;
  font-size: 22px;
  line-height: 40px;
}

.main-body {
  width: 100%;
  height: 578px;
  padding: 22px 66px;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;
}
.container-2.ifMobile .main-body {
  height: 330px;
}

.container-2.ifMobile .main-body {
  padding: 10px 14px 22px;
}

.main-body .block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
}
.container-2.ifMobile .main-body .block {
  margin-bottom: 30px;
}

.main-body .block .time-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.main-body .block .text {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: #6d6b6b;
}
.container-2.ifMobile .main-body .block .text {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;

  color: #6d6b6b;
}

.main-body .block .time-container .middle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.container-2.ifMobile .main-body .block .time-container .middle img {
  width: 20px;
}

.minutes-setter-wrapper {
  display: flex;
  align-items: center;
}
.seconds-setter-wrapper {
  display: flex;
  align-items: center;
}

.minutes-setter-wrapper .oper,
.seconds-setter-wrapper .oper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}

.container-2.ifMobile .minutes-setter-wrapper .oper,
.container-2.ifMobile .seconds-setter-wrapper .oper {
  height: 60px;
}
.container-2.ifMobile .minutes-setter-wrapper .oper > div,
.container-2.ifMobile .seconds-setter-wrapper .oper > div {
  display: flex;
}

.left-oper {
  margin-right: 12px;
}
.right-oper {
  margin-left: 12px;
}

.minutes-setter-wrapper .oper .icon,
.seconds-setter-wrapper .oper .icon {
  width: 42px;
  height: 42px;
  cursor: pointer;
}

.container-2.ifMobile .minutes-setter-wrapper .oper .icon,
.container-2.ifMobile .seconds-setter-wrapper .oper .icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.main-body .block .time-container .number {
  width: 150px;
  height: 126px;
  background: #c4c4c4;
  color: #3c3a3a;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  text-align: center;
}
.container-2.ifMobile .main-body .block .time-container .number {
  width: 76px;
  height: 54px;
  font-size: 42px;
  line-height: 54px;
}

.main-body footer {
  display: flex;
  justify-content: space-around;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;

  color: #ffffff;
}

.main-body footer input[type="button"] {
  border-radius: 50px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 82px;

  color: #ffffff;
}

.container-2.ifMobile .main-body footer input[type="button"] {
  width: 88px;
  height: 48px;
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
}
</style>

<template>
  <div
    :class="{
      container: true,
      ifMobile: ifMobile,
    }"
  >
    <div class="loginbar">
      <div class="study-icon">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="75" height="75" rx="11" fill="white" />
          <rect x="51" y="1" width="7" height="57" rx="2.5" fill="#85DEF1" />
          <rect x="17" y="5" width="7" height="50" rx="2.5" fill="#85DEF1" />
          <rect x="24" y="16" width="27" height="4" rx="1" fill="#66BBF9" />
          <path d="M24 17H51V19H24V17Z" fill="#FEF40F" />
          <rect x="24" y="29" width="27" height="4" rx="1" fill="#66BBF9" />
          <rect x="24" y="41" width="27" height="4" rx="1" fill="#66BBF9" />
          <path d="M24 30H51V32H24V30Z" fill="#CFFAD1" />
          <path d="M24 42H51V44H24V42Z" fill="#FFDE88" />
          <path
            d="M8.1 66.1C8.16667 66.6867 8.40667 67.16 8.82 67.52C9.23333 67.88 9.77333 68.06 10.44 68.06C11 68.06 11.4533 67.9667 11.8 67.78C12.16 67.5933 12.42 67.3667 12.58 67.1C12.74 66.8333 12.82 66.5733 12.82 66.32C12.82 65.7333 12.6733 65.2467 12.38 64.86C12.1 64.46 11.7467 64.1467 11.32 63.92C10.9067 63.68 10.34 63.4067 9.62 63.1C8.83333 62.7667 8.20667 62.4667 7.74 62.2C7.28667 61.92 6.89333 61.5467 6.56 61.08C6.24 60.6 6.08 59.9933 6.08 59.26C6.08 58.6733 6.24667 58.12 6.58 57.6C6.91333 57.0667 7.42 56.6333 8.1 56.3C8.78 55.9667 9.61333 55.8 10.6 55.8C11.2533 55.8 11.7933 55.8467 12.22 55.94C12.6467 56.0333 13.08 56.1867 13.52 56.4L12.82 58.48C12.34 58.32 11.9467 58.2067 11.64 58.14C11.3467 58.0733 11.0067 58.04 10.62 58.04C9.86 58.04 9.3 58.1733 8.94 58.44C8.58 58.7067 8.42 59.0467 8.46 59.46C8.5 59.7933 8.7 60.08 9.06 60.32C9.43333 60.56 10.0067 60.8533 10.78 61.2C11.6867 61.6 12.44 61.98 13.04 62.34C13.64 62.7 14.1533 63.1933 14.58 63.82C15.02 64.4467 15.24 65.2133 15.24 66.12C15.24 67.3067 14.8467 68.2867 14.06 69.06C13.2733 69.8333 12.0733 70.22 10.46 70.22C9.47333 70.22 8.62667 70.04 7.92 69.68C7.22667 69.3067 6.69333 68.8333 6.32 68.26C5.96 67.6733 5.76667 67.0667 5.74 66.44L8.1 66.1ZM24.0813 60.576H21.7773V58.8H28.2093V60.576H25.8413V70H24.0813V60.576ZM40.588 58.784V67.024C40.588 68.1013 40.2573 68.8853 39.596 69.376C38.9453 69.8667 38.156 70.112 37.228 70.112C36.3 70.112 35.5053 69.8667 34.844 69.376C34.1826 68.8853 33.852 68.1013 33.852 67.024V58.784H35.612V66.32C35.612 67.0453 35.7186 67.5733 35.932 67.904C36.156 68.224 36.5826 68.384 37.212 68.384C37.852 68.384 38.2786 68.224 38.492 67.904C38.716 67.5733 38.828 67.0453 38.828 66.32V58.784H40.588ZM47.4316 58.784H50.4396C51.6449 58.784 52.5623 59.1147 53.1916 59.776C53.8316 60.4373 54.1516 61.3173 54.1516 62.416V66.8C54.1516 68.9333 53.0209 70 50.7596 70H47.4316V58.784ZM52.3916 62.256C52.3916 61.6693 52.2423 61.2427 51.9436 60.976C51.6556 60.6987 51.2076 60.56 50.5996 60.56H49.1916V68.384H50.5036C51.0796 68.384 51.5383 68.2987 51.8796 68.128C52.2209 67.9467 52.3916 67.5573 52.3916 66.96V62.256ZM64.7675 68.96C65.1195 68.9173 65.4075 68.784 65.6315 68.56C65.8555 68.336 65.9675 67.9413 65.9675 67.376V66.48C65.4341 66.7467 64.8741 66.88 64.2875 66.88C63.5621 66.88 62.9221 66.7413 62.3675 66.464C61.8128 66.176 61.3808 65.7707 61.0715 65.248C60.7728 64.7147 60.6235 64.096 60.6235 63.392V58.8H62.3835V63.232C62.3835 63.8933 62.5435 64.3787 62.8635 64.688C63.1835 64.9973 63.6581 65.152 64.2875 65.152C64.6395 65.152 64.9275 65.1147 65.1515 65.04C65.3861 64.9653 65.5461 64.8907 65.6315 64.816C65.7275 64.7413 65.8395 64.64 65.9675 64.512V58.8H67.7275V67.504C67.7275 68.3467 67.5461 69.0027 67.1835 69.472C66.8208 69.9413 66.2021 70.2187 65.3275 70.304L64.7675 68.96Z"
            fill="#048EF1"
          />
        </svg>
      </div>

      <div class="sign-buttons">
        <div class="sign-button" @click="to('signin')">Sign up</div>
        <div class="sign-button" @click="to('login')">Log in</div>
      </div>

      <div class="tabs-container" v-if="!ifMobile">
        <div
          :class="{
            'tab-button': true,
            'route-active': true,
          }"
          @click="to('task')"
        >
          Task List
        </div>
        <div class="tab-button" @click="to('kanban')">Kanban Board</div>
        <div class="tab-button" @click="to('pomodoro')">Pomodoro</div>
        <div class="tab-button" @click="to('aux')">Auxiliary</div>
      </div>

      <div class="dot-wrapper" v-if="ifMobile" @click="toggleTabs">
        <img src="../assets/dot4.png" alt="dot" />
      </div>

      <div class="mobile-tabs-container" v-if="ifMobile" v-show="showTabs">
        <div class="tab-button" @click="to('task')">Task List</div>
        <div class="tab-button" @click="to('kanban')">Kanban Board</div>
        <div class="tab-button" @click="to('pomodoro')">Pomodoro</div>
        <div class="tab-button" @click="to('aux')">Auxiliary</div>
      </div>
    </div>

    <div class="main">
      <h2 v-if="!ifMobile">Task List</h2>

      <div class="add-area flex">
        <img
          class="refresh"
          src="../assets/refresh.png"
          alt="refresh"
          @click="refresh"
        />

        <div
          :style="{
            flex: '0 0 100px',
          }"
          @click="addTask"
        >
          <img class="plus" src="../assets/plus-mini.png" alt="plus" />
          <span class="new">NEW</span>
        </div>
      </div>

      <task-card
        :ifMobile="ifMobile"
        v-for="(task, index) in tasks"
        :key="index"
        :index="index"
        :title="task.title"
        :subject="task.subject"
        :time="task.time"
        :priority="task.priority"
        :deadline="task.deadline"
        :status="status"
        @onChangeField="onChangeField"
      ></task-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TaskCard from "../components/task-card.vue";

export default defineComponent({
  name: "taskPage",
  components: {
    TaskCard,
  },
  props: {
    ifMobile: Boolean,
  },
  data() {
    return {
      tasks: [],
      showTabs: false,
    };
  },
  methods: {
    toggleTabs() {
      this.showTabs = !this.showTabs;
    },
    to(v) {
      console.log(v);
      this.$emit("changeRoute", v);
    },
    addTask() {
      // add tasks
      this.tasks.push({
        title: "",
        subject: "",
        time: ":",
        priority: "",
        deadline: "",
        status: "",
      });
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    onChangeField(index, obj) {
      // when change field should set it into localStorage
      console.log(index, obj);
      this.tasks[index] = {
        ...this.tasks[index],
        ...obj,
      };

      this.$nextTick(() => {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      });
    },
    refresh() {
      const tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      this.tasks = tasks;
    },
  },
  mounted() {},
});
</script>
<style lang="css" scoped>
.container {
  background-color: #ffffff;
}

/* top loginbar */
.loginbar {
  width: 100%;
  height: 100px;
  padding: 0px 8px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  position: relative;
  color: white;
}
.loginbar .study-icon {
  width: 75px;
  height: 75px;
  display: inline-block;
  margin-right: 66px;
}
.loginbar .sign-buttons {
  width: 180px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.loginbar .sign-buttons .sign-button {
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  background-color: rgb(120, 186, 244);
  padding: 0px 8px;
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
  width: 120px;
  height: 66px;
  line-height: 66px;
  font-weight: 700;
  font-size: 18px;
  background-color: #65bbf9;
  border-radius: 20px 20px 0px 0px;
  cursor: pointer;
  text-align: center;
}
.loginbar .tabs-container .tab-button:nth-child(2) {
  line-height: 33px;
}
.loginbar .dot-wrapper {
  position: absolute;
  right: 20px;
  top: 30px;
}
.loginbar .mobile-tabs-container {
  position: absolute;
  z-index: 999;
  background-color: white;
  right: 20px;
  top: 80px;
  color: #848484;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 6px 12px;
}
.loginbar .mobile-tabs-container div {
  margin-top: 6px;
}

/* main area */
.main {
  width: 100%;
  padding: 0 38px;
  position: relative;
}
.container.ifMobile .main {
  padding: 0 8px;
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
.main .add-area {
  width: 90px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;

  margin-bottom: 18px;
}
.container.ifMobile .main .add-area {
  margin-top: 18px;
}

.main .add-area.flex {
  display: flex;
  justify-content: flex-start;
}
.main .add-area .refresh {
  width: 36px;
  height: 36px;
  font-size: 40px;
  margin-right: 12px;
  margin-top: -2px;
}
.main .add-area .plus {
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin-right: 12px;
}
.main .add-area .new {
  vertical-align: top;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  /* line-height: 24px; */
  color: #c4c4c4;
}
</style>

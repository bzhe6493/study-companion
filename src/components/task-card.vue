<template>
  <div class="container-2">
    <div class="title-bar">
      <h2 class="title">
        {{ title || "Create a task" }}
      </h2>

      <div class="pencil-wrapper">
        <img class="pencil" src="../assets/pencil.png" alt="pencil" />
      </div>
    </div>
    <div class="main-body">
      <div class="form-item">
        <label for="title"> Title </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the name of the task"
          ref="titleRef"
        />
      </div>

      <div class="form-item subject-form-item">
        <label for="subject"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="The subject of the task"
          ref="subjectRef"
        />
      </div>

      <div class="form-item time-form-item float-left">
        <label for="time"> Time (How long the task is expected to take) </label>
        <div class="time-wrapper">
          <input
            class="time1"
            type="text"
            name="time1"
            id="time1"
            placeholder=""
            ref="time1Ref"
          />
          <img class="dot2" src="../assets/dot2.png" alt="dot" />
          <input
            class="time2"
            type="text"
            name="time2"
            id="time2"
            placeholder=""
            ref="time2Ref"
          />
        </div>
      </div>

      <div class="form-item priority-form-item float-left">
        <label for="priority"> Priority rating </label>
        <div class="priority-wrapper">
          <div
            :class="{
              low: true,
              active: priorityD === 'low',
            }"
            @click="setPriority.call(null, 'low')"
          >
            Low
          </div>
          <div
            :class="{
              med: true,
              active: priorityD === 'med',
            }"
            @click="setPriority.call(null, 'med')"
          >
            Med
          </div>
          <div
            :class="{
              high: true,
              active: priorityD === 'high',
            }"
            @click="setPriority.call(null, 'high')"
          >
            High
          </div>
        </div>
      </div>

      <div class="form-item deadline-form-item float-left">
        <label for="deadline"> Task deadline </label>
        <input
          type="text"
          name="deadline"
          id="deadline"
          placeholder="Date"
          ref="deadlineRef"
        />
      </div>

      <div class="form-item status-form-item float-left">
        <label for="status"> Status (Done/Not Done) </label>

        <select name="status" id="status" ref="statusRef">
          <option disabled selected value>-- select an option --</option>
          <option value="Completed">Done</option>
          <!-- <option value="done">In Progress</option> -->
          <option value="Not started">Not Done</option>
        </select>
        <!-- <input
          type="select"
          name="status"
          id="status"
          placeholder=""
          ref="statusRef"
        /> -->
      </div>

      <div class="form-item submit-form-item flex-column">
        <input type="button" value="Cancel" @click="cancel" />
        <input type="button" value="Save" @click="save" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    index: Number,
    title: String,
    subject: String,
    time: String,
    priority: String,
    deadline: String,
    status: String,
    onChangeField: Function,
  },
  data() {
    return {
      time1: "",
      time2: "",
      priorityD: null,
    };
  },
  computed: {
    // titleInner: {
    //   // getter
    //   get: function () {
    //     return this.title;
    //   },
    //   // setter
    //   set: function (newValue) {
    //     this.$emit("onChangeField", this.index, "title", newValue);
    //   },
    // },
    // subjectInner: {
    //   // getter
    //   get: function () {
    //     return this.title;
    //   },
    //   // setter
    //   set: function (newValue) {
    //     console.log(newValue);
    //     this.$emit("onChangeField", this.index, "subject", newValue);
    //   },
    // },
  },
  methods: {
    setPriority(v) {
      this.priorityD = v;
    },
    cancel() {
      console.log("click cancel");
      this.titleRef.value = "";
      this.subjectRef.value = "";
      this.time1Ref.value = "";
      this.time2Ref.value = "";
      this.deadlineRef.value = "";
      this.statusRef.value = "";

      this.setPriority(null);
    },
    save() {
      console.log("click save");
      const obj = {
        title: this.titleRef.value,
        subject: this.subjectRef.value,
        time1: this.time1Ref.value,
        time2: this.time2Ref.value,
        deadline: this.deadlineRef.value,
        status: this.statusRef.value,
      };

      this.$emit("onChangeField", this.index, obj);
    },
  },

  setup() {
    const titleRef = ref();
    const subjectRef = ref();
    const time1Ref = ref();
    const time2Ref = ref();
    const deadlineRef = ref();
    const statusRef = ref();

    return {
      titleRef,
      subjectRef,
      time1Ref,
      time2Ref,
      deadlineRef,
      statusRef,
    };
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
  padding: 0 22px;

  color: white;
  background-color: #2091e3;
  border-radius: 26px 26px 0 0;

  display: flex;
  justify-content: space-between;
}
.title-bar h2.title {
  margin: 0;
  padding: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;

  color: #ffffff;
}
.title-bar .pencil-wrapper {
  overflow: hidden;
  cursor: pointer;
}
.title-bar .pencil {
  width: 30px;
  height: 40px;
  font-size: 40px;
  margin-top: 10px;
}

.main-body {
  position: relative;
  width: 100%;
  min-height: 500px;
  padding: 6px 20px;
  /* padding-bottom: 90px; */
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;
}

.main-body .form-item {
  font-size: 22px;
  text-align: left;
  margin-bottom: 12px;
}
.main-body .form-item label {
  display: block;
  margin-bottom: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #6d6b6b;
}
.main-body .form-item input {
  display: block;
}

.main-body .form-item.subject-form-item {
  /* margin-bottom: 80px; */
}

.main-body .form-item.time-form-item {
  width: 600px;
}
.main-body .form-item.time-form-item .time-wrapper {
  display: flex;
  align-items: center;
  height: 70px;
}
.main-body .form-item.time-form-item input {
  width: 100px;
  display: inline-block;
}
.main-body .form-item.time-form-item .dot2 {
  margin: 0 12px;
}

.main-body .form-item.priority-form-item {
  width: 400px;
}
.main-body .form-item.priority-form-item .priority-wrapper {
  display: flex;
  align-items: center;
  height: 70px;
}
.main-body .form-item.priority-form-item .priority-wrapper div {
  width: 100px;
  background-color: white;
  height: 60px;
  line-height: 60px;
  margin-right: 20px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
}
.main-body .form-item.priority-form-item .priority-wrapper div.active {
  width: 100px;
  background-color: rgb(120, 186, 244);
  color: white;
}

.main-body .form-item.deadline-form-item {
  width: 600px;
}
.main-body .form-item.deadline-form-item input {
  width: 252px;
}

.main-body .form-item.status-form-item {
  width: 400px;
}
.main-body .form-item.status-form-item input {
  width: 340px;
}

.main-body .form-item.submit-form-item {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 150px;
  bottom: 30px;
}

.main-body .form-item.submit-form-item input:nth-child(1) {
  margin-bottom: 20px;
}

.flex-column {
  flex-direction: column;
}
.float-left {
  float: left;
}

#status {
  width: 342px;
  height: 72px;
  border-radius: 16px;
  border: none;
  font-size: 28px;
  line-height: 34px;

  color: #6d6b6b;
  text-align: left;
  text-indent: 12px;
}
</style>

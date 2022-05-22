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
          v-model="titleInner"
          placeholder="Enter the name of the task"
        />
      </div>

      <div class="form-item">
        <label for="subject"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          v-model="subjectInner"
          placeholder="The subject of the task"
        />
      </div>

      <div class="form-item time-form-item">
        <label for="time"> Time (How long the task is expected to take) </label>
        <div class="time-wrapper">
          <input
            class="time1"
            type="text"
            name="time1"
            id="time1"
            v-model="time1"
            placeholder=""
          />
          <img class="dot2" src="../assets/dot2.png" alt="dot" />
          <input
            class="time2"
            type="text"
            name="time2"
            id="time2"
            v-model="time2"
            placeholder=""
          />
        </div>
      </div>

      <div class="form-item priority-form-item">
        <label for="priority"> Priority rating </label>
        <div class="priority-wrapper">
          <div class="low">Low</div>
          <div class="med">Med</div>
          <div class="high">High</div>
        </div>
      </div>

      <div class="form-item deadline-form-item">
        <label for="deadline"> Task deadline </label>
        <input
          type="text"
          name="deadline"
          id="deadline"
          v-model="deadlineInner"
          placeholder="Date"
        />
      </div>

      <div class="form-item status-form-item">
        <label for="status"> Status (Done/Not Done) </label>
        <input
          type="text"
          name="status"
          id="status"
          v-model="statusInner"
          placeholder=""
        />
      </div>

      <div class="form-item">
        <input type="button" value="Cancel" @click="cancel" />
        <input type="button" value="Save" @click="save" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    };
  },
  computed: {
    titleInner: {
      // getter
      get: function () {
        return this.title;
      },
      // setter
      set: function (newValue) {
        console.log(newValue);
        this.$emit("onChangeField", this.index, "title", newValue);
      },
    },
    subjectInner: {
      // getter
      get: function () {
        return this.title;
      },
      // setter
      set: function (newValue) {
        console.log(newValue);
        this.$emit("onChangeField", this.index, "subject", newValue);
      },
    },
  },
  methods: {
    cancel() {
      console.log("click cancel");
    },
    save() {
      console.log("click save");
    },
  },
};
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

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;

  color: #ffffff;
}
.title-bar .pencil-wrapper {
  margin-left: calc(100% - 220px);
  /* display: inline-block; */
  overflow: hidden;
}
.title-bar .pencil {
  width: 30px;
  height: 40px;
  font-size: 40px;
  margin-top: 10px;
}

.main-body {
  width: 100%;
  min-height: 60px;
  padding: 6px 12px;
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
}
.main-body .form-item input {
  display: block;
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
</style>

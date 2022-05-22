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
}
.main-body .form-item input {
  display: block;
}
</style>

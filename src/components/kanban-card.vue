<template>
  <div
    :class="{
      'container-2': true,
      ifMobile: ifMobile,
    }"
  >
    <div class="title-bar">
      <h2 class="title">
        {{ title }}
      </h2>
      <div class="pencil-wrapper" @click="refresh">
        <img class="pencil" src="../assets/refresh.png" alt="refresh" />
      </div>
      <div
        class="add-wrapper"
        @click="addCard.call(null, this.cards.length + 1)"
      >
        <img class="plus" src="../assets/plus-mini.png" alt="plus" />
      </div>
    </div>
    <div class="main-body">
      <kanban-card-item
        v-for="(item, index) in cards"
        :key="index"
        :title="item.title"
        :subject="item.subject"
        :deadline="item.deadline"
      >
      </kanban-card-item>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import kanbanCardItem from "./kanban-card-item.vue";

export default defineComponent({
  props: {
    index: Number,
    title: {
      type: String,
      required: true,
    },
    ifMobile: Boolean,
  },
  components: {
    kanbanCardItem,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {},
  methods: {
    addCard(n) {
      this.cards.push({
        title: "Card " + n,
      });
    },
    refresh() {
      const tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];

      const fts = tasks.filter(
        (t) =>
          t.status === this.title || (this.title === "In progress" && !t.status)
      );

      this.cards = fts;
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
  width: 40px;
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
  padding-bottom: 0;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}

.container-2.ifMobile .main-body {
  width: 100%;
  min-height: 240px;
  max-height: 660px;
  padding: 25px 15px;
  padding-bottom: 0;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

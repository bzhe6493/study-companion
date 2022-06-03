<template>
  <div
    :class="{
      'container-2': true,
      ifMobile: ifMobile,
    }"
  >
    <div class="title-bar">
      <h2 class="title">Dictionary</h2>
    </div>
    <div class="main-body">
      <header>
        <!-- Input for enter a word -->
        <input type="text" placeholder="Search for words" v-model="word" />

        <div class="search-wrapper" v-on:click="search">
          <img src="../assets/search.png" alt="search" />
        </div>
      </header>

      <div class="body">
        <div class="body-inner">
          <div v-if="!definitions.length" class="title">
            {{ helptip }}
          </div>

          <div
            class="r-wrapper"
            v-for="(para, idx) in definitions"
            :key="para.title"
          >
            <!-- array start from 0, should + 1 -->
            <div class="title">{{ idx + 1 }}. {{ para.definition }}</div>
            <div class="text">example: {{ para.example }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import getWordInfo from "../api/request";

export default defineComponent({
  props: {
    ifMobile: Boolean,
  },
  data() {
    return {
      word: "",
      definitions: [],
      helptip: "No Definitions Found",
    };
  },
  computed: {},
  methods: {
    async search() {
      this.helptip = "Loading...";
      const res = await getWordInfo(this.word);
      // get results from the api definitions
      if (Array.isArray(res) && res[0] && res[0].meanings) {
        let defs = [];

        res[0].meanings.forEach((meaning) => {
          defs = [...defs, ...meaning.definitions];
        });

        this.definitions = defs;
        this.helptip = "";
      } else {
        this.definitions = [];
        this.helptip = "No Definitions Found";
      }
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
.container-2.ifMobile .title-bar h2.title {
  height: 40px;
  font-size: 22px;
  line-height: 40px;
}

.main-body {
  width: 100%;
  height: 660px;
  padding: 20px 15px;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}
.container-2.ifMobile .main-body {
  height: 550px;
}

.main-body header {
  display: flex;
}

.main-body header .search-wrapper {
  margin-left: 20px;
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 12px;
  display: flex;
  padding: 10px;
  cursor: pointer;
}

.container-2.ifMobile .main-body header input {
  height: 50px;
  font-size: 24px;
}

.container-2.ifMobile .main-body header .search-wrapper {
  width: 50px;
  height: 50px;
}

.main-body .body {
  height: 520px;
  overflow-y: auto;
  background-color: white;
  margin: 6px;
  margin-top: 20px;
  padding: 10px 20px;
}

.main-body .body .body-inner {
  height: auto;
}

.main-body .body .r-wrapper {
  margin-bottom: 20px;
}

.main-body .body .title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
}

.main-body .body .r-wrapper .text {
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  color: #000000;
}
</style>
const

<template>
  <div class="container-2">
    <div class="title-bar">
      <h2 class="title">Music</h2>
    </div>
    <div class="main-body">
      <play-item
        v-for="item in playList"
        :key="item.key"
        :active="item.key === 'asItWas'"
        :imgUrl="item.imgUrl"
        :primaryTitle="item.primaryTitle"
        :secondaryTitle="item.secondaryTitle"
      >
      </play-item>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import playItem from "./play-item";
import asItWas from "../assets/music/asItWas.png";
import bigEnergy from "../assets/music/bigEnergy.png";
import firstClass from "../assets/music/firstClass.png";
import moscowMule from "../assets/music/moscowMule.png";
import waitForU from "../assets/music/waitForU.png";

export default defineComponent({
  components: {
    playItem,
  },
  data() {
    return {
      cards: [],
      playList: [
        {
          key: "asItWas",
          imgUrl: asItWas,
          mp3Url: "../assets/music/As It Was - Harry Styles.mp3",
          primaryTitle: "As It Was",
          secondaryTitle: "Harry Styles",
        },
        {
          key: "bigEnergy",
          imgUrl: bigEnergy,
          mp3Url: "../assets/music/ENEMY - Imagine Dragons、J.I.D.mp3",
          primaryTitle: "ENEMY",
          secondaryTitle: "Imagine Dragons、J.I.D",
        },
        {
          key: "firstClass",
          imgUrl: firstClass,
          mp3Url: "../assets/music/First Class - Jack Harlow.mp3",
          primaryTitle: "First Class",
          secondaryTitle: "Jack Harlow",
        },
        {
          key: "moscowMule",
          imgUrl: moscowMule,
          mp3Url: "../assets/music/Moscow Mule - Bad Bunny.mp3",
          primaryTitle: "Moscow Mule",
          secondaryTitle: "Bad Bunny",
        },
        {
          key: "waitForU",
          imgUrl: waitForU,
          mp3Url: "../assets/music/WAIT FOR U - Future、Drake、Tems.mp3",
          primaryTitle: "WAIT FOR U",
          secondaryTitle: "Future、Drake、Tems",
        },
      ],
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
  height: 660px;
  padding: 20px 35px;
  padding-top: 5px;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

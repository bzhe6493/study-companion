<template>
  <div
    :class="{
      'container-2': true,
      ifMobile: ifMobile,
    }"
  >
    <div class="title-bar">
      <h2 class="title">Music</h2>
    </div>
    <div class="main-body">
      <play-item
        :ifMobile="ifMobile"
        v-for="item in playList"
        :key="item.key"
        :name="item.key"
        :imgUrl="item.imgUrl"
        :mp3Url="item.mp3Url"
        :primaryTitle="item.primaryTitle"
        :secondaryTitle="item.secondaryTitle"
        :playing="playing"
        :activeKey="activeKey"
        @go="go"
        @pause="pause"
        @play="play"
      >
      </play-item>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import playItem from "./play-item";
import asItWas from "../assets/music/asItWas.png";
// import bigEnergy from "../assets/music/bigEnergy.png";
import enemy from "../assets/music/enemy.png";
import firstClass from "../assets/music/firstClass.png";
import moscowMule from "../assets/music/moscowMule.png";
import waitForU from "../assets/music/waitForU.png";

export default defineComponent({
  components: {
    playItem,
  },
  props: {
    ifMobile: Boolean,
  },
  data() {
    return {
      activeIndex: 0,
      activeKey: "asItWas",
      playing: null,
      playList: [
        {
          key: "asItWas",
          imgUrl: asItWas,
          mp3Url: "../assets/music/As It Was - Harry Styles.mp3",
          primaryTitle: "As It Was",
          secondaryTitle: "Harry Styles",
        },
        {
          key: "enemy",
          imgUrl: enemy,
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
  methods: {
    findItem(type) {
      // find the music item
      if (type === "next") {
        const vIndex =
          this.activeIndex === this.playList.length - 1
            ? 0
            : this.activeIndex + 1;
        this.activeIndex = vIndex;
        return this.playList[vIndex];
      } else if (type === "pre") {
        const vIndex =
          this.activeIndex === 0
            ? this.playList.length - 1
            : this.activeIndex - 1;
        this.activeIndex = vIndex;
        return this.playList[vIndex];
      }
    },
    go(key, type) {
      if (type && !key) {
        // go
        const obj = this.findItem(type);
        console.log(`- finded1 `, obj);
        this.activeKey = obj?.key;
        this.playing = obj?.key;
      } else if (key && !type) {
        // choose
        console.log(`- finded2 `, key);
        this.activeKey = key;
        this.activeIndex = this.playList.findIndex((p) => p.key === key);
        this.playing = key;
      }
    },
    play() {
      this.playing = this.activeKey;
    },
    pause() {
      this.playing = null;
    },
  },
  mounted() {
    console.log(this.activeIndex, this.activeKey, this.playing);
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
  padding: 20px 35px;
  padding-top: 5px;
  box-sizing: border-box;

  background-color: #eeebeb;
  border-radius: 0 0 26px 26px;

  overflow-y: scroll;
  overflow-x: hidden;
}

.container-2.ifMobile .main-body {
  padding-left: 10px;
  padding-right: 10px;
}
</style>

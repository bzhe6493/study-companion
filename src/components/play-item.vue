<template>
  <div>
    <div
      :class="{
        item: true,
        'active-item': activeKey === name,
      }"
      @click="changeKey"
    >
      <div class="pic">
        <img :src="imgUrl" :alt="name" />
      </div>

      <div class="play-right">
        <div class="header">
          <div class="pri-header">
            {{ primaryTitle }}
          </div>
          <div class="sec-header" v-if="activeKey === name">
            &nbsp;-&nbsp;{{ secondaryTitle }}
          </div>
          <div class="sec-header" v-else>{{ secondaryTitle }}</div>
        </div>
        <div class="body" v-if="activeKey === name">
          <img
            src="../assets/play-left.png"
            alt="play-left"
            @click.stop="goPre"
          />
          <img
            :src="started ? p1 : p2"
            alt="play-left"
            @click.stop="toggleMusic"
          />
          <img
            src="../assets/play-right.png"
            alt="play-right"
            @click.stop="goNext"
          />
        </div>
      </div>
      <audio ref="musicRef" hidden="true">
        <source :src="getSource(name)" type="audio/mpeg" />
      </audio>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, watch, onMounted } from "vue";

const m1 = require("../assets/music/As It Was - Harry Styles.mp3");
const m2 = require("../assets/music/ENEMY - Imagine Dragons、J.I.D.mp3");
const m3 = require("../assets/music/First Class - Jack Harlow.mp3");
const m4 = require("../assets/music/Moscow Mule - Bad Bunny.mp3");
const m5 = require("../assets/music/WAIT FOR U - Future、Drake、Tems.mp3");

const p1 = require("../assets/play-pause.png");
const p2 = require("../assets/play-one.png");

export default defineComponent({
  props: {
    name: String,
    imgUrl: String,
    mp3Url: String,
    primaryTitle: String,
    secondaryTitle: String,
    activeKey: {
      type: [String, Object],
    },
    playing: {
      type: [String, Object],
    },
  },
  data() {
    return {
      p1,
      p2,
    };
  },
  methods: {
    changeKey() {
      this.$emit("go", this.name);
    },
    goPre() {
      this.$emit("go", undefined, "pre");
    },
    goNext() {
      this.$emit("go", undefined, "next");
    },
    toggleMusic() {
      if (this.started) {
        this.started = false;
        this.$emit("pause");
      } else {
        this.started = true;
        this.$emit("play");
      }
    },
    getSource(source) {
      switch (source) {
        case "asItWas":
          return m1;
        case "enemy":
          return m2;
        case "firstClass":
          return m3;
        case "moscowMule":
          return m4;
        case "waitForU":
          return m5;
      }
    },
  },
  setup(props) {
    const musicRef = ref();
    const started = ref(props.playing === props.name);

    watch(
      () => props.playing,
      () => {
        if (props.playing === props.name) {
          started.value = true;
          musicRef.value?.play();
        } else {
          started.value = false;
          musicRef.value?.pause();
        }
      }
    );

    onMounted(() => {
      console.log(musicRef.value);
      // musicRef.value?.play();
      // playing.value = true;
      // musicRef.value && musicRef.value.play();
    });

    return {
      musicRef,
      started,
    };
  },
});
</script>
<style lang="css" scoped>
.item {
  width: 100%;
  /* height: 128px; */
  display: flex;
  align-items: center;
  margin-top: 22px;
}

.active-item.item .pic {
  width: 126px;
  height: 126px;
  border-radius: 20px;
  overflow: hidden;
}

.active-item.item .pic img {
  width: 126px;
  height: 126px;
}

.item .pic {
  width: 98px;
  height: 98px;
  border-radius: 20px;
  overflow: hidden;
}

.item .pic img {
  width: 98px;
  height: 98px;
}

.item .play-right {
  margin-left: 20px;
}

.item .play-right .header {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #3c3a3a;
}

.item.active-item .play-right .header {
  font-size: 24px;
}

.active-item .pri-header {
  float: left;
}

.active-item.item .sec-header {
  float: left;
  color: #706a6a;
  font-size: 20px;
}

.item .sec-header {
  color: #706a6a;
  font-size: 18px;
}

.body {
  width: 100%;
  display: flex;
  margin-top: 40px;
}

.body img {
  margin-right: 30px;
  cursor: pointer;
}
</style>

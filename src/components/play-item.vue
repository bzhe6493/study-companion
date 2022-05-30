<template>
  <div>
    <div
      :class="{
        item: true,
        'active-item': active,
      }"
    >
      <div class="pic">
        <img :src="imgUrl" :alt="name" />
      </div>

      <div class="play-right">
        <div class="header">
          <div class="pri-header">
            {{ primaryTitle }}
          </div>
          <div class="sec-header" v-if="active">
            &nbsp;-&nbsp;{{ secondaryTitle }}
          </div>
          <div class="sec-header" v-else>{{ secondaryTitle }}</div>
        </div>
        <div class="body" v-if="active">
          <img src="../assets/play-left.png" alt="play-left" />
          <img src="../assets/play-pause.png" alt="play-left" />
          <img src="../assets/play-right.png" alt="play-right" />
        </div>
      </div>

      <audio v-if="active" ref="musicRef" :src="mp3Url"></audio>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    active: Boolean,
    name: String,
    imgUrl: String,
    mp3Url: String,
    primaryTitle: String,
    secondaryTitle: String,
  },
  methods: {},
  setup() {
    const musicRef = ref();
    return {
      musicRef,
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

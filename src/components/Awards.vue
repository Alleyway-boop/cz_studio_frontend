<template>
  <div id="app">
    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">荣誉奖项</h2>
    <div class="radio-input mb-8">
      <input v-for="(value, index) in radioValues" :key="index" type="radio" :id="'value-' + index" :name="'value-radio'" :value="index" v-model="currentIndex">
      <div class="circle" v-for="(value, index) in radioValues" :key="index"></div>
    </div>
    <div class="mx-auto mb-16">
      <div class="mx-auto grid lg:grid-cols-2 md:grid-cols-2 justify-center max-w-screen-xl px-4 md:px-8">
      <transition-group name="fade" tag="div" class="mx-auto flex items-center justify-center">
        <div v-for="(year, index) in displayedYears" :key="index" >
          <div class="card w-16 h-16">
            <div class="circle w-12 h-12"></div>
            <div class="circle w-12 h-12"></div>
            <div class="card-inner lg:text-xl flex items-center justify-center text-yellow-500">{{ year }}</div>
          </div>
        </div>
      </transition-group>

      <transition-group style="height: 400px" name="fade" tag="div">
        <div v-for="(yearData, year) in displayedAwards" :key="year" class="mx-auto">
          <div v-for="(monthData, month) in yearData" :key="month">
            <h5 class="text-yellow-500">{{ monthData[0].date }}</h5>
            <p class="text-black" v-for="award in monthData" :key="award.id">{{ award.competitionName }} {{ award.awardLevel }}</p>
          </div>
        </div>
      </transition-group>
    </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/api/index"
import { ref, computed, onMounted, onUnmounted } from 'vue';

const radioValues = ref([]);
const awardsData = ref({});
const currentIndex = ref(0);

const displayedYears = computed(() => {
  return Object.keys(awardsData.value).slice(currentIndex.value, currentIndex.value + 1);
});

const displayedAwards = computed(() => {
  return Object.values(awardsData.value).slice(currentIndex.value, currentIndex.value + 1);
});

onMounted(() => {
  api.awardsApi().then(res => {
    awardsData.value = res.data.data
    // 根据年份数量设置 radioValues
    radioValues.value = Array.from({ length: Object.keys(awardsData.value).length }, (_, index) => index);
  });
  // 启动轮播
  startCarousel();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

let intervalId;

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % radioValues.value.length;
  }, 3000); // 每5秒切换一次
};
</script>
<style scoped>
.card {
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255,255,255,.05);
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {

  background: radial-gradient(#b0e633, #53ef7d);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}
.radio-input {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio-input input {
  appearance: none;
  width: 1em;
  height: 1em;
  background-color: #fce5e5;
  box-shadow: inset 2px 5px 10px rgb(167, 167, 227);
  border-radius: 50%;
  transition: .4s ease-in-out;
}

.radio-input input:hover {
  scale: 1.2;
  cursor: pointer;
  box-shadow: none;
}

.radio-input .circle {
  position: relative;
  top: 0.01em;
  left: -1.1em;
  width: 0.5em;
  height: 0.5em;
  background-color: yellow;
  scale: 0;
  border-radius: 10px;
  transition: .4s ease-in-out;
}

.radio-input input:checked {
  box-shadow: none;
  border: 1px solid yellow;
}
.radio-input input:checked + .circle {
  transform: rotate(360deg);
  scale: 1;
}
</style>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import api from "@/api";
import {onBeforeMount, onMounted, ref} from "vue";

const stats = ref({})
//     [
//   { id: 1, name: '本站访问量', value: 0 },
//   { id: 2, name: '我们正在为3345位用户提供服务', value: '运营239天'},
//   { id: 3, name: '每日新增用户', value: '46,000' }
// ]
onBeforeMount(()=>{
  getWebTraffic();
})
function getWebTraffic(){
  api.starsApi().then(res=>{
    console.log("res")
    console.log(res)
    console.log("res")
    stats.value=res.data.data
  })
  onMounted(()=>{
    getWebTraffic();
  })
}

</script>
<!--<script>-->
<!--import api from "../api"-->


<!--export  default {-->
<!--  methods:{-->
<!--    getWebTraffic(){-->
<!--      const _this=this-->

<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getWebTraffic()-->
<!--  }-->
<!--}-->

<!--</script>-->
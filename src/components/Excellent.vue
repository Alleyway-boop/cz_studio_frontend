<script setup>
import {onMounted, ref} from "vue";
import api from "@/api/index"
const excellent=ref([])
const moreButton=ref("更多")
const queryParams=ref({
  pageSize:4
})
onMounted(()=>{
  api.getExcellentListApi(queryParams.value.pageSize).then(res=>{
       excellent.value= res.data.rows
  })
})
function getMoreExcellentList(){
  if(moreButton.value==="收回"){
    api.getExcellentListApi(queryParams.value.pageSize).then(res=>{
      excellent.value= res.data.rows
    })
    moreButton.value="更多"
  }else if(moreButton.value==="更多"){
    api.getExcellentListApi().then(res=>{
      excellent.value= res.data.rows
    })
    moreButton.value="收回"
  }

}
</script>

<template>
<!--优秀毕业生-->
  <div class="bg-base-200 py-4">
    <div class="mx-auto max-w-screen-xl px-12 ">
      <div class="mb-4 flex items-end justify-between gap-4">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">历届优秀学子</h2>
        <button @click="getMoreExcellentList" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
          {{ moreButton }}</button>
      </div>
      <div  class="rounded-lg grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-4  ">
        <!-- product - start -->
        <div class="bg-white rounded-lg " v-for="e in excellent">
          <a href="#" class="group mb-2 block h-96 rounded-lg overflow-hidden  bg-gray-100  lg:mb-3">
            <img :src="e.cover" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
          <div class="flex flex-col px-2.5 py-2.5   ">
<!--            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{{e.name}}</a>-->
            <span class="text-gray-500 rounded-lg ">{{e.intro}}</span>
          </div>
        </div>
        <!-- product - end -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

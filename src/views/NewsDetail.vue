<template>
  <Header/>
  <h1 class="text-gray-800  lg:text-2xl text-xl  font-bold text-center mb-4 md:mb-6 my-8 mx-8">{{ news.title }}</h1>
  <!--用户信息start-->
  <div class="flex justify-between items-end mt-auto xl:w-8/12 mx-6 sm:w-8/12 my-8 lg:mx-auto">
    <div class="flex items-center gap-2">
 </div>
  </div>
  <!--用户信息end-->
  <div class="lg:w-1/2 sm:w-10/12 mx-auto text-center" v-html="news.content">
  </div>
  <div class="flex justify-end mx-auto xl:w-8/12 lg:mx-auto sm:w-10/12 my-8"><span
      class="block text-gray-400 text-sm sm:mx-96" style="margin-right: 40px">最近更新:  {{ news.publishTime }}</span>
  </div>
  <Footer/>
</template>


<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref,} from 'vue'
import api from "@/api";
const news=ref({})
import Header  from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

onMounted(() => {
 const newsId=useRoute().params.newsId
  api.perfectNewsDetailApi(newsId).then(res=>{
   news.value=res.data.data
 })

});

</script>
<style scoped>

</style>

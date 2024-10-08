<script setup>

import Header from "@/components/Header.vue";
import {ElScrollbar, UAnchor} from "undraw-ui";
// import emoji from '../assets/emoji'
import {useRoute} from "vue-router";
import {reactive, onMounted, ref} from 'vue'
import {CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL} from 'undraw-ui'
const rules=ref({})
import api from "@/api";
import Footer from "@/components/Footer.vue";
onMounted(()=>{
  api.newsDetailApi(1).then(res => {
    console.log(res.data.data)
    rules.value = res.data.data
  })
})


</script>

<template>

  <Header/>

  <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6 my-8">{{ rules.title }}</h1>
  <div class="view flex xl:w-8/12 lg:mx-auto sm:w-10/12 mx-7">
    <el-scrollbar>
      <div id="article2" class="article">
        <div class="content-html" v-html="rules.content"></div>
<!--        <slot name="content"></slot>-->
<!--        <div class="content">{{rules.content}}</div>-->

      </div>
    </el-scrollbar>
    <!-- container指定监听的容器 target滚动轴 target-offset距离窗口顶部达到指定偏移量 -->
    <div class="article-catalog sm:w-2/12 hidden lg:block">
      <u-anchor container="#article2" style="width: 120px" target=".el-scrollbar__wrap"></u-anchor>
    </div>
  </div>
  <div class="flex justify-end mx-auto xl:w-8/12 lg:mx-auto sm:w-10/12 my-8"><span
      class="block text-gray-400 text-sm sm:mx-96" style="margin-right: 10px">最近更新:  {{ rules.publishDatetime }}</span>
  </div>
  <Footer/>
  <!--  <u-comment :config="config" @submit="submit" @like="like" class="lg:w-9/12  sm:w-full lg:mx-auto bg-black">-->
  <!--  </u-comment>-->
  <!--  <Footer/>-->
</template>

<style scoped >
.content-html  >>>h1{
  font-size: 22px;
  color: #0b0b0b;
  font-weight: bold;
}
.content-html  >>>h2{
    font-size: 20px;
    color: #333;
  text-align: center;
    margin-top: 20px;
  margin-bottom: 20px;
    font-weight: bold;
}
.content-html  >>>h3{
  font-size: 18px;
  color: #333;
  //font-weight: bold;
}
.content-html  >>>h4{
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
.content-html  >>>h5{
  font-size: 14px;
  color: #151414;
  font-weight: bold;
}
.content-html  >>>h6{
  font-size: 10px;
  color: #151414;
  font-weight: bold;
}
.content-html  >>>p{
  font-size: 16px;
  text-indent: 2em;
  color: #151414;
}
</style>

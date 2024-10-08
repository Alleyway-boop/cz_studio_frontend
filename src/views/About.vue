<template>
  <Header/>
  <About/>
  <Footer/>
</template>
<script setup>
import Header from "@/components/Header";
import About from "@/components/About";
import api from "@/api";
import {ElScrollbar} from 'undraw-ui'
import emoji from '../assets/emoji'
import {useRouter, useRoute} from 'vue-router'
import {reactive, onMounted, ref} from 'vue'
import {CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL} from 'undraw-ui'
import Footer from "@/components/Footer.vue";
function image() {
  return "https://picsum.photos/1920/400"
}
const about = ref({})
onMounted(() => {
  api.aboutApi().then(res => {
    console.log(res.data.data)
    about.value = res.data.data;
  })
})
</script>

<script setup>

import Header from "@/components/Header.vue";
import {ElScrollbar} from "undraw-ui";
import emoji from '../assets/emoji'
import {useRoute} from "vue-router";
import {reactive, onMounted, ref} from 'vue'
import {CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL} from 'undraw-ui'
const competition=ref({})
import api from "@/api";
import Footer from "@/components/Footer.vue";
onMounted(()=>{
  getCompetitionDetail()
})
function getCompetitionDetail() {
  const id = useRoute().params.competitionId
  api.competitionDetailApi(id).then(res => {
    console.log(res.data.data)
    competition.value = res.data.data
  })
}
function image(){
    return "https://picsum.photos/1920/600"
    // return this.competition.image
}
//组件start
const config = reactive({
  user: {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3]
  },
  emoji: emoji,
  comments: [],
  total: 10
})
let temp_id = 100
// 提交评论事件
const submit = ({content, parentId, files, finish}) => {
  console.log('提交评论: ' + content, parentId, files)
  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files.map(e => createObjectURL(e)).join('||')

  const comment = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: '1分钟前',
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${(temp_id += 1)}`
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({message: '评论成功!', type: 'info'})
  }, 200)
}
// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id, finish) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}

config.comments = [
  {
    id: '1',
    parentId: null,
    uid: '0',
    address: '来自上海',
    content:
        '尼玛比',
    likes: 2,
    contentImg: 'https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp',
    createTime: '1分钟前',
    user: {
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  }
]
</script>

<template>
  <Header/>
<!--<div class="w-full h-1/6"  style="background-image: url('https://picsum.photos/1920/600')"></div>-->
  <img :src="image()" class="bg-fixed  w-full h-1/6" alt="">
  <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6 my-8">{{ competition.title }}</h1>
  <!--用户信息start-->
  <div class="flex justify-between items-end mt-auto xl:w-8/12 mx-6 sm:w-8/12 my-8 lg:mx-auto">
    <div class="flex items-center gap-2">
<!--      <div class="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">-->
<!--        <img :src="competition.image" loading="lazy" alt=""-->
<!--             class="w-full h-full object-cover object-center"/>-->
<!--      </div>-->
<!--      <span class="block text-indigo-500">{{ competition.nickname }}</span>-->
<!--      <img src="../assets/time.png" class="w-5"><span class="block text-gray-400 text-sm">{{ competition.createdAt }}</span>-->
<!--      &lt;!&ndash;      <img src="../assets/time.png" class="w-5"><span class="block text-gray-400 text-sm sm: hidden lg:block"> {{ article.updateAt }}</span>&ndash;&gt;-->
<!--      <img src="../assets/read.png" class="w-5"><span class="block text-gray-400 text-sm">{{ competition.readNum }}</span>-->
    </div>
  </div>
  <!--用户信息end-->
  <div class="flex xl:w-8/12 lg:mx-auto sm:w-10/12 mx-7">
    <el-scrollbar height="500px">
      <div id="article2" class="article" v-html="competition.content"/>
    </el-scrollbar>
    <!-- container指定监听的容器 target滚动轴 target-offset距离窗口顶部达到指定偏移量 -->
    <div class="article-catalog sm:w-2/12 hidden lg:block">
      <u-anchor container="#article2" style="width: 120px" scroll=".el-scrollbar__wrap"></u-anchor>
    </div>
  </div>
  <div class="flex justify-end mx-auto xl:w-8/12 lg:mx-auto sm:w-10/12 my-8"><span
      class="block text-gray-400 text-sm sm:mx-96" style="margin-right: 40px">最近更新:  {{ competition.date }}</span>
  </div>
  <Footer/>
<!--  <u-comment :config="config" @submit="submit" @like="like" class="lg:w-9/12  sm:w-full lg:mx-auto bg-black">-->
<!--  </u-comment>-->
<!--  <Footer/>-->
</template>

<style scoped>

</style>

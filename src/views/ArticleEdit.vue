<template>
  <Header/>
  <div class="grid grid-rows-[0fr_1fr] flex w-2/3 justify-center m-auto">
    <h1>写动态</h1>
    <div class="my-4">
      <el-input
          v-model="article.title"
          maxlength="30"
          placeholder="请输入文章标题"
          show-word-limit
          type="text"
          class="outline-white"
      />
    </div>
    <div>
      <TEditor ref="editor"/>
    </div>
    <el-button class="w-auto flex ml-auto my-2 focus:outline-black" type="primary" @click="postDynamic">发表动态
    </el-button>
  </div>
</template>

<script>
import TEditor from '@/components/TEditor.vue';
import Header from "@/components/Header";
import api from "@/api";

export default {
  name: "ArticleEditView",
  components: {
    TEditor,
    Header
  },

  data() {
    return {
      article: {
        title: '',
        content: this.$refs.editor
      }
    }
  },
  methods: {
    postDynamic() {
      const item = localStorage.getItem("token");
      api.editArticleApi(this.article,
          {
            headers:{
              "authorization":localStorage.getItem("token")
            }
          }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>

</style>

<template>
  <Header/>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">大学圈</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">海和日落不属于任何人，但又是每个人都向往的温柔和浪漫.</p>
      </div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            <!-- article - start -->
            <div class="flex flex-col bg-white border rounded-lg overflow-hidden" v-for="a in article">
              <a href="#" class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <router-link :to="{ name:'dynamicDetail',params :{dynamicId:a.id}}">
                  <img :src="getCover(a)"
                       loading="lazy" alt="Photo by Minh Pham"
                       class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                </router-link>
              </a>
              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2 ">
                  <a href="#" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                    <router-link :to="{ name:'dynamicDetail',params :{dynamicId:a.id}}">
                      {{ a.title }}
                    </router-link>
                  </a>
                </h2>
                <p class="text-gray-500 mb-8 overflow-hidden w-auto h-20vh truncate  " v-text="a.description"></p>
                <div class="flex justify-between items-end mt-auto">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img :src="a.avatar" loading="lazy" alt="Photo by Brock Wegner"
                           class="w-full h-full object-cover object-center"/>
                    </div>
                    <div>
                      <span class="block text-indigo-500">{{ a.nickname }}</span>
                      <span class="block text-gray-400 text-sm">{{ a.createdAt }}</span>
                    </div>
                  </div>
                  <span class="text-gray-500 text-sm border rounded px-2 py-1">文章</span>
                </div>
              </div>
            </div>
            <!-- article - end -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--分页按钮-->
  <el-pagination class="my-8 justify-center"
                 small
                 background
                 layout="prev, pager, next"
                 :total="total"
                 :current-page="current"
                 :page-size="size"
                 @current-change="page"
  />
  <!--分页按钮-->
  <Footer/>
</template>
<script setup>
import Footer from "@/components/Footer";
import Header from "@/components/Header"
</script>
<script>
import api from "../api"

export default {
  data() {
    return {
      article: {},
      total: 0,
      size: 8,
      current: 1,
      orders: [],
      searchCount: true,
      pages: 8,
      authorUrl: '',
    }
  },
  methods: {
    getCover(a) {
      return a.cover + "?t=" + Math.random()
    },
    page(current) {
      const _this = this
      api.articleApi(current).then(res => {
        console.log(res.data.data)
        _this.article = res.data.data.records
        _this.total = res.data.data.total
        _this.size = res.data.data.size
        _this.current = res.data.data.current
        _this.pages = res.data.data.pages
      })
    }
  },
  created() {
    this.page(1)
  }
}
</script>
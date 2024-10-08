<template>
  <Header/>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">新闻公告</h2>
      </div>
      <!-- text - end -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8"  >
        <!-- article - start -->
        <router-link :to="{ name:'newsDetail',params :{newsId:n.id}}"
           class="group h-48  flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative" v-for="n in news">
          <img :src="n.cover.substring(n.cover.indexOf('[&#34;')+2,n.cover.indexOf('&#34;]'))"
               loading="lazy" alt="Photo by Minh Pham"
               class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
          <div
              class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
          <div class="relative p-4 mt-auto">
            <span class="block text-gray-200 text-sm">{{ n.author }}</span>
            <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">{{ n.title}}</h2>
            <span class="text-indigo-300 font-semibold">查看更多</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
<!--分页按钮-->
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="pageSize"
        :current-page="pageNo"
        @current-change="page"
        class="mt-4 my-8 flex justify-center"
    />
  <Footer/>
</template>
<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
</script>
<script>
export default {
  data() {
    return {
      news: {},
      pageNo:1,
      totalCount: 0,
      pageSize:12,
    }
  },
  methods: {
    page(pageNo){
      const _this = this
      this.$axios.get("/cms/api/info/list?pageNo="+pageNo+"&pageSize="+this.pageSize).then(res => {
        _this.news=res.data.data.rows
        _this.pageNo=res.data.data.pageNo
        _this.totalCount=res.data.data.totalCount
        _this.pageSize=res.data.data.pageSize
        _this.detailUrl
        console.log(res.data.data)
      })
    }
  },
  created() {
    this.page(1,this.pageSize)
  }
}
</script>

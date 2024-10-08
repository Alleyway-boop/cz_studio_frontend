<script setup>
import api from '@/api/index'
import {onMounted, ref} from 'vue'
const queryParams=ref({
  pageNum:1,
  pageSize:8,
  total:0,
})
const competition = ref([])
onMounted(() => {
  getList(1);
})
function getList(pageNum){
  api.competitionApi(pageNum,queryParams.value.pageSize).then(res => {
    queryParams.value.total = res.data.total;
    competition.value = res.data.rows;
    queryParams.pageNum = pageNum;
  })
}
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">相关赛事</h2>
      </div>
      <!-- text - end -->
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <!-- article - start -->

        <div v-for="c in competition" class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <router-link :to="{ name:'competitionDetail',params :{competitionId:c.id}}">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img :src="c.cover" loading="lazy" alt="Photo by Minh Pham"
                 class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
          </a>
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{ c.title }}</a>
            </h2>
            <p class="text-gray-500 mb-8 overflow-hidden w-auto h-20vh truncate">{{ c.content }}</p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <!--                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">-->
                <!--                  <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" class="h-full w-full object-cover object-center" />-->
                <!--                </div>-->
                <div>
                  <!--                  <span class="block text-indigo-500">Mike Lane</span>-->
                  <span class="block text-sm text-gray-400">{{ c.date }}</span>
                </div>
              </div>

              <!--              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>-->
            </div>
          </div>
          </router-link>
        </div>

        <!-- article - end -->
      </div>
      <!--分页按钮-->
<!--      <pagination v-show="queryParams.total>0" :total="queryParams.total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"-->
<!--                  @pagination="getList" />-->
      <el-pagination class="my-8 justify-center"
                     small
                     background
                     layout="prev, pager, next"
                     :total="queryParams.total"
                     :current-page="pageNum"
                     :page-size="queryParams.pageSize"
                     @current-change="getList"
      />
    </div>
  </div>
</template>
<style scoped>

</style>

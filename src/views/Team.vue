<script setup>
import Header from '@/components/Header.vue'
import  api from '@/api/index'
import { onMounted ,ref} from 'vue'
import Footer from "@/components/Footer.vue";
const team=ref([])
const teachers=ref([])
const formerCaptains=ref([])
const currentCaptains=ref([ ])
const formerMembers=ref([])
const currentMembers=ref([])
onMounted(async()=>{
 const response=  await api.teamApi();
  team.value=response.data.data
  categorizeTeamMembers()
})
const categorizeTeamMembers = () => {
  team.value.forEach(member => {
    switch (member.classification) {
      case 0:
        teachers.value.push(member);
        break;
      case 1:
        currentCaptains.value.push(member);
        break;
      case 2:
        currentMembers.value.push(member);
        break;
      case 3:
        formerCaptains.value.push(member);
        break;
      case 4:
        formerMembers.value.push(member);
        break;
      default:
        break;
    }
  });
}
</script>
<template>
  <Header></Header>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">我们的团队</h2>
      </div>
      <!-- text - end -->
      <h3 class="border-t pt-5 mb-4 lg:ml-20 ml-10  text-lg font-bold text-gray-800 md:mb-6 lg:text-xl">指导老师</h3>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="t in teachers" class="flex flex-col items-center">
          <div class="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img :src="t.avatar" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <div class="text-center font-bold text-indigo-500 md:text-lg">{{ t.name }}</div>
            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{{ t.jobTitle }}</p>
          </div>
        </div>

        <!-- person - end -->
      </div>
      <h3 class=" border-t pt-5 mb-4 lg:ml-20 ml-10  text-lg font-bold text-gray-800 md:mb-6 lg:text-xl">现届队长</h3>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="t in currentCaptains" class="flex flex-col items-center">
          <div class="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img :src="t.avatar" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <div class="text-center font-bold text-indigo-500 md:text-lg">{{ t.name }}</div>
            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{{ t.jobTitle }}</p>
          </div>
        </div>

        <!-- person - end -->
      </div>

      <h3 class="border-t pt-5 mb-4 lg:ml-20 ml-10  text-lg font-bold text-gray-800 md:mb-6 lg:text-xl">现届队员</h3>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="t in currentMembers" class="flex flex-col items-center">
          <div class="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img :src="t.avatar" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <div class="text-center font-bold text-indigo-500 md:text-lg">{{ t.name }}</div>
            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{{ t.jobTitle }}</p>
          </div>
        </div>

        <!-- person - end -->
      </div>
      <h3 class="border-t pt-5 mb-4 lg:ml-20 ml-10  text-lg font-bold text-gray-800 md:mb-6 lg:text-xl">往届队长</h3>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="t in formerCaptains" class="flex flex-col items-center">
          <div class="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img :src="t.avatar" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <div class="text-center font-bold text-indigo-500 md:text-lg">{{ t.name }}</div>
            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{{ t.jobTitle }}</p>
          </div>
        </div>

        <!-- person - end -->
      </div>
      <h3 class="border-t pt-5 mb-4 lg:ml-20 ml-10  text-lg font-bold text-gray-800 md:mb-6 lg:text-xl">往届队员</h3>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        <!-- person - start -->
        <div v-for="t in formerMembers" class="flex flex-col items-center">
          <div class="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img :src="t.avatar" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <div class="text-center font-bold text-indigo-500 md:text-lg">{{ t.name }}</div>
            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{{ t.jobTitle }}</p>
          </div>
        </div>

        <!-- person - end -->
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>

</style>

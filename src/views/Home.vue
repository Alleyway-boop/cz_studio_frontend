<template>
  <!--  <div class="grid grid-rows-[2fr_2fr_1fr]">-->
  <div class="grid ">
    <div class="bg-white">
      <Header />
      <section
        class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg py-16 shadow-lg md:py-20 xl:py-48">
        <!-- image - start -->
        <!-- <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />-->
        <video muted autoplay="autoplay" loop="loop"
          src=" https://yixiaoyuan-1328425467.cos.ap-nanjing.myqcloud.com/chzc-team/professionalintroduction.mp4"
          class="absolute inset-0 h-full w-full object-cover object-center">
        </video>
        <!-- image - end -->

        <!-- overlay - start -->
        <div class="absolute inset-0  mix-blend-multiply"></div>
        <!-- overlay - end -->
        <!-- text start -->
        <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">软件集训队</p>
          <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            软件开发与系统集成工作室</h1>
          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center ">
            <a href="/applyTeam"
              class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base w-2/5 mx-auto  ">加入我们</a>
            <!--                        <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">更多</a>-->
          </div>
        </div>
        <!-- text end -->
      </section>
    </div>
    <Competition />
    <Awards />
    <About />
    <!--    <Exhibition/>-->
    <Excellent />
    <Footer />
  </div>

</template>
<script setup>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Competition from "@/components/Competition"
import Exhibition from "@/components/Exhibition"
import Awards from "@/components/Awards";
import About from "@/components/About";
import Excellent from "@/components/Excellent";
</script>
<style scoped></style>

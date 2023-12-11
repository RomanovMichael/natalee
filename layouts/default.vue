<template>
  <div class="main">
    <Preloader :critical="true"/>
    <div class="main-mask__wrap">
      <div class="main-mask --mob">
        <video class="video-bg" muted loop playsinline webkit-playsinline controls="false">
          <source src="/mbbg.mp4" />
        </video>
      </div>
    </div>
    <Header />
    <Nuxt class="main-content" />
    <Popups />
  </div>
</template>

<script>
// import Vue from 'vue'
// var VueScrollTo = require('vue-scrollto');
// Vue.use(VueScrollTo)
// import GSAPScrollSmoother from "~/components/GSAPScrollSmoother";

export default {
  // GSAPScrollSmoother,
  mounted() {

    const video = document.getElementsByClassName('video-bg');
    setTimeout(()=> {
      video.play()
    }, 3000)
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
};
</script>

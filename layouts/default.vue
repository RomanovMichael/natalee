<template>
  <div class="main">
    <Preloader :critical="true"/>
    <div class="main-mask__wrap">
      <div class="main-mask --mob">
        <video class="video-bg" autoplay muted loop playsinline webkit-playsinline controls="false">
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

export default {
  mounted() {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
};
</script>

<style>

@media screen and (max-width:991px) {
  .video-bg {
    display: none !important; 
  }
}

</style>

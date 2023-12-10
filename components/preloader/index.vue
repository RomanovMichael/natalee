<template>
  <div class="preloader flex --align-center --just-center">
    <div class="preloader__title-wrap">
      <div class="preloader__title">NATALEE ROMANOVA</div>
      <div class="preloader__subtitle">permanent make up</div>
      <div class="preloader__line"></div>
    </div>
    <div class="preloader__percents">
        <span id="percents">0</span> %
    </div>
    <div class="preloader__shade"></div>
  </div>
</template>
<style>
@import "@/components/preloader/preloader.css";
</style>
<script>
import SVGLogo from "~/assets/img/ui/logo-preloader-1.svg?inline";
export default {
  components: {
    SVGLogo,
  },
  methods: {
    animationFadeIn(selector, delay) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        delay: delay,
        // duration: 0.25,
        opacity: 0,
        ease: "power4.in-out",
      });
    },
    animationFadeOut(selector, delay) {
      const gsap = this.$gsap;
      gsap.to(selector, {
        delay: delay,
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
      });
    },
    splitText() {
      const tl = this.$gsap.timeline();

      tl.to(".preloader__title", {
        delay: 1,
        duration: 0.375,
        yPercent: -100,
        ease: "power4.out",
      }).fromTo(
        ".preloader__subtitle",
        {
          duration: 1,
          yPercent: 100,
        },
        {
          yPercent: -100,
        },
        1.1
      );
      // .to('.preloader__title-wrap', {
      //     xPercent: -13,
      //     delay: 1,
      //     duration: 1.125
      // })
    },
    fade() {
      this.$gsap.timeline().to(".preloader", {
        // delay: 100,
        delay: 3.25,
        yPercent: -100,
        ease: "power1.inOut",
        duration: 1.25,
      });

      setTimeout(() => {
        document.querySelector("body").classList.remove("js-no-scroll");
      }, 1600);
    },
    preloaderProgress() {
      const preloaderPercents = document.querySelector("#percents");
      const mediaFiles = document.querySelectorAll("img", "video");
      let i = 0;
      Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
          i++;
          preloaderPercents.innerHTML = ((i * 100) / mediaFiles.length);
        };
      });
    },
  },

  beforeMount() {
    document.querySelector("body").classList.add("js-no-scroll");
  },
  mounted() {
    this.preloaderProgress();
    this.splitText();
    // this.animationFadeIn('.preloader__bounce', 1.3)
    // this.animationFadeOut('.preloader__bounce', 3.5)
    this.fade();
  },
};
</script>
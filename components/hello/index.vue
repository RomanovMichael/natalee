<template>
  <section class="hello">
    <div class="hello__row --desk">
      <span class="h1 hello__row-title js-row-dsk-top"
        ><span class="hello__row-subtitle">только</span>натуральный</span
      >
      <span class="h1 hello__row-title js-row-dsk-mid">перманентный</span>
      <span class="h1 hello__row-title js-row-dsk-bot"
        >макияж
        <span class="hello__row-subtitle-block">
          <span class="hello__row-subtitle">Красивые</span>
          <span class="hello__row-subtitle text-wrapper">
            <span class="animated-words">
              <span>брови</span>
              <span>губы</span>
              <span>веки</span>
            </span>
          </span>
          <span class="hello__row-subtitle">в Крыму</span>
        </span>
      </span>
    </div>
    <div class="hello__container center-wrap">
      <span class="hello__row-subtitle-block --mob">
        <span class="hello__row-subtitle">Красивые</span>
        <span class="hello__row-subtitle text-wrapper">
          <span class="animated-words">
            <span>брови</span>
            <span>губы</span>
            <span>веки</span>
          </span>
        </span>
        <span class="hello__row-subtitle">в Крыму</span>
      </span>
      <div class="hello__marquee ticker">
        <div class="hello__marquee-wrap --top">
          <div class="hello__marquee-row ticker__wrapper">
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
            <div class="ticker__item">натуральный -</div>
          </div>
        </div>
        <div class="hello__marquee-wrap --mid">
          <div class="hello__marquee-row --reverse ticker__wrapper">
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
            <div class="ticker__item">перманентный -</div>
          </div>
        </div>
        <div class="hello__marquee-wrap --bot">
          <div class="hello__marquee-row ticker__wrapper">
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
            <div class="ticker__item">макияж -</div>
          </div>
        </div>
      </div>
      <ScrollDownSvg class="hello__scrolldown" />

      <a
        target="_blank"
        href="https://t.me/nataleeromanova"
        class="hello__btn flex --align-center --just-center"
      >
        <span>Записаться</span>
      </a>
    </div>
  </section>
</template>

<script>
import ScrollDownSvg from "~/assets/img/scroll-white.svg?inline";
export default {
  components: { ScrollDownSvg },
  methods: {
    // animationSideTitle(selector, to, start){
    //     const gsap = this.$gsap;
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: selector,
    //             start: "-100px top",
    //             // end: "bottom bottom",
    //             end: "400px",
    //             scrub: true,
    //             // markers: true,
    //         }
    //     }).to(selector, {
    //         xPercent: to,
    //         opacity: .5,
    //     });
    // },
    // animationLine(delay){
    //     const gsap = this.$gsap;
    //     gsap.from('.hello__animated-line', {
    //         backgroundColor: '#000000',
    //         width: 0,
    //         duration: 1,
    //         delay: delay,
    //         ease: 'ciric'
    //     });
    // },

    animationSubtitile(selector, delay) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        delay: delay,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
      });
    },
    zoomBtn() {
      const gsap = this.$gsap;
      gsap.from(".hello__btn", {
        delay: 5.5,
        duration: 0.85,
        scale: 0.65,
        opacity: 0,
        ease: "back",
      });
    },
    animationFadeScrolldown(selector, delay) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        delay: delay,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
      });
    },
    animationFadeOutScrolldown(selector, delay) {
      const gsap = this.$gsap;
      gsap.to(selector, {
        delay: delay,
        duration: 0.47,
        opacity: 0,
        ease: "power4.out",
      });
    },
    animationHeight(selector,delay) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        delay:delay,
        height: 0,
        duration: 1.5,
        ease: "power4.out"
      })
    },
    animationBounce(selector, delay, value) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        xPercent: value,
        delay: delay,
        duration: 1.5,
        ease: "power4.out",
      });
    },
    // animationTitle(delay){
    //     const gsap = this.$gsap;
    //     let tl = gsap.timeline();
    //     gsap.set('.hello__title', {
    //         perspective: 400
    //     });

    //     tl.from('.hello__title', {
    //         delay: 5,
    //         duration: 1.25,
    //         stagger: 0.065,
    //         opacity: 0,
    //         yPercent: 100,
    //         ease: "power4.out",
    //     });
    // },
  },
  mounted() {
    // this.animationTitle(2.2);

    this.animationBounce(".js-row-dsk-top", 4.6, -5);
    this.animationBounce(".js-row-dsk-mid", 4.6, 5);
    this.animationBounce(".js-row-dsk-bot", 4.6, -5);
    this.zoomBtn();
    this.animationFadeScrolldown('.hello__scrolldown' , 7);
    this.animationFadeOutScrolldown('.hello__scrolldown' , 9.7);
    this.animationHeight('.hello__marquee-wrap.--bot', 4.6);
    this.animationHeight('.hello__marquee-wrap.--mid', 4.8);
    this.animationHeight('.hello__marquee-wrap.--top', 5);

    this.animationSubtitile('.hello__row-subtitle-block.--mob', 4.6)
  },
};
</script>

<style>
@import "@/components/hello/__hello.css";
</style>

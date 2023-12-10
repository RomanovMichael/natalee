<template>
  <header class="header">
    <div
      class="center-wrap header__container flex --align-center --just-space --desk"
    >
      <div class="header__side --left">
        <h1 class="header__logo">
          <a class="header__logo-link" href="#">Natalee.Romanova</a>
        </h1>
      </div>
      <div class="header__side --center">
        <nav class="header__nav">
          <ul class="header__nav-list flex --align-center --gap-16">
            <li>
              <a
                class="header__nav-item"
                href="#"
                @click.prevent="scrollTo('products')"
                >Услуги и цены</a
              >
            </li>
            <li>
              <a
                class="header__nav-item"
                href="#"
                @click.prevent="scrollTo('FAQ')"
                >Вопрос ответ</a
              >
            </li>
            <li>
              <a
                class="header__nav-item"
                href="#"
                @click.prevent="scrollTo('contacts')"
                >Контакты</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__side --right">
        <a href="tel:+79786039342" target="_blank" class="header__phone"
          >+7 (978) 603 93 42</a
        >
      </div>
    </div>
    <div
      class="center-wrap header__container flex --align-center --just-space --mob"
    >
      <div class="header__burger-wrap">
        <div
          :class="{ 'is-open': $store.state.menu.is_open == true }"
          class="header__burger-btn flex --just-center --align-center"
          @click="openMenu()"
        >
          <div class="burder-btn__wrap">
            <div class="burger-btn__line"></div>
            <div class="burger-btn__line"></div>
          </div>
        </div>
      </div>
                <h1 class="header__logo">
          <a class="header__logo-link" href="#">Natalee.Romanova</a>
        </h1>
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <HeaderMenu v-show="$store.state.menu.is_open == true"></HeaderMenu>
    </transition>
  </header>
</template>

<script>

export default {
  methods: {
    animationFade(selector, delay) {
      const gsap = this.$gsap;
      gsap.from(selector, {
        delay: delay,
        duration: 2,
        opacity: 0,
        ease: "power4.out",
      });
    },
    showOnScrollUp() {
      const gsap = this.$gsap;
      const header = document.querySelector(".header");

      const showAnimation = gsap
        .from(header, {
          yPercent: -200,
          paused: true,
          duration: 0.3,
        })
        .progress(1);

      this.$ScrollTrigger.create({
        start: function () {
          return `1px top`;
        },
        end: "max",
        // markers: true,
        onEnter: () => {
          setTimeout(() => {
            this.$store.dispatch("menuCssClass", "is-scroll");
          }, 200);
        },
        onLeaveBack: () => {
          this.$store.dispatch("menuCssClass", "");
        },
        onUpdate: (self) => {
          if (self.isActive) {
            if (self.direction == -1) {
              showAnimation.play();
              header.classList.add("is-scroll");
            } else {
              showAnimation.reverse();
              header.classList.remove("is-scroll");
            }
          } else {
            showAnimation.play();
            header.classList.add("is-scroll-end");
          }
        },
      });
    },

    openMenu: function (e) {
      this.$store.dispatch("menuToggle", e);
    },
    beforeEnter(el) {
      this.$gsap.set(el, {
        yPercent: 100,
      });
    },
    enter(el, done) {
      document.querySelector("body").classList.add("js-no-scroll");
      this.$gsap.to(el, {
        yPercent: 0,
        duration: 0.56,
        ease: "power4.out",
        onComplete: done,
      });
    },
    leave(el, done) {
      document.querySelector("body").classList.remove("js-no-scroll");

      this.$gsap.to(el, {
        yPercent: 100,
        duration: 0.56,
        ease: "power3.out",
        onComplete: done,
      });
    },
    scrollTo(id) {
      // let timeOut = this.$route.name !== this.path ? 500 : 50;
      let timeOut = 50;
      setTimeout(() => {
        this.$gsap.to(window, { duration: 0.56, scrollTo: "#" + id });
      }, timeOut);
      document.querySelector("body").classList.remove("js-no-scroll");
      this.openMenu(false);
    },
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        this.path = to.name;
        document.querySelector("body").classList.remove("js-no-scroll");
        this.$store.dispatch("menuToggle", false);
      }, 1);
    },
  },
  async mounted() {
    this.$gsap.delayedCall(0.01, this.showOnScrollUp);
    this.animationFade(".header__logo", 5.7);
    this.animationFade(".header__nav", 5.7);
    this.animationFade(".header__phone", 5.7);
     this.animationFade(".header__burger-wrap", 5.7);
    // console.log(this.$ScrollTrigger);
  },
};
</script>
<style src="~/components/header/__header.css" lang="css"></style>
<template>
  <div class="full-menu__wrap flex --align-center">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <div
        v-show="$store.state.menu.is_open == true"
        class="full-menu__side --span-6 flex --direction-column --just-space center-wrap"
      >
        <div
          class="full-menu__section-wrap flex --align-center col center-wrap"
        >
          <transition
            v-on:before-enter="beforeEnterMenu"
            v-on:enter="enterMenu"
            v-on:leave="leaveMenu"
            v-bind:css="false"
          >
            <div class="center-wrap">
              <div class="full-menu__section-link" @click="scrollTo('about')">
                Обо мне
              </div>
              <div class="full-menu__section-link" @click="scrollTo('prducts')">
                Услуги и цены
              </div>
              <div class="full-menu__section-link" @click="scrollTo('FAQ')">
                Вопрос ответ
              </div>
              <div
                class="full-menu__section-link"
                @click="scrollTo('contacts')"
              >
                Контакты
              </div>
            </div>
          </transition>
        </div>
                      <div class="full-menu__socials flex --align-center --gap-24">
                <a
                  target="_blank"
                  href="https://vk.com/natalee.brows"
                  class="full-menu__socials-item"
                >
                  <VkSvg />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/nataleeroman"
                  class="full-menu__socials-item"
                >
                  <TgSvg />
                </a>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=79267030363&text=Здравствуйте, Натали!"
                  class="full-menu__socials-item"
                >
                  <WhaSvg />
                </a>
              </div>
      </div>
    </transition>
    <!-- <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
            <div v-show="($store.state.menu.is_open == true)" class="full-menu__decore flex --align-end --span-6"></div>
        </transition> -->
  </div>
</template>
<script>
import TgSvg from "~/assets/img/svg/tg.svg?inline";
import WhaSvg from "~/assets/img/svg/whatsappIcon.svg?inline";
import TellSvg from "~/assets/img/svg/telIcon.svg?inline";
import VkSvg from "~/assets/img/svg/vk.svg?inline";

export default {
  data() {
    return {
      path: "",
    };
  },
  components: { TgSvg, WhaSvg, TellSvg, VkSvg },
  computed: {},
  methods: {
    scrollTo(id) {
      let timeOut = this.$route.name !== this.path ? 500 : 50;

      setTimeout(() => {
        this.$gsap.to(window, { duration: 0.56, scrollTo: "#" + id });
      }, timeOut);

      document.querySelector("body").classList.remove("js-no-scroll");

      this.openMenu(false);
    },
    hideMenu(path) {
      if (path === window.location.pathname) {
        this.openMenu(false);
      }
    },
    scrollTo(id) {
      let timeOut = this.$route.name !== this.path ? 500 : 50;

      setTimeout(() => {
        this.$gsap.to(window, { duration: 0.56, scrollTo: "#" + id });
      }, timeOut);

      document.querySelector("body").classList.remove("js-no-scroll");

      this.openMenu(false);
    },
    openMenu: function (e) {
      this.$store.dispatch("menuToggle", e);
    },
    beforeEnterMenu(el) {},
    enterMenu(el, done) {},
    leaveMenu(el, done) {},
    beforeEnter(el) {
      this.$gsap.set(el, {
        yPercent: 7,
        opacity: 0,
      });
    },
    enter(el, done) {
      document.querySelector("body").classList.add("js-no-scroll");
      this.$gsap.to(el, {
        yPercent: 0,
        duration: 1,
        delay: 0.32,
        opacity: 1,
        ease: "power4.out",
        onComplete: done,
      });
    },
    leave(el, done) {
      document.querySelector("body").classList.remove("js-no-scroll");
      this.$gsap.to(el, {
        yPercent: 5,
        duration: 0.56,
        opacity: 0,
        ease: "power3.out",
        onComplete: done,
      });
    },
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        console.log(to, from);

        this.path = to.name;
      }, 1);
    },
  },
};
</script>

<style>
@import "@/components/header/__fullmenu.css";
</style>

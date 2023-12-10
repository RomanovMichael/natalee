<template>
  <div class="popup" style="display:block;">
    <div class="popup__wrap">
      <div class="popup__content col" v-bind:class="'--' + col">
        <div class="popup__close close-btn" v-on:click="hide()"></div>
        <div class="popup__content-wrapper">
          <slot></slot>
        </div>
      </div>
      <div class="popup__shade animated fadeIn" v-on:click="hide()"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['col'],
    methods: {
      hide: function () {
        this.$store.dispatch('popup', '');
        document.body.classList.remove('js-no-scroll');
      },
      escHandler: function (evt) {
        if (evt.key === 'Escape') {
          this.hide();
        }
      }
    },
    mounted: function () {
      document.body.classList.add('js-no-scroll');
      // document.addEventListener('keydown', this.escHandler);
    },
    destroyed: function () {
      // document.removeEventListener('keydown', this.escHandler);
    }
  }
</script>

<style src="~/components/popup/__popup.css" lang="css"></style>

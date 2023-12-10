<template>
  <input type="text"
         placeholder="+7 (___) ___-__-__"
         inputmode="tel"
         v-on:input="changePhone"
         v-model="phoneValue">
</template>
<script>
  export default {
    data: function () {
      return {
        phoneValue: ''
      };
    },
    methods: {
      changePhone: function () {
        const mask = '+7 (###) ###-##-##';

        let oldValue = this.phoneValue;
        oldValue = oldValue.trim();

        if (oldValue[0] === '7' || oldValue[0] === '8') {
          oldValue = '+7' + oldValue.slice(1);
        }

        let oldValueNumber = oldValue.replace(/[^0-9]/g, '');

        if (oldValueNumber[0] === '7') {
          oldValueNumber = oldValueNumber.slice(1);
        }

        let newValue = '';

        for (let i = 0; i < mask.length; i++) {
          if (mask[i] !== '#' && mask[i] === oldValue[i]) {
            newValue += mask[i];
            continue;
          }

          if (mask[i] !== '#' && oldValueNumber.length) {
            newValue += mask[i];
            continue;
          }

          if (mask[i] === '#' && oldValueNumber.length) {
            newValue += oldValueNumber[0];
            oldValueNumber = oldValueNumber.slice(1);
          }
        }

        this.phoneValue = newValue;
      }
    }
  }
</script>

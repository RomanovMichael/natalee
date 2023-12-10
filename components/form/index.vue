<template>
  <form action="#" v-on:submit.prevent="submit" novalidate>
    <slot></slot>
  </form>
</template>
<script>
  import validator from 'validator';

  export default {
    methods: {
      validate: function() {
        const ERROR_CLASS = '--error';

        const inputList = this.$el.querySelectorAll('input');

        let hasErrors = false;

        //clear errors
        for (let i = 0; i < inputList.length; i++) {
          const input = inputList[i];

          input.parentElement.classList.remove(ERROR_CLASS);
        }

        //check required
        for (let i = 0; i < inputList.length; i++) {
          const input = inputList[i];

          if (!input.required) continue;

          if (input.type === 'checkbox') {
            if (!input.checked) {
              hasErrors = true;

              input.parentElement.classList.add(ERROR_CLASS);
            }
          }

          if (input.type !== 'checkbox') {
            if (!input.value || !input.value.trim()) {
              hasErrors = true;

              input.parentElement.classList.add(ERROR_CLASS);
            }
          }
        }

        //check tel field (by name)
        for (let i = 0; i < inputList.length; i++) {
          const input = inputList[i];

          if (input.name !== 'tel') continue;

          if (!input.value || !input.value.trim()) continue;

          if (!input.value.match(/\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/)) {
            hasErrors = true;

            input.parentElement.classList.add(ERROR_CLASS);
          }
        }

        //check email field (by name)
        for (let i = 0; i < inputList.length; i++) {
          const input = inputList[i];

          if (input.name !== 'email') continue;

          if (!input.value || !input.value.trim()) continue;

          if (!validator.isEmail(input.value)) {
            hasErrors = true;

            input.parentElement.classList.add(ERROR_CLASS);
          }
        }

        return !hasErrors;
      },
      submit: async function () {
        let isValid = this.validate();

        if (!isValid) return;

        const ERROR_CLASS = '--error';

        const formData = new FormData(this.$el);
        const inputList = this.$el.querySelectorAll('input, textarea');
        const button = this.$el.querySelector('[type="submit"]');

        try {
          //clear errors
          for (let i = 0; i < inputList.length; i++) {
            const input = inputList[i];

            input.parentElement.classList.remove(ERROR_CLASS);
          }

          if (button) {
            button.disabled = true;
          }

          const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(Object.fromEntries(formData))
          });

          const result = await response.json();
          // {status: 'error', fields: [{name: 'tel'}, ...]} - ошибка валидации
          // {status: 'error'} - что-то пошло не так
          // {status: 'ok'} - успешная отправка

          if (button) {
            button.disabled = false;
          }

          if (result.status === 'error' && 'fields' in result && result.fields.length) {
            for (let i = 0; i < inputList.length; i++) {
              const input = inputList[i];

              for (let k = 0; k < result.fields.length; k++) {
                const field = result.fields[k]; // {name: 'tel'}

                if (input.name === field.name) {
                  input.parentElement.classList.add(ERROR_CLASS);
                }
              }
            }
          }

          if (result.status === 'error' && !('fields' in result)) {
            await this.$store.dispatch('popup', 'error');
          }

          if (result.status === 'ok') {
            //clean fields
            for (let i = 0; i < inputList.length; i++) {
              const input = inputList[i];

              if (input.type === 'checkbox') continue;

              if (input.type === 'hidden') continue;

              input.value = '';
            }

            await this.$store.dispatch('popup', 'success');
          }
        } catch (error) {
          if (button) {
            button.disabled = false;
          }

          await this.$store.dispatch('popup', 'error');
        }
      }
    }
  }
</script>

<style src="~/components/form/__form.css" lang="css"></style>

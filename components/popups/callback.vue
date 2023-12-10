<template>
  	<Popup col="7">
    	<h3><b>Форма связи</b></h3>
    	<div class="order__form mt-24">
      		<Form method="post">
        		<input type="hidden" name="type" value="callback">
        		<div class="flex --just-space">
        		  	<div class="input__wrap --2-coll">
        		    	<div class="input__title mb-8 p --m">Ваше имя:</div>
        		    	<div class="input__error">error</div>
        		    	<input name="name" class="input --fill" type="text" placeholder="Ваше имя:">
        		  	</div>
        		  	<div class="input__wrap --2-coll">
        		    	<div class="input__title mb-8 p --m">Телефон:</div>
        		    	<div class="input__error">error</div>
        		    	<FormPhoneInput class="input --fill" name="tel"/>
        		  	</div>
        		</div>
        		<div class="input__wrap">
        	  		<div class="input__title mb-8 p --m">Сообщение</div>
        	  		<div class="input__error">error</div>
        	  		<textarea name="message" class="input --fill" placeholder="Введите Ваше сообщение"></textarea>
        		</div>
        		<div class="flex">
        	  		<button type="submit" class="order__btn btn --fill-1 --fix-white-bg feedback btn-success --xl">
        	    		<span>Отправить</span>
        	  		</button>
        		</div>
        		<div class="flex --just-center mt-16">
        	  		<label class="checkbox">
        	    		<input type="checkbox" checked="checked" required name="confirm">
        	    		<div class="flex --align-center">
        	      			<div class="checkbox__trigger"></div>
        	      			<div class="checkbox__label p --xs ml-16">
        	        			Даю согласие на <a v-on:click.prevent="openPolicy" href="#policy">обработку персональных данных</a>
        	      			</div>
        	    		</div>
        	  		</label>
        		</div>
   			</Form>
    	</div>
  	</Popup>
</template>

<script>
  export default {
    methods: {
      openPolicy: function () {
        this.$store.dispatch('popup', 'policy');
      }
    }
  }
</script>

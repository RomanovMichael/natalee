<template>
  <div class="page contacts pt-32" id="contacts">
    <div class="center-wrap">
      <div class="page__wrap">
        <div class="page__head --contacts-page">
          <div class="contacts__content --border flex --just-space mt-56 pt-16">
            <div class="contacts__info col --4">
              <div class="contacts__title --main contacts__title--small mr-40 h3">
                Контакты
              </div>
              <div class="contacts__item">
                <div class="contacts__image">
                  <div class="contacts__image-thumb --marker"></div>
                </div>
                <div class="contacts__data ml-32">
                  <div class="contacts__item-title">Адрес:</div>
                  <div class="contacts__item-desc p --l">
                    <span
                      >Cимферополь, Линейная улица,<br />
                      д. 2, этаж 2, каб. 220</span
                    >
                  </div>
                </div>
              </div>
              <div class="contacts__item mt-24">
                <div class="contacts__image">
                  <div class="contacts__image-thumb --phone"></div>
                </div>
                <div class="contacts__data ml-32">
                  <div class="contacts__item-title">Телефон:</div>
                  <div class="contacts__item-wrap flex --align-center">
                    <a
                      href="tel:+79786039342"
                      class="contacts__item-desc link --color-white --tel h4">+7 (978) 603 93 42</a
                    >
                  </div>
                </div>
              </div>
              <!-- <div class="contacts__item mt-24">
                <div class="contacts__image">
                  <div class="contacts__image-thumb --mail"></div>
                </div>
                <div class="contacts__data ml-32">
                  <div class="contacts__item-title">E-mail</div>
                  <a
                    href="mailto:natalee@xample.ru"
                    target="_blank"
                    class="contacts__item-desc"
                    ><h4 class="mt-0 mb-0">info@natalee.ru</h4></a
                  >
                </div>
              </div> -->
            </div>
            <div class="contacts__map --no-border col --6">
              <div class="content__map-head flex --just-end --align-center">
                <div class="contacts__title contacts__title--small mr-40 h3">
                  Схема проезда
                </div>
                <a
                  target="_blank"
                  href="https://yandex.ru/maps/?ll=35.831539%2C50.741884&mode=routes&rtext=~44.966428%2C34.085064&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MjA5NjI4NjAzEmPQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCa0YDRi9C8LCDQodC40LzRhNC10YDQvtC_0L7Qu9GMLCDQm9C40L3QtdC50L3QsNGPINGD0LvQuNGG0LAsIDIiCg0cVwhCFaDdM0I%2C&z=5.76"
                  class="content__map-print btn p-x py-18"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M10 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM5 8.2l.5-.5a1 1 0 0 1 1.4.2c.3.4.3 1-.1 1.4l-.6.4c-.9.8-1 2.2-.3 3.2a2.1 2.1 0 0 0 3 .3l5-4a4 4 0 0 1 5.7.7 4.4 4.4 0 0 1-.6 6l-1 .9a1 1 0 0 1-1.4-.1 1 1 0 0 1 .1-1.5l1-.9c1-.8 1.1-2.2.4-3.2a2.1 2.1 0 0 0-3-.3l-5 4a4 4 0 0 1-5.7-.7 4.4 4.4 0 0 1 .6-6zm4.8.5L6.3 5.2a1 1 0 0 1 .4-1.7l5-1.5A1 1 0 0 1 13 3.3l-1.5 5a1 1 0 0 1-1.7.4z"
                    ></path>
                  </svg>
                  <span class="p --l ml-18">Построить маршрут</span>
                </a>
              </div>
              <div class="contacts__ymap col --12 mt-32 mb-96">
                <ContactsMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {};
</script>

<style src="~/components/contacts/__contacts.css" lang="css"></style>
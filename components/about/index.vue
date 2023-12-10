<template>
  <section class="about" id="about">
    <div class="about__container center-wrap">
      <!-- <div class="divider">
          <div class="divider__line center-wrap"></div>
          </div> -->
      <div
        class="about__content flex --align-stretch --just-space mt-80"
      >
        <div class="about-left flex --direction-column">
          <div class="about__section-title">Обо мне</div>
          <div class="about__text-wrap">
            <p class="about__text">
              Привет, меня зовут Натали! <br>
              Я тренер и мастер перманентного макияжа.
              Любящий и знающий свое дело на протяжении 5 лет.<br><br>
              Регулярно повышаю уровень квалификации.
              Владею самыми инновационными техниками и знаниями в области ПМ.
              Принимаю в Москве и Симферополе. <br><br>
              Вкладываю душу в каждую работу. Техника и вкус позволяют сделать ПМ с учетом индивидуальных характеристик внешности, выгодно подчеркивая природную красоту.<br><br>
              Так же в моей практике множество исправлений некачественного татуажа. 
              Помогаю избавиться от синих и розовых бровей. 
              Со мной на процедуре не больно и уютно.
            </p>
          </div>
        </div>
        <div class="about__image-wrap">
          <div class="about__image image-thumb">
            <nuxt-picture
              quality="100"
              class="lazy"
              sizes="sm:641px, md:641px, lg:641px"
              format="webp"
              src="/about/master.jpg"
              alt="Мастер перманентного макияжа"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="about__marquee ticker">
      <div class="ticker__wrapper">
        <div class="ticker__item">Natalee Romanova -</div>
        <div class="ticker__item">Natalee Romanova -</div>
        <div class="ticker__item">Natalee Romanova -</div>
        <div class="ticker__item">Natalee Romanova -</div>
        <div class="ticker__item">Natalee Romanova -</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style src="~/components/about/__about.css" lang="css"></style>
<template>
    <section class="products pt-80" id="products">
        <div class="products__container center-wrap">
            <div class="products__head">
                <h2 class="products__title mt-16">Услуги и цены</h2>
            </div>
            <div class="products__list grid --temp-col-3 --gap-24 mt-40" >
                <div class="products__item">
                    <div class="products__item-card products__card">
                        <div class="products__card-tag">Губы</div>
                        <div class="products__card-mask"></div>
                        <nuxt-picture
                        quality="100"
                        class="products__card-image lazy image-thumb"
                        sizes="sm:641px, md:641px, lg:641px"
                        format="webp"
                        src="/products/lips-prod.png"
                        alt="Фото пермнентного макияжа губ"
                        />
                    </div>
                    <div class="products__item-info products__info flex --direction-column --align-stretch --gap-8">
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Первичная процедура</span>
                            <span class="rouble-wrap">8 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Коррекция ПМ</span>
                            <span class="rouble-wrap">4 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Рефреш(более 7 мес.)</span>
                            <span class="rouble-wrap">5 000 <span class="rouble">P</span></span>
                        </div>
                    </div>
                </div>
                <div class="products__item">
                    <div class="products__item-card products__card">
                        <div class="products__card-tag">Брови</div>
                        <div class="products__card-mask"></div>
                        <nuxt-picture
                        quality="100"
                        class="products__card-image lazy image-thumb"
                        sizes="sm:641px, md:641px, lg:641px"
                        format="webp"
                        src="/products/brows.jpeg"
                        alt="Фото пермнентного макияжа бровей"
                        />
                    </div>
                    <div class="products__item-info products__info flex --direction-column --align-stretch --gap-8">
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Первичная процедура</span>
                            <span class="rouble-wrap">8 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Коррекция ПМ</span>
                            <span class="rouble-wrap">4 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Рефреш(более 7 мес.)</span>
                            <span class="rouble-wrap">5 000 <span class="rouble">P</span></span>
                        </div>
                    </div>
                </div>
                <div class="products__item">
                    <div class="products__item-card products__card">
                        <div class="products__card-tag">Веки</div>
                        <div class="products__card-mask"></div>
                        <nuxt-picture
                        quality="100"
                        class="products__card-image lazy image-thumb"
                        sizes="sm:641px, md:641px, lg:641px"
                        format="webp"
                        src="/products/eyes.jpeg"
                        alt="Фото пермнентного макияжа век"
                        />
                    </div>
                    <div class="products__item-info products__info flex --direction-column --align-stretch --gap-8">
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Первичная процедура</span>
                            <span class="rouble-wrap">5 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Коррекция ПМ</span>
                            <span class="rouble-wrap">3 000 <span class="rouble">P</span></span>
                        </div>
                        <div class="products__info-row flex --align-center --just-space">   
                            <span>Рефреш(более 7 мес.)</span>
                            <span class="rouble-wrap">5 000 <span class="rouble">P</span></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>


<script>
export default {};
</script>


<style src="~/components/products/__products.css" lang="css"></style>


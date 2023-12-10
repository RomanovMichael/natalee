<template>
    <div class="services">
        <div class="services__container center-wrap">
            <div class="services__head flex --align-center">
                <div class="services__title h3">Услуги и цены</div>
             </div>
            <div class="services__list grid --temp-col-3 --gap-24 mt-24">
                <div class="services__item grid tile">
                    <div class="services__item-mask">
                        <div class="services__item-image image-thumb">
                            <nuxt-picture
                                quality="100"
                                class="lazy"
                                sizes="sm:641px, md:641px, lg:641px"
                                format="webp"
                                src="/services/1.jpeg"
                                alt="услуга"
                            />
                        </div>
                    </div>
                    <div class="services__item-content flex --direction-column --gap-16 --align-stretch">
                    <!-- <div class="services__item-head">Брови</div> -->
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Первичная процедура</div>
                            <div class="services__item-row-side">8 000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Вторичная процедура<br>(коррекция)</div>
                            <div class="services__item-row-side">5000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Рефреш <br>(обновление более 6 мес.)</div>
                            <div class="services__item-row-side">8000 руб.</div>
                        </div>
                    </div>
                </div>
                <div class="services__item grid tile">
                    <div class="services__item-mask">
                        <div class="services__item-image image-thumb">
                            <nuxt-picture
                                quality="100"
                                class="lazy"
                                sizes="sm:641px, md:641px, lg:641px"
                                format="webp"
                                src="/services/2.jpeg"
                                alt="услуга"
                            />
                        </div>
                    </div>
                    <div class="services__item-content flex --direction-column --gap-16 --align-stretch">
                    <!-- <div class="services__item-head">Брови</div> -->
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Первичная процедура</div>
                            <div class="services__item-row-side">8 000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Вторичная процедура<br>(коррекция)</div>
                            <div class="services__item-row-side">5000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Рефреш <br>(обновление более 6 мес.)</div>
                            <div class="services__item-row-side">8000 руб.</div>
                        </div>
                    </div>
                </div>
                <div class="services__item grid tile">
                    <div class="services__item-mask">
                        <div class="services__item-image image-thumb">
                            <nuxt-picture
                                quality="100"
                                class="lazy"
                                sizes="sm:641px, md:641px, lg:641px"
                                format="webp"
                                src="/services/3.jpeg"
                                alt="услуга"
                            />
                        </div>
                    </div>
                    <div class="services__item-content flex --direction-column --gap-16 --align-stretch">
                    <!-- <div class="services__item-head">Брови</div> -->
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Первичная процедура</div>
                            <div class="services__item-row-side">8 000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Вторичная процедура<br>(коррекция)</div>
                            <div class="services__item-row-side">5000 руб.</div>
                        </div>
                        <div class="services__item-row flex --align-center --just-space">
                            <div class="services__item-row-side">Рефреш <br>(обновление более 6 мес.)</div>
                            <div class="services__item-row-side">8000 руб.</div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style src="~/components/services/__services.css" lang="css"></style>

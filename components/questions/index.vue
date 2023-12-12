<template>
    <div class="questions tile--gray center-wrap flex --just-center tile" id="FAQ">
        <div class="questions__container col --12">
            <div class="questions__head">
                <div class="questions__title section-title">Часто задаваемые вопросы</div>
            </div>
            <div class="questions__list grid">
                <div class="questions__list-col --left">
                    <div :class="{'is-open' : isOpen.includes(item.id)}" class="questions__item tile-min tile" v-for="(item, index) in questions.leftColQuestionsArr" :key="index">
                        <div  v-on:click="openMenu(item.id)" class="questions__item-clicker flex --just-space --align-center">
                            <div class="questions__item-text col --auto"  v-if="item.question" v-html="item.question"></div>
                            <div class="questions__item-btn"></div>
                        </div>
                        <div class="questions__item-dropdown" >
                            <div class="questions__item-dropdown-inner p --l" v-if="item.answer" v-html="item.answer">
                            </div>
                        </div>
                    </div>
                    <div :class="{'is-open' : isOpen.includes(item.id)}" class="questions__item tile-min tile" v-for="(item, index) in questions.rightColQuestionsArr" :key="index">
                        <div v-on:click="openMenu(item.id)" class="questions__item-clicker flex --just-space --align-center">
                            <div class="questions__item-text col --auto" v-if="item.question" v-html="item.question"></div>
                            <div class="questions__item-btn"></div>
                        </div>
                        <div class="questions__item-dropdown">
                            <div class="questions__item-dropdown-inner p --l" v-if="item.answer" v-html="item.answer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                device: 'desktop',
                isOpen: [],
                questions: {
                    leftColQuestionsArr: [
                        {
                            id: 1,
                            question: 'Сколько длится процедура?',
                            answer: 'В среднем, процедура длится 1,5  часа.'
                        },
                        {   
                            id: 2,
                            question: 'Как готовиться к процедуре?',
                            answer: 'Современный перманентный макияж не требует от вас какой-то особенной предварительной подготовки. Необходимо лишь учитывать ваши индивидуальные противопоказания, которые необходимо обсудить с мастером до начала процедуры.'
                        },
                        {   
                            id: 3,
                            question: 'Сколько держится пигмент?',
                            answer: 'Эффект напыления может сохраняется до полутора-двух лет. Качественно нанесенный пигмент исчезает незаметно и равномерно, без каких-либо пятен. При желании через 7 - 9 месяцев вы можете повторить процедуру. Особенности вашего организма и образ жизни – два основных фактора, влияющие на длительность сохранности перманента, тут все очень индивидуально.'
                        }                    
                    ],
                    rightColQuestionsArr: [
                        {   
                            id: 4,
                            question: 'Как долго продолжается процесс заживления?',
                            answer: 'Процесс заживления длится примерно неделю, далее в течении месяца пигмент проявляется и стабилизируется, полностью конечный результат будет виден, примерно, спустя месяц после коррекции.'
                        },
                        {   
                            id: 5,
                            question: 'Если ли какие-нибудь противопоказания?',
                            answer: '- беременность и период вскармливания грудью,<br> - онкология,<br> - острые воспалительные процессы в организме,<br> - низкий уровень свёртываемости крови,<br> - предрасположенность к образованию рубцов, <br> - cахарный диабет с инсулиновой зависимостью.'
                        }
                    ]
                }
            }
        },
        methods: { 
            openMenu(id) {
                const indexId = this.isOpen.indexOf(id);
                const dropdownsArr = document.querySelectorAll('.questions__item-dropdown');
                if (indexId !== -1) {
                    this.isOpen.splice(indexId, 1)
                    this.$gsap.to(dropdownsArr[id - 1], {height: 0});
                } else {
                    this.isOpen.push(id)
                    this.$gsap.set(dropdownsArr[id - 1], {height: 'auto'});
                    this.$gsap.from(dropdownsArr[id - 1], {height: 0});
                }
            },
            openPopup(popup) {
                this.$store.dispatch('popup', popup);
            },
        },
        async mounted() {
            this.device = window.innerWidth <= 991 ? 'mobile' : 'desktop';
        }
    }
</script>

<style>
    @import "@/components/questions/__questions.css";
</style>
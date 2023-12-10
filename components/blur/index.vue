<template>
    <div class="page-head__blur">
            <svg viewBox="0 0 1261 1092" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <g opacity="0.3" filter="url(#filter0_f)">
            <ellipse cx="660.612" cy="496.497" rx="294.912" ry="360.612" transform="rotate(-90 660.612 496.497)" fill="#F52536"/>
            </g>
            <g opacity="0.2" filter="url(#filter1_f)">
            <ellipse cx="1022.17" cy="496.497" rx="294.912" ry="360.612" transform="rotate(-90 1022.17 496.497)" fill="#8125F5"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f" x="0" y="-98.4155" width="1321.22" height="1189.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter1_f" x="361.557" y="-98.4153" width="1321.22" height="1189.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur"/>
            </filter>
            </defs>
            </svg>
    </div>
</template>

<script>


    export default {
        name: "page-head-blur",
        components: {
        },
        methods: {
            // Анимация bg
            animation() {
                const gsap = this.$gsap;

                gsap.to('.page-head__blur', {
                    x: 120,
                    duration: 2,
                    repeat: -1,
                    repeatDelay: 0.2,
                    yoyo: true
                });
            }
        },
        mounted() {
            this.$gsap.delayedCall(0.001, this.animation);
        }
    }
</script>

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Romanova Permanent Make Up',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'swiper/swiper-bundle.min.css',
    // '@fancyapps/ui/dist/fancybox.css',
    'animate.css',
    '~/assets/css/atoms/__atoms.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    'nuxt-gsap-module',
    //  "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@ax2/lozad-module',
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  image: {
    // скорректировать для lozad
    // - node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue
    // скорректировать для lozad
    // - node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue
    dir: 'assets/img',
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    screens: {
      mob: 375,
      tablet: 768,
      pc: 1440,
    },
  },
  lozad: {
    selector: '.lazy',
    observer: true,
    polyfill: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  gsap: {
    clubPlugins: {
      // scrollSmoother: true,
      // drawSVG: true,
      // splitText: true,
    },
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      // flip: true
    },
  },
  pageTransition: {
		name: 'page',
		mode: 'out-in',
		duration: 100,

		beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        y: 60,
      });

			document.body.classList.add('page-entering');
		},

    enter(el, done) {
      this.$gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: .56,
        ease: 'power2.inOut',
        onComplete: done
      });
    },

    leave(el, done) {
      this.$gsap.to(el, {
        y: 25,
        opacity: 0,
        duration: .24,
        ease: 'power2.inOut',
        onComplete: done
      });
    },

		afterEnter(el) {
			this.$nuxt.$emit('refresh-scroll');
			this.$nuxt.$emit('start-scroll');

			setTimeout(() => {
				document.body.classList.remove('page-transitioning', 'page-entering');
			}, 50);
		},

		beforeLeave(el) {
			this.$nuxt.$emit('stop-scroll');
			document.body.classList.add('page-transitioning', 'page-leaving');
		},

		afterLeave(el) {
			document.body.classList.remove('page-leaving');
			this.$nuxt.$emit('reset-scroll');
		}
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}

export default {
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
  css: [
    // 'swiper/swiper-bundle.min.css',
    // '@fancyapps/ui/dist/fancybox.css',
    'animate.css',
    '~/assets/css/atoms/__atoms.css'
  ],
  plugins: [
  ],
  components: true,
  target: 'static',
  buildModules: [
    '@nuxt/image',
    'nuxt-gsap-module',
  ],
  modules: [
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
  axios: {
    baseURL: '/',
  },
  sitemap: {
    hostname: 'https://nataleeromanova.vercel.app/',
    path: '/sitemap.xml',
    sitemaps: [
      {
        path: '/sitemap.xml',
        changefreq: 'weekly',
        lastmod: new Date(),
        exclude: ['/'],
        filter ({ routes, options}) {
          return routes.map(route => {

            if (smMapping[route.path]) {
              if (smMapping[route.path][0]) route.priority = smMapping[route.path][0];
              if (smMapping[route.path][1]) route.lastmod = smMapping[route.path][1];
            }
            
            route.changefreq = 'weekly';
            
            return route
          })
        }
      }
    ]
  },
  gsap: {
    clubPlugins: {
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
  build: {
  },
}

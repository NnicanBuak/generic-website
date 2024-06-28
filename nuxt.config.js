// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['nuxt-swiper'],
	serverMiddleware: [
    { path: '/api/places/:id', handler: '~/middleware/checkAccess.js' },
    { path: '/api/places', handler: '~/middleware/checkAccess.js' },
  ],
})

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/api/places/:id' || to.path === '/api/places/:id') {
    return navigateTo('/')
  }
})

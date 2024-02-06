<template>
  <nav
    class="backdrop-blur-xl bg-darkblue fixed w-full h-16 z-20 top-0 start-0 border-b border-black"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> -->
      <span class="self-center text-green text-3xl font-sans font-bold whitespace-nowrap"
        >NPA-Lab</span
      >
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <RouterLink to="/forms">
        <button
          type="button"
          class="group text-white focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-white hover:text-green transition-colors duration-200 ease-in-out"
        >
          <IconPlus
            class="text-white group-hover:text-green transition-colors duration-200 ease-in-out"
          />
        </button>
        </RouterLink>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 text-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-white hover:text-green hover:border-b-2 hover:border-green transition-border duration-75 ease-in hover:scale-105 delay-125  md:bg-transparent md:text-green-700 md:p-0 "
              aria-current="page"
              >Dashboard</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/forms"
              class="block py-2 px-3 text-white hover:text-green hover:border-b-2 hover:border-green transition-border duration-75 ease-in hover:scale-105 delay-125  md:bg-transparent md:text-green-700 md:p-0"
            >
              Eingabeformular</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block py-2 px-3 text-white hover:text-green hover:border-b-2 hover:border-green transition-border duration-75 ease-in hover:scale-105 delay-125  md:bg-transparent md:text-green-700 md:p-0"
            >
              About</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconPlus from '../atoms/IconPlus.vue'

export default {
  name: 'NavigationBar',
  components: { IconPlus, RouterLink }
}
</script>

<style scoped></style>

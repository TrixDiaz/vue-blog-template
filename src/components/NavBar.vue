<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const menuOpen = ref(false);
const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.path);


const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <nav class="absolute bg-black bg-opacity-20 w-full z-50">
    <div class="flex flex-wrap items-center justify-between mx-auto md:mx-8 p-4">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-lg font-spartan uppercase font-semibold whitespace-nowrap text-white">Runo</span>
      </RouterLink>
      <button @click="toggleMenu" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div :class="menuOpen ? 'block' : 'hidden'" class="w-full divide-x-2 md:block md:w-auto" id="navbar-default">
        <ul
        :class="menuOpen ? 'bg-gray-500 z-50' : 'bg-transparent'"
          class="font-roboto font-semibold text-sm flex flex-col justify-center items-center p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <RouterLink :to="'/'" :class="{'capitalize block py-2 px-2 border-b-2 text-yellow-600 border-yellow-600': currentRoute === '/', 'capitalize block py-2 px-2 text-white': currentRoute !== '/'}">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="'/about'" :class="{'capitalize block py-2 px-2 border-b-2 text-yellow-600 border-yellow-600': currentRoute === '/about', 'capitalize block py-2 px-2 text-white': currentRoute !== '/about'}">About</RouterLink>
          </li>
          <li>
            <RouterLink :to="'/blog-post'" :class="{'capitalize block py-2 px-2 border-b-2 text-yellow-600 border-yellow-600': currentRoute === '/blog-post', 'capitalize block py-2 px-2 text-white': currentRoute !== '/blog-post'}">Article</RouterLink>
          </li>
          <li>
            <RouterLink :to="'/contact'" :class="{'capitalize block py-2 px-2 border-b-2 text-yellow-600 border-yellow-600': currentRoute === '/contact', 'capitalize block py-2 px-2 text-white': currentRoute !== '/contact'}">Contact Us</RouterLink>
          </li>
          <ul
            class="font-medium flex flex-row justify-center space-x-4 md:p-0 md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <RouterLink to="#" class="capitalize block py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                  <g fill="#ffffff">
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z">
                      </path>
                    </g>
                  </g>
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="#" class="capitalize block py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                  <g fill="#ffffff">
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z">
                      </path>
                    </g>
                  </g>
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="#" class="capitalize block py-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z">
                      </path>
                    </g>
                  </g>
                </svg>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="#" class="capitalize block py-2 px-2 md:border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M44.75,4h-33.5c-3.034,0 -5.5,2.466 -5.5,5.5v33c0,3.034 2.466,5.5 5.5,5.5h33c3.034,0 5.5,-2.466 5.5,-5.5v-33c0,-3.034 -2.466,-5.5 -5.5,-5.5zM24.5,38c-7.732,0 -14,-6.268 -14,-14c0,-7.732 6.268,-14 14,-14c7.732,0 14,6.268 14,14c0,7.732 -6.268,14 -14,14zM40,14.5c-1.15,0 -2.083,-0.933 -2.083,-2.083c0,-1.15 0.933,-2.083 2.083,-2.083c1.15,0 2.083,0.933 2.083,2.083c0,1.15 -0.933,2.083 -2.083,2.083zM32,24.5c0,4.142 -3.358,7.5 -7.5,7.5c-4.142,0 -7.5,-3.358 -7.5,-7.5c0,-4.142 3.358,-7.5 7.5,-7.5c4.142,0 7.5,3.358 7.5,7.5z">
                      </path>
                    </g>
                  </g>
                </svg>
              </RouterLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<template>
  <carousel :items-to-show="1">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide image" class="w-screen carousel-image">
    </slide>

    <template #addons>
      <pagination />
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const images = ref([
      '/images/carousel1.png',
      '/images/carousel2.png',
      '/images/carousel3.png',
    ])

    return {
      images,
    }
  }
}
</script>

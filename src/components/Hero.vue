<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const images = [
    '/images/carousel1.png',
    '/images/carousel2.png',
    '/images/carousel3.png'
];
const currentIndex = ref(0);

const backgroundImage = computed(() => `url(${images[currentIndex.value]})`);

let intervalId;

const startCarousel = () => {
    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
    }, 3000); // Change image every 3 seconds
};

const stopCarousel = () => {
    clearInterval(intervalId);
};

onMounted(() => {
    startCarousel();
});

onUnmounted(() => {
    stopCarousel();
});

const changeSlide = (index) => {
    currentIndex.value = index;
};
</script>

<template>
    <section
        :style="{ backgroundImage: backgroundImage }"
        class="bg-center bg-no-repeat bg-cover relative h-full flex items-center justify-center md:justify-start">
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="relative z-20 text-center text-white pt-32 md:pt-60 mt-0 md:mt-32 mb-20 md:mx-8 md:text-start text-wrap max-w-xl">
            <span
                class="uppercase font-roboto font-semibold px-4 py-1 text-xs bg-white bg-opacity-15 rounded-full text-white">Adventure</span>
            <p class="uppercase font-lora text-white my-1 py-2 text-3xl font-bold text-wrap">
                Richird Norton photorealistic rendering as real photos
            </p>
            <div class="flex flex-col md:flex-row justify-start items-center md:items-start text-wrap text-white max-w-xl">
                <p class="font-lora mt-1">08.08.2021</p>
                <hr class="w-8 h-0.5 my-3 mx-1 bg-white border-0 rounded">
                <p class="mt-1 font-lora text-sm text-wrap">Progressively incentivize cooperative systems
                    through technically sound functionalities. The credibly productivate seamless data.
                </p>
            </div>
            <div class="mt-6 z-30 space-x-3 rtl:space-x-reverse">
                <button v-for="(image, index) in images" :key="index" @click="changeSlide(index)"
                    :class="['w-2 h-2 rounded-full bg-white', { 'opacity-20': currentIndex !== index }]"
                    :aria-current="currentIndex === index"
                    :aria-label="'Slide ' + (index + 1)">
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Ensure the background image transitions smoothly */
section {
    transition: background-image 1s ease-in-out;
}
</style>

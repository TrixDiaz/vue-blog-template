<script setup>
import { defineProps } from 'vue';

defineProps({
    text: {
        type: String,
        default: '08.08.2021',
    },
    color: {
        type: String,
        default: 'text-gray-500'
    },
    marginY: {
        type: String,
        default: 'my-20'
    }
})
</script>

<template>
    <section
        class="bg-center bg-no-repeat bg-cover bg-[url('/images/carousel3.png')] relative h-full py-40 flex items-center justify-center" :class=marginY>
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="flex flex-col justify-center items-center relative z-20 text-center text-white max-w-md">
            <span
                class="uppercase font-roboto font-semibold px-4 py-1 text-xs bg-white bg-opacity-15 rounded-full text-white">Adventure</span>
            <p class="uppercase font-lora text-white my-1 py-2 text-2xl font-semibold text-wrap">
                Richird
                Norton
                photorealistic
                rendering as real photos</p>
            <div class="flex flex-col justify-center items-center text-wrap text-gray-400 max-w-lg">
                <p class="mt-1 font-lora text-xs text-wrap">Progressively incentivize cooperative systems
                    through technically sound functionalities. The credibly productivate seamless data.</p>
                <hr class="w-8 h-0.5 my-3 mx-1 bg-white border-0 rounded">
                <p  class="font-lora mt-1" :class=color>{{ text }}</p>
            </div>
        </div>
    </section>
</template>
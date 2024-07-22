<script setup>
import { defineProps } from 'vue';

const tags = ['adventure', 'fashion']

defineProps({
    background: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: "Editor's Pick"
    },
    sizeTitle:{
        type: String,
        default: 'text-3xl'
    }
})
</script>

<template>
    <div class="my-20 p-6" :class="background">
        <p class="capitalize font-lora font-bold text-gray-800 mb-8" :class="sizeTitle">{{ title }}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
                class="flex flex-col justify-start font-lora text-gray-600 items-start space-y-4 my-2 hover:cursor-pointer">
                <div class="relative w-full">
                    <img src="/images/card1.png" alt="image1" class="w-full">
                    <div class="absolute top-4 right-4 flex flex-wrap space-x-2">
                        <span
                            class="uppercase font-roboto px-2 py-1 text-xs bg-white rounded-full text-white bg-opacity-15">technology</span>
                    </div>
                    <div class="font-poppins absolute bottom-0 left-0 p-6 text-gray-50">
                        <p class="text-xs">08.08.2021</p>
                        <p class=" font-semibold text-md my-2 text-white">Richird Norton photorealistic rendering as
                            real photos</p>
                        <p class="text-xs wrap-text">Progressively incentivize cooperative systems through technically
                            sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col justify-start font-lora text-gray-600 items-start space-y-4 my-2 hover:cursor-pointer">
                <div class="relative w-full">
                    <img src="/images/card2.png" alt="image1" class="w-full">
                    <div class="absolute top-4 right-4 flex flex-wrap space-x-2">
                        <span
                            class="uppercase font-roboto px-2 py-1 text-xs bg-white rounded-full text-white bg-opacity-15">technology</span>
                    </div>
                    <div class="font-poppins absolute bottom-0 left-0 p-6 text-gray-50">
                        <p class="text-xs">08.08.2021</p>
                        <p class=" font-semibold text-md my-2 text-white">Richird Norton photorealistic rendering as
                            real photos</p>
                        <p class="text-xs wrap-text">Progressively incentivize cooperative systems through technically
                            sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col justify-start font-lora text-gray-600 items-start space-y-4 my-2 hover:cursor-pointer">
                <div class="relative w-full">
                    <img src="/images/card3.png" alt="image1" class="w-full">
                    <div class="absolute top-4 right-4 flex flex-wrap space-x-2">
                        <span v-for="tag in tags" :key="tag"
                            class="uppercase font-roboto px-2 py-1 text-xs bg-white rounded-full text-white bg-opacity-15">{{
                            tag }}</span>
                    </div>
                    <div class="font-poppins absolute bottom-0 left-0 p-6 text-gray-50">
                        <p class="text-xs">08.08.2021</p>
                        <p class=" font-semibold text-md my-2 text-white">Richird Norton photorealistic rendering as
                            real photos</p>
                        <p class="text-xs wrap-text">Progressively incentivize cooperative systems through technically
                            sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
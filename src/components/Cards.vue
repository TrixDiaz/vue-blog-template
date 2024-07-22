<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const tags = ['adventure', 'fashion'];
const selectedFilter = ref('all');
const visiblePosts = ref(4);

const posts = [
  {
    id: 1,
    image: '/images/blog-image.png',
    tags: ['adventure', 'fashion'],
    date: '08.08.2021',
    title: 'Dream destinations to visit this year in Paris',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 2,
    image: '/images/blog-image2.png',
    tags: ['travel'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 3,
    image: '/images/blog-image3.png',
    tags: ['travel'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 4,
    image: '/images/blog-image4.png',
    tags: ['travel'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 5,
    image: '/images/blog-image5.png',
    tags: ['technology'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 6,
    image: '/images/blog-image6.png',
    tags: ['technology'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 7,
    image: '/images/blog-image7.png',
    tags: ['branding'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  {
    id: 8,
    image: '/images/blog-image8.png',
    tags: ['fashion'],
    date: '08.08.2021',
    title: 'Breathtaking first-person photos around Europe',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
    authorImage: '/images/carousel1.png',
    authorName: 'Jese Leos',
    authorJoined: 'Joined in August 2014',
  },
  
];

const filteredPosts = computed(() => {
  let filtered = posts;
  if (selectedFilter.value !== 'all') {
    filtered = posts.filter(post => post.tags.includes(selectedFilter.value));
  }
  return filtered.slice(0, visiblePosts.value);
});

const togglePostsVisibility = () => {
  if (visiblePosts.value === 4) {
    visiblePosts.value = posts.length;
  } else {
    visiblePosts.value = 4;
  }
};

const buttonText = computed(() => {
  return visiblePosts.value === 4 ? 'View More' : 'View Less';
});
</script>

<template>
    <div class="my-32 mx-12">
        <p class="capitalize font-lora font-bold text-gray-800 text-3xl">popular topics</p>
        <div class="flex flex-col sm:flex-row justify-start sm:justify-between items-start my-8 space-y-4 sm:space-y-0">
            <div>
                <ul
                    class="flex flex-col sm:flex-row justify-evenly sm:space-x-8 space-y-4 sm:space-y-0 capitalize font-lora font-semibold">
                    <li @click="selectedFilter = 'all'" :class="{ 'text-yellow-600': selectedFilter === 'all' }">all
                    </li>
                    <li @click="selectedFilter = 'adventure'"
                        :class="{ 'text-yellow-600': selectedFilter === 'adventure' }">adventure</li>
                    <li @click="selectedFilter = 'travel'" :class="{ 'text-yellow-600': selectedFilter === 'travel' }">
                        travel</li>
                    <li @click="selectedFilter = 'fashion'"
                        :class="{ 'text-yellow-600': selectedFilter === 'fashion' }">fashion</li>
                    <li @click="selectedFilter = 'technology'"
                        :class="{ 'text-yellow-600': selectedFilter === 'technology' }">technology</li>
                    <li @click="selectedFilter = 'branding'"
                        :class="{ 'text-yellow-600': selectedFilter === 'branding' }">branding</li>
                </ul>
            </div>
            <div @click="togglePostsVisibility" class="cursor-pointer">
                <p class="capitalize font-lora font-semibold">{{ buttonText }}</p>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RouterLink to="/blog-post" v-for="post in filteredPosts" :key="post.id">
                <div
                    class="flex flex-col justify-start font-lora text-gray-600 items-start space-y-4 my-2 cursor-pointer hover:border-2 hover:rounded-md hover:p-0.5">
                    <div class="relative w-full">
                        <img :src="post.image" :alt="post.title" class="w-full">
                        <div class="absolute top-4 right-4 flex flex-wrap space-x-2">
                            <span v-for="tag in post.tags" :key="tag"
                                class="uppercase font-roboto px-2 py-1 text-xs bg-white rounded-full text-white bg-opacity-15">{{
                                tag }}</span>
                        </div>
                    </div>
                    <p>{{ post.date }}</p>
                    <p class="font-bold text-md text-gray-600">{{ post.title }}</p>
                    <p class="text-xs">{{ post.description }}</p>
                    <hr class="w-full my-8 border-1 border-gray-300">
                    <div class="flex items-center gap-4 py-2">
                        <img class="w-12 h-12 rounded-full" :src="post.authorImage" :alt="post.authorName">
                        <div class="font-medium dark:text-white">
                            <div>{{ post.authorName }}</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">{{ post.authorJoined }}</div>
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

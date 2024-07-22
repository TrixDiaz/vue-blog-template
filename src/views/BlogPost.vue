<script setup>
import Jumbotron from '@/components/Jumbotron.vue';
import HeroCards from '@/components/HeroCards.vue';
</script>

<template>
    <Jumbotron marginY="my-0" text="By Jennifer Lawrence" color="text-white" />
    <section class="m-16">
        <div class="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4">
            <div class="flex flex-none">
                <p>08.08.2021</p>
                <hr class="w-12 h-0.5 my-3 mx-2 bg-gray-400  border-0 rounded">
                <p>4 minutes</p>
            </div>
            <div class="grow font-lora text-balance text-xs text-gray-600 leading-relaxed">
                <p>
                    Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and
                    idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly
                    negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior
                    interfaces for best-of-breed alignments. Synergistically formulate performance based users through
                    customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly
                    enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven
                    opportunities with multifunctional users. Collaboratively enhance visionary opportunities through
                    revolutionary schemas. Progressively network just in time customer service without real-time
                    scenarios.
                </p>
                <br>
                <p>
                    Synergistically drive e-business leadership with unique synergy. Compellingly seize market
                    positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through
                    distributed ideas. Professionally optimize enabled core competencies for leading-edge sources.
                    Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend
                    experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven
                    mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive
                    communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively
                    transition virtual outsourcing with focused e-tailers.
                </p>
                <p class="text-2xl font-bold text-yellow-600 my-4">
                    “ Monotonectally seize superior mindshare rather than efficient technology. ”
                </p>
                <p>
                    Compellingly enhance seamless resources through competitive content. Continually actualize 24/365
                    alignments for resource-leveling platforms. Energistically enhance high standards in models and
                    professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities.
                    Continually develop leading-edge experiences through quality e-services.
                </p>

                <div class="my-12 flex flex-row gap-4">
                    <span class="uppercase font-roboto px-4 py-1 text-xs bg-gray-100 rounded-md ">Adventure</span>
                    <span class="uppercase font-roboto px-4 py-1 text-xs bg-gray-100 rounded-md ">Photo</span>
                    <span class="uppercase font-roboto px-4 py-1 text-xs bg-gray-100 rounded-md ">Design</span>
                </div>

                <hr class="w-full h-0.5 my-3 mx-1 bg-white border-1 rounded">

                <div class="flex items-center gap-4 py-2">
                    <img class="w-12 h-12 rounded-full" src="/images/carousel1.png" alt="">
                    <div class="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <HeroCards class="my-0 mt-20 pb-12" title="Related Posts" sizeTitle="text-sm mt-10 font-bold" background="bg-gray-100"/>
</template>
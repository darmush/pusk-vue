<template>
    <section class="relative flex items-center px-5 xs:px-10 mx-auto md:mb-[260px] mb-40 text-center sm:gap-20 gap-9" :class="alignLeft ? 'lg:flex-row flex-col max-sm:gap-6 lg:gap-6': 'flex-col'">
        <div class="flex flex-col items-center" :class="alignLeft ? 'lg:items-start lg:text-start': ''">
            <h2 class="max-w-[400px] sm:max-w-[800px] lg:max-w-[870px] text-white text-2xl font-bold sm:text-3xl xs:mb-10 mb-5">
                <slot name="title"></slot>
            </h2>
            <p v-if="!textSectionNotExsist" class="max-w-[1024px]" :class="textSectionClass">
                <slot name="text"></slot>
            </p>
        </div>

        <div class="flex gap-5" :class="cardsContainerClass">
            <slot name="cards"></slot>
        </div>

        <slot class="flex justify-center items-center"></slot>
    </section>
</template>

<script>
    export default {
        props: {
            cardsContainerClass: String,
            textSectionClass: String,
            textSectionNotExsist: Boolean,
            alignLeft: Boolean,
        }
    }
</script>

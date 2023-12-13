<template>
<div class="flex flex-col flex-1 w-full gap-[60px]">
    <div class="flex flex-col text-left" v-for="vacancyCard in vacancyCards" :key="vacancyCard">
        <div class="flex flex-wrap">
            <div class="w-max text-bg text-sm sm:text-lg md:text-xl font-semibold bg-accent xs:py-4 xs:px-5 p-3">{{ vacancyCard.name }}</div>
            <div class="flex max-xl:grow max-xl:order-last max-md:flex-col bg-bg-card backdrop-blur-sm xs:text-sm text-xs text-text-light ml-auto">
                <div class="flex max-xl:grow flex-col justify-center py-[10px] px-4 max-xl:border-t-0 border-2 xl:border-b-0 border-accent shadow-card">
                    <strong class="block text-white xs:text-md text-sm font-semibold">Зароботная плата</strong>
                    {{ vacancyCard.wage }}
                </div>
                <div class="flex max-xl:grow flex-col justify-center py-[10px] px-4 md:border-x-0 max-xl:border-2 max-xl:border-t-0 xl:border-t-2 border-accent shadow-card">
                    <strong class="block text-white xs:text-md text-sm font-semibold">Опыт работы</strong>
                    {{ vacancyCard.experience }}
                </div>
                <div class="flex max-xl:grow flex-col justify-center py-[10px] px-4 max-xl:border-t-0 border-2 xl:border-b-0 border-accent shadow-card">
                    <strong class="block text-white xs:text-md text-sm font-semibold">Формат работы</strong>
                    {{ vacancyCard.format }}
                </div>
            </div>
            <div class="flex flex-col grow border-2 border-accent bg-bg-card backdrop-blur-sm shadow-card px-5 py-8 xs:text-sm text-xs text-text-light">
                <h5 class="text-md text-white font-semibold mb-2">{{ vacancyCard.titleXs }}</h5>
                <ul class="flex flex-col gap-1 list-disc list-inside">
                    <li v-for="text in vacancyCard.textBlock" :key="text" class="">{{ text }}</li>
                </ul>
                <p class="">{{ vacancyCard.text }}</p>
            </div>
        </div>

        <LinkButtonComponent class="mt-14 ml-auto max-xs:mx-auto" :link="vacancyCard.link">
            <template #text>Смотреть вакансию</template>
        </LinkButtonComponent>
    </div>
</div>
</template>

<script>
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'

export default {
    components: {
        LinkButtonComponent,
    },
    props: {
        vacancyCards: {
            type: Array,
        },
        textBlock: {
            type: Array,
        },
    },
}
</script>

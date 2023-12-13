<template>
    <div class="flex flex-1 w-full text-left" v-for="card in cards" :key="card" :class="cardContainerClass">
        <img alt="icon" width="60" height="60" class="block self-start max-xs:w-[48px]" :src="'/pusk-vue' + card.icon" :class="cardIconClass" v-if="card.icon" />
        <div class="flex items-center justify-center xs:h-[60px] h-[48px] xs:w-[60px] w-[48px] bg-accent text-bg text-xl font-bold" v-if="card.iconNum">{{ card.iconNum }}</div>
        <div class="relative md:w-[240px] w-auto md:h-auto h-[188px] overflow-hidden border-2 md:border-r-0 max-md:border-b-0 border-accent bg-bg-card backdrop-blur-sm shadow-card" v-if="card.pluginsImg">
            <img alt="" class="absolute" :src="'/pusk-vue' + card.pluginsImg" :class="card.pluginsImgClass">
        </div>
        <div :class="cardClass" class="flex flex-col flex-1 border-2 border-accent bg-bg-card backdrop-blur-sm shadow-card xs:px-4 px-3 xs:py-8 py-4">
            <h4 class="text-white font-semibold" :class="cardTitle" v-if="card.title">{{ card.title }}</h4>
            <p :class="textCardClass" class="xs:text-sm text-xs" v-if="card.text">{{ card.text }}</p>
            <img alt="" :src="'/pusk-vue' + card.img" :class="cardImgClass" v-if="card.img">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cards: {
            type: Array,
        },
        cardClass: String,
        cardContainerClass: String,
        cardTitle: String,
        cardImgClass: String,
        cardIconClass: String,
        pluginsImg: String,
        textCardClass: String,
    },
}
</script>

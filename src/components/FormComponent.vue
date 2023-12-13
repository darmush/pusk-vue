<template>
    <form action="" class="flex flex-col w-full max-w-[495px] border-2 border-accent bg-bg-card backdrop-blur-sm shadow-card p-6 gap-4">
        <input type="text" name="username" id="username" autocomplete="username" class="border-0 py-4 px-5 text-white placeholder:text-text-light focus:ring-2 shadow-sm ring-1 ring-inset ring-accent bg-bg-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent" placeholder="Ваше имя">
        <input type="email" name="email" id="email" autocomplete="email" class="border-0 py-4 px-5 text-white placeholder:text-text-light focus:ring-2 shadow-sm ring-1 ring-inset ring-accent bg-bg-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent" placeholder="Email">
        <textarea type="text" name="about" id="about" autocomplete="off" class="min-h-[140px] border-0 py-4 px-5 text-white placeholder:text-text-light focus:ring-2 shadow-sm ring-1 ring-inset ring-accent bg-bg-label focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent resize-none" placeholder="Расскажи о своём опыте"></textarea>
        <button type="file" class="flex w-max gap-3 text-white mb-6" @click="chooseFiles()">
            <input id="fileUpload" type="file" hidden>
            <IconClip/>
            Прикрепить файл
        </button>
        <ButtonComponent class="w-full">
            <template #text>Отправить</template>
        </ButtonComponent>
    </form>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import IconClip from '@/components/IconClip.vue'


export default {
    components: {
        ButtonComponent,
        IconClip,
    },
    methods: {
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
    }
}
</script>

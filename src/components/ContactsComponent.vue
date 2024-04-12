<template>
    <ul class="flex text-left text-sm">
        <li class="flex flex-col gap-2" v-for="contact in contacts" :key="contact">
            <p class="text-white xs:text-xs text-xxs font-semibold" v-if="titleExist">{{ contact.title }}</p>
            <a class="" :href="contact.link" v-if="contact.link">{{ contact.text }}</a>
            <p class="" v-else>{{ contact.text }}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        props : {
            titleExist: Boolean,
        },
        data() {
            return {
                contacts: [
                    {
                        title: 'Юридическое лицо',
                        text: 'OOO «Pusk»',
                    },
                    {
                        title: 'Адрес компании',
                        text: 'Россия, г. Москва, .....',
                    },
                    {
                        title: 'Email',
                        text: 'wesupportyou@pusk.ru',
                        link: 'mailto:wesupportyou@pusk.ru',
                    },
                ]
            }
        }
    }
</script>

<template>
    <ul class="flex max-md:flex-col sm:gap-8 gap-6 max-md:text-center text-white text-sm-wide font-medium xs:font-semibold">
        <li class="whitespace-nowrap hover:text-accent active:text-accent transition-all"
            v-for="link in navigationLinks" :key="link">
            <RouterLink :to="link.link" class="whitespace-nowrap hover:text-accent active:text-accent hover:drop-shadow-md active:drop-shadow-md transition-all">{{ link.title }}</RouterLink>
        </li>
    </ul>
</template>

<script>
    import { RouterLink } from 'vue-router'
    export default {
        data() {
            return {
                navigationLinks: [
                    {
                        title: 'О продукте',
                        link: '../#about'
                    },
                    {
                        title: 'Плагины',
                        link: '../#plugins'
                    },
                    {
                        title: 'Команда',
                        link: '../#team'
                    },
                    {
                        title: 'Вакансии',
                        link: '/jobs'
                    },
                    {
                        title: 'Контакты',
                        link: '../#contacts'
                    },
                ]
            }
        },
        components: {
            RouterLink,
        },
    }
</script>

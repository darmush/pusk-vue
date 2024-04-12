<template>
    <footer class="absolute left-0 w-full px-10 pt-20 pb-14 backdrop-blur bg-bg-card border-t-2 border-accent">
        <div class="flex max-md:flex-col max-md:items-center max-w-[1216px] min-h-full mx-auto gap-[52px]">
            <LogoLink class="min-w-[157px] min-lg:w-[186px] min-[890px]:mr-[52px]"/>
            <NavigationComponent class="lg:max-h-[150px] sm:w-[282px] flex flex-col flex-wrap gap-y-6"/>
            <div class="flex flex-col sm:min-h-[250px] justify-self-end md:ml-auto justify-between md:gap-4 gap-[52px] whitespace-nowrap max-md:text-center text-text-light">
                <ContactsComponent class="flex-col gap-4 max-md:text-center" :titleExist="false"/>
                <ul class="flex flex-col text-xs gap-3 mt-auto">
                    <li><a href="">Соглашение о конфиденциальности</a></li>
                    <li><a href="" class="max-sm:whitespace-wrap">Соглашение об обработке персональных данных</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    import LogoLink from '@/components/LogoLink.vue'
    import NavigationComponent from '@/components/NavigationComponent.vue'
    import ContactsComponent from '@/components/ContactsComponent.vue'

    export default {
        components: {
            LogoLink,
            NavigationComponent,
            ContactsComponent,
        }
    }
</script>

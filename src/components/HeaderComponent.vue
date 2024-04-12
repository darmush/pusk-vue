<template>
    <header class="fixed top-0 left-0 z-10 w-full h-20 px-5 xs:px-10 pt-7 bg-bg-header backdrop-blur transition-all" :class="open ? 'max-md:h-screen' : ''">
        <div class="max-w-[1216px] mx-auto flex justify-between">
            <LogoLink class="min-w-[110px]"/>
            <IconBurger @click="burgerToggle()" :burgerIsOpen="open" class="ml-auto" />
            <nav class="max-md:absolute max-md:top-[50%] max-md:left-[50%] max-md:-translate-y-2/4 max-md:-translate-x-2/4" :class="open ? '' : 'max-md:hidden'" @click="open = false">
                <NavigationComponent />
            </nav>
        </div>
    </header>
</template>

<script>
    import { ref } from 'vue'
    import LogoLink from '@/components/LogoLink.vue'
    import IconBurger from '@/components/IconBurger.vue';
    import NavigationComponent from '@/components/NavigationComponent.vue'

    export default {
        components: {
            LogoLink,
            IconBurger,
            NavigationComponent,
        },
        setup() {
            let open = ref(false)

            function burgerToggle() {
                open.value = !open.value
            }

            return {open, burgerToggle}
        }
    }
</script>

<template>
    <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="burger-icon md:hidden cursor-pointer fill-white hover:fill-accent hover:drop-shadow-md active:fill-accent active:drop-shadow-md transition-colors">
        <rect width="34" height="3" class="burger-icon-rect relative transition-all duration-200" :class="burgerIsOpen ? 'rotate-45' : ''" :y="burgerIsOpen ? '-3' : '0'" :x="burgerIsOpen ? '3' : '0'"></rect>
        <rect y="12" width="34" height="3" class="burger-icon-rect relative transition-all duration-200" :class="burgerIsOpen ? 'w-0' : ''"></rect>
        <rect width="34" height="3" class="burger-icon-rect relative transition-all duration-200" :class="burgerIsOpen ? '-rotate-45' : ''" :y="burgerIsOpen ? '17' : '24'" :x="burgerIsOpen ? '-17' : '0'"></rect>
    </svg>
</template>

<script>
export default {
    props: {
        burgerIsOpen: Boolean,
    }
}
</script>

<template>
    <div class="absolute -z-20 opacity-50">
        <div class="absolute -translate-y-2/4 -translate-x-2/4 blur-[100px] rounded-full bg-gradient-to-r from-gradient-blue-opacity from-20% to-gradient-pink" :class="elipseClass"></div>
        <div class="absolute -translate-y-2/4 -translate-x-2/4 blur-[50px] rounded-full bg-gradient-to-r from-gradient-bg to-gradient-blue" :class="elipseSmallClass"></div>
        <div class="absolute -translate-y-2/4 -translate-x-2/4 blur-[100px] bg-gradient-to-r from-gradient-bg to-gradient-blue" :class="rectangleClass"></div>
    </div>
</template>

<script>
export default {
    props: {
        elipseClass: String,
        elipseSmallClass: String,
        rectangleClass: String,
    }
}
</script>

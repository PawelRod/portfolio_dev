<template>
<a class="menu-scrolltop" href="#" v-scroll-to="'#header'">
    <span class="menu-scrolltop__arrow" />
</a>
</template>

<script>
export default {
    name: 'ScrollTop',
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.menu-scrolltop {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 25px;
    margin: 25px;
    padding: 10px 15px;
    border-radius: 10px;
    background: $cornflower-blue-scrolltop;
    transition: background .3s;

    @media (max-width: $bp-mobile-small) {
        margin: 6px 5px;
        padding: 7px 13px;
        background: none;
        width: 15px;
        height: 20px;
        border: 2px solid $white;
    }

    &:hover {
        background: $cornflower-blue-scrolltop-hover;
    }

    &__arrow {
        display: block;
        background: url('../assets/scrolltop-arrow.png') center center no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;

        @media (max-width: $bp-mobile-small) {
            background: url('../assets/scrolltop-arrow-white.png') center center no-repeat;
            background-size: cover;
        }
    }
}
</style>

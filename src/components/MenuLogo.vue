<template>
<a class="menu__logo" href="#">
    <img class="menu__logo-img" src="../assets/menu-logo.png" />
</a>
</template>

<script>
export default {
    name: 'MenuLogo',
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.menu__logo {
    position: fixed;
    width: 91px;
    margin: 20px;

    @media (max-width: $bp-mobile-small) {
        margin: 5px;
    }

    &-img {
        width: 91px;
        height: 70px;

        @media (max-width: $bp-mobile-small) {
            width: 60px;
            height: auto;

        }
    }
}
</style>

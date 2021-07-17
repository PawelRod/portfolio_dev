<template>
<div class="prallax">
    <div class="prallax__background" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" v-rellax="{
      speed: -3,
      center: true,
      horizontal:true,
      vertical: true
    }">
    </div>
    <div class="prallax__content">
        <p class="prallax__text-top">
            EXPRESS YOURSELF
        </p>
        <img class="prallax__frame" src="../assets/prallax-frame.png" />
        <p class="prallax__text-bottom">
            FREELY
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Prallax',
    components: {

    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.prallax {
    position: relative;
    height: 490px;
    width: 100%;
    margin: 50px 0;
    overflow: hidden;
    z-index: 1;

    @media (max-width: $bp-tablet) {
        height: 250px;
        margin: 0;
    }

    &__background {
        background: url("../assets/prallax-cups-of-coffee.jpg") top center no-repeat;
        background-size: 100%;
        width: 100%;
        height: 100vh;
        z-index: -2;

        @media (max-width: $bp-deskop) {
            background-size: cover;
        }

        @media (max-width: $bp-tablet) {
            height: 80vw;
        }
    }

    &__content {
        @include center-item(absolute);
        width: 415px;
        height: 400px;
        margin-left: 18px;

        @media (max-width: $bp-tablet) {
            width: 200px;
            height: 190px;
            margin-left: 12px;
        }
    }

    &__text-top {
        position: absolute;
        top: 310px;
        left: 40px;
        font-weight: bold;
        font-size: 2em;
        line-height: 27px;
        letter-spacing: 0.03em;
        color: $white;

        @media (max-width: $bp-tablet) {
            font-weight: normal;
            top: 134px;
            left: 17px;
            font-size: 1.4em;
            line-height: 31px;
        }
    }

    &__text-bottom {
        font-weight: bold;
        font-size: 2em;
        line-height: 27px;
        letter-spacing: 0.03em;
        color: $tomato-light;
        padding-left: 160px;
        margin: 0;

        @media (max-width: $bp-tablet) {
            font-weight: normal;
            font-size: 1.4em;
            line-height: 13px;
            padding-left: 101px;
        }
    }

    &__frame {
        @media (max-width: $bp-tablet) {
            width: 200px;
        }
    }
}
</style>

<template>
<div class="header" id="header" ref="header">
    <div class="header__background">
        <div class="header__background-back" id="particles-js"></div>
        <div class="header__background-front"></div>
    </div>
    <transition-group name="fade-in">
        <MenuLogo class="menu--zindex" v-if="menuToggle" :key="1" /> <!-- :class="{ 'menu--ontop': menuToggle }" -->
        <Menu class="menu--zindex" v-if="menuToggle" :key="2" />
        <ScrollTop class="menu--zindex" v-if="menuToggle" :key="3" />
    </transition-group>
    <MobileBottomMenu ref="mobileBottomMenu" />
    <Navbar />
    <div class="header__center" ref="headerCenter" data-rellax-xs-speed="0" data-rellax-mobile-speed="-1" data-rellax-tablet-speed="-2" v-rellax="{
        speed: -3
      }">
        <img class="header__img" src="../assets/header-photo.png">
        <p class="header__text-top">PAWEŁ <span class="header__text-decoration">RODZIEWICZ</span></p>
        <p class="header__text-bottom"><span class="header__text-decoration">WEB</span> DEVELOPER</p>
    </div>
</div>
</template>

<script>
import MenuLogo from './MenuLogo.vue'
import Menu from './Menu.vue'
import MobileBottomMenu from './MobileBottomMenu.vue'
import ScrollTop from './ScrollTop.vue'
import Navbar from './Navbar.vue'

export default {
    props: ['scrollYposition'],
    name: 'Home',
    components: {
        MenuLogo,
        Menu,
        ScrollTop,
        MobileBottomMenu,
        Navbar
    },
    data() {
        return {
            menuToggle: false
        }
    },
    mixins: [
        require('./mixins/AnimatedStars.vue')
    ],
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        require('particles.js')
        this.$nextTick(() => {
            this.initParticlesJS()
        })
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll() {
            const bottomMenu = this.$refs.mobileBottomMenu.$el;
            this.centerItemsOpacity();
            if (this.$refs.header.clientHeight <= this.scrollYposition + 50) {
                this.menuToggle = true;
                if (!bottomMenu.classList.contains('menu-bottom__items-narrow')) {
                    bottomMenu.classList.add('menu-bottom__items-narrow');
                }
            } else {
                this.menuToggle = false;
                if (bottomMenu.classList.contains('menu-bottom__items-narrow')) {
                    bottomMenu.classList.remove('menu-bottom__items-narrow');
                }
            }
        },
        centerItemsOpacity(el) {
            const headerCenter = this.$refs.headerCenter;
            let fadePosition = window.scrollY / window.innerHeight;
            el = 1 - fadePosition;
            headerCenter.style.opacity = el;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.menu--zindex {
    z-index: 3;
}

.fade-in-enter-active {
    z-index: 3;
    opacity: 1;
    transition: all .3s ease;
}

.fade-in-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-in-enter,
.fade-in-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

.header {
    @include box(100vw, 120vh);
    $self: &;
    position: relative;
    display: grid;
    margin-bottom: -40px;
    background-size: cover;

    &__background {
        @include box(100vw, 120vh);
        position: absolute;
    }

    &__background-back {
        @include box(100vw, 120vh);
        position: absolute;
        display: grid;
        margin-bottom: -40px;
        background: url(../assets/header__background.jpg) bottom center no-repeat;
    }

    &__background-front {
        @include box(100vw, 120vh);
        position: absolute;
        display: grid;
        margin-bottom: -40px;
        background: url(../assets/header__background_png.png) bottom center no-repeat;
    }

    &__img {
        display: block;
        margin: 0 auto;

        @media (max-width: $bp-tablet) {
            @include box(200px);
        }

        @media (max-width: $bp-mobile-small) {
            @include box(170px);
        }
    }

    &__center {
        position: relative;
        top: -10vh;
        justify-self: center;

        @media (max-width: $bp-mobile-small) {
            top: -13vh;
        }
    }

    &__text-top {
        @include text-format($white, 3.6em, 'Roboto');
        @include text-settings(center, 1.3px, 400, 47px);
        margin: 16px 0 7px 0;

        @media (max-width: $bp-tablet) {
            font-size: 2.8em;
            line-height: 22px;
            margin: 26px 0 7px 0;
            letter-spacing: 1.1px;
        }

        @media (max-width: $bp-mobile-small) {
            font-size: 2.6em;
            margin: 26px 0 8px 0;
        }

        #{$self}__text-decoration {
            position: relative;
            color: $tomato-dark;
        }

        #{$self}__text-decoration:after {
            @include box(3px, 29px);
            content: " ";
            display: inline-block;
            background: $tomato-dark;
            position: absolute;
            top: 16px;
            left: 3px;

            @media (max-width: $bp-tablet) {
                @include box(3px, 19px);
                left: 2px;
            }

            @media (max-width: $bp-mobile-small) {
                @include box(3px, 15px);
            }
        }
    }

    &__text-bottom {
        @include text-format($white, 2.6em, 'Roboto');
        @include text-settings(center, 1.3px, 400, normal);
        margin: 0;

        @media (max-width: $bp-tablet) {
            font-size: 2.2em;
            letter-spacing: 1.1px;
            margin-left: 7px;
        }

        @media (max-width: $bp-mobile-small) {
            margin-left: 13px;
        }

        #{$self}__text-decoration {
            position: relative;
            left: -2px;
            color: $cornflower-blue-dark;
            font-weight: 600;
            margin-right: -3px;
        }

        #{$self}__text-decoration:before {
            @include box(3px, 29px);
            content: " ";
            display: inline-block;
            background: $cornflower-blue-dark;
            position: absolute;
            top: -4px;
            left: 19px;
            transform: rotate(15deg);

            @media (max-width: $bp-tablet) {
                @include box(2.5px, 19px);
                top: -1px;
                left: 16.5px;
            }

            @media (max-width: $bp-mobile-small) {
                @include box(2.5px, 15px);
                top: -1px;
                left: 16.5px;
            }
        }
    }
}
</style>

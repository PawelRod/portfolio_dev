<template>
<div ref="menu" class="menu">
    <div ref="menuHamburgerAnimation" class="menu__hamburger" @click="menuToggleHamburgerClasses">
        <span class="menu__hamburger-line menu__hamburger-line--top"></span>
        <span class="menu__hamburger-line menu__hamburger-line--center"></span>
        <span class="menu__hamburger-line menu__hamburger-line--bottom"></span>
    </div>
    <div class="menu__wrapper" ref="menuWrapper">
        <ul class="menu__nav">
            <div class="menu__hamburger-bg">
                <div class="menu__hamburger-bg-line menu__hamburger-bg-line--top"></div>
                <div class="menu__hamburger-bg-line menu__hamburger-bg-line--center"></div>
                <div class="menu__hamburger-bg-line menu__hamburger-bg-line--bottom"></div>
            </div>
            <li ref="menuList" class="menu__list" v-for="(item, index) in menu" :key="index++" @click="menuToggleHamburgerClasses">
                <a class="menu__link" :href="item.url" v-scroll-to="item.navigation">
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menu: [{
                    title: 'what do i use?',
                    url: './skills',
                    navigation: "#skills"
                },
                {
                    title: 'projects',
                    url: './projects',
                    navigation: "#projects"
                },
                {
                    title: 'about me',
                    url: './about',
                    navigation: "#about"
                },
                {
                    title: 'contact',
                    url: './contact',
                    navigation: "#contact"
                },
            ],
            windowWidth: 0
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("load", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("load", this.handleResize);
    },
    methods: {
        menuToggleHamburgerClasses(event) {
            const menu = this.$refs.menu;
            const menuWrapper = this.$refs.menuWrapper;
            const menuList = this.$refs.menuList;
            const menuHamburgerAnimation = this.$refs.menuHamburgerAnimation;
            if (this.windowWidth <= 768) {
                menuWrapper.classList.toggle('menu__wrapper--active');
                menu.classList.toggle('menu--active');
                menuHamburgerAnimation.classList.toggle('menu__hamburger--open');
                setTimeout(() => {
                    for (let x = 0; x < menuList.length; x++) {
                        menuList[x].classList.toggle('menu__list--margin')
                    }
                }, 100)
            } else {
                event.stopPropagation();
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.menu {
    @include box(180px);
    $self: &;
    position: fixed;
    right: 0;

    @media (max-width: $bp-tablet) {
        @include box(100%, 10%);
        overflow: hidden;
        transition: height .3s;
        margin: 0;
    }

    &--active {
        @media (max-width: $bp-tablet) {
            @include box(100%, 100%);
        }
    }

    &__wrapper {
        display: inline-block;
        margin: 20px;

        @media (max-width: $bp-tablet) {
            @include box(1%, 1%);
            background: $cornflower-blue;
            margin: 0;
            position: relative;
            top: -100px;
            margin-left: 110%;
            bottom: -100px;
            border-radius: 40px;
            transition: all .3s 0s;
        }

        &--active {
            @media (max-width: $bp-tablet) {
                @include box(100%, 120%);
                z-index: 3;
                margin-left: 0%;
                transition: all .4s 0s;

                #{$self}__nav {
                    opacity: 1;
                    transition: opacity .3s .3s;
                    height: 100%;

                    #{$self}__list {
                        @include box(auto, 36px);
                        display: block;
                    }
                }
            }
        }

    }

    #{$self}__list--margin {
        @media (max-width: $bp-tablet) {
            margin: 30px;
        }
    }

    &__nav {
        list-style-type: none;
        text-align: right;
        margin: 0;
        padding: 0;

        @media (max-width: $bp-tablet) {
            @include center-item(fixed);
            @include box(100%, 0%);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            opacity: 0;
            transition: all .3s 0s;
            margin: 0;
            text-align: center;
        }

        &:hover {
            #{$self}__list {
                opacity: .3;

                @media (max-width: $bp-tablet) {
                    opacity: 1;
                }
            }
        }

        #{$self}__list:hover {
            opacity: 1;
        }
    }

    &__list {
        @include text-format($black, 1.6em, 'Open Sans');
        @include text-settings(right, 1px, 700, normal);
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s;

        &:nth-child(5) {
            #{$self}__link {
                color: $menu-pink;
            }
        }

        @media (max-width: $bp-tablet) {
            display: none;
            margin: 10px;
            font-size: 2.6em;
            font-weight: normal;
            opacity: 1;
            transition: margin 1s;
        }
    }

    &__link {
        @include box(100%);
        display: block;
        text-decoration: none;
        color: $black;

        @media (max-width: $bp-tablet) {
            color: $white;
        }
    }

    &__hamburger {
        @include box(55px, 46px);
        position: absolute;
        right: 0;
        display: none;
        margin: 25px;
        background: $cornflower-blue;
        border-radius: 15px;
        cursor: pointer;

        @media (max-width: $bp-tablet) {
            display: inline-block;
            z-index: 4;
        }

        @media (max-width: $bp-mobile-small) {
            margin: 5px;
        }

        &--open {
            #{$self}__hamburger-line {
                transition: all .2s;
            }

            #{$self}__hamburger-line--top {
                top: 46%;
                left: 17%;
                transform: rotate(45deg)
            }

            #{$self}__hamburger-line--center {
                opacity: 0;
            }

            #{$self}__hamburger-line--bottom {
                transform: rotate(135deg);
                left: 17%;
                top: 46%;
            }
        }
    }

    &__hamburger-line {
        @include center-item(absolute);
        @include box(35px, 3px);
        display: inline-block;
        background: white;
        border-radius: 10px;

        @media (max-width: $bp-tablet) {
            transition: all .3s;
        }
    }

    &__hamburger-line--top {
        top: 26%;
    }

    &__hamburger-line--bottom {
        top: 74%;
    }

    &__hamburger-bg {
        @include box(65px, 35px);
        position: absolute;
        right: 80px;
        top: 95px;
        z-index: -1;

        @media (max-width: $bp-tablet) {
            display: none;
        }
    }

    &__hamburger-bg-line {
        @include box(100%, 30%);
        border-radius: 50px;
        background: $cornflower-blue-lighter;
        transition: all .5s;
    }

    &__hamburger-bg-line--center {
        margin: 5px 0;
    }
}
</style>

<template>
<div class="menu-bottom">
    <ul class="menu-bottom__nav">
        <li class="menu-bottom__list" v-for="(item, index) in menu" :key="index++">
            <a class="menu-bottom__link" :href="item.url" v-scroll-to="item.navigation">
                <span class="menu-bottom__img">
                    <img :src="require('../assets/' + item.img)" />
                </span>
                {{ item.title }}
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'MobileBottomMenu',
    data() {
        return {
            menu: [{
                    title: 'skills',
                    url: './skills',
                    navigation: "#skills",
                    img: "skills.svg"
                },
                {
                    title: 'projects',
                    url: './projects',
                    navigation: "#projects",
                    img: "projects.svg"
                },
                {
                    title: 'hire me',
                    url: './contact',
                    navigation: "#contact",
                    img: "phone.svg"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.menu-bottom {
    position: fixed;
    display: none;
    background: $cornflower-blue-dark;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 2;

    @media (max-width: $bp-mobile-small) {
        display: block;
    }

    &__items-narrow>.menu-bottom__nav>.menu-bottom__list { //!!!
        width: 28.3%;
    }

    &__nav {
        display: flex;
        list-style-type: none;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    &__list {
        display: block;
        font-size: 1.2em;
        width: 33%;
        height: 100%;
        line-height: 75px;
        text-decoration: none;
        color: $black;
        text-transform: uppercase;
        font-weight: bold;
        transition: all .3s;
    }

    &__list:nth-child(4) {
        width: 15%;
        line-height: 50px;
    }

    &__link {
        position: relative;
        display: block;
        width: 100%;
        text-decoration: none;
        color: $white;
        letter-spacing: 1px;
    }

    &__img {
        position: absolute;
        top: 7px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        line-height: 0px;
    }
}
</style>

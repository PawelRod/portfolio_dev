<template>
<div class="nav">
    <div class="nav__wrapper">
        <div class="nav__logo">
            <img class="nav__img" src="../assets/menu-logo.png">
        </div>
        <ol class="nav__list">
            <li class="nav__item" v-for="(item, index) in navbar" :key="index++">
                <a class="nav__link" :href="item.url" v-scroll-to="item.navigation">
                    {{ item.title }}
                </a>
            </li>
        </ol>
    </div>
</div>
</template>

<script>
export default {
    name: 'navbar',
    components: {

    },
    data() {
        return {
            navbar: [{
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
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.nav {
    $self: &;
    padding: 1.5em 5%;
    position: absolute;
    width: 90%;
    z-index: 2;

    @media (max-width: $bp-tablet) {
        padding: 0.5em 2%;
        width: auto;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__img {
        @include box(80px);
    }

    &__list {
        height: 20px;
        list-style: none;
        margin: 0 0 15px 0;

        @media (max-width: $bp-tablet) {
            display: none;
        }
    }

    &__item {
        display: inline-block;
        margin: 0 2vw;
        line-height: 27px;
    }

    &__item:nth-child(4) {
        #{$self}__link {
            background: $white;
            padding: 5px 20px;
            border-radius: 20px;
            color: $cornflower-blue-dark;
        }
    }

    &__link {
        @include text-format($white, 1.8em, 'Roboto');
        @include text-settings(center, 0.03em, 500, normal);
        text-transform: capitalize;
        text-decoration: none;
    }
}
</style>

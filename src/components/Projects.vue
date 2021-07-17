<template>
<div class="portfolio" id="projects">
    <slot name="title"></slot>
    <ul class="portfolio__wrapper">
        <img class="portfolio__clamp" src="../assets/projects-clamp.png">
        <li class="portfolio__project" v-for="(project, index) in projects" :key="index++">
            <a class="portfolio__item" :href="project.url">
                <div class="portfolio__decoration">
                    <div class="portfolio__img" :style="`background: url(` + project.image + `) center center / cover no-repeat`"></div>
                </div>
                <h5 class="portfolio__title">{{project.title}}</h5>
                <p class="portfolio__text">{{project.text}}</p>
            </a>
        </li>
        <li class="portfolio__project"></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Projects',
    components: {

    },
    data() {
        return {
            projects: [{
                    title: '2020 PROJECT NUMBER ONE',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    image: 'https://picsum.photos/536/354',
                    url: '#'
                },
                {
                    title: '2020 PROJECT NUMBER TWO',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    image: 'https://picsum.photos/536/355',
                    url: '#'
                },
                {
                    title: '2020 PROJECT NUMBER THREE',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    image: 'https://picsum.photos/536/356',
                    url: '#'
                },
                {
                    title: '2020 PROJECT NUMBER FOUR',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    image: 'https://picsum.photos/536/357',
                    url: '#'
                },
                {
                    title: '2020 PROJECT NUMBER FIVE',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    image: 'https://picsum.photos/536/358',
                    url: '#'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.portfolio {
    $self: &;
    &__wrapper {
        list-style-type: none;
        position: relative;
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;

        @media (max-width: $bp-deskop) {
            justify-content: space-evenly;
        }
    }

    &__clamp {
        position: absolute;
        right: -150px;
        top: -20px;

        @media (max-width: $bp-deskop) {
            display: none;
        }
    }

    &__project {
        display: inline-block;
        width: 355px;
        height: 340px;
        margin: 0 0px 30px 0;

        @media (max-width: $bp-deskop) {
            width: 44%;
            height: auto;
            min-width: 300px;
        }

        @media (max-width: $bp-tablet-small) {
            width: 85%;
        }
    }

    &__project:nth-child(3n) {
        margin: 0 30px;

        @media (max-width: $bp-deskop) {
            margin: 0 10px 30px;
        }
    }

    &__item {
        text-decoration: none;
    }

    &__decoration {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        width: 100%;
        height: 245px;
        background: $mercury;
        z-index: 0;
    }

    &__decoration:after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        overflow: hidden;
        border-radius: 5px;
        width: 0%;
        height: 245px;
        background: $gray;
        z-index: -1;
        transition: width .5s;
    }

    &__item:hover {
        #{$self}__decoration:after {
            left: auto;
            right: 0;
            width: 100%;
        }
    }

    &__img {
        width: 360px;
        height: 235px;

        @media (max-width: $bp-deskop) {
            width: 100%;
        }
    }

    &__title {
        font-weight: 600;
        font-size: 1.8em;
        line-height: 25px;
        letter-spacing: 0.1em;
        color: $black;
        margin: 5px 0;
    }

    &__text {
        font-weight: 300;
        font-size: 1.6em;
        line-height: 22px;
        letter-spacing: .5px;
        margin: 0;
        color: $black;
    }
}
</style>

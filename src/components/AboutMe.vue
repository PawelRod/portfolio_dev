<template>
<div class="about" id="about">
    <slot name="title"></slot>
    <div class="about__wrapper">
        <img class="about__arrow" src="../assets/about-arrow.png" />
        <div class="about__column about__column--margin-right">
            <div class="about__experience">
                <!--  data-aos="zoom-out" data-aos-duration="1500" data-aos-offset="0" data-aos-anchor-placement="center-bottom" -->
                <div class="about__photo"></div>
                <div class="about__info">
                    <div class="about__info-column about__info-column--margin-right">
                        <p class="about__info-title">
                            WORK EXPERIENCE
                        </p>
                    </div>
                    <div class="about__info-column about__info-column--margin-left">
                        <p class="about__info-jobs">
                            2018 -<br>
                            <b>Paweł Rodziewicz</b><br>
                            <i>Freelance Web/Graphic Designer</i><br>
                            <br>
                            2020 - <br>
                            <b>Fashion Colors</b><br>
                            <i>Graphic Designer</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="about__column about__column--margin-left">
            <p class="about__text">
                My name is Paweł and I am Junior Front-end Developer living in Warsaw.
                <br><br>
                I started to learn programming a year and a half ago and got so involved. I have been studying regularly since then. It definitely became my passion. I also really like computer graphics, which is really closely related to coding.
                <br><br>
                I am also passionate about music producing, I create almost every day.
                <br><br>
                Apart from coding, I enjoy taking photos, cooking and travelling. I also love watching soccer and sometimes a good movie.
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AboutMe',
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

.about {
    &__wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        max-width: 1140px;
        margin: 0 auto;

        @media (max-width: $bp-deskop-small) {
            flex-direction: column;
            margin: 0 40px;
        }

        @media (max-width: $bp-mobile-small) {
            margin: 0 10px;
        }
    }

    &__arrow {
        position: absolute;
        left: -400px;
        top: -475px;

        @media (max-width: $bp-deskop-small) {
            display: none;
        }
    }

    &__column,
    &__info-column {
        @include box(50%);
        display: inline-block;

        @media (max-width: $bp-deskop-small) {
            @include box(100%);
        }

        &--margin-right {
            @media (max-width: $bp-deskop) {
                margin-right: 20px;
            }

            @media (max-width: $bp-deskop-small) {
                margin-right: 0px;
            }
        }

        &--margin-left {
            @media (max-width: $bp-deskop) {
                margin-left: 20px;
            }

            @media (max-width: $bp-deskop-small) {
                margin-left: 0px;
            }
        }
    }

    &__photo {
        @include box(100%, 250px);
        background: url('../assets/about-photo.jpg') top center no-repeat;
        background-size: cover;

        @media (max-width: $bp-mobile-small) {
            height: 160px;
        }
    }

    &__experience {
        @include box(525px);
        overflow: hidden;
        min-height: 470px;
        background: $lavender-light;
        filter: drop-shadow(0px 5px 15px $dropshadow-grey);
        border-radius: 10px;

        @media (max-width: $bp-deskop) {
            @include box(auto);
        }

        @media (max-width: $bp-deskop-small) {
            max-width: 600px;
            margin: 0 auto;
        }

        @media (max-width: $bp-mobile-small) {
            filter: drop-shadow(0px 0px 0px $dropshadow-transparent);
        }
    }

    &__text {
        @include text-format($black, 1.8em, 'Open Sans');
        @include text-settings(left, 0.01em, 400, 25px);
        display: flex;
        align-items: center;
        text-indent: 20px;
        margin: 50px auto;

        @media (max-width: $bp-deskop) {
            line-height: 21px;
            font-size: 1.6em;
        }

        @media (max-width: $bp-deskop-small) {
            margin: 50px auto 0px;
        }
    }

    &__info {
        display: flex;

        @media (max-width: $bp-mobile-small) {
            display: block;
        }
    }

    &__info-title {
        @include text-format($black, 2.2em, 'Open Sans');
        @include text-settings(left, 0.01em, 600, 30px);
        padding-left: 2vw;
        margin-top: 68px;

        @media (max-width: $bp-mobile-small) {
            margin: 30px 0 20px;
            padding-left: 15px;
        }
    }

    &__info-jobs {
        @include text-format($black, 1.6em, 'Open Sans');
        @include text-settings(left, 0.01em, 300, 25px);

        @media (max-width: $bp-mobile-small) {
            padding-left: 15px;
        }
    }
}
</style>

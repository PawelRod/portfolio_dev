<template>
<div class="skills" id="skills">
    <slot name="title"></slot>
    <div class="skills__wrapper">
        <div class="skills__row">
            <div class="skills__img">
                <img class="skills__icon" src="../assets/code-thinking-icon.png" />
            </div>
            <div class="skills__description">
                <h5 class="skills__title">CODE THINKING</h5>
                <p class="skills__text">
                    I use correct and semantic <b>HTML5</b> and <b>CSS3</b> code in my projects, with <b>SCSS</b> preprocessor and <b>Bootstrap</b> library. I am also using the <b>BEM</b> class naming methodology and <b>RWD</b> design technique for my projects. I'm trying to keep up with current standards in my <b>JavaScript</b> code to make simple interactions and more complex actions on my websites. I'm strongly focused on learning <b>VueJS</b> currently. Most of the time I bundled my projects with <b>Webpack</b> (just a simple configuration for a small project). <b>GIT</b> is a version control system that I use on a daily basis, I download packages and plugins with <b>NPM</b>.

                </p>
            </div>
        </div>
        <div class="skills__row">
            <div class="skills__img">
                <img class="skills__icon" src="../assets/graphic-skills-icon2.png" />
            </div>
            <div class="skills__description">
                <h5 class="skills__title">GRAPHIC SENSE</h5>
                <p class="skills__text">
                    I use <b>Figma</b> to create designs of my projects, I'm also familiar with <b>Adobe Photoshop</b> and <b>Adobe XD</b>. I am focused on broadening my <b>Adobe Illustrator</b> skills. I am also interested in <b>UX</b>, because I try to design the most intuitive, eye-pleasing and user-friendly applications / websites.
                </p>
            </div>
        </div>
        <div class="skills__row skills__row--reverse">
            <div class="strengths__column">
                <div class="strengths__row" v-for="(strength, index) in strengths" :key="index++" data-aos="fade-left" data-aos-duration="1500">
                    <div class="strengths__item">
                        <img class="strengths__icon" :src="strength.icon">
                        <p class="strengths__title">
                            {{strength.title}}
                        </p>
                    </div>
                    <p class="strengths__text">
                        {{strength.text}}
                    </p>
                </div>
            </div>
            <div class="skills__description">
                <h5 class="skills__title">PERSONAL STRENGTHS</h5>
                <p class="skills__text">
                    I also did a <b>CliftonStrengths Finder Test by Gallup</b> which determined my innate talents:
                    <br>
                    <br>
                    I do not like conflicts, I am looking for areas of agreement <b>(Harmony)</b>. I'm good at troubleshooting <b>(Restorative)</b>. I can sense other people's feelings by imagining being in their place and in their situation <b>(Empathy)</b>. I get deep satisfaction working with my friends to achieve a certain goal <b>(Relator)</b>. I am an honest and loyal person <b>(Responsibility)</b>.
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    components: {

    },
    data() {
        return {
            strengths: [{
                    title: 'Ambition',
                    text: `I'm still learning and striving for progress.`,
                    icon: 'https://i.ibb.co/YhPx8yZ/ambition-icon.png'
                },
                {
                    title: 'Intuitiveness',
                    text: `I'm focused on trouble-free and simple functionality of websites.`,
                    icon: 'https://i.ibb.co/89RnHFz/intuitiveness-icon.png'
                },
                {
                    title: 'Precision',
                    text: `Even seemingly unimportant details can change the whole project.`,
                    icon: 'https://i.ibb.co/sjYyvpz/precision-icon.pngg'
                }
            ]
        }
    },
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.animate {
    transition-duration: .6s;
    transition-timing-function: ease-in;
}

.slide-left {
    transform: translateX(-300px);
    opacity: 0;
}

.slide-left.animate-active {
    transform: translateY(0);
    opacity: 1;
}

.skills {
    $self: &;
    &__wrapper {
        max-width: 1140px;
        margin: 0 auto;

        @media (max-width: $bp-deskop) {
            margin: 0 15px;
            padding: 0 10px;
        }

        @media (max-width: $bp-mobile-small) {
            margin: 0;
        }
    }

    &__row {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;

        @media (max-width: $bp-deskop) {
            margin-bottom: 30px;
        }

        @media (max-width: $bp-tablet) {
            flex-direction: column-reverse;
        }
    }

    &__icon {
        width: 70%;
        height: auto;

        @media (max-width: $bp-deskop) {
            width: 343px;
        }

        @media (max-width: $bp-tablet) {
            width: 400px;
        }

        @media (max-width: $bp-mobile-small) {
            width: 280px;
        }
    }

    &__row--reverse {
        display: flex;
        flex-direction: row-reverse;

        @media (max-width: $bp-tablet) {
            flex-direction: column-reverse;
        }

        #{$self}__description {
            margin-left: 0;
            margin-right: 30px;
        }
    }

    &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: initial;
        margin-right: 30px;
        border-radius: 10px;
        padding: 20px 0;

        @media (max-width: $bp-deskop) {
            height: auto;
            margin-right: 10px;
            max-height: 220px;
        }

        @media (max-width: $bp-tablet) {
            width: 100%;
            margin: 0;
        }
    }

    &__description {
        display: inline-block;
        width: 50%;
        margin-left: 30px;

        @media (max-width: $bp-deskop) {
            margin-right: 10px;
        }

        @media (max-width: $bp-tablet) {
            width: 100%;
            margin: 0;
        }
    }

    &__title {
        margin: 0 0 20px;
        font-weight: 600;
        font-size: 2.4em;
        line-height: 20px;
    }

    &__text {
        font-weight: 300;
        font-size: 1.8em;
        line-height: 25px;
        letter-spacing: 0.01em;

        @media (max-width: $bp-deskop) {
            line-height: 21px;
            font-size: 1.6em;
        }
    }
}

.strengths {
    &__column {
        width: 50%;
        position: relative;
        margin-left: 30px;

        @media (max-width: $bp-deskop) {
            margin-left: 10px;
        }

        @media (max-width: $bp-tablet) {
            padding: 10px 0;
            width: 100%;
            margin: 0;
        }

        @media (max-width: $bp-mobile-small) {
            display: flex;
            justify-content: center;
            box-shadow: 0px 3px 10px -3px $dropshadow-grey-dark;
            border-radius: 10px;
        }
    }

    &__row:nth-child(2) {
        margin: 25px 0;

        @media (max-width: $bp-mobile-small) {
            margin: 0 5px;
        }
    }

    &__row {
        height: 80px;
        box-shadow: 0px 3px 10px -3px $dropshadow-grey-dark;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 47% 53%;
        padding: 0 10px;

        @media (max-width: $bp-deskop) {
            grid-template-columns: 30% 70%;
        }

        @media (max-width: $bp-mobile-small) {
            width: 100px;
            display: inline-block;
            padding: 0 5px;
            grid-template-columns: 100%;
            box-shadow: 0px 0px 0px 0px $dropshadow-grey-dark;
            border-radius: 0px;
        }
    }

    &__item {
        display: grid;
        grid-template-columns: 40% 60%;

        @media (max-width: $bp-deskop) {
            grid-template-columns: none;
            grid-template-rows: 60% 40%;
            height: 80px;
        }
    }

    &__icon {
        margin: 11px 11px;

        @media (max-width: $bp-deskop) {
            margin: 0;
            width: 40px;
            align-self: flex-end;
            justify-self: center;
        }
    }

    &__title {
        font-size: 2em;
        line-height: 37px;

        @media (max-width: $bp-deskop) {
            font-size: 1.6em;
            line-height: 30px;
            margin: 0;
            text-align: center;
        }

        @media (max-width: $bp-mobile-small) {
            font-size: 1.4em;
            margin: 0;
        }

    }

    &__text {
        margin: 0;
        display: flex;
        height: auto;
        align-self: center;
        padding: auto;
        font-size: 1.6em;

        @media (max-width: $bp-deskop) {
            font-size: 1.4em;
            padding: 0 0 0 15px;
        }

        @media (max-width: $bp-mobile-small) {
            display: none;
        }
    }
}
</style>

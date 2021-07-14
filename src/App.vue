<template>
<div id="app">
    <home :scrollYposition="scrollYposition"></home>
    <!-- <component v-for="(component, index) in components" :is="component.name" :key="index">
        <div slot="title">
            <h1 class="title">
                <span>
                    <img src="./assets/section-title-decoration.png" />
                </span>
                {{component.sectionTitle}}
            </h1>
        </div>
    </component>-->
    <skills>
        <div slot="title">
            <h1 class="title">
                <span>
                    <img src="./assets/section-title-decoration.png" />
                </span>
                WHAT DO I USE?
            </h1>
        </div>
    </skills>
    <projects>
        <div slot="title">
            <h1 class="title">
                <span>
                    <img src="./assets/section-title-decoration.png" />
                </span>
                PROJECTS
            </h1>
        </div>
    </projects>
    <prallax></prallax>
    <about-me>
        <div slot="title">
            <h1 class="title">
                <span>
                    <img src="./assets/section-title-decoration.png" />
                </span>
                ABOUT ME
            </h1>
        </div>
    </about-me>
    <contact>
        <div slot="title">
            <h1 class="title">
                <span>
                    <img src="./assets/section-title-decoration.png" />
                </span>
                CONTACT
            </h1>
        </div>
    </contact>
    <site-footer></site-footer>
</div>
</template>

<script>
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Prallax from './components/Prallax.vue'
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        'home': Home,
        'skills': Skills,
        'projects': Projects,
        'prallax': Prallax,
        'about-me': AboutMe,
        'contact': Contact,
        'site-footer': Footer,
    },
    data() {
        return {
            components: [{
                    name: 'skills',
                    sectionTitle: 'WHAT DO I USE?'
                },
                {
                    name: 'projects',
                    sectionTitle: 'PROJECTS'
                },
                {
                    name: 'prallax',
                    sectionTitle: null
                },
                {
                    name: 'about-me',
                    sectionTitle: 'ABOUT ME'
                },
                {
                    name: 'contact',
                    sectionTitle: 'CONTACT'
                },
                {
                    name: 'site-footer',
                    sectionTitle: null
                },
            ],
            scrollYposition: 0
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll(e) {
            this.windowTop = e.target.documentElement.scrollTop;
            this.scrollYposition = this.windowTop;
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
@import "./styles/_mixins.scss";
@import "./styles/_variables.scss";
@import "./styles/_breakpoints.scss";

#app {
    font-family: 'Open Sans', sans-serif;
    background: $white;
    @include disableAOSmobile;
}

.title {
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
    margin: 60px 0 70px;
    padding-top: 40px;

    @media (max-width: $bp-tablet) {
        margin: 35px 0 55px;
        padding-top: 20px;
    }

    img {
        transform: translateY(20%);
    }
}
</style>

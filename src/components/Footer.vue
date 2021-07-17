<template>
<div class="footer">
    <div class="footer__socials">
        <a class="footer__link" href="https://m.me/pawelr93" target="_blank"><img class="footer__icon" src="../assets/social-icon-messenger.png" /></a>
        <a class="footer__link" href="mailto:rodziewiczpp@gmail.com" target="_blank"><img class="footer__icon" src="../assets/social-icon-mail.png" /></a>
        <a class="footer__link" href="https://www.linkedin.com/in/pawel-rodziewicz/" target="_blank"><img class="footer__icon" src="../assets/social-icon-linked.png" /></a>
        <a class="footer__link" href="https://github.com/PawelRod/" target="_blank"><img class="footer__icon" src="../assets/social-icon-github.png" /></a>
    </div>
    <p class="footer__text">
        Designed and coded with 💙 by Paweł Rodziewicz
        <br>
        2020 © <a class="footer__site-link" href="www.pawelrodziewicz.com">www.pawelrodziewicz.com</a>
    </p>
</div>
</template>

<script>
export default {
    name: 'Footer',
    components: {

    },
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.footer {
    @include box(100%, 30vh);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    min-height: 280px;
    background: url(https://i.ibb.co/c6ydmGZ/footer-background.png) top center no-repeat;
    background-size: cover;

    @media (max-width: $bp-mobile-small) {
        @include box(100%, 245px);
        min-height: 220px;
    }

    &__icon {
        margin: 0 10px;

        @media (max-width: $bp-tablet) {
            @include box(35px);
            margin: 0 12px;
        }
    }

    &__text {
        @include text-format($white, 1.6em, 'Open Sans');
        @include text-settings(center, 0.01em, 400, normal);
        margin: 10px 0 5.5vh 0;

        @media (max-width: $bp-tablet) {
            font-size: 1.4em;
            margin: 5px 0 55px 0;
        }

        @media (max-width: $bp-mobile-small) {
            margin: 5px 0 70px 0;
        }
    }

    &__site-link {
        text-decoration: none;
        color: inherit;
    }

    &__site-link:hover {
        color: $tomato;
        transition: color .2s;
    }
}
</style>

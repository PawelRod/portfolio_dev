<template>
<div class="contact" id="contact">
    <slot name="title"></slot>
    <h5 class="contact__heading">FEEL FREE TO CONTACT <span class="contact__heading-decoration">ME!</span></h5>
    <p class="contact__text">Discuss a possible project or let's find out more about my work.</p>
    <div class="contact__wrapper">
        <form class="form" @submit.prevent="sendEmail">
            <!-- action="contactform.php" method="POST" -->
            <div class="form__row" data-aos="fade-up" data-aos-duration="1500">
                <div class="form__column-left form__column-left--gray-bg">
                    <p class="form__title">
                        <span>#1</span><br class="form__title-breakline">
                        Your contact<br class="form__title-breakline form__title-breakline--display">
                        information
                    </p>
                </div>
                <div class="form__column-right">
                    <p class="form__fields" v-for="(item, index) in inputs" :key="index++">
                        <label class="form__input-label" :for="item.for">{{item.label}}</label>
                        <input class="form__input" ref="input" v-model="form[index]" :name="item.for" :type="item.type" :id="item.for" :required="item.required" @input="setFocus($event, index), deletedText($event, index)" @mouseover="setMouseOver($event, index)" @focus="setMouseOver($event, index)" @mouseout="setMouseOut($event, index)" @blur="outFocus($event, index)" />
                        <transition name="v-reset-input">
                            <span class="v-reset-input" title="Clear this field" type="button" @click="deleteText($event, index)" @mouseover="setMouseOver($event, index)">✖</span>
                        </transition>
                    </p>
                </div>
            </div>
            <div class="form__row" data-aos="fade-up" data-aos-duration="1500">
                <div class="form__column-left form__column-left--blue-bg">
                    <p class="form__title">
                        <span>#2</span><br class="form__title-breakline">
                        Your text<br class="form__title-breakline form__title-breakline--display">
                        message
                    </p>
                </div>
                <div class="form__column-right">
                    <div class="form__text-content">
                        <label class="form__textarea-label" for="message-content">Message content</label>
                        <textarea class="form__textarea" v-model="form[0]" name="message" id="message-content" placeholder="Some text..." required />
                    </div>
                </div>
            </div>
            <p class="form__info" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom">* not required</p>
            <button type="submit" name="submit" class="form__btn">
                Send 
                <span class="form__btn-emoji">🚀</span>
            </button>
        </form>
    </div>
</div>
</template>

<script>
const querystring = require("querystring");
import emailjs from 'emailjs-com';

export default {
    name: 'Contact',
    components: {

    },
    data() {
        return {
            inputs: [{
                    label: "Your name",
                    for: 'name',
                    type: 'text',
                    required: 'required'
                },
                {
                    label: "Email",
                    for: 'mail',
                    type: 'email',
                    required: 'required'
                },
                {
                    label: "Company *",
                    for: 'company',
                    type: 'text',
                    required: false
                },
                {
                    label: "Phone number *",
                    for: 'number',
                    type: 'text',
                    required: false
                },
            ],
            form: [

            ],
            sent: false
        }
    },
    methods: {
        setFocus(ev, index) {
            const input = this.$refs.input[index - 1];
            input.nextElementSibling.classList.add('v-reset-input-active');
        },
        outFocus(ev, index) {
            const input = this.$refs.input[index - 1];
            setTimeout(() => input.nextElementSibling.classList.remove('v-reset-input-active'), 300);

        },
        setMouseOver(ev, index) {
            const input = this.$refs.input[index - 1];
            if (input.value != "") {
                input.nextElementSibling.classList.add('v-reset-input-active')
            }
        },
        setMouseOut(ev, index) {
            const input = this.$refs.input[index - 1];
            if (input.value != "") {
                input.nextElementSibling.classList.remove('v-reset-input-active')
            }
        },
        deletedText(ev, index) {
            const input = this.$refs.input[index - 1];
            if (input.value == "") {
                input.nextElementSibling.classList.remove('v-reset-input-active')
            }
        },
        deleteText(ev, index) {
            const input = this.$refs.input[index - 1];
            input.value = "";
            input.nextElementSibling.classList.remove('v-reset-input-active')
        },
        clearFields() {
            this.form.splice(0);
        },
        sendEmail: (e) => {
            emailjs.sendForm('service_0290usf', 'template_uvinmni', e.target, 'user_Leo469GHtjGmlZToPtAwi')
                .then((result) => {
                    alert('Email successfully sent!');
                    // this.clearFields();
                    e.target.reset();
                }, (error) => {
                    console.log('FAILED...', error);
                });
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_breakpoints.scss";
@import "../styles/_mixins.scss";

.v-reset-input {
    position: absolute;
    right: 12%;
    top: 36px;
    font-weight: bold;
    font-size: 1.8em;
    color: $input-red;
    background: none;
    border: 0;
    cursor: pointer;
    z-index: -1;
    transition: opacity .3s;
}

@keyframes resetBtnFadeIn {
    0% {
        opacity: 0;
        z-index: -1;
    }

    5% {
        opacity: 0;
        z-index: 3;
    }

    100% {
        opacity: .4;
        z-index: 3;
    }
}

span.v-reset-input-active:hover,
span.v-reset-input:hover {
    opacity: 1 !important;
}

.v-reset-input-active {
    opacity: .4;
    animation: resetBtnFadeIn .3s forwards;
    transition: opacity .3s;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    border-radius: 50px;
}

.contact {
    &__heading {
        text-align: center;
        font-size: 2.4em;
        margin: 0;
        margin-bottom: 20px;

        @media (max-width: $bp-mobile) {
            font-size: 2.2em;
            margin: 20px;
        }
    }

    &__heading-decoration {
        color: $lavender;
    }

    &__text {
        text-align: center;
        font-size: 2em;
        margin: 20px 0;

        @media (max-width: $bp-mobile) {
            font-size: 1.8em;
            margin: 20px;
        }
    }

    &__wrapper {
        max-width: 1140px;
        margin: 0 auto;
    }
}

.form {
    $self: &;
    margin-top: 60px;

    @media (max-width: $bp-deskop) {
        padding: 0 10px;
    }

    &__row {
        display: flex;
        overflow: hidden;
        min-height: 280px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 5px 15px -3px $dropshadow-grey-dark;
        margin: 40px 0 10px 0;

        @media (max-width: $bp-tablet) {
            display: block;
        }

        @media (max-width: $bp-mobile) {
            margin: 30px 0 10px 0;
        }
    }

    &__column-left {
        width: 33%;

        @media (max-width: $bp-deskop) {
            width: 28%;
        }

        @media (max-width: $bp-tablet) {
            width: 100%;
        }
    }

    &__column-left--gray-bg {
        background: $concrete;
    }

    &__column-left--blue-bg {
        background: $cornflower-blue-lighter;
    }

    &__title {
        font-weight: 600;
        font-size: 2.6em;
        line-height: 35px;
        letter-spacing: 0.1em;
        padding-left: 60px;
        margin: 50px 0;

        @media (max-width: $bp-deskop) {
            padding-left: 3vw;
            font-size: 2.2em;
        }

        @media (max-width: $bp-tablet) {
            line-height: 65px;
            padding-left: 55px;
            margin: 0;
            font-size: 2.6em;
            width: 100%;

            #{$self}__title-breakline {
                display: none;
            }
        }

        @media (max-width: $bp-mobile) {
            line-height: 30px;
            padding: 5px 0;
            padding-left: 7vw;
            margin: 0;
            font-size: 1.8em;

            #{$self}__title-breakline--display {
                display: block;
            }
        }
    }

    &__column-right {
        width: 67%;
        padding: 30px 0px 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        @media (max-width: $bp-deskop) {
            width: 72%;
        }

        @media (max-width: $bp-tablet) {
            width: 100%;
        }

        @media (max-width: $bp-mobile) {
            flex-direction: column;
            padding: 30px 0px 35px;

            #{$self}__fields {
                width: 100%;
            }

            #{$self}__textarea {
                min-height: 240px;
            }
        }
    }

    &__fields {
        position: relative;
        width: 45%;
        height: 80px;
        margin: 0;
    }

    &__text-content {
        width: 90%;
    }

    &__input,
    &__input-label,
    &__textarea,
    &__textarea-label {
        display: block;
        margin: 0 auto;
        font-size: 1.4em;
    }

    &__input-label,
    &__textarea-label {
        letter-spacing: 0.1em;
        font-weight: bold;
    }

    &__input,
    &__input-label {
        width: 85%;
    }

    &__textarea,
    &__textarea-label {
        max-width: 92%;
        width: 92%;
    }

    &__input,
    &__textarea {
        margin: 5px auto;
        border: 2px solid $mercury-light;
        box-sizing: border-box;
        border-radius: 30px;
        padding: 10px 34px 10px 15px;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6em;
    }

    &__input {
        height: 48px;
    }

    &__input:focus,
    &__textarea:focus {
        outline: none !important;
        border: 2px $gray solid;
        ;
    }

    &__textarea {
        min-height: 150px;
    }

    &__btn {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        font-size: 2.2em;
        padding: 10px 55px;
        border: 0;
        border-radius: 30px;
        color: $white;
        background: $tomato-dark;
        transition: background .3s;
        margin: 30px auto 0;

        @media (max-width: $bp-mobile) {
            margin-top: 20px;
            font-size: 1.8em;
            padding: 10px 45px;
        }
    }

    &__btn-emoji {
        display: inline-block;
        transition: transform .3s;
        transform: rotate(0deg);
    }

    &__btn:hover {
        background: $tomato-dark;

        #{$self}__btn-emoji {
            transform: rotate(-45deg);
        }
    }

    &__info {
        margin: 0;
        text-align: right;
        font-style: italic;
        font-size: 1.4em;
        color: $dusty-gray;
    }
}
</style>

<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light navbar-custom sticky-top">
            <b-navbar-brand href="/">
                <img class="navbar-logo" src="../src/assets/images/logo.png" alt="Nidm-terms Logo">
            </b-navbar-brand>
            <span class="community-name">NIDM Terminology</span>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>


<!--            <div class="container-fluid">-->

<!--                <b-navbar-nav class="float-right">-->
<!--                    <b-nav-item :to="{name: 'Landing', query: $route.query}" exact>Home</b-nav-item>-->
<!--                </b-navbar-nav>-->
<!--            </div>-->
        </nav>
        <router-view></router-view>
    </div>
</template>

<style >
    body {
        color: #3E434A;
        height: 100%;
        font-family: "Nunito Sans", sans-serif;
        position: relative;
        z-index: 0;
    }

    .bg-dark {
        background-color: #060e23!important;
        /*opacity: 0.5;*/
    }

    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .navbar-logo {
        height: 60px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .community-name {
        font-size: 28px;
        color: white;
    }

    .card-title {
        margin-bottom: .75rem;
        font-size: 2.5rem;
    }



    /*.card-img-top {*/
    /*    width: 100%;*/
    /*    height: 15vw;*/
    /*    object-fit: cover;*/
    /*}*/

    /*.v-parallax {*/
    /*    position: relative;*/
    /*    overflow: hidden;*/
    /*    z-index: 0;*/
    /*}*/

    /*.v-parallax__image-container {*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    z-index: 1;*/
    /*    contain: strict;*/
    /*}*/
    /*.v-parallax__image {*/
    /*    position: absolute;*/
    /*    bottom: 0;*/
    /*    left: 50%;*/
    /*    min-width: 100%;*/
    /*    min-height: 100%;*/
    /*    display: none;*/
    /*    transform: translate(-50%);*/
    /*    will-change: transform;*/
    /*    transition: opacity .3s cubic-bezier(.25,.8,.5,1);*/
    /*    z-index: 1;*/
    /*}*/
    /** {*/
    /*    background-repeat: no-repeat;*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*}*/
    /*.v-parallax__content {*/
    /*    color: #fff;*/
    /*    height: 100%;*/
    /*    z-index: 2;*/
    /*    position: relative;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: center;*/
    /*    padding: 0 1rem;*/
    /*}*/
    /*.container.fill-height {*/
    /*    align-items: center;*/
    /*    display: flex;*/
    /*}*/
    /*@media (min-width: 1264px) {*/
    /*.container {*/
    /*    max-width: 1185px;*/
    /*}*/
    /*}*/

    /*.container {*/
    /*    width: 100%;*/
    /*    padding: 12px;*/
    /*    margin-right: 2rem;*/
    /*    margin-left: 2rem;*/
    /*}*/
    /*.fill-height {*/
    /*    height: 100%;*/
    /*}*/
    /** {*/
    /*    background-repeat: no-repeat;*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*}*/


    .navbar-custom {
        background-color: #060e23!important;
    }
    .navbar-brand {
        font-size: 1.75rem;
    }
</style>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';

    Vue.use(BootstrapVue);

    export default {
        name: 'App',
        data() {
            return { terms: [],
                sourceList: [],
                interlexTerms: [],
                selectedTerm: null ,
                selectedFile: null,
                image: { backgroundImage: "url(https://vuejs.org/images/logo.png)" }
            }
        },
        methods: {
            doNext() {
                this.$router.push('/annotate');
            },
        },
    }
</script>


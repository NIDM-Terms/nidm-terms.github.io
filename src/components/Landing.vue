<template>
    <div>
<!--        <b-navbar toggleable="lg" type="dark" variant="dark">-->
<!--            <b-navbar-brand href="#">-->
<!--                <img class="navbar-logo" src="../assets/images/logo.png" alt="Nidm-terms Logo">-->
<!--            </b-navbar-brand>-->
<!--            <span class="community-name">NIDM Terminology</span>-->

<!--            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--            <b-collapse id="nav-collapse" is-nav>-->

<!--                &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--                <b-navbar-nav class="ml-auto">-->
<!--                    <b-nav-form>-->
<!--                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--                    </b-nav-form>-->
<!--                </b-navbar-nav>-->
<!--            </b-collapse>-->
<!--        </b-navbar>-->

<!--        <nav class="navbar navbar-default navbar-fixed-top">-->
<!--            <div class="container">-->
<!--                <div class="navbar-header">-->
<!--                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">-->
<!--                        <span class="sr-only">Toggle navigation</span>-->
<!--                        <span class="icon-bar"></span>-->
<!--                        <span class="icon-bar"></span>-->
<!--                        <span class="icon-bar"></span>-->
<!--                    </button>-->
<!--                    <a class="navbar-brand" href="#">Transparent to Solid Nav</a>-->
<!--                </div>-->
<!--                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">-->
<!--                    ANN-->
<!--                    <ul class="nav navbar-nav navbar-right">-->
<!--                        <li><a href="#">About</a></li>-->
<!--                        <li><a href="#">Link</a></li>-->
<!--                        <li><a href="#">Another Link</a></li>-->
<!--                    </ul>-->
<!--                </div>&lt;!&ndash;/.nav-collapse &ndash;&gt;-->
<!--            </div>-->
<!--        </nav>-->
        <div class="image">
            <h1 class="heading">Main Heading</h1>
            <p><button class="btn btn-large">Big Button</button></p>
        </div>
        <div class="about">
            <h2>Main Description</h2>
            <p>Roll on the floor purring your whiskers off intrigued by the shower burrow under covers, and play time, rub face on everything, intently sniff hand, or pelt around the house and up and down stairs chasing phantoms. Attack feet. Damn that dog shake treat bag under the bed drink water out of the faucet for lick butt love to play with owner's hair tie. Swat at dog give attitude.</p>
        </div>

    </div>
</template>

<style scoped>
    div::after, div::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .image {
        background-color: #490D40;
        background: url('../assets/images/nidm-terms-background.png') no-repeat center center;
        background-size: cover;
        height: 570px;
        /*margin-top: -80px;*/
    }
    .image .heading {
        color: white;
        text-align: center;
        padding-top: 200px;
    }
    .image p {
        text-align: center;
        padding: 20px 60px;
    }
    .image p .btn {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        padding: 10px;
        font-size: 1.2em;
    }
    .image p .btn:hover {
        color: #C57ED3;
        border-color: #C57ED3;
    }

    .navbar {
        height: 80px;
        background-color: transparent;
        border: none;
        color: white;
        z-index: 100;
        /*-webkit-transition: background-color 1s ease 0s;*/
        transition: background-color 1s ease 0s;
    }

    .navbar-default .navbar-brand {
        margin-top: 10px;
        color: white;
    }
    .navbar-default .navbar-brand:hover {
        color: #C57ED3;
        border: 1px solid #C57ED3;
    }
    .navbar-default .navbar-nav > li > a {
        color: white;
        margin: 10px 5px 5px 5px;
    }
    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:active, .navbar-default .navbar-nav > li > a:focus {
        color: #C57ED3;
        border: 1px solid #C57ED3;
    }
    .navbar-default .navbar-nav > li > a:visited {
        color: #C57ED3;
        text-decoration: none;
    }
    .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
        background-color: transparent;
        color: #C57ED3;
    }
    .navbar-default .navbar-toggle {
        border-color: #C57ED3;
    }
    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
        background-color: #490D40;
    }
    .navbar-default .navbar-toggle .icon-bar {
        color: #C57ED3;
        background-color: #C57ED3;
    }
    .navbar-default .navbar-collapse.collapse.in ul {
        background-color: #490D40;
    }

    /* Solid class attached on scroll past first section */
    .navbar.solid {
        background-color: #490D40;
        -webkit-transition: background-color 1s ease 0s;
        transition: background-color 1s ease 0s;
        box-shadow: 0 0 4px grey;
    }
    .navbar.solid .navbar-brand {
        color: #C57ED3;
        -webkit-transition: color 1s ease 0s;
        transition: color 1s ease 0s;
    }
    .navbar.solid .navbar-nav > li > a {
        color: #C57ED3;
        -webkit-transition: color 1s ease 0s;
        transition: color 1s ease 0s;
    }

    .about {
        background-color: #C57ED3;
        color: #490D40;
        height: 600px;
        text-align: center;
        margin-top: -20px;
    }
    .about h2 {
        padding-top: 220px;
    }
    .about p {
        padding: 20px 80px;
    }


</style>

<script>
    // export default {
    //     mounted() {
    //         // Transition effect for navbar
    //         $(window).scroll(function() {
    //             // checks if window is scrolled more than 500px, adds/removes solid class
    //             if(document.body.scrollTop() > 500) {
    //                 $('.navbar').addClass('solid');
    //             } else {
    //                 $('.navbar').removeClass('solid');
    //             }
    //         });
    //     }
    // }
</script>

<template>
    <div class="landing">
            <b-card
                overlay
                variant="banner-text"
                img-src="../assets/images/nidm-terms-background.png"
                img-alt="Card Image"
                text-variant="white"
                title="TERMINOLOGIES FOR THE NEUROIMAGING COMMUNITY"
                title-variant="card-card_title"
                class="text-center banner"
            >
                <b-button class="learn-btn">
                    <router-link class="card-link banner-text" :to="{ path: 'about' }">Learn More</router-link>
                </b-button>
<!--                <b-button class="learn-btn"> Learn More</b-button>-->
                <section id="section01" class="demo">
                    <button v-scroll-to="'#section02'"></button>
<!--                    <span><a v-scroll-to="'#section02'"></a></span>-->
                </section>
            </b-card>
        <div id="section02" class="about text-center">
            <div class="container">
                <h2>Welcome to the NIDM-Terms Community Site</h2>
                <p>This recently funded project is developing human neuroimaging domain-specific controlled vocabularies through community engagement and to provide tools for their use in BRAIN Initiative projects. We are currently setting up the community resources for the project.</p>
                <b-card-group deck>
                    <b-card title="Annotate">
                        <b-card-text>
                            <router-link class="card-link" :to="{ path: 'annotate' }">Annotate terms in a CSV/TSV file</router-link>
                        </b-card-text>
                    </b-card>
                    <b-card title="Explore terms">
                        <!--                        <a href="annotate" class="card-link">Explore the terminology</a>-->
                        <b-card-text>
                            <router-link class="card-link" :to="{ path: 'explore' }">Explore the terminology</router-link>
                        </b-card-text>
                    </b-card>

                    <b-card title="Add Term">
                        <b-card-text>
                            <router-link class="card-link" :to="{ path: 'create' }">Suggest a term for the NIDM Terminologies</router-link>
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);
    /*.card-deck-card_title {*/
    /*    font-size: 10rem;*/

    /*}*/
    /*.card-card_title {*/
    /*    top: 30px;*/
    /*}*/
    .banner-text {
        color: white;
    }

    .learn-btn {
        background: transparent;
        border-color: white;
    }

    .banner {
        /*top: -1px;*/
        border: 0 !important;

    }
    .custom-btn {
        position: absolute;
        top: 0;
        left: 48%;
    }

    .about {
        /*margin-top: 10px;*/
        background-color: rgba(199, 176, 211, 0.71);
        color: #490D40;
        height: 710px;
        text-align: center;
        /*margin-top: -20px;*/
    }
    .about h2 {
        padding-top: 20px;
    }
    .about p {
        padding: 20px 80px;
    }

    /*.demo a {*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*    z-index: 2;*/
    /*    display: inline-block;*/
    /*    -webkit-transform: translate(0, -50%);*/
    /*    transform: translate(0, -50%);*/
    /*    color: #fff;*/
    /*    font : normal 400 20px/1 'Josefin Sans', sans-serif;*/
    /*    letter-spacing: .1em;*/
    /*    text-decoration: none;*/
    /*    transition: opacity .3s;*/
    /*}*/
    /*.demo a:hover {*/
    /*    opacity: .5;*/
    /*}*/

    #section01 button {
        margin: 60px;
        background-color: transparent;
    }
    #section01 button {
        position: absolute;
        top: 60%;
        left: 50%;
        width: 46px;
        height: 46px;
        margin-left: -23px;
        border: 2px solid #100349;
        border-radius: 100%;
        box-sizing: border-box;
    }

    #section01 button::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 2px solid #100349;
        border-bottom: 2px solid #100349;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        box-sizing: border-box;
    }




</style>

<script>

</script>

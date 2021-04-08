<template>
    <div class="container">
        <div class="entry-header-content">
            <h2 class="entry-title"><strong>THE NEUROIMAGING DATA MODEL: FAIR DESCRIPTORS OF BRAIN INITIATIVE IMAGING EXPERIMENTS</strong></h2>
            <br>
            <h3>NIH RF1 MH120021</h3>
            <p class="text-justify">Reuse of existing neuroscience data relies, in part, on our ability to understand the experimental design and study data. Historically, a description of the experiment is provided in textual documents, which are often difficult to search, lack the details necessary for data reuse, and are hampered by differences in terminologies across related fields of neuroscience.  In this project we develop human neuroimaging domain-specific controlled vocabularies through community engagement and to provide tools for their use in BRAIN Initiative projects. The proposed work will provide a controlled vocabulary for use by the newer BRAIN Initiative projects, incorporating such annotations into the BIDS format (Figure 1) and hosted through the BRAIN Initiative archives such as OpenNeuro (Figure 2). This project will greatly improve the ability to search across and reuse datasets.</p>
            <section id="our-team">
                <h3><strong>Our Team</strong></h3>
                <ul class="member-list">
                    <li><a href="https://faculty.sites.uci.edu/davidkeator/">David Keator</a> – UC Irvine</li>
                    <li><a href="https://www.nmr.mgh.harvard.edu/user/6787">Karl Helmer</a> – MGH / Harvard</li>
                    <li><a href="https://profiles.ucsd.edu/jeffrey.grethe">Jeff Grethe</a> – UC San Diego</li>
                    <li><a href="https://www.mcgill.ca/neuro/jean-baptiste-poline-phd">Jean-Baptiste Poline</a> – McGill</li>
                    <li><a href="https://mcgovern.mit.edu/profile/satrajit-ghosh/">Satra Ghosh</a> – MIT</li>
                    <li><a href="https://www.faculty.uci.edu/profile.cfm?faculty_id=5812">Theo G.M. VanErp</a> – UC Irvine</li>
                    <li><a href="">Nazek Queder</a> - UC Irvine</li>
                    <li><a href="https://gablab.mit.edu/team/abraham-sanu-ann/">Sanu Ann Abraham</a> - MIT</li>
                </ul>

            </section>
            <section id="contribute">
                <div>
                    <h3><strong>Interested in contributing?</strong></h3>
                    <span>Visit our <a href="https://github.com/NIDM-Terms/terms">NIDM-Terms</a> GitHub site for further information!</span>
                </div>
            </section>
            <br>
            <img src="../assets/images/NIDM_Terms_Annotations_Figure1_1ff8a7b5dc7a7d1f.png" alt="NIDM_Figure1"/>
            <br>
            <br>
            <img src="../assets/images/NIDM_Terms_Annotations_Figure2_9dcb88e013764959.png" alt="NIDM_Figure2"/>
        </div>
<!--        <div id="scroll-content-section" tabindex="-1"></div>-->
<!--        <b-container>-->
<!--            <section>-->
<!--                <h2>THE NEUROIMAGING DATA MODEL: FAIR DESCRIPTORS OF BRAIN INITIATIVE IMAGING EXPERIMENTS</h2>-->
<!--                <br>-->
<!--                <h3>NIH RF1 MH120021</h3>-->
<!--                <span class="text-justify">Reuse of existing neuroscience data relies, in part, on our ability to understand the experimental design and study data. Historically, a description of the experiment is provided in textual documents, which are often difficult to search, lack the details necessary for data reuse, and are hampered by differences in terminologies across related fields of neuroscience.  In this project we develop human neuroimaging domain-specific controlled vocabularies through community engagement and to provide tools for their use in BRAIN Initiative projects. The proposed work will provide a controlled vocabulary for use by the newer BRAIN Initiative projects, incorporating such annotations into the BIDS format (Figure 1) and hosted through the BRAIN Initiative archives such as OpenNeuro (Figure 2). This project will greatly improve the ability to search across and reuse datasets.</span>-->
<!--            </section>-->
<!--            <br>-->
<!--            <section id="our-team">-->
<!--                <h3>Our Team</h3>-->
<!--                <ul class="member-list">-->
<!--                    <li><a href="https://faculty.sites.uci.edu/davidkeator/">David Keator</a> – UC Irvine</li>-->
<!--                    <li><a href="https://www.nmr.mgh.harvard.edu/user/6787">Karl Helmer</a> – MGH / Harvard</li>-->
<!--                    <li><a href="https://profiles.ucsd.edu/jeffrey.grethe">Jeff Grethe</a> – UC San Diego</li>-->
<!--                    <li><a href="https://www.mcgill.ca/neuro/jean-baptiste-poline-phd">Jean-Baptiste Poline</a> – McGill</li>-->
<!--                    <li><a href="https://mcgovern.mit.edu/profile/satrajit-ghosh/">Satra Ghosh</a> – MIT</li>-->
<!--                    <li><a href="https://www.faculty.uci.edu/profile.cfm?faculty_id=5812">Theo G.M. VanErp</a> – UC Irvine</li>-->
<!--                    <li><a href="">Nazek Queder</a> - UC Irvine</li>-->
<!--                    <li><a href="https://gablab.mit.edu/team/abraham-sanu-ann/">Sanu Ann Abraham</a> - MIT</li>-->
<!--                </ul>-->

<!--            </section>-->
<!--            <br>-->
<!--            <section id="contribute">-->
<!--                <div>-->
<!--                    <h3>Interested in contributing?</h3>-->
<!--                    <span>Visit our <a href="https://github.com/NIDM-Terms/terms">NIDM-Terms</a> GitHub site for further information!</span>-->
<!--                </div>-->
<!--            </section>-->
<!--        </b-container>-->
    </div>
</template>

<!--<script>-->
<!--    import _ from 'lodash';-->
<!--    import VueMarkdown from 'vue-markdown';-->
<!--    import Loader from '../Loader';-->
<!--    import config from '../../config';-->

<!--    export default {-->
<!--        name: 'Landing',-->
<!--        props: {-->
<!--            startButton: {-->
<!--                type: String,-->
<!--            },-->
<!--            selected_language: {-->
<!--                type: String,-->
<!--            },-->
<!--            contents: {-->
<!--                type: Object,-->
<!--            },-->
<!--        },-->
<!--        components: {-->
<!--            VueMarkdown,-->
<!--            Loader,-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                content: {},-->
<!--                consent: config.consent,-->
<!--            };-->
<!--        },-->
<!--        computed: {-->
<!--            reprotermsUrl() {-->
<!--                return this.$store.getters.getTermsUrl;-->
<!--            },-->
<!--            selectedContent() {-->
<!--                const landingC = _.filter(this.$store.state.landing, c => c['@language'] === this.selected_language);-->
<!--                if (_.isEmpty(landingC)) {-->
<!--                    return (this.$store.state.landing)[0]; // return default language content-->
<!--                }-->
<!--                return landingC[0];-->
<!--            },-->
<!--        },-->
<!--        methods: {-->
<!--            doBack() {-->
<!--                if (this.step > 1) {-->
<!--                    this.step -= 1;-->
<!--                }-->
<!--            },-->
<!--            doNext() {-->
<!--                if (this.consent) {-->
<!--                    // console.log(50, this.consent);-->
<!--                    // integrate docusign here-->
<!--                }-->
<!--                this.$router.push('/activities/0');-->
<!--            },-->
<!--        },-->
<!--    };-->
<!--</script>-->

<style scoped>
    @media (min-width: 1025px) {
        .entry-header-content {
            width: 70%;
            float: left;
            margin-left: calc(8.3333333333% - 3.3908333333% + 6.26%);
        }
    }

    p {
        margin: .75em 0 1.25em;
    }

    @media (min-width: 570px) {
        .entry-header-content p, section {
            font-size: 1.25rem;
            line-height: 2rem;
        }
    }

    .entry-header-content {
        font-weight: 500;
        padding-bottom: 40px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    .container {
        flex-direction: column;
        height: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        /*background-color: #009DAA;*/
    }

    #content {
        background-color: #009DAA;
    }
    /*.content {*/
    /*    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;*/
    /*    padding-top: 40px;*/
    /*    padding-bottom: 40px;*/
    /*}*/

    .member-list {
        list-style: none;
    }

    /*section:nth-child(odd) {*/
    /*    width: 100%;*/
    /*    background-color: rgba(238, 238, 238, 0.3);*/
    /*}*/

</style>
